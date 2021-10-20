import { Component, OnInit } from '@angular/core';

import { ClienteService } from '../services/cliente.service';
import { Cliente } from "src/app/shared/models/cliente";
import { HttpErrorResponse } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { InserirClienteComponent } from '../inserir-cliente/inserir-cliente.component';
import { EditarClienteComponent } from '../editar-cliente/editar-cliente.component';
import { RemoverClienteComponent } from '../remover-cliente/remover-cliente.component';



@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})

export class ListarClienteComponent  {

 

  ELEMENT_DATA!: Cliente[];
  displayedColumns = ['id', 'cpf','nome', 'sobrenome', 'op'];
  dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);
  clientes!: Cliente[];

  
  constructor(private clientesService: ClienteService, public dialog: MatDialog){}


  ngOnInit(): void {
   // this.getClientes();
    this.getAllClientes();
  }


  editarUsuario(cliente : Cliente) {
    const dialogRef = this.dialog.open(EditarClienteComponent,{
      minWidth: '300px',
      minHeight: '300px',
      data: cliente }
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getAllClientes();
    });
  }


  inserirUsuario() {
    const dialogRef = this.dialog.open(InserirClienteComponent,{
      minWidth: '300px',
      minHeight: '300px' }
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getAllClientes();

    });
  }


  deletarUsuario(cliente : Cliente) {
    const dialogRef = this.dialog.open(RemoverClienteComponent,{
      minWidth: '300px',
      minHeight: '300px',
      data: cliente }
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getAllClientes();
    });
  }


  public getClientes(): void{
    this.clientesService.getClientes().subscribe(
      (response: Cliente[]) =>{
        this.clientes = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getAllClientes(){
    this.clientesService.getClientes().subscribe(
    clientes => {
      this.clientes = clientes
      this.dataSource.data = clientes
    }
   );}


 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
