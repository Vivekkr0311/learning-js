function cb(){
    console.log("Callback");
}
setTimeout(cb, 5000);

//setTimeout not waits for exactly 5 seconds.
//setTimeout does not gurantee that callback will be executed
//after 5 seconds, it all depends on callstack.