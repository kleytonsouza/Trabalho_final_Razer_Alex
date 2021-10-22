import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../../shared/models/cliente';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-client',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})

export class EditarClienteComponent implements OnInit {

  public formCliente! : FormGroup;
  public cliente!: Cliente;


  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) 
              public data: Cliente,
              public dialogRef: MatDialogRef<EditarClienteComponent>,
           
              private clienteService: ClienteService,
              private router: Router,
              private route: ActivatedRoute) { }

              
 

  ngOnInit(): void {
  
    this.formCliente = this.fb.group({
      id: [this.data.id, [Validators.required]],
      cpf: [this.data.cpf, [Validators.required]],
      nome: [this.data.nome, [Validators.required]],
      sobrenome: [this.data.sobrenome, [Validators.required]]
    })
  }

  
  atualizar(): void{

    if (this.formCliente.valid){
        this.clienteService.atualizarCliente(this.formCliente.value).subscribe(
        result => {});
        this.dialogRef.close();
        this.formCliente.reset();      
     }  
  }

  cancel(): void{
    this.dialogRef.close();
    this.formCliente.reset();
  }


}
