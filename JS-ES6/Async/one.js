let cal=(a,b,op)=>{
    if(op==="sum"){
        return a+b
    }
    if(op==="multi"){
        return a*b
    }

}

let r1=cal(10,20,"sum")
console.log(r1)     //30

let r2=cal(10,20,"multi")
console.log(r2)     //200