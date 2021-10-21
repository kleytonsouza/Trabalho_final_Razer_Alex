import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Produto } from 'src/app/shared/models/cliente.model';
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
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<InserirProdutoComponent>,
    private produtoService: ProdutoService,
    private router: Router) { }

    ngOnInit(): void {
    this.formProduto = this.fb.group({
      id: ['',],
      nome: ['', [Validators.required]],
      describe: ['', [Validators.required]]
    })
  }

    cancel(): void{
      this.dialogRef.close();
      this.formProduto.reset();
    }

    inserir(): void{
      if (this.formProduto.valid){
        this.produtoService.inserir(this.formProduto.value).subscribe(result => {});
         this.dialogRef.close();
         this.formProduto.reset();
        // window.location.reload();      
      }  
    }

}
