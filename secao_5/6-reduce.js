// const numbers = [9, 10, -20, 2, 3];
// const total = numbers.reduce(function(ac, v, i, array){
//     ac += v;
//     return ac;
// }, 0);
// console.log(total);

// --------> UTILIZANDO COMO FILTER
// const numbers = [9, 10, -20, 2, 3];
// const total = numbers.reduce(function(ac, v, i, array){
//     if(v % 2 === 0) ac.push(v);
//     return ac;
// }, []);
// console.log(numbers);

const persons = [
    {name: "Gabriel", age: 90},
    {name: "Laís", age: 21},
    {name: "Waldir", age: 65},
    {name: "Raquel", age: 40},
    {name: "Maria", age: 80}
];

const oldest = persons.reduce(function(ac, v, i, array){
    if(ac.age > v.age) return ac;
    return v;
});
console.log(oldest);