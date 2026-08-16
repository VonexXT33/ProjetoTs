"use strict";
let calculadora;
function adicao(n1, n2) {
    return n1 + n2;
}
calculadora = {
    somar: adicao,
    subtrair: (n1, n2) => {
        return n1 - n2;
    },
    multiplicar: (n1, n2) => {
        return n1 * n2;
    },
    dividir: (n1, n2) => {
        return n1 / n2;
    },
};
console.log(calculadora.somar(10, 30));
console.log(calculadora.subtrair(10, 30));
console.log(calculadora.multiplicar(10, 30));
console.log(calculadora.dividir(10, 30));
//# sourceMappingURL=interface_funcoes.js.map