/*
Given an array, remove the duplicate numbers in-place and return the length of the unique number array
*/


const removeDuplicate = (arr) => {
//Using 2 pointers: fast and slow in this case
   let slow = 0
// loop through the arrray with fast poiter starts from 1
    for (let fast = 1; fast < arr.length; fast++){
        if(arr[fast] !== arr[slow]){
            slow = slow +  1
            arr[slow] = arr[fast]
        }
    }
    arr.length = slow + 1
    console.log(arr)
    return slow + 1
}
//Testing
console.log(removeDuplicate([1,1,1,2]))