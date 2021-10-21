import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { itemDoPedido, Pedido, Produto } from 'src/app/shared';
import { Cliente } from 'src/app/shared/models/cliente';
import { InserirClienteComponent } from '../../cliente/inserir-cliente/inserir-cliente.component';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-inserir-pedido',
  templateUrl: './inserir-pedido.component.html',
  styleUrls: ['./inserir-pedido.component.css']
})
export class InserirPedidoComponent implements OnInit {
  public formPedido! : FormGroup;
  produto = new Produto (1,"Produto 12345")
  cliente = new Cliente(1,'12345678910','douglas','novaki')
  items: itemDoPedido[] = [new itemDoPedido(this.produto,2),new itemDoPedido(this.produto,1)];
  pedido = new Pedido(this.cliente,this.items)
  

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<InserirClienteComponent>, 
    private pedidoService: PedidoService,
    private router: Router) { }

  ngOnInit(): void {
    
    this.formPedido = this.fb.group({
      id: [1,],
      data:[Date.now(),],
      cliente: [this.cliente,],
      itens:[this.items,],
    })

    console.log(this.formPedido.value)
  }

  cancel(): void{
    this.dialogRef.close();
    this.formPedido.reset();
  }

  inserir(): void{
    if (this.formPedido.valid){
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

}
