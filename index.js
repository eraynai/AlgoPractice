// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

// Parameters
// What is the type of argument being inputted and are there multiple or default arguments?
//array - no negatives, not empty, length of the array will always be the same (4),  each element will be fixed with what we are muliplying by
//float number, not negative, not a string 

// Return
// What is being asked to be returned and what is the type?
//boolean value, if we have greater than or equal to enough change - true, otherwise false

// Example
// Provide 2-3 examples of what we expect to happen if we call the function with certain arguments. Can you think of any edge cases?
//[2, 3, 5, 6], 3.13
//1.11 -> false
//[4, 5, 6, 7], .50
//1.87 -> true

// Pseudocode
// Write informal steps on how to solve the problem. Think about what the parameters are and what steps need to be taken to get to our expected return. All statements showing "dependency" are to be indented.

//iterate through each element of the array and then multiply each element by a different number
//index 0  x .25
//index 1 x .10
//index 2 x .5
//index 3 x .1
//add up all the indexes after the multiplication
//compare sumVariable to finalValue - if sumVariable >= finalValue return true, else false


function changeEnough(changeBalance, targetBalance) {
  let sumVariable = 0;
  for (let index = 0; index < changeBalance.length; index++) {
  //   if (index === 0) {
  //     sumVariable += changeBalance[index] * .25;
  //   } else if (index === 1) {
  //     sumVariable += changeBalance[index] * .10;
  //   } else if (index === 2) {
  //     sumVariable += changeBalance[index] * .05;
  //   } else {
  //     sumVariable += changeBalance[index] * .01;
  //   }
  // }
  switch(index){
    case 0: 
      sumVariable += changeBalance[index] * .25;
      break;
    case 1:
      sumVariable += changeBalance[index] * .10;
      break;
    case 2:
      sumVariable += changeBalance[index] * .05;
      break;
    default:
      sumVariable += changeBalance[index] * .01;
  }
  if (sumVariable >= targetBalance) {
    return true;
  }
  return false;
}


console.log(changeEnough([2, 100, 0, 0], 14.11), false);

// changeEnough([0, 0, 20, 5], 0.75) ➞ true

// changeEnough([30, 40, 20, 5], 12.55) ➞ true

// changeEnough([10, 0, 0, 50], 3.85) ➞ false

// changeEnough([1, 0, 5, 219], 19.99) ➞ false