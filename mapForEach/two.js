let numbers=[18,31,8,11,55,232]

// let number=numbers.filter((num)=>{
//     return num%2==0;
// })                                               //long code
// console.log(number)

// -----------------------------------------------------

let num=numbers.filter(even=>even%2!==0)             //short code        //!= we get odd numbers
console.log(num)                                                         //== we get even mumbers