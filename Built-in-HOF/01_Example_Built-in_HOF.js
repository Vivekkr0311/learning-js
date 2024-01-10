const arr = [5, 1, 3, 2, 6];

const double = arr.map(function (num) {  return num*2; });
console.log(double);

function triple(x){
    return x*3;
}
const tripl = arr.map(triple);
console.log(tripl);

function binary(x){
    return x.toString(2);
}

const binarY = arr.map(binary);
console.log(binarY);