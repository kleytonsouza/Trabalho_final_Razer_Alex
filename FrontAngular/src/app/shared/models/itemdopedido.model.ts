import { Pedido } from ".";

export interface ItemDoPedido{
  
    quantidade: number;
    produto: any;
    id?: any;
}
export class ItemDoPedido {
    constructor(
      
      public quantidade: number,
      public produto: any,
      public id?:any,
      ){
    }
}
