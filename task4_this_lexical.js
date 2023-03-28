// var a = 2;

// var c = 2;



// function b(){

// var x = 2;

// var c = 4

// console.log(c)

// }



// console.log(a);

// console.log(this.a);

// console.log(this.c)

// console.log(this.x)

// console.log(window.a)

// console.log(window.x)

// console.log(b());
//LEXICAL CONTENT//
function a(){
    var b = 10;
    c();
    function c(){
        console.log(b);
    }
    
}


a();
/*
lexical scope is a scope of that function and it's parant's scope
*/