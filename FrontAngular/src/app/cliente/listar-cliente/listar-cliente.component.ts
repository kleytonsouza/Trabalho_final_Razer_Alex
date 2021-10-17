import { Component, OnInit } from '@angular/core';

import { ClienteService } from '../services/cliente.service';
import { Cliente } from "src/app/cliente/cliente";
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})

export class ListarClienteComponent  {

 




  public clientes: Cliente[] = [];

  constructor(private clientesService: ClienteService){}
  ngOnInit(): void {
    this.getClientes();
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



}
