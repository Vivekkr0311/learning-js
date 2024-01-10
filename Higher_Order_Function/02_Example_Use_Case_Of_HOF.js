//Naive way of calculating area of a circle using the list of radius.

const radius = [3, 1, 2, 4]

const calculateArea = function (radius){
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
};
console.log(calculateArea(radius));

//Circumeference
const circumeference = function (radius){
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(2 *Math.PI * radius[i]);
    }
    return output;
};
console.log(circumeference(radius));

//Diameter
const diameter = function (radius){
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
};
console.log(diameter(radius));

//There is something called as DRY in software development.
//Don't Repeat Yourself.

//We have so many repitions in our code, so for sake of optimizing it we are gonna
//eliminate some redundant code.