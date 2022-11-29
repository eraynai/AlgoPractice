
/* Write a function fizzBuzz that takes an array of numbers and replaces any number divisible by three with the word "fizz" and any number divisible by five with the word "buzz". If a number is divisible by both three and five, replace it with "fizzbuzz"

Once the appropriate numbers are replaced, return a concatenated string with only the words "fizz" or "buzz" included.

const numbers = [1, 3, 5, 9, 11, 12, 20];

fizzBuzz(numbers); // returns "fizzbuzzfizzfizzbuzz"

Parameters
//an array of numbers

Results
a concatenated string with the words "fizzbuzz"

Examples
[1, 3, 9, 11, 12, 20] -> "fizzbuzzfizzfizzbuzz"

Pseudocode
create a variable that holds an empty string
loop through the array and determine whethere the number is divisible by 3 concatenate fizz if 5 concatentate buzz
return string

*/

function fizzBuzz(num){
  let finalWord = "";
  for(let i = 0; i < num.length; i++){
    if(num[i] % 3 === 0){
      finalWord += "fizz";
    }else if(num[i] % 5 === 0){
      finalWord += "buzz";
    }
  }
  return finalWord;
}

console.log(fizzBuzz([1, 3, 5, 9, 11, 12, 20]));