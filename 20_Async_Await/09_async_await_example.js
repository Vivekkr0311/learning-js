const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved from 1");
    }, 5000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise reolved from 2")
    }, 10000);
});
//We reversed the wait for above code. Now, p1 will get resolved first.

async function handlePromise(){
    //This line will be executed immediately.
    console.log("Hello World!");

    //JS Engine will wait for Promise to be resolved. (It does not actually wait, it appears to be waiting)
    //Program will wait here.
    //This will be printed after 5 secs.
    //And after executing below this function "handlePromise" will be suspended from the call stack.
    //so that other things can be executed, as javascript is a synchronous single threaded programming languaage.
    //And once this is below is resolved then it will move ahead.
    const val = await p1;
    console.log("Namaste Javascript 1");
    console.log(val);

    //Calling second time.
    //This will be printed after 10 secs.
    const val2 = await p2;
    console.log("Namaste Javascript 2");
    console.log(val2);
}

handlePromise();