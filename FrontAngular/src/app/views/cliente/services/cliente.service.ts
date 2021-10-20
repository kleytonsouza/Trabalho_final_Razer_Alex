import { Injectable } from '@angular/core';


import { HttpClient, HttpClientModule } from '@angular/common/http';

imports: [
  HttpClientModule,
  HttpClient
]

import { Observable } from 'rxjs';
import { Cliente } from "src/app/shared/models/cliente";
import { environment } from 'src/environments/environment';

const LS_CHAVE: string = "clientes";


@Injectable({providedIn: 'root'})
export class ClienteService {
  
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.apiServerUrl}/v1/public/cliente/listar`);
  }


  public getCliente(clienteID: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.apiServerUrl}/v1/public/cliente/${clienteID}`);
  }

  public adicionarCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.apiServerUrl}/v1/public/cliente/salvar`, cliente);
  }


  public atualizarCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.apiServerUrl}/v1/public/cliente/atualizar`, cliente);
  }


  public removerCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.apiServerUrl}/v1/public/cliente/remover`, cliente);
  }


  public deletarCliente(clienteID: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/v1/public/cliente/deletar/${clienteID}`);
  }



}
