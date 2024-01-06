console.log("Start");

setTimeout(function cb(){
    console.log("Callback");
}, 0);

console.log("End");

//It will still print Start first then End and then Callback.
//Because callback will still get into the callback queue then it will be executed.