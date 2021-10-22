import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverProdutoComponent } from './remover-produto.component';

describe('RemoverProdutoComponent', () => {
  let component: RemoverProdutoComponent;
  let fixture: ComponentFixture<RemoverProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
