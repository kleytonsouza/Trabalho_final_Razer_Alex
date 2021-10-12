import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Produto } from 'src/app/shared/models/cliente.model';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-inserir-produto',
  templateUrl: './inserir-produto.component.html',
  styleUrls: ['./inserir-produto.component.css']
})
export class InserirProdutoComponent implements OnInit {
  
  
  constructor(private produtoService: ProdutoService,
    private router: Router) { }
    
    @ViewChild('formProduto')formProduto! : NgForm;

    produto! : Produto;
    
    ngOnInit(): void {
    
    this.produto = new Produto(0,"");
  }

    inserir(): void{

      const result = this.produtoService.buscarPorId(this.produto.id_produto!);
    
      if ( result !== undefined){
        confirm(`ID já cadastrado ${this.produto.id_produto}`)
        throw new Error ("ID já cadastrado = " + this.produto.id_produto);
      } 
     
      if (this.formProduto.form.valid){
          this.produtoService.inserir(this.produto);
          this.router.navigate( ["/produtos"] );
      }
    }

}
