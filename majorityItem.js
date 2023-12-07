/*Given an array of integer, find the the number that is the majority of the array, a majority item is the one whose length is greater than the lenght of the array divided by 2 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let numOccurence = 1
    let slow = 0
    //sort the array 
    nums.sort((a,b) => a - b)
    for (let fast = 1; fast < nums.length; fast++){
        if(nums[fast] === nums[slow]){
            numOccurence++
            
        } else {
            numOccurence = 1
            slow = fast
        } 

        if(numOccurence > nums.length / 2){
            return nums[fast]
        }
    }

    return nums[nums.length - 1]
       
};

//Testing
console.log(majorityElement([2,2,1,1,1,2,2, 9, 9, 9, 9, 9, 9, 9]))
