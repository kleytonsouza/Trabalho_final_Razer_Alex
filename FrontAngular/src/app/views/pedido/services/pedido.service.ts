import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { ItemDoPedido } from 'src/app/shared/models/itemdopedido.model';

imports: [HttpClientModule, HttpClient];

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.apiServerUrl}/pedidos`);
  }

  public getPedido(pedidoID: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.apiServerUrl}/pedidos/${pedidoID}`);
  }

  public getPedidoByCliente(clienteID: number): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.apiServerUrl}/pedidos/cliente/${clienteID}`);
  }

  public adicionarPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(`${this.apiServerUrl}/pedidos`, pedido);
  }

  public adicionarItemDoPedido(item: ItemDoPedido): Observable<ItemDoPedido> {
    return this.http.post<ItemDoPedido>(`${this.apiServerUrl}/itemdopedido`, item);
  }

  public deletarPedido(pedidoID: number): Observable<Pedido> {
    return this.http.delete<Pedido>(`${this.apiServerUrl}/pedidos/${pedidoID}`);
  }

}
