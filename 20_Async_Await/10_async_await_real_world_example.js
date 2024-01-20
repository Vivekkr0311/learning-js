const API_URL = "https://api.github.com/users/vivekkr0311";

async function handlePromise(){
    //fetch() returns a object of Response.
    //fetch() is basically a Promise, which returns a Response object, which is a readable stream.
    //To convert that readable steam into JSON you have to use "Response.json()".
    //fetch() => Response.json() this give another promise.
    const data = await fetch(API_URL);

    const jsonValue = await data.json();
    console.log(jsonValue);
}

handlePromise();