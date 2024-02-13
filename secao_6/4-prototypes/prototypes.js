function Person(name, lastName){
    this.name = name,
    this.lastName = lastName;
}

Person.prototype.fullName = function(){
    return this.name + ' aaaa ' + this.lastName;
} //São criados apenas uma vez. Quando o metodo é colocado dentro do objeto se é criado várias vezes 

const p1 = new Person("Laís", "Paim");
console.log(p1.fullName())