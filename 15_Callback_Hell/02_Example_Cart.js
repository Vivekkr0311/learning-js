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