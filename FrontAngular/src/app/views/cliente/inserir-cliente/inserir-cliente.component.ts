import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Cliente } from '../../../shared/models/cliente.model';
import { HttpErrorResponse } from '@angular/common/http';
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
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<InserirClienteComponent>,
    private clienteService: ClienteService,
    private router: Router) { }



    ngOnInit(): void {
      this.formCliente = this.fb.group({
        id: ['', ],
        cpf: ['', [Validators.required, Validators.minLength(11)]],
        nome: ['', [Validators.required]],
        sobrenome: ['', [Validators.required]]
      })

  }

  cancel(): void{
    this.dialogRef.close();
    this.formCliente.reset();
  }

    inserir(): void{
      if (this.formCliente.valid){
         this.clienteService.adicionarCliente(this.formCliente.value).subscribe(
          result => {});
          this.dialogRef.close();
          this.formCliente.reset();
         // window.location.reload();
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
