console.log("Start");

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn")
    .addEventListener("click", function cb(){
        console.log("Callback");
    });
});

console.log("End");