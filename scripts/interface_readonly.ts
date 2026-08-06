interface ICurso {

    titulo: string;
    descricao: string;
    preco: number;
    cargaHoraria: number;
    classificacao: number;

}

const curso: ICurso = {

    titulo: 'TypeScript',
    descricao: 'Dominando TypeScript',
    preco: 600,
    cargaHoraria: 10,
    classificacao: 5
}

console.log(curso)