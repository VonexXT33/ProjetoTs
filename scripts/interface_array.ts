interface Produto {
    nome: string;
    valor: number;
    id: number;
}

const produtos: Produto [] = [
    {
        nome:'Mouse Gamer',
        valor: 245,
        id: 1
    },
    {
        nome:'Teclado Gamer',
        valor: 540,
        id:2
    },
    {
        nome:'Monitor Gamer 240hz',
        valor:2600,
        id:3
    },
    {
        nome:'Gabinete Razer',
        valor: 400,
        id: 4
    }
];

console.log(produtos);



