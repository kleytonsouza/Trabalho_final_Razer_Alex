import { Pedido } from "../shared/models/pedido.model";

export const PEDIDO: any = {
    1: {
        id: 1,
        data: null,
        cliente_id: 5
    },
    2: {
        id: 2,
        data: null,
        cliente_id: 1
    },
    3: {
        id: 3,
        data: null,
        cliente_id: 1
    },
    4: {
        id: 4,
        data: null,
        cliente_id: 2
    },
    5: {
        id: 5,
        data: null,
        cliente_id: 4
    },
    6: {
        id: 6,
        data: null,
        cliente_id: 4
    },
    7: {
        id: 7,
        data: null,
        cliente_id: 6
    }

};

export const PEDIDOSLISTA: Pedido[] = [
    {
        id: 1,
        data: new Date,
        cliente: {
            id: 3,
            cpf: '02468024680',
            nome: 'Meliodas',
            sobrenome: 'Pecado da Fúria'
        }
    },
    {
        id: 2,
        data: new Date,
        cliente: {   
            id: 1,
            cpf: '12345678910',
            nome: 'Goku',
            sobrenome: 'San'
        }
    },
    {
        id: 3,
        data: new Date,
        cliente: {   
            id: 1,
            cpf: '12345678910',
            nome: 'Goku',
            sobrenome: 'San'
        }
    },
    {
        id: 4,
        data: new Date,
        cliente: {
            id: 2,
            cpf: '01987654321',
            nome: 'Seya',
            sobrenome: 'de Pegasus'
        }
    },
    {
        id: 5,
        data: new Date,
        cliente: {
            id: 4,
            cpf: '02468024681',
            nome: 'Ken',
            sobrenome: 'Masters'
        }
    },
    {
        id: 6,
        data: new Date,
        cliente: {
            id: 4,
            cpf: '02468024681',
            nome: 'Ken',
            sobrenome: 'Masters'
        }
    },
    {
        id: 7,
        data: new Date,
        cliente: {
            id: 6,
            cpf: '02468024600',
            nome: 'Kirito',
            sobrenome: 'Player 1'
        }
    }

];

export function getCliente(clienteID: number) {
    return PEDIDO[clienteID];
  }