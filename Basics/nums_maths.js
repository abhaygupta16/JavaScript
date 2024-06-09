const score = 300;
// console.log(score);

const balance = new Number(200);
// console.log(balance);
// console.log(balance.toString().length);

const anothNum = 200.89889
// console.log(anothNum.toFixed(2)); //  fixs the value of decimal
// console.log(anothNum.toPrecision(4)); // rounds of value to given num value( value before decimal take the preference.)

const newNum =  229999;
// console.log(newNum.toLocaleString('en-IN'));


/******Math***************** */

console.log(Math.abs(-19)); // converts negative to positive
console.log(Math.abs(19));

console.log(Math.ceil(4.7)); //takes the greater integer value
console.log(Math.floor(4.7)); // takes the smaller integer value


// console.log(Math.random());  //genrate random value between 0-1

console.log(Math.floor((Math.random()*10) + 1));

// formula to calculate random values using Math.random between specific number.

const minValue = 10;
const maxValue = 20;

console.log(Math.floor((Math.random()*(maxValue-minValue+1))+ minValue));