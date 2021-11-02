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
    //const expectedClientes: Cliente[] = 
    // [{id:5,cpf: "99999999999",nome: "João",sobrenome:"Sem-braço"},]

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
    //const expectedClientes: Cliente[] = 
    // [{id:5,cpf: "99999999999",nome: "João",sobrenome:"Sem-braço"},]

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
        expect(cliente.cpf).toEqual('9999999999', 'cpf esperado do novo cliente');
        done();
      }, done.fail
    );
    
  });

  
  
  
});

/*describe('ClienteService', () => {
  let clienteservice: ClienteService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClienteService]
    });

    clienteservice = TestBed.get(ClienteService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('be able to retrieve all Clientes from the API via GET', () => {

    Object.keys(CLIENTES).forEach(key => {
      console.log(key, CLIENTES[key]);
    });

    clienteservice.getClientes().subscribe(clientes => {
      expect(clientes.length).toBe(3);

      const cliente = clientes.find(cliente => cliente.id == 3)?.nome;

      expect(cliente).toBe("Zé");

      expect(clientes).toEqual(CLIENTESLISTA);
    });
    const request = httpTestingController.expectOne(`${clienteservice.apiServerUrl}/v1/public/cliente/listar`);
    expect(request.request.method).toBe('GET');
    request.flush(CLIENTESLISTA);

  });

  it('be able to find a Cliente by ID', () => {

    clienteservice.getCliente(1).subscribe(clientes => {

      expect(clientes).toBeTruthy();
      expect(clientes.id).toBe(1);
      expect(clientes.cpf).toBe(CLIENTES[1].cpf);
      expect(clientes.nome).toBe(CLIENTES[1].nome);
      expect(clientes.sobrenome).toBe(CLIENTES[1].sobrenome);

    });
    const request = httpTestingController.expectOne(`${clienteservice.apiServerUrl}/v1/public/cliente/1`);
    expect(request.request.method).toBe('GET');
    request.flush(CLIENTES[1]);

  });

  it('should save Cliente data', () => {

    const changes :Cliente =
        {id:5,cpf: "99999999999",nome: "João",sobrenome:"Sem-braço"};

    clienteservice.addCliente(changes)
        .subscribe(cliente => {

            expect(cliente.id).toBe(5);

        });

    const req = httpTestingController.expectOne('/api/cliente/5');

    expect(req.request.method).toEqual("POST");

    expect(req.request.body.nome)
        .toEqual(changes.nome);

    req.flush({
        ...CLIENTES[5],
        ...changes
    })

});


  afterEach(() => {
    httpTestingController.verify();
  });

});
*/