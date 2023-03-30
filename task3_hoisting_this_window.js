console.log("task3_hoistiog_this_window.js")
//what is hoisting?
//  hoisting is a phenomina in javascript by which we can access variable and 
//functions even Before initilizating it
getCoarse();
// this will run all code in function if function is defined earler or later.
console.log(x);  //this give value of x undefined if x is defined below.
var x = 7;
// console.log(a);  
// gives reference error "'a' not defined" as 'a' is not defined anywhere.

console.log(getCoarse);   
// prints whole javascript programme in getCoarse function with comments
function getCoarse(){ 
    console.log("Namaste Javascript");//this is not global space
}

/* //TWO PHASE EXACUTION OF JAVASCRIPT//
As we konw in javascript code runs in two phases in first phase space 
is allowted to all variables and functions, but only functions will be 
saved in that space in this phase
*/

console.log(getName);
//ARROW FUNCTION// as it act as variable it will give undefined
//THIS BEHAVE LIKE VARIABLE//
var getName = () =>{
    console.log("this is get name function");
}

//if variable is not present in whole globle space then console.log(x) 
//will give reference error
//this is globle space 



//WINDOW and THIS //
console.log(window.x);
console.log(x)
console.log(this.getCoarse)

//EXAMPLE //
console.log(printName);//this will give us undefined
console.log(printName());//this will give us error that printName is not function.
var printName = (name) => {
console.log(name)//this will give nothing till we call printName().
}