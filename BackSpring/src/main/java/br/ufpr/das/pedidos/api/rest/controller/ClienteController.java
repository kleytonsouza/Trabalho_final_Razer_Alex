package br.ufpr.das.pedidos.api.rest.controller;


import br.ufpr.das.pedidos.api.rest.model.ClienteModel;
import br.ufpr.das.pedidos.api.rest.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ClienteController {



    @Autowired
    private ClienteRepository repository;


    @GetMapping(path = "/v1/public/cliente/{clienteId}")
    public ResponseEntity consultar(@PathVariable Integer clienteId){
        return repository.findById(clienteId)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build())
                ;
    }

    @GetMapping(path = "/v1/public/cliente/listar")
    public ResponseEntity listar(){
        return ResponseEntity.ok().body(repository.findAll()) ;
    }




    @PostMapping(path = "/v1/public/cliente/save")
    public ClienteModel salvar(@RequestBody ClienteModel clienteModel){
        return repository.save(clienteModel);
    }




}
