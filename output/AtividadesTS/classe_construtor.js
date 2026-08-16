"use strict";
class Pedido {
    produto;
    valorTotal;
    previsaoEntrega;
    id = '';
    constructor(produto, valorTotal, previsaoEntrega) {
        this.produto = produto;
        this.valorTotal = valorTotal;
        this.previsaoEntrega = previsaoEntrega;
    }
}
const Pedido1 = new Pedido('Teclado Mecanico', 240, new Date('2026-08-17'));
console.log(Pedido1.id);
//# sourceMappingURL=classe_construtor.js.map