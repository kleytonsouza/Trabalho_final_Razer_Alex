// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpClient } from '@angular/common/http';
// import { FormBuilder } from '@angular/forms';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { ProdutoService } from '../services/produto.service';
// import { ListarProdutoComponent } from './listar-produto.component';

// describe('ListarProdutoComponent', () => {
//   let component: ListarProdutoComponent;
//   let fixture: ComponentFixture<ListarProdutoComponent>;

//   beforeEach(async () => {
//     const spy = jasmine.createSpyObj('HttpClient', ['get','post']);
//     await TestBed.configureTestingModule({
//       declarations: [ ListarProdutoComponent ],
//       providers: [FormBuilder, { provide: MAT_DIALOG_DATA, useValue: {} }, { provide: MatDialogRef, useValue: {} },
//                     ProdutoService,  { provide: HttpClient, useValue: spy }]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ListarProdutoComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
