
export interface Produto{
    id: number;
    descricao: string;
}
export class Produto {
    constructor(
      public  id: number,
      public descricao: string){
    }
}
