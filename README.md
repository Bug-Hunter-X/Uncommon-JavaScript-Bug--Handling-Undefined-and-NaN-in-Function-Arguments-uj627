# Uncommon JavaScript Bug: Handling Undefined and NaN in Function Arguments

This repository demonstrates a subtle bug in JavaScript function argument handling, specifically concerning undefined and NaN values. The original code only checks for null values, leading to unexpected behavior when arguments are undefined or NaN.

## Bug Description
The `foo` function adds two numbers. However, it only explicitly checks for null arguments. This means that if either `a` or `b` is undefined or NaN, the addition will still occur, potentially resulting in unexpected results (NaN) or runtime errors.

## Solution
The solution addresses this by adding checks for undefined and NaN values.  We use `typeof` to check for undefined and `isNaN` to check for NaN.  By handling these edge cases, we ensure the function behaves more predictably and avoids potential errors.

## How to Reproduce
1. Clone this repository.
2. Navigate to the directory.
3. Run the `bug.js` file using Node.js (or a similar JavaScript environment): `node bug.js`
4. Observe the output, which includes unexpected behavior when undefined is used as an argument.
5. Run the `bugSolution.js` to observe the corrected behavior. 