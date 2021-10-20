import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverClienteComponent } from './remover-cliente.component';

describe('RemoverClienteComponent', () => {
  let component: RemoverClienteComponent;
  let fixture: ComponentFixture<RemoverClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverClienteComponent ]
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
