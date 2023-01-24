const timerDiv = document.querySelector('h2');
const seconds = document.querySelector('#seconds');
const minutes = document.querySelector('#minutes');
const hours = document.querySelector('#hours');
const buttonStart = document.querySelector('#start'); buttonStart.addEventListener('click', startTimer);
const buttonReset = document.querySelector('#reset'); buttonReset.addEventListener('click', resetTimer);
const buttonPause = document.querySelector('#pause'); buttonPause.addEventListener('click', pauseTimer);

let activated = false;
let paused = true;
let timerS = 0;
let timerM = 0;
let timerH = 0;


function startTimer(){
    if (activated === false && paused === true){
        activated = true;
        setInterval(function(){
            if (paused === true){
                addSeconds();
            } else {return};
        }, 1)
    } else if (activated === true){
        window.alert('O botão já esta ativado')
        return
    } else {
        paused = true;
        activated = true;
    }
}

function addSeconds(){
    timerS += 1
    if (timerS < 60){
        if (timerS < 10){
            seconds.innerHTML = '0'+timerS;
        }
        else{
            seconds.innerHTML = timerS
        }
    } else {addMinutes()}
}

function addMinutes(){
    timerS = -1;
    addSeconds();
    timerM += 1;
    if(timerM < 60){
        if (timerM < 10){
        minutes.innerHTML = '0' + timerM + ':';
    } else {
        minutes.innerHTML = timerM + ':'
    }
    }else{addHours()}
}

function addHours(){
    timerH += 1;
    timerM = -1;
    addMinutes();
    if (timerH < 10){
        hours.innerHTML = '0' + timerH + ':';
    }else{
        hours.innerHTML = timerH + ':';       
    }
}

function pauseTimer(){
    activated = false;
    paused = false;
}

function resetTimer(){
    timerS = -1;
    timerM = -1;
    timerH = -1;
    addSeconds();
    addHours();
}

