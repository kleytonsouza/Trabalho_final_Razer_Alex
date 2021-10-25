
/*export class Cliente {
    static _id: number = 0;
    public id: number;  

    constructor(public cpf: string, public nome?: string, public sobrenome?: string, public pedido?: [Pedido] )
    { 
        this.id = Cliente._id++
    }  
}*/

import { Cliente } from "./cliente";
import { ItemDoPedido } from "./itemdopedido.model";


export class Pedido{
    
    constructor(public date: Date | String,public cliente: Cliente,public itens: ItemDoPedido[]){
        this.date = date
        this.cliente = cliente;   
        this.itens = itens;
    }

}
