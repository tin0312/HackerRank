/*You will be given a list of integers, arr, and a single integer k.
You must create an array of length k from arr such that its unfairness is minimized.
Call that array arr'.
Unfairness of an array is calculated as  max(arr') - min(arr')

max(arr') indicates the largest number in arr'
min(arr') indicates the smallest number in arr'


Example: 

here is an array : arr = [1, 4, 7, 2] = > arr.length = 4
k is 2
Step 1 : sort the array => arr = [1, 2, 4, 7] to find the minimim possible fairness when creating another array with k length. 
Step 2: Set the minUnfariness to be Infinity
Step 3: find the subarrays with the length of k by looping through the sorted array
Step 4: subarrays would be at indexs of (0, 2) or (1,3) or (2,4)
Step 5: Calculate the min possible unfairness of each k-lengh subarrays  
Step 6: Compare each subarray min unfariness to the initial unfairness value
Step 7: If the subarray min unfairness is less than the initial unfairness value, update the min unfairness value to be the subarray min unfairness value
Step 8: return the min unfairness value

=> This algorithm takes 9 steps with the Big O Notation of : O(9)

=> create another array that has a lenghth of 2 => arr' = [4, 7]
=> unfairness = max(arr') - min(arr') = 7 - 4 = 3

this function should return the minimum possible fairness

In this case, it would take the array of [1, 2] and return the minimim possible unfairness of 1 
*/ 
function maxMin(k, arr) {
    // Using spread syntax to make a copy of an array and sort it 
    const sortedArray = [...arr].sort((a, b) => a - b);

    // Initialize variables to keep track of unfairness
    let minUnfairness = Infinity;

    // Iterate through all possible subarrays of length k
    for (let i = 0; i <= sortedArray.length - k; i++) {
        // Create a subarray of length k
        const subarray = sortedArray.slice(i, i + k);

        // Calculate unfairness for the current subarray
        const currentUnfairness = subarray[subarray.length - 1] - subarray[0];

        // Update minUnfairness if the current subarray has a lower unfairness
        if (currentUnfairness < minUnfairness) {
            minUnfairness = currentUnfairness;
        }
    }

    return minUnfairness;
}
