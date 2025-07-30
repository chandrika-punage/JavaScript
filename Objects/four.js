//Create
let emp={
    "eid":101,
    "ename":"John",
    "esal":4500.45
}
//read
console.log(emp)
console.log(emp.eid)
console.log(emp.ename)
console.log(emp.esal)
console.log(emp.loc)

//update
emp.ename="John Doe"
emp.email="johndoe@gmail.com"
console.log(emp)

//delete
delete emp.esal
console.log(emp)
