const pessoa = {
    nome: "Gabriel",
    sobrenome: "Santos de souza"
}

const pessoa2 = new Object();
pessoa2.nome = "Laís";
pessoa2.sobrenome = "Paim";

const key = "nome";
console.log(pessoa[key], pessoa.sobrenome)
console.log(pessoa2[key], pessoa2.sobrenome)

