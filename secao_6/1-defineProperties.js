function Product(name, price, stock){
    this.name = name;
    this.price = price;
    this.stock = stock;

    Object.defineProperty(this, 'stock', {
        enumerable: true, //mostra a chave
        value: stock,
        writable: false, // (Não pode alterar)
        configurable: true /* pode reconfigurar ele novamente*/
    })
    Object.defineProperty(this, 'stock', {
        enumerable: true, 
        value: stock,
        writable: true, //Alteravel
        configurable: false //Não pode mais reconfigurar
    })
}



const p1 = new Product('Shirt', 20, 5);

p1.stock = 800;
delete p1.stock; // Não funciona devido ao configurable false
console.log(p1);

/*       */
/*       */
/*       */

function Product2(name, price, stock){
    Object.defineProperties(this, {
        name: {
            value: name,
            enumerable: true,
            writable: true,
            configurable: false
        },
        price: {
            value: price,
            enumerable: true,
            writable: true,
            configurable: false
        },
        stock: {
            value: stock,
            enumerable: true,
            writable: true,
            configurable: false
        }
    })
}

const p2 = new Product2("Pants", 30, 8)
console.log(p2)