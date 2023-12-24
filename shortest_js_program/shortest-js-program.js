//Shortest js program is an empty file.
//For a empty js program as well js engine will create global
//execution context.

//And a window object will be created in this GBC, and one variable
//'this' will be created which will point to this 'window' object.

//There various type of js engine, for chrome there 'v8' engine,
//it's a job of engine to create this global object.
//Different engine create different global object.
//We have different js engine because js is used for various purpose
//for frontend, for backend and for lot more other things.
//this is why, we have different js engine for different purposes.

//and 'this' is equal to 'global' object.
//for 'v8' engine, we have
//this === window -> true