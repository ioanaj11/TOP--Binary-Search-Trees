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
                            let replacementValue=this.findReplacement(node.rightNode);
                            this.delete(replacementValue.d);
                            node.d=replacementValue.d;
                            return node;
                            }

        if (value < node.d) node.leftNode=this.delete(value, node.leftNode);
            else if (value > node.d) node.rightNode=this.delete(value, node.rightNode);
        return node;
    }

    findReplacement(node){
        if (node.leftNode === null) return node  
            else return this.findReplacement(node.leftNode);       
    }

    find(value){

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



let test=new _Tree_js__WEBPACK_IMPORTED_MODULE_1__.Tree([100, 20, 500, 10, 30, 34, 49, 65]);

console.log(test.sortedArray);
console.log(test.length);
console.log(test.root);
console.log((0,_prettyPrint__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(test.root));
console.log(test.root.d);
test.insert(5);
test.insert(12);
test.insert(3);
test.insert(70);
test.insert(32);

console.log((0,_prettyPrint__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(test.root));

test.delete(34);
console.log((0,_prettyPrint__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(test.root));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTitCO0FBQ087QUFDRTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHFEQUFTO0FBQ2xDO0FBQ0Esa0JBQWtCLHFEQUFTO0FBQzNCOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQUk7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEQrQjs7QUFFL0I7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiwwQ0FBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTyxFQUFFLHlCQUF5QjtBQUN2RTtBQUNBLG1CQUFtQixPQUFPLEVBQUUseUJBQXlCLEVBQUUsT0FBTztBQUM5RDtBQUNBLG9DQUFvQyxPQUFPLEVBQUUseUJBQXlCO0FBQ3RFO0FBQ0E7O0FBRUE7Ozs7OztVQ1pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ2I7O0FBRS9CLGFBQWEsMENBQUk7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBLFlBQVkseURBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVkseURBQVc7O0FBRXZCO0FBQ0EsWUFBWSx5REFBVyxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLS1iaW5hcnktc2VhcmNoLXRyZWVzLy4vc3JjL05vZGUuanMiLCJ3ZWJwYWNrOi8vdG9wLS1iaW5hcnktc2VhcmNoLXRyZWVzLy4vc3JjL1RyZWUuanMiLCJ3ZWJwYWNrOi8vdG9wLS1iaW5hcnktc2VhcmNoLXRyZWVzLy4vc3JjL2J1aWxkVHJlZS5qcyIsIndlYnBhY2s6Ly90b3AtLWJpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvbWVyZ2VTb3J0LmpzIiwid2VicGFjazovL3RvcC0tYmluYXJ5LXNlYXJjaC10cmVlcy8uL3NyYy9wcmV0dHlQcmludC5qcyIsIndlYnBhY2s6Ly90b3AtLWJpbmFyeS1zZWFyY2gtdHJlZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLS1iaW5hcnktc2VhcmNoLXRyZWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtLWJpbmFyeS1zZWFyY2gtdHJlZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtLWJpbmFyeS1zZWFyY2gtdHJlZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtLWJpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTm9kZXtcbiAgICBjb25zdHJ1Y3RvcihkLGxlZnROb2RlPW51bGwsIHJpZ2h0Tm9kZT1udWxsKXtcbiAgICAgICAgdGhpcy5kPWQ7XG4gICAgICAgIHRoaXMubGVmdE5vZGU9bGVmdE5vZGU7XG4gICAgICAgIHRoaXMucmlnaHROb2RlPXJpZ2h0Tm9kZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7Tm9kZX07IiwiaW1wb3J0IHtOb2RlfSBmcm9tICcuL05vZGUuanMnO1xuaW1wb3J0IHttZXJnZVNvcnR9IGZyb20gJy4vbWVyZ2VTb3J0JztcbmltcG9ydCB7IGJ1aWxkVHJlZSB9IGZyb20gJy4vYnVpbGRUcmVlJztcblxuY2xhc3MgVHJlZXtcbiAgICBjb25zdHJ1Y3RvcihhcnJheSl7XG4gICAgICAgIHRoaXMuYXJyYXk9YXJyYXk7XG4gICAgICAgIHRoaXMuc29ydGVkQXJyYXk9bWVyZ2VTb3J0KHRoaXMuYXJyYXkpO1xuICAgICAgICB0aGlzLmxlbmd0aD10aGlzLnNvcnRlZEFycmF5Lmxlbmd0aDtcbiAgICAgICAgdGhpcy5yb290PWJ1aWxkVHJlZSh0aGlzLnNvcnRlZEFycmF5LCAwLCB0aGlzLmxlbmd0aC0xKTtcbiAgICB9XG5cbiAgICBpbnNlcnQodmFsdWUsIG5vZGU9dGhpcy5yb290KXtcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpe1xuICAgICAgICAgICAgbm9kZT1uZXcgTm9kZSh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA8IG5vZGUuZCkgbm9kZS5sZWZ0Tm9kZT10aGlzLmluc2VydCh2YWx1ZSwgbm9kZS5sZWZ0Tm9kZSk7XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IG5vZGUuZCkgbm9kZS5yaWdodE5vZGU9dGhpcy5pbnNlcnQodmFsdWUsIG5vZGUucmlnaHROb2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgZGVsZXRlKHZhbHVlLCBub2RlPXRoaXMucm9vdCl7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbm9kZS5kKVxuICAgICAgICAgICAgaWYgKChub2RlLmxlZnROb2RlPT09bnVsbCkmJihub2RlLnJpZ2h0Tm9kZT09PW51bGwpKXJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUubGVmdE5vZGUgPT09IG51bGwpIHJldHVybiBub2RlLnJpZ2h0Tm9kZVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChub2RlLnJpZ2h0Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIG5vZGUubGVmdE5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVwbGFjZW1lbnRWYWx1ZT10aGlzLmZpbmRSZXBsYWNlbWVudChub2RlLnJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGUocmVwbGFjZW1lbnRWYWx1ZS5kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmQ9cmVwbGFjZW1lbnRWYWx1ZS5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgPCBub2RlLmQpIG5vZGUubGVmdE5vZGU9dGhpcy5kZWxldGUodmFsdWUsIG5vZGUubGVmdE5vZGUpO1xuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPiBub2RlLmQpIG5vZGUucmlnaHROb2RlPXRoaXMuZGVsZXRlKHZhbHVlLCBub2RlLnJpZ2h0Tm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGZpbmRSZXBsYWNlbWVudChub2RlKXtcbiAgICAgICAgaWYgKG5vZGUubGVmdE5vZGUgPT09IG51bGwpIHJldHVybiBub2RlICBcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHRoaXMuZmluZFJlcGxhY2VtZW50KG5vZGUubGVmdE5vZGUpOyAgICAgICBcbiAgICB9XG5cbiAgICBmaW5kKHZhbHVlKXtcblxuICAgIH1cbn1cblxuZXhwb3J0IHtUcmVlfSIsImltcG9ydCB7Tm9kZX0gZnJvbSAnLi9Ob2RlLmpzJztcblxuZnVuY3Rpb24gYnVpbGRUcmVlKGFycmF5LCBzdGFydCwgZW5kKXtcbiAgICBpZiAoc3RhcnQ+ZW5kKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCBtaWQ9cGFyc2VJbnQoKHN0YXJ0K2VuZCkvMik7XG4gICAgbGV0IG5vZGU9bmV3IE5vZGUoYXJyYXlbbWlkXSk7XG4gICAgbm9kZS5sZWZ0Tm9kZT1idWlsZFRyZWUoYXJyYXksIHN0YXJ0LCBtaWQtMSk7XG4gICAgbm9kZS5yaWdodE5vZGU9YnVpbGRUcmVlKGFycmF5LCBtaWQrMSwgZW5kKTtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IHtidWlsZFRyZWV9OyIsImZ1bmN0aW9uIG1lcmdlU29ydChhcnJheSl7XG4gICAgaWYgKGFycmF5Lmxlbmd0aDwyKSByZXR1cm4gYXJyYXk7XG4gICAgbGV0IGxlZnRzaWRlPWFycmF5LnNsaWNlKDAsIGFycmF5Lmxlbmd0aC8yICk7XG4gICAgbGV0IHJpZ2h0c2lkZT1hcnJheS5zbGljZShhcnJheS5sZW5ndGgvMiwgYXJyYXkubGVuZ3RoKTtcbiAgICByZXR1cm4gbWVyZ2VTb3J0ZWRBcnJheXMobWVyZ2VTb3J0KGxlZnRzaWRlKSxtZXJnZVNvcnQocmlnaHRzaWRlKSlcbn0gICAgICAgICAgICAgICAgXG5cbmZ1bmN0aW9uIG1lcmdlU29ydGVkQXJyYXlzKGFycmF5MSwgYXJyYXkyKXtcbiAgICBsZXQgaT0wO1xuICAgIGxldCBqPTA7XG4gICAgbGV0IG1lcmdlZEFycmF5PVtdO1xuXG4gICAgd2hpbGUoaTxhcnJheTEubGVuZ3RoJiZqPGFycmF5Mi5sZW5ndGgpe1xuICAgICAgICBpZiAoYXJyYXkxW2ldPGFycmF5MltqXSl7XG4gICAgICAgICAgICBtZXJnZWRBcnJheS5wdXNoKGFycmF5MVtpXSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJyYXkxW2ldPmFycmF5MltqXSl7XG4gICAgICAgICAgICBtZXJnZWRBcnJheS5wdXNoKGFycmF5MltqXSk7XG4gICAgICAgICAgICBqKys7fVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkQXJyYXkucHVzaChhcnJheTFbaV0pO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgd2hpbGUoaTxhcnJheTEubGVuZ3RoKXtcbiAgICAgICAgbWVyZ2VkQXJyYXkucHVzaChhcnJheTFbaV0pO1xuICAgICAgICBpKys7XG4gICAgfVxuXG4gICAgd2hpbGUoajxhcnJheTIubGVuZ3RoKXtcbiAgICAgICAgbWVyZ2VkQXJyYXkucHVzaChhcnJheTJbal0pO1xuICAgICAgICBqKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlZEFycmF5O1xufVxuXG5leHBvcnQge21lcmdlU29ydH0iLCJjb25zdCBwcmV0dHlQcmludCA9IChub2RlLCBwcmVmaXggPSBcIlwiLCBpc0xlZnQgPSB0cnVlKSA9PiB7XG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHJldHVybjtcbiAgICBcbiAgICBpZiAobm9kZS5yaWdodE5vZGUgIT09IG51bGwpIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUucmlnaHROb2RlLCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUgiAgIFwiIDogXCIgICAgXCJ9YCwgZmFsc2UpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUlOKUgOKUgCBcIiA6IFwi4pSM4pSA4pSAIFwifSR7bm9kZS5kfWApO1xuICAgIGlmIChub2RlLmxlZnROb2RlICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLmxlZnROb2RlLCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIiAgICBcIiA6IFwi4pSCICAgXCJ9YCwgdHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGV4cG9ydCB7cHJldHR5UHJpbnR9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcHJldHR5UHJpbnQgfSBmcm9tICcuL3ByZXR0eVByaW50JztcbmltcG9ydCB7VHJlZX0gZnJvbSAnLi9UcmVlLmpzJztcblxubGV0IHRlc3Q9bmV3IFRyZWUoWzEwMCwgMjAsIDUwMCwgMTAsIDMwLCAzNCwgNDksIDY1XSk7XG5cbmNvbnNvbGUubG9nKHRlc3Quc29ydGVkQXJyYXkpO1xuY29uc29sZS5sb2codGVzdC5sZW5ndGgpO1xuY29uc29sZS5sb2codGVzdC5yb290KTtcbmNvbnNvbGUubG9nKHByZXR0eVByaW50KHRlc3Qucm9vdCkpO1xuY29uc29sZS5sb2codGVzdC5yb290LmQpO1xudGVzdC5pbnNlcnQoNSk7XG50ZXN0Lmluc2VydCgxMik7XG50ZXN0Lmluc2VydCgzKTtcbnRlc3QuaW5zZXJ0KDcwKTtcbnRlc3QuaW5zZXJ0KDMyKTtcblxuY29uc29sZS5sb2cocHJldHR5UHJpbnQodGVzdC5yb290KSk7XG5cbnRlc3QuZGVsZXRlKDM0KTtcbmNvbnNvbGUubG9nKHByZXR0eVByaW50KHRlc3Qucm9vdCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==