import { Cliente } from "./cliente.model";
import { Pedido } from "./pedido.model";
import { Produto } from "./produto.model";

export interface ItemDoPedido{
  quantidade: number;
  produto: Produto;
  pedido: Pedido,
  id?: number;

}

export class ItemDoPedido {
  constructor(
    public quantidade: number,
    public produto: Produto,
    public pedido: Pedido,
    public id?: number,
  ){}

}
