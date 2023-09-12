// function createCalculator(){
//     return{
//         	display: document.querySelector('.display'),

//             start(){
//                 this.btnsClick();
//                 this.pressEnter();
//             },

//             doMath(){
//                 let count = this.display.value;
//                 try{
//                     count = eval(count);
//                     if(Number.isNaN(count)){
//                         alert('Conta Inválida')
//                         return;
//                     }
                    
//                     this.display.value = count;
//                 }catch(e){
//                     alert('Conta Inválida')
//                 }
//             },
            
//             pressEnter(){
//                 this.display.addEventListener('keydown', e =>{
//                     if(e.keyCode === 13){
//                         this.doMath();
//                     }
//                 })
//             },

//             clearDisplay(){
//                 this.display.value = '';
//             },

//             delOne(){
//                 this.display.value = this.display.value.slice(0, -1);
//             },


//             btnsClick(){
//                 document.addEventListener('click', (e) => {
//                     const el = e.target;
                    
//                     if(el.classList.contains('btn-num')){
//                         this.btnDisplay(el.innerText);
//                     }
                    
//                     if(el.classList.contains('btn-clear')){
//                         this.clearDisplay();
//                     }

//                     if(el.classList.contains('btn-del')){
//                         this.delOne();
//                     }
//                     if(el.classList.contains('btn-eq')){
//                         this.doMath();
//                     }

//                     this.display.focus();
//                 });
//             },

//             btnDisplay(valor){
//                 this.display.value += valor;
//             }
//     }
// }

// const calculadora = createCalculator();
// calculadora.start();

function Calculator(){
    const display = document.querySelector('.display');

    this.start = (e) => {
        this.btnsClick();
        this.pressEnter();
    }
}

console.log(Calculator.display);
const calculator = new Calculator();