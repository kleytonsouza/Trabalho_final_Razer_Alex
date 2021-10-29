import { Produto } from './produto.model';

describe('Produto', () => {
  it('deve criar uma instancia de Produto', () => {

    let produto: Produto = new Produto(1,'Produto id 1');
    expect(produto).toBeTruthy();
  });
});
