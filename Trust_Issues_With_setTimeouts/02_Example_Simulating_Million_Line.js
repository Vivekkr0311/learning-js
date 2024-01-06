console.log("Start");

setTimeout(function cb(){
    console.log("Callback")
}, 5000);

console.log("End");

//Million lines of code taking 10 seconds to run.
let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000){
    endDate = new Date().getTime();
}

console.log("While expires");