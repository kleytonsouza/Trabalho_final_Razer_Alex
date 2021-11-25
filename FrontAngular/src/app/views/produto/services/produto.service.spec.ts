import { TestBed } from '@angular/core/testing';
import { ProdutoService } from './produto.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { PRODUTOSLISTA } from 'src/app/tests/table_produto';


describe('ProdutoService', () => {
  let service: ProdutoService;
  let httpMock: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get','post']);
    TestBed.configureTestingModule({
      providers: [
        ProdutoService,
        { provide: HttpClient, useValue: spy }
      ]
    });
    httpMock = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    service = TestBed.inject(ProdutoService);
  });

  it('ProdutoService should be created', () => {
    console.log(service);
    expect(service).toBeTruthy();
  });

  it('getProdutos() deve retornar lista de Produtos', (done: DoneFn) => {
  
    httpMock.get.and.returnValue(of(PRODUTOSLISTA));

    service.getProdutos().subscribe(
      produtos => {
        expect(produtos).toBeTruthy();
        done();
      }, done.fail
    );
    expect(httpMock.get.calls.count()).toBe(1, 'uma chamada realizada!!');
  });

  it('getCliente() deve retornar o cliente de id número 3', (done: DoneFn) => {
  
    let id_produto = 2;

    let clienteEncontrado = PRODUTOSLISTA.find(function(elemento,index){
            if(elemento.id === id_produto) return true;
            return false;
          })

    httpMock.get.and.returnValue(of(clienteEncontrado));

    service.getProdutos(id_produto).subscribe(
      produto => {
        expect(produto.id).toEqual(id_produto, 'id esperado');;
        done();
      }, done.fail
    );
    expect(httpMock.get.calls.count()).toBe(1, 'uma chamada realizada!!');
  });


});