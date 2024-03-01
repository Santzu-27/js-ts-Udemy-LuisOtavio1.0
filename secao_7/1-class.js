class Person{
    constructor(name, lastname){
        this.name = name;
        this.lastname = lastname;
        
    }
    talk(){
        console.log(`${this.name + ' ' + this.lastname} are talking`);
    }
}
let p1 = new Person('Gabriel', 'Santos');
p1.talk();