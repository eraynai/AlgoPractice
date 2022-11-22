//PREP
//Parameters
// strictly positive number greater than zero
// only number type


//Results
//return a string with the word "Special!!" or "NOT!!"

//Example
//(2) -> "Special!!"
//(6) -> "NOT!!"
//(23) -> "Special!!"
//Pseduocode
//we take the input and convert it to a string and store it in a variable
//we loop through the string and withthin the loop we convert the char to number
//determine whether the number is > 5
//if it is return NOT!!
//outside of the loop we are going to return Special!!


function specialNumber(n){
  let stringNum = n.toString();
  for(let i = 0; i < stringNum.length; i++){
    if(Number(stringNum[i]) > 5){
      return "NOT!!";
    }
  }
  return "Special!!";
}