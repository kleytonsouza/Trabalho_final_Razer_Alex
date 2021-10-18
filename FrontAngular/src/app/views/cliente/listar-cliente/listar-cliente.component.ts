import { Component, OnInit } from '@angular/core';

import { ClienteService } from '../services/cliente.service';
import { Cliente } from "src/app/shared/models/cliente";
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})

export class ListarClienteComponent  {

 

  dataSource!: Cliente[];
  displayedColumns = ['id', 'cpf','nome', 'sobrenome'];
  

   clientes!: Cliente[];

  constructor(private clientesService: ClienteService){}




  ngOnInit(): void {
   // this.getClientes();
    this.getAllClientes();
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
    }
   );

  }



}
