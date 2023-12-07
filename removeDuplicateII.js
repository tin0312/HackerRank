/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    let uniqueIndex = 0;
    let occurrenceCount = 1;

    for (let currentIndex = 1; currentIndex < nums.length; currentIndex++) {
        // if two numbers are equal, then increase its occurence by 1
        if (nums[currentIndex] === nums[uniqueIndex]) {
            occurrenceCount++;
        // when encounter an unique number, activate the swapping condition by set the coccurence to 1 since this number only appears in the search so far.
        } else {
            occurrenceCount = 1;
        }
        // when the number occurence is greater than 2, meaning one number appears three times and we keep the same index for unique number and will not swap
        //Only swap the unique with the current index when encounter an unique number by increasing the unique index by 1 in order to replace the third occurence of the number with the unique number.  
        if (occurrenceCount <= 2) {
            uniqueIndex++;
            nums[uniqueIndex] = nums[currentIndex];
        }
    }
    //this is just to see how the array is modified in Javascript, some  languagues cannot change the length of the array.
    nums.length = uniqueIndex + 1;
    console.log(nums)
    // return the length of the modified array in-place 
    return uniqueIndex + 1;
};
//Tesing 
console.log(removeDuplicates([1,1,1,2,2,3]))

