function funcProm(msg, time){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            if (typeof msg !== 'string'){
                reject('BAD VALUE')
            }
            resolve(msg)
        }, time);
    });
}

funcProm('teste', 1000)
    .then(retorno => {
        console.log(retorno);
        return funcProm('a', 5000)
    })
    .then(retorno => {
        console.log(retorno);
        return funcProm(true, 2000)
    })
    .catch(e => {
        console.log('ERRO', e);
    })
