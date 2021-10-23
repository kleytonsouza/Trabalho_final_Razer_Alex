import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Cliente, Pedido } from 'src/app/shared';
import { ItemDoPedido } from 'src/app/shared/models/itemdopedido.model';
import { Produto } from 'src/app/shared/models/produto.model';
import { InserirClienteComponent } from '../../cliente/inserir-cliente/inserir-cliente.component';
import { ClienteService } from '../../cliente/services/cliente.service';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-inserir-pedido',
  templateUrl: './inserir-pedido.component.html',
  styleUrls: ['./inserir-pedido.component.css']
})
export class InserirPedidoComponent implements OnInit {
  cpf: number = 0;
  public formPedido! : FormGroup;
  public formItemPedido! : FormGroup;
  produto!:  Produto;
  quantidade: number = 0;
  cliente: Cliente = new Cliente(1,'11111111111', 'teste','novaki');
  produtos: Produto[]=  [];
  prodAux: Produto[]=  [];
  items: ItemDoPedido[] =  [];
  pedido = new Pedido(new Date,this.cliente)
  

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<InserirClienteComponent>, 
    private pedidoService: PedidoService,
    private router: Router,
    private clientesService: ClienteService) { }

  ngOnInit(): void {
    this.getAllProdutos()
    this.formPedido = this.fb.group({
      id:[''],
      data:['',],
      cliente: [this.cliente,],
      itens: [JSON.stringify(this.items),],
    });
  }

  cancel(): void{
    this.dialogRef.close();
    this.formPedido.reset();
  }

  inserir(): void{
    
    if (this.formPedido.valid){
      this.formPedido = this.fb.group({
        id:[''],
        data:['',],
        cliente: [this.cliente,],
      });
       this.pedidoService.adicionarPedido(this.formPedido.value).subscribe(result => {});
 this.prodAux.forEach(element => {
        this.formItemPedido = this.fb.group({
          pedido: [new Pedido(new Date().toISOString().slice(0, 19).replace('T', ' '),this.cliente),],
          quantidade: [this.quantidade,],
          produto:[new Produto(element.id,element.descricao),],
        });
        console.log(this.formItemPedido.value)
        this.pedidoService.adicionarItemDoPedido(this.formItemPedido.value).subscribe();
      });
       
        //this.dialogRef.close();
       // this.formPedido.reset();
       // window.location.reload();      
     }  
  }

  public onAddPedido(addForm: NgForm): void{
    document.getElementById('formPedido')?.click();
      this.pedidoService.adicionarPedido(addForm.value).subscribe(
        (response: Pedido) =>{
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
    this.items.push(new ItemDoPedido(this.quantidade,this.produto,new Pedido(new Date(),this.cliente),))
    this.prodAux.push(this.produto)
  }
  

}
