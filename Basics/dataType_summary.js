// JavaScript is a Dynamic Type Language

// Primitive

// 7 Types : String,Number,Boolean,null,undefined,Synmbol,BigInt

let stringValue = "abc";
let intValue = 34;
let isLoggedIn = false;
let Temp = null; 
let state;
let Id = Symbol("123"); 
let anotherId = Symbol("123");

console.log(Id == anotherId);
let bigNumber = 21313n
console.log(typeof bigNumber);


//Reference Type(Non - Primitive) : Array,Object,Function

let dataTypes = ["num","str","big","NaN"];
let myObj ={
    name: "abc",
    age : 23
};

const myFunction =function(){
    console.log(dataTypes);
}

// Stack(Primitive)  & Heap Memory(Non Primitive)


// Stack
let myOrg = "Accenture";
let previousOrg = myOrg;
previousOrg = "Capgemini";

console.log(myOrg);
console.log(previousOrg);

// Heap

let userOne = {
    mailId :"abc@mail.com",
    userId : "abc"
};

let userTwo = userOne;

userTwo.mailId = "abccd@mail.com";
console.log(userOne.mailId);
console.log(userTwo.mailId);
