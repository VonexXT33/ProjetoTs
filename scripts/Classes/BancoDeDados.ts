import { IBancoDeDados } from "../Interfaces/IBancoDeDados";

// Como vamos trabalhar com as informacoes
export  class BancoDeDados {
    static LOCAL1 = '127.0.0.1';
    static LOCAL2 = '123.3.2.0';
    static  TIPO_MYSQL = 'MySQL';
    static TIPO_SQLSERVER = 'SQL Server';

// Dados necessarios para criar o projeto 
    constructor (
        private ip: string,
        private usuario: string,
        private senha: string,
        private tipoBanco: string
    ) { }

    
    static factory(parametos: IBancoDeDados) {

// Verifica se o tipo de banco informado é permitido  (MySQL ou SQL Server)
        if (![
            BancoDeDados.TIPO_MYSQL,
            BancoDeDados.TIPO_SQLSERVER
        ].includes(parametos.tipoDeBanco)) {

 // Se não for um banco permitido, interrompe e gera um erro
            throw new Error('Tipo de banco invalido!!');
            
        }

// Cria e retorna um novo objeto BancoDeDados com os dados informados
        return new BancoDeDados(
            parametos.ip,
            parametos.usuario,
            parametos.senha,
            parametos.tipoDeBanco
        );
        
    }

} 

