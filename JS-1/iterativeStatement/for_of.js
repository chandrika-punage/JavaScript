let unames=["ab","cd","ef","gh","ij"]

for(let uname of unames ){
    console.log(uname)
}

//-----------------------------------------------

let emp={
        'id':101,
        'ename':'Rahul',
        'gender':'male'
}
console.log(emp)

//how to read object values 

console.log(emp.id)
console.log(emp.ename)
console.log(emp.gender)
console.log(emp.loc)



//----------------------------------------------------

let employee=[
    {eid:101,ename:"ab",gender:"male"},
    {eid:102,ename:"cd",gender:"female"},
    {eid:103,ename:"ef",gender:"male"},
    {eid:104,ename:"gh",gender:"female"}
]

//using for_of loop
for(let emp of employee){
    console.log(emp.ename)
    console.log(emp.gender)
}

//using normal for loop
for(let i=0;i<=employee.length-1;i++){
    console.log(employee[i])
}