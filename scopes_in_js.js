let a =100;


function myfunc(){
    let a = 10;
    const b =20;
    var c= 30;

    console.log("Inner value of a", a);
}

// myfunc();
// console.log(a);
// console.log(b);  //cannot be accessed
// console.log(c); // cannot be accessed


//*************************************************************************************



function One(){
    const userName = "abc";
    
    function Two(){
        const lastName = "pqr";
        //console.log(userName);  //child can access parent varibales
    }
    
    // console.log(lastName); // cannot access out of scope  (parent cannot access child variables)

    Two();

}

One()


//**************************************************************** */

//diffent ways to define function in JS

//*way 1:  only definition (if we call function either before or after defintion wont cause any issue)

console.log(addOne(5))

function addOne(num){
    return num + 1;
}

//addOne(5);


//way 2: assigning to a variable (if we call before function defiiniton we will get error) ReferenceError: Cannot access 'addTwo' before initialization

console.log(addTwo(5))

const addTwo = function(num){
    return num+2;
}

//addTwo(5)