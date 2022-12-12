// const user = {
//     nome, sobrenome, peso, altura
// };

/*  MEU EXERCICIO
function createUser(nome, sobrenome, peso, altura) {
    nome = document.getElementById('idnome')
    sobrenome = document.getElementById('idsobrenome')
    peso = document.getElementById('idpeso')
    altura = document.getElementById('idaltura')
    //
    let body = document.getElementsByTagName('body')
    nome = nome.value
    sobrenome = sobrenome.value
    peso = peso.value
    altura = altura.value
    let texto = document.getElementById('resposta')
    texto.innerHTML = `${nome} ${sobrenome}, ${peso}kg, ${altura}m.`
}
*/

function escopo (){
    const form = document.querySelector('.form') 
    const results = document.querySelector('#resultado') 
 
    const pessoas = [];

    function recebeEventoForm (evento){
        evento.preventDefault();
        const nome = form.querySelector('#idnome').value
        const sobrenome = form.querySelector('#idsobrenome').value
        const peso = form.querySelector('#idpeso').value
        const altura = form.querySelector('#idaltura').value

        pessoas.push({
            nome, sobrenome, peso, altura
        })
        console.log(pessoas)

        results.innerHTML += `<p>${nome} ${sobrenome}, ${peso}Kgs, ${altura}m</p>`
    }
    form.addEventListener('submit', recebeEventoForm)
}

escopo()
