package br.ufpr.das.pedidos.api.rest.model;

import javax.persistence.*;

import java.io.Serializable;
import java.util.List;


@Entity(name = "item_do_pedido")
@IdClass(ItemDoPedidoModel.class)
public class ItemDoPedidoModel implements Serializable {

<<<<<<< HEAD
=======

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column
    private int quantidade;


    @OneToMany
    private List<PedidoModel> pedido;

    @ManyToOne(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    private ProdutoModel produto;
>>>>>>> parent of 349d46d (Merge branch 'master' of https://github.com/kleytonsouza/Trabalho_final_Razer_Alex)

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
}
