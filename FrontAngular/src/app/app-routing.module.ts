import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarClienteComponent } from './views/cliente/editar-cliente/editar-cliente.component';

import { InserirClienteComponent } from './views/cliente/inserir-cliente/inserir-cliente.component';
import { ListarClienteComponent } from './views/cliente/listar-cliente/listar-cliente.component';
import { HomeComponent } from './views/home/home.component';
import { EditarPedidoComponent } from './views/pedido/editar-pedido/editar-pedido.component';
import { InserirPedidoComponent } from './views/pedido/inserir-pedido/inserir-pedido.component';
import { ListarPedidoComponent } from './views/pedido/listar-pedido/listar-pedido.component';
import { EditarProdutoComponent } from './views/produto/editar-produto/editar-produto.component';
import { InserirProdutoComponent } from './views/produto/inserir-produto/inserir-produto.component';
import { ListarProdutoComponent } from './views/produto/listar-produto/listar-produto.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'clientes',
    redirectTo: 'clientes/listar'
  },
  {
    path: 'clientes/listar',
    component: ListarClienteComponent
  },
  {
    path: 'clientes/pedido',
    component: ListarPedidoComponent
  },
  {
    path: 'clientes/novo',
    component: InserirClienteComponent
  },
  {
    path: 'clientes/editar/:cpf',
    component: EditarClienteComponent
  },
  {
    path: 'produtos',
    redirectTo: 'produtos/listar'
  },
  {
    path: 'produtos/listar',
    component: ListarProdutoComponent
  },
  {
    path: 'produtos/novo',
    component: InserirProdutoComponent
  },
  {
    path: 'produtos/editar/:id',
    component: EditarProdutoComponent
  },
  {
    path: 'pedidos',
    redirectTo: 'pedidos/listar'
  },
  {
    path: 'pedidos/listar',
    component: ListarPedidoComponent
  },
  {
    path: 'pedidos/novo',
    component: InserirPedidoComponent
  },
  {
    path: 'pedidos/editar/:id',
    component: EditarPedidoComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
