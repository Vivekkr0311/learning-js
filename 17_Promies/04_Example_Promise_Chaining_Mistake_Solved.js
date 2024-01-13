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