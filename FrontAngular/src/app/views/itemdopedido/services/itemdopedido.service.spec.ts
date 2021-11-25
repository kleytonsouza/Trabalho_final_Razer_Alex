import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ItemdopedidoService } from './itemdopedido.service';
import { ClienteService } from '../../cliente/services/cliente.service';

describe('ItemdopedidoService', () => {
  let service: ItemdopedidoService;
  let httpMock: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    TestBed.configureTestingModule({
      providers: [
        ClienteService, { provide: HttpClient, useValue: spy }
      ]
    });
    httpMock = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    service = TestBed.inject(ItemdopedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
