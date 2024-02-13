//Factory Functions / Constructor functions / Classes

//FACTORY:
function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}
const pessoa1 = criaPessoa("GABRIEL", "SANTOS");
console.log(pessoa1.nomeCompleto);


//CONSTRUCTOR 
//
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this); //Nada mais pode ser alterado
}

const pessoa2 = new Pessoa("Laís", "Paim");
pessoa2.nome = "Teste";
// pessoa2.idade = 5;   // ->Vai dar erro devido ao freeze
console.log(pessoa2)