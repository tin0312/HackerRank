/*
Given an array and the number of items to be rotate to the right of the array.Rotate the array to the right with k items.

*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    //handle case when number of item greater than the length of the array.
    k%= nums.length
    //create a helper function that reverse the items in the array
    const reverseItems = (nums, start, end) => {
        while(start < end){
            let temp = nums[start]
            nums[start] = nums[end]
            nums[end] = temp
            start++
            end--
        }
    }

    reverseItems(nums, 0, nums.length - 1) // reverse the whole array to switch their position
    reverseItems(nums, 0, k - 1)// reverse the first part of the array as the k elements to be rotated
    reverseItems(nums, k, nums.length - 1)// reverse the second part of the array for the remaining items
    console.log(nums)
};

//Test
rotate([1,2,3,4,5,6,7], 3) // [5,6,7,1,2,3,4]