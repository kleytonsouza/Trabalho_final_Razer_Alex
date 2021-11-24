import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { ItemDoPedido } from 'src/app/shared/models/itemdopedido.model';
import { Produto } from 'src/app/shared/models/produto.model';
import { ClienteService } from '../../cliente/services/cliente.service';
import { InserirPedidoComponent } from '../inserir-pedido/inserir-pedido.component';
import { PedidoService } from '../services/pedido.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.css'],
})
export class ListarPedidoComponent implements OnInit {
  ELEMENT_DATA!: Pedido[];
  produto_data: Produto[] = [];
  produto!: Produto;
  cliente!: Cliente;
  clienteId!: number;
  items: ItemDoPedido[] = [];
  dataSource = new MatTableDataSource<Pedido>(this.ELEMENT_DATA);
  pedidos!: Pedido[];

  displayedColumns = ['produto', 'quantidade', 'op'];
  //dataSource = new MatTableDataSource<ItemDoPedido>(this.ELEMENT_DATA);

  constructor(
    private pedidoService: PedidoService,
    private clienteService: ClienteService,
    public dialog: MatDialog,
    public route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => (this.clienteId = params['id']));
  }

  ngOnInit(): void {
    this.getAllPedidos();
    this.getCliente();
  }


  getPedidos(): void{
    this.pedidoService.getPedidos().subscribe(
      (response: Pedido[])      => { this.pedidos = response },
      (error: HttpErrorResponse) => { alert(error.message)}
    );
  }


  //public getPedidoByCliente(){
  //  this.pedidoService.getPedidos(this.cliente.id).subscribe(
  //    pedidos => {
  //      this.pedidos = pedidos
  //      this.dataSource.data = pedidos
  //    }
  //  )
  //}


  public getAllPedidos() {
    this.pedidoService.getPedidos().subscribe(
      pedidos => {
        this.pedidos = pedidos
        this.dataSource.data = pedidos
      }
    )
  }

  public getCliente(){
    this.clienteService.getCliente(this.clienteId).subscribe((ite) => {
      this.cliente = ite;
    })
  }

  inserirPedido() {
    const dialogRef = this.dialog.open(InserirPedidoComponent, {
      minWidth: '300px',
      minHeight: '300px',
      panelClass: 'custom-dialog',
      data: {id: this.cliente.id},
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      this.getAllPedidos();
    });
  }

  deletarPedido(pedido: Pedido) {
    if (window.confirm('Tem certeza que voce quer deletar este produto ?')) {
      this.pedidoService.deletarPedido(pedido.id).subscribe((result) => {
        this.getAllPedidos();
      });
    }
  }
}
