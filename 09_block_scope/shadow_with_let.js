let a = 10; //This is having different scope, script scope. (not in global scope)
{
    //This will shadow the 'a=10'.
    let a = 1000; //This is having diffent scope than script scope.
    console.log(a);
}


console.log(a);