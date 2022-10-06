console.log('Luiz' && 0 && 'Maria'); //Retorna sempre o primeiro valor falso encontrado OU,  se todas são verdadeiras, retorna a última
console.log('Luiz' && 'Maria' && NaN);

/* Valores que são avaliados em Falso pelo JS: (Falsy values)
0;
'' "" ``;
null / undefined
NaN 

 Quaisquer valores diferentes desses, são avaliados em true */

/* CONDICIONAIS SIMPLIFICADAS: */

let chosenColor = null;
let defaultColor = 'Red';
let color = chosenColor || defaultColor

console.log('1) ', color)

chosenColor = 'Yellow'
color = chosenColor || defaultColor
console.log('2) ', color)

