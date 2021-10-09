import { Injectable } from '@angular/core';

import { Cliente } from 'src/app/shared/models/cliente.model';

const LS_CHAVE: string = "clientes";


@Injectable({
  providedIn: 'root'
})


export class ClienteService {
  
  constructor() { }

  listarTodos(): Cliente[]{
    const clientes = localStorage[LS_CHAVE];
    return clientes ? JSON.parse(clientes) : [];
  }

   
  inserir(cliente: Cliente): void{
   
    const clientes = this.listarTodos();
    
    clientes.push(cliente);
    
    localStorage[LS_CHAVE] = JSON.stringify(clientes);
  }

  buscarPorId(cpf: string): Cliente{
    
    const clientes: Cliente[] = this.listarTodos();

    return clientes.find(cliente => cliente.cpf === cpf)!;
    
  }

  atualizar(cliente: Cliente): void{
    
    const clientes: Cliente[] = this.listarTodos();
   
    clientes.forEach( (obj, index, objs) => {
      if(cliente.id === obj.id){
        objs[index] = cliente
      }
    });
    
    localStorage[LS_CHAVE] = JSON.stringify(clientes);
  }

  remover(cpf: string): void{
   
    let clientes: Cliente[] = this.listarTodos();
    
    clientes = clientes.filter(cliente => cliente.cpf !== cpf);

    localStorage[LS_CHAVE] = JSON.stringify(clientes)
  }

}
