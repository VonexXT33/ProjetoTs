 class Professor {
     nome: string;
     idade: number; 
     materia: string;



     constructor (nome: string, idade: number, materia: string) {
         this.nome = nome;
         this.idade = idade;
         this.materia = materia;
     }

    
     seApresentar(): string {

         return `Olá, meu nome é ${this.nome}, tenho ${this.idade} de idade, minha matéria é ${this.materia}`;

     }

     dizerNotas(...notas: number[]): number {
     
     const notasTotal = notas.reduce((total,notaAtual) => total + notaAtual,0);
     
    return notasTotal / notas.length;

     }
    
 }

