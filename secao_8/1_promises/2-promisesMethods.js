function wait(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(false);
            return
        };
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' PASSEI');
        }, time);
    });
}

const promises = [
    // 'Promise values',
    wait('P2', 3000),
    wait('P3', 500),
    wait('50', 1500),
    wait('P4', 1000)
];

Promise.all(promises) // resolve todas simultaneamente 
    .then(function (resultado) {
        console.log(resultado)
    })
    .then(function () {
    })
    .catch(function (err) {
        console.log(err)
    });
    
console.log('___________')

Promise.race(promises) // Entrega o primeiro valor resolvido. 
    .then(function (result) {
        console.log(result)
    })
    .catch(function (err) {
        console.log(err)
    });