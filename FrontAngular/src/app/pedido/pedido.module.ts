import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pedido } from '../shared';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../cliente/services/cliente.service';
import { ListarPedidoComponent } from './listar-pedido/listar-pedido.component';
import { InserirPedidoComponent } from './inserir-pedido/inserir-pedido.component';
import { EditarPedidoComponent } from './editar-pedido/editar-pedido.component';



const LS_CHAVE: string = "pedidos";

@NgModule({
  declarations: [
    ListarPedidoComponent,
    InserirPedidoComponent,
    EditarPedidoComponent,
  ],
  imports: [
    CommonModule
  ]
})

export class ListarPedidoModule {


  constructor(private route: ActivatedRoute, private clienteService: ClienteService){}

  ngOnInit(): void {
  
    let cpf = this.route.snapshot.params['cpf'];
  
    const clienteOrdens = this.clienteService.buscarPorId(cpf);

    if ( clienteOrdens !== undefined)
      this.listarTodos();
    else
      throw new Error ("Cliente não encontrado: cpf = " + cpf);
  }

  listarTodos(): Pedido[]{
    const pedidos = localStorage[LS_CHAVE];
    return pedidos ? JSON.parse(pedidos) : [];
  }

  inserir(pedido: Pedido): void{

      const pedidos = this.listarTodos();
      
      pedidos.push(pedido);
      
      localStorage[LS_CHAVE] = JSON.stringify(pedidos);
  

  }


 }
