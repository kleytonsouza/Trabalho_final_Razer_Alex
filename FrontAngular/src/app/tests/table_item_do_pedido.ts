import { ItemDoPedido } from "../shared/models/itemdopedido.model";

export const PRODUTO: any = {
    1: {
        id: 1,
        quantidade: 13,
        produto: {
            id: 1,
            descricao: 'Espada de Samurai'
        },
        pedido: {
            id: 1,
            data: new Date,
            cliente: {
                id: 3,
                cpf: '02468024680',
                nome: 'Meliodas',
                sobrenome: 'Pecado da Fúria'
            }
        }
    },
    2: {
        id: 1,
        quantidade: 13,
        produto: {
            id: 1,
            descricao: 'Espada de Samurai'
        },
        pedido: {
            id: 1,
            data: new Date,
            cliente: {
                id: 3,
                cpf: '02468024680',
                nome: 'Meliodas',
                sobrenome: 'Pecado da Fúria'
            }
        }
    },
    3: {
        id: 1,
        quantidade: 13,
        produto: {
            id: 1,
            descricao: 'Espada de Samurai'
        },
        pedido: {
            id: 1,
            data: new Date,
            cliente: {
                id: 3,
                cpf: '02468024680',
                nome: 'Meliodas',
                sobrenome: 'Pecado da Fúria'
            }
        }
    }
};

export const ITEMDOPEDIDOLISTA: ItemDoPedido[] = [
    {
        id: 1,
        quantidade: 13,
        produto: {
            id: 1,
            descricao: 'Espada de Samurai'
        },
        pedido: {
            id: 1,
            data: new Date,
            cliente: {
                id: 3,
                cpf: '02468024680',
                nome: 'Meliodas',
                sobrenome: 'Pecado da Fúria'
            }
        },
    },
    {
        id: 1,
        quantidade: 13,
        produto: {
            id: 1,
            descricao: 'Espada de Samurai'
        },
        pedido: {
            id: 1,
            data: new Date,
            cliente: {
                id: 3,
                cpf: '02468024680',
                nome: 'Meliodas',
                sobrenome: 'Pecado da Fúria'
            }
        }
    },
    {
        id: 1,
        quantidade: 13,
        produto: {
            id: 1,
            descricao: 'Espada de Samurai'
        },
        pedido: {
            id: 1,
            data: new Date,
            cliente: {
                id: 3,
                cpf: '02468024680',
                nome: 'Meliodas',
                sobrenome: 'Pecado da Fúria'
            }
        }
    }

];

// export function getCliente(clienteID: number) {
//     return CLIENTES[clienteID];
//   }