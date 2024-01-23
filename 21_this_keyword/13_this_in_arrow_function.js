//arrow function does not have their own "this".
//arrow function takes value of "this" from thier lexical environment,
//where they are enclosed.
let a = 10;
const obj = {
    a: 10,
    x: () => {
        //this here will point to global lexical environment here.
        console.log(this);
    }
}

obj.x();
console.log(this);

//so, above two lines will print same lexical environment.
//In case of "v8" engine, you will see window object.