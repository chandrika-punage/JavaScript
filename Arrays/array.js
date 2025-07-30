// //Create array
// var a=[]
// var b=[10,20,30,40]
// var c=[10,20.5,"Rahul",false,[],{},10]


// //Read array
// console.log(a)
// console.log(b)
// console.log(c)

//---------------------------------------------

// var eids=[101,102,103,104]

// console.log(eids)
// console.log(eids[0])
// console.log(eids[1])
// console.log(eids[2])
// console.log(eids[3]) 
// console.log(eids[10]) //No element so it gives undefined
// console.log(eids[-1]) //negative indexing is not possible it gives undefined

//--------------------------------------------------------------------------------------------

//create array
var enames=["John","priya","BOb","Alice"]

//read
console.log(enames)
console.log(enames[2])
console.log(enames[1])
console.log(enames[20])

//update

enames[1]="Priyanka"
enames[14]="chandu"
console.log(enames)  //the name updated 

//delete

// delete enames       
// console.log(enames) //this dont work

enames.length=0

// enames.pop()    //it removes the last ele from the array
// console.log(enames)

