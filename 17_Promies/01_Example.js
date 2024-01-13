const cart = ["shoes", "pants", "kurta"];

createOrder(cart); //returns orderID

const promise = createOrder(cart);
// A promise is nothing but an object which will contain data value with it.
// As soon as javascript executes this line "const promise = createOrder(cart);", we get
// something like below. A promise with empty object.
// like {data: undefined}
// then javascript proceeds with the code, and this empty object is filled later point of time.

//Whenever javascript will execute "const promise = createOrder(cart);" this "createOrder();" api will
//return a "promise". After sometime the empty object inside the "promise" will be filled automatically.
// like {data: <order_details>}

//After we get order details, we will attach a function with promise.

promise.then(function (orderID){
    proceedToPayment(orderID);
});

//When the promise gets filled with data then only this function is called.
//And this function is called only once.
//Promises give us gurantee to call this function when the object is filled by the data,
//using promises we don't loose control of our program, as we are not depending on other
//function to call this function, we don't wait, we just proceed with our code, and when
//the object is filled by actual data, we call this function which is attached with the
//promise.