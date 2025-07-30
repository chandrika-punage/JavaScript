//the conditonal-prompt is used to collect the data from the user 
//the prompt-sync package is installed nd used to collect the data from the user 
//npm init
//npm i prompt-sync

//----------------------------------------------------------------------------

// const prompt=require('prompt-sync')()

// let num=prompt('Enter number: ')
// console.log(num)

//-----------------------------------------------------------------------------

//JS treats number as a string soo converting it to number is required.

// const prompt=require('prompt-sync')()

// let a=prompt("Enter the a Value: ") //we can convert string to number using the Number Keyword
// let b=prompt("Enter the b Value: ")
// let c=Number(a)+Number(b)

// console.log(c)

//------------------------------------------------------------------------------

//WAP--Give number is even or odd

let input=require('prompt-sync')()

let num=input("Enter the number: ")

if(num%2==0){
    console.log("Given number is Even")
}
else{
    console.log("Given number is Odd")
}


