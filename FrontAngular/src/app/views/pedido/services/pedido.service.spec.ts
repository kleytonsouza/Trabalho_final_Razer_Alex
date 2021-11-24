import { TestBed } from '@angular/core/testing';
import { PedidoService } from './pedido.service';
import { HttpClient } from '@angular/common/http';

describe('PedidoService', () => {
  let service: PedidoService;
  let httpMock: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get','post']);
    TestBed.configureTestingModule({
      providers: [
        PedidoService,
        { provide: HttpClient, useValue: spy }
      ]
    });
    httpMock = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    service = TestBed.inject(PedidoService);
  });

  it('should be created', () => {
    console.log(service);
    expect(service).toBeTruthy();
  });
});