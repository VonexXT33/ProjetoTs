function showError(Message: string): never {

    throw new Error(Message);
}

// console.log(showError('Erro inesperado!'));

let n = 0;

function loopInfinito(){
    while (true) {
       console.log(n++);
    }           
}

loopInfinito();
