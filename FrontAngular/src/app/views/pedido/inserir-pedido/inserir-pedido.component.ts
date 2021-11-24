import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ItemDoPedido } from 'src/app/shared/models/itemdopedido.model';
import { Produto } from 'src/app/shared/models/produto.model';
import { InserirClienteComponent } from '../../cliente/inserir-cliente/inserir-cliente.component';
import { ClienteService } from '../../cliente/services/cliente.service';
import { PedidoService } from '../services/pedido.service';
import { formatDate } from '@angular/common';
import { ProdutoService } from '../../produto/services/produto.service';

@Component({
  selector: 'app-inserir-pedido',
  templateUrl: './inserir-pedido.component.html',
  styleUrls: ['./inserir-pedido.component.css'],
})
export class InserirPedidoComponent implements OnInit {
  cpf: number = 0;
  public formPedido!: FormGroup;
  public formItemPedido!: FormGroup;
  produto!: Produto;
  quantidade: number = 0;
  cliente: Cliente = new Cliente(0, '', '', '');
  produtos: Produto[] = [];
  items: ItemDoPedido[] = [];
  //pedido = new Pedido(new Date(), this.cliente,);
  date: Date = new Date()


  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<InserirClienteComponent>,
    private pedidoService: PedidoService,
    private produtoService: ProdutoService,
    //private router: Router,
    private clientesService: ClienteService,
    public route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: {
      id: any
    }
  ) { }

  ngOnInit(): void {
    this.getOneClientes();
    this.getAllProdutos();
    this.formPedido = this.fb.group({
      id: [''],
      data: [''],
      cliente: [this.cliente],
    });
  }

  cancel(): void {
    this.dialogRef.close();
    this.formPedido.reset();
  }

  inserir(): void {
    if (this.formPedido.valid) {
      this.formPedido = this.fb.group({
        id: [''],
        data: [formatDate(this.date, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", "en-US")],
        cliente: [this.cliente],
        itens: [this.items],
      });
      this.pedidoService
        .adicionarPedido(this.formPedido.value)
        .subscribe((result) => { });
      this.items.forEach((element) => {
        this.formItemPedido = this.fb.group({
          quantidade: [element.quantidade],
          produto: [element.produto],
          pedido: [new Pedido(1,this.date,this.cliente)],
        });
        this.pedidoService
          .adicionarItemDoPedido(this.formItemPedido.value)
          .subscribe();
      });

/*       this.dialogRef.close();
      this.formPedido.reset();
      window.location.reload(); */
    }
  }

  public onAddPedido(addForm: NgForm): void {
    document.getElementById('formPedido')?.click();
    this.pedidoService.adicionarPedido(addForm.value).subscribe(
      (response: Pedido) => {
        this.pedidoService.getPedidos();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public removeItem(it: any) {
    this.items.forEach((element, index) => {
      if (element == it) this.items.splice(index, 1);
    });
  }

  public getOneClientes() {
    this.clientesService.getCliente(this.data.id).subscribe((cliente) => {
      this.cliente = cliente;
    });
  }

  public getAllProdutos() {
    this.produtoService.getProdutos().subscribe((prod) => {
      this.produtos = prod;
    });
  }

  changeProduto(value: any) {
    this.produto = value;
  }

  changeValue(event: any) {
    this.quantidade = event.target.value;
  }


  addItem() {
    if (this.quantidade <= 0) {
      alert("Quantidade deve ser maior que 0")
    } else {
      this.items.push(
        new ItemDoPedido(this.quantidade, this.produto, this.cliente)
      );
    }
  }
}
