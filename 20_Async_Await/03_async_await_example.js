const p = new Promise((resolve, reject) => {
    resolve("Promise Resolved Value.");
});

async function handlePromise(){
    // await can only be use inside an async function.
    // we write await only before a Promise.
    const value = await p;
    console.log(value);
}

handlePromise();