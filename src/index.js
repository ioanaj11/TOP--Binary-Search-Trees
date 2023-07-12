import { prettyPrint } from './prettyPrint';
import {Tree} from './Tree.js';

let test=new Tree([100, 20, 500, 10, 30, 34, 49, 65]);

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
console.log(test.levelOrder(divideByTwo));