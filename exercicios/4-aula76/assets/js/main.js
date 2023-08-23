function createCalculator(){
    return{
        	display: document.querySelector('.display'),

            start(){
                this.btnsClick();
            },
            
            clearDisplay(){
                this.display.value = '';
            },

            delOne(){
                this.display.value = this.display.value.slice(0, -1);
            },

            btnsClick(){
                document.addEventListener('click', (e) => {
                    const el = e.target;
                    
                    if(el.classList.contains('btn-num')){
                        this.btnDisplay(el.innerText);
                    }
                    
                    if(el.classList.contains('btn-clear')){
                        this.clearDisplay();
                    }

                    if(el.classList.contains('btn-del')){
                        this.delOne();
                    }
                });
            },

            btnDisplay(valor){
                this.display.value += valor;
            }
    }
}

const calculadora = createCalculator();
calculadora.start();