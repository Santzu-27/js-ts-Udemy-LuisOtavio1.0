let i = 0;

const myName = 'Gabriel';
while (i < myName.length){
    console.log(`${i} - ${myName[i]}`);
    i++;
};

console.log('End');
console.log()
console.log('----------------------------------')
console.log()


function random(min, max){
    let r = Math.random() * (max - min) + min;
    return Math.floor(r);
};

const min = 1;
const max = 50;


while(rand !== 10){
    var rand = random(min, max);
    console.log(rand);
}
console.log(' =D');
console.log()
console.log('///////////////______//////////////////')
console.log()

//Do While => Primeiro executa, depois checa a condição
let r2 = 10


do {
    r2 = random(min, max)
    console.log(r2)
} while(r2 !== 10);