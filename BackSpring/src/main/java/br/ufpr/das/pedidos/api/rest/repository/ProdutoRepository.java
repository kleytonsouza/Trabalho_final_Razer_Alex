package br.ufpr.das.pedidos.api.rest.repository;
import br.ufpr.das.pedidos.api.rest.model.ProdutoModel;
import org.springframework.data.repository.CrudRepository;
import java.util.Optional;

public interface ProdutoRepository extends CrudRepository<ProdutoModel, Integer> {

    Optional<ProdutoModel> findById(Integer integer);
}
