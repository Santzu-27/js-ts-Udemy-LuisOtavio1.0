let a = 'A'
let b = 'B'
let c = 'C'

const letras = [b, c, a];
[a, b, c] = letras

console.log('1 -', a, b, c)

const numeros = [1000, 2000, 3000, 400, 50, 61, 5000, 8000, 906];
const [primeiroNumero, segundoNumero, , quartoNumero, , sextoNumero, ...resto] = numeros;

// ... => Rest    OU   Spread, depende do contexto

console.log('2 -', primeiroNumero, segundoNumero, quartoNumero, sextoNumero);

console.log('3 -', resto);


const arrays = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

//Para acessar o num 6: 
console.log('4 -', arrays[1][2])

const [lista1, lista2, lista3] = arrays
console.log('  -', lista2[2])