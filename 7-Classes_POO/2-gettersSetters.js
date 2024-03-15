const speedProtected = Symbol('speed'); //proteger o acesso por fora
class Car{
    constructor(name){
        this.name = name;
        this[speedProtected] = 0;
    }

    get speed(){
        return this[speedProtected];
    }

    set speed(val){
        if(typeof val !== 'number') return;
        if(val > 100) return;
        if(val < 0) return;
        this[speedProtected] = val;
    }
}

const c1 = new Car('Fusca');

c1.speed = 200; // Não vai funcionar devido a proteção do Setter;
c1.speed = 10;

console.log(c1);
