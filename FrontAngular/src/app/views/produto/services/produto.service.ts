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
  
  getProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.apiServerUrl}/produtos`);
  }
   
  addProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(`${this.apiServerUrl}/produtos`, produto);
  }

  findById(id: number): Observable<Produto>{
    return this.http.get<Produto>(`${this.apiServerUrl}/produtos/${id}`);
  }

  updateProduto(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>(`${this.apiServerUrl}/produtos/${produto.id}`, produto);
  }

  deleteProduto(produto: Produto): Observable<Produto>{
    return this.http.delete<Produto>(`${this.apiServerUrl}/produtos/${produto.id}`);
  }

}
