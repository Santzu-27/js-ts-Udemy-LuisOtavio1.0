//Funções Imediatas -> Immediatly Invoked Function Expression
const age = 'Test';

(function(age, weight, height){
    const lastName = 'Santos';

    function createName(myName){
        return myName + ' ' + lastName;
    }

    function sayName(){
        console.log(createName('Gabriel'))
    }

    sayName();
    console.log(age, weight, height);
})(21, 70, 170);
console.log();
// console.log(myName);
