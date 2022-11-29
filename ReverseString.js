// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

/* 
Parameters
//there could be spaces
//all characters
//single array

Results
return an array of characters backwards

Examples
["a","b","c"] -> ["c", "b", "a"]

Pseudocode
create a empty array 
loop through the string
push it each character to the back of the array

*/

function reverseString(arr){

  let [start, end] = [0, arr.length - 1]
  while(start < end){
    [arr[start], arr[end]] = [arr[end], arr[start]]
    start++
    end--
  }
  // for(let i = 0; i < arr.length / 2; i++){
    
  //   let temp = arr[i];
  //   arr[i] = arr[arr.length - 1 - i];
  //   arr[arr.length - 1 - i] = temp;
  // }
  return arr;
}


console.log(reverseString(["a", "b", "c", "d", "e", "f", "g"]));

// let arr[0] = "a";
// let arr[3] = "d";
// let temp = arr[0];
// arr[0] = arr[3]
// arr[3] = temp;

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.