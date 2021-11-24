package br.ufpr.das.pedidos.api.rest.repository;

import br.ufpr.das.pedidos.api.rest.model.ItemDoPedidoModel;

import org.springframework.data.jpa.repository.JpaRepository;


public interface ItemDoPedidoRepository extends JpaRepository<ItemDoPedidoModel, Integer> {
}
