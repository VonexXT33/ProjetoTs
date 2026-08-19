"use strict";
class Pedido {
    constructor(produto, valorTotal, previsaoEntrega) {
        this.produto = produto;
        this.valorTotal = valorTotal;
        this.previsaoEntrega = previsaoEntrega;
        this.id = '';
    }
}
const Pedido1 = new Pedido('Teclado Mecanico', 240, new Date('2026-08-17'));
console.log(Pedido1.id);
//# sourceMappingURL=classe_construtor.js.map