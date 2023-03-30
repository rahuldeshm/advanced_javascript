"use strict";
var student = function(name){
    const that =this;
    this.name = name;
    function printName() {
      console.log(that.name)
    }
    printName()
}
var yash = new student("yash")
// console.log(yash)
//..ARRAY FUNCTION..//

// in above function we need to make another that to solve the problem of grtting
// another this inside function which is pointing towords the object of inside 
// function we tried to overcome that problem by using that but this problem will
// not occor if we use array function

// in array function when we use {} this brackets then we need to return what we 
// want to return.
// but if we did't use {} this brackets we don't need to return as things after 
// fat arrow automatically get returned.

var employee = function(name){
  this.name=name;
  var printname = () =>{
    console.log(this.name)
  }
  printname();
}
const rah =new employee("rahul")
console.log(rah)