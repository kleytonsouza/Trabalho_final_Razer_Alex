package br.ufpr.das.pedidos.api.rest.repository;

import br.ufpr.das.pedidos.api.rest.model.ClienteModel;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface ClienteRepository extends CrudRepository<ClienteModel, Integer> {


    Optional<ClienteModel> findByCpf(Integer integer);

    @Query("SELECT t FROM cliente t WHERE cpf = ?1")
    Iterable<ClienteModel> findAllByCpf(String cpf);


}
