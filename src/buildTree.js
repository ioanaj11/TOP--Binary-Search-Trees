import {Node} from './Node.js';

function buildTree(array, start, end){
    if (start>end) return null;

    let mid=parseInt((start+end)/2);
    let node=new Node(array[mid]);
    node.leftNode=buildTree(array, start, mid-1);
    node.rightNode=buildTree(array, mid+1, end);
    return node;
}

export {buildTree};