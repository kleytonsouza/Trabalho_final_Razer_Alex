import { Injectable } from '@angular/core';
import { Cliente, Pedido } from 'src/app/shared';

const LS_CHAVE: string = "pedidos";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  listarTodos(cliente: Cliente): Pedido[]{
    const pedidos = localStorage[LS_CHAVE];
    return pedidos ? JSON.parse(pedidos) : [];

  }

  inserir(cliente: Cliente, pedido: Pedido): void{
    const pedidos = this.listarTodos(cliente);
    //pedidos.push(pedidos);


  }

}
