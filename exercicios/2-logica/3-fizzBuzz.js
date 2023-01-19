/*
Num divisivel por 3 -> Fizz
Num divisivel por 5 -> Buzz
Num divisivel por 3 e 5 -> FizzBuzz
Nenhum dos dois -> Retorna o número
Não é um número -> Alerta
*/
function fizzBuzz(n){
    if(typeof n !== 'number'){return 'Não é um Número'}

    else if (n % 3 === 0 && n % 5 === 0){return 'FizzBuzz'}
    else if (n % 3 === 0){return 'Fizz'} 
    else if(n % 5 === 0){return 'Buzz'} 
    else{return n} ;
};

for(let i = 1; i <= 100; i++){
    console.log(`${i} -> ${fizzBuzz(i)}`)
}