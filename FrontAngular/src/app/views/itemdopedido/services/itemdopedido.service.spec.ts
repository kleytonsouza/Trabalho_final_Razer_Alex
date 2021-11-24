import { TestBed } from '@angular/core/testing';

import { ItemdopedidoService } from './itemdopedido.service';

describe('ItemdopedidoService', () => {
  let service: ItemdopedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemdopedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
