**`reduce()`**, 

The **`reduce()`** method applies a function to each array element and combines them into a single output.

**`reduce()`** accepts 2 parameters. A function, and an initial value. The function must take in a **`runningTotal`** and **`currentElement`** parameters. The **`runningTotal`** starts at **`initialValue`**. Inside the function, **`currentElement`** is used to update **`runningTotal`**.

In the example below: the initial value is 0. For each element in the array, the element **`number`** is added to **`total`**.

```jsx
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, number) => {
    return total + number;
}, 0);
console.log(sum); // prints total sum of numbers
```

Exercicio:

```jsx
var planets = [
    { name: 'Earth', mass: 5.97 },
    { name: 'Mars', mass: 0.642 },
    { name: 'Jupiter', mass: 1898 },
    { name: 'Neptune', mass: 102 },
];
var totalMass = planets.reduce((total, planets) => {
    return total + planets.mass;
},0);
console.log(totalMass); // It’s supposed to print a number (total mass), but it's printing an object
```