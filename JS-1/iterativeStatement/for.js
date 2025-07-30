//printing 1 to 5 using for loop
var i=1;
for(i=1;i<=5;i++){
    console.log(i)
}


//printing 1 to 50 using for loop
var a=1;
for(a=1;a<=50;a++){
    console.log(a)
}

//print 1st 10 even number (2,4,6,8,10,12,14,16,18,20)

//initailize : i=2
//condition  : i<=20
//incr       : i=i+2
for(let i=2;i<=20;i=i+2){
    console.log(i)
}

//print 100 to 51 (100,99,98.................51)

//init  : i=100
//cond  : i>=51
//decr  : i--

for(let i=100;i>=51;i--){
    console.log(i)
}

//----------------------------------------------------------------


//how to read array elements using for loop??
//create
let eids=[101,102,103,104,105,106]

//read array--using indexing
console.log(eids[0])
console.log(eids[1])

//read array--using for loop
for(let i=0;i<=4;i++){
    console.log(eids[i])
}

//--------------------------------------------------------------------

let unames=["ab","cd","ef","gh","ij"]
console.log(unames.length)

for(let i=0;i<=unames.length-1;i++){
    console.log(unames[i])
}


















