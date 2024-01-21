//This area is global space.
//"this" keyword in global space represents the "globalObject".
//Javascript runs almost everydevice, all those devices must have Javascript
//Runtime Environment to run javascript code.

//Inside browser we have such Javascript Runtime Environment called "V8 Engine" in
//chrome browser. In for other devices, this Runtime is different.
//This is why, "this" keyword in different devices represents different global object
//with different name, but it will represent the global object in global space.

//In case of browsers this global object is called "window".
console.log(this);

function x(){
    //This area is not a global space.
}