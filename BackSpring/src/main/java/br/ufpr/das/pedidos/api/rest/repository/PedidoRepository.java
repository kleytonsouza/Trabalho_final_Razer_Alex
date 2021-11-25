package br.ufpr.das.pedidos.api.rest.repository;
import br.ufpr.das.pedidos.api.rest.model.PedidoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PedidoRepository extends JpaRepository<PedidoModel, Integer> {

	@Query("SELECT t FROM pedido t WHERE cliente_id = ?1")
	Iterable<PedidoModel> findAllByCliente(Integer id);


}