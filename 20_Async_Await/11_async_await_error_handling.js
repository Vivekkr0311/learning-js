const API_URL = "https://hdiufa.com";

async function handlePromise(){
    try{
        const data = await fetch(API_URL);
        const jsonValue = await data.json();
        console.log(jsonValue);
    } catch(err) {
        console.error(err);
    }
}

handlePromise();