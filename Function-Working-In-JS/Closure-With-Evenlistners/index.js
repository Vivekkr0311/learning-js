//This is use case of callback functions.
//This is not good practice using global variable.
let count = 0;
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("clickMe").addEventListener("click", function(){
        ++count;
        alert("Button clicked! " + count);
    });
});