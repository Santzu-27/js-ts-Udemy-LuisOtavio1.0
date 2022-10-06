const alunos = ['João', 'Luiz', 'Maria']
alunos.push('Carlos') //Para adicionar no final
alunos.unshift('Taís') //Para adicionar no começo

console.log(`1)   ${alunos}`)

alunos.pop() //Remove o ´´ultimo
console.log(`2)   ${alunos}`)

//Para salvar em uma variável o removido basta declarar ela no começo e atribuir a função

const removido =  alunos.pop()
console.log(`3)   Removido -> ${removido}.   / / Novo array -> ${alunos}`)

delete alunos[1] // Para remover sem alterar o indice
console.log(`4)   ${alunos}`)

alunos.push('João', 'Carlos', 'Maria')
alunos[1] = 'Thiago'
