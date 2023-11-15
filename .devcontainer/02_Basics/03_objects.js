// singleton
// object create


// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Shahziab  ",
    age: 17,
    [mySym]: "mykey1",
    location: "Lahore",
    email: "shahzaibdiraj@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Saturday", "Sunday" ]
}
// console.log(JsUser.age);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.age = 17.5 //value change karny ky liay = laga ky change kar skty hain
// console.log(JsUser.age);

// Object.freeze(JsUser) // object.freeze sy value fix ho jati hai 
JsUser.age = 18
// console.log(JsUser.age);

JsUser.greeting = function () {
    console.log("Hello JS User");
}


JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
