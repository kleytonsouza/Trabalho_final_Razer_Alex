package br.ufpr.das.pedidos.api.rest.controller;

import br.ufpr.das.pedidos.api.rest.model.PedidoModel;
import br.ufpr.das.pedidos.api.rest.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

public class PedidoController {




    @Autowired
    private PedidoRepository repository;


    @GetMapping(path = "/v1/public/pedido/{pedidoId}")
    public ResponseEntity<Optional<PedidoModel>> consultar(@PathVariable Integer pedidoId) {

        Optional<PedidoModel> pedido = repository.findById(pedidoId);
        return new ResponseEntity<>(pedido, HttpStatus.OK);
    }
 



    @DeleteMapping(path = "/v1/public/pedido/delete/{pedidoId}")
    public ResponseEntity<?> deletar(@PathVariable Integer pedidoId) {
        repository.deleteById(pedidoId);
        return new ResponseEntity<>(HttpStatus.OK);
    }




     @PostMapping(path = "/v1/public/pedido/remover")
    public ResponseEntity<?> deletarPost(@RequestBody PedidoModel pedidoModel) {
        //repository.deleteById(pedidoId);
        repository.delete(pedidoModel);
        return new ResponseEntity<>(HttpStatus.OK);
    }



    @GetMapping(path = "/v1/public/pedido/listar")
    public ResponseEntity<Iterable<PedidoModel>> listar() {

        Iterable<PedidoModel> pedidos = repository.findAll();
        return new ResponseEntity<>(pedidos, HttpStatus.OK);
    }


    @PostMapping(path = "/v1/public/pedido/salvar")
    public ResponseEntity<PedidoModel> salvar(@RequestBody PedidoModel pedidoModel) {
        PedidoModel novoPedido = repository.save(pedidoModel);
        return new ResponseEntity<>(novoPedido, HttpStatus.CREATED);
    }



    @PostMapping(path = "/v1/public/pedido/atualizar")
    public ResponseEntity<PedidoModel> atualizar(@RequestBody PedidoModel pedidoModel) {
        PedidoModel novoPedido = repository.save(pedidoModel);
        return new ResponseEntity<>(novoPedido, HttpStatus.OK);
    }





}
