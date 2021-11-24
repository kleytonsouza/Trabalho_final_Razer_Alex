import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarItemdopedidoComponent } from './listar-itemdopedido/listar-itemdopedido.component';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    ListarItemdopedidoComponent
  ],
  imports: [
    CommonModule,
    MatListModule
  ]
})
export class ItemdopedidoModule { }
