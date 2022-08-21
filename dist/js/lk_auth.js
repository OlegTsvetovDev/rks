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

/***/ "./src/js/lk_auth.js":
/*!***************************!*\
  !*** ./src/js/lk_auth.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n$(document).ready(function () {\n  // Модалка \"Восстановление пароля\"\n  var body = $('body');\n\n  function initModalRestorePswd() {\n    var restorePswd = $('.restore_pswd'),\n        restorePswdModal = $('.modal_pswd_restore'),\n        restorePswdModalContent = $('.modal_pswd_restore__content'),\n        restorePswdModalClose = $('.modal_pswd_restore .close');\n    restorePswd.click(function (e) {\n      e.preventDefault();\n      body.css('overflow', 'hidden');\n      restorePswdModalContent.css('overflow-y', 'auto');\n      restorePswdModalContent.css('overflow-x', 'hidden');\n      restorePswdModal.removeClass('hidden');\n    });\n    restorePswdModalClose.click(function (e) {\n      e.preventDefault();\n      body.css('overflow', 'auto');\n      restorePswdModal.addClass('hidden');\n    });\n  }\n\n  initModalRestorePswd(); // Модалка \"Скачать инструкцию\"\n\n  function initModalDownloadInstructions() {\n    var instructionsBtn = $('.instructions__btn'),\n        instructionsModal = $('.modal_instructions'),\n        instructionsModalContent = $('.modal_instructions__content'),\n        instructionsModalClose = $('.modal_instructions .close');\n    instructionsBtn.click(function (e) {\n      e.preventDefault();\n      body.css('overflow', 'hidden');\n      instructionsModalContent.css('overflow-y', 'auto');\n      instructionsModalContent.css('overflow-x', 'hidden');\n      instructionsModal.removeClass('hidden');\n    });\n    instructionsModalClose.click(function (e) {\n      e.preventDefault();\n      body.css('overflow', 'auto');\n      instructionsModal.addClass('hidden');\n    });\n  }\n\n  initModalDownloadInstructions();\n});\n\n//# sourceURL=webpack://rks/./src/js/lk_auth.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/lk_auth.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;