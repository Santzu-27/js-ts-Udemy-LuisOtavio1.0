function* generating(){
    yield "Value1";
    yield "Value2";
    yield "Value3";
}   

const g1 = generating();
const g2 = generating();
const g3 = generating();
console.log(g3.next())
console.log(g3.next())
console.log(g3.next())