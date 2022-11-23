/* 

Parameters
//one array
//the array won't be empty
//there won't be any strings

Result
//return an int for both functions


Example
[-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
[42, 54, 65, 87, 0]  -> min = 0, max = 87

Pseudocode
//create a new variable and sort the array in accending and decending order
// return the first element of the array

*/



var min = function(list){
    let minList = list.sort((a, b) => {
      return a - b;
    })
    return minList[0];
}

var max = function(list){
    let maxList = list.sort((a, b) => {
      return b - a;
    })
    
    return maxList[0];
}