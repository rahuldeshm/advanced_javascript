var obj = {
    "key1":"value",
    "key3":"value2",
    "key4":"valu",
}
var arr = ["value1","valur3"];
console.log(Object.keys(obj));
// console.log(arrof);
const obj2 = { ...obj}
console.log(obj2 === obj)


//FOR EACH//

// let arr = [1,3,33,87];
// console.log(arr.forEach(item,thisar))

// function item(ele,ind,array){
//     console.log(ind,ele,array,thisar)
//     return ele+ind
// }

// MAP //

// console.log(arr.map(item))


// BLOCK SCOPED //

// const a = 10;

// {

// var a = 100;

// }

// console.log(a)

// CLOSURES //

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
// var a = {num:3};

// var addToThis = function(a,b,c){
//     return this.num + a +b+c;
// }
// // console.log(addToThis.call(a,4,4,3));
// // // functionname.call(obj,functionaurguments);

// // //..APPLY..//
// // let arr = [1,2,3];
// // console.log(addToThis.apply(a,arr));
// // // functionname.apply(obj, [arg1,arg2,arg3]);

// //..BIND..//
// var b = {num:5} ;
// var bound = addToThis.bind(b);
// console.dir(bound);
// console.log(bound(2,4,5));
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
//     console.log('Done Coding')} y();////this prints "Done Coding" first and then "a".////

//..FUNCTIONS..//

// a()

// b()



// function a(){

// console.log('inside a');

// }



// var b = function (){

// console.log('inside b');

// }