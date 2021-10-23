import { Component, Inject, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../services/produto.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produto } from 'src/app/shared/models/produto.model';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})

export class EditarProdutoComponent implements OnInit {
  
  public formProduto! : FormGroup;
  public produto!: Produto;


  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) 
    public data: Produto,
    public dialogRef: MatDialogRef<EditarProdutoComponent>,
 
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute) { }

    
ngOnInit(): void {
  
  this.formProduto = this.fb.group({
    id: [this.data.id, [Validators.required]],
    descricao: [this.data.descricao, [Validators.required]]
  })
}


atualizar(): void{

  if (this.formProduto.valid){
      this.produtoService.atualizar(this.formProduto.value).subscribe(
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
