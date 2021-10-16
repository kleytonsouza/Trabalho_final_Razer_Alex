package br.ufpr.das.pedidos.api.rest.repository;

import br.ufpr.das.pedidos.api.rest.model.ItemDoPedidoModel;
import org.springframework.data.repository.CrudRepository;

public interface ItemDoPedidoRepository extends CrudRepository<ItemDoPedidoModel, Integer> {
}
