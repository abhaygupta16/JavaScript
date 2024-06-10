const myArr = [1,2,3,4,5];
// console.log(myArr);

const strArr = ["A","B","C"];
// console.log(strArr);

const arr = new Array(9,8,7,6,5);
// console.log(arr);


//methods in array

// myArr.push(6);  //appends the new element at last of the array
// myArr.push(7);

// console.log(myArr);

// myArr.pop(); //removes the last element from the array
// console.log(myArr); 

// myArr.unshift(8); //appends the new elemt at the start of the array 0th index
// console.log(myArr);

// myArr.shift(); //removes the element from the 0th index of the array
// console.log(myArr);

// console.log(myArr.includes(8));   //return if exists true else false
// console.log(myArr.indexOf(4));  //if exists return the index value else -1


const mynewArr = myArr.join();  //converts the array into string representation 1,2,3,4,5

// console.log(mynewArr);


//************************************************************************************************
//IMportant  for interview

//slice vs splice in arrays

// console.log("A  ",myArr);

// console.log(myArr.slice(1,3));      //excludess last index hence only print [2,3]

// console.log("B  ", myArr);

// console.log(myArr.splice(1,3));    //include last index hence only print [2,3,4]

// console.log("C  ", myArr);

/* MAIN DIFFERENCE IS

Slice DOES NOT Change the orignal array
where as
Splice changes the original aaray by removing the element between the mentioned start and end indexs

A   [ 1, 2, 3, 4, 5 ]     org
[ 2, 3 ]                    sliced
B   [ 1, 2, 3, 4, 5 ]     ori post slice
[ 2, 3, 4 ]               spliced
C   [ 1, 5 ]                org post spliced

*/
// ******************************************************************************************************************************

const marvel_heros = ["Thor","IronMan","Hulk"];
const dc_heros = ["Batman","Superman","WonderWoman"];

// marvel_heros.push(dc_heros);     //create array inside a array [ 'Thor', 'IronMan', 'Hulk', [ 'Batman', 'Superman', 'WonderWoman' ] ]
// console.log(marvel_heros);

// const all_heros = marvel_heros.concat(dc_heros); //create a new array [ 'Thor', 'IronMan', 'Hulk', 'Batman', 'Superman', 'WonderWoman' ]
// console.log(all_heros);

// const all_heros_v2 = [...marvel_heros,...dc_heros];   //spred operator and we can add as many as array we want to combine
// console.log(all_heros_v2);

// const myN1 =  [1,2,3,[4,5,6],7,8,[4,5,[6,7]]];  //flat combines all the element 
//                                                 //wether it may be array in to array into sinlge string based on how much we want to break it
// console.log(myN1.flat(Infinity));


const myVar = "Hello";
// console.log(Array.isArray(myVar));   // return false if not a array
//console.log(Array.isArray(myArr));    //return true is it is a array

// console.log(Array.from({age : 30}));   //it wii retrun empty object [] , it is not clear either to use key or value to create an array

// const myN2 = Array.from("Hello");  // [ 'H', 'e', 'l', 'l', 'o' ]
// console.log(myN2);

let sc1 =10;
let sc2 = 30;

// console.log(Array.of(sc1,sc2));