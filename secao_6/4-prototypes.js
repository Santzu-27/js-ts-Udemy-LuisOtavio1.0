function Person(name, lastName){
    this.name = name,
    this.lastName = lastName;
}

Person.prototype.fullName = function(){
    return this.name + ' aaaa ' + this.lastName;
} 

const p1 = new Person("Laís", "Paim");
console.log(p1.fullName())