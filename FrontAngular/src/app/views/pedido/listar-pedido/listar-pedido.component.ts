import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
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

    cliente = new Cliente(1,'11111111111','douglas','novaki')
    items: ItemDoPedido[] = [];
    pedido = new Pedido(new Date(),this.cliente,this.items)
    


    displayedColumns = ['produto', 'quantidade'];
    dataSource = new MatTableDataSource<ItemDoPedido>(this.ELEMENT_DATA);
    

  constructor(private pedidoService: PedidoService,public dialog: MatDialog) { }

  ngOnInit(): void {
      this.getAllPedidos();
  }

  public getAllPedidos(){

    this.pedidoService.getAllItemDoPedido().subscribe(
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
