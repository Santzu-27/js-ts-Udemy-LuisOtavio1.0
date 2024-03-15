const a1 = [10, 20, 30];
let total = 0;
a1.forEach(function(v, i, array){
    array[i] = 5;
    console.log(v, i, array)
    total += v;

    
});
console.log(total);