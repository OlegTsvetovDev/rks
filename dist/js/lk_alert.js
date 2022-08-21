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

/***/ "./src/js/lk_alert.js":
/*!****************************!*\
  !*** ./src/js/lk_alert.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modals_initModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals/initModal.js */ \"./src/js/modules/modals/initModal.js\");\n\n$(document).ready(function () {\n  // Модалка \"Ошибка\"\n  (0,_modules_modals_initModal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])($('.alert'), $('.modal_alert').not('.modal_success')); // Модалка \"Успешное событие\"\n\n  (0,_modules_modals_initModal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])($('.success'), $('.modal_alert.modal_success'));\n});\n\n//# sourceURL=webpack://rks/./src/js/lk_alert.js?");

/***/ }),

/***/ "./src/js/modules/modals/initModal.js":
/*!********************************************!*\
  !*** ./src/js/modules/modals/initModal.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// инит модалки\nfunction initModal(btn, modal) {\n  var body = $('body');\n  var modalContent = modal.find('.modal__content');\n  var modalClose = modal.find('.close');\n  var modalBtnClose = modal.find('.btn_close');\n  btn.click(function (e) {\n    e.preventDefault();\n    body.css('overflow', 'hidden');\n    modalContent.css('overflow-y', 'auto');\n    modalContent.css('overflow-x', 'hidden');\n    modal.removeClass('hidden');\n  });\n  modalClose.click(function (e) {\n    e.preventDefault();\n    body.css('overflow', 'auto');\n    modal.addClass('hidden');\n  });\n  modalBtnClose.click(function (e) {\n    e.preventDefault();\n    body.css('overflow', 'auto');\n    modal.addClass('hidden');\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initModal);\n\n//# sourceURL=webpack://rks/./src/js/modules/modals/initModal.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/lk_alert.js");
/******/ 	
/******/ })()
;