class Form{
    constructor(){
        this.form = document.querySelector('#form')
        this.nameInput = document.querySelector('#nome');
        this.lastnameInput = document.querySelector('#sobrenome');
        this.cpfInput = document.querySelector('#CPF');
        this.userInput = document.querySelector('#usuario');
        this.passInput = document.querySelector('#senha');
        this.passConfInput = document.querySelector('#rep-senha');
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.verify();
    }
    verify(){
        let valid = false;
        for(let field of this.form){
            if(!field.value && field.tagName.toLowerCase() == 'input'){
                this.createError(field, field.id);
            }
        }
    }
    createError(field, id){
        const div = document.createElement('div');
        if(id === 'rep-senha'){id = 'Repetir Senha'}
        div.innerHTML = `Campo ${id} deve ser preenchido.`;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div)
    }
}


const form1 = new Form();;
form1.func()