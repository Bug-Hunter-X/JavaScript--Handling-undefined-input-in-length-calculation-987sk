function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  }
  return x.length; // This will throw an error if x is not an array or string
}

console.log(foo([1, 2, 3])); // Output: 3
console.log(foo("hello")); // Output: 5
console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Throws an error