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

const calculate = function (radius, logic){
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumeference));
console.log(calculate(radius, diameter));