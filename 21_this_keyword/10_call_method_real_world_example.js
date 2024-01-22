let name = {
    firstName: "Vivek",
    lastName: "Kumar"
    
}
let printFullName = function (homeTown) {
    console.log(this.firstName + " " + this.lastName + " from " + homeTown);
}
// call(reference_to_object, <param1>, <param2>, ...);
printFullName.call(name, "Dhanbad");

let name2 = {
    firstName: "Abc",
    lastName: "Xyz"
}

printFullName.call(name2, "Example");