package br.ufpr.das.pedidos.api.rest.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.hibernate.annotations.OnDelete;

import org.hibernate.annotations.OnDeleteAction;

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

    @ManyToOne(cascade = CascadeType.MERGE)
    private ClienteModel cliente;

<<<<<<< HEAD
    /*
    @OneToMany
    private List<ItemDoPedidoModel> itens;



    public List<ItemDoPedidoModel> getItens() {
        return itens;
    }

    public void setItens(List<ItemDoPedidoModel> itens) {
        this.itens = itens;
    }*/


=======
>>>>>>> parent of 349d46d (Merge branch 'master' of https://github.com/kleytonsouza/Trabalho_final_Razer_Alex)

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
