class Documento {

    private valor: string = '123123994'; 
   #numero: number = 4;  

    mostrarDocumento() {

        return this.valor;

    }

    mostrarNumeroDoc() {

        return this.#numero;

    }


}

class Cpf extends Documento {

  
    #numero: number = 8;

    

}

const cpf = new Cpf ();

