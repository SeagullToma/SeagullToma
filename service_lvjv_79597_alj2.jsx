57 - 22,34,8,43,58,66,6,37,25,13,14,92,25,75,46,82,4,21,69,12,14,10,8,10,55,32,61,91,98,25,53,28,20,22,94,91,56,35,3,89,2,24,95,98,46,33,69,56,20,32,91,27,39,18,10,21,12,87,15,62,81,65,90,46,48,12,37,92,4,45,84,73,98,7,62,38,30,39,20,54,82,45,98,1,84,23,61,58,35,86,45,4,94
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const fetchData = async url => { const response = await fetch(url); return response.json(); }
orange - apple
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
console.log(getRandomString());
const getRandomIndex = array => Math.floor(Math.random() * array.length);

const fetchData = async url => { const response = await fetch(url); return response.json(); }
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
true - 57

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
orange


const isPalindrome = str => str === str.split("").reverse().join("");
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
kiwi * false
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
false - 82,21,18,18,67,34,56,8,1,15,70,23,13
const sum = (a, b) => a + b;
kiwi

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
let array = getRandomArray(); array.forEach(item => console.log(item));
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
