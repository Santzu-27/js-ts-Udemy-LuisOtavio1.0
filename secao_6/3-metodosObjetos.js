const product = {
    name: "Mug",
    price: 1.8
};

const otherThing = {
    ...product, 
    material: "Porcelain"
}; // OUUU:    Object.assign({}, produto, {material: "Porcelain"});   

console.log(product);
console.log(otherThing);
console.log("-----------");

console.log(Object.getOwnPropertyDescriptor(product, 'name')) //Descreve uma propriedade do objeto
console.log("-----------");

console.log(Object.keys(otherThing));
console.log(Object.values(otherThing));
console.log(Object.entries(otherThing));
console.log("-----------");

otherThing.name = "T-Shirt";
otherThing.price = 20;
// for(let entry of Object.entries(otherThing)){
//     console.log(entry);
// }  /* O entries RETORNA primeiro a chave, e depois o valor, então da pra fazer:   */

for(let[key, value] of Object.entries(otherThing)){
    console.log(key, value);
};   
/* OUUU
for(let entry of Object.entries(otherThing)){
    console.log(entry[0], entry[1]);
};  
*/
