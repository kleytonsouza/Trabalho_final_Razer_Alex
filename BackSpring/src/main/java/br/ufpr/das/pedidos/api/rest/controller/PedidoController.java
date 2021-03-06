package br.ufpr.das.pedidos.api.rest.controller;
import br.ufpr.das.pedidos.api.event.ResourceCreatedEvent;
import br.ufpr.das.pedidos.api.rest.model.PedidoModel;
import br.ufpr.das.pedidos.api.rest.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/pedidos")
public class PedidoController {

    @Autowired
    private PedidoRepository repository;
    
    @Autowired
    private ApplicationEventPublisher publisher;

    @GetMapping(path = "/{id}")
    public PedidoModel consultar(Integer id) {
    	return repository.getById(id);
    }

    @DeleteMapping(path = "/{pedidoId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void remover(@PathVariable("pedidoId") Integer pedidoId) {
        repository.deleteById(pedidoId);
        
    }


    @GetMapping
    public List<PedidoModel> listar() {
        return repository.findAll();
    }

   
    @PostMapping
    public ResponseEntity<PedidoModel> salvar(@RequestBody PedidoModel pedidoModel, HttpServletResponse response) {
        PedidoModel novoPedido = repository.save(pedidoModel);
        
        publisher.publishEvent(new ResourceCreatedEvent(this, response, novoPedido.getId()));
        
        return ResponseEntity.status(HttpStatus.CREATED).body(novoPedido);
    }
    
    
    @GetMapping("/cliente/{id}")
    public Iterable<PedidoModel> getPedidoByCliente(@PathVariable Integer id) {
    	return repository.findAllByCliente(id);
    }

}
