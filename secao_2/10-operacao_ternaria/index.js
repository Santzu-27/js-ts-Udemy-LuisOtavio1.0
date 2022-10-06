const pontuacaoUsuario = 1000
let nivelUsuario

// if (pontuacaoUsuario >= 1000){
//     nivelUsuario = "VIP"
// } else {
//     nivelUsuario = "Normal"
// }
// console.log(nivelUsuario)
//
//   MESMA COISA ABAIXO   \/

nivelUsuario = pontuacaoUsuario >=1000 ? "VIP" : "Normal";
//(condicao) ? '_valor para verdadeiro_' : '_valor para falso_'

console.log(nivelUsuario)
