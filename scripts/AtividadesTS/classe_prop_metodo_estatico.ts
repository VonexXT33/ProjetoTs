import {BancoDeDados} from '../Classes/BancoDeDados'

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
    tipoDeBanco: BancoDeDados.TIPO_MYSQL,
    senha: '324885',
    usuario: 'Dev',
    ip: BancoDeDados.LOCAL1
});