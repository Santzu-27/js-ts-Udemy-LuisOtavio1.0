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
const p3 = Object.create(Product.prototype, {
    name: {
        value: 'Jordan II',
        writable: false,
        configurable: false,
        enumerable: true
    },
    price: {
        value: 45,
        writable: true,
        configurable: false,
        enumerable: true
    }
}); 
p3.discount(50);
console.log(p3);