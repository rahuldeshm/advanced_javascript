


getCoarse();// this will run all code in function if function is defined earler or later
console.log(x);  //this give value of x undefined
// console.log(a);  // gives reference error a not defined



console.log(getCoarse);   // print whole javascript programme in getCoarse function with comments



/* //TWO PHASE EXACUTION OF JAVASCRIPT//
As we konw in javascript code runs in two phases in first phase space 
is allowted to all variables and functions but functions only saved in
that space in this phase
*/


console.log(getName);//ARROW FUNCTION// as it act as variable it will give undefined


var x = 7;



//if variable is not present in whole globle space then console.log(x) will give reference error
//this is globle space 
function getCoarse(){ 
    console.log("Namaste Javascript");//this is not global space
}




//THIS BEHAVE LIKE VARIABLE//
var getName = () =>{
    console.log("this is get name function");
}

//WINDOW and THIS //
console.log(window.x);
console.log(x)
console.log(this.getCoarse)