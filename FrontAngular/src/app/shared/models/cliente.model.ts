
/*export class Cliente {
    static _id: number = 0;
    public id: number;  

    constructor(public cpf: string, public nome?: string, public sobrenome?: string, public pedido?: [Pedido] )
    { 
        this.id = Cliente._id++
    }  
}*/

import { Cliente } from "src/app/shared/models/cliente";

export class Pedido{
    
    constructor(public cliente: Cliente, public itemsPedido: itemDoPedido[]){
        this.cliente = cliente;
        this.itemsPedido = itemsPedido;      
    }

}

export class Produto{
    public  id!: number;

    constructor(public nome: string, public descricao: string){
        this.nome = nome;
        this.descricao = descricao;
    }
}

export class itemDoPedido{
    
    constructor( public produto: any, public quantidade: number){

        this.produto = produto;
        this.quantidade = quantidade;
    }

}