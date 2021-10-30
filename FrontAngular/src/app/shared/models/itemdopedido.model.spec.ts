import { Cliente } from './cliente.model';
import { Produto } from './produto.model';
import { ItemDoPedido } from './itemdopedido.model';

describe('Itemdopedido', () => {
  it('deve criar uma instancia de ItemDoPedido', () => {


    let produto: Produto = new Produto(1,'Produto 1');
    let cliente: Cliente = new Cliente(1,'04767743907','sergio','costa');

    let itemdopedido: ItemDoPedido = new ItemDoPedido(1,produto,cliente);

    expect(itemdopedido).toBeTruthy();
  });
});
