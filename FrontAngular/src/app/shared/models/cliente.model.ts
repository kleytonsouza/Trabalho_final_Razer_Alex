
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
    
    constructor(public date: Date,public cliente: Cliente, public itemsPedido: itemDoPedido[]){
        this.date = date
        this.cliente = cliente;
        this.itemsPedido = itemsPedido;      
    }

}

export class Produto{
    public  id!: number;

  //  constructor(public id: number, public descricao: string){this.id = id;}
    constructor(public nome: string, public descricao: string){
        this.nome = nome;
        this.descricao = descricao;
    }
}

export class itemDoPedido{
    
    constructor(public id: number, public quantidade: number, public produto: any,){
        this.id = id;
                this.quantidade = quantidade;
        this.produto = produto;

    }

}