/*
Given 2 sorted array in a non-decreasing order, 

merge nums1 (length m) in-place to nums2(length n)

Length of modified nums1 = m + n with the first m items to be merged and the n items will be set to 0 and be ignore

*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  //compare each items of each array from the bottom
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  //replace the index of the modifed mums1 based on nums1 and nums2
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
  }
  k--;
  // when  there are sill items of nums2, place them in the indexes as k decreases with the decreaseing values in nums2.
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};

let nums1 = [1, 2, 3, 0, 0, 0, 0]; // Initialize nums1 with additional space for merging
let m = 3; // Number of elements in nums1 to be merged
let nums2 = [2, 5, 6, 7]; // nums2
let n = 4; // Number of elements in nums2

// Invoke the merge function
merge(nums1, m, nums2, n);

// Log the modified nums1 array
console.log(nums1);


