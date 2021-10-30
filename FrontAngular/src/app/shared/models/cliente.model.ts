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
        public date: Date | String,
        public cliente: Cliente,
        public itens: ItemDoPedido[]
    ){
        this.date = date
        this.cliente = cliente;   
        this.itens = itens;
    }
}