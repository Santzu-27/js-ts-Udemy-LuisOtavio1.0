//Retornar se esta em modo paisagem ou retrato
const ePaisagem = (w, h) => w > h ? 'Landscape' : 'Portrait';

console.log(ePaisagem(200,200))