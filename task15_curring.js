//..BIND..//

let multiply = function(x,y){
    console.log(x*y);
}
multiply(5,3);
let multiplyBytwo = multiply.bind();
multiplyBytwo(4,48);
let multiplybythree = multiply.bind(this,3);
multiplybythree(9);



//..CURRING..// using closures

let sumation = function(x){
    return function(y){
        console.log(x+y);
    }
}
// let sumBytwo = sumation(2);
// sumBytwo(4);
sumation(7)(7);
