//..PUBLIC..//

this.table = 'window table ';//can directly create var table="something and gives same result"
var chair = 'public chair';
this.office = {
    table:'office table'
};
// can also access to it by saying office.table or window.office.table .
console.log(this.office.table);
console.log(this.chair);
console.log(this.table);

//..PRIVATE..//

let johnsRoom ={
    table : "johns table",
    cleanTable(){
        console.log(`Cleaning ${this.table}`);// this "this" is private this used for johnsRoom object
    }// use of this inside a private object refers to that private object.
}
// console.log(this.johnsRoom.table); // will not work 
johnsRoom.cleanTable();
console.log(johnsRoom.table); // this will work.

//..INSIDE THE FUNCTION..//

const cleanTable = function(){
    console.log(`Cleaning ${this.table}`)
}
cleanTable.call(office);// this inside the function acts as office.
cleanTable.call(this);// this inside the function acts as window.

//..INNER FUNCTION..//
/*
 we have three solutions to send object inside inner function 
    => one is using that = this outside function so when we use
    that in inner function that will point towards object 
    saved in lexical scope.
    => second is without using that , while calling inner function
    I will just use call/bind method to call funnction ans this will 
    send as argument/ Object.
    => Third is that we can use arrow function.as in array
    function this inside function points outside function.
*/
const washTable =function(soap){
    var that = this;  //one solution 
    const innerFunction = function(soap){
        
        console.log(`Washed ${that.table} With ${soap}`);
    }
    innerFunction(soap);
}
washTable.call(this, `some soap`)
washTable.call(this.office, `some soap`)
washTable.call(johnsRoom, `some soap`)

//..INSIDE A CONSTRUCTOR..//

let createRoom = function(name){   // constructor 
    this.table = `${name}s table`
}
// if we want we can add a method to this constructor like below.
createRoom.prototype.colorTable = function(color){
    console.log(`Colored ${this.table} with ${color} color`)
}
const jillsRoom = new createRoom("jill"); //can also create johns room by using this constructor.
jillsRoom.colorTable("yellow");

//..INSIDE A CLASS..//

class createAccount{
    constructor(balance){
        this.balance =`${balance} in account`
    }
    addBalance(add){
        console.log(`available balance is ${this.balance} and we are adding ${add} in your account`);
        this.balance= this.balance+add
    }
     
}
const rahul = new createAccount(500);

rahul.addBalance(60);