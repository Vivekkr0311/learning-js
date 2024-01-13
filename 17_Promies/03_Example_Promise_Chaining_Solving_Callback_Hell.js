const cart = ["shoes", "pants", "kurta"];

//Callback hell or Pyramid of Doom
createOrder(cart, function(orderID){
    proceedToPayment(orderID, function(paymentInfo){
        showOrderSummary(paymentInfo, function(){
            updateWalletBalance();
        });
    });
});

//Using promise chaining to solve Callback hell or Pyramid of Doom
createOrder(cart).then(function(orderID){
    proceedToPayment(orderID);
});