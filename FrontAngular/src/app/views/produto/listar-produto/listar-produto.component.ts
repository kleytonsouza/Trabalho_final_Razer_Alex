import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/models/produto.model';
import { ProdutoService } from '../services/produto.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditarProdutoComponent } from '../editar-produto/editar-produto.component';
import { RemoverProdutoComponent } from '../remover-produto/remover-produto.component';
import { InserirProdutoComponent } from '../inserir-produto/inserir-produto.component';




@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})


export class ListarProdutoComponent  {

  ELEMENT_DATA!: Produto[];
  displayedColumns = ['id', 'nome', 'descricao', 'op'];
  dataSource = new MatTableDataSource<Produto>(this.ELEMENT_DATA);
  produtos!: Produto[];

  constructor(private produtoService : ProdutoService, public dialog: MatDialog, private router:Router) { }

  ngOnInit(): void {
    this.getAllProdutos();
  }


  editar(produto : Produto) {
    const dialogRef = this.dialog.open(EditarProdutoComponent,{
      minWidth: '300px',
      minHeight: '300px',
      data: produto }
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getAllProdutos();
    });
  }

  inserir() {
    const dialogRef = this.dialog.open(InserirProdutoComponent,{
      minWidth: '300px',
      minHeight: '300px' }
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getAllProdutos();

    });
  }

  remover(produto: Produto){
    const dialogRef = this.dialog.open(RemoverProdutoComponent, {
      minWidth: '300px',
      minHeight: '300px',
      data: produto});

    dialogRef.afterClosed().subscribe(result =>{
      console.log('Dialog result: ${result}');
      this.getAllProdutos();
    })  
  }

  listarTodos(){
    this.produtoService.listarTodos().subscribe(
      (response: Produto[]) =>{
        this.produtos = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    
  }

  public getAllProdutos(){
    this.produtoService.listarTodos().subscribe(
    produtos => {
      this.produtos = produtos
      this.dataSource.data = produtos
    }
   );}
 

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
