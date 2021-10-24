package br.ufpr.das.pedidos.api.rest.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "Pedido")
public class PedidoModel {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column
    private Date data;


    @OneToOne(cascade = CascadeType.MERGE)
    private ClienteModel cliente;

    @OneToMany(mappedBy = "mPedido", cascade = CascadeType.MERGE)
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