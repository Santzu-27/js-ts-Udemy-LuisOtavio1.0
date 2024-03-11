function wait(msg, time){
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string') reject(false);
        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

const promises = [
    'Promise valor',
    wait('P2', 3000),
    wait('P3', 1000),
    wait('aaa', 1500),
    wait('P4', 1000)
];

Promise.all(promises)
.then(function(resultado){
    console.log(resultado)
})
.catch(function(err){
    console.log(err)
});