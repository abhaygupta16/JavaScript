// console.log(2 > 1) // true
// console.log(2 < 1) //false
// console.log(2 == 1) //false
// console.log(2 != 1) //true


// console.log("2" > 1);  // converts to number and check

// console.log(null > 0); //false
// console.log(null == 0); // false
// console.log(null >= 0); //true

// console.log(undefined > 0); //false
// console.log(undefined == 0); // false
// console.log(undefined >= 0); //false

/** equalti check(==) and comparison in JS works differently
 *  comparison (>,<,>=,<=) converts the null value into number i.e 0
 */


//strict check ===  (checks value as well datatype)

console.log("2" == 2);  //true => checks on value
console.log("2" === 2); //false => checks values as well datatype