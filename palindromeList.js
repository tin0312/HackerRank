// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
  //declare 2 pointers to get the middle node
  let fast = head;
  let slow = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  //An empty node or single node is palindarome
  if (head === null || head.next === null) {
    return true;
  }
  // Helper function to reverse a linked list
  function reserveList(node) {
    let prevNode = null;
    while (node !== null) {
      let next = node.next;
      node.next = prevNode;
      prevNode = node;
      node = next;
    }
    return prevNode;
  }
  function isEqual(list1, list2) {
    while (list1 !== null && list2 !== null) {
      if (list1.val !== list2.val) {
        return false;
      }
      list1 = list1.next;
      list2 = list2.next;
    }
    return true;
  }
  const secondHalfList = reserveList(slow);
  return isEqual(head, secondHalfList);
};

console.log(isPalindrome(new ListNode(1, new ListNode(2,new ListNode(1)))))
