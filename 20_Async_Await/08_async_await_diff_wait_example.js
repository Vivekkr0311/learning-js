const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved from 1");
    }, 10000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise reolved from 2")
    }, 5000);
});

async function handlePromise(){
    //This line will be executed immediately.
    console.log("Hello World!");

    //JS Engine will wait for Promise to be resolved. (It does not actually wait, it appears to be waiting)
    //Program will wait here.
    const val = await p1;
    console.log("Namaste Javascript 1");
    console.log(val);

    //Calling second time.
    //This will be printed after 5 secs.
    //Here, it will again suspend this function ("handlePromise") from the callstack.
    //But by the time Javascript starts executing below call, it sees it is already being resolved
    //so output is printed immediately.
    const val2 = await p2;
    console.log("Namaste Javascript 2");
    console.log(val2);
}
handlePromise();