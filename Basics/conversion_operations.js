/******************************Conversion*******************************************/
let score = "33";

// console.log(typeof score);
// console.log(typeof(score));

let scoreInNumber = Number(score);
// console.log(typeof scoreInNumber);
// console.log(scoreInNumber);


// conversion into number
// "33" => 33 number
//  true => 1 ; false => 0
//  null => 0
//  undefined => NaN
//  "33abc" => NaN

let isLoggedIn = undefined;

let isLoggedInBoolean = Boolean(isLoggedIn);

// console.log(typeof isLoggedInBoolean);
// console.log(isLoggedInBoolean);

// conversion into Boolean
// "33" => true
//  "" => false
//  0 => false ; 1 =>true
//  null => false
//  undefined => false


let age = 25;

let ageInString = String(age);

// console.log(typeof ageInString);
// console.log(ageInString)

/*************************** Operations ***********************************/

let val =  3;
let negVal = -val;

// console.log(negVal);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello";
let str2 = " JavaScript";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);  // 12
// console.log(1 + "2"); // 12
// console.log("1"+ 2 + 2); //122
// console.log(1 +2 + "2"); //32


// console.log(+true); //1     number + boolean
// console.log(+false); //0   number  + boolean

let Counter = 1;
// ++Counter;  //same output if we add before or after but internally work differntly.
Counter++;
console.log(Counter);


