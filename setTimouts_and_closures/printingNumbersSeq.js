function x(){
    for(var i = 1; i <= 5; i++){
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    }
}

x();

//Output: 
// 6 after 1 sec
// 6 after 2 sec
// 6 after 3 sec
// 6 after 4 sec
// 6 after 5 sec

//Buy why ?? this not the expected output.
//answer: This is working in this way because of the 'Closure'.
// javascript each time the loop runs it puts the function which is inside
// 'setTimeout' in different location with the time wait associated with it.
// When javascript stores these functions call in different location, these functions
// takes it 'Closure' with it in that location.

//By the time javascript tries to take those functions from different location to call stack
//our for loop is over, and value of 'i' becomes 6.

//And as 'Closure' of any function does not have actual value of 'i' instead it has
//reference to the value, so the functions which has been put again in the call stack
//has the reference to the value, not the actual value, so because of this refence now stores '6'
//javascript pring '6' each time.

//And each time javascripts takes back those function into the call stack one by one
//by specified timeouts.