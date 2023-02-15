function func(){
    console.log('1 - '+arguments[0])
    console.log(arguments)
}

func('Valor', 1, 2, 3, 4, 5, 6, 7, 8);
// ARGUMENTS => Sustenta TODOS argumentos enviados, por mais que não haja parametros na função;
// **Funciona apenas para função que utilizam 'function';
console.log('================================================================')
console.log();

function soma(a, b, c){
    let total = 0
    for (let argumento of arguments){
        total +=argumento
    }
    console.log(total, a, b, c);
    //Nesse caso, arguments 'pega' os argumentos restantes.
} 

soma(5, 10, 15, 20, 25, 30, 35, 40, 45);
console.log('================================================================')y60
console.log();
function somaUndefined(a, b = 0){ //Defini um valor PADRÃO para o b, caso não seja declarado nenhum argumento para o mesmo
    console.log(a + b)
}
somaUndefined(5)
console.log();
console.log('================================================================')
//

function desestruturacao({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}

let objetoD = {
    nome: 'Gabriel',
    sobrenome: 'Santos',
    idade: 20
}
desestruturacao(objetoD)

console.log();
console.log('================================================================') 

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}

conta('+', 0, 20, 30, 40, 50)
