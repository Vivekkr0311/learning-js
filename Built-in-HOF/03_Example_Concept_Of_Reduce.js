const arr = [5, 1, 3, 2, 6];

// sum

function findSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

console.log(findSum(arr));

const sum = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
}, 0);
console.log(sum);
//reduce takes two parametes.
// 1. first one is a callback function with two parametes, accumulator and current.
//    accumulator: this parameter is the refernce to the value accumulated, actually our final result.
//    current: this is the reference to each value for our array.
// 2. second parameter is the initial value for our accumalator.