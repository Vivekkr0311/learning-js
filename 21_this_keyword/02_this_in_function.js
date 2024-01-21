//Here, we are writing code in non-strict mode.
console.log(this);

function x(){
    //Here, value of "this" depends on strict and non-strict mode.
    //If the value of "this" is undefined or null, this keyword will be replaced with
    //global object only in non-strict mode.
    //So, it will print "global object".
    console.log(this);
}

x();