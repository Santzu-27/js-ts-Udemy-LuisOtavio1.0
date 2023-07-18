function createPerson(personName, personLastName, weightX, heightX){
    return{
        personName,
        personLastName,
        speak(subject){
            return `${personName} está ${this.subject}. Elx tem ${this.weight}Kg e ${this.height}cm de altura.`;
        },
        weight: weightX,
        height: heightX,
        subject: 'estudando JS',
        get imc(){
            const index = this.weight / (this.height ** 2);
            return index.toFixed(2)
        },
        get fullName() {
            return `${this.personName} ${this.personLastName}`;
        },
        set fullName(value){
            value = value.split(' ');
            this.personName = value.shift();
            this.personLastName = value.join(' ');
            // console.log(value);
        } 

    }
}

const p1 = createPerson('Gabriel', 'Santos', 74, 1.70);
const p2 = createPerson('Laís', 'Paim', 50, 1.48);
console.log(p1.speak());
console.log(p1.weight, p1.height + ' = '+ p1.imc);
console.log(p2.weight, p2.height + ' = '+ p2.imc);
console.log();
console.log();
p1.fullName = 'Gabriel Santos de Souza';
console.log(p1.personLastName);
console.log(p1.personName);