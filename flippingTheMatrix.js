
// Given a matrix of 2nX2n, reverse the columns and rows to find the maximal value of top-left quadrant 
function flippingMatrix(matrix) {
    const n = matrix.length / 2; // nXn is the size of a quadrant of 2nX2n matrix
    
    // Iterate through the top-left quadrant
    let maxSum = 0;
    // Iterate through rows of quadrant
    for (let i = 0; i < n; i++) {
        //Iterate through cols of quadrant
        for (let j = 0; j < n; j++) {
            // Find the maximum mirror element of element in top-left quadrant
            const topLeft = matrix[i][j];
            const topRightMirror = matrix[i][2 * n - j - 1];
            const botLeftMirror = matrix[2 * n - i - 1][j];
            const botRightMirror = matrix[2 * n - i - 1][2 * n - j - 1];
            
            // Add the maximum value to the maxSum
            maxSum += Math.max(topLeft, topRightMirror, botLeftMirror, botRightMirror);
        }
    }
    
    return maxSum;
}
