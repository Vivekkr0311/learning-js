createOrder(cart)
    .then(function (orderID){
        return proceedToPayment(orderID);
    })
    .then(function (paymentInfo){
        return showOrderSummary(paymentInfo);
    })
    .then(function (paymentInfo){
        return updateWalletBalance(paymentInfo);
    });

//Some people prefer to write the above code using arrow function to make
//code look more lean.
createOrder(cart)
    .then(orderID => proceedToPayment(orderID))
    .then(paymentInfo => showOrderSummary(paymentInfo))
    .then(paymentInfo => updateWalletBalance(paymentInfo));