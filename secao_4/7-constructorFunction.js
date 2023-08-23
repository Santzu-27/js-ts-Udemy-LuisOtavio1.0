function Person(personName, personLastName){
    const id = 2023009655;



    
    this.personName = personName;
    this.personLastName = personLastName;
    this.fullName = `${personName} ${personLastName}`
}

const person1 = new Person("Gabriel", "Santos de Souza");

console.log(person1);