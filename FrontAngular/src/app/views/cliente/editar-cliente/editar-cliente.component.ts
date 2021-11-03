import { Component, Inject, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../../shared/models/cliente.model';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-client',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})

export class EditarClienteComponent implements OnInit {

  public formCliente! : FormGroup;
  public cliente!: Cliente;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Cliente,
    public dialogRef: MatDialogRef<EditarClienteComponent>,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.formCliente = this.formBuilder.group({
      id: [this.data.id, [Validators.required]],
      cpf: [this.data.cpf, [Validators.required]],
      nome: [this.data.nome, [Validators.required]],
      sobrenome: [this.data.sobrenome, [Validators.required]]
    })
  }
  
  update(): void{
    if (this.formCliente.valid){
      this.clienteService.updateCliente(this.formCliente.value).subscribe();
      this.dialogRef.close();
      this.formCliente.reset();      
    }  
  }

  cancel(): void{
    this.dialogRef.close();
    this.formCliente.reset();
  }

}
