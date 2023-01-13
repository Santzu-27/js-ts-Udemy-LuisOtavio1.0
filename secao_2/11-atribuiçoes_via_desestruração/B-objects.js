const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Santos',
    idade: '20',
    endereco: {
        rua: 'Álvaro Nair de Oliveira',
        num: 140
    },
};
const { nome: teste, sobrenome, idade } = pessoa;
console.log('1 - ' + teste, sobrenome + ', ' + idade);
console.log(pessoa.nome)
const { endereco: {rua, num}} = pessoa
console.log('2 - ' + rua, num)
