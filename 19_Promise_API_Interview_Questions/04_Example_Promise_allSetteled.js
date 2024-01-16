const p1 = new Promise((resolve, reject) => {
    //This is mimicing an API call, which will give success message after 3 secs.
    setTimeout(() => resolve("P1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    //This is mimicing an API call, which will give success message after 1 sec.
    setTimeout(() => resolve("P2 success"), 1000);
});

const p3 = new Promise((resolve, reject) => {
    //This is mimicing an API call, which will be rejected after 2 secs.
    setTimeout(() => reject("P3 fail"), 2000);
});


//p1, p2, and p3 are promises, these can be API calls also.
//Promise.allSettled() will wait for all the promise to get setteled, then
//it will give the result of respective promises.
//Promise.allSettled() give array of objects.
//Promise.allSettled() is the safest.
Promise.allSettled([p1, p2, p3])
    .then(res => {
        console.log(res);
    }).catch((err) => {
        console.error(err);
    });