const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send(null); //Pois é um get

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    })
};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if (tag === 'a') {
        e.preventDefault();
        loadPage(el);
    }
})
async function loadPage(e) {
    const href = e.getAttribute('href');
    const response = await request({
        method: 'GET',
        url: href
    })
    try {
        loadResult(response)
    } catch (error) {
        console.log('Erro: ' + error);
    }
}
function loadResult(response) {
    const result = document.querySelector('#result');
    result.innerHTML = response;
}


fetch('page1.html').
then(response => {
    console.log('bbbbbbb')
    if(response.status !== 200)throw new Error('ERROR 303')
    return response.text();
}).then(html => {
    console.log(' Este é o html: ')
    console.log(html)
})
.catch(e => console.log('Errinho ' + e))