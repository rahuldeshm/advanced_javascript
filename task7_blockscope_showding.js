// BLOCK SCOPED //
/* 
What is block scoped?
    block is {} in js.
    block is also known as compound statement.
    we use block to combine multiple statements.

*/
const a = 10;// will create in script scope 
var b = 60; // will create in global scope
let d=50;// will create in script scope.
{
    // console.log(b)//for var it gives previous value/let ans const temporal dead zone
    // console.log(d)//temporal dead zone if decleread
    // this is in script block parallel to global scope.
    // var a=1;//error identifier a is already declered. illigal shadowing
    // const a= 0; // will work.this will saved at block space.shadowed.
    // let a = 99 // will work.shadowed
    // let b=20;//will work.shadowed 
    // var b = 88; // will work shadowed and replaced global value of b.
    // const b = 22;// will work.shadowed
    // var d=30;// error identifier decleared. known as illigal shadowing
    // let d = 00; //this will work. is known as shadowing.
    // const d= 08;// this will work .shadowed.
    console.log(a)
    console.log(b)
    console.log(d)// gives value of block scoped b 
}
function ab(){
    // this is not global scope and in block.
    // let a = 100;// shadowed
    // var a=44;//shadowed
    // const a =4455;//shadowed
    // var b= 200;//shadowed
    // let b= 454;//shadowed
    // const b = 343;// shadowed
    // var d = 500; //will work shadowed
    // const d = 98;// shadowed
    // let d=84;//shadowed

    console.log(a);
    console.log(b);
    console.log(d);

}
ab()
console.log(a)// works fine
console.log(b);
/*
give value of b at global scope
    if var value only present at global
gives value of b at script block
    if not at global or
    if present at both as var.
if present inside block as let or const showding will happen and both 
values are saved for respective scope.
(at function block if we used let const or var it will create 
    new function scoped variables.)
*/
console.log(d)
