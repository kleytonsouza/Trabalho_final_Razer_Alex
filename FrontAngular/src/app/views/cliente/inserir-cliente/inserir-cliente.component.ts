import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { NgForm } from '@angular/forms';
import { Cliente } from '../../../shared/models/cliente';



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

      const result = this.clienteService.getCliente(this.cliente.id!);
    
      if ( result !== undefined){
        confirm(`CPF já cadastrado ${this.cliente.cpf}`)
        throw new Error ("CPF já cadastrado = " + this.cliente.cpf);
      } 
     
      if (this.formCliente.form.valid){
          this.clienteService.adicionarCliente(this.cliente);
          this.router.navigate( ["/"] );
      }
    }

}
