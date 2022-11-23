//Parameters
/* 
two parameters, one is a char and the other is an array
array of numbers
*/

//Return
/*
array either in accending or decending order
*/

//Examples
/*'R', [1, 6, 5, 8, 3, 2] -> [1, 2, 3, 5, 6, 8]
  'L', [1, 6, 5, 8, 3, 2] -> [8, 6, 5, 3, 2, 1]
*/


//Pseudocode
// create a variable to hold the new sorted
//if condition where if it's "R" comparefn(a, b) -> a - b
// use the comparefn in the sort to do decending order -> comparefn(a, b) -> b - a

function gravityFlip(d, a){
  if(d === 'R'){
    let newArr = a.sort((a, b) => {
      return a - b;
    })
    return newArr;
  }
  let newArr2 = a.sort((a, b) => {
    return b - a;
  })
  return newArr2
}

// console.log(gravityFlip('R', [1, 6, 5, 8, 3, 2]));//accending order - smallest to the largest
console.log(gravityFlip('L', [1, 6, 5, 8, 3, 2]));//decending order - decending order is the largest to the smallest