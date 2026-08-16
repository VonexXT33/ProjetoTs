"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixin_1 = __importDefault(require("./applyMixin"));
class ProdutoFinal {
    vender(quantidade) {
        return `Foram vendidos ${quantidade} de itens deste produto`;
    }
    comprar(quantidade) {
        return `Foram compradas ${quantidade} de itens deste produto`;
    }
}
class Movel {
    sentar() {
        return `Voce sentou no movel`;
    }
    empurrar(metros) {
        return `Voce empurrou o movel ${metros} metros de distancia`;
    }
}
class Sofa {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
(0, applyMixin_1.default)(Sofa, [ProdutoFinal, Movel]);
const Produto = new Sofa('meu sofa');
console.log(Produto.vender(25));
console.log(Produto.empurrar(50));
console.log(Produto.nome);
//# sourceMappingURL=index.js.map