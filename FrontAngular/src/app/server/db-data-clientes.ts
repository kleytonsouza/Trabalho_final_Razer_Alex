import { Cliente } from "../shared/models/cliente.model";

export const CLIENTES: any = {
    1: {
        id: 1,
        cpf: '12345678910',
        nome: 'Fulano',
        sobrenome: 'de Tal'
    },
    2: {
        id: 2,
        cpf: '01987654321',
        nome: 'Cicrano',
        sobrenome: 'de Oliveira'
    },
    3: {
        id: 3,
        cpf: '02468024680',
        nome: 'Zé',
        sobrenome: 'Ruela'
    }

};

export const CLIENTESLISTA: Cliente[] = [{
    id: 1,
    cpf: '12345678910',
    nome: 'Fulano',
    sobrenome: 'de Tal'
  }, {
    id: 2,
    cpf: '01987654321',
    nome: 'Cicrano',
    sobrenome: 'de Oliveira'
  }, {
    id: 3,
    cpf: '02468024680',
    nome: 'Zé',
    sobrenome: 'Ruela'
  }];

export function getCliente(clienteID: number) {
    return CLIENTES[clienteID];
  }