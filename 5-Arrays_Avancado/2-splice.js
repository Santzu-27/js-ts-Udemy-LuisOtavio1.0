//                0        1        2           3       4
const names = ["Maria", "Joao", "Eduardo", "Gabriel", "Júlia"];

//names.splice(indice, quantos a deletar a partir do indice, add1, add2, add3, etc...);

const removeds = names.splice(2, 2, "Laís") //Retorna um array com os removidos
console.log(names);
console.log(removeds);
console.log("_________________________________________________")

removeds.splice(1, 0, "Lauren");
console.log(removeds);
