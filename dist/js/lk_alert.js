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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modals_initModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals/initModal.js */ \"./src/js/modules/modals/initModal.js\");\n\r\n\r\n\r\n$(document).ready(function () {\r\n\r\n  // Модалка \"Ошибка\"\r\n  (0,_modules_modals_initModal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])($('.alert'), $('.modal_alert').not('.modal_success'))\r\n  // Модалка \"Успешное событие\"\r\n  ;(0,_modules_modals_initModal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])($('.success'), $('.modal_alert.modal_success'))\r\n\r\n})\r\n\n\n//# sourceURL=webpack://rks/./src/js/lk_alert.js?");

/***/ }),

/***/ "./src/js/modules/modals/initModal.js":
/*!********************************************!*\
  !*** ./src/js/modules/modals/initModal.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// инит модалки\r\nfunction initModal(btn, modal) {\r\n  const body = $('body')\r\n  const modalContent = modal.find('.modal__content')\r\n  const modalClose = modal.find('.close')\r\n  const modalBtnClose = modal.find('.btn_close')\r\n\r\n  btn.click(function (e) {\r\n    e.preventDefault();\r\n    body.css('overflow', 'hidden');\r\n    modalContent.css('overflow-y', 'auto');\r\n    modalContent.css('overflow-x', 'hidden');\r\n    modal.removeClass('hidden');\r\n  })\r\n\r\n  modalClose.click(function (e) {\r\n    e.preventDefault();\r\n    body.css('overflow', 'auto');\r\n    modal.addClass('hidden');\r\n  })\r\n\r\n  modalBtnClose.click(function (e) {\r\n    e.preventDefault();\r\n    body.css('overflow', 'auto');\r\n    modal.addClass('hidden');\r\n  })\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initModal);\r\n\n\n//# sourceURL=webpack://rks/./src/js/modules/modals/initModal.js?");

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