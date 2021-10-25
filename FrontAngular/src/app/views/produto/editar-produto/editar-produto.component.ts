import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from '../services/produto.service';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produto } from 'src/app/shared/models/produto.model';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})

export class EditarProdutoComponent implements OnInit {
  
  public formProduto! : FormGroup;
  public produto!: Produto;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) 
    public data: Produto,
    public dialogRef: MatDialogRef<EditarProdutoComponent>,
    private produtoService: ProdutoService
  ) { }
    
  ngOnInit(): void {
    this.formProduto = this.formBuilder.group({
      id: [this.data.id, [Validators.required]],
      descricao: [this.data.descricao, [Validators.required]]
    })
  }

  atualizar(): void{
    if (this.formProduto.valid){
        this.produtoService.atualizar(this.formProduto.value).subscribe();
        this.dialogRef.close();
        this.formProduto.reset();      
    }  
  }

  cancel(): void{
    this.dialogRef.close();
    this.formProduto.reset();
  }

}
