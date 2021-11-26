import { TestBed } from '@angular/core/testing';
import { PedidoService } from './pedido.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { PEDIDOSLISTA } from 'src/app/tests/table_pedido';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { CLIENTESLISTA } from 'src/app/tests/table_clients';
import { PRODUTOSLISTA } from 'src/app/tests/table_produto';
import { ItemDoPedido } from 'src/app/shared/models/itemdopedido.model';
import { ITEMDOPEDIDOLISTA } from 'src/app/tests/table_item_do_pedido';


describe('PedidoService', () => {
  let service: PedidoService;
  let httpMock: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    TestBed.configureTestingModule({
      providers: [
        PedidoService,
        { provide: HttpClient, useValue: spy }
      ]
    });
    httpMock = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    service = TestBed.inject(PedidoService);
  });

  it('PedidoService should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getPedidos() deve retornar lista de Pedidos', (done: DoneFn) => {

    httpMock.get.and.returnValue(of(PEDIDOSLISTA));

    service.getPedidos().subscribe(
      pedidos => {
        expect(pedidos).toBeTruthy();
        done();
      }, done.fail
    );
    expect(httpMock.get.calls.count()).toBe(1, 'uma chamada realizada!!');
  });

  it('getPedido() pesquisa um pedido pelo id numero 2', (done: DoneFn) => {

    let id_pedido = 2;

    let pedidoEncontrado = PEDIDOSLISTA.find(function (elemento, index) {
      if (elemento.id === id_pedido) return true;
      return false;
    })

    httpMock.get.and.returnValue(of(pedidoEncontrado));

    service.getPedido(id_pedido).subscribe(
      pedido => {
        expect(pedido.id).toEqual(id_pedido, 'id esperado');;
        done();
      }, done.fail
    );
    expect(httpMock.get.calls.count()).toBe(1, 'uma chamada realizada!!');
  });

  it('getPedidoByCliente() pequisa os pedidos de um cliente', (done: DoneFn) => {
    
    let pedido_cliente = PEDIDOSLISTA[Math.floor(Math.random() * PEDIDOSLISTA.length)];
    let cliente_pedido = CLIENTESLISTA[pedido_cliente.cliente.id-1];

    let pedido_encontrado = PEDIDOSLISTA.find(function(elemento,index){
            if(elemento.cliente.id === cliente_pedido.id ) return true;
            return false;
          })

    httpMock.get.and.returnValue(of(pedido_encontrado));

    service.getPedidoByCliente(cliente_pedido.id).subscribe(
      pedido => {
        console.log(pedido, "melda");
        console.log(cliente_pedido.id, "meldaaa");
        expect(pedido).toBeTruthy();
        done();
      }, done.fail
    );
    expect(httpMock.get.calls.count()).toBe(1, 'uma chamada realizada!!');
  });

  it(`adicionarPedido() deve adicionar um novo pedido à lista`, (done: DoneFn) => {
    
    const pedido: Pedido = {id:66, data: new Date(), cliente:  CLIENTESLISTA[CLIENTESLISTA.length-1]};
    

    PEDIDOSLISTA.push(pedido);

    httpMock.post.and.returnValue(of(
      PEDIDOSLISTA.find(function (elemento, index) {
        if (elemento.id === 66) return true;
        return false;
      })
    ));

    service.adicionarPedido(pedido).subscribe(
      pedido => {
        expect(pedido.id).toEqual(66, 'id esperado do novo cliente');
        expect(pedido.cliente).toEqual(pedido.cliente, 'cliente esperado do novo pedido');
        done();
      }, done.fail
    );
    expect(httpMock.post.calls.count()).toBe(1, 'uma chamada realizada!!');
  });

  it(`adicionarItemDoPedido() deve adicionar um item a um pedido da lista`, (done: DoneFn) => {
    
    let pedido_to_add_item = PEDIDOSLISTA[Math.floor(Math.random() * PEDIDOSLISTA.length)];
    let produto_to_add_pedido = PRODUTOSLISTA[Math.floor(Math.random() * PRODUTOSLISTA.length)];

    const item_pedido: ItemDoPedido = {id: 66, quantidade: 12, pedido: pedido_to_add_item, produto: produto_to_add_pedido};    
    
    ITEMDOPEDIDOLISTA.push(item_pedido);

    httpMock.post.and.returnValue(of(
      PEDIDOSLISTA.find(function(elemento,index){
        if(elemento.id===66) return true;
        return false;
      })
    ));

    service.adicionarItemDoPedido(item_pedido).subscribe(
      pedido => {
        expect(item_pedido.id).toEqual(66, 'id esperado do novo cliente');
        done();
      }, done.fail
    );
    expect(httpMock.post.calls.count()).toBe(1, 'uma chamada realizada!!');
  });

  it(`deletePedido() deve deletar um pedido da lista`, (done: DoneFn) => {
    
    let pedido_deleted = PEDIDOSLISTA[Math.floor(Math.random() * PEDIDOSLISTA.length)];
    let pedido_id = pedido_deleted.id;

    let PEDIDOS_DELETED_LISTA = PEDIDOSLISTA.filter(obj => obj !== pedido_deleted);

    httpMock.delete.and.returnValue(of(pedido_deleted));

    service.deletarPedido(pedido_deleted.id).subscribe(
      pedido => {
        console.log(pedido, "asdf")
        expect(PEDIDOS_DELETED_LISTA).not.toContain(pedido_deleted);
        done();
      }, done.fail
    );

  });

  it(`updatePedido() deve atualizar um pedido da lista`, (done: DoneFn) => {

    let atualizarPedido = PEDIDOSLISTA[PEDIDOSLISTA.length - 1];

    atualizarPedido.cliente = CLIENTESLISTA[Math.floor(Math.random() * CLIENTESLISTA.length)];
    PEDIDOSLISTA[3].cliente = atualizarPedido.cliente;

    httpMock.put.and.returnValue(of(
      PEDIDOSLISTA.find(function (elemento, index) {
        if (elemento.id === atualizarPedido.id) return true;
        return false;
      })
    ));

    //service.updatePedido(atualizarProduto).subscribe(
    //produto => {
    expect("para implementar").toEqual("para implementar", 'descrição esperada do novo produto');
    done();
    //}, 
    done.fail
    //);
  });

});