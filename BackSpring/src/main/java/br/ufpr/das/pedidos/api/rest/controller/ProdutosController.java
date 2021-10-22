package br.ufpr.das.pedidos.api.rest.controller;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.ufpr.das.pedidos.api.rest.model.ProdutoModel;
import br.ufpr.das.pedidos.api.rest.repository.ProdutoRepository;


public class ProdutosController {
	
	@Autowired
	private ProdutoRepository repository;
	
	@GetMapping(path = "/v1/public/produto/{id}")
	public ResponseEntity<Optional<ProdutoModel>> consultar(@PathVariable Integer id){
		
		Optional<ProdutoModel> produto = repository.findById(id);
		return new ResponseEntity<>(produto, HttpStatus.OK);
	}
	
	@PostMapping(path = "/v1/public/produto/remover")
	public ResponseEntity<?> deletarPost(@RequestBody ProdutoModel produtoModel) {
        repository.delete(produtoModel);
        return new ResponseEntity<>(HttpStatus.OK);
    }
	
	@GetMapping(path = "/v1/public/produto/listar")
    public ResponseEntity<Iterable<ProdutoModel>> listar() {

        Iterable<ProdutoModel> produtos = repository.findAll();
        return new ResponseEntity<>(produtos, HttpStatus.OK);
    }

    @PostMapping(path = "/v1/public/produto/salvar")
    public ResponseEntity<ProdutoModel> salvar(@RequestBody ProdutoModel produtoModel) {
    	ProdutoModel novoProduto = repository.save(produtoModel);
        return new ResponseEntity<>(novoProduto, HttpStatus.CREATED);
    }

    @PostMapping(path = "/v1/public/produto/atualizar")
    public ResponseEntity<ProdutoModel> atualizar(@RequestBody ProdutoModel produtoModel) {
    	ProdutoModel novoProduto = repository.save(produtoModel);
        return new ResponseEntity<>(novoProduto, HttpStatus.OK);
    }
	
	
}
