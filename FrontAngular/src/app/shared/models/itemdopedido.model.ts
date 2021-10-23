import { Pedido } from ".";

export interface ItemDoPedido{
  
    quantidade: number;
    produto: any;
    pedido: Pedido,
    id?: any;
}
export class ItemDoPedido {
    constructor(
      
      public quantidade: number,
      public produto: any,
      public pedido: Pedido,
      public id?:any,
      ){
    }
}
