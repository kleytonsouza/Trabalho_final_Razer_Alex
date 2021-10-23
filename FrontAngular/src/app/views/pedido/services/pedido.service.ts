import { Injectable } from '@angular/core';


import { HttpClient, HttpClientModule } from '@angular/common/http';

imports: [
  HttpClientModule,
  HttpClient
]

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pedido } from 'src/app/shared';
import { Produto } from 'src/app/shared/models/produto.model';
import { ItemDoPedido } from 'src/app/shared/models/itemdopedido.model';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getPedidos(): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.apiServerUrl}/v1/public/pedido/listar`);
  }


  public getPedido(pedidoID: number): Observable<Pedido>{
    return this.http.get<Pedido>(`${this.apiServerUrl}/v1/public/pedido/${pedidoID}`);
  }

  public adicionarPedido(pedido: Pedido): Observable<Pedido>{
    return this.http.post<Pedido>(`${this.apiServerUrl}/v1/public/pedido/salvar`, pedido);
  }

  public adicionarItemDoPedido(item: ItemDoPedido): Observable<ItemDoPedido>{
    
    return this.http.post<ItemDoPedido>(`${this.apiServerUrl}/v1/public/itemDoPedido/salvar`, item);
  }


  public atualizarPedido(pedido: Pedido): Observable<Pedido>{
    return this.http.post<Pedido>(`${this.apiServerUrl}/v1/public/pedido/atualizar`, pedido);
  }


  public removerPedido(pedido: Pedido): Observable<Pedido>{
    return this.http.post<Pedido>(`${this.apiServerUrl}/v1/public/pedido/remover`, pedido);
  }


  public deletarPedido(pedidoID: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/v1/public/pedido/deletar/${pedidoID}`);
  }

  public getProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.apiServerUrl}/v1/public/produto/listar`);
  }

}
