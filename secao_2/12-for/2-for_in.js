const fruits = ['Pear', 'Apple', 'Grape', {f1: 'Banana', f2: 'Melon'}];


console.log('//___ ( 1 ) ___//');
for (let index in fruits) {    
    console.log(fruits[index]);
};


console.log();
console.log('//___ ( 2 ) ___//');
const person = {
    name: 'Gabriel',
    lastName: 'Santos de Souza',
    age: 20,
    height: '1.69m',
}
for (let key in person) {
    console.log(`${key}: ${person[key]}`); console.log();
}

//Outra maneira de acessar objetos:///////////
console.log();
console.log(`1 --> ${person['name']}`)
//Ou também

const keyAccess = 'name'
console.log(`2 --> ${person[keyAccess]}`)

