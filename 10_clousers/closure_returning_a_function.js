function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    return y;
}

var z = x();
console.log(z);

//'z' stores entire function which is being returned.

//As soon as this program runs line number '9', function 'x' is removed from
//the call stack, hence variable 'a' is also removed from the call stack.
//And as 'z' stores the function 'y' which was returned, then how does
//'y' access 'a' if it is removed from the call stack.
//The answer is 'Closure'.

//Because of the 'Closure' it can still access 'a'. 'z' knows the function 'y'
//and its lexical environment.

//Lets call 'z' now like a function, it will output '7'.
z();