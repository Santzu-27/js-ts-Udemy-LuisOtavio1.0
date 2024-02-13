function createProduct(name){
    return{
        get name(){
            return name;
        },
        set name(val){
            val = val.replace('Any', ' '); //Pode interceptar Setters
            name = val;
        }
    }
}

const p1 = createProduct("Shirt");
console.log(p1.name);
p1.name = "Any Thing";
p1.price    = 50;
console.log(p1);