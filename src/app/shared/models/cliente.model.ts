
export class Cliente {
    static _id: number = 0;
    public id: number;  

    constructor(public cpf: string, public nome?: string, public sobrenome?: string, public pedido?: [Pedido] )
    { 
        this.id = Cliente._id++
    }  
}

export class Pedido{
    
    constructor(public cliente: Cliente, public itemsPedido: [itemDoPedido]){
        this.cliente = cliente;
        this.itemsPedido = itemsPedido;      
    }

}

export class Produto{

    constructor(public id_produto: number, public description: string){
        this.id_produto = id_produto;
        this.description = description;
    }
}

export class itemDoPedido{
    
    constructor(public pedido: Pedido, public produto: Produto, public quantidade: number){
        this.pedido = pedido;
        this.produto = produto;
        this.quantidade = quantidade;
    }

}