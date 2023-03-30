console.log("task8_closures.js")
// CLOSURES //
// Function along with it's lexical scope bundle together forms closure
// ...may be it is just a function with its previous first lexical scope
// block.
function x(){ 
    var a = 19;
    function y(){
        var b = 23;
        console.log(a);
        function z(){
            console.log(b)
            return a+b
        }
        return z
    }
    return y;
}
const d = x();  // as we know function x is gone from call stack afer execution
const e = d(); // so same with y function after return z function   
const f = e(); //still z function is able to access its lexical scope this is due to CLOSURES
console.log(f);
// When we return function we not only return function but we return 
// it's lexical scope of the function along with function.

// console.log(x()()());


// function x(){
//     let a = 10;
//     function y(){  
//         console.log(a);   
//     }   
//     return y;   
//     }  
// x()();
// USES OF CLOSURES // 
/*
    Module Design Pattern
    Curring
    Functions like once
    Memoize
    Maintaining state in async world.
    setTimeouts
    Iterators
    and manu  ore.
*/
