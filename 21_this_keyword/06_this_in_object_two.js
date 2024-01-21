//If you make function as part of the object, it is called a "method".

//this is a object called "obj".
const obj = {
    a: 10,
    x: function () {
        //this function is method now, because it is inside a object.
        console.log(this);
        console.log(this.a); //This will print value of 'a'.
    }
}

//Value of "this" will be the object.
//You will see entire object, where "this" is tried to be printed.
//Like this: { a: 10, x: [Function: x] }
obj.x();