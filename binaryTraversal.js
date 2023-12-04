//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let inorderTraversal = function (root) {
  //save nodes in an array
  const stack = [];
  //save node values
  const result = [];
  while (root !== null || stack.length !== 0) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }

    //extract node values
    root = stack.pop();
    // add node values to the array
    result.push(root.val);

    //Move to the right sub-tree
    root = root.right;
  }

  return result;
};
// Input the array [1, null, 2, 3] directly into the function
const result = inorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null)));

// Output the result
console.log(result);  // Output: [1, 3, 2]