package br.ufpr.das.pedidos.api.rest.model;

import javax.persistence.*;
import java.util.List;


@Entity(name = "item_do_pedido")
public class ItemDoPedidoModel {

    @Id
    private int id;

    @Column
    private int quantidade;

    @OneToOne
    private ProdutoModel produto;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

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
