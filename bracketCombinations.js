/*

Given a number, find the maximum number of combination that can form valid brackets.


*/


function BracketCombinations(num) {
    //helper function to calculate the posbilities
    function calculatePossibility(open, closed){
    //base case
    if(open === 0 && closed === 0){
      return 1
    }
    let posibilities = 0
  
    if(open > 0){
      posibilities += calculatePossibility(open - 1, closed)
    }
    if( closed > open) {
      posibilities += calculatePossibility(open, closed - 1)
    }
    return posibilities
    }
    return calculatePossibility(num, num)
  }
  

console.log(BracketCombinations(3))