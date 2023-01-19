const elements = [
    {tag: 'p', text: 'Frase P'},
    {tag: 'div', text: 'Frase div'},
    {tag: 'section', text: 'Frase section'},
    {tag: 'footer', text: 'Frase footer'},
]

const container = document.querySelector('#container');
const div = document.createElement('div');

for (let i = 0; i < elements.length; i++) {
    let { tag, text } = elements[i];
    let createdTag = document.createElement(tag);
    let createdText = document.createTextNode(text);
    createdTag.appendChild(createdText);
    div.appendChild(createdTag);

};

container.appendChild(div);