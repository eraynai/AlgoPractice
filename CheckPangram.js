// Parameters
// What is the type of argument being inputted and are there multiple or default arguments?
// no spaces
// only lowercase
// only one input
// just strings

// Return
// What is being asked to be returned and what is the type?
// true or false, boolean

// Example
// Provide 2-3 examples of what we expect to happen if we call the function with certain arguments. Can you think of any edge cases?
// "hello" -> false;
// whole alphabet -> true;

// Pseudocode
// Write informal steps on how to solve the problem. Think about what the parameters are and what steps need to be taken to get to our expected return. All statements showing "dependency" are to be indented.
//create a variable to hold the alphabet
//loop through the argument and check whether it includes all the elements in the variable
// if it does we return turn
// else we return false


// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

function checkPangram(arg){
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  for(let i = 0; i < alpha.length; i++){
    if(!arg.includes(alpha[i])){
      return false;
    }
  }
  return true;
}

console.log(checkPangram('hello'));
console.log(checkPangram("thequickbrownfoxjumpsoverthelazydog"));

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.

// Constraints:

// 1 <= sentence.length <= 1000
// sentence consists of lowercase English letters.