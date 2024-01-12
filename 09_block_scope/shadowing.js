var a = 10;
{
    var a = 1000;
    //This will shadow the 'a = 10'.
    console.log(a);
}

//You will see 'a' is modified with value '1000'.

console.log(a);