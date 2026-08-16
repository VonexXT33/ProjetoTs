interface modelo {
    id: number;
    created_at: number;
    updated_at: number;
}

interface pessoa extends modelo {
    nome: string,
    idade?: number;
    cpf?: number,
    endereco?: string,
    nacionalidade?: string
}

interface usuario  extends pessoa {
    senha: string | number,
    assinatura: string
}

const   Usuarios: usuario [] = [
{
        nome: 'Jose',
        senha: 'Jp040202',
        id: 1,
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
        assinatura: 'Gold Plan'
},
{
        nome: 'Allan',
        senha: 'Aln0101',
        id: 2,
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
        assinatura: 'Silver Plan'
},
{
        nome: 'Mirelly',
        senha: '1234523',
        id: 3,
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
        assinatura: 'Dimond Plan'
},

{
    
        nome: 'Antony',
        senha: 'Antony2610931',
        id: 4,
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
        assinatura: 'Gold Plan'
}
];

console.log(Usuarios.find(pessoa => pessoa.nome === 'Mirelly')?.id);
