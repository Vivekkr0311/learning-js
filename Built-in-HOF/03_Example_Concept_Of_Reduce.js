const arr = [5, 1, 3, 2, 6];

// sum or max

function findSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

console.log(findSum(arr));