package br.ufpr.das.pedidos.api.rest.model;

import javax.persistence.*;

import java.io.Serializable;
import java.util.List;


@Entity(name = "item_do_pedido")
@IdClass(ItemDoPedidoModel.class)
public class ItemDoPedidoModel implements Serializable {


    @Column
    private int quantidade;

    @Id
    @ManyToOne(cascade = CascadeType.ALL)
    @Embedded
    private ProdutoModel produto;

    @Id
    @ManyToOne(cascade = CascadeType.ALL)
    @Embedded
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
}
