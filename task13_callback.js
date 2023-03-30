//..CALL BACK..//
// What is Callback function in javascript?
/*
    Callback functions are a function which you pass in another
function.
    due to callbacks we can use js as asynchronous way.
*/
// setTimeout(() => {
//     console.log("timer")
// }, (3000));


// function x(y){
//     console.log("inx");
//     y();
// }
// x(function y(){// this y function is callback function//
//     console.log("in y ")
// })

//..EVENT LISTENERS..//


//..CLOSURES WITH CALL BACK AND EVENT LISTENERS..//

// // if we want add count the button clicked we can directly create a global variable like
// var count = 0;
// document.getElementById("clickMe").addEventListener('click' , function abc() {
//     console.log('buttonclicked',count++);
// });
// // but this global variable may be used another time in code and we can lost the count of click

//so we will use clousers to maintain a count inside that function.

function attacheventlisteners(){
    let count =0;
    document.getElementById("clickMe").addEventListener("click",function abc(){
        console.log("button clicked ",++count);
    });
}
attacheventlisteners() // closure formed inside this function maintain the
// count value and as it is blocked function.
//even we created another variable outside this function with same name it
// will not change the value of count.
// DOM CONTENT LOADED //
document.addEventListener("DOMContentLoaded", functionname)
function functionname(){
    console.log("DOM CONTENT IS LOADED")
}

