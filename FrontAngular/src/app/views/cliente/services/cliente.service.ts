import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from 'src/app/shared/models/cliente.model';

@Injectable({ providedIn: 'root' })
export class ClienteService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiServerUrl}/clientes`);
  }

  getCliente(clienteID: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiServerUrl}/clientes/${clienteID}`);
  }

  getClienteByCpf(cpf: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiServerUrl}/clientes/cpf/${cpf}`);
  }

  addCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiServerUrl}/clientes`, cliente);
  }

  updateCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.apiServerUrl}/clientes/${cliente.id}`, cliente);
  }

  deleteCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.apiServerUrl}/clientes/${cliente.id}`);
  }

}
