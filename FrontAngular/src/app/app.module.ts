import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteModule } from './views/cliente/cliente.module';
import { ProdutoModule } from './views/produto/produto.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './views/home/home.component';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { ListarClienteComponent } from './views/cliente/listar-cliente/listar-cliente.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClienteModule,
    ProdutoModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule, 
    FormsModule,
    MatSortModule,
    MatFormFieldModule, 
    MatDialogModule, 
    MatSelectModule, 
    MatPaginatorModule,
    MatTableModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
