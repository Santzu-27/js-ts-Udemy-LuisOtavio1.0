
try{
    console.log(notDefined)
} catch(err) {
    console.log('notDefined doesnt exist')
}

//
console.log();
console.log();
function sum(x, y){
     if (
        typeof x !== 'number' ||
        typeof y !== 'number'
        ) {
        throw new ReferenceError('X and Y must be numbers'); //Para criar um novo tipo de erro para o script
     };
     return x + y;
}

try { //É executado quando NÃO há erros
    console.log(sum(4, 2));
    console.log(sum('5', 3));
} catch(err){ // Executado quadno HÁ erros
    console.log(err); //Se colocar apenas a variável do erro, aparecera as informações completas
}