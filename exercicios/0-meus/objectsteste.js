const Pessoas = [];

function PessoaConstructor(){
    
}///

function factory(variavel){
    return{
        variavel: variavel,
        outraVari: variavel + 'etc',
        funcao: function(){
            console.log(this.outraVari);
        }
    }
}

const fac = factory('abc ');
fac.funcao()
//A saída: abc etc