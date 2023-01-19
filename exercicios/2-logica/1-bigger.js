//Criar uma função que retorne o maior entre dois numeros

function bigger(a, b) {return a > b ? a : b;};
function writeBigger(x, y){
    console.log(`${bigger(x, y)} é o maior número.`);
};

writeBigger(500,40);

/// COM ARROW FUNCTIONS:
const bigger2 = (a, b) => a > b ? a : b;
console.log(`${bigger2(18,33)} é o maior número`)