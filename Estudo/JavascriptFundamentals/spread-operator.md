const arr1 = ["a", "b"];

const arr2 = arr1;
const arr3 = [...arr1];

arr1.push("c");

console.log(arr1);
console.log(arr2);
console.log(arr3);