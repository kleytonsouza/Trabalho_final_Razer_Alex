package br.ufpr.das.pedidos.api.rest.repository;

import br.ufpr.das.pedidos.api.rest.model.ClienteModel;
import br.ufpr.das.pedidos.api.rest.model.PedidoModel;
import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;

//import org.springframework.data.jpa.repository.Query;

//import java.util.Optional;

public interface PedidoRepository extends JpaRepository<PedidoModel, Integer> {

	List<PedidoModel> findByCliente(Integer id_cliente);

	//@Query("SELECT t FROM pedido t WHERE cliente_id = ?1")
	//Iterable<PedidoModel> findAllByCpf(Integer cpf);

}