class Account{
    open_Account(){
        console.log("Account opened Successfully")

    }
    amount_Dep(){
        console.log("Amount Deposited")
    }
    with_Drawal(){
        console.log("Amount Withdrawed")

    }
    get_Bal(){
        console.log("Checking the balance")

    }
    close_Acc(){
        console.log("closing the account")

    }
}
var a1=new Account();
var a2=new Account();
var a3=new Account();

a1.open_Account();
a1.amount_Dep();
a1.with_Drawal();
a1.get_Bal();
a1.close_Acc();
