import { Injectable } from '@angular/core';
import { Produto } from 'src/app/shared';
const LS_CHAVE: string = "produtos";
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  
  
  constructor() { }

  listarTodos(): Produto[]{
    const produtos = localStorage[LS_CHAVE];
    return produtos ? JSON.parse(produtos) : [];
  }

   
  inserir(produto: Produto): void{
   
    const produtos = this.listarTodos();
    
    produtos.push(produto);
    
    localStorage[LS_CHAVE] = JSON.stringify(produtos);
  }

  buscarPorId(id: number): Produto{
    
    const produtos: Produto[] = this.listarTodos();

    return produtos.find(produto => produto.id_produto === id)!;
    
  }

  atualizar(produto: Produto): void{
    
    const produtos: Produto[] = this.listarTodos();
    console.log(produto)
   
    produtos.forEach( (obj, index, objs) => {
      if(produto.id_produto === obj.id_produto){
        objs[index] = produto
      }
    });
    
    localStorage[LS_CHAVE] = JSON.stringify(produtos);
  }

  remover(id: number): void{
   
    let produtos: Produto[] = this.listarTodos();
    
    produtos = produtos.filter(produto => produto.id_produto !== id);

    localStorage[LS_CHAVE] = JSON.stringify(produtos)
  }



}