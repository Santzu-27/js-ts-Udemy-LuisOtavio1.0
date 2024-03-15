 const pessoa01 = {
     nome: 'Gabriel',
     sobrenome: 'Santos',
     idade: 20
 };

 console.log(pessoa01.nome, pessoa01.sobrenome, pessoa01.idade)

//Para CRIAR um objeto: 
function criaPessoa (nome, sobrenome, idade){
    return {
        nome, sobrenome, idade
    };
}

const pessoa02 = criaPessoa('Laís', 'Paim', 84)
const pessoa03 = criaPessoa('Lucas', 'Montana', 15)
const pessoa04 = criaPessoa('Carlos', 'Melo', 38)
const pessoa05 = criaPessoa('Eduardo', 'Mota', 25)
const pessoa06 = criaPessoa('Lauren', 'Soares', 18)

console.log(pessoa02.nome, pessoa02.sobrenome, pessoa02.idade)
console.log(pessoa03.nome, pessoa03.sobrenome, pessoa03.idade)
console.log(pessoa04.nome, pessoa04.sobrenome, pessoa04.idade)
console.log(pessoa05.nome, pessoa05.sobrenome, pessoa05.idade)
console.log(pessoa06.nome, pessoa06.sobrenome, pessoa06.idade)

console.log('+++', pessoa02)
