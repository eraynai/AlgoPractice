// Parameters
// What is the type of argument being inputted and are there multiple or default arguments?
// it will always be characters and no nums
// it will never be empty
// it will always be at least 26 characters
// the first argument can have spaces too
// it will contain each letter of the alphabet at least once
// second argument will be between 1 to 2000 characters
// second argument can have spaces

// Return
// What is being asked to be returned and what is the type?
// decode the second arg as a string

// Example
// Provide 2-3 examples of what we expect to happen if we call the function with certain arguments. Can you think of any edge cases?

// Pseudocode
// Write informal steps on how to solve the problem. Think about what the parameters are and what steps need to be taken to get to our expected return. All statements showing "dependency" are to be indented.
// create new Map
// loop the first argument and then add each character to the map, and I need to check whether I've seen this character
// for character I'm adding to the map, I'm adding its alphabetic equivalent
// loop through the second argument and then check the character in the map and get it's value and hold on to it
// return the entire once you've finished

// function decodeMessage(key, message) {
//   let map = new Map();
//   map.set(" ", " ");
//   let alpha = "abcdefghijklmnopqrstuvwxyz"
//   counter = 0;
//   for(let i = 0; i < key.length; i++){
//     if(!map.has(key[i])){
//       map.set(key[i], alpha[counter])
//       counter++;
//     }
//   }
//   let charHolder = "";
//   for(let j = 0; j < message.length; j++){
//      charHolder += map.get(message[j])
     
//   }
//  return charHolder;
// }

// You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

// Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
// Align the substitution table with the regular English alphabet.
// Each letter in message is then substituted using the table.
// Spaces ' ' are transformed to themselves.
// For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').

console.log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv"));
// Input: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
// Output: "this is a secret"
// Explanation: The diagram above shows the substitution table.
// It is obtained by taking the first appearance of each letter in "the quick brown fox jumps over the lazy dog".

function decodeMessage(key, message) {
    let hash = new Map().set(" ", " ");
    let char = 'a'.charCodeAt();
    console.log(char)
    for (let l of key) {
        if (!hash.has(l)) {
            hash.set(l, String.fromCharCode(char))
            char++
        }
    }
    let newString = "";
    for (let l of message) {
        newString += hash.get(l)
    }
    return newString;
};