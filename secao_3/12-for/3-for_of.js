const name1 = 'Gabriel Santos';
for (let value of name1){
    console.log(value);
};

const names = ['Gabriel', 'Laís', 'Luka']
for (let value of names){
    console.log(value);
}
//Similar:
console.log('/#/#/#/#/#/#/#/#/#/#/#/#/#/#/#/#'); console.log();
names.forEach(function(v, i, array){
    console.log(v, i, array)
})