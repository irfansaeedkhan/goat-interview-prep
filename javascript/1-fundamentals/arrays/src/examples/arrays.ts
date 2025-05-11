// src/examples/arrays.ts

// Basic Declarations
let numbers: number[] = [1, 2, 3, 4, 5];
console.log('Initial:', numbers);

// Mutator Methods
numbers.push(6);
console.log('After push:', numbers);
numbers.pop();
console.log('After pop:', numbers);

// Accessor Methods
console.log('Slice:', numbers.slice(1, 4));

// Iteration & Transformation
console.log('Squares:', numbers.map(n => n * n));

// Search
console.log('Includes 4?', numbers.includes(4));

// Flatten
const nested = [1, [2, [3, 4]], 5];
console.log('Flat(2):', nested.flat(2));
