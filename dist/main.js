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
        if (difference>1) return "Tree is not balanced";

        if (node.leftNode != null) return this.isBalanced(node.leftNode);
        if (node.rightNode !=null) return this.isBalanced(node.rightNode);
        
        return "Tree is balanced";
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





//Create a binary search tree from an array of random numbers < 100
let test=new _Tree_js__WEBPACK_IMPORTED_MODULE_1__.Tree([100, 20, 10, 30, 34, 49, 65,43, 75, 53]);

//print a visual representation of the tree
(0,_prettyPrint__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(test.root);

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
(0,_prettyPrint__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(test.root);

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
(0,_prettyPrint__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(test.root);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTitCO0FBQ087QUFDRTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHFEQUFTO0FBQ2xDO0FBQ0Esa0JBQWtCLHFEQUFTO0FBQzNCOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQUk7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IscURBQVM7QUFDM0I7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JJK0I7O0FBRS9CO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsMENBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU8sRUFBRSx5QkFBeUI7QUFDdkU7QUFDQSxtQkFBbUIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE9BQU87QUFDOUQ7QUFDQSxvQ0FBb0MsT0FBTyxFQUFFLHlCQUF5QjtBQUN0RTtBQUNBOztBQUVBOzs7Ozs7VUNaQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QztBQUNiOzs7O0FBSS9CO0FBQ0EsYUFBYSwwQ0FBSTs7QUFFakI7QUFDQSx5REFBVzs7QUFFWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlEQUFXOztBQUVYO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseURBQVcsWSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC0tYmluYXJ5LXNlYXJjaC10cmVlcy8uL3NyYy9Ob2RlLmpzIiwid2VicGFjazovL3RvcC0tYmluYXJ5LXNlYXJjaC10cmVlcy8uL3NyYy9UcmVlLmpzIiwid2VicGFjazovL3RvcC0tYmluYXJ5LXNlYXJjaC10cmVlcy8uL3NyYy9idWlsZFRyZWUuanMiLCJ3ZWJwYWNrOi8vdG9wLS1iaW5hcnktc2VhcmNoLXRyZWVzLy4vc3JjL21lcmdlU29ydC5qcyIsIndlYnBhY2s6Ly90b3AtLWJpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvcHJldHR5UHJpbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLS1iaW5hcnktc2VhcmNoLXRyZWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC0tYmluYXJ5LXNlYXJjaC10cmVlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLS1iaW5hcnktc2VhcmNoLXRyZWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLS1iaW5hcnktc2VhcmNoLXRyZWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLS1iaW5hcnktc2VhcmNoLXRyZWVzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5vZGV7XG4gICAgY29uc3RydWN0b3IoZCxsZWZ0Tm9kZT1udWxsLCByaWdodE5vZGU9bnVsbCl7XG4gICAgICAgIHRoaXMuZD1kO1xuICAgICAgICB0aGlzLmxlZnROb2RlPWxlZnROb2RlO1xuICAgICAgICB0aGlzLnJpZ2h0Tm9kZT1yaWdodE5vZGU7XG4gICAgfVxufVxuXG5leHBvcnQge05vZGV9OyIsImltcG9ydCB7Tm9kZX0gZnJvbSAnLi9Ob2RlLmpzJztcbmltcG9ydCB7bWVyZ2VTb3J0fSBmcm9tICcuL21lcmdlU29ydCc7XG5pbXBvcnQgeyBidWlsZFRyZWUgfSBmcm9tICcuL2J1aWxkVHJlZSc7XG5cbmNsYXNzIFRyZWV7XG4gICAgY29uc3RydWN0b3IoYXJyYXkpe1xuICAgICAgICB0aGlzLmFycmF5PWFycmF5O1xuICAgICAgICB0aGlzLnNvcnRlZEFycmF5PW1lcmdlU29ydCh0aGlzLmFycmF5KTtcbiAgICAgICAgdGhpcy5sZW5ndGg9dGhpcy5zb3J0ZWRBcnJheS5sZW5ndGg7XG4gICAgICAgIHRoaXMucm9vdD1idWlsZFRyZWUodGhpcy5zb3J0ZWRBcnJheSwgMCwgdGhpcy5sZW5ndGgtMSk7XG4gICAgfVxuXG4gICAgaW5zZXJ0KHZhbHVlLCBub2RlPXRoaXMucm9vdCl7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKXtcbiAgICAgICAgICAgIG5vZGU9bmV3IE5vZGUodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgPCBub2RlLmQpIG5vZGUubGVmdE5vZGU9dGhpcy5pbnNlcnQodmFsdWUsIG5vZGUubGVmdE5vZGUpO1xuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPiBub2RlLmQpIG5vZGUucmlnaHROb2RlPXRoaXMuaW5zZXJ0KHZhbHVlLCBub2RlLnJpZ2h0Tm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGRlbGV0ZSh2YWx1ZSwgbm9kZT10aGlzLnJvb3Qpe1xuICAgICAgICBpZiAodmFsdWUgPT09IG5vZGUuZClcbiAgICAgICAgICAgIGlmICgobm9kZS5sZWZ0Tm9kZT09PW51bGwpJiYobm9kZS5yaWdodE5vZGU9PT1udWxsKSlyZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChub2RlLmxlZnROb2RlID09PSBudWxsKSByZXR1cm4gbm9kZS5yaWdodE5vZGVcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5yaWdodE5vZGUgPT09IG51bGwpIHJldHVybiBub2RlLmxlZnROb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcGxhY2VtZW50VmFsdWU9dGhpcy5maW5kTmV4dEJpZ2dlc3Qobm9kZS5yaWdodE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKHJlcGxhY2VtZW50VmFsdWUuZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5kPXJlcGxhY2VtZW50VmFsdWUuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlIDwgbm9kZS5kKSBub2RlLmxlZnROb2RlPXRoaXMuZGVsZXRlKHZhbHVlLCBub2RlLmxlZnROb2RlKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID4gbm9kZS5kKSBub2RlLnJpZ2h0Tm9kZT10aGlzLmRlbGV0ZSh2YWx1ZSwgbm9kZS5yaWdodE5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBmaW5kTmV4dEJpZ2dlc3Qobm9kZSl7XG4gICAgICAgIGlmIChub2RlLmxlZnROb2RlID09PSBudWxsKSByZXR1cm4gbm9kZSAgXG4gICAgICAgICAgICBlbHNlIHJldHVybiB0aGlzLmZpbmROZXh0QmlnZ2VzdChub2RlLmxlZnROb2RlKTsgICAgICAgXG4gICAgfVxuXG4gICAgZmluZCh2YWx1ZSwgbm9kZT10aGlzLnJvb3Qpe1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkgcmV0dXJuIFwiVmFsdWUgbm90IGZvdW5kXCI7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbm9kZS5kKSByZXR1cm4gbm9kZTtcbiAgICAgICAgaWYgKHZhbHVlIDwgbm9kZS5kKSByZXR1cm4gdGhpcy5maW5kKHZhbHVlLCBub2RlLmxlZnROb2RlKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID4gbm9kZS5kKSByZXR1cm4gdGhpcy5maW5kKHZhbHVlLCBub2RlLnJpZ2h0Tm9kZSk7XG4gICAgfVxuXG4gICAgbGV2ZWxPcmRlcihpbnB1dEZ1bmN0aW9uPXRoaXMuY3JlYXRlQXJyYXksIHF1ZXVlPVt0aGlzLnJvb3RdKXtcbiAgICAgICAgbGV0IHJlc3VsdHNBcnJheT1bXTtcbiAgICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCAhPSAwKVxuICAgICAgICAgICAgeyAgIHJlc3VsdHNBcnJheS5wdXNoKGlucHV0RnVuY3Rpb24ocXVldWVbMF0pKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWVbMF0ubGVmdE5vZGUgIT0gbnVsbCkgcXVldWUucHVzaChxdWV1ZVswXS5sZWZ0Tm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlWzBdLnJpZ2h0Tm9kZSAhPSBudWxsKSBxdWV1ZS5wdXNoKHF1ZXVlWzBdLnJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICAgICAgcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHNBcnJheTtcbiAgICAgICAgfVxuXG4gICAgbGV2ZWxPcmRlclJlY3Vyc2l2ZShpbnB1dEZ1bmN0aW9uPXRoaXMuY3JlYXRlQXJyYXksIHF1ZXVlPVt0aGlzLnJvb3RdLCByZXN1bHRzQXJyYXk9W10pe1xuICAgICAgICBpZiAocXVldWUubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzdWx0c0FycmF5O1xuICAgICAgICBcbiAgICAgICAgcmVzdWx0c0FycmF5LnB1c2goaW5wdXRGdW5jdGlvbihxdWV1ZVswXSkpO1xuICAgICAgICBpZiAocXVldWVbMF0ubGVmdE5vZGUgIT0gbnVsbCkgcXVldWUucHVzaChxdWV1ZVswXS5sZWZ0Tm9kZSk7XG4gICAgICAgIGlmIChxdWV1ZVswXS5yaWdodE5vZGUgIT0gbnVsbCkgcXVldWUucHVzaChxdWV1ZVswXS5yaWdodE5vZGUpO1xuICAgICAgICBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5sZXZlbE9yZGVyUmVjdXJzaXZlKGlucHV0RnVuY3Rpb24sIHF1ZXVlLCByZXN1bHRzQXJyYXkpXG4gICAgfVxuXG4gICAgY3JlYXRlQXJyYXkobm9kZSlcbiAgICAgICB7cmV0dXJuIG5vZGUuZDsgfVxuXG4gICAgcHJlT3JkZXIoaW5wdXRGdW5jdGlvbj10aGlzLmNyZWF0ZUFycmF5LCBub2RlPXRoaXMucm9vdCwgcmVzdWx0c0FycmF5PVtdKXtcbiAgICAgICAgaWYgKG5vZGUgIT0gbnVsbClcbiAgICAgICAgICAgIHsgcmVzdWx0c0FycmF5LnB1c2goaW5wdXRGdW5jdGlvbihub2RlKSk7XG4gICAgICAgICAgICAgIHRoaXMucHJlT3JkZXIoaW5wdXRGdW5jdGlvbiwgbm9kZS5sZWZ0Tm9kZSwgcmVzdWx0c0FycmF5KTtcbiAgICAgICAgICAgICAgdGhpcy5wcmVPcmRlcihpbnB1dEZ1bmN0aW9uLCBub2RlLnJpZ2h0Tm9kZSwgcmVzdWx0c0FycmF5KTtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgcmV0dXJuIHJlc3VsdHNBcnJheTtcbiAgICB9XG5cbiAgICBpbk9yZGVyKGlucHV0RnVuY3Rpb249dGhpcy5jcmVhdGVBcnJheSwgbm9kZT10aGlzLnJvb3QsIHJlc3VsdHNBcnJheT1bXSl7XG4gICAgICAgIGlmIChub2RlICE9IG51bGwpXG4gICAgICAgICAgICB7IHRoaXMuaW5PcmRlcihpbnB1dEZ1bmN0aW9uLCBub2RlLmxlZnROb2RlLCByZXN1bHRzQXJyYXkpO1xuICAgICAgICAgICAgICByZXN1bHRzQXJyYXkucHVzaChpbnB1dEZ1bmN0aW9uKG5vZGUpKTtcbiAgICAgICAgICAgICAgdGhpcy5pbk9yZGVyKGlucHV0RnVuY3Rpb24sIG5vZGUucmlnaHROb2RlLCByZXN1bHRzQXJyYXkpO1xuICAgICAgICAgICAgfSAgIFxuICAgICAgICByZXR1cm4gcmVzdWx0c0FycmF5O1xuICAgIH1cblxuICAgIHBvc3RPcmRlcihpbnB1dEZ1bmN0aW9uPXRoaXMuY3JlYXRlQXJyYXksIG5vZGU9dGhpcy5yb290LCByZXN1bHRzQXJyYXk9W10pe1xuICAgICAgICBpZiAobm9kZSAhPSBudWxsKVxuICAgICAgICAgICAgeyB0aGlzLnBvc3RPcmRlcihpbnB1dEZ1bmN0aW9uLCBub2RlLmxlZnROb2RlLCByZXN1bHRzQXJyYXkpO1xuICAgICAgICAgICAgICB0aGlzLnBvc3RPcmRlcihpbnB1dEZ1bmN0aW9uLCBub2RlLnJpZ2h0Tm9kZSwgcmVzdWx0c0FycmF5KTtcbiAgICAgICAgICAgICAgcmVzdWx0c0FycmF5LnB1c2goaW5wdXRGdW5jdGlvbihub2RlKSk7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgIHJldHVybiByZXN1bHRzQXJyYXk7XG4gICAgfVxuXG4gICAgaGVpZ2h0KG5vZGU9dGhpcy5yb290KXtcbiAgICAgICAgaWYgKG5vZGUgIT0gbnVsbCkgXG4gICAgICAgICAgICB7IGxldCBsZWZ0SGVpZ2h0PXRoaXMuaGVpZ2h0KG5vZGUubGVmdE5vZGUpO1xuICAgICAgICAgICAgICBsZXQgcmlnaHRIZWlnaHQ9dGhpcy5oZWlnaHQobm9kZS5yaWdodE5vZGUpO1xuICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgobGVmdEhlaWdodCwgcmlnaHRIZWlnaHQgKSsxOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICAgXG4gICAgZGVwdGgobm9kZSwgdHJlZVZhbHVlPXRoaXMucm9vdCwgZGVwdGg9MCl7XG4gICAgICAgIGlmIChub2RlID09PSB0cmVlVmFsdWUpIHJldHVybiBkZXB0aDtcbiAgICAgICAgaWYgKG5vZGUuZCA8IHRyZWVWYWx1ZS5kKSByZXR1cm4gdGhpcy5kZXB0aChub2RlLCB0cmVlVmFsdWUubGVmdE5vZGUsZGVwdGgpKzE7XG4gICAgICAgIGlmIChub2RlLmQ+dHJlZVZhbHVlLmQpIHJldHVybiB0aGlzLmRlcHRoKG5vZGUsIHRyZWVWYWx1ZS5yaWdodE5vZGUpKzE7XG4gICAgfVxuXG4gICAgaXNCYWxhbmNlZChub2RlPXRoaXMucm9vdCl7XG4gICAgICAgIGxldCBkaWZmZXJlbmNlPU1hdGguYWJzKHRoaXMuaGVpZ2h0KG5vZGUubGVmdE5vZGUpLXRoaXMuaGVpZ2h0KG5vZGUucmlnaHROb2RlKSk7XG4gICAgICAgIGlmIChkaWZmZXJlbmNlPjEpIHJldHVybiBcIlRyZWUgaXMgbm90IGJhbGFuY2VkXCI7XG5cbiAgICAgICAgaWYgKG5vZGUubGVmdE5vZGUgIT0gbnVsbCkgcmV0dXJuIHRoaXMuaXNCYWxhbmNlZChub2RlLmxlZnROb2RlKTtcbiAgICAgICAgaWYgKG5vZGUucmlnaHROb2RlICE9bnVsbCkgcmV0dXJuIHRoaXMuaXNCYWxhbmNlZChub2RlLnJpZ2h0Tm9kZSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gXCJUcmVlIGlzIGJhbGFuY2VkXCI7XG4gICAgfVxuXG4gICAgcmViYWxhbmNlKCl7XG4gICAgICAgIGxldCBuZXdhcnJheT10aGlzLmluT3JkZXIoKTtcbiAgICAgICAgdGhpcy5yb290PWJ1aWxkVHJlZShuZXdhcnJheSwgMCwgbmV3YXJyYXkubGVuZ3RoLTEpO1xuICAgICAgICByZXR1cm4gdGhpcy5yb290O1xuICAgIH1cbn1cblxuZXhwb3J0IHtUcmVlfSIsImltcG9ydCB7Tm9kZX0gZnJvbSAnLi9Ob2RlLmpzJztcblxuZnVuY3Rpb24gYnVpbGRUcmVlKGFycmF5LCBzdGFydCwgZW5kKXtcbiAgICBpZiAoc3RhcnQ+ZW5kKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCBtaWQ9cGFyc2VJbnQoKHN0YXJ0K2VuZCkvMik7XG4gICAgbGV0IG5vZGU9bmV3IE5vZGUoYXJyYXlbbWlkXSk7XG4gICAgbm9kZS5sZWZ0Tm9kZT1idWlsZFRyZWUoYXJyYXksIHN0YXJ0LCBtaWQtMSk7XG4gICAgbm9kZS5yaWdodE5vZGU9YnVpbGRUcmVlKGFycmF5LCBtaWQrMSwgZW5kKTtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IHtidWlsZFRyZWV9OyIsImZ1bmN0aW9uIG1lcmdlU29ydChhcnJheSl7XG4gICAgaWYgKGFycmF5Lmxlbmd0aDwyKSByZXR1cm4gYXJyYXk7XG4gICAgbGV0IGxlZnRzaWRlPWFycmF5LnNsaWNlKDAsIGFycmF5Lmxlbmd0aC8yICk7XG4gICAgbGV0IHJpZ2h0c2lkZT1hcnJheS5zbGljZShhcnJheS5sZW5ndGgvMiwgYXJyYXkubGVuZ3RoKTtcbiAgICByZXR1cm4gbWVyZ2VTb3J0ZWRBcnJheXMobWVyZ2VTb3J0KGxlZnRzaWRlKSxtZXJnZVNvcnQocmlnaHRzaWRlKSlcbn0gICAgICAgICAgICAgICAgXG5cbmZ1bmN0aW9uIG1lcmdlU29ydGVkQXJyYXlzKGFycmF5MSwgYXJyYXkyKXtcbiAgICBsZXQgaT0wO1xuICAgIGxldCBqPTA7XG4gICAgbGV0IG1lcmdlZEFycmF5PVtdO1xuXG4gICAgd2hpbGUoaTxhcnJheTEubGVuZ3RoJiZqPGFycmF5Mi5sZW5ndGgpe1xuICAgICAgICBpZiAoYXJyYXkxW2ldPGFycmF5MltqXSl7XG4gICAgICAgICAgICBtZXJnZWRBcnJheS5wdXNoKGFycmF5MVtpXSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJyYXkxW2ldPmFycmF5MltqXSl7XG4gICAgICAgICAgICBtZXJnZWRBcnJheS5wdXNoKGFycmF5MltqXSk7XG4gICAgICAgICAgICBqKys7fVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkQXJyYXkucHVzaChhcnJheTFbaV0pO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgd2hpbGUoaTxhcnJheTEubGVuZ3RoKXtcbiAgICAgICAgbWVyZ2VkQXJyYXkucHVzaChhcnJheTFbaV0pO1xuICAgICAgICBpKys7XG4gICAgfVxuXG4gICAgd2hpbGUoajxhcnJheTIubGVuZ3RoKXtcbiAgICAgICAgbWVyZ2VkQXJyYXkucHVzaChhcnJheTJbal0pO1xuICAgICAgICBqKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlZEFycmF5O1xufVxuXG5leHBvcnQge21lcmdlU29ydH0iLCJjb25zdCBwcmV0dHlQcmludCA9IChub2RlLCBwcmVmaXggPSBcIlwiLCBpc0xlZnQgPSB0cnVlKSA9PiB7XG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHJldHVybjtcbiAgICBcbiAgICBpZiAobm9kZS5yaWdodE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUucmlnaHROb2RlLCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUgiAgIFwiIDogXCIgICAgXCJ9YCwgZmFsc2UpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUlOKUgOKUgCBcIiA6IFwi4pSM4pSA4pSAIFwifSR7bm9kZS5kfWApO1xuICAgIGlmIChub2RlLmxlZnROb2RlICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLmxlZnROb2RlLCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIiAgICBcIiA6IFwi4pSCICAgXCJ9YCwgdHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGV4cG9ydCB7cHJldHR5UHJpbnR9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcHJldHR5UHJpbnQgfSBmcm9tICcuL3ByZXR0eVByaW50JztcbmltcG9ydCB7VHJlZX0gZnJvbSAnLi9UcmVlLmpzJztcblxuXG5cbi8vQ3JlYXRlIGEgYmluYXJ5IHNlYXJjaCB0cmVlIGZyb20gYW4gYXJyYXkgb2YgcmFuZG9tIG51bWJlcnMgPCAxMDBcbmxldCB0ZXN0PW5ldyBUcmVlKFsxMDAsIDIwLCAxMCwgMzAsIDM0LCA0OSwgNjUsNDMsIDc1LCA1M10pO1xuXG4vL3ByaW50IGEgdmlzdWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0cmVlXG5wcmV0dHlQcmludCh0ZXN0LnJvb3QpO1xuXG4vL0NvbmZpcm0gdGhhdCB0aGUgdHJlZSBpcyBiYWxhbmNlZCBieSBjYWxsaW5nIGlzQmFsYW5jZWQuXG5jb25zb2xlLmxvZyh0ZXN0LmlzQmFsYW5jZWQoKSk7XG5cbi8vUHJpbnQgb3V0IGFsbCBlbGVtZW50cyBpbiBsZXZlbCwgcHJlLCBwb3N0LCBhbmQgaW4gb3JkZXIuXG5jb25zb2xlLmxvZyh0ZXN0LmxldmVsT3JkZXIoKSk7XG5jb25zb2xlLmxvZyh0ZXN0LnByZU9yZGVyKCkpO1xuY29uc29sZS5sb2codGVzdC5wb3N0T3JkZXIoKSk7XG5jb25zb2xlLmxvZyh0ZXN0LmluT3JkZXIoKSk7XG5cbi8vVW5iYWxhbmNlIHRoZSB0cmVlIGJ5IGFkZGluZyBzZXZlcmFsIG51bWJlcnMgPiAxMDAuXG50ZXN0Lmluc2VydCgxMDEpO1xudGVzdC5pbnNlcnQoMTAyKTtcbnRlc3QuaW5zZXJ0KDIwMCk7XG5cbi8vQ29uZmlybSB0aGF0IHRoZSB0cmVlIGlzIHVuYmFsYW5jZWQgYnkgY2FsbGluZyBpc0JhbGFuY2VkLlxuY29uc29sZS5sb2codGVzdC5pc0JhbGFuY2VkKCkpO1xuXG4vL3ByaW50IGEgdmlzdWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0cmVlXG5wcmV0dHlQcmludCh0ZXN0LnJvb3QpO1xuXG4vL0JhbGFuY2UgdGhlIHRyZWUgYnkgY2FsbGluZyByZWJhbGFuY2UuXG50ZXN0LnJlYmFsYW5jZSgpO1xuXG4vL0NvbmZpcm0gdGhhdCB0aGUgdHJlZSBpcyBiYWxhbmNlZCBieSBjYWxsaW5nIGlzQmFsYW5jZWQuXG5jb25zb2xlLmxvZyh0ZXN0LmlzQmFsYW5jZWQoKSk7XG5cbi8vUHJpbnQgb3V0IGFsbCBlbGVtZW50cyBpbiBsZXZlbCwgcHJlLCBwb3N0LCBhbmQgaW4gb3JkZXIuXG5jb25zb2xlLmxvZyh0ZXN0LmxldmVsT3JkZXIoKSk7XG5jb25zb2xlLmxvZyh0ZXN0LnByZU9yZGVyKCkpO1xuY29uc29sZS5sb2codGVzdC5wb3N0T3JkZXIoKSk7XG5jb25zb2xlLmxvZyh0ZXN0LmluT3JkZXIoKSk7XG5cbi8vcHJpbnQgYSB2aXN1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRyZWVcbnByZXR0eVByaW50KHRlc3Qucm9vdCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9