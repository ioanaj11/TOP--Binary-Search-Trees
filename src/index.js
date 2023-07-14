import { prettyPrint } from './prettyPrint';
import {Tree} from './Tree.js';



//Create a binary search tree from an array of random numbers < 100
let test=new Tree([100, 20, 10, 30, 34, 49, 65,43, 75, 53]);

//print a visual representation of the tree
prettyPrint(test.root);

//Confirm that the tree is balanced by calling isBalanced.
console.log(test.isBalanced());

//Print out all elements in level, pre, post, and in order.
console.log(test.levelOrder());
console.log(test.preOrder());
console.log(test.postOrder());
console.log(test.inOrder());

//Unbalance the tree by adding several numbers > 100.
test.insert(101);
test.insert(102);
test.insert(200);

//Confirm that the tree is unbalanced by calling isBalanced.
console.log(test.isBalanced());

//print a visual representation of the tree
prettyPrint(test.root);

//Balance the tree by calling rebalance.
test.rebalance();

//Confirm that the tree is balanced by calling isBalanced.
console.log(test.isBalanced());

//Print out all elements in level, pre, post, and in order.
console.log(test.levelOrder());
console.log(test.preOrder());
console.log(test.postOrder());
console.log(test.inOrder());

//print a visual representation of the tree
prettyPrint(test.root);