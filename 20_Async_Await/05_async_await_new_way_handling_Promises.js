const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 10000);
});

async function handlePromise(){

    //JS Engine will wait for Promise to be resolved.
    //Program will wait here.
    const val = await p;

    //Once the promise is resolved then below code is executed.
    console.log("Namaste Javascript");
    console.log(val);
}
handlePromise();