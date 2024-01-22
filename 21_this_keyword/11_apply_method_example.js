//The only difference between call() and apply() method is how you pass the arguments.

let student1 = {
    firstName: "student1",
    lastName: "student1LastName"
}

let student2 = {
    firstName: "student2",
    lastName: "student2LastName"
}

let printFullName = function (homeTown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + homeTown + " ," + state);
}

// apply(refernce_to_obj, list of params [param1, param2, ...])
printFullName.apply(student1, ["Dhanbad", "Jharkhand"]);
printFullName.apply(student2, ["Some town", "Some State"]);