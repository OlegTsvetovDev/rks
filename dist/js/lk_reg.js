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

eval("__webpack_require__.r(__webpack_exports__);\n$(document).ready(function () {\r\n  const body = $('body')\r\n\r\n\r\n  // псевдо-селект\r\n  function initPseudoSelect() {\r\n    const selectSingle = document.querySelector('.__select')\r\n    const selectSingle_title = selectSingle.querySelector('.__select__title')\r\n    const selectSingle_labels = selectSingle.querySelectorAll('.__select__label')\r\n\r\n    selectSingle_title.addEventListener('click', function () {\r\n      if ('active' === selectSingle.getAttribute('data-state')) {\r\n        selectSingle.setAttribute('data-state', '')\r\n      } else {\r\n        selectSingle.setAttribute('data-state', 'active')\r\n      }\r\n    });\r\n\r\n    for (let i = 0; i < selectSingle_labels.length; i++) {\r\n      selectSingle_labels[i].addEventListener('click', function (e) {\r\n        selectSingle_title.textContent = e.target.textContent\r\n        selectSingle_title.value = e.target.textContent\r\n        selectSingle.setAttribute('data-state', '')\r\n        $('input[name=clienttype_id]').val($('input#' + $(e.target).attr('for')).val())\r\n      })\r\n    }\r\n\r\n    // скрытие при клике по body кроме .__select\r\n    const body = document.querySelector('body')\r\n    body.addEventListener('click', e => {\r\n      const eClassList = e.target.classList\r\n      const trigger = (eClassList[0] !== '__select__title') &&\r\n                      (eClassList[0] !== '__select__content') &&\r\n                      (eClassList[0] !== '__select__input')\r\n\r\n      if (trigger) selectSingle.setAttribute('data-state', '')\r\n    })\r\n\r\n  }\r\n  if (document.querySelector('.__select')) initPseudoSelect()\r\n\r\n\r\n  // Модалка \"Согласие на обработку персональных данных\"\r\n  function initModalPersonalData() {\r\n    const personalData = $('.personal_agreement__label .personal_data')\r\n    const personalDataModal = $('.modal_personal_data')\r\n    const personalDataModalContent = $('.modal_personal_data__content')\r\n    const personalDataModalClose = $('.modal_personal_data .close')\r\n\r\n    personalData.click(function (e) {\r\n      e.preventDefault()\r\n      body.css('overflow', 'hidden')\r\n      personalDataModalContent.css('overflow-y', 'auto')\r\n      personalDataModalContent.css('overflow-x', 'hidden')\r\n      personalDataModal.removeClass('hidden')\r\n    })\r\n\r\n    personalDataModalClose.click(function (e) {\r\n      e.preventDefault()\r\n      body.css('overflow', 'auto')\r\n      personalDataModal.addClass('hidden')\r\n    })\r\n\r\n  }\r\n  if (document.querySelector('.personal_agreement__label')) initModalPersonalData()\r\n\r\n\r\n  // Модалка \"Правила пользования интерактивным сервисом\"\r\n  function initModalRules() {\r\n    const rules = $('.personal_agreement__label .rules')\r\n    const rulesModal = $('.modal_rules')\r\n    const rulesModalContent = $('.modal_rules__content')\r\n    const rulesModalClose = $('.modal_rules__content .close')\r\n\r\n    rules.click(function (e) {\r\n      e.preventDefault()\r\n      body.css('overflow', 'hidden')\r\n      rulesModalContent.css('overflow-y', 'auto')\r\n      rulesModalContent.css('overflow-x', 'hidden')\r\n      rulesModal.removeClass('hidden')\r\n    })\r\n\r\n    rulesModalClose.click(function (e) {\r\n      e.preventDefault()\r\n      body.css('overflow', 'auto')\r\n      rulesModal.addClass('hidden')\r\n    })\r\n\r\n  }\r\n  if (document.querySelector('.personal_agreement__label')) initModalRules()\r\n\r\n\r\n  // Модалка \"Скачать инструкцию\"\r\n  function initModalDownloadInstructions() {\r\n    const instructionsBtn = $('.instructions__btn')\r\n    const instructionsModal = $('.modal_instructions')\r\n    const instructionsModalContent = $('.modal_instructions__content')\r\n    const instructionsModalClose = $('.modal_instructions .close')\r\n\r\n    instructionsBtn.click(function (e) {\r\n      e.preventDefault()\r\n      body.css('overflow', 'hidden')\r\n      instructionsModalContent.css('overflow-y', 'auto')\r\n      instructionsModalContent.css('overflow-x', 'hidden')\r\n      instructionsModal.removeClass('hidden')\r\n    })\r\n\r\n    instructionsModalClose.click(function (e) {\r\n      e.preventDefault()\r\n      body.css('overflow', 'auto')\r\n      instructionsModal.addClass('hidden')\r\n    })\r\n\r\n  }\r\n  if (document.querySelector('.instructions__btn')) initModalDownloadInstructions()\r\n\r\n});\r\n\n\n//# sourceURL=webpack://rks/./src/js/lk_reg.js?");

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