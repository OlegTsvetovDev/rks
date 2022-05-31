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

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\n$(document).ready(function () {\r\n  // Модалка \"Восстановление пароля\"\r\n  var body = $('body')\r\n\r\n  function initModalRestorePswd() {\r\n    var restorePswd = $('.restore_pswd'),\r\n        restorePswdModal = $('.modal_pswd_restore'),\r\n        restorePswdModalContent = $('.modal_pswd_restore__content'),\r\n        restorePswdModalClose = $('.modal_pswd_restore .close')\r\n\r\n    restorePswd.click(function (e) {\r\n      e.preventDefault()\r\n      body.css('overflow', 'hidden')\r\n      restorePswdModalContent.css('overflow-y', 'auto')\r\n      restorePswdModalContent.css('overflow-x', 'hidden')\r\n      restorePswdModal.removeClass('hidden')\r\n    })\r\n\r\n    restorePswdModalClose.click(function (e) {\r\n      e.preventDefault()\r\n      body.css('overflow', 'auto')\r\n      restorePswdModal.addClass('hidden')\r\n    })\r\n\r\n  }\r\n  initModalRestorePswd()\r\n\r\n\r\n  // Модалка \"Скачать инструкцию\"\r\n  function initModalDownloadInstructions() {\r\n    var instructionsBtn = $('.instructions__btn'),\r\n        instructionsModal = $('.modal_instructions'),\r\n        instructionsModalContent = $('.modal_instructions__content'),\r\n        instructionsModalClose = $('.modal_instructions .close')\r\n\r\n    instructionsBtn.click(function (e) {\r\n      e.preventDefault()\r\n      body.css('overflow', 'hidden')\r\n      instructionsModalContent.css('overflow-y', 'auto')\r\n      instructionsModalContent.css('overflow-x', 'hidden')\r\n      instructionsModal.removeClass('hidden')\r\n    })\r\n\r\n    instructionsModalClose.click(function (e) {\r\n      e.preventDefault()\r\n      body.css('overflow', 'auto')\r\n      instructionsModal.addClass('hidden')\r\n    })\r\n\r\n  }\r\n  initModalDownloadInstructions()\r\n\r\n});\r\n\n\n//# sourceURL=webpack://rks/./src/js/lk_auth.js?");

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