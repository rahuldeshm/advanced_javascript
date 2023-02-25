// console.log(a);// cannot give access to a before initialisation
console.log(b); // works fine and gives value undefined
//TEMPORAL DEAD ZONE//
// before assigining value to a it is in temporal dead zone
// can not access let variables by window.a or this.a unlike var veriables
// let variables are not stored in global object they are stored at different memory location
// if a let variable is decleared then we cant decleare again in code using let or var 
// if decleared let variable again it will give syntex error and no line of code is exicuted
// in case of var variable we can declare a variable twice
// we can declare var and let and give them initilasition after some time 
// but in case of const we need to initilase it with decleration if not it give syntex error
// const also behave like let in memory allocation
// in twice deceleration const throws error of syntex and when reassign throws type error: assignment to conatant variable




let a ;
var b ;
a=199;
b=188;
console.log(a)
console.log(b)
const c=199;
c=288;
console.log(c)