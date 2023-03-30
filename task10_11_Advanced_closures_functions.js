console.log("task10_11_Advanced_closures_functions.js");
//..ADVANCED CLOSURE..//
// function x(){
    
//     for (var i =1 ;i<6;i++){
//         function close(i){
//             setTimeout(() => {
//                 console.log(i);
//             }, i*1000);
//         }
//         close(i);
//     }  
// }
// x();
// function y(){setTimeout(() => console.log("a"), 0)
// console.log('Done Coding')} y();
//this prints "Done Coding" first and then "a".////

//..FUNCTIONS..//
/*
what are first class functions?
What is anonyomus functions?
What is function statement?
What is function Expression?
What is function declarations?
*/
// FUNCTION STATEMENT // is also known as function declarations
function a(){
    console.log("a is called")
}
// FUNCTION EXPRESSION //
var b = function (){
    console.log("b is called")
}
// Major difference is in HOISTING.

// ANONYMOUS FUNCTION //
// function who don't have name
var ab = function (){
    console.log('anonymus function')
}

// NAMED FUNCTION EXPRESSIONS //
var aaa = function asf(){
    console.log("Named functions")
    // we can call asf name inside only not outside
    // we can access inside by "asg" name.
}
// asf() // this will give error 


// Difference between parameters and arguments 
/* 
Parameters are set inside function and when we invoke
a function we pass arguments.
*/
function rahul(parameter1 , parameter2){
    console.log(parameter1,parameter2)
}
rahul(argument1, argument2);



// FIRST CLASS FUNCTIONS // 
// First class Citizens // this ability makes functions first 
// class citizens.
/*
The property of function in js that we can pass a function 
as a arguments ans we can return function as a variable so 
this nature of a function is known as first class functions

The ability of a function to assign as value and can be passed
as arguments and returned from another functions 
*/



// Arrow functions//
/*
ES6 
*/

// named function expressions
// var f = function abc(){
//     console.log("inside function 'f'");
// }
// this name "abc" of named function can't be used outside function 
// but if we require function inside function we can use name "abc".

// CURRING //
// To execute some code before and after some time we want to 
// execute remaining function.


