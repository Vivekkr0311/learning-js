let a = 10;
console.log(globalThis);
var b = 100;

//'b' will be attached to global object, global execution context,
//in case of javascript v8 engine which is used for browsers,
//'b' will be attached to 'window' object.

//and 'a' will be attached to different scope. let and const
//variable are not attached to 'global' object.

//let is more strict than var
//and const is more strict than let