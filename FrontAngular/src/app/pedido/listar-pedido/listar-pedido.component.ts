import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/models/produto.model';

@Component({
  selector: 'app-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.css']
})

export class ListarPedidoComponent implements OnInit {

  produtos: Produto[] = [];

  constructor() { }

  ngOnInit(): void {

    this.produtos= [ 
      new Produto (12345,"Produto 12345"), 
      new Produto (12346,"Produto 12346"), 
      new Produto (12347,"Produto 12347")];
      
  }

}
