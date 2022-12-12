let varA = 'A' 
let varB = 'B' 
let varC = 'C' 

/* A váriavel A deve áriavel B deve receber receber o valor de B.
A vo valor de C.
A váriavel C deve receber o valor de A.
Atribuindo apenas as váriaveis*/

const temporaria = varA
varA = varB
varB = varC 
varC = temporaria

console.log(varA, varB, varC)

/*Ou
[varA, varB, varC] = [varB, varC, varA]
*/
