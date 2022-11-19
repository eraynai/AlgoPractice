// Parameters
// What is the type of argument being inputted and are there multiple or default arguments?
// two arguments
// they are both strings
// could be spaces
// arguments are always the same length


// Return
// What is being asked to be returned and what is the type?
//boolean


// Example
// Provide 2-3 examples of what we expect to happen if we call the function with certain arguments. Can you think of any edge cases?
// "add" "dad" - false
// "goo" "see" - true

// Pseudocode
// Write informal steps on how to solve the problem. Think about what the parameters are and what steps need to be taken to get to our expected return. All statements showing "dependency" are to be indented.
// we need to loop through the first argument
// we need to create a map and put the first argument inside of the map


// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

function isoMorph(arg1, arg2) {
  let map = new Map();
  let map2 = new Map();
  for (let i = 0; i < arg1.length; i++) {
    if (!map.has(arg1[i])) {
      map.set(arg1[i], arg2[i]);
    }else{
      if(map.get(arg1[i]) != arg2[i]){
        return false;
      }
    }
  }
  for (let i = 0; i < arg2.length; i++) {
    if (!map2.has(arg2[i])) {
      map2.set(arg2[i], arg1[i]);
    }else{
      if(map2.get(arg2[i]) != arg1[i]){
        return false;
      }
    }
  }
  return true;
}

// isoMorph('eeg', 'ade');
console.log(isoMorph('egg', 'add'));
console.log(isoMorph('efg', 'add'));
// Input: s = "egg", t = "add"
// Output: true

// Example 2:

// Input: s = "foo", t = "baa"
// Output: false