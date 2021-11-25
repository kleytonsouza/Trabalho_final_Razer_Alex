import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemDoPedido } from 'src/app/shared/models/itemdopedido.model';
import { ItemdopedidoService } from '../services/itemdopedido.service';

@Component({
  selector: 'app-listar-itemdopedido',
  templateUrl: './listar-itemdopedido.component.html',
  styleUrls: ['./listar-itemdopedido.component.css']
})
export class ListarItemdopedidoComponent implements OnInit {
  items!: ItemDoPedido[];
  idPedido: any;
  constructor(
    private itemdopedidoService: ItemdopedidoService,
    @Inject(MAT_DIALOG_DATA) public data: {
      id: any
    }) { this.idPedido = this.data.id }

  ngOnInit(): void {
    this.getItems();
  }

  public getItems() {
    this.itemdopedidoService.getPedidoByCliente(this.data.id).subscribe((ite) => {
      this.items = ite;
      console.log(this.items)
    }
    );

  }

}
