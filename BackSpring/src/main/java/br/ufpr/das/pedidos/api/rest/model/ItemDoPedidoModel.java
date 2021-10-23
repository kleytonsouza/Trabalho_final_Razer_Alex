package br.ufpr.das.pedidos.api.rest.model;

import javax.persistence.*;

import java.io.Serializable;
import java.util.List;


@Entity(name = "item_do_pedido")
@IdClass(ItemDoPedidoModel.class)
public class ItemDoPedidoModel implements Serializable {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column
    private int quantidade;


    @Id
    @ManyToOne(cascade = CascadeType.ALL)
    private ProdutoModel produto;

    @Id
    @ManyToOne(cascade = CascadeType.ALL)
    private PedidoModel pedido;


    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public ProdutoModel getProduto() {
        return produto;
    }

    public void setProduto(ProdutoModel produto) {
        this.produto = produto;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public PedidoModel getPedido() {
        return pedido;
    }

    public void setPedido(PedidoModel pedido) {
        this.pedido = pedido;
    }
}
