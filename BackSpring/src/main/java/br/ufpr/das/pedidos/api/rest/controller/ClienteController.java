package br.ufpr.das.pedidos.api.rest.controller;


import br.ufpr.das.pedidos.api.event.ResourceCreatedEvent;
import br.ufpr.das.pedidos.api.rest.model.ClienteModel;
import br.ufpr.das.pedidos.api.rest.repository.ClienteRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.PrintStream;
import java.util.List;
import javax.servlet.http.HttpServletResponse;


@RestController
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    private ClienteRepository repository;

    //@Autowired
    //private PedidoRepository repositoryPedidos;
    
    @Autowired
    private ApplicationEventPublisher publisher;

    
    @GetMapping("/{id}")
    public ClienteModel consultar(Integer id) {
    	return repository.getById(id);
    }

       
    @GetMapping("/cpf/{cpf}")
    public ClienteModel consultarCpf(Integer cpf) {
        return repository.findByCpf(cpf);
    }


//    @GetMapping("/{clienteId}/pedidos")
//    public ResponseEntity<Optional<PedidoModel>> consultarPedidos(@PathVariable Integer clienteId) {
//        Optional<PedidoModel> cliente = repositoryPedidos.findAllByCliente(clienteId);
//        return new ResponseEntity<>(cliente, HttpStatus.OK);
//    }


    @DeleteMapping("/{clienteId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void remover(@PathVariable("clienteId") Integer clienteId) {
        repository.deleteById(clienteId);
        
    }

    @GetMapping
    public List<ClienteModel> listar() {
        return repository.findAll();
    }

    @PostMapping
    public ResponseEntity<ClienteModel> salvar( @RequestBody ClienteModel clienteModel, HttpServletResponse response) {
    	ClienteModel  clienteSalvo =  repository.save(clienteModel);
        
        publisher.publishEvent(new ResourceCreatedEvent(this, response, clienteSalvo.getId()));
        
        return ResponseEntity.status(HttpStatus.CREATED).body(clienteSalvo);
    }

    @PutMapping("/{clienteId}")
    public ResponseEntity<ClienteModel> atualizar(@PathVariable Integer clienteId, @RequestBody ClienteModel cliente) {
        ClienteModel clienteUpdate = repository.getById(clienteId);
        if (clienteUpdate == null) {
        	throw new EmptyResultDataAccessException(1);
        }
        BeanUtils.copyProperties(cliente, clienteUpdate, "clienteId");
        repository.save(clienteUpdate);
        return ResponseEntity.ok(clienteUpdate);
    }


}
