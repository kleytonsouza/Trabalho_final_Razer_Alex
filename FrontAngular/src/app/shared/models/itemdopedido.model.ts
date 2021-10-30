import { Cliente } from "./cliente.model";

export interface ItemDoPedido{
  quantidade: number;
  produto: any;
  cliente: Cliente,
  id?: any;

}

export class ItemDoPedido {
  constructor(
    public quantidade: number,
    public produto: any,
    public cliente: Cliente,
    public id?:any,
  ){}

}
