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

/***/ "./src/js/lk_settings.js":
/*!*******************************!*\
  !*** ./src/js/lk_settings.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n$(document).ready(function () {\r\n  const body = $('body')\r\n\r\n  // .lk_menu стили для пункта меню\r\n  function setActiveMenuItem() {\r\n    var menuItems = $('.lk_menu__list_item a'),\r\n        pathname = window.location.pathname.split('/');\r\n    menuItems.each(function (i) {\r\n      var menuItem = $(this),\r\n          menuItemHref = menuItem.attr('href'),\r\n          parentItem = menuItem.parent(),\r\n          pathnameLastItem = pathname[pathname.length - 1];\r\n      menuItemHref == pathnameLastItem ? parentItem.addClass('active') : parentItem.removeClass('active');\r\n    })\r\n  }\r\n  setActiveMenuItem()\r\n\r\n\r\n  // псевдо-селект\r\n  function initPseudoSelect() {\r\n    const selectSingle = document.querySelector('.__select')\r\n    const selectSingle_title = selectSingle.querySelector('.__select__title')\r\n    const selectSingle_labels = selectSingle.querySelectorAll('.__select__label')\r\n\r\n    selectSingle_title.addEventListener('click', function () {\r\n      if ('active' === selectSingle.getAttribute('data-state')) {\r\n        selectSingle.setAttribute('data-state', '')\r\n      } else {\r\n        selectSingle.setAttribute('data-state', 'active')\r\n      }\r\n    });\r\n\r\n    for (let i = 0; i < selectSingle_labels.length; i++) {\r\n      selectSingle_labels[i].addEventListener('click', function (e) {\r\n        selectSingle_title.textContent = e.target.textContent\r\n        selectSingle_title.value = e.target.textContent\r\n        selectSingle.setAttribute('data-state', '')\r\n      })\r\n    }\r\n\r\n    // скрытие при клике по body кроме .__select\r\n    const body = document.querySelector('body')\r\n    body.addEventListener('click', e => {\r\n      const eClassList = e.target.classList\r\n      const trigger = (eClassList[0] !== '__select__title') &&\r\n                      (eClassList[0] !== '__select__content') &&\r\n                      (eClassList[0] !== '__select__input')\r\n\r\n      if (trigger) selectSingle.setAttribute('data-state', '')\r\n    })\r\n\r\n  }\r\n  if (document.querySelector('.__select')) initPseudoSelect()\r\n\r\n\r\n  // Модалка \"Скачать инструкцию\"\r\n  function initModalDownloadInstructions() {\r\n    var instructionsBtn = $('.instructions__btn'),\r\n        instructionsModal = $('.modal_instructions'),\r\n        instructionsModalContent = $('.modal_instructions__content'),\r\n        instructionsModalClose = $('.modal_instructions .close')\r\n\r\n    instructionsBtn.click(function (e) {\r\n      e.preventDefault()\r\n      body.css('overflow', 'hidden')\r\n      instructionsModalContent.css('overflow-y', 'auto')\r\n      instructionsModalContent.css('overflow-x', 'hidden')\r\n      instructionsModal.removeClass('hidden')\r\n    })\r\n\r\n    instructionsModalClose.click(function (e) {\r\n      e.preventDefault()\r\n      body.css('overflow', 'auto')\r\n      instructionsModal.addClass('hidden')\r\n    })\r\n\r\n  }\r\n  initModalDownloadInstructions()\r\n\r\n  // datepicker\r\n  function initDatepickers() {\r\n    $('.datepicker_input').datepicker($.datepicker.regional['ru'])\r\n  }\r\n  if (document.querySelector('.datepicker_input')) initDatepickers()\r\n\r\n  // маски\r\n  if (document.querySelector('.datepicker_input')) $('.datepicker_input').mask(\"99.99.9999\", { autoclear: false })\r\n  if (document.querySelector('.snils_input')) $('.snils_input').mask(\"999-999-999 99\", { autoclear: false })\r\n  if (document.querySelector('.passport_input')) $('.passport_input').mask(\"99 99 / 999999\", { autoclear: false })\r\n  if (document.querySelector('.passport_serial_input')) $('.passport_serial_input').mask(\"99 99\", { autoclear: false })\r\n  if (document.querySelector('.passport_number_input')) $('.passport_number_input').mask(\"999999\", { autoclear: false })\r\n  if (document.querySelector('.phone_input')) $('.phone_input').mask(\"(999) 999-9999\", { autoclear: false })\r\n  if (document.querySelector('.tin_ul_input')) $('.tin_ul_input').mask(\"9999999999\", { autoclear: false })\r\n  if (document.querySelector('.tin_fl_input')) $('.tin_fl_input').mask(\"999999999999\", { autoclear: false })\r\n  if (document.querySelector('.tin_e_input')) $('.tin_e_input').mask(\"999999999999\", { autoclear: false })\r\n  if (document.querySelector('.integer_input')) $('.integer_input').on('input', function () {\r\n    $(this).val($(this).val().replace(/[^0-9]/g, ''))\r\n  })\r\n  if (document.querySelector('.float_input')) $('.float_input').keypress(function (e) {\r\n    const trigger = (e.which != 46 || $(this).val().indexOf('.') != -1)\r\n                    && (e.which < 48 || e.which > 57)\r\n\r\n    if (trigger) e.preventDefault()\r\n  })\r\n\r\n  // Модалка \"Смена пароля\"\r\n\r\n  function initModalChangePswd() {\r\n    var changePswd = $('.change_pswd_input'),\r\n        changePswdModal = $('.modal_change_pswd'),\r\n        changePswdModalContent = $('.modal_change_pswd__content'),\r\n        changePswdModalClose = $('.modal_change_pswd .close'),\r\n        changePswdModalInput = $('.modal_change_pswd .password');\r\n    changePswd.click(function (e) {\r\n      e.preventDefault();\r\n      body.css('overflow', 'hidden');\r\n      changePswdModalContent.css('overflow-y', 'auto');\r\n      changePswdModalContent.css('overflow-x', 'hidden');\r\n      changePswdModal.removeClass('hidden');\r\n    });\r\n    changePswdModalClose.click(function (e) {\r\n      e.preventDefault();\r\n      body.css('overflow', 'auto');\r\n      changePswdModal.addClass('hidden');\r\n      changePswdModalInput.val('');\r\n    });\r\n  }\r\n  initModalChangePswd()\r\n\r\n\r\n  // Модалка \"Смена email\"\r\n\r\n  function initModalChangeEmail() {\r\n    var changeEmail = $('.change_email_input'),\r\n       changeEmailModal = $('.modal_change_email'),\r\n       changeEmailModalContent = $('.modal_change_email__content'),\r\n       changeEmailModalClose = $('.modal_change_email .close'),\r\n       changeEmailModalInput = $('.modal_change_email .email');\r\n    changeEmail.click(function (e) {\r\n     e.preventDefault();\r\n     body.css('overflow', 'hidden');\r\n     changeEmailModalContent.css('overflow-y', 'auto');\r\n     changeEmailModalContent.css('overflow-x', 'hidden');\r\n     changeEmailModal.removeClass('hidden');\r\n    });\r\n    changeEmailModalClose.click(function (e) {\r\n     e.preventDefault();\r\n     body.css('overflow', 'auto');\r\n     changeEmailModal.addClass('hidden');\r\n     changeEmailModalInput.val('');\r\n    });\r\n  }\r\n  initModalChangeEmail()\r\n\r\n\r\n   // Смена выбора документа\r\n    $('input[type=radio][name=docname]').change(function() {\r\n      $('input[id=if_docname_selected]').attr('name', '');\r\n    });\r\n\r\n});\r\n\n\n//# sourceURL=webpack://rks/./src/js/lk_settings.js?");

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
/******/ 	__webpack_modules__["./src/js/lk_settings.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;