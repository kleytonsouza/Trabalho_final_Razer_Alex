import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListarPedidoComponent } from './listar-pedido/listar-pedido.component';
import { InserirPedidoComponent } from './inserir-pedido/inserir-pedido.component';
import { EditarPedidoComponent } from './editar-pedido/editar-pedido.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatLineModule, MatNativeDateModule, MatOptionModule, MatOptionSelectionChange } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { PedidoService } from './services/pedido.service';
import { MatSelectModule } from '@angular/material/select';
import {MatListModule} from '@angular/material/list'
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ListarPedidoComponent,
    InserirPedidoComponent,
    EditarPedidoComponent,
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
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatLineModule,
    MatListModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [
    PedidoService
  ]
})

export class PedidoModule { }
