import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { Produto } from 'src/app/shared/models/produto.model';
import { ItemDoPedido } from 'src/app/shared/models/itemdopedido.model';

//imports: [HttpClientModule, HttpClient];

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(
      `${this.apiServerUrl}/pedidos`
    );
  }

  public getPedido(pedidoID: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.apiServerUrl}/pedidos/${pedidoID}`);
  }

  public adicionarPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(`${this.apiServerUrl}/pedidos`,  pedido);
  }

  public adicionarItemDoPedido(item: ItemDoPedido): Observable<ItemDoPedido> {
    return this.http.post<ItemDoPedido>(`${this.apiServerUrl}/itemdopedido`, item );
  }

  public getAllItemDoPedido(id: number): Observable<ItemDoPedido[]> {
    return this.http.get<ItemDoPedido[]>(`${this.apiServerUrl}/pedidos/${id}`);
  }

  public atualizarPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(`${this.apiServerUrl}/pedidos/${pedido.id}`, pedido);
  }

  public removerPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(`${this.apiServerUrl}/v1/public/pedido/remover`, pedido);
  }

  public removerItemPedido(item: ItemDoPedido): Observable<ItemDoPedido> {
    return this.http.post<ItemDoPedido>(`${this.apiServerUrl}/v1/public/itemDoPedido/remover`, item);
  }

  public deletarPedido(pedidoID: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/v1/public/pedido/deletar/${pedidoID}` );
  }

  public getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiServerUrl}/v1/public/produto/listar`);
  }
}
