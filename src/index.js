import { prettyPrint } from './prettyPrint';
import {Tree} from './Tree.js';

let test=new Tree([100, 20, 500, 10, 30, 34, 49, 65]);

console.log(test.sortedArray);
console.log(test.length);
console.log(test.root);
console.log(prettyPrint(test.root));
console.log(test.root.d);
test.insert(5);
test.insert(12);
test.insert(3);
test.insert(70);
test.insert(32);

console.log(prettyPrint(test.root));

test.delete(34);
console.log(prettyPrint(test.root));