import applyMixins from "./applyMixin";


class ProdutoFinal {

    vender(quantidade: number) {

        return `Foram vendidos ${quantidade} de itens deste produto`;
        
    }

    comprar(quantidade: number) {

        return `Foram compradas ${quantidade} de itens deste produto`;

    }


}

class Movel {

   sentar() {

    return `Voce sentou no movel`;

   }

   empurrar(metros: number) {

    return `Voce empurrou o movel ${metros} metros de distancia`;

   }

}

class Sofa  {

constructor(
    public nome: string
)  { }

}

interface Sofa extends ProdutoFinal,Movel {}

applyMixins(Sofa, [ProdutoFinal,Movel]);

const Produto = new Sofa ('meu sofa');

console.log(Produto.vender(25));
console.log(Produto.empurrar(50));
console.log(Produto.nome);

