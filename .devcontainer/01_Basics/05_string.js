const name = "Shahzaib "
const repoCount = 20 

//console.log(name + repoCount + " Developer");

//console.log(`Hello my name is ${name} any my repo count is ${repoCount} `);

const gameName = new String ('Shahziab-Hassan-Diraj')
/*
 console.log(gameName[3]);
 console.log(gameName.__proto__);
 console.log(gameName.length);
 console.log(gameName.toLowerCase());
 console.log(gameName.charAt(3));
 console.log(gameName.indexOf('S')); */

 const newString = gameName.substring(0 , 4)
 //console.log( newString);

 const anotherString = gameName.slice(-8, 3)
 //console.log(anotherString);

const newStringOne = "     Shahzaib        "
//console.log(newStringOne); 
//console.log(newStringOne.trim());

const url = "https://shahzaib.com/shahzaib%48diraj"

console.log(url.replace ('%48', '-' ))

console.log(url.includes('shah'))

console.log(gameName.split(','));