console.log('Hello,Word');

console.log('============');

const nome = 'José';

console.log('Olá'+ nome + '. Seja bem vindo!!');

console.log('============');

class Produto {
    
    nome:string;
    valor: number;

    constructor(produtoNome:string, produtoValor:number) {

        this.nome = produtoNome;
        this.valor = produtoValor;

    }
}

const Pcgamer = new Produto('PC Gamer', 5000);