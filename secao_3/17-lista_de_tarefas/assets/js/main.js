const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li
}
function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
} 

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvaTarefas();
}

function criaBotaoApagar(li){
    li.innerText += '                      ';
    const btnApagar = document.createElement('button');
    btnApagar.setAttribute('class', 'apagar');
    btnApagar.innerText = 'Apagar';
    li.appendChild(btnApagar);
}

btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})


///////APAGAR
document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvaTarefas();
    }
})

function salvaTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
    console.log(tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas 
}