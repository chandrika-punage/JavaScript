class Account{
    acc_Id;
    acc_Name;
    acc_Bal;

    constructor(id,name,amount){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal=amount;

    }
}

let a1=new Account(101,'RG',5000);
let a2=new Account(102,'SG',15000);
let a3=new Account(103,'PG',25000);
console.log(a1)
console.log(a2)
console.log(a3)


