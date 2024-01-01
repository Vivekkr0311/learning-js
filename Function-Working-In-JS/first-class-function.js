//The ability to use function as value, is called "First class function".
// - functions can be passed as arguments in another function.
// - functions can returned by a function as value.
// - functions can be stored in a variable as value.
// This ability is known as "First class functions".

//Sometimes it is called "functions are first class citizens".

function a(){
    console.log("a normal function.")
}

function b(param){
    console.log(param);
    return function () {
        console.log("Function returned.")
    }
}

var z = b(a);
z();