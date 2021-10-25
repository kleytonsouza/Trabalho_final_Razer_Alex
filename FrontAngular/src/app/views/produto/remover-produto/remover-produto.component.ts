import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../services/produto.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Produto } from '../../../shared/models/produto.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-remover-produto',
  templateUrl: './remover-produto.component.html',
  styleUrls: ['./remover-produto.component.css']
})

export class RemoverProdutoComponent implements OnInit {

  public formProduto!: FormGroup;
  public produto!: Produto;

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) 
    public data: Produto,
    public dialogRef: MatDialogRef<RemoverProdutoComponent>,
 
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.formProduto = this.fb.group({
        id: [this.data.id, [Validators.required]],
        describe: [this.data.descricao, [Validators.required]],
      })
    }

    remover(): void{
      if (this.formProduto.valid){
          this.produtoService.remover(this.formProduto.value).subscribe(
          result => {});
          this.dialogRef.close();
          this.formProduto.reset();      
       }  
    }
  
    cancel(): void{
      this.dialogRef.close();
      this.formProduto.reset();
    }

}
