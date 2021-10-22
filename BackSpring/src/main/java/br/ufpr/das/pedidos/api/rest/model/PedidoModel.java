package br.ufpr.das.pedidos.api.rest.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.hibernate.annotations.OnDelete;

import org.hibernate.annotations.OnDeleteAction;

import java.util.Date;
import java.util.List;


@Entity(name = "pedido")
public class PedidoModel {

    @Id
    private int id;

    @Column
    private Date data;

    @OneToOne
    @JoinColumn(name="id_cliente")
    private ClienteModel cliente ;

    @OneToMany
    @JoinColumn(name="id_itemDoPedido")
    private List<ItemDoPedidoModel> itens;



    public List<ItemDoPedidoModel> getItens() {
        return itens;
    }

    public void setItens(List<ItemDoPedidoModel> itens) {
        this.itens = itens;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public ClienteModel getCliente() {
        return cliente;
    }

    public void setCliente(ClienteModel cliente) {
        this.cliente = cliente;
    }
}
