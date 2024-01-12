var a = 10; //this variable will be created in global execution context
//this means, it will be inside global object 'window' (in browsers)
//we can access it using 'window.a'.

function b(){
    var x = 100;
}

//This below will throw error if run using node js.
// console.log(window.a); when we don't specify 'window' it assumes we are refering to global execution context.

//For node js you can have.
console.log(this.a);
 //or
 console.log(global.a);