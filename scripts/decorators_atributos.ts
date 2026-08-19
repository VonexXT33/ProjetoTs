function decoratorAttr(
    target: unknown,
    nomePropriedade: string
) {

    const novoNome = `_${nomePropriedade}`;

    Object.defineProperty(target, nomePropriedade, {
        get() {
         
            return this[novoNome].toUpperCase();
            
        },

        set(novoValor: string) { 
           
            this[novoNome] = novoValor;
        }
    });
        
}

class Animal {

  @decoratorAttr
    nome: string;

    constructor(nome: string) {

        this.nome = nome;

    }

}

const cachorro = new Animal('Medusa');

console.log(cachorro.nome);

