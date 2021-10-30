import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from 'src/app/shared/models/cliente';

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

  public addCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.apiServerUrl}/v1/public/cliente/salvar`, cliente);
  }

  public updateCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.apiServerUrl}/v1/public/cliente/atualizar`, cliente);
  }

  public deleteCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.apiServerUrl}/v1/public/cliente/remover`, cliente);
  }

}
