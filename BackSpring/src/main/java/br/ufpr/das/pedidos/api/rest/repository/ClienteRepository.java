package br.ufpr.das.pedidos.api.rest.repository;

import br.ufpr.das.pedidos.api.rest.model.ClienteModel;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.jpa.repository.Query;

public interface ClienteRepository extends JpaRepository<ClienteModel, Integer> {

    ClienteModel findByCpf(String cpf);
    
    Optional<ClienteModel> findById(Integer id);

//    @Query("SELECT t FROM cliente t WHERE cpf = ?1")
//    Iterable<ClienteModel> findAllByCpf(Integer cpf);


}
