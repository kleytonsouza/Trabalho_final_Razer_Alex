import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteService } from '../services/cliente.service';

import { EditarClienteComponent } from './editar-cliente.component';

describe('EditarClienteComponent', () => {
  let component: EditarClienteComponent;
  let fixture: ComponentFixture<EditarClienteComponent>;
  let httpMock: jasmine.SpyObj<HttpClient>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('HttpClient', ['get','post']);
    await TestBed.configureTestingModule({
      declarations: [ EditarClienteComponent ],
      providers: [FormBuilder, { provide: MAT_DIALOG_DATA, useValue: {} }, { provide: MatDialogRef, useValue: {} },
                    ClienteService,  { provide: HttpClient, useValue: spy }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
