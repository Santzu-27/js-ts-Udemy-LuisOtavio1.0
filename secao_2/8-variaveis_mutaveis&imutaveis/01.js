let a = 'Gabriel'
let b = a //Cópia, ainda são valores independentes.
b = 'Nome'
console.log(a, b)

console.log(a[0])

a[0] = 'R' /*Não vai ser alterado pois strings são imutaveis. Só podem ser substituidas*/
console.log(a)

//VALORES MUTAVEIS
let c = [1, 2, 3]
let d = c

console.log()
console.log(c, d)//Apontam para o mesmo local. logo:

d.push(4, 5)
c.push(6, 7)
console.log('d => ', d)
console.log('')
console.log('c => ', c) //Ou seja, se altera um, o outro é afetado.

//Para copiar valores mutaveis:

c = ['A', 'B']
d = [...c]

console.log(c, d)
console.log()

d.push('C', 'D')
console.log(c, d)


