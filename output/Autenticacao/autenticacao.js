"use strict";
/// <reference path='./Autenticacao/index.ts'/>
const NovoRegistro = new Autenticacao.LoginRegistro();
const ResultadoRegistro = NovoRegistro.registro({
    nome: 'José',
    email: 'joseVn00@gmail.com',
    senha: 'HH2312',
    dataNascimento: new Date('2001-03-25')
});
console.log(ResultadoRegistro);
