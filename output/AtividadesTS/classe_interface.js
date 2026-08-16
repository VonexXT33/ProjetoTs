"use strict";
class NotificacaoV2 {
}
class EmailV2 extends NotificacaoV2 {
    nome;
    email;
    telefone;
    constructor(usuario) {
        super();
        this.nome = usuario.nome;
        this.email = usuario.email;
        this.telefone = usuario.telefone;
    }
    enviar() {
        console.log(`Enviando email para ${this.email} ...`);
        return true;
    }
}
class SMSV2 extends NotificacaoV2 {
    numero;
    constructor(usuario) {
        super();
        this.numero = usuario.telefone;
    }
    enviar() {
        console.log(`Enviando SMS para o telefone ${this.numero} ...`);
        return true;
    }
}
new EmailV2({
    nome: 'José Alves',
    email: 'joseVn00@gmail.com',
    telefone: '4432937749'
});
new SMSV2({
    nome: 'José Alves',
    email: 'joseVn00@gmail.com',
    telefone: '4432937749'
});
//# sourceMappingURL=classe_interface.js.map