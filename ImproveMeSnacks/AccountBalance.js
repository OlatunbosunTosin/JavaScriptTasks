function accountBalance(account){

    if (account.balance < 1000)
        return "Low balance";
    else
        return "Suffucient Balance";

}

const account = {accountName: "David", balance: 500}; 
console.log(accountBalance(account));
