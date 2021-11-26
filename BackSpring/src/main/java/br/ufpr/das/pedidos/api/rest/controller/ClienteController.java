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
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    private ClienteRepository repository;

    @Autowired
    private ApplicationEventPublisher publisher;

    @GetMapping("/{id}")
    public Optional<ClienteModel> consultar(@PathVariable Integer id) {
        return repository.findById(id);
    }

    @GetMapping("/cpf/{cpf}")
    public ClienteModel consultarCpf(@PathVariable String cpf) {
        return repository.findByCpf(cpf);
    }

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
    public ResponseEntity<ClienteModel> salvar(@RequestBody ClienteModel clienteModel, HttpServletResponse response) {
        ClienteModel clienteSalvo = repository.save(clienteModel);

        publisher.publishEvent(new ResourceCreatedEvent(this, response, clienteSalvo.getId()));

        return ResponseEntity.status(HttpStatus.CREATED).body(clienteSalvo);
    }

    @PutMapping("/{clienteId}")
    public ResponseEntity<ClienteModel> atualizar(@PathVariable Integer clienteId, @RequestBody ClienteModel cliente) {
        ClienteModel clienteUpdate = repository.getById(clienteId);
        if (clienteUpdate == null) {
            throw new EmptyResultDataAccessException(1);
        }
        BeanUtils.copyProperties(cliente, clienteUpdate, "id");
        repository.save(clienteUpdate);
        return ResponseEntity.ok(clienteUpdate);
    }

}
