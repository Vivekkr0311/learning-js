let name = {
    firstName: "Vivek",
    lastName: "Kumar",
    printFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}
name.printFullName();

//If we have another object like
let name2 = {
    firstName: "Abc",
    lastName: "Xyz",
    //This is not good way to use duplicate code.
    // printFullName: function () {
    //     console.log(this.firstName + " " + this.lastName);
    // }
}

// name2.printFullName();

//So, we will use call method, call method is used to for "function borrowing".
//call will borrow function from one object, will use it in other object.

//call() method will take an object to which it will point.
//In below line, printFullName method will be called for another object (name2) not for original object (name).
name.printFullName.call(name2);