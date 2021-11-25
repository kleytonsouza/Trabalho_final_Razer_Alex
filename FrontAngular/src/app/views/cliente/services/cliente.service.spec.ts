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
    const spy = jasmine.createSpyObj('HttpClient', ['get','post']);
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

  it('getClienteByCpf() deve retornar o cliente de cpf número 02456852695', (done: DoneFn) => {
    
    let cpf = "02456852695";

    let cpfEncontrado = CLIENTESLISTA.find(function(elemento,index){
            if(elemento.cpf === cpf ) return true;
            return false;
          })

    httpMock.get.and.returnValue(of(cpfEncontrado));

    service.getClienteByCpf(cpf).subscribe(
      cliente => {
        expect(cliente.cpf).toEqual(cpf, 'cpf esperado');
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


  it(`deleteCliente() deve deletar o cliente de id 2 da lista`, (done: DoneFn) => {

    let cliente_id = 2

    CLIENTESLISTA.find(function(elemento,index){
      if(elemento.id === cliente_id) {
        let deleteCliente = CLIENTESLISTA[index];
        delete CLIENTESLISTA[index];
        httpMock.delete.and.returnValue(of(deleteCliente));
        return true;
      }  
      return false;
    })

    service.deleteCliente(cliente_id).subscribe(
      cliente => {
        expect(CLIENTESLISTA).not.toContain(cliente);
        done();
      }, done.fail
    );
    
  });


});



//   it('getClientes() deve retornar lista de Clientes', (done: DoneFn) => {

//     //httpClientSpy.get.and.returnValue(of(CLIENTESLISTA));

//     clienteService.getClientes().subscribe(
//       clientes => {
//         expect(clientes).toBe([]);
//         done();
//       }, done.fail
//     );
//     expect(httpClientSpy.get.calls.count()).toBe(1, 'uma requisição');
//   });

//   let encontrarClienteID = 2;
//   it(`getCliente(${encontrarClienteID}) deve retornar o cliente de ID ${encontrarClienteID}`, (done: DoneFn) => {

//     let clienteEncontrado = CLIENTESLISTA.find(function(elemento,index){
//       if(elemento.id===encontrarClienteID) return true;
//       return false;
//     })

//     httpClientSpy.get.and.returnValue(of(clienteEncontrado));


//     clienteService.getCliente(encontrarClienteID).subscribe(
//       cliente => {
//         expect(cliente.id).toEqual(encontrarClienteID, 'cliente esperado');
//         done();
//       }, done.fail
//     );
    
//   });

//   it(`addCliente() deve adicionar um novo cliente à lista`, (done: DoneFn) => {
//     const novoCliente: Cliente = {id:4,cpf: "99999999999",nome: "João",sobrenome:"Sem-braço"};
    
//     CLIENTESLISTA.push(novoCliente);

//     httpClientSpy.post.and.returnValue(of(
//       CLIENTESLISTA.find(function(elemento,index){
//         if(elemento.id===4) return true;
//         return false;
//       })
//     ));


//     clienteService.addCliente(novoCliente).subscribe(
//       cliente => {
//         expect(cliente.id).toEqual(4, 'id esperada do novo cliente');
//         expect(cliente.cpf).toEqual(novoCliente.cpf, 'cpf esperado do novo cliente');
//         expect(cliente.nome).toEqual(novoCliente.nome, 'nome esperado do novo cliente');
//         expect(cliente.sobrenome).toEqual(novoCliente.sobrenome, 'sobrenome esperado do novo cliente');
//         done();
//       }, done.fail
//     );
    
//   });

//   it(`updateCliente() deve atualizar um cliente da lista`, (done: DoneFn) => {
    
//     // fazer a atualização do ultimo cliente da lista
//     let atualizarCliente = CLIENTESLISTA[CLIENTESLISTA.length-1];
//     // trocando os dados
//     atualizarCliente.cpf = "98765432198";
//     atualizarCliente.nome = "Maria";
//     atualizarCliente.sobrenome = "das Dores";
//     CLIENTESLISTA[CLIENTESLISTA.length-1].cpf=atualizarCliente.cpf;
//     CLIENTESLISTA[CLIENTESLISTA.length-1].nome=atualizarCliente.nome;
//     CLIENTESLISTA[CLIENTESLISTA.length-1].sobrenome=atualizarCliente.sobrenome;
    

//     httpClientSpy.post.and.returnValue(of(
//       CLIENTESLISTA.find(function(elemento,index){
//         if(elemento.id===atualizarCliente.id) return true;
//         return false;
//       })
//     ));


//     clienteService.updateCliente(atualizarCliente).subscribe(
//       cliente => {
//         expect(cliente.id).toEqual(atualizarCliente.id, 'id esperada do novo cliente');
//         expect(cliente.cpf).toEqual(atualizarCliente.cpf, 'cpf esperado do novo cliente');
//         expect(cliente.nome).toEqual(atualizarCliente.nome, 'nome esperado do novo cliente');
//         expect(cliente.sobrenome).toEqual(atualizarCliente.sobrenome, 'nome esperado do novo cliente');
//         done();
//       }, done.fail
//     );
    
//   });

//   it(`deleteCliente() deve remover um cliente`, (done: DoneFn) => {
//     let deleteCliente = CLIENTESLISTA[CLIENTESLISTA.length-1];
//     CLIENTESLISTA.pop();

//     httpClientSpy.post.and.returnValue(of(deleteCliente));
    
//     clienteService.deleteCliente(deleteCliente).subscribe(
//       cliente => {
//         expect(CLIENTESLISTA).not.toContain(cliente);
//         done();
//       }, done.fail
//     );
    
//   });

// });
