//..CALL BACK..//

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

// document.getElementById("clickMe").addEventListener('click' , function abc() {
//     console.log('buttonclicked');
// });

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


