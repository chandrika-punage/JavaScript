class Account{
    acc_Id;
    acc_Name;
    acc_Bal;

    constructor(id,name,bal){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal=bal;
    }


    deposit_Account(amount){
        return true;
    }
}
let a1=new Account(101,"Rahul",15000)
a1.deposit_Account(5000)
a1.deposit_Account(4000)
