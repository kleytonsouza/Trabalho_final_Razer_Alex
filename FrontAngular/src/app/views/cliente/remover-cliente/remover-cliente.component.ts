import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Cliente } from '../../../shared/models/cliente';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-remover-cliente',
  templateUrl: './remover-cliente.component.html',
  styleUrls: ['./remover-cliente.component.css']
})
export class RemoverClienteComponent implements OnInit {

  public formCliente! : FormGroup;
  public cliente!: Cliente;


  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) 
              public data: Cliente,
              public dialogRef: MatDialogRef<RemoverClienteComponent>,
           
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

  
  remover(): void{

    if (this.formCliente.valid){
        this.clienteService.removerCliente(this.formCliente.value).subscribe(
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
