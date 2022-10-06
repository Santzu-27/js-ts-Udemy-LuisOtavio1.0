let num1 = 9.5448
let num2 = Math.floor(num1); //floor => arrendonda para baixo
console.log(`1) ${num1}   <-/ /->   ${num2}`)

let num3 = Math.ceil(num1); //ceil => arrendonda para cima
console.log(`2) ${num1}   <-/ /->   ${num3}`)

let num4 = Math.round(num1); //round => arrendonda para o mais próximo
console.log(`3) ${num1}   <-/ /->   ${num4}`)
//exemplo 2
num4 = 9.4999999
num4 = Math.round(num4) 
console.log(`   ${num1}   <-/ /->   ${num4}`)

let num5 = Math.max(198, 10, -50, 26, 280, 145, 199); //max => Retorna o maior número // min = o menor
console.log(`4) ${num1}   <-/ /->   ${num5}`)

let num6 = Math.random(); //random = > num aleatorio entre 0 e 1 
console.log(`5) ${num1}   <-/ /->   ${num6}`)

//FÓRMULA PARA DETERMINAR NÚMERO MINIMO E MÁXIMO: Math.random() * (maximo - minimo) + minimo  = 0.91 * (2 - 1) + 1
let num7 = Math.random()*(1000-1) + 1; 
console.log(`   ${num1}   <-/ /->   ${Math.round(num7)}`)


