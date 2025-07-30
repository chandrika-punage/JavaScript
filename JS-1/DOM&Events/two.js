class Account{
    //class contains properties nd methods
    acc_Id=101;
    acc_Name="ram";

    open_Account(){
       console.log("Account opened")
    }
}
var a1=new Account();
var a2=new Account();
console.log(a1) //Account { acc_Id: 101, acc_Name: 'ram' }
console.log(a2) //Account { acc_Id: 101, acc_Name: 'ram' }
console.log(a1.acc_Id) //101
console.log(a1.acc_Name) //ram
console.log(a2.acc_Id) //101
console.log(a2.acc_Name) //ram
a1.open_Account(); //Account opened
a2.open_Account(); //Account opened