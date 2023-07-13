import { prettyPrint } from './prettyPrint';
import {Tree} from './Tree.js';

let test=new Tree([100, 20, 500, 10, 30, 34, 49, 65,43, 75, 53]);

prettyPrint(test.root);

test.insert(5);

prettyPrint(test.root);

test.delete(34);
prettyPrint(test.root);

console.log(test.find(100));

function divideByTwo(node){
    return node.d/2;
}

console.log(test.levelOrder());
console.log(test.levelOrderRecursive());
console.log(test.levelOrder(divideByTwo));
console.log(test.levelOrderRecursive(divideByTwo));
console.log(test.preOrder());
console.log(test.preOrder(divideByTwo));

console.log(test.inOrder());
console.log(test.inOrder(divideByTwo));

console.log(test.postOrder());
console.log(test.postOrder(divideByTwo));