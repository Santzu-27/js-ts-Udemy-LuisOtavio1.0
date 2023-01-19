const divPa = document.querySelector('.paragraphs');
const parags = document.querySelectorAll('p'); 

const bodyStyles = getComputedStyle(document.body);
const backgroundColorBody = bodyStyles.backgroundColor;

console.log(backgroundColorBody);

for (let i in parags) {
    parags[i].innerHTML = `Paragrafo ${i+1}`
    parags[i].style.backgroundColor = backgroundColorBody
    parags[i].style.color = 'white'
}