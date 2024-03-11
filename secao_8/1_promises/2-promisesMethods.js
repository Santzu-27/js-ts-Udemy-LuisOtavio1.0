function wait(msg, time){
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string'){ 
            reject(false);
            return
        };
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' PASSEI');
        }, time);
    });
}

const promises = [
    'Promise values',
    wait('P2', 3000),
    wait('P3', 1000),
    wait('50', 1500),
    wait('P4', 1000)
];

Promise.all(promises)
.then(function(resultado){
    console.log(resultado)
})
.catch(function(err){
    console.log(err)
});