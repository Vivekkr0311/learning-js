function z(){
    function x(){
        var a = 7;

        function y(){
            console.log(a);
            //this scope will have, lexical environment of z() and x(),
            //this we say, it will have clouser of z() as well as clouser of x().
        }

        y();
    }
    x();
}
z();