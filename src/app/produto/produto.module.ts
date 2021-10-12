import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { InserirProdutoComponent } from './inserir-produto/inserir-produto.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProdutoService } from './services/produto.service';



@NgModule({
  declarations: [
    ListarProdutoComponent,
    EditarProdutoComponent,
    InserirProdutoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    ProdutoService
  ]
})
export class ProdutoModule { }
