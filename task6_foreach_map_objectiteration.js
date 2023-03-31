console.log("task6_foreach_map_objectiteration.js")
// OBJECT ITERATION //

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
// towards same obj then only it will say true otherwise it will show 
// false 
//     If we check it for string or number it will check value.
// */
// var a =7
// var b=7
// console.log(a==b); // Give true as it is equal number at different space.
// console.log(obj2)
// console.log(obj)


//FOR EACH//
var a =7
let ar = [1,3,33,87];
// console.log(ar.forEach((e)=>e)) // this will give undefined as returned 
// data will not saved in forEach
// ar.forEach(element => console.log(element));// element is consoled at each iteration
// console.log(ar.forEach(item,a)) 
// above is if we want to send other info along with element.
// below is how to catch that value

// function item(ele,ind,array){ 
//     console.log(ind,ele,array,a)
//     return ele+ind
// }
function item(ele){ 
    console.log(ele,a)
    return ele+a
}

// below steps we will required if we want to print array of each return
// of element
// var newarr =[];
// ar.forEach(element => newarr.push(element + 2 ))
// console.log(newarr)

/* 
Inside foreach function at every iteration the function inside forEach()
will be execuited and return value will not saved or something
so to overtake this problem we use map 
*/

// MAP //

console.log(ar.map(item)) 
// Map will store returned valued in array and if we console.log it will
// print that array

let nArray = [1,2,3,4,5,6,7,8,9].map(doubleeven)
console.log(nArray.map(doubleeven));
function doubleeven(element,index,arr){
    if (element%2 ===0){
        return element*2
    }else{
        return element
    }
}
console.log(nArray)
