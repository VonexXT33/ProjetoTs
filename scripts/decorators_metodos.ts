import { decoratorMetodo } from "./utils";



class TratarMensagem {

    @decoratorMetodo
    dizerMensagem(...mensagens: string[]) {
// esses 3 pontos sao usados para pode esperar quantas mensagens forem necessarias
        return mensagens;

    }

}

const instancia = new TratarMensagem();

console.log(instancia.dizerMensagem('Ola', 'Seja Bem Vindo!!', 'Qual o seu nome?'));
