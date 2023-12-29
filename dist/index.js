/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/modal.scss":
/*!*****************************!*\
  !*** ./src/scss/modal.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://orchard-fed/./src/scss/modal.scss?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://orchard-fed/./src/scss/styles.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _scss_modal_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/modal.scss */ \"./src/scss/modal.scss\");\n\r\n\r\n\r\nconst images = document.querySelectorAll(\".img-modal\");\r\n\r\nlet imgSrc;\r\n// get images src onclick\r\nimages.forEach((img) => {\r\n  img.addEventListener(\"click\", (e) => {\r\n    imgSrc = e.target.src;\r\n    imgModal(e.target.getAttribute(\"data-modal-image\"));\r\n  });\r\n});\r\n\r\nlet imgModal = (src) => {\r\n  const modal = document.createElement(\"div\");\r\n  modal.setAttribute(\"class\", \"modal\");\r\n  //add the modal to the main section or the parent element\r\n  document.querySelector(\"body\").append(modal);\r\n  //adding image to modal\r\n  const newImage = document.createElement(\"img\");\r\n  newImage.setAttribute(\"src\", src);\r\n  //creating the close button\r\n  const closeBtn = document.createElement(\"i\");\r\n  closeBtn.setAttribute(\"class\", \"fas fa-times closeBtn\");\r\n  //close function\r\n  closeBtn.onclick = () => {\r\n    modal.remove();\r\n  };\r\n\r\n  modal.append(newImage, closeBtn);\r\n};\r\n\r\nvar readMoreLinks = document.querySelectorAll('.read-more');\r\n        \r\nreadMoreLinks.forEach(function(link) {\r\n    link.addEventListener('click', function(event) {\r\n      event.preventDefault();\r\n      // Get the associated label element text\r\n      var labelElementText = link.closest('.item').querySelector('.content-title').textContent;\r\n      // Log the text to the console (you can replace this with your desired action)\r\n      console.log('The element you clicked is: ' + labelElementText);\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://orchard-fed/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;