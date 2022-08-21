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

/***/ "./src/js/lk_reg.js":
/*!**************************!*\
  !*** ./src/js/lk_reg.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n$(document).ready(function () {\n  var body = $('body'); // псевдо-селект\n\n  function initPseudoSelect() {\n    var selectSingle = document.querySelector('.__select');\n    var selectSingle_title = selectSingle.querySelector('.__select__title');\n    var selectSingle_labels = selectSingle.querySelectorAll('.__select__label');\n    selectSingle_title.addEventListener('click', function () {\n      if ('active' === selectSingle.getAttribute('data-state')) {\n        selectSingle.setAttribute('data-state', '');\n      } else {\n        selectSingle.setAttribute('data-state', 'active');\n      }\n    });\n\n    for (var i = 0; i < selectSingle_labels.length; i++) {\n      selectSingle_labels[i].addEventListener('click', function (e) {\n        selectSingle_title.textContent = e.target.textContent;\n        selectSingle_title.value = e.target.textContent;\n        selectSingle.setAttribute('data-state', '');\n        $('input[name=clienttype_id]').val($('input#' + $(e.target).attr('for')).val());\n      });\n    } // скрытие при клике по body кроме .__select\n\n\n    var body = document.querySelector('body');\n    body.addEventListener('click', function (e) {\n      var eClassList = e.target.classList;\n      var trigger = eClassList[0] !== '__select__title' && eClassList[0] !== '__select__content' && eClassList[0] !== '__select__input';\n      if (trigger) selectSingle.setAttribute('data-state', '');\n    });\n  }\n\n  if (document.querySelector('.__select')) initPseudoSelect(); // Модалка \"Согласие на обработку персональных данных\"\n\n  function initModalPersonalData() {\n    var personalData = $('.personal_agreement__label .personal_data');\n    var personalDataModal = $('.modal_personal_data');\n    var personalDataModalContent = $('.modal_personal_data__content');\n    var personalDataModalClose = $('.modal_personal_data .close');\n    personalData.click(function (e) {\n      e.preventDefault();\n      body.css('overflow', 'hidden');\n      personalDataModalContent.css('overflow-y', 'auto');\n      personalDataModalContent.css('overflow-x', 'hidden');\n      personalDataModal.removeClass('hidden');\n    });\n    personalDataModalClose.click(function (e) {\n      e.preventDefault();\n      body.css('overflow', 'auto');\n      personalDataModal.addClass('hidden');\n    });\n  }\n\n  if (document.querySelector('.personal_agreement__label')) initModalPersonalData(); // Модалка \"Правила пользования интерактивным сервисом\"\n\n  function initModalRules() {\n    var rules = $('.personal_agreement__label .rules');\n    var rulesModal = $('.modal_rules');\n    var rulesModalContent = $('.modal_rules__content');\n    var rulesModalClose = $('.modal_rules__content .close');\n    rules.click(function (e) {\n      e.preventDefault();\n      body.css('overflow', 'hidden');\n      rulesModalContent.css('overflow-y', 'auto');\n      rulesModalContent.css('overflow-x', 'hidden');\n      rulesModal.removeClass('hidden');\n    });\n    rulesModalClose.click(function (e) {\n      e.preventDefault();\n      body.css('overflow', 'auto');\n      rulesModal.addClass('hidden');\n    });\n  }\n\n  if (document.querySelector('.personal_agreement__label')) initModalRules(); // Модалка \"Скачать инструкцию\"\n\n  function initModalDownloadInstructions() {\n    var instructionsBtn = $('.instructions__btn');\n    var instructionsModal = $('.modal_instructions');\n    var instructionsModalContent = $('.modal_instructions__content');\n    var instructionsModalClose = $('.modal_instructions .close');\n    instructionsBtn.click(function (e) {\n      e.preventDefault();\n      body.css('overflow', 'hidden');\n      instructionsModalContent.css('overflow-y', 'auto');\n      instructionsModalContent.css('overflow-x', 'hidden');\n      instructionsModal.removeClass('hidden');\n    });\n    instructionsModalClose.click(function (e) {\n      e.preventDefault();\n      body.css('overflow', 'auto');\n      instructionsModal.addClass('hidden');\n    });\n  }\n\n  if (document.querySelector('.instructions__btn')) initModalDownloadInstructions();\n});\n\n//# sourceURL=webpack://rks/./src/js/lk_reg.js?");

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
/******/ 	__webpack_modules__["./src/js/lk_reg.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;