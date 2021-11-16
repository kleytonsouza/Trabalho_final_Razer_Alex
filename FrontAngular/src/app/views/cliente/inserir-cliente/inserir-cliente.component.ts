import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../../shared/models/cliente.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-inserir-cliente',
  templateUrl: './inserir-cliente.component.html',
  styleUrls: ['./inserir-cliente.component.css']
})

export class InserirClienteComponent implements OnInit {
  
  public formCliente! : FormGroup;
  public cliente!: Cliente;
  
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<InserirClienteComponent>, 
    private clienteService: ClienteService
  ){ }

  ngOnInit(): void {
    this.formCliente = this.formBuilder.group({
      id: ['', ],
      cpf: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]]
    })
  }

  cancel(): void{
    this.dialogRef.close();
    this.formCliente.reset();
  }

  add(): void{
    this.clienteService.getClienteByCpf(this.formCliente.value['cpf']).subscribe((ite) => {
      if(ite.length == 0){
       if (this.formCliente.valid){
          this.clienteService.addCliente(this.formCliente.value).subscribe();
          this.dialogRef.close();
          this.formCliente.reset();
        }
      }
      else {
        alert("Ja possui cliente cadastrado com este CPF")
      }
    })
  }
  
}
