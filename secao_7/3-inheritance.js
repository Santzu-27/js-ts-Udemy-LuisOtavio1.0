class Device{
    constructor(name){
        this.name = name
        this.onOff = false;
    }
    turnOn(){
        if(this.onOff == true) return;
        this.onOff = true;
    }
    turnOff(){
        if(this.onOff == false) return;
        this.onOff = false;
    }
}

class Smartphone extends Device{
    constructor(name, color, model){
        super(name);
        this.color = color;
        this.model = model;
    }
}

const xiaomi = new Smartphone('xiaomi', 'black', 'Redmi 9');
xiaomi.turnOn();
console.log(xiaomi)