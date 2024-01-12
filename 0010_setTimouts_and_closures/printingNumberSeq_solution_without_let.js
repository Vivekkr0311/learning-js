function x(){
    for(var i = 1; i <= 5; i++){
        function close(n){
            setTimeout(() => {
                console.log(n);
            }, n * 1000);
        }
        close(i);
    }
}

x();

//Now by using block scope, as we enclosed the code in new function 'close'
//each time loop runs a new copy of 'i' is passed in 'close'.