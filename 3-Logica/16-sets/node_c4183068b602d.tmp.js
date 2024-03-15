//             //setInterval e setTimeout

function showHour(){
    let date = new Date();

    return date.toLocaleTimeString('pt-BR', {
        hour12: false    
    });
}


setInterval(function(){
    console.log(showHour());
}, 2000);