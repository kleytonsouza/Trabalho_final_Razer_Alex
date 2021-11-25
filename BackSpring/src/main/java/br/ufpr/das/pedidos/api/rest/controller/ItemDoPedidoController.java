package br.ufpr.das.pedidos.api.rest.controller;

import java.util.List;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import br.ufpr.das.pedidos.api.event.ResourceCreatedEvent;
import br.ufpr.das.pedidos.api.rest.model.ItemDoPedidoModel;
import br.ufpr.das.pedidos.api.rest.repository.ItemDoPedidoRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/itemdopedido")
public class ItemDoPedidoController {

    @Autowired
    private ItemDoPedidoRepository repository;

    @Autowired
    private ApplicationEventPublisher publisher;

    @GetMapping
    public List<ItemDoPedidoModel> listar() {
        return repository.findAll();
    }

    @GetMapping("/pedido/{id}")
    public Iterable<ItemDoPedidoModel> getItemByPedido(@PathVariable Integer id) {
        return repository.findAllById(id);
    }

    @GetMapping("/produto/{id}")
    public Iterable<ItemDoPedidoModel> getPedidoByProduto(@PathVariable Integer id) {
        return repository.findAllByProduto(id);
    }

    @PostMapping
    public ResponseEntity<ItemDoPedidoModel> salvar(@RequestBody ItemDoPedidoModel itemDoPedidoModel,
            HttpServletResponse response) {
        ItemDoPedidoModel novoItemDoPedido = repository.save(itemDoPedidoModel);

        publisher.publishEvent(new ResourceCreatedEvent(this, response, novoItemDoPedido.getId()));

        return ResponseEntity.status(HttpStatus.CREATED).body(novoItemDoPedido);
    }

}
