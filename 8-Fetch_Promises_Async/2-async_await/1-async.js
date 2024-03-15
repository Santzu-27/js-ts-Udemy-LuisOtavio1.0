function rand(min, max){
    min = 1; max = 6;
    let num = Math.floor(Math.random() * (max - min) + 1);
    console.log(num + 'sec');
    num *= 1000;
    return num
}

function wait4it(msg){
    return new Promise((resolve, reject) =>{
        let random = rand()
        setTimeout(() => {
            if(typeof(msg) !=='string'){
                reject('ERRO')
                return
            }
            resolve(msg.toUpperCase() + 'PASSED')
        }, random)
    })
}

async function tests(){
    try {
        const stage1 = await  wait4it('Fase 1 -')
        console.log(stage1);
    
        // const stage4 = await  wait4it(4)  /// <-----   ERRO 
        // console.log(stage4);

        const stage2 = await  wait4it('Fase 2 -')
        console.log(stage2);
        
        const stage3 = await  wait4it('Fase 3 -')
        console.log(stage3);
        
    } catch (e) {
        console.log(e);
    }
}

tests();