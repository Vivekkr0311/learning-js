{
    let a = 10;
    const b = 1000;
    //let and const will be stored in different object, block.
    var c = 100000;
    //var will be stored in global execution context.

    //This is why, everyone says let and const are blocked scoped.

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(c);
console.log(a); //Error will be thrown from this line.
console.log(b);