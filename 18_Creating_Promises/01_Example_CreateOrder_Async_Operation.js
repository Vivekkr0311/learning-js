const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); // orderID


//Consumer part.
promise.then(function(orderID){
    console.log(orderID);
   // proceedToPayment(orderID);
})
.catch(function(err){
    console.log(err.message);
});

//Producer part.
//Promises are created using Promise constructors.
//This constructor takes a function as a parameter, having two parameters
//resolve and reject.
//And this resolve and reject are functions which is given by the javascript to build promises.
//This is not something that we passed in, it is given by Javascript by design of Promise API.
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

function validateCart(cart){
    return true;
}