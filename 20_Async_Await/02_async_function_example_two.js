const p = new Promise((resolve, reject) =>{
    resolve("Promise Resolved Value!!");
});

// here, return value is already a promise, so
// value will not be wrapped inside a promise.

// Value (which is already a promise) will be returned as it is.
async function getData(){
    return p;
}

const dataPromise = getData();

dataPromise.then((res) => console.log(res));