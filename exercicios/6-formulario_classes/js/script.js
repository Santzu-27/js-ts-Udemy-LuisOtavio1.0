class Form {
  constructor() {
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
  handleSubmit(e) {
    e.preventDefault();
    if(this.verify()){
      alert('Formulário enviado!');
      this.form.submit();
    }
  }
  verify() {
    let valid = true;
    for (let errorText of form1.form.querySelectorAll('.error-text')) {
      errorText.remove();
    }
    //Devolver a margin caso não haja erro
    let inputsMargins = document.querySelectorAll('.campo');
    for (let input of inputsMargins) {
      input.style.marginBottom = '1.3em';
    }

    for (let field of this.form) {
      if (field.tagName.toLowerCase() == 'input') {
        //Campo vazio
        if (!field.value) {
          let id = field.id;
          if (id === 'rep-senha') { id = 'repetir senha' }
          let msg = `Campo <b>'${id}'</b> deve ser preenchido.`;
          this.createError(field, msg);
          valid = false;
        }
        //CPF váldo
        if (field.id === 'CPF' && field.value) {
          if (!this.cpfValidation(field)) {
            valid = false;
          }
        }
      }
      if (field.value && field.id === 'usuario' && !this.userValidation(field)) {
        valid = false;
      }
      if(field.value && field.id === 'rep-senha'){
        this.passValidation(field);
      }
    }
    return valid;
  }

  passValidation(field) {
    let valid = true;
    
    if(field.value !== this.passInput.value){
      this.createError(field, '<b>Senhas não batem</b>')
      valid = false;
      return valid
    }
    if(field.value.length < 6 || field.value.length >30){
      this.createError(field, 'Senha precisa conter entre 6 e 30 caracteres')
      valid = false;
    }
    return valid;
  }

  userValidation(field) {
    const user = field.value;
    if (user.length < 3 || user.length > 12) {
      this.createError(field, 'Usuário precisa ter entre 3 e 12 caracteres.')
      return false
    }
    if (!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(field, 'Usuário precisa conter apenas <b>letras e números.</b>')
      return false
    }
    return true;
  }

  cpfValidation(field) {
    const cpf = new CPF(field.value);
    if (!cpf.validate()) {
      this.createError(field, 'CPF inválido')
      return false;
    }
    return true;
  }
  createError(field, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    field.insertAdjacentElement('afterend', div)

    //Remover margins inpunts:
    let inputsMargins = document.querySelectorAll('.campo');
    for (let input of inputsMargins) {
      field.style.marginBottom = 0;
    }
  }
}


const form1 = new Form();

//CPFS VALIDOS PARA TESTE => 705.484.450-52 --- 070.987.720-03
