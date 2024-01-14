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
    });

function createOrder(cart){
    const pr = new Promise(
        function(resolve, reject){
            //Here, we will write a actual logic of creating order.
            //validating the cart.
            //Then, this will return orderID or error.

            if(!validateCart(cart)){
                const err = new Error("Cart is not valid");
                reject(err);
            }

            //Logic for create order.
            const orderID =  "12345"; // Dummy orderID, we could have some logic for getting order ID.
            if(orderID){
                resolve(orderID);
            }
        }
    ); // This is a Promise constructor.
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