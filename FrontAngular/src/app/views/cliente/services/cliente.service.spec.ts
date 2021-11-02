import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { CLIENTESLISTA } from 'src/app/server/db-data-clientes';

import { Cliente } from 'src/app/shared/models/cliente.model';
import { ClienteService } from './cliente.service';



describe('ClientService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let clienteService: ClienteService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get','post']);
    TestBed.configureTestingModule({
      providers: [
        ClienteService,
        { provide: HttpClient, useValue: spy }
      ]
    });
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    clienteService = TestBed.inject(ClienteService);
  });

  it('getClientes() deve retornar lista de Clientes', (done: DoneFn) => {

    httpClientSpy.get.and.returnValue(of(CLIENTESLISTA));

    clienteService.getClientes().subscribe(
      clientes => {
        expect(clientes).toEqual(CLIENTESLISTA, 'clientes esperados');
        done();
      }, done.fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'uma requisição');
  });

  let encontrarClienteID = 2;
  it(`getCliente(${encontrarClienteID}) deve retornar o cliente de ID ${encontrarClienteID}`, (done: DoneFn) => {

    httpClientSpy.get.and.returnValue(of(
      CLIENTESLISTA.find(function(elemento,index){
        if(elemento.id===encontrarClienteID) return true;
        return false;
      })
    ));


    clienteService.getCliente(encontrarClienteID).subscribe(
      cliente => {
        expect(cliente.id).toEqual(encontrarClienteID, 'cliente esperado');
        done();
      }, done.fail
    );
    
  });

  it(`addCliente() deve adicionar um novo cliente à lista`, (done: DoneFn) => {
    const novoCliente: Cliente = {id:4,cpf: "99999999999",nome: "João",sobrenome:"Sem-braço"};
    
    CLIENTESLISTA.push(novoCliente);

    httpClientSpy.post.and.returnValue(of(
      CLIENTESLISTA.find(function(elemento,index){
        if(elemento.id===4) return true;
        return false;
      })
    ));


    clienteService.addCliente(novoCliente).subscribe(
      cliente => {
        expect(cliente.id).toEqual(4, 'id esperada do novo cliente');
        expect(cliente.cpf).toEqual('99999999999', 'cpf esperado do novo cliente');
        done();
      }, done.fail
    );
    
  });

});
