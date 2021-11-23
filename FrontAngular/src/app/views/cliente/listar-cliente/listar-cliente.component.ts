import { Component } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from "src/app/shared/models/cliente.model";
import { HttpErrorResponse } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { InserirClienteComponent } from '../inserir-cliente/inserir-cliente.component';
import { EditarClienteComponent } from '../editar-cliente/editar-cliente.component';
import { RemoverClienteComponent } from '../remover-cliente/remover-cliente.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})

export class ListarClienteComponent  {

  ELEMENT_DATA!: Cliente[];
  displayedColumns = ['id', 'cpf','nome', 'sobrenome', 'op'];
  dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);
  clientes!: Cliente[];
  
  constructor(
    private clientesService: ClienteService,
    public dialog: MatDialog,
    public router: Router
  ){}

  ngOnInit(): void { this.getAllClientes() }

  update(cliente : Cliente) {
    const dialogRef = this.dialog.open(
      EditarClienteComponent,{
        minWidth: '300px',
        minHeight: '300px',
        data: cliente 
      }
    );
    dialogRef.afterClosed().subscribe(
      result => {
        this.getAllClientes();
      }
    );
  }

  listOrdens(cliente : Cliente){
    this.router.navigate(['/pedidos/listar/', cliente.id]);
  }

  add() {
    const dialogRef = this.dialog.open(
      InserirClienteComponent,{
        minWidth: '300px',
        minHeight: '300px' 
      }
    )
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(`Dialog result: ${result}`);
        this.getAllClientes();
      }
    )
  }

  delete(cliente : Cliente) {
    const dialogRef = this.dialog.open(
      RemoverClienteComponent,{
        minWidth: '300px',
        minHeight: '300px',
        data: cliente 
      }
    );
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(`Dialog result: ${result}`)
        this.getAllClientes()
      }
    )
  }

  getClientes(): void{
    this.clientesService.getClientes().subscribe(
      (response: Cliente[])      => { this.clientes = response },
      (error: HttpErrorResponse) => { alert(error.message)}
    );
  }

  getAllClientes(){
    this.clientesService.getClientes().subscribe(
      clientes => {
        this.clientes = clientes
        this.dataSource.data = clientes
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
