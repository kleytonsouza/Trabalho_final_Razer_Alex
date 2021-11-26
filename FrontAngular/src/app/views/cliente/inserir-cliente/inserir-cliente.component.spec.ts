import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteService } from '../services/cliente.service';
import { InserirClienteComponent } from './inserir-cliente.component';

describe('InserirClienteComponent', () => {
  let component: InserirClienteComponent;
  let fixture: ComponentFixture<InserirClienteComponent>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    await TestBed.configureTestingModule({
      declarations: [InserirClienteComponent],
      providers: [FormBuilder, { provide: MAT_DIALOG_DATA, useValue: {} }, { provide: MatDialogRef, useValue: {} },
        ClienteService, { provide: HttpClient, useValue: spy }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
