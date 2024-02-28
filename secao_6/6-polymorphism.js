function Account(agency, account, balance){
    this.agency = agency;
    this.account = account;
    this.balance = balance;
}

Account.prototype.withdraw = function(value){
    if(this.balance < value) {console.log(`Insufficient balance: R$${this.balance}`); return};
    this.balance -= value;
    console.log(`Withdrawn.`)
    console.log(`Balance: R$${this.balance}`)
};

Account.prototype.deposit = function(value){
    this.balance += value;
    console.log(`R$${value} deposited.`);
    console.log(`Balance: R$${this.balance}`);
} 

const conta = new Account(456, 2, 15);

// conta.deposit(50);
// conta.withdraw(65);

function CheckingAc(agency, account, balance, limit){
    Account.call(this, agency, account, balance);
    this.limit = limit;
}
CheckingAc.prototype = Object.create(Account.prototype);
CheckingAc.prototype.constructor = CheckingAc;

CheckingAc.prototype.withdraw = function(value){
    if(value > (this.balance + this.limit)){
        console.log(`Insufficient balance: R$${this.balance} | Limit: R${this.limit}`); 
        return;
    }
    this.balance -= value;
    console.log(`Withdrawn.`)
    console.log(`Balance: R$${this.balance}`)
    
}
const cc = new CheckingAc(5000, 2024, 50, 300);

cc.withdraw(200);
