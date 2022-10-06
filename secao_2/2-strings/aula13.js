/*Funções para strings*/
            // 01234567891011
let stringA = "text example";
/*1*/console.log('1 ', stringA.charAt(2)) //retorna o caractere na posição desejada
/*2*/console.log('2 ', stringA.concat(' update')) //concatenação

/*3*/console.log('3 ', stringA.indexOf('exa')) //encontra a posição do termo digitado
/*4*/console.log('4 ', stringA.indexOf('exa', 4)) //encontra a posição do termo digitado a partir da posição digitada
/*5*/console.log('5 ', stringA.lastIndexOf('exa', 4)) //mesma coisa, de tras pra frente

/*6*/console.log('6 ', stringA.replace('text', 'word'))// replace
/*7*/console.log('7 ', stringA.length) //Quantidade de caracteres.

let stringFrase = 'O rato roeu a roupa do rei de roma'
/*8*/console.log('8 ', stringFrase.replace(/r/, 'P')) // Expressões Regulares. Substitui o primeiro caractere digitado que encontrar.
/*9*/console.log('9 ', stringFrase.replace(/r/g, 'P')) // Adicionando o 'g', substitui todos os caracteres iguais ao digitado

/*10*/console.log('10 ', stringFrase.slice(2, 6)) // Retorna a parte desejada. O primeiro num é a posição de inicio, o segundo é o fim
/*11*/console.log('11 ', stringFrase.slice(-3)) // Retorna os 3 ultimos caracteres. 
/*12*/console.log('12 ', stringFrase.slice(-3, -1)) // Retorna os 3 ultimos, excluindo o ultimo

/*13*/console.log('13 ', stringFrase.split(' ')) //Divide os termos da expressão em arrays
/*14*/console.log('14 ', stringFrase.split('r')) //Retorna em arrays sem o termo desejado
/*15*/console.log('15 ', stringFrase.split(' ', 2)) //Retorna em arrays a quantidade de termos desejadas



