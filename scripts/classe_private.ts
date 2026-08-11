class Banco {
    private cofreQtd: number = 10000;
    private debitarCofre (quantidade: number): number | string {

        if (this.cofreQtd >= quantidade) {

            this.cofreQtd -= quantidade;

            return this.cofreQtd;
        }

        else {

            return 'Valor indisponivel'

        }

    }
}

class banco24Horas extends Banco {

   public sacarCaixaEletronico(quantidade: number) {
        
        // return this.(quantidade);

// Terminar classe sacarCaixaEletronico

    }

}

const nubank = new Banco();












