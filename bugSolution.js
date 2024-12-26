function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined || isNaN(a) || isNaN(b)) {
    return null; // or handle appropriately based on your needs
  }

  return a + b; 
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(1, null)); // null
console.log(foo(null, null)); // null
console.log(foo(undefined, 2)); // null
console.log(foo(1, undefined)); // null
console.log(foo(NaN, 2)); // null
console.log(foo(1, NaN)); // null