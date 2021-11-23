package br.ufpr.das.pedidos.api.rest.repository;

import br.ufpr.das.pedidos.api.rest.model.ClienteModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ClienteRepository extends JpaRepository<ClienteModel, Integer> {


    ClienteModel findByCpf(Integer integer);

    @Query("SELECT t FROM cliente t WHERE cpf = ?1")
    Iterable<ClienteModel> findAllByCpf(String cpf);


}
