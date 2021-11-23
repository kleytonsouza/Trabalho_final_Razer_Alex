package br.ufpr.das.pedidos.api.rest.repository;
import br.ufpr.das.pedidos.api.rest.model.ProdutoModel;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface ProdutoRepository extends JpaRepository<ProdutoModel, Integer> {

    Optional<ProdutoModel> findById(Integer integer);
}
