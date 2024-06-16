/*****************************  IF ELSE ******************/

//operator  <,>,<=,>=,!=,==,===

const balance = 1000;

if( balance <= 500){
    // console.log("less than 500");
}else if(balance <= 750){
    // console.log("less than 750");
}else{
    // console.log("greater than 750");
}


// logical operators
const isValidUser = false;

if(balance >= 500 && isValidUser){
    //console.log("user is valid");
}

if(balance > 750 || isValidUser){
    //console.log("user is valid with partivaluar logic");
}

//implicity if conditon

if(balance > 250) console.log("less than 250");



/****************Switch case *****************/

const month = "march"

switch (month) {
    case "Jan":
        console.log("January")
        break;
    case "feb":
        console.log("frebraury")
        break;
    case "march":
        console.log("march")
        break;
    default:
        console.log("default value");
        break;
}

//if we dont write break it will fall through after matching the value.
// but wil never execture default case.

/********************************* Truthy & Falsy values */
// assuming the value checking in the condition to be either true or fale

const userName = "abc@abc.com"

if(userName){
    console.log("this is truthy value");
}

// falsey value => null, undefined ,0 ,-0 ,bigint 0n,"";
//truthy values => []," ","0",{}

/******************NUll ?? expresion ***************** */

// let a = 10 ?? 20;  //if both values are givrn it will take first value  10
let a = null ?? 20;  //if initial value is null in that case alternate value will be taken 20

console.log(`${a}`);

/********************ternary opertaor */

// syntax =>  (condtion)?true:false

const score = 200;

((200 % 5) == 0) ? console.log(true):console.log(false);  //0



