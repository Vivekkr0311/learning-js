const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
    .then(function (orderID){
        console.log(orderID);
        return orderID;
    })
    .then(function (orderID){
        return proceedToPayment(orderID);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
    })
    .catch(function (err){
        //This will catch any error occured in this Promise chain.
        console.log(err.message)
    })
    .then(function(){
        console.log("Not matter what happens, error comes or not, this will execute.")
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