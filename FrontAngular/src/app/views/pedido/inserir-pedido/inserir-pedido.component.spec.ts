// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpClient } from '@angular/common/http';
// import { FormBuilder } from '@angular/forms';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { PedidoService } from '../services/pedido.service';
// import { InserirPedidoComponent } from './inserir-pedido.component';
// import { ActivatedRoute } from '@angular/router';

// describe('InserirPedidoComponent', () => {
//   let component: InserirPedidoComponent;
//   let fixture: ComponentFixture<InserirPedidoComponent>;

//   beforeEach(async () => {
//     const spy = jasmine.createSpyObj('HttpClient', ['get','post']);
//     await TestBed.configureTestingModule({
//       declarations: [ InserirPedidoComponent ],
//       providers: [FormBuilder, { provide: MAT_DIALOG_DATA, useValue: {} }, { provide: MatDialogRef, useValue: {} },
//         PedidoService,  { provide: HttpClient, useValue: spy }, ActivatedRoute]
//     })
//     .compileComponents();
//   });
//   beforeEach(() => {
//     fixture = TestBed.createComponent(InserirPedidoComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
