class Permisaao {

    constructor (
        private _nome: string,
        private _nivel: number,

    ) { }

    get nome() {

        return this._nome.toUpperCase();

    }

    set nome(NovoNome: string) {
        
            if (NovoNome.length <5) {

              throw Error ("O nome da permissao deve ter no minimo 5 letras!!");
                
            }

            this._nome = NovoNome;

    }
       
    
}

const permissao = new Permisaao('Adm',1);

try {

    permissao.nome = 'Lin';

} catch (e) {

    // console.log(e.message);

}


