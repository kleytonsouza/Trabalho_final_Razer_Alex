import { TestBed } from '@angular/core/testing';
import { ProdutoService } from './produto.service';
import { HttpClient } from '@angular/common/http';

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

  it('should be created', () => {
    console.log(service);
    expect(service).toBeTruthy();
  });
});