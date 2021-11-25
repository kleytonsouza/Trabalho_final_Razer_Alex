import { TestBed } from '@angular/core/testing';
import { ProdutoService } from './produto.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { PRODUTOSLISTA } from 'src/app/tests/table_produto';
import { Produto } from 'src/app/shared/models/produto.model';


describe('ProdutoService', () => {
  let service: ProdutoService;
  let httpMock: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get','post', 'put', 'delete']);
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

  it('findById() deve retornar o produto de id número 2', (done: DoneFn) => {
  
    let id_produto = 2;

    let produtoEncontrado = PRODUTOSLISTA.find(function(elemento,index){
            if(elemento.id === id_produto) return true;
            return false;
          })

    httpMock.get.and.returnValue(of(produtoEncontrado));

    service.findById(id_produto).subscribe(
      produto => {
        expect(produto.id).toEqual(id_produto, 'id esperado');;
        done();
      }, done.fail
    );
    expect(httpMock.get.calls.count()).toBe(1, 'uma chamada realizada!!');
  });


  it(`addProduto() deve adicionar um novo produto à lista`, (done: DoneFn) => {
    console.log(PRODUTOSLISTA[PRODUTOSLISTA.length-2]);
    
    const produto: Produto = {id:66, descricao: 'banata da terra'};
    
    PRODUTOSLISTA.push(produto);

    httpMock.post.and.returnValue(of(
      PRODUTOSLISTA.find(function(elemento,index){
        if(elemento.id===66) return true;
        return false;
      })
    ));

    service.addProduto(produto).subscribe(
      cliente => {
        expect(produto.id).toEqual(66, 'id esperado do novo cliente');
        expect(produto.descricao).toEqual(produto.descricao, 'descrição esperada do novo produto');
        done();
      }, done.fail
    );
    expect(httpMock.post.calls.count()).toBe(1, 'uma chamada realizada!!');
  });

  it(`deleteProduto() deve deletar um produto da lista`, (done: DoneFn) => {
    
    let produto_id = PRODUTOSLISTA.length-2;
    let produto_deleted = PRODUTOSLISTA[produto_id];
    let PRODUTO_DELETED_LISTA = PRODUTOSLISTA.filter(obj => obj !== produto_deleted);
  
    httpMock.delete.and.returnValue(of(produto_deleted));

    service.deleteProduto(produto_deleted).subscribe(
        produto => { console.log(produto, "asdf")
        expect(PRODUTO_DELETED_LISTA).not.toContain(produto_deleted);
        expect(produto.id).toEqual(produto_id+1, "produto passado como parametro foi o mesmo deletado")
        done();
      }, done.fail
    );
    
  });

  it(`updateProduto() deve atualizar um produto da lista`, (done: DoneFn) => {
    
    let atualizarProduto = PRODUTOSLISTA[PRODUTOSLISTA.length-1];
    
    atualizarProduto.descricao = "Coca da Boa!";
    PRODUTOSLISTA[PRODUTOSLISTA.length-1].descricao=atualizarProduto.descricao;
    
    httpMock.put.and.returnValue(of(
      PRODUTOSLISTA.find(function(elemento,index){
        if(elemento.id===atualizarProduto.id) return true;
        return false;
      })
    ));

    service.updateProduto(atualizarProduto).subscribe(
      produto => {
        expect(produto.descricao).toEqual(atualizarProduto.descricao, 'descrição esperada do novo produto');
        done();
      }, done.fail
    );
  });

});