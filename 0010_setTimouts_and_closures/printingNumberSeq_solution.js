function x(){
    for(let i = 1; i <= 5; i++){
        setTimeout( function () {
            console.log(i)
           }, i * 1000
        );
    }
}
x();

//'let' has block scope.
//Each time this loop runs, there is new variable 'i'.
//It is new copy of 'i' all together.

//So at last 5 copies of 'i' is created each having a value 1, 2, 3, 4, and 5.
//And in each call, setTimeout puts the function in separate location with new 'i (1, 2, 3, 4 and 5) * 1000', and function will
//take new copy of 'i' in its 'Closure'.

//So each function closure points to different reference to the new value of 'i'.

//It is working with 'let' is just because 'let' is blocked scoped,
//for loop creates new copy of 'i' each time.