let emp={
    "eid":101,
    "ename":'John',
    get_details: function(){
        return "chennai"
    }
}
// console.log(emp)
// console.log(emp.ename)



const keys= Object.values(emp)      //buildin func of Object
// console.log(keys)



// console.log(emp)

// for (const ab in emp) {
//     console.log(ab)
//    console.log(emp[ab])
//    //
// }


for (const element of [1,2,3]) {
    console.log(element)
}