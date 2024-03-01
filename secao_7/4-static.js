class Remote{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    // Métodos de instância
    static upVol(){
        this.volume += 1;
    }
    downVol(){
        this.volume -= 1;
    }

    // Método estático => funcionara apenas no objeto

    static changeBatt(){
        console.log('Battery Changed');
    }
}
const r1 = new Remote('Samsung');

// r1.changeBatt(); Metodo estatico;
console.log(r1);
