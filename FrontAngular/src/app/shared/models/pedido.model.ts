import { ItemDoPedido } from "./itemdopedido.model";
import { Cliente } from ".";


export class Pedido{

  constructor(public date: Date | String,public cliente: Cliente,public itens: ItemDoPedido[]){
        this.date = date
        this.cliente = cliente;
        this.itens = itens;
    }
  }
