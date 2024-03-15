const pessoa01 = {
    nome: 'Gabriel',
    sobrenome: 'Santos',
    idade: 20,

    fala() {
        console.log(`Eu, ${this.nome} ${this.sobrenome}, tenho ${this.idade} anos de idade! Ano que vem terei ${this.incrementaIdade()}.`)
    },

    incrementaIdade(){
        ++this.idade
        return this.idade
    }
}

pessoa01.fala()

//Com parâmetros