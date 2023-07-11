//Funções Imediatas -> Immediatly Invoked Function Expression
const myName = 'Test';

(function(){
    const lastName = 'Santos';

    function createName(myName){
        return myName + ' ' + lastName;
    }

    function sayName(){
        console.log(createName('Gabriel'))
    }

    sayName();
})();
console.log();
// console.log(myName);
