/*

Given an input of an array and a callbaclk function that requrie the array items to pass for a certain conditions
Return a new array with sastisfied items and return an empty array of not

*/

const dropItems = (arr, func) => {
    while(arr.length > 0 && !func(arr[0])){
        arr.shift()
    }
    return arr
}

// Test
console.log(dropItems([1, 2, 3, 4], function(n) {
    return n >= 3;
  }))

//Another approach using slice method
/*

const dropItems = (arr, func) => {
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i]){
            return arr.slice(i)
        }
    }
    return []
}

*/




