//This is use case of callback functions.
//This is not good practice using global variable.
// let count = 0;
// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("clickMe").addEventListener("click", function(){
//         ++count;
//         alert("Button clicked! " + count);
//     });
// });

//So we will make a closure, inside which this we will put this global variable, and in this way
//we will make use of data hidding.

function attachEventListner(){
    let count = 0;
    document.addEventListener("DOMContentLoaded", function xyz() {
        document.getElementById("clickMe").addEventListener("click", function(){
            ++count;
            alert("Button clicked! " + count);
        });
    });
}
attachEventListner();

//Now the callback function "xyz" will form a Closure with the variable "count".
//And this call function kind of remembers where this "count" is present.

//Every event has handle with it, in this case we have this callback function as a event handler.
//And this event handler (our call function "xyz"), have the scope chain, it has closure.
//It knows lexical environment of its parent, and global.
