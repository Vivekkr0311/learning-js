var b = function xyz(){
    console.log("b calling.")
}

//This is example of "named function expression"
b(); //This will run fine but if you call xyz(); it will give an error (ReferenceError).
// xyz();

//ReferenceError is thrown because this "xyz" is not created in the global scope. It is created in the
//local scope of the function.

var c = function abc(){
    console.log(abc);
}