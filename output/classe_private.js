"use strict";
class Banco {
    cofreQtd = 10000;
    debitarCofre(quantidade) {
        if (this.cofreQtd >= quantidade) {
            this.cofreQtd -= quantidade;
            return this.cofreQtd;
        }
        else {
            return 'Valor indisponivel';
        }
    }
}
class banco24Horas extends Banco {
    sacarCaixaEletronico(quantidade) {
    }
}
const nubank = new Banco();
//# sourceMappingURL=classe_private.js.map