//Function Hoisting

falaOi();












function falaOi() {
    console.log('Oie');
} //Podem ser declaradas a qualquer momento

//First-class objects

const souUmDado = function() {
    console.log('Sou um dado')
}

function executaFuncao(funcao){
    console.log('__  V V V __')
    funcao();
}

executaFuncao(souUmDado); //Mandando uma funçao de parametro 

//Arrow function
console.log()
console.log('================================================================');

const funcArrow = () => {
    console.log('Arrow function')
};
funcArrow();
 
//Dentro de um objeto
console.log()
console.log('==============Dentro de um Obj=================')
const obj = {
    falar(){
        console.log('Falando')
    },
    tipo1: '1'
}

obj.falar()