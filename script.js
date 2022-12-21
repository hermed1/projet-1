class bankAccount {
  constructor(firstName, lastName, balance){
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
  }
  showBalance(){
    console.log(this.firstName, ' a ', this.balance , ' EUR')
  }

  deposit(amount){
    this.balance = this.balance + amount;
    this.showBalance();
  }
  withdraw(amount){
    if(amount > this.balance){
      console.log('denied');
    } else{
      console.log("retrait de", + amount + " EUR")
      this.balance = this.balance - amount;
      this.showBalance();
    }
  }
}
const mehdiAccount = new bankAccount('Mehdi', 'Charef', 500);
mehdiAccount.showBalance();