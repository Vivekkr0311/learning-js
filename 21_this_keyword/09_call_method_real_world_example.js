let name = {
    firstName: "Vivek",
    lastName: "Kumar"
    
}
let printFullName = function () {
    console.log(this.firstName + " " + this.lastName);
}
printFullName.call(name);

let name2 = {
    firstName: "Abc",
    lastName: "Xyz"
}

printFullName.call(name2);