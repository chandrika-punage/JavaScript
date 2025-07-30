class Parent{
    pname;
    constructor(name){
        this.pname=name;
    }
}
class Child extends Parent{
    cname;
    constructor(cn,pn){ 
        super(pn);                                           //ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        this.cname=cn
    }
}
let c1=new Child("Rahul","Raju")        //creating obj for child class..so need to invoke parent class using Super keyword.
console.log(c1)

// super(10)-->gives pname as 10 //super()--->pname as undefined  //super(pn)-->pname as Raju
