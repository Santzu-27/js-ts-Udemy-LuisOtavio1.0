const personsArray = [
    {id: 3, nome: 'Gabriel'},
    {id: 1, nome: 'Santos'},
    {id: 2, nome: 'Laís'}
]

const newPersons = new Map();
for(const person of personsArray){
    const { id }= person;
    newPersons.set(id, {...person});
}

console.log(newPersons);