package br.ufpr.das.pedidos.api.rest.repository;

import br.ufpr.das.pedidos.api.rest.model.PedidoModel;
import org.springframework.data.repository.CrudRepository;

public interface PedidoRepository extends CrudRepository<PedidoModel, Integer> {
}
