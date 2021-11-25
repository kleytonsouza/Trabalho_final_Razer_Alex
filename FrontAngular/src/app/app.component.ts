import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from './views/cliente/services/cliente.service';
import { Cliente } from "src/app/shared/models/cliente.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Clientes Pedidos';

  public clientes: Cliente[] = [];

  constructor(private clientesService: ClienteService) { }
  ngOnInit(): void {
    this.getClientes();
  }

  public getClientes(): void {
    this.clientesService.getClientes().subscribe(
      (response: Cliente[]) => {
        this.clientes = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
