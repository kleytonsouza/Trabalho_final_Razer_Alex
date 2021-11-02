package br.ufpr.das.pedidos.api.rest.model;
import javax.persistence.*;

@Entity
@Table(name = "cliente", uniqueConstraints=@UniqueConstraint(name = "unic_cpf", columnNames = {"cpf"}))
public class ClienteModel {


    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;

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


}
