/* This keyword in object*/

const myobj = {
    username : "abc",
    price : 999,
    welcomeMessage: function(){
        // console.log(`${this.username} , welcome to js learnings`);
        // console.log(this);  // return the cuurent context here it will return the whole object
    }
}

myobj.welcomeMessage();
myobj.username = "pqr";
myobj.welcomeMessage();

// abc , welcome to js learnings
// {
//   username: 'abc',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// pqr , welcome to js learnings
// {
//   username: 'pqr',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }


/** this keyword in functions */

// this cannot be used inside function, it can only be used in objects

function myfunc(){
    const userName = "abc";
    //console.log(this.userName);  // undefined
    // console.log(this);
}

myfunc();

/***************************Arror functions */

// () => {}  syntax

const addTwoNum = (n1,n2) => {
    // console.log(this); // {}
    return n1+n2;
}

console.log(addTwoNum(1,5));

const addThreeNum = (n1,n2,n3) => (n1+n2+n3);
console.log(addThreeNum(1,2,5));

const myObj = () => ({"name":"abc"})

console.log(myObj());

/***********Notes
1. const addThreeNum = (n1,n2,n3) => (n1+n2+n3); this is an example of implicit retrun we dont write retrun explicitly.
2. if we put {} in function then we need to explicity add return keyword.

3. this inside arrow function returns {} object
4. this at global scope will also return {} object if nothing is declread.
*/

