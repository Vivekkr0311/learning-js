"use strict";

function x(){
    console.log(this);
}

x();
//window.x(); in case of "v8" Engine.

//If the x() is called without reference then the value of "this" is undefined.
//If you call using reference like window.x() then the value of "this" is calling object
//that is window (global object).

//These all happens in strict mode.
//In case of, non-strict mode, "this substitution" will happen.