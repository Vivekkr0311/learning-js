const p1 = new Promise((resolve, reject) => {
    //This is mimicing an API call, which will give success message after 3 secs.
    setTimeout(() => resolve("P1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    //This is mimicing an API call, which will be rejected after 1 sec.
    setTimeout(() => reject("P2 Fail"), 1000);
});

const p3 = new Promise((resolve, reject) => {
    //This is mimicing an API call, which will give success message after 2 secs.
    setTimeout(() => resolve("P3 success"), 2000);
});


//p1, p2, and p3 are promises, these can be API calls also.
Promise.all([p1, p2, p3]).then(res => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});