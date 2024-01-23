let a = 10;
const obj = {
    a: 10,
    x: function () {
        const y = () => {
            console.log(this);
        }
        y();
    }
}

obj.x();
console.log(this);
//As the arrow function is enclose inside the another function which is inside
//a object, so arrow function will point to lexical environment of its parent function
//where it is printed.

//arrow function does not provide their own "this" binding, it retains the value of "this"
//from its lexical context or lexical environment.