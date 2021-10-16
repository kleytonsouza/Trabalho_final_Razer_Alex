import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { NgForm } from '@angular/forms';

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
    
  
    const clienteToEdit = this.clienteService.buscarPorId(cpf);

    if ( clienteToEdit !== undefined)
      this.cliente = clienteToEdit;
    else
      throw new Error ("Cliente não encontrado: cpf = " + cpf);
  }

  
  atualizar(): void{

    let currentCpf = this.route.snapshot.params['cpf'];
    
    const hasCpf = this.clienteService.buscarPorId(this.cliente.cpf);

    const isThisCpf  = this.cliente.cpf == currentCpf;

    if (!isThisCpf && hasCpf !== undefined){
      confirm(`CPF já cadastrado ${this.cliente.cpf}`)
      throw new Error ("CPF já cadastrado = " + this.cliente.cpf);
    }
    
    if (this.formCliente.form.valid && hasCpf == undefined) {
      this.clienteService.atualizar(this.cliente);
      this.router.navigate( ["/"] );
    }
  }

}
