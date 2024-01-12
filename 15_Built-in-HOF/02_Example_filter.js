const arr = [5, 1, 3, 2, 6];

// filter odd values

const oddValues = arr.map((x) => {
    if((x&1) != 0){
        return x;
    }else{
        return -1;
    }
});

const oddValuesT = arr.map((x) => ((x&1) != 0) ? x : -1 );

//Let's use "filter" function.
function odd(x){
    return x%2;
}
const oddValuesThird = arr.filter(odd);
const evenValues = arr.filter((x) => !(x%2) );

console.log(oddValues);
console.log(oddValuesT);
console.log(oddValuesThird);
console.log(evenValues);