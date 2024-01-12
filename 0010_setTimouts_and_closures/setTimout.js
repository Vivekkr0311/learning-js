function x(){
    var i = 1;
    setTimeout(
        function () {
            console.log(i);
        }, 3000);
}
x();

//In this example, javascript waits for 3 sec then prints
//'i'.