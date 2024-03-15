const numbers =  [8, 84, 65, 2, 11, -60, 10, 13, 29, 20, 9];
const nDoubled = numbers.map(v => v*2);

console.log(nDoubled);


const persons = [
    {name: "Gabriel", age: 22},
    {name: "Raquel", age: 40},
    {name: "Waldir", age: 62},
    {name: "Laís", age: 21},
    {name: "Rafa", age: 8},
]

const theirNames = persons.map(person => person.name);
console.log(theirNames);

const withId = persons.map(function(person, i){
    const newPerson = {...person} //Criar um 'new" pq senão passa por referencia
    newPerson.id = i;
    return newPerson
})
console.log(withId);