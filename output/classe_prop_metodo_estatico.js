"use strict";
class BancoDeDados {
    ip;
    usuario;
    senha;
    tipoBanco;
    static LOCAL1 = '127.0.0.1';
    static LOCAL2 = '123.3.2.0';
    static TIPO_MYSQL = 'MySQL';
    static TIPO_SQLSERVER = 'SQL Server';
    constructor(ip, usuario, senha, tipoBanco) {
        this.ip = ip;
        this.usuario = usuario;
        this.senha = senha;
        this.tipoBanco = tipoBanco;
    }
    static factory(parametos) {
        if (![
            BancoDeDados.TIPO_MYSQL,
            BancoDeDados.TIPO_SQLSERVER
        ].includes(parametos.tipoDeBanco)) {
            throw new Error('Tipo de banco invalido!!');
        }
        return new BancoDeDados(parametos.ip, parametos.usuario, parametos.senha, parametos.tipoDeBanco);
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
});
const db3 = BancoDeDados.factory({
    tipoDeBanco: BancoDeDados.TIPO_SQLSERVER,
    usuario: 'Developer',
    senha: '02348734',
    ip: BancoDeDados.LOCAL2
});
const db4 = BancoDeDados.factory({
    tipoDeBanco: BancoDeDados.TIPO_SQLSERVER,
    senha: '324885',
    usuario: 'Dev',
    ip: BancoDeDados.LOCAL2
});
console.log(db2);
//# sourceMappingURL=classe_prop_metodo_estatico.js.map