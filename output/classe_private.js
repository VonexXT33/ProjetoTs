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
    sacarDocaixa(quantidade) {
        return this.debitarCofre(quantidade);
    }
    sacarDoCaixaEletronico(quantidade) {
        return this.debitarCofre(quantidade);
    }
}
class Banco24hrs extends Banco {
    sacar(qntd) {
        return this.sacarDocaixa(qntd);
    }
}
const nubank = new Banco();
const nubank24hrs = new Banco24hrs();
class Banco2 {
    caixaforte = 20000;
    sacarDoCaixaforte(qntd) {
        if (this.caixaforte >= qntd) {
            this.caixaforte -= qntd;
            return this.caixaforte;
        }
        else {
            return 'Valor indiponivel';
        }
    }
    sacarBanco2(qntd) {
        return this.sacarDoCaixaforte(qntd);
    }
}
class Banco224hrs extends Banco2 {
    cxEletronicoBanco2(qntd) {
        return this.sacarBanco2(qntd);
    }
}
const bradesco = new Banco2();
const caixaBradesco = new Banco224hrs();
console.log(bradesco.sacarBanco2(30000));
//# sourceMappingURL=classe_private.js.map