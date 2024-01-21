//Here, we are writing code in strict mode.
"use strict";
console.log(this);

function x(){
    // If the value of "this" is undefined or null, this keyword will be replaced with
    // global object only in non-strict mode.

    //As we are running Javascript code in strict mode, here value of "this" keyword will be
    //undefined or null.
    console.log(this);
}

x();