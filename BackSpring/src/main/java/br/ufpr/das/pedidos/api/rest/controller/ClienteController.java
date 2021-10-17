package br.ufpr.das.pedidos.api.rest.controller;


import br.ufpr.das.pedidos.api.rest.model.ClienteModel;
import br.ufpr.das.pedidos.api.rest.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ClienteController {


    @Autowired
    private ClienteRepository repository;


    @GetMapping(path = "/v1/public/cliente/{clienteId}")
    public ResponseEntity<Optional<ClienteModel>> consultar(@PathVariable Integer clienteId) {

        Optional<ClienteModel> cliente = repository.findById(clienteId);
        return new ResponseEntity<>(cliente, HttpStatus.OK);
    }


    @DeleteMapping(path = "/v1/public/cliente/delete/{clienteId}")
    public ResponseEntity<?> deletar(@PathVariable Integer clienteId) {
        repository.deleteById(clienteId);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @GetMapping(path = "/v1/public/cliente/listar")
    public ResponseEntity<Iterable<ClienteModel>> listar() {

        Iterable<ClienteModel> clientes = repository.findAll();
        return new ResponseEntity<>(clientes, HttpStatus.OK);
    }


    @PostMapping(path = "/v1/public/cliente/salvar")
    public ResponseEntity<ClienteModel> salvar(@RequestBody ClienteModel clienteModel) {
        ClienteModel novoCliente = repository.save(clienteModel);
        return new ResponseEntity<>(novoCliente, HttpStatus.CREATED);
    }



    @PutMapping(path = "/v1/public/cliente/atualizar")
    public ResponseEntity<ClienteModel> atualizar(@RequestBody ClienteModel clienteModel) {
        ClienteModel novoCliente = repository.save(clienteModel);
        return new ResponseEntity<>(novoCliente, HttpStatus.CREATED);
    }


}
