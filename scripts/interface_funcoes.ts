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


interface Calcuclos {
    somar (n1: number, n2: number): number;
    subtrair (n1: number, n2: number): number;
    multiplicar (n1: number, n2: number): number;
    dividir (n1: number, n2: number): number;
}

let calculadora: Calcuclos;

    calculadora = {
    somar: (n1: number, n2: number) => {
        return n1+n2;
    }
    subtrair: (n1: number, n2: number),
    multiplicar: (n1: number, n2: number),
    dividir: (n1: number, n2: number),