/*
Given an array and a value, find the indices of the 2 numbers that sum up the value

*/

const twoSum = (array, target) => {
    //create a hash table to save the indices
    let hashTable = new Map()
    //loop through the array
    for(let i = 0; i < array.length; i++){
        let complement = target - array[i]
        
        if(hashTable.has(complement)){
            return [hashTable.get(complement), i]
        }

        hashTable.set(array[i], i)
    }

    return []
}