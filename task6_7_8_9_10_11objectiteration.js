// var obj = {
//     "key1":"value",
//     "key3":"value2",
//     "key4":"valu",
// }
// var arr = ["value1","valur3"];
// console.log(Object.keys(obj));
// // console.log(arrof);
// const obj2 = { ...obj}
// console.log(obj2 === obj) //teturn false 
// console.log(obj2 == obj) //return false 
// /*
//     When we are compairing objects in javascript, if both are pointing
// towards same obj then only it will say same otherwise it will show 
// false 
//     If we check it for string or number it will check value.
// */
// var a =7
// var b=7
// console.log(a==b); // Give true as it is number
// console.log(obj2)
// console.log(obj)


//FOR EACH//
// var a =7
// let ar = [1,3,33,87];
// console.log(ar.forEach(item,a))

// function item(ele,ind,array){
//     console.log(ind,ele,array,a)
//     return ele+ind
// }
/* 
Inside foreach function at every iteration the function inside forEach()
will be execuited and return value will not saved or something
so to overtake this problem we use map 
*/

// MAP //

// console.log(ar.map(item)) 
// Map will store returned valued in array and if we console.log it will
// print that array


// BLOCK SCOPED //

// const a = 10;

// {

// var a = 100;

// }

// console.log(a)

// CLOSURES //
// Function along with it's lexical scope bundle together forms closure

// function x(){ 
//     var a = 19;
//     function y(){
//         console.log(a);
    
//     }
//     y();
// }
// x();


// function x(){
//     let a = 10;
//     function y(){  
//         console.log(a);   
//     }   
//     return y;   
//     }  
// x()();


// //CALL APPLY AND BIND//
// //..CALL..//
// var a = {num:3,
// a:9,
// b:99
// };

var addToThis = function(a,b,c){
    return this.num+ a +b+c;
}
// console.log(addToThis.call(a,4,4,3));
// // // functionname.call(obj,functionaurguments);
// Another example of call //
// function sumofage(){
//     return this.a+this.b
// }

// console.log(sumofage.call(a));

// //..APPLY..//
// let arr = [1,2,3];
// console.log(addToThis.apply(a,arr));
// // functionname.apply(obj, [arg1,arg2,arg3]);
// same as call but instead of aurguments we send array of aurguments. 

// //..BIND..//
var b = {num:5} ;
var bound = addToThis.bind(b);
console.dir(bound);
console.log(bound(2,4,5));
// // var anynameofmethod = functionname.bind(obj);
// // anynameogmethod(arguments of that function);
// var obj = {

//     val: 100
    
//     }
    
//     function fun(a, b , c){
    
//     console.log(this.val + a + b + c)
    
//     }
    
//     const fun2 = fun.bind(obj)
    
    
    
//     fun2(1, 2,3)

//..ADVANCED CLOSURE..//

// function y(){setTimeout(() => console.log("a"), 0)
//     console.log('Done Coding')} y();
////this prints "Done Coding" first and then "a".////

//..FUNCTIONS..//

// a()

// b()


// "a" is function statement
// function a(){

// console.log('inside a');

// }


// "b" is function expression
// var b = function (){

// console.log('inside b');

// }

// named function expressions
var f = function abc(){
    console.log("inside function 'f'");
}
// this name "abc" of named function can't be used outside function 
// but if we require function inside function we can use name "abc".
