function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto
}

const chamado = falaFrase('Olá')
console.log(chamado('Mundo'))
console.log('=============================================================')

function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);  
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(10));
console.log(triplica(10));
console.log(quadriplica(10));