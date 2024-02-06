function Product(name, price, stock){
    this.name = name;
    this.price = price;

    Object.defineProperty(this, 'stock', {
        configurable: true,
        // value: stock,
        // writable: true,     GET E SET
        enumerable: true,
        get: function(){
            return stock;
        },
        set: function(val){
            if(typeof val !== 'number'){
                console.log('Bad Value')
                throw new TypeError('mensagem')
                return
            }
            stock = val;
        }
    })

}

p1 = new Product('Shirt', 10, 30);
// p1.stock = "test";
console.log(p1);
console.log(p1.stock);
// p1.stock = "t"