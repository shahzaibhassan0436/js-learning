//  Array

const myArr = [1, 2, 3, 4, 5, 6 ]
const myHeros = ["Quaid", "Iqbal"]
const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[3]);

//  Methods Of Array

// myArr.push(1)
// myArr.push(8)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()


// console.log(myArr.includes(6));
// console.log(myArr.indexOf(1));

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);