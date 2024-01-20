const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 10000);
});

async function handlePromise(){
    //This line will be executed immediately.
    console.log("Hello World!");

    //JS Engine will wait for Promise to be resolved.
    //Program will wait here.
    const val = await p;
    console.log("Namaste Javascript");
    console.log(val);

    //Calling second time.
    const val2 = await p;
    console.log("Namaste Javascript 2");
    console.log(val2);
}
handlePromise();