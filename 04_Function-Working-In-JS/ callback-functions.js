//You can take a function and pass it as a argument in another function,
//that passed function is called "Callback function".

//Javascript is a synchornous and single threaded languagem which means javascript can do one thing
//at a time in a specific order.

//But using callback function we can do async things in javascript.

function x(){

}

x(function y(){
    //This function "y" over here is called "Callback function".
})