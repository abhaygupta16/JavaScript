//syntax:
// function funcname(){
// }


function addNumber(num1,num2){
    console.log(num1+num2);
}

// addNumber();  //Nan  as no argments were provided
// addNumber(2,3); //5
// addNumber(2,null); //2


// assign the result of function into variable

// function addThreeNumbers(num1,num2,num3){
//     console.log(num1+num2+num3);
// }

// const result = addThreeNumbers(1,2,3)
// console.log(result); // undefined as above method is not returning any value.


// function addThreeNumbers(num1,num2,num3){
//     // console.log(num1+num2+num3);
//     return num1+num2+num3
//  }
// const result = addThreeNumbers(1,2,3);
// console.log(result); // 6


// pass paramter in any statement

// function showLoggedInUser(username){
//     return `${username} just logged in`;
// }

// console.log(showLoggedInUser("abc")); //abc just logged in
// console.log(showLoggedInUser("")); //just logged in

//console.log(showLoggedInUser());  //undefined just logged in  as no arg was defined to send to fucntion


// function showLoggedInUser(username){
//     if(username === undefined){
//         return console.log("please enter username");
//     }
//     return `${username} just logged in`;
// }

// console.log(showLoggedInUser());  //undefined  but it is correct as now
//                                   //we are prinitng the validation msg to indicate value was not provided


//rest operator in passing parameter in function.

// function showallargument(num1){
//     console.log(num1);
// }

// showallargument(2); //2
// showallargument(2,4);  // still 2 so we have to use rest(...) so that it will take all the values

function showallargument(val,val2,...num1){
    //console.log(num1);
}

showallargument(2,4);  // []  val1 :2,val2:4, num1: []
showallargument(2,4,6,7,9,8);  //[ 6, 7, 9, 8 ]  since we mentioned val and val2 the first two value woudl be assigned to them.
                                //   rest would beshown as array



//passing object as paramter to function

const userOrder= {
    username : "abc",
    prices : 299
}

function showUserOrder(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// showUserOrder(userOrder);  //username is abc and price is 299
/*but if we change any key in object property it will not get that vaues and we are providing the type of the parameter 
we are passing to the function.
so if we modify the price to prices and run the code again below is the output
*/

// showUserOrder(userOrder);  //username is abc and price is undefined


//passing the aaray on the function

const myArr = new Array(100,200,300,400)

function showValueAtSecondIndex(anyobject){
    //console.log(`value at second index of arrays is ${anyobject[2]}`);
}

showValueAtSecondIndex(myArr);  //value at second index of arrays is 300

