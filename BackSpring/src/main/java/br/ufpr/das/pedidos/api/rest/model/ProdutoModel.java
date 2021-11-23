package br.ufpr.das.pedidos.api.rest.model;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;


@Entity(name = "produto")
public class ProdutoModel {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;

    @Column(length = 128)
    private String descricao;

    @OneToMany(mappedBy="produto")
    private List<ItemDoPedidoModel> itens;
    
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