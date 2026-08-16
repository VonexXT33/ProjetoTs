
//  Define o formato que o objeto deve ter
interface IBancoDeDados {
    ip: string;
    usuario: string;
    senha: string;
    tipoDeBanco: string;
}

// Como vamos trabalhar com as informacoes
class BancoDeDados {
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

const db1 = BancoDeDados.factory({
    tipoDeBanco: BancoDeDados.TIPO_MYSQL,
    senha: '293882',
    usuario: 'root',
    ip: BancoDeDados.LOCAL1
});

const db2 = BancoDeDados.factory({
    tipoDeBanco: BancoDeDados.TIPO_MYSQL,
    senha: '281284',
    usuario: 'Admin',
    ip: BancoDeDados.LOCAL1
})

const db3 = BancoDeDados.factory({
    tipoDeBanco: BancoDeDados.TIPO_SQLSERVER,
    usuario: 'Developer',
    senha: '02348734',
    ip: BancoDeDados.LOCAL2
})

const db4 = BancoDeDados.factory({
    tipoDeBanco: BancoDeDados.TIPO_SQLSERVER,
    senha: '324885',
    usuario: 'Dev',
    ip: BancoDeDados.LOCAL2
})


console.log(db2);