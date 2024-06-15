//Immedeiately invoked function expression;
/*
//()() => syntax for IIFE
fist () is used for writing the function inside it to protect ot from getting polluted from global variables.
seconf () is used for execution and passing parameters.
we need to explicitly end the function with ';' to end the expression.

*/

(function myfunc(){
    //it is called as named IIFE as we have defined function using function keyword
    console.log(`My IIFE function`)
})();


( (name) => {
    console.log(`My Arrow IIFE ${name}`)
})('abc');