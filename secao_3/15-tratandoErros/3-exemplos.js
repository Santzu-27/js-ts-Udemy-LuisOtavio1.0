function returnHour(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('data must be a Date object');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-br', {
        hour:'2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }) + '.';
}

const someDate = new Date('05-04-2002 19:20:12')
const hour = returnHour()
console.log(hour)
console.log(returnHour(someDate)) 