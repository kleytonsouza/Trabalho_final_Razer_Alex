import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';

imports: [
  HttpClientModule,
  HttpClient
]

import { Observable } from 'rxjs';
import { Produto } from "src/app/shared/models/produto.model";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


@Injectable({providedIn: 'root'})
export class ProdutoService {

  private apiServerUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }

  
  public listarTodos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.apiServerUrl}/v1/public/produto/listar`);
  }

   
  public inserir(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(`${this.apiServerUrl}/v1/public/cliente/produto`, produto);
  }

  public buscarPorNome(nome: String): Observable<Produto>{
    return this.http.get<Produto>(`${this.apiServerUrl}/v1/public/produto/${nome}`);
  }

  public buscarPorId(id: number): Observable<Produto>{
    return this.http.get<Produto>(`${this.apiServerUrl}/v1/public/produto/${id}`);
    
  }


  public atualizar(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(`${this.apiServerUrl}/v1/public/produto/atualizar`, produto);
  }

  public delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/v1/public/produto/deletar/${id}`);
  }

  public remover(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(`${this.apiServerUrl}/v1/public/produto/remover`, produto);
  }



}
