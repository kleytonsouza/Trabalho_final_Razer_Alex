import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { NgForm } from '@angular/forms';
import { Cliente } from '../../../shared/models/cliente';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-inserir-cliente',
  templateUrl: './inserir-cliente.component.html',
  styleUrls: ['./inserir-cliente.component.css']
})

export class InserirClienteComponent implements OnInit {
  constructor(private clienteService: ClienteService,
    private router: Router) { }
    
    @ViewChild('formCliente')formCliente! : NgForm;

    cliente! : Cliente;
    ngOnInit(): void {
    
  }

    inserir(): void{

      if (this.formCliente.form.valid){
          this.clienteService.adicionarCliente(this.cliente);
          this.router.navigate( ["/"] );
      }
    }


    public onAddCliente(addForm: NgForm): void{

      document.getElementById('formCliente')?.click();

        this.clienteService.adicionarCliente(addForm.value).subscribe(
          (response: Cliente) =>{
            console.log(response);
            this.clienteService.getClientes();
          },
          (error: HttpErrorResponse) =>{
             alert(error.message);
          }
        );


    }


}
