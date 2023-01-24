function relogio(){
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    document.addEventListener('click', function(e){
        const el = e.target;
        if (el.classList.contains('zerar')){
            clearInterval(timer)
            segundos = 0;
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado')
        }

        if (el.classList.contains('pausar')){
            clearInterval(timer)
            relogio.classList.add('pausado')
        }

        if (el.classList.contains('iniciar')){
            clearInterval(timer);
            iniciaRelogio();
            relogio.classList.remove('pausado')
        }
    })

    function criaSegundos(segundos){
        const date = new Date(segundos * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function iniciaRelogio(){
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = criaSegundos(segundos)
        }, 1000);
    }
}
relogio()