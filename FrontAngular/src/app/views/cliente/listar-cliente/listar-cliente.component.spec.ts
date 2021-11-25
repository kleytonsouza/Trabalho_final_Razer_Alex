 import { ComponentFixture, TestBed } from '@angular/core/testing';
 import { HttpClient } from '@angular/common/http';
 import { MatDialog  } from '@angular/material/dialog';
 import { MatTableDataSource } from '@angular/material/table';
 import { ClienteService } from '../services/cliente.service';
 import { ListarClienteComponent } from './listar-cliente.component';
 import { RouterTestingModule } from '@angular/router/testing';



 describe('ListarPessoaComponent', () => {
   let component: ListarClienteComponent;
   let fixture: ComponentFixture<ListarClienteComponent>;

   beforeEach(async () => {
    const spy = jasmine.createSpyObj('HttpClient', ['get','post']);
    await TestBed.configureTestingModule({
      declarations: [ ListarClienteComponent ],
      imports: [RouterTestingModule],
      providers: [MatTableDataSource, { list$: () => "", provide: MatDialog, useValue: {} },
                    ClienteService, { provide: HttpClient, useValue: spy }]
    })
    .compileComponents();
  });

   beforeEach(() => {
     fixture = TestBed.createComponent(ListarClienteComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();
   });

   it('should create', () => {
     expect(component).toBeTruthy();
   });
 });
