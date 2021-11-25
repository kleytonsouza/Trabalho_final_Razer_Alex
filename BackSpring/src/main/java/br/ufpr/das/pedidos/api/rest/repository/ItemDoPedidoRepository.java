package br.ufpr.das.pedidos.api.rest.repository;

import br.ufpr.das.pedidos.api.rest.model.ItemDoPedidoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ItemDoPedidoRepository extends JpaRepository<ItemDoPedidoModel, Integer> {

    @Query("SELECT t FROM item_do_pedido t WHERE pedido_id = ?1")
	Iterable<ItemDoPedidoModel> findAllById(Integer id);

	@Query("SELECT t FROM item_do_pedido t WHERE produto_id = ?1")
	Iterable<ItemDoPedidoModel> findAllByProduto(Integer id);

}
