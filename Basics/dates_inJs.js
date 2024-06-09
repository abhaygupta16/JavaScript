// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let newDate = new Date(2024,0,10); //months starts from 0
// let newDate = new Date(2024,0,10,18,30);
// let newDate = new Date("2024-6-14"); //while giving in string format month starts from 1
let newDate = new Date("06-15-2024");
// console.log(newDate.toLocaleString());


// get more info and adjust according to requirment
console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))

// console.log(newDate.getMonth());
// console.log(newDate.getDate());
// console.log(newDate.getDay());  // the day of the week


let myTimestamp = Date.now()
// console.log(myTimestamp);   // time in milisecont from 1 Jan 1970

// console.log(newDate.getTime()); // time in milisecond for the user defined time Date value.
// console.log(Math.floor((myTimestamp)/1000)); //time in second for the user defined time Date value.


