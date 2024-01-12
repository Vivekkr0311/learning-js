const radius = [3, 1, 2, 4];

const area = function (r){
    return 2 *  Math.PI * r * r;
}

const circumeference = function (r){
    return 2 *  Math.PI * r;
}

const diameter = function (r){
    return 2 * r;
}

//This below function "calculate" is similar to javascript function called
//"map". "map" function maps whole array to some logic and it will return an array.
//"map" function is a example of higher order function.
const calculate = function (radius, logic){
    //This function has the similar logic what "map" function has internally but "map"
    //has some additional checks, but basic is similar.
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}

//Use case of "map" function.
const output = radius.map(area);
console.log("Using map " + output);

console.log("-----------------------")
console.log(calculate(radius, area));
console.log(calculate(radius, circumeference));
console.log(calculate(radius, diameter));