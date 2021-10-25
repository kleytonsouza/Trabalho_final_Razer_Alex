import { Produto } from './produto.model';
import { ItemDoPedido } from './itemdopedido.model';
import { Pedido } from './cliente.model';
import { Cliente } from './cliente';

/*import { Cliente } from './cliente.model';

describe('Cliente', () => {
  it('should create an instance', () => {
    expect(new Cliente()).toBeTruthy();
  });
});
*/

test('testa cliente.model', () => {

  let cliente = new Cliente(1,"04767743907","Sergio","Costa");
  let data = new Date();
  let produto = new Produto(1,"Produto");
  let item = new ItemDoPedido(1,produto,cliente);
  let itens = [
    item = new ItemDoPedido(1,produto,cliente)
  ];

  expect(new Pedido(data,cliente,itens)).toBeDefined();;

});

