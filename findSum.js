/*

Given a a function, if input is 2 parameters, calculate the sum, otherwise if only 1 parameter,
return a function that will take another parameter to calculate the sum.
If the patameter is not a number, return undefined

*/

function addTogether() {
    //construct the numbers from the arguments array-like object 
    const [first, second] = arguments
    if(typeof (first) === "number"){
      if(typeof (second) === "number") return first + second
      if(arguments.length === 1) return (second) => addTogether(first, second)
    }
  }
  
  addTogether(2,3);
  
  //Test one parameter and a function take another parameter to calculate the sum.
  console.log(addTogether(2)(3))
  
  
