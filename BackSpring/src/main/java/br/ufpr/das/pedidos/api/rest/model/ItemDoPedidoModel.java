package br.ufpr.das.pedidos.api.rest.model;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "item_do_pedido")
public class ItemDoPedidoModel implements Serializable {

    @OneToMany
    private List<PedidoModel> pedido;

    @ManyToOne(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    private ProdutoModel produto;


    public List<PedidoModel> getPedido() {
        return pedido;
    }

    public void setPedido(List<PedidoModel> pedido) {
        this.pedido = pedido;
    }

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

    public ClienteModel getCliente() {
        return cliente;
    }

    public void setCliente(ClienteModel cliente) {
        this.cliente = cliente;
    }
}