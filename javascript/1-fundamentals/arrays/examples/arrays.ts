console.log("this is working 3");

// // examples/arrays.ts

// // 1. Basic Declarations
// let numbers: number[] = [1, 2, 3, 4, 5];
// let fruits: string[] = ["apple", "banana", "cherry"];
// let mixed: Array<number | string> = [1, "apple", 2, "banana"];

// // 2. Mutator Methods (in-place)
// // These change the original array
// numbers.push(6); // [1,2,3,4,5,6]
// numbers.pop(); // [1,2,3,4,5]
// numbers.unshift(0); // [0,1,2,3,4,5]
// numbers.shift(); // [1,2,3,4,5]
// const removed = numbers.splice(2, 1, 99); // numbers = [1,2,99,4,5], removed = [3]
// numbers.reverse(); // [5,4,99,2,1]
// numbers.sort((a, b) => a - b); // [1,2,4,5,99]

// // 3. Accessor Methods (non-mutating)
// // These return a new array/value without altering the original
// const slicePart = numbers.slice(1, 3); // [2,4]
// const concatenated = numbers.concat([6, 7]); // [1,2,4,5,99,6,7]
// const joined = fruits.join(" | "); // "apple | banana | cherry"

// // 4. Iteration & Transformation
// numbers.forEach((n) => console.log(n)); // logs each number
// const squares = numbers.map((n) => n * n); // [1,4,16,25,9801]
// const evens = numbers.filter((n) => n % 2 === 0); // [2,4]
// const sum = numbers.reduce((acc, n) => acc + n, 0); // sum of all elements

// // 5. Search & Test
// const has99 = numbers.includes(99); // true
// const idx = numbers.findIndex((n) => n > 50); // index of first >50
// const firstBig = numbers.find((n) => n > 50); // 99

// // 6. Flatten & FlatMap
// const nested = [1, [2, [3, 4]], 5];
// const flat1 = nested.flat(1); // [1,2,[3,4],5]
// const flat2 = nested.flat(2); // [1,2,3,4,5]
// const flatMapped = nested.flatMap((x) => (Array.isArray(x) ? x : [x])); // [1,2,[3,4],5]

// // 7. Creating & Copying
// const copy1 = [...numbers]; // shallow copy
// const copy2 = Array.from(numbers); // shallow copy
// const filled = Array(3).fill(0); // [0,0,0]
// const sequence = Array.from({ length: 5 }, (_, i) => i + 1); // [1,2,3,4,5]

// // 8. Sparse Arrays
// const holes = new Array(3); // [ <3 empty items> ]
// holes.forEach((_, i) => console.log(i)); // nothing logs
// const filledHoles = holes.fill("a"); // ['a','a','a']

// // 9. Array-Like Objects
// function exampleArgs(...args: number[]) {
//   const arr = Array.from(arguments); // convert arguments object
//   console.log(arr);
// }
// exampleArgs(10, 20, 30);

// // Example for arrays

// // 1. Declare an array of numbers
// let numbers: number[] = [1, 2, 3, 4, 5];
// // 2. Declare an array of strings
// let fruits: string[] = ['apple', 'banana', 'cherry'];
// // 3. Declare an array of mixed types
// let mixed: (number | string)[] = [1, 'apple', 2, 'banana'];
// // 4. Declare an array of objects
// let users: { name: string; age: number }[] = [
//   { name: 'John', age: 30 },
//   { name: 'Jane', age: 25 },
//   { name: 'Doe', age: 35 },
// ];
// // 5. Declare an array of arrays
// let matrix: number[][] = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// // 6. Declare an array of tuples
// let tuple: [number, string][] = [
//   [1, 'apple'],
//   [2, 'banana'],
//   [3, 'cherry'],
// ];
// // 7. Declare an array of booleans
// let flags: boolean[] = [true, false, true, false];
// // 8. Declare an array of any type
// let anyArray: any[] = [1, 'apple', true, { name: 'John' }, [1, 2, 3]];
// // 9. Declare an array of null and undefined
// let nullUndefinedArray: (null | undefined)[] = [null, undefined, null, undefined];
// // 10. Declare an array of symbols
// let symbols: symbol[] = [Symbol('a'), Symbol('b'), Symbol('c')];
// // 11. Declare an array of functions
// let functions: (() => void)[] = [
//   () => console.log('Function 1'),
//   () => console.log('Function 2'),
//   () => console.log('Function 3'),
// ];
// // 12. Declare an array of promises
// let promises: Promise<number>[] = [
//   new Promise((resolve) => resolve(1)),
//   new Promise((resolve) => resolve(2)),
//   new Promise((resolve) => resolve(3)),
// ];
// // 13. Declare an array of dates
// let dates: Date[] = [
//   new Date('2023-01-01'),
//   new Date('2023-02-01'),
//   new Date('2023-03-01'),
// ];
// // 14. Declare an array of regular expressions
// let regexes: RegExp[] = [
//   /abc/,
//   /def/,
//   /ghi/,
//   /jkl/,
//   /mno/
// ];
// // 15. Declare an array of buffers
// let buffers: Buffer[] = [
//   Buffer.from('Hello'),
//   Buffer.from('World'),
//     Buffer.from('!'),
//     Buffer.from('How'),
//     Buffer.from('are'),
//     Buffer.from('you')
// ];
// // 16. Declare an array of iterators
// let iterators: Iterator<number>[] = [
//   (function* () {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
//   )(),
//     (function* () {
//         yield 4;
//         yield 5;
//         yield 6;
//     }
//     )(),
//     (function* () {
//         yield 7;
//         yield 8;
//         yield 9;
//     }
//     )()
// ];
// // 17. Declare an array of generators
// let generators: Generator<number>[] = [
//   (function* () {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
//   )(),
//     (function* () {
//         yield 4;
//         yield 5;
//         yield 6;
//     }
//     )(),
//     (function* () {
//         yield 7;
//         yield 8;
//         yield 9;
//     }
//     )()
// ];
// // 18. Declare an array of async functions
// let asyncFunctions: (() => Promise<void>)[] = [
//   async () => console.log('Async Function 1'),
//   async () => console.log('Async Function 2'),
//   async () => console.log('Async Function 3'),
// ];
// // 19. Declare an array of async iterators
// let asyncIterators: AsyncIterator<number>[] = [
//   (async function* () {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
//   )(),
//     (async function* () {
//         yield 4;
//         yield 5;
//         yield 6;
//     }
//     )(),
// ]

// //  generate a random number between 1 and 100
// function getRandomNumber() {
//   return Math.floor(Math.random() * 100) + 1;
// }
// // 20. Declare an array of random numbers
// let randomNumbers: number[] = Array.from({ length: 10 }, getRandomNumber);
// // 21. Declare an array of random strings
// let randomStrings: string[] = Array.from({ length: 10 }, () => Math.random().toString(36).substring(2, 7));
// // 22. Declare an array of random booleans
// let randomBooleans: boolean[] = Array.from({ length: 10 }, () => Math.random() < 0.5);
// // 23. Declare an array of random objects
// let randomObjects: { name: string; age: number }[] = Array.from({ length: 10 }, () => ({
//   name: Math.random().toString(36).substring(2, 7),
//   age: Math.floor(Math.random() * 100) + 1,
// }));
// // 24. Declare an array of random dates
// let randomDates: Date[] = Array.from({ length: 10 }, () => new Date(Date.now() + Math.random() * 10000000000));
// // 25. Declare an array of random promises
// let randomPromises: Promise<number>[] = Array.from({ length: 10 }, () => new Promise((resolve) => resolve(Math.floor(Math.random() * 100) + 1)));
// // 26. Declare an array of random symbols
// let randomSymbols: symbol[] = Array.from({ length: 10 }, () => Symbol(Math.random().toString(36).substring(2, 7)));
// // 27. Declare an array of random buffers
// let randomBuffers: Buffer[] = Array.from({ length: 10 }, () => Buffer.from(Math.random().toString(36).substring(2, 7)));
// // 28. Declare an array of random iterators
// let randomIterators: Iterator<number>[] = Array.from({ length: 10 }, () => (function* () {
//   yield Math.floor(Math.random() * 100) + 1;
// }
// )());

// // generate all the functions of arrays like sum some filter all of them
// function sum(arr: number[]): number {
//   return arr.reduce((acc, curr) => acc + curr, 0);
// }
// function some(arr: number[], predicate: (value: number) => boolean): boolean {
//     return arr.some(predicate);
//     }
// function filter(arr: number[], predicate: (value: number) => boolean): number[] {
//     return arr.filter(predicate);
//     }
// function all(arr: number[], predicate: (value: number) => boolean): boolean {
//     return arr.every(predicate);
//     }
// function map(arr: number[], callback: (value: number) => number): number[] {
//     return arr.map(callback);
//     }
// function forEach(arr: number[], callback: (value: number) => void): void {
//     arr.forEach(callback);
//     }
// function find(arr: number[], predicate: (value: number) => boolean): number | undefined {
//     return arr.find(predicate);
//     }
// function findIndex(arr: number[], predicate: (value: number) => boolean): number {
//     return arr.findIndex(predicate);
//     }
// function reduce(arr: number[], callback: (acc: number, curr: number) => number, initialValue: number): number {
//     return arr.reduce(callback, initialValue);
//     }
// function includes(arr: number[], value: number): boolean {
//     return arr.includes(value);
//     }
// function indexOf(arr: number[], value: number): number {
//     return arr.indexOf(value);
//     }
// function lastIndexOf(arr: number[], value: number): number {
//     return arr.lastIndexOf(value);
//     }
// function join(arr: number[], separator: string): string {
//     return arr.join(separator);
//     }
// function slice(arr: number[], start: number, end: number): number[] {
//     return arr.slice(start, end);
//     }
// function splice(arr: number[], start: number, deleteCount: number, ...items: number[]): number[] {
//     return arr.splice(start, deleteCount, ...items);
//     }
// function concat(arr1: number[], arr2: number[]): number[] {
//     return arr1.concat(arr2);
//     }
// function push(arr: number[], ...items: number[]): number {
//     return arr.push(...items);
//     }
// function pop(arr: number[]): number | undefined {
//     return arr.pop();
//     }
// function shift(arr: number[]): number | undefined {
//     return arr.shift();
//     }
// function unshift(arr: number[], ...items: number[]): number {
//     return arr.unshift(...items);
//     }
// function reverse(arr: number[]): number[] {
//     return arr.reverse();
//     }
// function sort(arr: number[], compareFn?: (a: number, b: number) => number): number[] {
//     return arr.sort(compareFn);
//     }
// function fill(arr: number[], value: number, start?: number, end?: number): number[] {
//     return arr.fill(value, start, end);
//     }
// function copyWithin(arr: number[], target: number, start: number, end?: number): number[] {
//     return arr.copyWithin(target, start, end);
//     }
// function flat(arr: any[], depth?: number): any[] {
//     return arr.flat(depth);
//     }
// function flatMap(arr: any[], callback: (value: any) => any, thisArg?: any): any[] {
//     return arr.flatMap(callback, thisArg);
//     }
// function entries(arr: any[]): [number, any][] {
//     return arr.entries();
//     }
// function keys(arr: any[]): number[] {
//     return arr.keys();
//     }
// function values(arr: any[]): any[] {
//     return arr.values();
//     }
// function from(arr: any[]): any[] {
//     return Array.from(arr);
//     }
// function of(...items: any[]): any[] {
//     return Array.of(...items);
//     }
// function isArray(arr: any): boolean {
//     return Array.isArray(arr);
//     }
// function isArrayBuffer(arr: any): boolean {
//     return ArrayBuffer.isView(arr);
//     }
// function isArrayBufferView(arr: any): boolean {
//     return ArrayBuffer.isView(arr);
//     }
// function isTypedArray(arr: any): boolean {
//     return ArrayBuffer.isView(arr);
//     }
// function isFloat32Array(arr: any): boolean {
//     return arr instanceof Float32Array;
//     }
// function isFloat64Array(arr: any): boolean {
//     return arr instanceof Float64Array;
//     }
// function isInt8Array(arr: any): boolean {
//     return arr instanceof Int8Array;
//     }
// function isInt16Array(arr: any): boolean {
//     return arr instanceof Int16Array;
//     }
// function isInt32Array(arr: any): boolean {
//     return arr instanceof Int32Array;
//     }
// function isUint8Array(arr: any): boolean {
//     return arr instanceof Uint8Array;
//     }
// function isUint16Array(arr: any): boolean {
//     return arr instanceof Uint16Array;
//     }
// function isUint32Array(arr: any): boolean {
//     return arr instanceof Uint32Array;
//     }
// function isUint8ClampedArray(arr: any): boolean {
//     return arr instanceof Uint8ClampedArray;
//     }
// function isBigInt64Array(arr: any): boolean {
//     return arr instanceof BigInt64Array;
//     }
