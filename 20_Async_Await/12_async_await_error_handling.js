const API_URL = "https://hdiufa.com";

async function handlePromise(){
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
}

//Some people handle error caused by fetch like this.
handlePromise().catch((err) => console.log(err));