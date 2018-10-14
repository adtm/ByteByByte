/**
  Given a binary tree, write a function to test
  if the tree is a binary search tree.
*/
log = console.log;

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Should write a BST class later on
const Tree = new Node(5);

// Left-side
Tree.left = new Node(3);
Tree.left.left = new Node(1);
Tree.left.right = new Node(2);

// Right-side
Tree.right = new Node(7);
Tree.right.left = new Node(6);
Tree.right.right = new Node(8);

//      5
//    /  \
//   3    7
//  /\    /\
// 1 2   6 8

function ifBST(node, min, max) {
  if (!node) return true;
  if (min > node.value || node.value > max) return false;
  return (
    ifBST(node.left, min, node.value - 1) && ifBST(node.right, min + 1, max)
  );
}

function checkIfBST() {
  return ifBST(Tree, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function checkIfBSTTraversal(head) {
  const pointArr = [];
  pickNodes(Tree, pointArr);
  // Optimization can be done by passing prev node to check by traversing
  for (let i = 0; i < pointArr.length - 1; i++)
    if (pointArr[i] > pointArr[i + 1]) return false;

  return true;
}

function pickNodes(node, array) {
  if (!node) return;
  pickNodes(node.left, array);
  array.push(node.value);
  pickNodes(node.right, array);
}
