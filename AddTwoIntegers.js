// Parameters
// What is the type of argument being inputted and are there multiple or default arguments?
// one argument and it's a string
// always a valid ip address

// Return
// What is being asked to be returned and what is the type?
//return the defanged ip address and wrap each period with square brackets

// Example
// Provide 2-3 examples of what we expect to happen if we call the function with certain arguments. Can you think of any edge cases
// "1.1.1.1"
// "1[.]1[.]1[.]1"
// "2.3.4.5"
// "2[.]3[.]4[.]5"

// Pseudocode
// Write informal steps on how to solve the problem. Think about what the parameters are and what steps need to be taken to get to our expected return. All statements showing "dependency" are to be indented.
// loop through the string
// check each element whether it is a period
// if a period is identified, add a square bracket before and after the period
// and keep going until the strings and the return the string

function ipAddress(address){
  let newString = "";
  for(let i = 0; i < address.length; i++){
    if(address[i] === "."){
      newString += "[.]";
    }else{
      newString += address[i];
    }
  }
  return newString;
}

console.log(ipAddress("1.2.3.4"), "1[.]2[.]3[.]4");



// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"
