const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


for (let i of numbers){
    if (i === 2 || i === 4){
        console.log(`Skipped number ${i}`)
        continue;
    }; //Continue -> Pula para o próximo laço

    if (i === 12){
        console.log(`${i} found. Shutting Down...`)
        break; // Encerra a repetição ao encontrar a condição
    };

    console.log(i);
}