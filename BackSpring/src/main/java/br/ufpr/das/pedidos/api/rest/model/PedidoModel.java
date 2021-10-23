package br.ufpr.das.pedidos.api.rest.model;

import javax.persistence.*;
import java.util.Date;
import java.util.List;


@Entity
@Table(name = "pedido" )
public class PedidoModel {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column
    @Temporal(TemporalType.DATE)
    private Date data;


    @OneToOne
    private ClienteModel cliente;

    
    @OneToMany
    private List<ItemDoPedidoModel> itens;



    public List<ItemDoPedidoModel> getItens() {
        return itens;
    }

    public void setItens(List<ItemDoPedidoModel> itens) {
        this.itens = itens;
    }



    @OneToMany(cascade = {CascadeType.ALL})
    private List<ItemDoPedidoModel> itensDoPedido;

    public List<ItemDoPedidoModel> getItensDoPedido() {
        return itensDoPedido;
    }

    public void setItensDoPedido(List<ItemDoPedidoModel> itensDoPedido) {
        this.itensDoPedido = itensDoPedido;
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