class Account{
    open_Acc(){
        console.log("Account opened Successfully")

    }
    deposit_Amount(amount){         //amount is value/parameter
        console.log("Amount deposited",amount)
    }
}
var a1=new Account();
a1.open_Acc();
a1.deposit_Amount(5000);  //5000 is the argument/value
a1.deposit_Amount(6500);
a1.deposit_Amount(7000);    //we can invoke enumber of methods 

