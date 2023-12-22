console.log(getName);

//Only in this case entire copy of the function body is being copy 
//in the first to a variable 'getName'.
//this is why javascript knows 'getName' is a function and has function body.

//In the case of arrow function this does not happen, as arrow function are stored in a variable.
//and variable in javascript during first phase has value assinged 'undefined'.
function getName(){
    console.log("Vivek");
}