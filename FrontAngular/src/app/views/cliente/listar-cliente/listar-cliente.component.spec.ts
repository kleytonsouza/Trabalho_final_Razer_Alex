//  import { ComponentFixture, TestBed } from '@angular/core/testing';
//  import { HttpClient } from '@angular/common/http';
//  import { MatDialog  } from '@angular/material/dialog';
//  import { MatTableDataSource } from '@angular/material/table';
//  import { ClienteService } from '../services/cliente.service';
//  import { ListarClienteComponent } from './listar-cliente.component';
//  import { RouterTestingModule } from '@angular/router/testing';



//  describe('ListarPessoaComponent', () => {
//    let component: ListarClienteComponent;
//    let fixture: ComponentFixture<ListarClienteComponent>;
//    let httpMock: jasmine.SpyObj<HttpClient>;
//    let service: ClienteService;

//    beforeEach(async () => {
//     const spy = jasmine.createSpyObj('HttpClient', ['get','post']);
//     await TestBed.configureTestingModule({
//       declarations: [ ListarClienteComponent ],
   
//     })
//     .compileComponents();
//     httpMock = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
//     service = TestBed.inject(ClienteService);
//   });

//    beforeEach(() => {
//      fixture = TestBed.createComponent(ListarClienteComponent);
//      component = fixture.componentInstance;
//      fixture.detectChanges();
//    });

//    it('should create', () => {
//      expect(service).toBeTruthy();
//    });
//  });
