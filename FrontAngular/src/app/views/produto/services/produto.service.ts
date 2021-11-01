import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  
  listAll(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.apiServerUrl}/v1/public/produto/listar`);
  }
   
  add(produto: Produto): Observable<Produto>{
    console.log(produto)
    return this.http.post<Produto>(`${this.apiServerUrl}/v1/public/produto/salvar`, produto);
  }

  findById(id: number): Observable<Produto>{
    return this.http.get<Produto>(`${this.apiServerUrl}/v1/public/produto/${id}`);
  }

  update(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(`${this.apiServerUrl}/v1/public/produto/atualizar`, produto);
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/v1/public/produto/deletar/${id}`);
  }

}
