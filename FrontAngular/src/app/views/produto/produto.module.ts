import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from './services/produto.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { InserirProdutoComponent } from './inserir-produto/inserir-produto.component';
import { RemoverProdutoComponent } from './remover-produto/remover-produto.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    EditarProdutoComponent,
    InserirProdutoComponent,
    RemoverProdutoComponent 
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProdutoService
  ]
})

export class ProdutoModule { }
