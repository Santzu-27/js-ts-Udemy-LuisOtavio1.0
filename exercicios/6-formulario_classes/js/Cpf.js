// 705.484.450-52 070.987.720-03
class CPFvalidate {
  constructor(sentCpf) {
    Object.defineProperty(this, 'cleanCpf', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: sentCpf.replace(/\D+/g, '')
    });
  }

  isSequence() {
    return this.cleanCpf.charAt(0).repeat(11) === this.cleanCpf;
  }

  genNewCpf() {
    const whitoutLastDigits = this.cleanCpf.slice(0, -2);
    const digit1 = CPFvalidate.digitGenerate(whitoutLastDigits);
    const digit2 = CPFvalidate.digitGenerate(whitoutLastDigits + digit1);
    this.newCpf = whitoutLastDigits + digit1 + digit2;
  }

  static digitGenerate(whitoutLastDigits) {
    let total = 0;
    let reverse = whitoutLastDigits.length + 1;

    for(let numString of whitoutLastDigits) {
      total += reverse * Number(numString);
      reverse--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';
  }

  validate() {
    if(!this.cleanCpf) return false;
    if(typeof this.cleanCpf !== 'string') return false;
    if(this.cleanCpf.length !== 11) return false;
    if(this.isSequence()) return false;
    this.genNewCpf();

    return this.newCpf === this.cleanCpf;
  }
}
