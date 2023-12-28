function x(){
    var i = 1;
    setTimeout(
        function () {
            console.log(i);
        },
        3000
    );
    console.log("Namaste Javascript!");
}
x();

//In this example, 'Namaste Javascript' is printed first,
//then javascript waits for 3 secs, then prints 'i'.

//But Akshay said, Time, Tide and Javascripts wait for none. ;)