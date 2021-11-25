import { TestBed } from '@angular/core/testing';
import { ClienteService } from './cliente.service'
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { CLIENTESLISTA } from 'src/app/tests/table_clients';
import { Cliente } from 'src/app/shared/models/cliente.model';

describe('ClienteService', () => {
  let service: ClienteService;
  let httpMock: jasmine.SpyObj<HttpClient>;
  

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get','post','delete','put']);
    TestBed.configureTestingModule({
      providers: [ 
        ClienteService,
        { provide: HttpClient, useValue: spy }
      ]
    });
    httpMock = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    service = TestBed.inject(ClienteService);
  });

  it('ClienteService should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getClientes() deve retornar lista de Clientes', (done: DoneFn) => {
  
    httpMock.get.and.returnValue(of(CLIENTESLISTA));

    service.getClientes().subscribe(
      clientes => {
        expect(clientes).toBeTruthy();
        done();
      }, done.fail
    );
    expect(httpMock.get.calls.count()).toBe(1, 'uma chamada realizada!!');
  });


  it('getCliente() deve retornar o cliente de id número 3', (done: DoneFn) => {
  
    let id_cliente = 2;

    let clienteEncontrado = CLIENTESLISTA.find(function(elemento,index){
            if(elemento.id === id_cliente) return true;
            return false;
          })

    httpMock.get.and.returnValue(of(clienteEncontrado));

    service.getCliente(id_cliente).subscribe(
      clientes => {
        expect(clientes.id).toEqual(id_cliente, 'id esperado');;
        done();
      }, done.fail
    );
    expect(httpMock.get.calls.count()).toBe(1, 'uma chamada realizada!!');
  });

  it('getClienteByCpf() busca um cliente pelo CPF', (done: DoneFn) => {
    
    let cliente_by_cpf = CLIENTESLISTA[Math.floor(Math.random() * CLIENTESLISTA.length)];

    let cpfEncontrado = CLIENTESLISTA.find(function(elemento,index){
            if(elemento.cpf === cliente_by_cpf.cpf ) return true;
            return false;
          })

    httpMock.get.and.returnValue(of(cpfEncontrado));

    service.getClienteByCpf(cliente_by_cpf.cpf).subscribe(
      cliente => {
        expect(cliente.cpf).toEqual(cliente_by_cpf.cpf, 'cpf esperado');
        done();
      }, done.fail
    );
    expect(httpMock.get.calls.count()).toBe(1, 'uma chamada realizada!!');
  });

  it(`addCliente() deve adicionar um novo cliente à lista`, (done: DoneFn) => {
    const cliente: Cliente = {id: 66, cpf: '00000000000', nome: 'Saci', sobrenome: 'De Caloi 10'};

    CLIENTESLISTA.push(cliente);

    httpMock.post.and.returnValue(of(
      CLIENTESLISTA.find(function(elemento,index){
        if(elemento.id===66) return true;
        return false;
      })
    ));

    service.addCliente(cliente).subscribe(
      cliente => {
        expect(cliente.id).toEqual(66, 'id esperado do novo cliente');
        expect(cliente.cpf).toEqual(cliente.cpf, 'cpf esperado do novo cliente');
        expect(cliente.nome).toEqual(cliente.nome, 'nome esperado do novo cliente');
        expect(cliente.sobrenome).toEqual(cliente.sobrenome, 'sobrenome esperado do novo cliente');
        done();
      }, done.fail
    );
    expect(httpMock.post.calls.count()).toBe(1, 'uma chamada realizada!!');
  });

  it(`deleteCliente() deve deletar um cliente da lista`, (done: DoneFn) => {

    let cliente_id = CLIENTESLISTA.length-2;
    let cliente_deleted = CLIENTESLISTA[cliente_id];
    let CLIENTE_DELETED_LISTA = CLIENTESLISTA.filter(obj => obj !== cliente_deleted);

    httpMock.delete.and.returnValue(of(cliente_deleted));

    service.deleteCliente(cliente_deleted).subscribe(
      cliente => {
        expect(CLIENTE_DELETED_LISTA).not.toContain(cliente);
        done();
      }, done.fail
    );
    
  });

  it(`updateCliente() deve atualizar um cliente da lista`, (done: DoneFn) => {
  
    let cliente_id = CLIENTESLISTA.length-1
    let cliente_atualizado = CLIENTESLISTA[cliente_id];


    cliente_atualizado.cpf = "98765432198";
    cliente_atualizado.nome = "Scooby";
    cliente_atualizado.sobrenome = "Doo";
    CLIENTESLISTA[3].cpf=cliente_atualizado.cpf;
    CLIENTESLISTA[3].nome=cliente_atualizado.nome;
    CLIENTESLISTA[3].sobrenome=cliente_atualizado.sobrenome;
    

    httpMock.put.and.returnValue(of(
      CLIENTESLISTA.find(function(elemento,index){
        if(elemento.id===cliente_atualizado.id) return true;
        return false;
      })
    ));

    service.updateCliente(cliente_atualizado).subscribe(
      cliente => {
        expect(cliente.id).toEqual(cliente_atualizado.id, 'id esperada do novo cliente');
        expect(cliente.cpf).toEqual(cliente_atualizado.cpf, 'cpf esperado do novo cliente');
        expect(cliente.nome).toEqual(cliente_atualizado.nome, 'nome esperado do novo cliente');
        expect(cliente.sobrenome).toEqual(cliente_atualizado.sobrenome, 'nome esperado do novo cliente');
        done();
      }, done.fail
    );
            
  });
});    
