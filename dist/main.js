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
        if (value === node.d) return node;
        if (value < node.d) return this.find(value, node.leftNode)
            else return this.find(value, node.rightNode)
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



let test=new _Tree_js__WEBPACK_IMPORTED_MODULE_1__.Tree([100, 20, 500, 10, 30, 34, 49, 65]);

(0,_prettyPrint__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(test.root);

test.insert(5);

(0,_prettyPrint__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(test.root);

test.delete(34);
(0,_prettyPrint__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(test.root);

console.log(test.find(100));

function divideByTwo(node){
    return node.d/2;
}

console.log(test.levelOrder());
console.log(test.levelOrderRecursive());
console.log(test.levelOrder(divideByTwo));
console.log(test.levelOrderRecursive(divideByTwo));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTitCO0FBQ087QUFDRTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHFEQUFTO0FBQ2xDO0FBQ0Esa0JBQWtCLHFEQUFTO0FBQzNCOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQUk7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRStCOztBQUUvQjtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLDBDQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPLEVBQUUseUJBQXlCO0FBQ3ZFO0FBQ0EsbUJBQW1CLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxPQUFPO0FBQzlEO0FBQ0Esb0NBQW9DLE9BQU8sRUFBRSx5QkFBeUI7QUFDdEU7QUFDQTs7QUFFQTs7Ozs7O1VDWkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONEM7QUFDYjs7QUFFL0IsYUFBYSwwQ0FBSTs7QUFFakIseURBQVc7O0FBRVg7O0FBRUEseURBQVc7O0FBRVg7QUFDQSx5REFBVzs7QUFFWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtLWJpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvTm9kZS5qcyIsIndlYnBhY2s6Ly90b3AtLWJpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvVHJlZS5qcyIsIndlYnBhY2s6Ly90b3AtLWJpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvYnVpbGRUcmVlLmpzIiwid2VicGFjazovL3RvcC0tYmluYXJ5LXNlYXJjaC10cmVlcy8uL3NyYy9tZXJnZVNvcnQuanMiLCJ3ZWJwYWNrOi8vdG9wLS1iaW5hcnktc2VhcmNoLXRyZWVzLy4vc3JjL3ByZXR0eVByaW50LmpzIiwid2VicGFjazovL3RvcC0tYmluYXJ5LXNlYXJjaC10cmVlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtLWJpbmFyeS1zZWFyY2gtdHJlZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC0tYmluYXJ5LXNlYXJjaC10cmVlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC0tYmluYXJ5LXNlYXJjaC10cmVlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC0tYmluYXJ5LXNlYXJjaC10cmVlcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBOb2Rle1xuICAgIGNvbnN0cnVjdG9yKGQsbGVmdE5vZGU9bnVsbCwgcmlnaHROb2RlPW51bGwpe1xuICAgICAgICB0aGlzLmQ9ZDtcbiAgICAgICAgdGhpcy5sZWZ0Tm9kZT1sZWZ0Tm9kZTtcbiAgICAgICAgdGhpcy5yaWdodE5vZGU9cmlnaHROb2RlO1xuICAgIH1cbn1cblxuZXhwb3J0IHtOb2RlfTsiLCJpbXBvcnQge05vZGV9IGZyb20gJy4vTm9kZS5qcyc7XG5pbXBvcnQge21lcmdlU29ydH0gZnJvbSAnLi9tZXJnZVNvcnQnO1xuaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSAnLi9idWlsZFRyZWUnO1xuXG5jbGFzcyBUcmVle1xuICAgIGNvbnN0cnVjdG9yKGFycmF5KXtcbiAgICAgICAgdGhpcy5hcnJheT1hcnJheTtcbiAgICAgICAgdGhpcy5zb3J0ZWRBcnJheT1tZXJnZVNvcnQodGhpcy5hcnJheSk7XG4gICAgICAgIHRoaXMubGVuZ3RoPXRoaXMuc29ydGVkQXJyYXkubGVuZ3RoO1xuICAgICAgICB0aGlzLnJvb3Q9YnVpbGRUcmVlKHRoaXMuc29ydGVkQXJyYXksIDAsIHRoaXMubGVuZ3RoLTEpO1xuICAgIH1cblxuICAgIGluc2VydCh2YWx1ZSwgbm9kZT10aGlzLnJvb3Qpe1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCl7XG4gICAgICAgICAgICBub2RlPW5ldyBOb2RlKHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlIDwgbm9kZS5kKSBub2RlLmxlZnROb2RlPXRoaXMuaW5zZXJ0KHZhbHVlLCBub2RlLmxlZnROb2RlKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID4gbm9kZS5kKSBub2RlLnJpZ2h0Tm9kZT10aGlzLmluc2VydCh2YWx1ZSwgbm9kZS5yaWdodE5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBkZWxldGUodmFsdWUsIG5vZGU9dGhpcy5yb290KXtcbiAgICAgICAgaWYgKHZhbHVlID09PSBub2RlLmQpXG4gICAgICAgICAgICBpZiAoKG5vZGUubGVmdE5vZGU9PT1udWxsKSYmKG5vZGUucmlnaHROb2RlPT09bnVsbCkpcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5sZWZ0Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIG5vZGUucmlnaHROb2RlXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUucmlnaHROb2RlID09PSBudWxsKSByZXR1cm4gbm9kZS5sZWZ0Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXBsYWNlbWVudFZhbHVlPXRoaXMuZmluZE5leHRCaWdnZXN0KG5vZGUucmlnaHROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZShyZXBsYWNlbWVudFZhbHVlLmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZD1yZXBsYWNlbWVudFZhbHVlLmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA8IG5vZGUuZCkgbm9kZS5sZWZ0Tm9kZT10aGlzLmRlbGV0ZSh2YWx1ZSwgbm9kZS5sZWZ0Tm9kZSk7XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IG5vZGUuZCkgbm9kZS5yaWdodE5vZGU9dGhpcy5kZWxldGUodmFsdWUsIG5vZGUucmlnaHROb2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgZmluZE5leHRCaWdnZXN0KG5vZGUpe1xuICAgICAgICBpZiAobm9kZS5sZWZ0Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIG5vZGUgIFxuICAgICAgICAgICAgZWxzZSByZXR1cm4gdGhpcy5maW5kTmV4dEJpZ2dlc3Qobm9kZS5sZWZ0Tm9kZSk7ICAgICAgIFxuICAgIH1cblxuICAgIGZpbmQodmFsdWUsIG5vZGU9dGhpcy5yb290KXtcbiAgICAgICAgaWYgKHZhbHVlID09PSBub2RlLmQpIHJldHVybiBub2RlO1xuICAgICAgICBpZiAodmFsdWUgPCBub2RlLmQpIHJldHVybiB0aGlzLmZpbmQodmFsdWUsIG5vZGUubGVmdE5vZGUpXG4gICAgICAgICAgICBlbHNlIHJldHVybiB0aGlzLmZpbmQodmFsdWUsIG5vZGUucmlnaHROb2RlKVxuICAgIH1cblxuICAgIGxldmVsT3JkZXIoaW5wdXRGdW5jdGlvbj10aGlzLmNyZWF0ZUFycmF5LCBxdWV1ZT1bdGhpcy5yb290XSl7XG4gICAgICAgIGxldCByZXN1bHRzQXJyYXk9W107XG4gICAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggIT0gMClcbiAgICAgICAgICAgIHsgICByZXN1bHRzQXJyYXkucHVzaChpbnB1dEZ1bmN0aW9uKHF1ZXVlWzBdKSk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlWzBdLmxlZnROb2RlICE9IG51bGwpIHF1ZXVlLnB1c2gocXVldWVbMF0ubGVmdE5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChxdWV1ZVswXS5yaWdodE5vZGUgIT0gbnVsbCkgcXVldWUucHVzaChxdWV1ZVswXS5yaWdodE5vZGUpO1xuICAgICAgICAgICAgICAgIHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzQXJyYXk7XG4gICAgICAgIH1cblxuICAgIGxldmVsT3JkZXJSZWN1cnNpdmUoaW5wdXRGdW5jdGlvbj10aGlzLmNyZWF0ZUFycmF5LCBxdWV1ZT1bdGhpcy5yb290XSwgcmVzdWx0c0FycmF5PVtdKXtcbiAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc3VsdHNBcnJheTtcbiAgICAgICAgXG4gICAgICAgIHJlc3VsdHNBcnJheS5wdXNoKGlucHV0RnVuY3Rpb24ocXVldWVbMF0pKTtcbiAgICAgICAgaWYgKHF1ZXVlWzBdLmxlZnROb2RlICE9IG51bGwpIHF1ZXVlLnB1c2gocXVldWVbMF0ubGVmdE5vZGUpO1xuICAgICAgICBpZiAocXVldWVbMF0ucmlnaHROb2RlICE9IG51bGwpIHF1ZXVlLnB1c2gocXVldWVbMF0ucmlnaHROb2RlKTtcbiAgICAgICAgcXVldWUuc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubGV2ZWxPcmRlclJlY3Vyc2l2ZShpbnB1dEZ1bmN0aW9uLCBxdWV1ZSwgcmVzdWx0c0FycmF5KVxuICAgIH1cblxuICAgIGNyZWF0ZUFycmF5KG5vZGUpXG4gICAgICAge3JldHVybiBub2RlLmQ7IH1cbiAgICAgICAgIFxufVxuXG5leHBvcnQge1RyZWV9IiwiaW1wb3J0IHtOb2RlfSBmcm9tICcuL05vZGUuanMnO1xuXG5mdW5jdGlvbiBidWlsZFRyZWUoYXJyYXksIHN0YXJ0LCBlbmQpe1xuICAgIGlmIChzdGFydD5lbmQpIHJldHVybiBudWxsO1xuXG4gICAgbGV0IG1pZD1wYXJzZUludCgoc3RhcnQrZW5kKS8yKTtcbiAgICBsZXQgbm9kZT1uZXcgTm9kZShhcnJheVttaWRdKTtcbiAgICBub2RlLmxlZnROb2RlPWJ1aWxkVHJlZShhcnJheSwgc3RhcnQsIG1pZC0xKTtcbiAgICBub2RlLnJpZ2h0Tm9kZT1idWlsZFRyZWUoYXJyYXksIG1pZCsxLCBlbmQpO1xuICAgIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQge2J1aWxkVHJlZX07IiwiZnVuY3Rpb24gbWVyZ2VTb3J0KGFycmF5KXtcbiAgICBpZiAoYXJyYXkubGVuZ3RoPDIpIHJldHVybiBhcnJheTtcbiAgICBsZXQgbGVmdHNpZGU9YXJyYXkuc2xpY2UoMCwgYXJyYXkubGVuZ3RoLzIgKTtcbiAgICBsZXQgcmlnaHRzaWRlPWFycmF5LnNsaWNlKGFycmF5Lmxlbmd0aC8yLCBhcnJheS5sZW5ndGgpO1xuICAgIHJldHVybiBtZXJnZVNvcnRlZEFycmF5cyhtZXJnZVNvcnQobGVmdHNpZGUpLG1lcmdlU29ydChyaWdodHNpZGUpKVxufSAgICAgICAgICAgICAgICBcblxuZnVuY3Rpb24gbWVyZ2VTb3J0ZWRBcnJheXMoYXJyYXkxLCBhcnJheTIpe1xuICAgIGxldCBpPTA7XG4gICAgbGV0IGo9MDtcbiAgICBsZXQgbWVyZ2VkQXJyYXk9W107XG5cbiAgICB3aGlsZShpPGFycmF5MS5sZW5ndGgmJmo8YXJyYXkyLmxlbmd0aCl7XG4gICAgICAgIGlmIChhcnJheTFbaV08YXJyYXkyW2pdKXtcbiAgICAgICAgICAgIG1lcmdlZEFycmF5LnB1c2goYXJyYXkxW2ldKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfSBlbHNlIGlmIChhcnJheTFbaV0+YXJyYXkyW2pdKXtcbiAgICAgICAgICAgIG1lcmdlZEFycmF5LnB1c2goYXJyYXkyW2pdKTtcbiAgICAgICAgICAgIGorKzt9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRBcnJheS5wdXNoKGFycmF5MVtpXSk7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICB3aGlsZShpPGFycmF5MS5sZW5ndGgpe1xuICAgICAgICBtZXJnZWRBcnJheS5wdXNoKGFycmF5MVtpXSk7XG4gICAgICAgIGkrKztcbiAgICB9XG5cbiAgICB3aGlsZShqPGFycmF5Mi5sZW5ndGgpe1xuICAgICAgICBtZXJnZWRBcnJheS5wdXNoKGFycmF5MltqXSk7XG4gICAgICAgIGorKztcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2VkQXJyYXk7XG59XG5cbmV4cG9ydCB7bWVyZ2VTb3J0fSIsImNvbnN0IHByZXR0eVByaW50ID0gKG5vZGUsIHByZWZpeCA9IFwiXCIsIGlzTGVmdCA9IHRydWUpID0+IHtcbiAgICBpZiAobm9kZSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIFxuICAgIGlmIChub2RlLnJpZ2h0Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5yaWdodE5vZGUsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLCBmYWxzZSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSU4pSA4pSAIFwiIDogXCLilIzilIDilIAgXCJ9JHtub2RlLmR9YCk7XG4gICAgaWYgKG5vZGUubGVmdE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUubGVmdE5vZGUsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgZXhwb3J0IHtwcmV0dHlQcmludH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwcmV0dHlQcmludCB9IGZyb20gJy4vcHJldHR5UHJpbnQnO1xuaW1wb3J0IHtUcmVlfSBmcm9tICcuL1RyZWUuanMnO1xuXG5sZXQgdGVzdD1uZXcgVHJlZShbMTAwLCAyMCwgNTAwLCAxMCwgMzAsIDM0LCA0OSwgNjVdKTtcblxucHJldHR5UHJpbnQodGVzdC5yb290KTtcblxudGVzdC5pbnNlcnQoNSk7XG5cbnByZXR0eVByaW50KHRlc3Qucm9vdCk7XG5cbnRlc3QuZGVsZXRlKDM0KTtcbnByZXR0eVByaW50KHRlc3Qucm9vdCk7XG5cbmNvbnNvbGUubG9nKHRlc3QuZmluZCgxMDApKTtcblxuZnVuY3Rpb24gZGl2aWRlQnlUd28obm9kZSl7XG4gICAgcmV0dXJuIG5vZGUuZC8yO1xufVxuXG5jb25zb2xlLmxvZyh0ZXN0LmxldmVsT3JkZXIoKSk7XG5jb25zb2xlLmxvZyh0ZXN0LmxldmVsT3JkZXJSZWN1cnNpdmUoKSk7XG5jb25zb2xlLmxvZyh0ZXN0LmxldmVsT3JkZXIoZGl2aWRlQnlUd28pKTtcbmNvbnNvbGUubG9nKHRlc3QubGV2ZWxPcmRlclJlY3Vyc2l2ZShkaXZpZGVCeVR3bykpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==