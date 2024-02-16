/*  705.484.450-52   070.987.720-03  
    7  0  5  4  8  4  4  5  0    
    10 9  8  7  6  5  4  3  2 
*/
function CpfValidate(sentCPF){
    Object.defineProperty(this, 'cleanCpf', {
        enumerable: true,
        get: function(){
            return sentCPF.replace(/\D+/g, '');
        }
    })
}

CpfValidate.prototype.validate= function(cpf){
    if(this.cleanCpf === undefined) return false;
    if(this.cleanCpf.length !== 11) return false;
    return true;
}

const cpf = new CpfValidate('705.484.450-52');
console.log(cpf.cleanCpf)
