console.log("task9_call_apply_bind.js");
// //CALL APPLY AND BIND//
// //..CALL..//
// var a = {
//     num:3,
//     a:9,
//     b:99
// };

// var addToThis = function(a,b,c){
//     return this.num+ a +b+c;
// }
// console.log(addToThis.call(a,4,4,3));
// // // functionname.call(obj,functionaurguments);
// //Another example of call //
// function sumofage(){
//     return this.a+this.b
// }

// console.log(sumofage.call(a));

// //..APPLY..//
// let arr = [1,2,3];
// console.log(addToThis.apply(a,arr));
// // functionname.apply(obj, [arg1,arg2,arg3]);
// // same as call but instead of aurguments we send array of aurguments. 

// // //..BIND..//
// var b = {num:5} ;
// var bound = addToThis.bind(b);
// console.dir(bound);
// console.log(bound(2,4,5));
// var anynameofmethod = functionname.bind(obj);
// anynameogmethod(arguments of that function);

// UtILITY OF CALL APPLY and BIND //
