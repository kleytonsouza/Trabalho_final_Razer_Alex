package br.ufpr.das.pedidos.api.rest.model;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;


@Entity(name = "cliente")
@Table(name = "cliente", uniqueConstraints=@UniqueConstraint(name = "unic_cpf", columnNames = {"cpf"}))
public class ClienteModel {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;

    @JsonIgnore
    @OneToMany(mappedBy="cliente")
    private List<PedidoModel> pedidos;
    
    @Column(length = 11)
    private String cpf;
    
    @Column(length = 30)
    private String nome;
    
    @Column(length = 50)
    private String sobrenome;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }
    
    public List<PedidoModel> getPedidos() {
        return pedidos;
    }

    public void setPedidos(List<PedidoModel> pedidos) {
        this.pedidos = pedidos;
    }


}
