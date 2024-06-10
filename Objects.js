/* Two ways to declare object
Singleton : create using constructor single instance
object literals : can create multiple instacne
*/

// using literals

const mySym = Symbol("Key1");

const JsUser = {
    name : "Abc",
    email:"abc@gpt.com",
    "full name":"Abc def",
    age : 34,
    location :"Sydney",
    isLoggedIn : false,
    loggedDays : ["Saturday","Wednesday"],
    [mySym] : "key1"
}

// Different ways to access properties of object
// console.log(JsUser);

// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); // access synmbol syntax


//set properties of object

JsUser.email = "abc@bard.com";
// console.log(JsUser);

//freeze the object : once freezed cannot update any values of the object

// Object.freeze(JsUser);
// JsUser.email = "abc@Devin.com";
// console.log(JsUser);

// {
//     name: 'Abc',
//     email: 'abc@bard.com',
//     'full name': 'Abc def',
//     age: 34,
//     location: 'Sydney',
//     isLoggedIn: false,
//     loggedDays: [ 'Saturday', 'Wednesday' ],
//     [Symbol(Key1)]: 'key1'
//   }



//using function inside the object

JsUser.greeting = function(){
    console.log(`Hello JsUer ${this.name}`);
}

// console.log(JsUser.greeting());


/************************************************************************************************* */

//using singleyom

const tinderUser = new Object();

tinderUser.Id ="Abc123";
tinderUser.email = "abc@tinder.com";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));  // returns the arrray of keys for specifiec object
// console.log(Object.values(tinderUser));  // returns the arrray of values for specifiec object
// console.log(Object.entries(tinderUser));  // returns the arrray of key value pair of each property for specifiec object


// object inside object

const regularUser = {
    name : "user1",
    email : "user@bard.com",
    fullname : {
        userfullname:{
            firstname : "user1",
            lastname : "jon"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

//combine multible objects

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};
const obj3 = {5:"e",6:"f"};


// +console.log({obj1,obj2});   //creates object inside object-- { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// console.log(Object.assign({},obj1,obj2));  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// {} is target object which will store final obj
// obj1,obj2 are soruce object


// console.log({...obj1,...obj2})  // spread operator { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// array of object

const dbUsers = [
    {
        email:"abc@abc.com",
        id:1
    },
    {
        email:"pqr@abc.com",
        id:2
    },
    {
        email:"rst@abc.com",
        id:2
    }
]

// console.log(dbUsers[1].email);