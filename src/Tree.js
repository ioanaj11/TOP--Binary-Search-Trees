import {Node} from './Node.js';
import {mergeSort} from './mergeSort';
import { buildTree } from './buildTree';

class Tree{
    constructor(array){
        this.array=array;
        this.sortedArray=mergeSort(this.array);
        this.length=this.sortedArray.length;
        this.root=buildTree(this.sortedArray, 0, this.length-1);
    }

    insert(value, node=this.root){
        if (node === null){
            node=new Node(value);
            return node;
        }

        if (value < node.d) node.leftNode=this.insert(value, node.leftNode);
            else if (value > node.d) node.rightNode=this.insert(value, node.rightNode);
        return node;
    }

    delete(value, node=this.root){
        if (value === node.d)
            if ((node.leftNode===null)&&(node.rightNode===null))return null;
                else if (node.leftNode === null) return node.rightNode
                    else if (node.rightNode === null) return node.leftNode;
                        else {
                            let replacementValue=this.findNextBiggest(node.rightNode);
                            this.delete(replacementValue.d);
                            node.d=replacementValue.d;
                            return node;
                            }

        if (value < node.d) node.leftNode=this.delete(value, node.leftNode);
            else if (value > node.d) node.rightNode=this.delete(value, node.rightNode);
        return node;
    }

    findNextBiggest(node){
        if (node.leftNode === null) return node  
            else return this.findNextBiggest(node.leftNode);       
    }

    find(value, node=this.root){
        if (node === null) return "Value not found";
        if (value === node.d) return node;
        if (value < node.d) return this.find(value, node.leftNode);
            else if (value > node.d) return this.find(value, node.rightNode);
    }

    levelOrder(inputFunction=this.createArray, queue=[this.root]){
        let resultsArray=[];
        while (queue.length != 0)
            {   resultsArray.push(inputFunction(queue[0]));
                if (queue[0].leftNode != null) queue.push(queue[0].leftNode);
                if (queue[0].rightNode != null) queue.push(queue[0].rightNode);
                queue.shift();
            }
        return resultsArray;
        }

    levelOrderRecursive(inputFunction=this.createArray, queue=[this.root], resultsArray=[]){
        if (queue.length === 0) return resultsArray;
        
        resultsArray.push(inputFunction(queue[0]));
        if (queue[0].leftNode != null) queue.push(queue[0].leftNode);
        if (queue[0].rightNode != null) queue.push(queue[0].rightNode);
        queue.shift();
        return this.levelOrderRecursive(inputFunction, queue, resultsArray)
    }

    createArray(node)
       {return node.d; }

    preOrder(inputFunction=this.createArray, node=this.root, resultsArray=[]){
        if (node != null)
            { resultsArray.push(inputFunction(node));
              this.preOrder(inputFunction, node.leftNode, resultsArray);
              this.preOrder(inputFunction, node.rightNode, resultsArray);
            }   
        return resultsArray;
    }

    inOrder(inputFunction=this.createArray, node=this.root, resultsArray=[]){
        if (node != null)
            { this.inOrder(inputFunction, node.leftNode, resultsArray);
              resultsArray.push(inputFunction(node));
              this.inOrder(inputFunction, node.rightNode, resultsArray);
            }   
        return resultsArray;
    }

    postOrder(inputFunction=this.createArray, node=this.root, resultsArray=[]){
        if (node != null)
            { this.postOrder(inputFunction, node.leftNode, resultsArray);
              this.postOrder(inputFunction, node.rightNode, resultsArray);
              resultsArray.push(inputFunction(node));
            }   
        return resultsArray;
    }

    height(node=this.root){
        if (node != null) 
            { let leftHeight=this.height(node.leftNode);
              let rightHeight=this.height(node.rightNode);
              return Math.max(leftHeight, rightHeight )+1; 
            }
        return -1;
    }
     
    depth(node, treeValue=this.root, depth=0){
        if (node === treeValue) return depth;
        if (node.d < treeValue.d) return this.depth(node, treeValue.leftNode,depth)+1;
        if (node.d>treeValue.d) return this.depth(node, treeValue.rightNode)+1;
    }

    isBalanced(node=this.root){
        let difference=Math.abs(this.height(node.leftNode)-this.height(node.rightNode));
        if (difference>1) return "Tree is not balanced";

        if (node.leftNode != null) return this.isBalanced(node.leftNode);
        if (node.rightNode !=null) return this.isBalanced(node.rightNode);
        
        return "Tree is balanced";
    }

    rebalance(){
        let newarray=this.inOrder();
        this.root=buildTree(newarray, 0, newarray.length-1);
        return this.root;
    }
}

export {Tree}