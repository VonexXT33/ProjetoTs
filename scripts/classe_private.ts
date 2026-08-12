class Banco {
    private cofreQtd: number = 10000;
    private debitarCofre (quantidade: number): number | string {

        if (this.cofreQtd >= quantidade) {

            this.cofreQtd -= quantidade;

            return this.cofreQtd;
        }
           else {

        return 'Valor indisponivel';

        }

    }

    protected sacarDocaixa (quantidade: number) {

        return this.debitarCofre (quantidade);

    }

    public sacarDoCaixaEletronico (quantidade: number) {

        return this.debitarCofre (quantidade);

    } 


}

class Banco24hrs extends Banco {

   public sacar (qntd: number) {

        return this.sacarDocaixa (qntd);
        
    }

}

const nubank = new Banco();

const nubank24hrs = new Banco24hrs();


class Banco2 {

    private caixaforte: number = 20000;
    private sacarDoCaixaforte (qntd: number): number | string {

        if (this.caixaforte >= qntd) {

            this.caixaforte -= qntd;

            return this.caixaforte;

        }

        else {

            return 'Valor indiponivel';

        }

    }

    public sacarBanco2 (qntd: number) {

           return this.sacarDoCaixaforte(qntd);

    }

}

class Banco224hrs extends Banco2 {

    public cxEletronicoBanco2 (qntd: number) {

              return this.sacarBanco2(qntd);

    }     

}

const bradesco = new Banco2 ();

const caixaBradesco = new Banco224hrs ();

console.log(bradesco.sacarBanco2(30000));








 
    

















