// Parameters
// What is the type of argument being inputted and are there multiple or default arguments?
//numbers - they can be positive or negative, they are not float numbers, they are not strings

// Return
// What is being asked to be returned and what is the type?
//asked to return the sum of the two arguments

// Example
// Provide 2-3 examples of what we expect to happen if we call the function with certain arguments. Can you think of any edge cases
//(3, 4)
//(2, -1)


// Pseudocode
// Write informal steps on how to solve the problem. Think about what the parameters are and what steps need to be taken to get to our expected return. All statements showing "dependency" are to be indented.
// we need to create variable and set it to zero
//assign it to the sum of the two arguments 
// return variable

//Given two integers num1 and num2, return the sum of the two integers.

function TwoIntegers(num1, num2){
  let sumInt = num1 + num2;
  return sumInt;
}

console.log(TwoIntegers(12, 5), 17);

// Example 1:

// Input: num1 = 12, num2 = 5
// Output: 17
// Explanation: num1 is 12, num2 is 5, and their sum is 12 + 5 = 17, so 17 is returned.
// Example 2:

// Input: num1 = -10, num2 = 4
// Output: -6
// Explanation: num1 + num2 = -6, so -6 is returned.

