package br.ufpr.das.pedidos.api.rest.repository;

import br.ufpr.das.pedidos.api.rest.model.ClienteModel;
import br.ufpr.das.pedidos.api.rest.model.PedidoModel;

import org.hibernate.annotations.Any;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface PedidoRepository extends CrudRepository<PedidoModel, Integer> {


    Optional<PedidoModel>  findAllByCliente(Integer idCliente);


}
