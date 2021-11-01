import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/shared/models/produto.model';
import { ProdutoService } from '../services/produto.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-inserir-produto',
  templateUrl: './inserir-produto.component.html',
  styleUrls: ['./inserir-produto.component.css']
})

export class InserirProdutoComponent implements OnInit {
  public formProduto! : FormGroup;
  public produto! : Produto;
  
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<InserirProdutoComponent>,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.formProduto = this.formBuilder.group({
      descricao: ['', [Validators.required]]
    })
  }

  cancel(): void{
    this.dialogRef.close();
    this.formProduto.reset();
  }

  add(): void{
    if (this.formProduto.valid){
      this.produtoService.add(this.formProduto.value).subscribe();
      this.dialogRef.close();
      this.formProduto.reset();
    }  
  }
}
