const student1 = {
    name: "Vivek",
    printName: function () {
        //If you want to use this method inside another object.
        //You will have to override "this" keyword in that object.
        console.log(this.name);
    }
}

const stundent2 = {
    name: "Some other student",
}

//Here, value of this = student2.
//Then, printName function will use value of "this" which has reference to student2 object.
student1.printName.call(stundent2);