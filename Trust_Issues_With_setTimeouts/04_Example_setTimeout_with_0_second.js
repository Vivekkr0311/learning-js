console.log("Start");

function cb(){
    console.log("Callback");
}

setTimeout(cb, 0);

console.log("End");

//Here, cb will be executed later after sometime in the main thread.