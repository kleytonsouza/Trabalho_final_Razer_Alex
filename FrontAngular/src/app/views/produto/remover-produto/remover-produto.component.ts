import { Component, OnInit, Inject } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../../../shared/models/produto.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemdopedidoService } from '../../itemdopedido/services/itemdopedido.service';


@Component({
  selector: 'app-remover-produto',
  templateUrl: './remover-produto.component.html',
  styleUrls: ['./remover-produto.component.css']
})

export class RemoverProdutoComponent implements OnInit {

  public formProduto!: FormGroup;
  public produto!: Produto;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Produto,
    public dialogRef: MatDialogRef<RemoverProdutoComponent>,
    private produtoService: ProdutoService,
    private itemdopedidoService: ItemdopedidoService
  ) { }

  ngOnInit(): void {
    this.formProduto = this.formBuilder.group({
      id: [this.data.id, [Validators.required]],
      descricao: [this.data.descricao, [Validators.required]],
    })
  }

  delete(): void {
    this.itemdopedidoService.getItemByProduto(this.formProduto.value['id']).subscribe((ite) => {
      if (ite.length == 0) {
        if (this.formProduto.valid) {
          this.produtoService.deleteProduto(this.formProduto.value).subscribe();
          this.dialogRef.close();
          this.formProduto.reset();
        }
      } else {
        alert('Possui pedidos com este produto');
      }
    });
  }

  cancel(): void {
    this.dialogRef.close();
    this.formProduto.reset();
  }

}
