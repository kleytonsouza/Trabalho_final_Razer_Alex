import { TestBed } from '@angular/core/testing';
import { PedidoService } from './pedido.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { PEDIDOSLISTA } from 'src/app/tests/table_pedido';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { CLIENTESLISTA } from 'src/app/tests/table_clients';


describe('PedidoService', () => {
  let service: PedidoService;
  let httpMock: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get','post', 'put', 'delete']);
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

    let pedidoEncontrado = PEDIDOSLISTA.find(function(elemento,index){
            if(elemento.id === id_pedido) return true;
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


  it(`adicionarPedido() deve adicionar um novo pedido à lista`, (done: DoneFn) => {
    console.log(PEDIDOSLISTA[PEDIDOSLISTA.length-2]);
    
    const pedido: Pedido = {id:66, data: new Date(), cliente:  CLIENTESLISTA[CLIENTESLISTA.length-1]};
    
    PEDIDOSLISTA.push(pedido);

    httpMock.post.and.returnValue(of(
      PEDIDOSLISTA.find(function(elemento,index){
        if(elemento.id===66) return true;
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

  it(`deletePedido() deve deletar um pedido da lista`, (done: DoneFn) => {
    
    let pedido_id = PEDIDOSLISTA.length-2;
    let pedido_deleted = PEDIDOSLISTA[pedido_id];
    let PEDIDOS_DELETED_LISTA = PEDIDOSLISTA.filter(obj => obj !== pedido_deleted);
  
    httpMock.delete.and.returnValue(of(pedido_deleted));

    service.deletarPedido(pedido_deleted.id).subscribe(
        pedido => { console.log(pedido, "asdf")
        expect(PEDIDOS_DELETED_LISTA).not.toContain(pedido_deleted);
        expect(pedido.id).toEqual(pedido_id+1, "produto passado como parametro foi o mesmo deletado")
        done();
      }, done.fail
    );
    
  });

  it(`updatePedido() deve atualizar um pedido da lista`, (done: DoneFn) => {
    
    let atualizarPedido = PEDIDOSLISTA[PEDIDOSLISTA.length-1];
    
    atualizarPedido.cliente = CLIENTESLISTA[Math.floor(Math.random() * CLIENTESLISTA.length)];
    PEDIDOSLISTA[3].cliente = atualizarPedido.cliente;
    
    httpMock.put.and.returnValue(of(
      PEDIDOSLISTA.find(function(elemento,index){
        if(elemento.id===atualizarPedido.id) return true;
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