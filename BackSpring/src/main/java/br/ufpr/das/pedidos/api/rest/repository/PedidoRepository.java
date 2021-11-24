package br.ufpr.das.pedidos.api.rest.repository;

import br.ufpr.das.pedidos.api.rest.model.PedidoModel;
import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;

//import java.util.Optional;

public interface PedidoRepository extends JpaRepository<PedidoModel, Integer> {

	List<PedidoModel> findByCliente(Integer cliente_id);

//@Query("SELECT t FROM item_do_pedido t WHERE pedido_id = ?1")
// findItemByCliente(Integer id);

}