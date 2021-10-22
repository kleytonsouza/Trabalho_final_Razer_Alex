import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { itemDoPedido, Pedido, Produto } from 'src/app/shared';
import { Cliente } from 'src/app/shared/models/cliente';
import { InserirClienteComponent } from '../../cliente/inserir-cliente/inserir-cliente.component';
import { ClienteService } from '../../cliente/services/cliente.service';
import { ProdutoService } from '../../produto/services/produto.service';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-inserir-pedido',
  templateUrl: './inserir-pedido.component.html',
  styleUrls: ['./inserir-pedido.component.css']
})
export class InserirPedidoComponent implements OnInit {
  cpf: number = 0;
  public formPedido! : FormGroup;
  produto:  Produto | undefined;
  quantidade: number = 0;
  cliente: Cliente = new Cliente(0,'', '','');
  produtos!: Produto[];
  items: itemDoPedido[] =  [];
  pedido = new Pedido(new Date,this.cliente,this.items)
  

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<InserirClienteComponent>, 
    private pedidoService: PedidoService,
    private router: Router,
    private clientesService: ClienteService) { }

  ngOnInit(): void {
    this.getAllProdutos()
    this.formPedido = this.fb.group({
      id: [4,],
      data:['',],
      cliente: [this.cliente,],
      itens:[this.items,],
    });
  }

  cancel(): void{
    this.dialogRef.close();
    this.formPedido.reset();
  }

  inserir(): void{
    
    if (this.formPedido.valid){
        this.pedidoService.adicionarItemDoPedido(new itemDoPedido(1,5,new Produto(1,'produto1'))).subscribe();
       this.pedidoService.adicionarPedido(this.formPedido.value).subscribe(
        result => {});
        this.dialogRef.close();
        this.formPedido.reset();
       // window.location.reload();      
     }  
  }

  public onAddPedido(addForm: NgForm): void{
    document.getElementById('formPedido')?.click();
      this.pedidoService.adicionarPedido(addForm.value).subscribe(
        (response: Pedido) =>{
          console.log(response);
          this.pedidoService.getPedidos();
        },
        (error: HttpErrorResponse) =>{
           alert(error.message);
        }
      );
  }

  public getOneClientes(id: number){
    // passar id do cliente
    this.clientesService.getCliente(id).subscribe(
    cliente => {
      this.cliente = cliente
    }
   );
  }
  public getAllProdutos(){
    this.pedidoService.getProdutos().subscribe(
      prod => {
        this.produtos = prod;
      }
     );
  }


  changeProduto(value: any) {
    this.produto = value;
  }
  changeValue(event: any){
    this.quantidade = event.target.value;
  }
  changeCPF(event: any){
    this.cpf = event.target.value;
  }
  addItem(){
    this.items.push(new itemDoPedido(5,this.quantidade,this.produto))
    console.log(this.items)
    
  }
  

}
