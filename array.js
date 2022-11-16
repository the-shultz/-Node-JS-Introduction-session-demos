// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const bb = arr.filter((value, index) => value % index === 0);

// console.log(bb, arr);

// arr[98] = 0;

// console.log(arr);

// const [b, n, ...v] = arr;

// console.log(b, n, v);

// con

const a = () => console.log("i am a");
const b = () => console.log("i am b");
const c = () => console.log("i am c");
const d = () => console.log("i am d");

const functionArray = [a, b, c, d];
const anotherArray = [...functionArray];

functionArray.forEach((func) => func());

console.log(functionArray);
