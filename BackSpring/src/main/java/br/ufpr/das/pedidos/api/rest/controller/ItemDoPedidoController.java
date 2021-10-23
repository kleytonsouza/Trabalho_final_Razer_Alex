package br.ufpr.das.pedidos.api.rest.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.ufpr.das.pedidos.api.rest.model.ItemDoPedidoModel;
import br.ufpr.das.pedidos.api.rest.repository.ItemDoPedidoRepository;

@RestController
public class ItemDoPedidoController {
    @Autowired
    private ItemDoPedidoRepository repository;

    @GetMapping(path = "/v1/public/itemDoPedido/{itemDoPedidoId}")
    public ResponseEntity<Optional<ItemDoPedidoModel>> consultar(@PathVariable Integer itemDoPedidoId) {

        Optional<ItemDoPedidoModel> itemDoPedido = repository.findById(itemDoPedidoId);
        return new ResponseEntity<>(itemDoPedido, HttpStatus.OK);
    }



    @DeleteMapping(path = "/v1/public/itemDoPedido/delete/{itemDoPedidoId}")
    public ResponseEntity<?> deletar(@PathVariable Integer itemDoPedidoId) {
        repository.deleteById(itemDoPedidoId);
        return new ResponseEntity<>(HttpStatus.OK);
    }




     @PostMapping(path = "/v1/public/itemDoPedido/remover")
    public ResponseEntity<?> deletarPost(@RequestBody ItemDoPedidoModel itemDoPedidoModel) {
        //repository.deleteById(itemDoPedidoId);
        repository.delete(itemDoPedidoModel);
        return new ResponseEntity<>(HttpStatus.OK);
    }



    @GetMapping(path = "/v1/public/itemDoPedido/listar")
    public ResponseEntity<Iterable<ItemDoPedidoModel>> listar() {

        Iterable<ItemDoPedidoModel> itemDoPedidos = repository.findAll();
        return new ResponseEntity<>(itemDoPedidos, HttpStatus.OK);
    }


    @PostMapping(path = "/v1/public/itemDoPedido/salvar")
    public ResponseEntity<ItemDoPedidoModel> salvar(@RequestBody ItemDoPedidoModel itemDoPedidoModel) {
        ItemDoPedidoModel novoItemDoPedido = repository.save(itemDoPedidoModel);
        return new ResponseEntity<>(novoItemDoPedido, HttpStatus.CREATED);
    }



    @PostMapping(path = "/v1/public/itemDoPedido/atualizar")
    public ResponseEntity<ItemDoPedidoModel> atualizar(@RequestBody ItemDoPedidoModel itemDoPedidoModel) {
        ItemDoPedidoModel novoItemDoPedido = repository.save(itemDoPedidoModel);
        return new ResponseEntity<>(novoItemDoPedido, HttpStatus.OK);
    }
    
}
