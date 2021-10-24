package br.ufpr.das.pedidos.api.rest.model;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name="produto")
public class ProdutoModel {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column(length = 128)
    private String descricao;


    @OneToMany
    private List<ItemDoPedidoModel> itemDoPedido;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

}
