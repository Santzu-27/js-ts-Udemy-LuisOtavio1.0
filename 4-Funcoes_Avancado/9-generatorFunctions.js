function* generating(){
    yield "Value1";
    yield "Value2";
    yield "Value3";
}   

function* generating2(){
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}

const g2 = generating2();

// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)

function* generating3(){
    yield 0;
    yield 1;
    yield 2;
}

function* generating4(){
    yield* generating3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = generating4();

// for(let valor of g4){
//     console.log(valor);
// }
function* generating5(){
    yield function(){
        console.log("Came from y1");
    }
    yield function(){
        console.log("Came from y2");
    }
}

const g5 = generating5();
// const func1 = g5.next().value;
// const func2 = g5.next().value;

// func1();
// func2();