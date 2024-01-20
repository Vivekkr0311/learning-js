// always returns a promise.
// If you try to remove things other than promise,
// it will wrap that thing inside a proimse then
// it will return the promise.
async function getData(){
    return "Namaste";
}

console.log(getData())