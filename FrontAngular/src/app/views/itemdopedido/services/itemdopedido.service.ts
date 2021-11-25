import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemDoPedido } from 'src/app/shared/models/itemdopedido.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemdopedidoService {
  private apiServerUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }

  public getPedidoByCliente(pedido_id: number): Observable<ItemDoPedido[]> {
    return this.http.get<ItemDoPedido[]>(`${this.apiServerUrl}/itemdopedido/pedido/${pedido_id}`);
  }

  public getItemByProduto(produtoID: number): Observable<ItemDoPedido[]> {
    return this.http.get<ItemDoPedido[]>(`${this.apiServerUrl}/itemdopedido/produto/${produtoID}`);
  }

  public getItemByPedido(produtoID: number): Observable<ItemDoPedido[]> {
    return this.http.get<ItemDoPedido[]>(`${this.apiServerUrl}/itemdopedido/pedido/${produtoID}`);
  }
  
}
