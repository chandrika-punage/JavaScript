state={
    "user":{
        "uid":101,
        "uname":"abc"
    },
    "Product":{ 
        "pid":201,
        "pname":"john"
    }
}

// console.log(pname); //will get reference error 


//using object destructuring method
let {Product}=state;
let {pname}=Product;
console.log(pname);






