package br.ufpr.das.pedidos.api.rest.model;


import javax.persistence.*;

@Entity(name = "item_do_pedido")
@Table(name = "item_do_pedido")
public class ItemDoPedidoModel{

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
 
    @Column
    private int quantidade;

    @ManyToOne
    @JoinColumn(name="pedido_id", nullable=false)
    private PedidoModel pedido;

    @ManyToOne
    @JoinColumn(name="produto_id", nullable=false)
    private ProdutoModel produto;

    
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
    
    public void setPedido(PedidoModel pedido) {
        this.pedido = pedido;
    }
    
    public PedidoModel getPedido() {
        return pedido;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}

   