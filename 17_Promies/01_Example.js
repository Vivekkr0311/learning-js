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