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

//Now this function "calculate" will be available for array that you will create.
Array.prototype.calculate = function (logic){
    const output = [];
    for(let i = 0; i < this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}

//Now we can call "calculate" in the same way as we can call "map".
// const = output = radius.map(area);
const areas = radius.calculate(area);
const circumeferenc = radius.calculate(circumeference);
const diamete = radius.calculate(diameter);

console.log("Area calculated: " + areas);
console.log("Circumference calculated: " + circumeferenc);
console.log("Diameter calculated: " + diamete);