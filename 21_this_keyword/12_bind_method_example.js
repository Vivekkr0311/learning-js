//bind() returns a function.

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

// bind(refernce_to_obj, param1, param2, ... )
let newFunctionOne = printFullName.bind(student1, "Dhanbad", "Jharkhand");
let newFunctionTwo = printFullName.bind(student2, "Some town", "Some State");

newFunctionOne();
newFunctionTwo();