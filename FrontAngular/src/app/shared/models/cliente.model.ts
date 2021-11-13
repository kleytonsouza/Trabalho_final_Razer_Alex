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
        public sobrenome: string
    ){}

   
}

export class Pedido{
    constructor(
        public data: Date,
        public cliente: Cliente,
    ){
        this.data = data
        this.cliente = cliente;
    }
}