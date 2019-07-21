function createBankAcc(name, balance) {
  var name = name;
  var balance = balance;
  var account = account;
  var amount = amount;

  function withdraw(amount) {
    if (amount <= balance) {
      balance -= amount;
    } else if (amount > balance) {
      return console.log("Insufficient funds");
    }
  }
  function deposit(amount) {
    balance = balance + amount;
    return balance;
  }
  function showBalance() {
    console.log("Balance is " + balance);
  }

  function showName() {
    console.log("Name is " + name);
  }

  function transfer(amount, account) {
    if (amount < balance) {
      balance -= amount;
      account.deposit(amount);
      console.log("Transferred " + amount);
    } else console.log("Insufficient transfer funds");
  }

  function showHistory(newBalance) {
    var date = date;
    var operation = operation;
    var transactions = transactions;
    var newBalance = [{ amount, operation, date }];
    {
      withdraw(amount);
      newBalance.push({
        amount: balance,
        operation: "withdraw",
        date: new Date(),
        newBalance: balance
      });

      deposit(amount);
      newBalance.push({
        amount: balance,
        operation: "deposit",
        date: new Date()
      });

      transfer(amount);
      newBalance.pop({
        amount: balance,
        operation: "transfer",
        date: new Date()
      });
    }
  }

  return {
    withdraw,
    deposit,
    showBalance,
    showName,
    transfer,
    showHistory
  };
}

var Otilia = createBankAcc(Otilia, 3000);
var Diana = createBankAcc(Diana, 600);
var John = createBankAcc(John, 500);

Otilia.deposit(3000);
Otilia.withdraw(50);
Otilia.transfer(50, John);
Diana.transfer(200, Otilia);
John.transfer(300, Diana);
Otilia.showBalance();
Diana.showBalance();
John.showBalance();

Otilia.showHistory(2);
