import { Component, Inject, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../../shared/models/cliente';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-remover-cliente',
  templateUrl: './remover-cliente.component.html',
  styleUrls: ['./remover-cliente.component.css']
})

export class RemoverClienteComponent implements OnInit {

  public formCliente! : FormGroup;
  public cliente!: Cliente;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) 
    public data: Cliente,
    public dialogRef: MatDialogRef<RemoverClienteComponent>,
    private clienteService: ClienteService,
  ) { }

  ngOnInit(): void {
    this.formCliente = this.fb.group({
      id: [this.data.id, [Validators.required]],
      cpf: [this.data.cpf, [Validators.required]],
      nome: [this.data.nome, [Validators.required]],
      sobrenome: [this.data.sobrenome, [Validators.required]]
    })
  }

  delete(): void{
    if (this.formCliente.valid){
      this.clienteService.deleteCliente(this.formCliente.value).subscribe();
      this.dialogRef.close();
      this.formCliente.reset();      
    }  
  }

  cancel(): void{
    this.dialogRef.close();
    this.formCliente.reset();
  }

}
