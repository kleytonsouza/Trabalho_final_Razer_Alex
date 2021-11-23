import { Cliente } from "./cliente.model";

export interface Pedido{
    id: number;
    data: Date,
    cliente: Cliente
}

export class Pedido{
    constructor(public id: number, public data: Date, public cliente: Cliente){}
}