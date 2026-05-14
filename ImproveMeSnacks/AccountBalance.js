function accountBalance(){

const account = {accountName: "David", balance: 500}; 
if (account.balance < 1000)
    return "Low balance";
else
    return "Suffucient Balance";

}
console.log(accountBalance());
