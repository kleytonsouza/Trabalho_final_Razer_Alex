import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarItemdopedidoComponent } from './listar-itemdopedido.component';

describe('ListarItemdopedidoComponent', () => {
  let component: ListarItemdopedidoComponent;
  let fixture: ComponentFixture<ListarItemdopedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarItemdopedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarItemdopedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
