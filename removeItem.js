/*

Given an array and a value 

remove all instances of that value in-place and return the first k numbers of the array that is not equal to the value


*/


const nums = (array, val) => {
    let j = 0
    for (let i = 0; i < array.length; i++){
        if (array[i] !== val){
        array[j] = array[i]
        j++
        }
    }
    return j

}

console.log(nums([0,1,2,2,3,0,4,2], 2))