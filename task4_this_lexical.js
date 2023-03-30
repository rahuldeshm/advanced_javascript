console.log("task4_this_lexical.js")
/*
empty file is shortest js file
javascript engine still work for empty file.
if we go to terminal and write window it give a window element
window object is global object created along with global 
execution context by js at globel level 

in browser this global context is known as window object

*/
// var a = 2;
// var c = 2;
function b(){
    var x = 2;
    a()
    var c = 4
    console.log(c)
}

console.log(a);// This will print 2 as a is 2 in global space
console.log(this.a);//same output '2'
console.log(this.c)// same output '2'
console.log(this.x)
/*
his will not show error as this is difined and x is not defined so it 
will give output ans undefined

but we try to access only x => will show error as x is not defined.
*/
// console.log(x) //give error as x not defined
// console.log(window.a) // this will print '2' in console
// console.log(window.x)//this will also give undefined as windows is defined 
console.log(b());
/*this will invoke the function b prints 4 as it is console.log(c) inside 
scope of b but it will return nothing and this will give us value undefined
as b() so this value then console.log() so it will give undefined.
*/
console.log(this.b)
// To understand about this.x we will see it with object
const obj = {}
console.log(obj.y) // This will also give output undefined as it can be defined.


//IF A KEY HAS A REFERANCE THEN IT WILL GIVE US UNDEFINED//

// if we run this content in node js as there is no window obj it will give
// error for lines containing window.something.
// but it will work as in browser for other lines

//LEXICAL CONTENT//
function a(){
    var b = 10;
    c();
    function c(){
        console.log(b);
    }
    
}

console.log(b) // js will try to find b in globle environment if not found 
//give referance error
a();
/*
lexical scope is a scope of that function and it's parant's scope.
lexical environment is created when execution context is created.
*/

// SCOPE CHAIN //
/*

Scope chain is a chain of lexical envirnment to find variables or functions
*/
