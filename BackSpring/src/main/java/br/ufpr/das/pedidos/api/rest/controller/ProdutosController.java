package br.ufpr.das.pedidos.api.rest.controller;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.ufpr.das.pedidos.api.event.ResourceCreatedEvent;
import br.ufpr.das.pedidos.api.rest.model.ProdutoModel;
import br.ufpr.das.pedidos.api.rest.repository.ProdutoRepository;


@RestController
@RequestMapping("/produtos")
public class ProdutosController {
	
	@Autowired
	private ProdutoRepository repository;
	
	@Autowired
    private ApplicationEventPublisher publisher;
	
	@GetMapping(path = "/{id}")
	public ResponseEntity<Optional<ProdutoModel>> consultar(@PathVariable Integer id){
		Optional<ProdutoModel> produto = repository.findById(id);
		return new ResponseEntity<>(produto, HttpStatus.OK);
	}
	
	@DeleteMapping("/{produtoId}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable("produtoId") Integer produtoId) {
        repository.deleteById(produtoId);
        
    }
	
	@GetMapping
    public List<ProdutoModel> listar() {
		 return repository.findAll();
    }

	@PostMapping
    public ResponseEntity<ProdutoModel> salvar(@RequestBody ProdutoModel produtoModel, HttpServletResponse response) {
		ProdutoModel  produtoSalvo =  repository.save(produtoModel);
        
        publisher.publishEvent(new ResourceCreatedEvent(this, response, produtoSalvo.getId()));
        
        return ResponseEntity.status(HttpStatus.CREATED).body(produtoSalvo);
    }

	@PutMapping("/{produtoId}")
    public ResponseEntity<ProdutoModel> atualizar(@PathVariable Integer produtoId, @RequestBody ProdutoModel produto) {
		ProdutoModel produtoUpdate = repository.getById(produtoId);
        if (produtoUpdate == null) {
        	throw new EmptyResultDataAccessException(1);
        }
        BeanUtils.copyProperties(produto, produtoUpdate, "id");
        repository.save(produtoUpdate);
        return ResponseEntity.ok(produtoUpdate);
    }	
}
