// Assume these data came from an API.
const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 },
];

// We need to find the name of first person who has age more than 30.
const output = users.filter((x) => x.age < 30).map((x) => x.firstName);

console.log(output);