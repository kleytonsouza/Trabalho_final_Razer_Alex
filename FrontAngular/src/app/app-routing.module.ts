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
    redirectTo: 'clientes'
  },
  {
    path: 'clientes',
    component: ListarClienteComponent
  },
  {
    path: 'pedidos',
    component: ListarPedidoComponent
  },
  {
    path: 'clientes',
    component: InserirClienteComponent
  },
  {
    path: 'clientes/:id',
    component: EditarClienteComponent
  },
  {
    path: 'produtos',
    redirectTo: 'produtos'
  },
  {
    path: 'produtos',
    component: ListarProdutoComponent
  },
  {
    path: 'produtos',
    component: InserirProdutoComponent
  },
  {
    path: 'produtos/:id',
    component: EditarProdutoComponent
  },
  {
    path: 'pedidos',
    redirectTo: 'pedidos'
  },
  {
    path: 'pedidos',
    component: ListarPedidoComponent
  },
  {
    path: 'pedidos',
    component: InserirPedidoComponent
  },
  {
    path: 'pedidos/:id',
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
