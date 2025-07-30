class Account{
    acc_Name;
    acc_Address;
    acc_Mobile;

    constructor(name,address,phno){
        this.acc_Name=name;
        this.acc_Address=address;
        this.acc_Mobile=phno;

    }
    update_Address(){

    }
    update_Mobile(){

    }
}
class SavingsAcc extends Account{
    acc_Id;
    // acc_Bal;
    min_Bal=500;

    constructor(id,name,addr,phno,amount){
        super(name,addr,phno);            //if we dont pass arguments in super thn name,addr,mobile values will be undefined 
        this.acc_Id=id;                     //super() invokes the parent class constructor
        this.acc_Bal=amount;

    }

    open_Acc(){

    }

    deposit(amount){

    }
    withdrawal(amount){

    }
    get_Bal(){

    }
}

let sa=new SavingsAcc(101,"Rahul","kerala",9345678879,5000);
console.log(sa)

class CurrentAcc extends Account{
    acc_Id;
    acc_Bal;
    min_Bal=5000;

    open_Acc(){

    }

    deposit(amount){

    }
    withdrawal(amount){

    }
    get_Bal(){

    }

}

let ca=new CurrentAcc(1001,"Sonai","Goa",9786458945,50000);

