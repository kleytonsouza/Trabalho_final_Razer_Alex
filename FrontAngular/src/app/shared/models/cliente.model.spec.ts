import { Produto } from './produto.model';
import { ItemDoPedido } from './itemdopedido.model';
import { Cliente } from './cliente.model';
import { Pedido } from './pedido.model';

describe('ClienteModel', () => {

  let produto: Produto = new Produto(1,'produto 1');
  let cliente: Cliente = new Cliente(1,'04767743907','Sergio','Costa');
  let itemdopedido:ItemDoPedido = new ItemDoPedido(1,produto,cliente);
  let listadeitens:ItemDoPedido[] = [];
  listadeitens.push(itemdopedido);

  it('deve criar uma instancia de Pedido', () => {
    expect(new Pedido(new Date(),cliente,listadeitens)).toBeTruthy();
  });
});
