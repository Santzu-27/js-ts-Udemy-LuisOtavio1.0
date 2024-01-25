//Copiar o array sem passar por referencia

const names = ["Gabriel", "Laís", "Rafa"];
const new1 = [...names];

const removed = new1.pop();
console.log(names);