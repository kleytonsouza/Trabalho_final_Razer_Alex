import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Cliente, Pedido } from 'src/app/shared/models/cliente.model';
import { ItemDoPedido } from 'src/app/shared/models/itemdopedido.model';
import { Produto } from 'src/app/shared/models/produto.model';
import { InserirPedidoComponent } from '../inserir-pedido/inserir-pedido.component';
import { PedidoService } from '../services/pedido.service';


@Component({
  selector: 'app-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.css']
})

export class ListarPedidoComponent implements OnInit {

   ELEMENT_DATA!: ItemDoPedido[];

   produto_data: Produto[] = [ 
    new Produto (12345,"Produto 12345"), 
    new Produto (12346,"Produto 12346"), 
    new Produto (12347,"Produto 12347")]

    produto = new Produto (1,"Produto 12345")
    cliente = new Cliente(1,'12345678910','douglas','novaki')
    items: ItemDoPedido[] = [];
    pedido = new Pedido(new Date(),this.cliente)
    clienteId!: number;


    displayedColumns = ['produto', 'quantidade'];
    dataSource = new MatTableDataSource<ItemDoPedido>(this.ELEMENT_DATA);
    

  constructor(private pedidoService: PedidoService,public dialog: MatDialog, public route: ActivatedRoute) { 
    this.route.params.subscribe(params => this.clienteId = params['id']);
  }

  ngOnInit(): void {
    console.log(this.pedido)
      this.getAllPedidos();
  }

  public getAllPedidos(){

    this.pedidoService.getAllItemDoPedido(this.clienteId).subscribe(
      ite => {
        this.dataSource.data = ite
      }
     );
    }
    inserirPedido() {
      const dialogRef = this.dialog.open(InserirPedidoComponent,{
        minWidth: '300px',
        minHeight: '300px',
        panelClass: 'custom-dialog', }
        );
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        this.getAllPedidos();
  
      });
    }


}
