
/*export class Cliente {
    static _id: number = 0;
    public id: number;  

    constructor(public cpf: string, public nome?: string, public sobrenome?: string, public pedido?: [Pedido] )
    { 
        this.id = Cliente._id++
    }  
}*/

import { ItemDoPedido } from "./itemdopedido.model";

export interface Cliente{
    id: number;
    cpf: string;
    nome: string;
    sobrenome: string;
}
export class Cliente {
    constructor(
      public  id: number,
      public cpf: string,
      public nome: string,
      public sobrenome: string){
    }
}


export class Pedido{
    
    constructor(public date: Date | String,public cliente: Cliente,/*public itemDoPedido: ItemDoPedido[]*/){
        this.date = date
        this.cliente = cliente;   
       // this.itemDoPedido = itemDoPedido;  
    }

}
