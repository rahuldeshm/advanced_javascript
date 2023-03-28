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

//..ARRAY FUNCTION..//

// in above function we need to make another that to solve the problem of grtting
// another this inside function which is pointing towords the object of inside 
// function we tried to overcome that problem by using that but this problem will
// not occor if we use array function

var employee = function(name){
  this.name=name;
  var printname = () =>{
    console.log(this.name)
  }
  printname();
}
const rah =new employee("rahul")