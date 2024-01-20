const p = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise is resolved.");
    }, 10000);
});


//This is a older way of resolving promises.
//Here, "Namaste Javasscript" is printed, then "Promise is resolved" is printed.
function getData(){

    //here, JS Engine will not wait for promise to be resolved.
    //and it will print the "Namaste Javascript" first.
    p.then((res) => {
        console.log(res);
    });
    console.log("Namaste Javascript.")
}

getData();