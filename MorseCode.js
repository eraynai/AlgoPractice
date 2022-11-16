
// Parameters
// What is the type of argument being inputted and are there multiple or default arguments?
//array of strings
// always lowercase english letters
// just one array
// there always be at least one character in the string


// Return
// What is being asked to be returned and what is the type?
// return a number
// the number of unique of transformations of the inputted words

// Example
// Provide 2-3 examples of what we expect to happen if we call the function with certain arguments. Can you think of any edge cases?
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// return 2

// words = ["a"]
// Output: 1
// ".-"
// return 1

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

// Pseudocode
// Write informal steps on how to solve the problem. Think about what the parameters are and what steps need to be taken to get to our expected return. All statements showing "dependency" are to be indented.
// loop through my array, grab each word, loop that word and convert that word into morse code
// compare each converted word to see if they are different
// if they are different I need to have a counter to count how many unique morse words that I have
// once I return, I've solved the problem

var uniqueMorseRepresentations = function(words) {
    let morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    const mySet = new Set();
    for(let i = 0; i < words.length; i++){
      let fullWord = "";
      for(let j = 0; j < words[i].length; j++){
        let wordNum = alphabet.indexOf(words[i][j]);
        fullWord += morseCode[wordNum];
      }
     mySet.add(fullWord);
    }
   return mySet.size;
  };

console.log(uniqueMorseRepresentations(["hello", "you", "me"]));

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 12
// words[i] consists of lowercase English letters.

// Input: words = ["gin","zen","gig","msg"]
// Output: 2
// Explanation: The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// There are 2 different transformations: "--...-." and "--...--.".