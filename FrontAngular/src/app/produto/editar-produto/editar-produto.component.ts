import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/shared/models/cliente.model';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {



  constructor(private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute) { }

    
@ViewChild('formProduto')formProduto! : NgForm;

produto!: Produto;

ngOnInit(): void {

let id = this.route.snapshot.params['id'];


const prodiutoToEdit = this.produtoService.buscarPorId(id);

if ( prodiutoToEdit !== undefined)
this.produto = prodiutoToEdit;
else
throw new Error ("Produto não encontrado: id = " + id);
}


atualizar(): void{

let currentId = this.route.snapshot.params['id'];

const hasId = this.produtoService.buscarPorId(this.produto.id_produto);

const isThisId  = this.produto.id_produto == currentId


if (!isThisId && hasId !== undefined){
confirm(`id já cadastrado ${this.produto.id_produto}`)
throw new Error ("id já cadastrado = " + this.produto.id_produto);
}

if (this.formProduto.form.valid && hasId == undefined) {
this.produtoService.atualizar(this.produto);
this.router.navigate( ["/produtos"] );
}
}

}
