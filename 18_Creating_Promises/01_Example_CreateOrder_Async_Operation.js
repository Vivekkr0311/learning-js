const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); // orderID


//Consumer part.
promise.then(function(){
    proceedToPayment(orderID);
});

//Producer part.
function createOrder(cart){
    const pr = new Promise(
        function(resolve, reject){
            
        }
    ); // This is a Promise constructor.
    return pr;
}