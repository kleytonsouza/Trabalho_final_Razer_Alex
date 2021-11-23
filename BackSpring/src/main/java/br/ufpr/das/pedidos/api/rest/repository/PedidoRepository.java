package br.ufpr.das.pedidos.api.rest.repository;
import br.ufpr.das.pedidos.api.rest.model.ClienteModel;
import br.ufpr.das.pedidos.api.rest.model.PedidoModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface PedidoRepository extends JpaRepository<PedidoModel, Integer> {

Optional<PedidoModel> findById(Integer integer);

//@Query("SELECT t FROM item_do_pedido t WHERE pedido_id = ?1")
// findItemByCliente(Integer id);

}