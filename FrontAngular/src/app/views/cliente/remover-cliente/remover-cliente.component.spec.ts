import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteService } from '../services/cliente.service';
import { RemoverClienteComponent } from './remover-cliente.component';

describe('RemoverClienteComponent', () => {
  let component: RemoverClienteComponent;
  let fixture: ComponentFixture<RemoverClienteComponent>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('HttpClient', ['get','post']);
    await TestBed.configureTestingModule({
      declarations: [ RemoverClienteComponent ],
      providers: [FormBuilder, { provide: MAT_DIALOG_DATA, useValue: {} }, { provide: MatDialogRef, useValue: {} },
                    ClienteService,  { provide: HttpClient, useValue: spy }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
