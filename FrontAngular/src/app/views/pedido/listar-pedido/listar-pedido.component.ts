import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/shared/models/cliente';
import { itemDoPedido, Pedido } from 'src/app/shared/models/cliente.model';
import { Produto } from 'src/app/shared/models/produto.model';
import { InserirPedidoComponent } from '../inserir-pedido/inserir-pedido.component';


@Component({
  selector: 'app-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.css']
})

export class ListarPedidoComponent implements OnInit {

   ELEMENT_DATA!: itemDoPedido[];

   produto_data: Produto[] = [ 
    new Produto (12345,"Produto 12345"), 
    new Produto (12346,"Produto 12346"), 
    new Produto (12347,"Produto 12347")]

    produto = new Produto (1,"Produto 12345")
    cliente = new Cliente(1,'12345678910','douglas','novaki')
    items: itemDoPedido[] = [new itemDoPedido(1,2,this.produto),new itemDoPedido(2,1,this.produto),new itemDoPedido(3,5,this.produto)];
    pedido = new Pedido(new Date(),this.cliente,this.items)
    


    displayedColumns = ['produto', 'quantidade'];
    dataSource = new MatTableDataSource<itemDoPedido>(this.ELEMENT_DATA);
    

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.pedido)
      this.getAllPedidos();
  }

  public getAllPedidos(){
      this.dataSource.data = this.items;
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
