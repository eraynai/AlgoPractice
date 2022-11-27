/* 
Parameters
array of integers
the array won't be empty

Return
a string "yes" if its accending
a string "yes" if its decending
no otherwise

Example
[1, 2, 3, 5, 6] -> "yes"
[6, 5, 4, 3, 2] -> "yes"
[1, 6, 4, 6] -> "no" 

Pseudocode
create a new array from the input and sort it by accending and the compare it to the array of the input
create a new array from the input and sort it by deceding and then comparie ikt to the array of the input
else I would return no

*/

const { isDeepStrictEqual } = require("util");

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(arr) {
  let isAscending = true;
  let isDescending = true;
  const accSorted = [...arr];
  const decSorted = [...arr];
  accSorted.sort((a, b) => {
    return a - b;
  })
  decSorted.sort((a, b) => {
    return b - a;
  })

  for(let i = 0; i < accSorted.length; i++){
    if(accSorted[i] !== arr[i]){
      isAscending = false;
      break;
    }
  }

  for(let j = 0; j < decSorted.length; j++){
    if(decSorted[j] !== arr[i]){
      isDescending = false;
      break
    }
  }

  if (isAscending || isDescending) {
    return "yes"
  }
  return "no"
}



console.log(isSortedAndHow([2, 4, 6, 7]));

