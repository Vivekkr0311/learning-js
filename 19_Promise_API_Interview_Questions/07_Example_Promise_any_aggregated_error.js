const p1 = new Promise((resolve, reject) => {
    //This is mimicing an API call, which will be rejected after 3 secs.
    setTimeout(() => reject("P1 Fail"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    //This is mimicing an API call, which will be rejected after 2 secs.
    setTimeout(() => reject("P2 Fail"), 2000);
});

const p3 = new Promise((resolve, reject) => {
    //This is mimicing an API call, which will be rejected after 1 secs.
    setTimeout(() => reject("P3 fail"), 1000);
});


//p1, p2, and p3 are promises, these can be API calls also.
//Promise.any() will give result as soon as any of the promise gets
//success.
//If all the promises gets fail, Promise.any() will give an aggregated error.
Promise.any([p1, p2, p3])
    .then(res => {
        console.log(res);
    }).catch((err) => {
        console.error(err);
    });