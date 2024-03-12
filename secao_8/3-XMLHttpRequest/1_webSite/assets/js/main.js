const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send(null); //Pois é um get

    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300 ){
            obj.success(xhr.responseText);
        }else{
            obj.error({
                code: xhr.status,
                msg: xhr.statusText
            });
        }
    });
};

document.addEventListener('click', e =>{
    const e = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        loadPage(e);
    }
})

