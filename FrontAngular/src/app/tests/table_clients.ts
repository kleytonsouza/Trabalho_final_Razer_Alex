import { Cliente } from "../shared/models/cliente.model";

export const CLIENTES: any = {
    1: {
        id: 1,
        cpf: '12345678910',
        nome: 'Goku',
        sobrenome: 'San'
    },
    2: {
        id: 2,
        cpf: '01987654321',
        nome: 'Seya',
        sobrenome: 'de Pegasus'
    },
    3: {
        id: 3,
        cpf: '02468024680',
        nome: 'Meliodas',
        sobrenome: 'Pecado da Fúria'
    },
    4: {
        id: 4,
        cpf: '02468024681',
        nome: 'Ken',
        sobrenome: 'Masters'
    },
    5: {
        id: 5,
        cpf: '02468024632',
        nome: 'Baki',
        sobrenome: 'Hamma'
    },
    6: {
        id: 6,
        cpf: '02468024600',
        nome: 'Kirito',
        sobrenome: 'Player 1'
    },
    7: {
        id: 7,
        cpf: '02456852695',
        nome: 'Venom',
        sobrenome: 'We Are'
    }

};

export const CLIENTESLISTA: Cliente[] = [
    {   
        id: 1,
        cpf: '12345678910',
        nome: 'Goku',
        sobrenome: 'San'
    },
    {
        id: 2,
        cpf: '01987654321',
        nome: 'Seya',
        sobrenome: 'de Pegasus'
    },
    {
        id: 3,
        cpf: '02468024680',
        nome: 'Meliodas',
        sobrenome: 'Pecado da Fúria'
    },
    {
        id: 4,
        cpf: '02468024681',
        nome: 'Ken',
        sobrenome: 'Masters'
    },
    {
        id: 5,
        cpf: '02468024632',
        nome: 'Baki',
        sobrenome: 'Hamma'
    },
    {
        id: 6,
        cpf: '02468024600',
        nome: 'Kirito',
        sobrenome: 'Player 1'
    },
    {
        id: 7,
        cpf: '02456852695',
        nome: 'Venom',
        sobrenome: 'We Are'
    }

];

// export function getCliente(clienteID: number) {
//     return CLIENTES[clienteID];
//   }