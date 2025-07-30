let emp={
    eid:101,
    ename:"Rahul",
    gender:"Male"
}
console.log(emp.eid)
console.log(emp.ename)
console.log(emp.gender)


for(prop in emp){
   // console.log(emp.prop)  //we get undefined
    console.log(emp[prop])
}

