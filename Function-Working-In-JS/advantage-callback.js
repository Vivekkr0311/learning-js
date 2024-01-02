//setTimeout() takes first parameter a "callback function", this function is passed into the
//callback function and called sometime later in the program, this time is second paramet into the
//setTimeout() function.

setTimeout(function (){
    console.log("timer");
}, 5000);

function x(y){
    console.log("x");
    y();
}

x(function y(){
    console.log("y")
});

//As javascript is a synchronous single threaded language, code will be executed in one line at
//a time in order.
//So first,
// 1. Javascript will not wait for 5 secs here, it will
//    execute the next line of code.
//    setTimeout will take the function and put it somewhere else, and will wait for 5000 milisec (5 seconds)
//    then it will take it back, and it will execute this function. 

//    This is we say, setTimeout gives us power of "Asynchoronity" in javascript.

// 2. This asynchoronous behaviour would not have possible without these "Callbacks".