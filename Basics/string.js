const name = "abc";
const score = 68;

// console.log(name + score);

// string interpolatiom
console.log(`my name is ${name} and my score is ${score}`);

const anotherName = new String("worldcup");
// console.log(anotherName);

// console.log(anotherName.length);
// console.log(anotherName.__proto__);

// console.log(anotherName.toUpperCase());

// since this is the string as a object the orginal variable is not getting updated

// console.log(anotherName.indexOf('c'));
// console.log(anotherName.charAt(2))


const newName = anotherName.substring(0,5); //ignore the end endvalue
// console.log(newName);

const nextName = anotherName.slice(-6,5); // can use negative values
// console.log(nextName);

const url = "https://abc@abc%20fgh.com";
// console.log(url);
// console.log(url.replace('%20','-'));

// console.log(url.includes('pqr'));

const anothName = new String("worldcup-USA-WI-2024");

console.log(anothName.split('-'));