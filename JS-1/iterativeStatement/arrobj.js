
//to check Array is empty or not?(using length property)
let emp_id=[101,102,103,104]
let user=[]

if(user.length > 0){
    console.log("Not empty")
}
else{
    console.log("empty")
}

//to check obj is empty or not

let emp={
    eid:101,
    ename:"Rahul",
    gender:"Male"
}
// console.log(emp.length) //undefined
// console.log(Object.keys(emp))   //[ 'eid', 'ename', 'gender' ]
// console.log(Object.keys(emp).length)    //3
// console.log(Object.keys(emp)>0)        //false becoz its not empty error


//using if nd else

if(Object.keys(emp).length>0){
    console.log("Not empty")    //not empty
}
else{
    console.log("empty")
}

//using ternary operator

Object.keys(emp).length>0 ? console.log(true):console.log(false)        //true


