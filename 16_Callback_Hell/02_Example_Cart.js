const cart = ["shoes", "pants", "kurta"];

//0 -> Create order
//1 -> Payment
//Lets say we have access to two backend APIs for these.
//Once we create an order then only we can pay for this order.
//so, there is a depedency in our code, How can we handle this dependency ??
//This is a async operation.

// api.createOrder();

// api.proceedToPayment();

//so, we will wrap our these API calls in a callback function.

api.createOrder(cart, function(){
    api.proceedToPayment(
        function(){
            api.showOrderSummary(function(){
                api.updateWallet();
            });
        }
    );
});

//When we need to use this kind nested callback functions,
//this scenario is called "Callback Hell".
//When APIs are dependent with each other, we use this kind of nested callback.
//One callback is calling another callback, and that callback is also calling 
//another callback and so on, this thing is called "Callback Hell".
//Our code starts to grow horizontally instead of vertically. This stucuture
//is also known as "Pyramid of Doom" in programming.
//This type of code structure is very unreadable and unmaintainable.