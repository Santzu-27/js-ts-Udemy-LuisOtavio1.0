function Product(name, price){
    this.name = name;
    this.price = price;
};

Product.prototype.discount = function(v){
    this.price = this.price - (this.price * v/100);
}; 

const p1 = new Product('Shirt', 50);
p1.discount(50);

console.log(p1);

/////////////////////////////////////////////////

const p2 = {
    name: 'Mug',
    price: 80
};

Object.setPrototypeOf(p2, Product.prototype);

p2.discount(50);
console.log(p2)

/////////////////////////////////////////////////
// Setar diretamente o prototype de um objeto criado ::::
const p3 = Object.create(Product.prototype); 
console.log(p3);
p3.price = 100;
p3.discount(80);
console.log(p3);