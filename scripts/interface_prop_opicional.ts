interface IProduto {
    nome: string;
    preco: number;
    descricao?: string;
    dataValidade: Date;
}

const produtoDados: IProduto = {
    nome: 'Xbox series s',
    preco: 2200,
    // descricao: 'O Xbox Series S é um console compacto e totalmente digital, desenvolvido para oferecer alto desempenho e carregamentos rápidos. Equipado com SSD NVMe de alta velocidade, proporciona tempos de espera reduzidos e uma experiência de jogo mais fluida.',
    dataValidade: new Date(2026, 11, 22)
} 

console.log(produtoDados)