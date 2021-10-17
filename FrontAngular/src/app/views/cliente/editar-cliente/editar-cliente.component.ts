import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { NgForm } from '@angular/forms';
import { Cliente } from '../../../shared/models/cliente';

@Component({
  selector: 'app-edit-client',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  constructor(private clienteService: ClienteService,
              private router: Router,
              private route: ActivatedRoute) { }

              
  @ViewChild('formCliente')formCliente! : NgForm;

  cliente!: Cliente;

  ngOnInit(): void {
  
    let cpf = this.route.snapshot.params['cpf'];
    
  
    const clienteToEdit = this.clienteService.getCliente(cpf);

   
  }

  
  atualizar(): void{

    let currentCpf = this.route.snapshot.params['cpf'];
    
    const hasCpf = this.clienteService.getCliente(this.cliente.id);

    const isThisCpf  = this.cliente.cpf == currentCpf;

    if (!isThisCpf && hasCpf !== undefined){
      confirm(`CPF já cadastrado ${this.cliente.cpf}`)
      throw new Error ("CPF já cadastrado = " + this.cliente.cpf);
    }
    
    if (this.formCliente.form.valid && hasCpf == undefined) {
      this.clienteService.atualizarCliente(this.cliente);
      this.router.navigate( ["/"] );
    }
  }

}
