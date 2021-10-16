package br.ufpr.das.pedidos.api.rest.repository;

import br.ufpr.das.pedidos.api.rest.model.ClienteModel;
import org.springframework.data.repository.CrudRepository;

public interface ClienteRepository extends CrudRepository<ClienteModel, Integer> {
}
