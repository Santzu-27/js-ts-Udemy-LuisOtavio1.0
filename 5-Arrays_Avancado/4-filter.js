const numbers = [8, 84, 65, 2, 11, -60, 10, 13, 29, 20, 9];


// function callbackNumbers(v, i, array){
//     return v > 10;
// }
// const filteredNumbers = numbers.filter(callbackNumbers);

//Mesma coisa abaixo
const filteredNumbers = numbers.filter(v =>v > 10);
console.log(filteredNumbers);

//Filter retorna o array

const persons = [
    {name: "Gabriel", age: 22},
    {name: "Raquel", age: 40},
    {name: "Waldir", age: 62},
    {name: "Laís", age: 21},
    {name: "Rafa", age: 8},
]

const filteredPersons = persons.filter(pessoa => pessoa.age > 30);
console.log(filteredPersons);