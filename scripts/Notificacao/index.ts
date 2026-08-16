import { Email, SMS } from "./classes/MeioDeNotificacao";

new Email().enviar({
    nome: 'José Alves',
    email: 'joseVn00@gmail.com',
    telefone: '4432937749'
});

new SMS().enviar({
    nome: 'José Alves',
    email: 'joseVn00@gmail.com',
    telefone: '4432937749'
});

