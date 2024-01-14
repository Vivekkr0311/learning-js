const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
    .then(function (orderID){
        console.log(orderID);
        return orderID;
    })
    .catch(function(){
        console.log("This catch is for only handling cart error.")
    })
    .then(function (orderID){
        return proceedToPayment(orderID);
    })
    .catch(function(){
        console.log("This catch is only for handling payment error.")
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
    })
    .catch(function (err){
        console.log(err.message)
    })
    .then(function(){
        console.log("Not matter what happens, error comes or not, this will execute.")
    })
    .catch(function(){
        console.log("This will be generic catch.")
    });

function createOrder(cart){
    const pr = new Promise(
        function(resolve, reject){
            if(!validateCart(cart)){
                const err = new Error("Cart is not valid");
                reject(err);
            }

            const orderID =  "12345";
            if(orderID){
                resolve(orderID);
            }
        }
    );
    return pr;
}

function proceedToPayment(orderID){
    return new Promise(function(resolve, reject){
        resolve("Payment Successful.");
    });
}
function validateCart(cart){
    return true;
}