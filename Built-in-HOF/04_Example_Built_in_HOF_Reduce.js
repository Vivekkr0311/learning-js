const arr = [5, 1, 3, 2, 6];

// max

function findMax(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(arr));

const max = arr.reduce(function(max, curr){
    return (curr > max) ? curr : max;
});
console.log(max);