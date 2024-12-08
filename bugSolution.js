function foo(x) {
  if (x === undefined || x === null) {
    return 0; // Handle undefined and null cases
  } else if (typeof x === 'string' || Array.isArray(x)) {
    return x.length; // Handle strings and arrays
  } else {
    return -1; // Or throw a more specific error
  }
}

console.log(foo([1, 2, 3])); // Output: 3
console.log(foo("hello")); // Output: 5
console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0
console.log(foo(123)); //Output: -1