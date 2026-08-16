// interface ISoma {

//     (num1: number, num2: number): number;

// }
    
 
// let minhaSoma: ISoma; 

//     minhaSoma = (n1: number, n2: number): number => {

//         return n1+n2;
        
// }

// interface Cauculos {
//     somar(a: number, b: number): number;
    
// }


interface ICalculos {
    somar (num1: number, num2: number): number;
    subtrair (num1: number, num2: number): number;
    multiplicar (num1: number, num2: number): number;
    dividir (num1: number, num2: number): number;
}

let calculadora: ICalculos;

function adicao (n1: number, n2: number) {
    return n1+n2;
}


    calculadora = {
        
    somar: adicao,
       
    subtrair: (n1: number, n2: number) => {
        return n1-n2;
    },
    multiplicar: (n1: number, n2: number) => {
        return n1*n2;
    },
    dividir: (n1: number, n2: number) => {
        return n1/n2;
    },
}

console.log(calculadora.somar(10,30))
console.log(calculadora.subtrair(10,30))
console.log(calculadora.multiplicar(10,30))
console.log(calculadora.dividir(10,30))

