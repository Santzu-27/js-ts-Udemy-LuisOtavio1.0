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
        let valid = true;
        for(let errorText of form1.form.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let field of this.form){
            if(field.tagName.toLowerCase() == 'input'){
                
                //Campo vazio
                if(!field.value){
                    let id = field.id;
                    if(id === 'rep-senha'){id = 'repetir senha'}
                    let msg = `Campo <b>'${id}'</b> deve ser preenchido.`;
                    this.createError(field, msg);
                    valid = false;
                }
                if(field.tagName ==='CPF'){
                    if(!this.cpfValidate(field)) valid = false;
                }
            }
        }
        
    }

    cpfValidate(field){
        const cpf = new Cpf();
        if(!cpf.validate()){
            this.createError(field, 'CPF inválido')
            return false;
        }
        return true;
    }
    createError(field, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div)
    }
}


const form1 = new Form();