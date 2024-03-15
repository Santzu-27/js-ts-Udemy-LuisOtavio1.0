const talk = {
    talk(){
        console.log(`My full name is ${this.name+' '+this.lastname}`)
    }
}

const personProto = {...talk}

function createPerson(name, lastname){
    return Object.create(personProto, {
        name: { value: name },
        lastname: { value: lastname }
    })
}

const p1 = createPerson('Gabriel', 'Souza')

p1.talk();
