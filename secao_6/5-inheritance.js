/*
Shirt, mug, pencil
Shirt = Color
Mug = Material
*/
function Product(name, price){
    this.name = name;
    this.price = price
}

Product.prototype.discount = function(v){
    this.price -= v;
}
Product.prototype.raise = function(v){
    this.price += v;
}

function Shirt(name, price, color){
    Product.call(this, name, price); //Herança
    this.color = color;
}

function Mug(name, price, material, estoque){
    Product.call(this, name, price);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function(){
            return estoque;
        },
        set: function(value){
            estoque = value;
        }
    })
}

Shirt.prototype = Object.create(Product.prototype); //Porém, ao fazer isso, o construtor de SHIRT passa a ser PRODUCT, então:
Shirt.prototype.constructor = Shirt;

Mug.prototype = Object.create(Product.prototype); //Porém, ao fazer isso, o construtor de SHIRT passa a ser PRODUCT, então:
Mug.prototype.constructor = Mug;

const shirt1 = new Shirt('Tank Top', 25, 'Black');
const mug1 = new Mug('Avengers Mug', 5, 'Porcelain', 10);
shirt1.raise(15);
mug1.discount(1.5);
console.log(shirt1);
console.log(mug1);

mug1.estoque = 5;
console.log(mug1.estoque)