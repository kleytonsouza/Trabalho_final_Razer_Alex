package br.ufpr.das.pedidos.api.rest.model;
import javax.persistence.*;
import java.io.Serializable;

@Entity(name = "item_do_pedido")
public class ItemDoPedidoModel implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column
    private int quantidade;

    @OneToOne(cascade = CascadeType.MERGE)
    private ProdutoModel produto;

    @OneToOne(cascade = CascadeType.MERGE)
    private ClienteModel cliente;

    @ManyToOne
    @JoinColumn(name = "pedido_id", referencedColumnName = "id")
    private PedidoModel mPedido;

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

    public ClienteModel getCliente() {
        return cliente;
    }

    public void setCliente(ClienteModel cliente) {
        this.cliente = cliente;
    }

    public PedidoModel getPedido() {
        return mPedido;
    }

    public void setPedido(PedidoModel mPedido) {
        this.mPedido = mPedido;
    }
}
