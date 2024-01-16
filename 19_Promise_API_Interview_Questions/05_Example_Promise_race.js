const p1 = new Promise((resolve, reject) => {
    //This is mimicing an API call, which will give success message after 3 secs.
    setTimeout(() => resolve("P1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    //This is mimicing an API call, which will give success message after 2 secs.
    setTimeout(() => resolve("P2 success"), 2000);
});

const p3 = new Promise((resolve, reject) => {
    //This is mimicing an API call, which will be rejected after 1 secs.
    setTimeout(() => reject("P3 fail"), 1000);
});


//p1, p2, and p3 are promises, these can be API calls also.
//Promise.race() will give result as soon as any of the promise gets
//settled (success or fail).
Promise.race([p1, p2, p3])
    .then(res => {
        console.log(res);
    }).catch((err) => {
        console.error(err);
    });