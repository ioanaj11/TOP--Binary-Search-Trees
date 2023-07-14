/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Node.js":
/*!*********************!*\
  !*** ./src/Node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node)
/* harmony export */ });
class Node{
    constructor(d,leftNode=null, rightNode=null){
        this.d=d;
        this.leftNode=leftNode;
        this.rightNode=rightNode;
    }
}



/***/ }),

/***/ "./src/Tree.js":
/*!*********************!*\
  !*** ./src/Tree.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tree: () => (/* binding */ Tree)
/* harmony export */ });
/* harmony import */ var _Node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node.js */ "./src/Node.js");
/* harmony import */ var _mergeSort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeSort */ "./src/mergeSort.js");
/* harmony import */ var _buildTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildTree */ "./src/buildTree.js");




class Tree{
    constructor(array){
        this.array=array;
        this.sortedArray=(0,_mergeSort__WEBPACK_IMPORTED_MODULE_1__.mergeSort)(this.array);
        this.length=this.sortedArray.length;
        this.root=(0,_buildTree__WEBPACK_IMPORTED_MODULE_2__.buildTree)(this.sortedArray, 0, this.length-1);
    }

    insert(value, node=this.root){
        if (node === null){
            node=new _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node(value);
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
        if (difference>1) return false;

        if (node.leftNode != null) return this.isBalanced(node.leftNode);
        if (node.rightNode !=null) return this.isBalanced(node.rightNode);
        
        return true;
    }

    rebalance(){
        let newarray=this.inOrder();
        this.root=(0,_buildTree__WEBPACK_IMPORTED_MODULE_2__.buildTree)(newarray, 0, newarray.length-1);
        return this.root;
    }
}



/***/ }),

/***/ "./src/buildTree.js":
/*!**************************!*\
  !*** ./src/buildTree.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildTree: () => (/* binding */ buildTree)
/* harmony export */ });
/* harmony import */ var _Node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node.js */ "./src/Node.js");


function buildTree(array, start, end){
    if (start>end) return null;

    let mid=parseInt((start+end)/2);
    let node=new _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node(array[mid]);
    node.leftNode=buildTree(array, start, mid-1);
    node.rightNode=buildTree(array, mid+1, end);
    return node;
}



/***/ }),

/***/ "./src/mergeSort.js":
/*!**************************!*\
  !*** ./src/mergeSort.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeSort: () => (/* binding */ mergeSort)
/* harmony export */ });
function mergeSort(array){
    if (array.length<2) return array;
    let leftside=array.slice(0, array.length/2 );
    let rightside=array.slice(array.length/2, array.length);
    return mergeSortedArrays(mergeSort(leftside),mergeSort(rightside))
}                

function mergeSortedArrays(array1, array2){
    let i=0;
    let j=0;
    let mergedArray=[];

    while(i<array1.length&&j<array2.length){
        if (array1[i]<array2[j]){
            mergedArray.push(array1[i]);
            i++;
        } else if (array1[i]>array2[j]){
            mergedArray.push(array2[j]);
            j++;}
            else {
                mergedArray.push(array1[i]);
                i++;
                j++;
            }
    }

    while(i<array1.length){
        mergedArray.push(array1[i]);
        i++;
    }

    while(j<array2.length){
        mergedArray.push(array2[j]);
        j++;
    }

    return mergedArray;
}



/***/ }),

/***/ "./src/prettyPrint.js":
/*!****************************!*\
  !*** ./src/prettyPrint.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prettyPrint: () => (/* binding */ prettyPrint)
/* harmony export */ });
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) return;
    
    if (node.rightNode !== null) {
      prettyPrint(node.rightNode, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.d}`);
    if (node.leftNode !== null) {
      prettyPrint(node.leftNode, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prettyPrint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prettyPrint */ "./src/prettyPrint.js");
/* harmony import */ var _Tree_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tree.js */ "./src/Tree.js");



let test=new _Tree_js__WEBPACK_IMPORTED_MODULE_1__.Tree([100, 20, 500, 10, 30, 34, 49, 65,43, 75, 53]);

(0,_prettyPrint__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(test.root);

test.insert(5);

(0,_prettyPrint__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(test.root);

test.delete(34);
(0,_prettyPrint__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(test.root);

console.log(test.find(100));

function divideByTwo(node){
    return node.d/2;
}

//console.log(test.levelOrder());
//console.log(test.levelOrderRecursive());
//console.log(test.levelOrder(divideByTwo));
//console.log(test.levelOrderRecursive(divideByTwo));
//console.log(test.preOrder());
//console.log(test.preOrder(divideByTwo));
//
//console.log(test.inOrder());
//console.log(test.inOrder(divideByTwo));
//
//console.log(test.postOrder());
//console.log(test.postOrder(divideByTwo));

 

 
 console.log(test.isBalanced());

 test.insert(600);
 test.insert(700);
 (0,_prettyPrint__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(test.root);
 console.log(test.isBalanced());

 let value=test.find(500);
 
 console.log(test.isBalanced(value));

 test.rebalance();
 (0,_prettyPrint__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(test.root);
 console.log(test.isBalanced());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LmpzIiwid2VicGFjazovL3RvcC0tYmluYXJ5LXNlYXJjaC10cmVlcy8uL3NyYy9UcmVlLmpzIiwid2VicGFjazovL3RvcC0tYmluYXJ5LXNlYXJjaC10cmVlcy8uL3NyYy9idWlsZFRyZWUuanMiLCJ3ZWJwYWNrOi8vdG9wLS1iaW5hcnktc2VhcmNoLXRyZWVzLy4vc3JjL21lcmdlU29ydC5qcyIsIndlYnBhY2s6Ly90b3AtLWJpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvcHJldHR5UHJpbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLS1iaW5hcnktc2VhcmNoLXRyZWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC0tYmluYXJ5LXNlYXJjaC10cmVlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLS1iaW5hcnktc2VhcmNoLXRyZWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLS1iaW5hcnktc2VhcmNoLXRyZWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLS1iaW5hcnktc2VhcmNoLXRyZWVzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5vZGV7XG4gICAgY29uc3RydWN0b3IoZCxsZWZ0Tm9kZT1udWxsLCByaWdodE5vZGU9bnVsbCl7XG4gICAgICAgIHRoaXMuZD1kO1xuICAgICAgICB0aGlzLmxlZnROb2RlPWxlZnROb2RlO1xuICAgICAgICB0aGlzLnJpZ2h0Tm9kZT1yaWdodE5vZGU7XG4gICAgfVxufVxuXG5leHBvcnQge05vZGV9OyIsImltcG9ydCB7Tm9kZX0gZnJvbSAnLi9Ob2RlLmpzJztcbmltcG9ydCB7bWVyZ2VTb3J0fSBmcm9tICcuL21lcmdlU29ydCc7XG5pbXBvcnQgeyBidWlsZFRyZWUgfSBmcm9tICcuL2J1aWxkVHJlZSc7XG5cbmNsYXNzIFRyZWV7XG4gICAgY29uc3RydWN0b3IoYXJyYXkpe1xuICAgICAgICB0aGlzLmFycmF5PWFycmF5O1xuICAgICAgICB0aGlzLnNvcnRlZEFycmF5PW1lcmdlU29ydCh0aGlzLmFycmF5KTtcbiAgICAgICAgdGhpcy5sZW5ndGg9dGhpcy5zb3J0ZWRBcnJheS5sZW5ndGg7XG4gICAgICAgIHRoaXMucm9vdD1idWlsZFRyZWUodGhpcy5zb3J0ZWRBcnJheSwgMCwgdGhpcy5sZW5ndGgtMSk7XG4gICAgfVxuXG4gICAgaW5zZXJ0KHZhbHVlLCBub2RlPXRoaXMucm9vdCl7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKXtcbiAgICAgICAgICAgIG5vZGU9bmV3IE5vZGUodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgPCBub2RlLmQpIG5vZGUubGVmdE5vZGU9dGhpcy5pbnNlcnQodmFsdWUsIG5vZGUubGVmdE5vZGUpO1xuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPiBub2RlLmQpIG5vZGUucmlnaHROb2RlPXRoaXMuaW5zZXJ0KHZhbHVlLCBub2RlLnJpZ2h0Tm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGRlbGV0ZSh2YWx1ZSwgbm9kZT10aGlzLnJvb3Qpe1xuICAgICAgICBpZiAodmFsdWUgPT09IG5vZGUuZClcbiAgICAgICAgICAgIGlmICgobm9kZS5sZWZ0Tm9kZT09PW51bGwpJiYobm9kZS5yaWdodE5vZGU9PT1udWxsKSlyZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChub2RlLmxlZnROb2RlID09PSBudWxsKSByZXR1cm4gbm9kZS5yaWdodE5vZGVcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5yaWdodE5vZGUgPT09IG51bGwpIHJldHVybiBub2RlLmxlZnROb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcGxhY2VtZW50VmFsdWU9dGhpcy5maW5kTmV4dEJpZ2dlc3Qobm9kZS5yaWdodE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKHJlcGxhY2VtZW50VmFsdWUuZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5kPXJlcGxhY2VtZW50VmFsdWUuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlIDwgbm9kZS5kKSBub2RlLmxlZnROb2RlPXRoaXMuZGVsZXRlKHZhbHVlLCBub2RlLmxlZnROb2RlKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID4gbm9kZS5kKSBub2RlLnJpZ2h0Tm9kZT10aGlzLmRlbGV0ZSh2YWx1ZSwgbm9kZS5yaWdodE5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBmaW5kTmV4dEJpZ2dlc3Qobm9kZSl7XG4gICAgICAgIGlmIChub2RlLmxlZnROb2RlID09PSBudWxsKSByZXR1cm4gbm9kZSAgXG4gICAgICAgICAgICBlbHNlIHJldHVybiB0aGlzLmZpbmROZXh0QmlnZ2VzdChub2RlLmxlZnROb2RlKTsgICAgICAgXG4gICAgfVxuXG4gICAgZmluZCh2YWx1ZSwgbm9kZT10aGlzLnJvb3Qpe1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkgcmV0dXJuIFwiVmFsdWUgbm90IGZvdW5kXCI7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbm9kZS5kKSByZXR1cm4gbm9kZTtcbiAgICAgICAgaWYgKHZhbHVlIDwgbm9kZS5kKSByZXR1cm4gdGhpcy5maW5kKHZhbHVlLCBub2RlLmxlZnROb2RlKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID4gbm9kZS5kKSByZXR1cm4gdGhpcy5maW5kKHZhbHVlLCBub2RlLnJpZ2h0Tm9kZSk7XG4gICAgfVxuXG4gICAgbGV2ZWxPcmRlcihpbnB1dEZ1bmN0aW9uPXRoaXMuY3JlYXRlQXJyYXksIHF1ZXVlPVt0aGlzLnJvb3RdKXtcbiAgICAgICAgbGV0IHJlc3VsdHNBcnJheT1bXTtcbiAgICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCAhPSAwKVxuICAgICAgICAgICAgeyAgIHJlc3VsdHNBcnJheS5wdXNoKGlucHV0RnVuY3Rpb24ocXVldWVbMF0pKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWVbMF0ubGVmdE5vZGUgIT0gbnVsbCkgcXVldWUucHVzaChxdWV1ZVswXS5sZWZ0Tm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlWzBdLnJpZ2h0Tm9kZSAhPSBudWxsKSBxdWV1ZS5wdXNoKHF1ZXVlWzBdLnJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICAgICAgcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHNBcnJheTtcbiAgICAgICAgfVxuXG4gICAgbGV2ZWxPcmRlclJlY3Vyc2l2ZShpbnB1dEZ1bmN0aW9uPXRoaXMuY3JlYXRlQXJyYXksIHF1ZXVlPVt0aGlzLnJvb3RdLCByZXN1bHRzQXJyYXk9W10pe1xuICAgICAgICBpZiAocXVldWUubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzdWx0c0FycmF5O1xuICAgICAgICBcbiAgICAgICAgcmVzdWx0c0FycmF5LnB1c2goaW5wdXRGdW5jdGlvbihxdWV1ZVswXSkpO1xuICAgICAgICBpZiAocXVldWVbMF0ubGVmdE5vZGUgIT0gbnVsbCkgcXVldWUucHVzaChxdWV1ZVswXS5sZWZ0Tm9kZSk7XG4gICAgICAgIGlmIChxdWV1ZVswXS5yaWdodE5vZGUgIT0gbnVsbCkgcXVldWUucHVzaChxdWV1ZVswXS5yaWdodE5vZGUpO1xuICAgICAgICBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5sZXZlbE9yZGVyUmVjdXJzaXZlKGlucHV0RnVuY3Rpb24sIHF1ZXVlLCByZXN1bHRzQXJyYXkpXG4gICAgfVxuXG4gICAgY3JlYXRlQXJyYXkobm9kZSlcbiAgICAgICB7cmV0dXJuIG5vZGUuZDsgfVxuXG4gICAgcHJlT3JkZXIoaW5wdXRGdW5jdGlvbj10aGlzLmNyZWF0ZUFycmF5LCBub2RlPXRoaXMucm9vdCwgcmVzdWx0c0FycmF5PVtdKXtcbiAgICAgICAgaWYgKG5vZGUgIT0gbnVsbClcbiAgICAgICAgICAgIHsgcmVzdWx0c0FycmF5LnB1c2goaW5wdXRGdW5jdGlvbihub2RlKSk7XG4gICAgICAgICAgICAgIHRoaXMucHJlT3JkZXIoaW5wdXRGdW5jdGlvbiwgbm9kZS5sZWZ0Tm9kZSwgcmVzdWx0c0FycmF5KTtcbiAgICAgICAgICAgICAgdGhpcy5wcmVPcmRlcihpbnB1dEZ1bmN0aW9uLCBub2RlLnJpZ2h0Tm9kZSwgcmVzdWx0c0FycmF5KTtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgcmV0dXJuIHJlc3VsdHNBcnJheTtcbiAgICB9XG5cbiAgICBpbk9yZGVyKGlucHV0RnVuY3Rpb249dGhpcy5jcmVhdGVBcnJheSwgbm9kZT10aGlzLnJvb3QsIHJlc3VsdHNBcnJheT1bXSl7XG4gICAgICAgIGlmIChub2RlICE9IG51bGwpXG4gICAgICAgICAgICB7IHRoaXMuaW5PcmRlcihpbnB1dEZ1bmN0aW9uLCBub2RlLmxlZnROb2RlLCByZXN1bHRzQXJyYXkpO1xuICAgICAgICAgICAgICByZXN1bHRzQXJyYXkucHVzaChpbnB1dEZ1bmN0aW9uKG5vZGUpKTtcbiAgICAgICAgICAgICAgdGhpcy5pbk9yZGVyKGlucHV0RnVuY3Rpb24sIG5vZGUucmlnaHROb2RlLCByZXN1bHRzQXJyYXkpO1xuICAgICAgICAgICAgfSAgIFxuICAgICAgICByZXR1cm4gcmVzdWx0c0FycmF5O1xuICAgIH1cblxuICAgIHBvc3RPcmRlcihpbnB1dEZ1bmN0aW9uPXRoaXMuY3JlYXRlQXJyYXksIG5vZGU9dGhpcy5yb290LCByZXN1bHRzQXJyYXk9W10pe1xuICAgICAgICBpZiAobm9kZSAhPSBudWxsKVxuICAgICAgICAgICAgeyB0aGlzLnBvc3RPcmRlcihpbnB1dEZ1bmN0aW9uLCBub2RlLmxlZnROb2RlLCByZXN1bHRzQXJyYXkpO1xuICAgICAgICAgICAgICB0aGlzLnBvc3RPcmRlcihpbnB1dEZ1bmN0aW9uLCBub2RlLnJpZ2h0Tm9kZSwgcmVzdWx0c0FycmF5KTtcbiAgICAgICAgICAgICAgcmVzdWx0c0FycmF5LnB1c2goaW5wdXRGdW5jdGlvbihub2RlKSk7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgIHJldHVybiByZXN1bHRzQXJyYXk7XG4gICAgfVxuXG4gICAgaGVpZ2h0KG5vZGU9dGhpcy5yb290KXtcbiAgICAgICAgaWYgKG5vZGUgIT0gbnVsbCkgXG4gICAgICAgICAgICB7IGxldCBsZWZ0SGVpZ2h0PXRoaXMuaGVpZ2h0KG5vZGUubGVmdE5vZGUpO1xuICAgICAgICAgICAgICBsZXQgcmlnaHRIZWlnaHQ9dGhpcy5oZWlnaHQobm9kZS5yaWdodE5vZGUpO1xuICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgobGVmdEhlaWdodCwgcmlnaHRIZWlnaHQgKSsxOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICAgXG4gICAgZGVwdGgobm9kZSwgdHJlZVZhbHVlPXRoaXMucm9vdCwgZGVwdGg9MCl7XG4gICAgICAgIGlmIChub2RlID09PSB0cmVlVmFsdWUpIHJldHVybiBkZXB0aDtcbiAgICAgICAgaWYgKG5vZGUuZCA8IHRyZWVWYWx1ZS5kKSByZXR1cm4gdGhpcy5kZXB0aChub2RlLCB0cmVlVmFsdWUubGVmdE5vZGUsZGVwdGgpKzE7XG4gICAgICAgIGlmIChub2RlLmQ+dHJlZVZhbHVlLmQpIHJldHVybiB0aGlzLmRlcHRoKG5vZGUsIHRyZWVWYWx1ZS5yaWdodE5vZGUpKzE7XG4gICAgfVxuXG4gICAgaXNCYWxhbmNlZChub2RlPXRoaXMucm9vdCl7XG4gICAgICAgIGxldCBkaWZmZXJlbmNlPU1hdGguYWJzKHRoaXMuaGVpZ2h0KG5vZGUubGVmdE5vZGUpLXRoaXMuaGVpZ2h0KG5vZGUucmlnaHROb2RlKSk7XG4gICAgICAgIGlmIChkaWZmZXJlbmNlPjEpIHJldHVybiBmYWxzZTtcblxuICAgICAgICBpZiAobm9kZS5sZWZ0Tm9kZSAhPSBudWxsKSByZXR1cm4gdGhpcy5pc0JhbGFuY2VkKG5vZGUubGVmdE5vZGUpO1xuICAgICAgICBpZiAobm9kZS5yaWdodE5vZGUgIT1udWxsKSByZXR1cm4gdGhpcy5pc0JhbGFuY2VkKG5vZGUucmlnaHROb2RlKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlYmFsYW5jZSgpe1xuICAgICAgICBsZXQgbmV3YXJyYXk9dGhpcy5pbk9yZGVyKCk7XG4gICAgICAgIHRoaXMucm9vdD1idWlsZFRyZWUobmV3YXJyYXksIDAsIG5ld2FycmF5Lmxlbmd0aC0xKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdDtcbiAgICB9XG59XG5cbmV4cG9ydCB7VHJlZX0iLCJpbXBvcnQge05vZGV9IGZyb20gJy4vTm9kZS5qcyc7XG5cbmZ1bmN0aW9uIGJ1aWxkVHJlZShhcnJheSwgc3RhcnQsIGVuZCl7XG4gICAgaWYgKHN0YXJ0PmVuZCkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgbWlkPXBhcnNlSW50KChzdGFydCtlbmQpLzIpO1xuICAgIGxldCBub2RlPW5ldyBOb2RlKGFycmF5W21pZF0pO1xuICAgIG5vZGUubGVmdE5vZGU9YnVpbGRUcmVlKGFycmF5LCBzdGFydCwgbWlkLTEpO1xuICAgIG5vZGUucmlnaHROb2RlPWJ1aWxkVHJlZShhcnJheSwgbWlkKzEsIGVuZCk7XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCB7YnVpbGRUcmVlfTsiLCJmdW5jdGlvbiBtZXJnZVNvcnQoYXJyYXkpe1xuICAgIGlmIChhcnJheS5sZW5ndGg8MikgcmV0dXJuIGFycmF5O1xuICAgIGxldCBsZWZ0c2lkZT1hcnJheS5zbGljZSgwLCBhcnJheS5sZW5ndGgvMiApO1xuICAgIGxldCByaWdodHNpZGU9YXJyYXkuc2xpY2UoYXJyYXkubGVuZ3RoLzIsIGFycmF5Lmxlbmd0aCk7XG4gICAgcmV0dXJuIG1lcmdlU29ydGVkQXJyYXlzKG1lcmdlU29ydChsZWZ0c2lkZSksbWVyZ2VTb3J0KHJpZ2h0c2lkZSkpXG59ICAgICAgICAgICAgICAgIFxuXG5mdW5jdGlvbiBtZXJnZVNvcnRlZEFycmF5cyhhcnJheTEsIGFycmF5Mil7XG4gICAgbGV0IGk9MDtcbiAgICBsZXQgaj0wO1xuICAgIGxldCBtZXJnZWRBcnJheT1bXTtcblxuICAgIHdoaWxlKGk8YXJyYXkxLmxlbmd0aCYmajxhcnJheTIubGVuZ3RoKXtcbiAgICAgICAgaWYgKGFycmF5MVtpXTxhcnJheTJbal0pe1xuICAgICAgICAgICAgbWVyZ2VkQXJyYXkucHVzaChhcnJheTFbaV0pO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9IGVsc2UgaWYgKGFycmF5MVtpXT5hcnJheTJbal0pe1xuICAgICAgICAgICAgbWVyZ2VkQXJyYXkucHVzaChhcnJheTJbal0pO1xuICAgICAgICAgICAgaisrO31cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lcmdlZEFycmF5LnB1c2goYXJyYXkxW2ldKTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIHdoaWxlKGk8YXJyYXkxLmxlbmd0aCl7XG4gICAgICAgIG1lcmdlZEFycmF5LnB1c2goYXJyYXkxW2ldKTtcbiAgICAgICAgaSsrO1xuICAgIH1cblxuICAgIHdoaWxlKGo8YXJyYXkyLmxlbmd0aCl7XG4gICAgICAgIG1lcmdlZEFycmF5LnB1c2goYXJyYXkyW2pdKTtcbiAgICAgICAgaisrO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZWRBcnJheTtcbn1cblxuZXhwb3J0IHttZXJnZVNvcnR9IiwiY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICAgIGlmIChub2RlID09PSBudWxsKSByZXR1cm47XG4gICAgXG4gICAgaWYgKG5vZGUucmlnaHROb2RlICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLnJpZ2h0Tm9kZSwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilIIgICBcIiA6IFwiICAgIFwifWAsIGZhbHNlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUuZH1gKTtcbiAgICBpZiAobm9kZS5sZWZ0Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5sZWZ0Tm9kZSwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBleHBvcnQge3ByZXR0eVByaW50fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHByZXR0eVByaW50IH0gZnJvbSAnLi9wcmV0dHlQcmludCc7XG5pbXBvcnQge1RyZWV9IGZyb20gJy4vVHJlZS5qcyc7XG5cbmxldCB0ZXN0PW5ldyBUcmVlKFsxMDAsIDIwLCA1MDAsIDEwLCAzMCwgMzQsIDQ5LCA2NSw0MywgNzUsIDUzXSk7XG5cbnByZXR0eVByaW50KHRlc3Qucm9vdCk7XG5cbnRlc3QuaW5zZXJ0KDUpO1xuXG5wcmV0dHlQcmludCh0ZXN0LnJvb3QpO1xuXG50ZXN0LmRlbGV0ZSgzNCk7XG5wcmV0dHlQcmludCh0ZXN0LnJvb3QpO1xuXG5jb25zb2xlLmxvZyh0ZXN0LmZpbmQoMTAwKSk7XG5cbmZ1bmN0aW9uIGRpdmlkZUJ5VHdvKG5vZGUpe1xuICAgIHJldHVybiBub2RlLmQvMjtcbn1cblxuLy9jb25zb2xlLmxvZyh0ZXN0LmxldmVsT3JkZXIoKSk7XG4vL2NvbnNvbGUubG9nKHRlc3QubGV2ZWxPcmRlclJlY3Vyc2l2ZSgpKTtcbi8vY29uc29sZS5sb2codGVzdC5sZXZlbE9yZGVyKGRpdmlkZUJ5VHdvKSk7XG4vL2NvbnNvbGUubG9nKHRlc3QubGV2ZWxPcmRlclJlY3Vyc2l2ZShkaXZpZGVCeVR3bykpO1xuLy9jb25zb2xlLmxvZyh0ZXN0LnByZU9yZGVyKCkpO1xuLy9jb25zb2xlLmxvZyh0ZXN0LnByZU9yZGVyKGRpdmlkZUJ5VHdvKSk7XG4vL1xuLy9jb25zb2xlLmxvZyh0ZXN0LmluT3JkZXIoKSk7XG4vL2NvbnNvbGUubG9nKHRlc3QuaW5PcmRlcihkaXZpZGVCeVR3bykpO1xuLy9cbi8vY29uc29sZS5sb2codGVzdC5wb3N0T3JkZXIoKSk7XG4vL2NvbnNvbGUubG9nKHRlc3QucG9zdE9yZGVyKGRpdmlkZUJ5VHdvKSk7XG5cbiBcblxuIFxuIGNvbnNvbGUubG9nKHRlc3QuaXNCYWxhbmNlZCgpKTtcblxuIHRlc3QuaW5zZXJ0KDYwMCk7XG4gdGVzdC5pbnNlcnQoNzAwKTtcbiBwcmV0dHlQcmludCh0ZXN0LnJvb3QpO1xuIGNvbnNvbGUubG9nKHRlc3QuaXNCYWxhbmNlZCgpKTtcblxuIGxldCB2YWx1ZT10ZXN0LmZpbmQoNTAwKTtcbiBcbiBjb25zb2xlLmxvZyh0ZXN0LmlzQmFsYW5jZWQodmFsdWUpKTtcblxuIHRlc3QucmViYWxhbmNlKCk7XG4gcHJldHR5UHJpbnQodGVzdC5yb290KTtcbiBjb25zb2xlLmxvZyh0ZXN0LmlzQmFsYW5jZWQoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=