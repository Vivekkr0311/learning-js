var x = 1;
//We can invoke the functions before defining just because of something called
// as 'Hoisting' in javascript.
a();
b();

function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}