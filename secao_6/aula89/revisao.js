const pessoa = {
    nome: "Gabriel",
    sobrenome: "Santos de souza"
}

const pessoa2 = new Object();

    pessoa2.nome = "Laís";
    pessoa2.sobrenome = "Paim";
    pessoa.idade = 22;
    pessoa.falarnome = function(){console.log(`${this.nome} é meu nome`)}; 
    pessoa.getBirthYear = function(){
        const dataAtual = new Date();
        return dataAtual.getFullYear() - this.idade;
    }
const key = "nome";

// delete pessoa2.sobrenome
// delete pessoa.sobrenome

console.log(pessoa[key])
console.log(pessoa2)
pessoa.falarnome()
console.log(pessoa.getBirthYear())

console.log("|-------------------|")
console.log("")
////////////////////////////////////////////////////
