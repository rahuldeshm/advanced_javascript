console.log("task5_let_const_var.js");
// console.log(window.g)//this will give undefined
// console.log(this.g)//this will also give undefined
// console.log(g);//error as connot access g before initialisation
let g = 77;
// {
//     let g=99;
//     console.log(g)//will work fine and give value 99
// }
// console.log(window.g)//this will give undefined
// console.log(this.g)//this will also give undefined
// console.log(g);//will work fine and give value 77
console.log(b); 
// works fine and gives value undefined
//TEMPORAL DEAD ZONE//
/* 
=>before assigining value to "g" it is in temporal dead zone.
=>can not access let variables by window.a or this.a unlike
var veriables.
=>let variables are not stored in global object they are 
stored at different memory location.
=>if a let variable is decleared then we can't decleare 
again in same space using let or var const.
=>but we can declear it in another scope or in function or 
closure.
=>if decleared let variable again it will give syntex error 
and no line of code is exicuted
=>in case of var variable we can declare a variable twice
=>we can declare var and let and give them initilasition 
after some time.
=>in case of const we need to initilase it with decleration 
if not it give syntex error.
=>const also behave like let in memory allocation.
=>in twice deceleration const throws error of syntex and 
when reassign throws type error: assignment to constant 
variable
*/
function a(){
    var g=1;//will work as g in anathor scope.
    console.log(g)
    var d = 88;
}


// let a ;
/*
can not decleared again as it is already decleared as 
function
*/
var b ;
a()
a=199; // can replace function a with some value
b=188;
console.log(a)
console.log(b)
// console.log(d)//cannot access 'd' as it in not in global 
// scope
const c=199;
// c=288;//can't do that in anywhere.
// if we want c in another closure or in another function can 
// do but need to add let or const in front of it.
console.log(c)
// EXAMPLE //
let ab = 5;

var bc = 6;



console.log(this.bc);

console.log(window.bc)

console.log(window.ab)//gives undefined

console.log(this.ab);//gives undefined