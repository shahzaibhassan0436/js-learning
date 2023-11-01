// Primitive
// 7 Types : String ,Number, Boolean ,Null, Undefined , Symbol, BigInt


const score =100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail ; 

const id = Symbol('480')
const anotherId = Symbol('480')

console.log(id === anotherId);

const bigNumber = 432746926263823704n


// Refrence Type/Non-Premitive 
// : Arrays, Objects, Functions

const heros = ["Muhhamad ALi Jinnah" , "Allam Iqbal" , "Sir Syed"];
let myObj = {
    name : "Shahzaib",
    age : 27 ,
}

const myFunction = function(){
    console.log("Shahzaib Hassan");
}


console.log(typeof anotherId);


// Memory
//Types 
// .)Stack
// .)Heap

let myYoutubename = "ShahzaibHassan"

let anothername = myYoutubename
anothername = "endofpubg"

console.log(myYoutubename);
console.log(anothername);


let userOne ={
    email: "shahzaib@gmail.com",
    jazzcash: "03268681091"
}

let userTwo = userOne

 userTwo.jazzcash = "Ali Haider"

console.log(userOne.email);
console.log(userTwo.email);



