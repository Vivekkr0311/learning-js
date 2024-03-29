//We will use browser API "fetch()" to see how promises work.
//This "fetch()" will return a "promise".

const GITHUB_API = "https://api.github.com/users/akshaymarch7";

const user = fetch(GITHUB_API);
//We are capturing a "promise" in this variable "user". As soon as this line is executed
//we will get a "promise" object in our user variable.

//The user will store something like this
//   user: Promise
//        Prototype: Promise
//        PromiseState: "pending"
//        PromiseResult: undefined

//PromiseResult will store whatever the data will be returned.
//PromiseState tells in which state the promise is. Initially
//"pending" will be PromiseState, and once we get the data back.
//The PromiseState will be "fullfilled" state.
//The PromiseState can be "Rejected" also.
//So, basically, a promise object has three state.
// 1. Pending
// 2. Fullfilled.
// 3. Rejected.

console.log(user);

//Now, let's attach a callback with the promise.
user.then(function(data){ //user data will be captured here in the function parameter "data".
    console.log(data);
});