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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_postService_getSimpleSettings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/postService/getSimpleSettings.js */ \"./src/js/modules/postService/getSimpleSettings.js\");\n/* harmony import */ var _modules_modals_hideInstructions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modals/hideInstructions.js */ \"./src/js/modules/modals/hideInstructions.js\");\n/* harmony import */ var _modules_masks_initMasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/masks/initMasks.js */ \"./src/js/modules/masks/initMasks.js\");\n\r\n\r\n\r\n\r\n$(document).ready(function () {\r\n  const body = $('body')\r\n\r\n  // .lk_menu стили для пункта меню\r\n  function setActiveMenuItem() {\r\n    var menuItems = $('.lk_menu__list_item a'),\r\n        pathname = window.location.pathname.split('/');\r\n    menuItems.each(function (i) {\r\n      var menuItem = $(this),\r\n          menuItemHref = menuItem.attr('href'),\r\n          parentItem = menuItem.parent(),\r\n          pathnameLastItem = pathname[pathname.length - 1];\r\n      menuItemHref == pathnameLastItem ? parentItem.addClass('active') : parentItem.removeClass('active');\r\n    })\r\n  }\r\n  setActiveMenuItem()\r\n\r\n\r\n  // псевдо-селект\r\n  function initPseudoSelect() {\r\n    const selectSingle = document.querySelector('.__select')\r\n    const selectSingle_title = selectSingle.querySelector('.__select__title')\r\n    const selectSingle_labels = selectSingle.querySelectorAll('.__select__label')\r\n\r\n    selectSingle_title.addEventListener('click', function () {\r\n      if ('active' === selectSingle.getAttribute('data-state')) {\r\n        selectSingle.setAttribute('data-state', '')\r\n      } else {\r\n        selectSingle.setAttribute('data-state', 'active')\r\n      }\r\n    });\r\n\r\n    for (let i = 0; i < selectSingle_labels.length; i++) {\r\n      selectSingle_labels[i].addEventListener('click', function (e) {\r\n        selectSingle_title.textContent = e.target.textContent\r\n        selectSingle_title.value = e.target.textContent\r\n        selectSingle.setAttribute('data-state', '')\r\n      })\r\n    }\r\n\r\n    // скрытие при клике по body кроме .__select\r\n    const body = document.querySelector('body')\r\n    body.addEventListener('click', e => {\r\n      const eClassList = e.target.classList\r\n      const trigger = (eClassList[0] !== '__select__title') &&\r\n                      (eClassList[0] !== '__select__content') &&\r\n                      (eClassList[0] !== '__select__input')\r\n\r\n      if (trigger) selectSingle.setAttribute('data-state', '')\r\n    })\r\n\r\n  }\r\n  if (document.querySelector('.__select')) initPseudoSelect()\r\n\r\n\r\n  // Модалка \"Скачать инструкцию\"\r\n  function initModalDownloadInstructions() {\r\n    var instructionsBtn = $('.instructions__btn'),\r\n        instructionsModal = $('.modal_instructions'),\r\n        instructionsModalContent = $('.modal_instructions__content'),\r\n        instructionsModalClose = $('.modal_instructions .close')\r\n\r\n    instructionsBtn.click(function (e) {\r\n      e.preventDefault()\r\n      body.css('overflow', 'hidden')\r\n      instructionsModalContent.css('overflow-y', 'auto')\r\n      instructionsModalContent.css('overflow-x', 'hidden')\r\n      instructionsModal.removeClass('hidden')\r\n    })\r\n\r\n    instructionsModalClose.click(function (e) {\r\n      e.preventDefault()\r\n      body.css('overflow', 'auto')\r\n      instructionsModal.addClass('hidden')\r\n    })\r\n\r\n    ;(0,_modules_modals_hideInstructions_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n  }\r\n  initModalDownloadInstructions()\r\n\r\n\r\n  // datepicker\r\n  function initDatepickers() {\r\n    $('.datepicker_input').datepicker($.datepicker.regional['ru'])\r\n  }\r\n  if (document.querySelector('.datepicker_input')) initDatepickers()\r\n\r\n  // маски\r\n  ;(0,_modules_masks_initMasks_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(document)\r\n\r\n  // Модалка \"Смена пароля\"\r\n\r\n  function initModalChangePswd() {\r\n    var changePswd = $('.change_pswd_input'),\r\n        changePswdModal = $('.modal_change_pswd'),\r\n        changePswdModalContent = $('.modal_change_pswd__content'),\r\n        changePswdModalClose = $('.modal_change_pswd .close'),\r\n        changePswdModalInput = $('.modal_change_pswd .password');\r\n    changePswd.click(function (e) {\r\n      e.preventDefault();\r\n      body.css('overflow', 'hidden');\r\n      changePswdModalContent.css('overflow-y', 'auto');\r\n      changePswdModalContent.css('overflow-x', 'hidden');\r\n      changePswdModal.removeClass('hidden');\r\n    });\r\n    changePswdModalClose.click(function (e) {\r\n      e.preventDefault();\r\n      body.css('overflow', 'auto');\r\n      changePswdModal.addClass('hidden');\r\n      changePswdModalInput.val('');\r\n    });\r\n  }\r\n  initModalChangePswd()\r\n\r\n\r\n  // Модалка \"Смена email\"\r\n\r\n  function initModalChangeEmail() {\r\n    var changeEmail = $('.change_email_input'),\r\n       changeEmailModal = $('.modal_change_email'),\r\n       changeEmailModalContent = $('.modal_change_email__content'),\r\n       changeEmailModalClose = $('.modal_change_email .close'),\r\n       changeEmailModalInput = $('.modal_change_email .email');\r\n    changeEmail.click(function (e) {\r\n     e.preventDefault();\r\n     body.css('overflow', 'hidden');\r\n     changeEmailModalContent.css('overflow-y', 'auto');\r\n     changeEmailModalContent.css('overflow-x', 'hidden');\r\n     changeEmailModal.removeClass('hidden');\r\n    });\r\n    changeEmailModalClose.click(function (e) {\r\n     e.preventDefault();\r\n     body.css('overflow', 'auto');\r\n     changeEmailModal.addClass('hidden');\r\n     changeEmailModalInput.val('');\r\n    });\r\n  }\r\n  initModalChangeEmail()\r\n\r\n\r\n   // Смена выбора документа\r\n    $('input[type=radio][name=docname]').change(function() {\r\n      $('input[id=if_docname_selected]').attr('name', '');\r\n    });\r\n\r\n    if(document.querySelector('[name=\"clienttype_id\"]').value === \"202\") {\r\n      let is_simple;\r\n      (0,_modules_postService_getSimpleSettings_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(is_simple)\r\n    }\r\n\r\n});\r\n\n\n//# sourceURL=webpack://rks/./src/js/lk_settings.js?");

/***/ }),

/***/ "./src/js/modules/masks/initDatepickerMasks.js":
/*!*****************************************************!*\
  !*** ./src/js/modules/masks/initDatepickerMasks.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initDatepickerMasks = () => {\r\n  $('.datepicker_input').mask(\"99.99.9999\", { autoclear: false })\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initDatepickerMasks);\r\n\n\n//# sourceURL=webpack://rks/./src/js/modules/masks/initDatepickerMasks.js?");

/***/ }),

/***/ "./src/js/modules/masks/initFfhcMasks.js":
/*!***********************************************!*\
  !*** ./src/js/modules/masks/initFfhcMasks.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"initFfhcMask\": () => (/* binding */ initFfhcMask)\n/* harmony export */ });\nconst maskOptions = {\r\n  mask: '{Ф}0[000000000.00000]',\r\n  lazy: false\r\n}\r\n\r\nconst initFfhcMask = input => IMask(input, maskOptions)\r\n\r\nconst initFfhcMasks = node => {\r\n  const inputs = node.querySelectorAll('.ffhc_input')\r\n\r\n  inputs.forEach(input => initFfhcMask(input))\r\n}\r\n\r\n\r\n// //старая версия\r\n// const initFfhcMasks = () => {\r\n//   const $ffhc = $('.ffhc_input')\r\n//\r\n//   if($ffhc.val() === '')\r\n//     $ffhc.val('Ф')\r\n//\r\n//\r\n//   // обработка нажатия delete и backspace\r\n//   $ffhc.keydown(function (e) {\r\n//     const key = e.key\r\n//     const trigger = (key === 'Backspace' || key === 'Delete')\r\n//\r\n//     if (trigger && $(this).val().length <= 1)\r\n//       e.preventDefault()\r\n//\r\n//   })\r\n//\r\n//   // обработка позиции каретки в инпуте\r\n//   // TODO:\r\n//   $ffhc.keydown(function (e) {\r\n//     const cursorPosition = $(this)[0].selectionStart\r\n//     const len = $(this)[0].selectionEnd\r\n//     const setCursorPosition = $(this)[0].setSelectionRange(cursorPosition, len)\r\n//\r\n//     console.log(cursorPosition)\r\n//\r\n//     if (cursorPosition === 0)\r\n//       setCursorPosition\r\n//   })\r\n//\r\n//   // обработка нажатия цифр и точки\r\n//   $ffhc.keypress(function (e) {\r\n//     if ($(this).val()[0] !== 'Ф')\r\n//       $(this).val('Ф' + $(this).val())\r\n//\r\n//     const floatTrigger = (e.which != 46 || $(this).val().indexOf('.') != -1)\r\n//                          && (e.which < 48 || e.which > 57)\r\n//\r\n//     if (floatTrigger)\r\n//       e.preventDefault()\r\n//   })\r\n// }\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initFfhcMasks);\r\n\r\n\n\n//# sourceURL=webpack://rks/./src/js/modules/masks/initFfhcMasks.js?");

/***/ }),

/***/ "./src/js/modules/masks/initFloatMasks.js":
/*!************************************************!*\
  !*** ./src/js/modules/masks/initFloatMasks.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initFloatMasks = () => {\r\n  $('.float_input').keypress(function (e) {\r\n    const trigger = (e.which != 46 || $(this).val().indexOf('.') != -1)\r\n                    && (e.which < 48 || e.which > 57)\r\n\r\n    if (trigger) e.preventDefault()\r\n  })\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initFloatMasks);\r\n\n\n//# sourceURL=webpack://rks/./src/js/modules/masks/initFloatMasks.js?");

/***/ }),

/***/ "./src/js/modules/masks/initIntegerMasks.js":
/*!**************************************************!*\
  !*** ./src/js/modules/masks/initIntegerMasks.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initIntegerMasks = () => {\r\n  $('.integer_input').on('input', function () {\r\n    $(this).val($(this).val().replace(/[^0-9]/g, ''))\r\n  })\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initIntegerMasks);\r\n\n\n//# sourceURL=webpack://rks/./src/js/modules/masks/initIntegerMasks.js?");

/***/ }),

/***/ "./src/js/modules/masks/initMasks.js":
/*!*******************************************!*\
  !*** ./src/js/modules/masks/initMasks.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _initFfhcMasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initFfhcMasks.js */ \"./src/js/modules/masks/initFfhcMasks.js\");\n/* harmony import */ var _initFloatMasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initFloatMasks.js */ \"./src/js/modules/masks/initFloatMasks.js\");\n/* harmony import */ var _initIntegerMasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initIntegerMasks.js */ \"./src/js/modules/masks/initIntegerMasks.js\");\n/* harmony import */ var _initTinMasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initTinMasks.js */ \"./src/js/modules/masks/initTinMasks.js\");\n/* harmony import */ var _initPhoneMasks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initPhoneMasks.js */ \"./src/js/modules/masks/initPhoneMasks.js\");\n/* harmony import */ var _initPassportMasks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./initPassportMasks.js */ \"./src/js/modules/masks/initPassportMasks.js\");\n/* harmony import */ var _initDatepickerMasks_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./initDatepickerMasks.js */ \"./src/js/modules/masks/initDatepickerMasks.js\");\n/* harmony import */ var _initSnilsMasks_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./initSnilsMasks.js */ \"./src/js/modules/masks/initSnilsMasks.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// инит масок\r\nfunction initMasks(node) {\r\n  // маска на дейтпикер\r\n  if (node.querySelector('.datepicker_input'))\r\n    (0,_initDatepickerMasks_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n\r\n  // маска СНИЛС\r\n  if (node.querySelector('.snils_input'))\r\n    (0,_initSnilsMasks_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n\r\n  // маска паспорта серия + номер\r\n  if (node.querySelector('.passport_input'))\r\n    (0,_initPassportMasks_js__WEBPACK_IMPORTED_MODULE_5__.initPassportMasks)()\r\n\r\n  // маска срии паспорта\r\n  if (node.querySelector('.passport_serial_input'))\r\n    (0,_initPassportMasks_js__WEBPACK_IMPORTED_MODULE_5__.initPassportSerialMasks)()\r\n\r\n  // маска номера паспорта\r\n  if (node.querySelector('.passport_number_input'))\r\n    (0,_initPassportMasks_js__WEBPACK_IMPORTED_MODULE_5__.initPassportNumberMasks)()\r\n\r\n  // маски номер телефонов\r\n  if (node.querySelector('.phone_input'))\r\n    (0,_initPhoneMasks_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n\r\n  // ИНН ЮЛ маски\r\n  if (node.querySelector('.tin_ul_input'))\r\n    (0,_initTinMasks_js__WEBPACK_IMPORTED_MODULE_3__.initTinUlMasks)()\r\n\r\n  // ИНН ФЛ маски\r\n  if (node.querySelector('.tin_fl_input'))\r\n    (0,_initTinMasks_js__WEBPACK_IMPORTED_MODULE_3__.initTinFlMasks)()\r\n\r\n  // ИНН ИП маски\r\n  if (node.querySelector('.tin_e_input'))\r\n    (0,_initTinMasks_js__WEBPACK_IMPORTED_MODULE_3__.initTinEMasks)()\r\n\r\n  // маска для целых чисел\r\n  if (node.querySelector('.integer_input'))\r\n    (0,_initIntegerMasks_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n\r\n  // маска чисел с плавающей запятой\r\n  if (node.querySelector('.float_input'))\r\n    (0,_initFloatMasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\r\n  // маска для \"Класса функциональной пожарной опасности\"\r\n  if (node.querySelector('.ffhc_input'))\r\n    (0,_initFfhcMasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node)\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initMasks);\r\n\n\n//# sourceURL=webpack://rks/./src/js/modules/masks/initMasks.js?");

/***/ }),

/***/ "./src/js/modules/masks/initPassportMasks.js":
/*!***************************************************!*\
  !*** ./src/js/modules/masks/initPassportMasks.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initPassportMasks\": () => (/* binding */ initPassportMasks),\n/* harmony export */   \"initPassportNumberMasks\": () => (/* binding */ initPassportNumberMasks),\n/* harmony export */   \"initPassportSerialMasks\": () => (/* binding */ initPassportSerialMasks)\n/* harmony export */ });\nconst initPassportMasks = () => {\r\n  $('.passport_input').mask(\"99 99 / 999999\", { autoclear: false })\r\n}\r\n\r\nconst initPassportSerialMasks = () => {\r\n  $('.passport_serial_input').mask(\"99 99\", { autoclear: false })\r\n}\r\n\r\nconst initPassportNumberMasks = () => {\r\n  $('.passport_number_input').mask(\"999999\", { autoclear: false })\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://rks/./src/js/modules/masks/initPassportMasks.js?");

/***/ }),

/***/ "./src/js/modules/masks/initPhoneMasks.js":
/*!************************************************!*\
  !*** ./src/js/modules/masks/initPhoneMasks.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initPhoneMasks = () => {\r\n  $('.phone_input').mask(\"+7 (999) 999-9999 ? доб. 99999\", { autoclear: false })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initPhoneMasks);\r\n\n\n//# sourceURL=webpack://rks/./src/js/modules/masks/initPhoneMasks.js?");

/***/ }),

/***/ "./src/js/modules/masks/initSnilsMasks.js":
/*!************************************************!*\
  !*** ./src/js/modules/masks/initSnilsMasks.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initSnilsMasks = () => {\r\n  $('.snils_input').mask(\"999-999-999 99\", { autoclear: false })\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initSnilsMasks);\r\n\n\n//# sourceURL=webpack://rks/./src/js/modules/masks/initSnilsMasks.js?");

/***/ }),

/***/ "./src/js/modules/masks/initTinMasks.js":
/*!**********************************************!*\
  !*** ./src/js/modules/masks/initTinMasks.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initTinEMasks\": () => (/* binding */ initTinEMasks),\n/* harmony export */   \"initTinFlMasks\": () => (/* binding */ initTinFlMasks),\n/* harmony export */   \"initTinUlMasks\": () => (/* binding */ initTinUlMasks)\n/* harmony export */ });\nconst initTinEMasks = () => {\r\n  $('.tin_e_input').mask(\"999999999999\", { autoclear: false })\r\n}\r\n\r\nconst initTinFlMasks = () => {\r\n  $('.tin_fl_input').mask(\"999999999999\", { autoclear: false })\r\n}\r\n\r\nconst initTinUlMasks = () => {\r\n  $('.tin_ul_input').mask(\"9999999999\", { autoclear: false })\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://rks/./src/js/modules/masks/initTinMasks.js?");

/***/ }),

/***/ "./src/js/modules/modals/hideInstructions.js":
/*!***************************************************!*\
  !*** ./src/js/modules/modals/hideInstructions.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction hideInstructions() {\r\n    let clienttype = \"unknown\"\r\n    const instr_links = document.querySelectorAll('.modal_instructions .instructions__link')\r\n\r\n    $.ajax({\r\n        url: \"./getClienttypeJson/\",\r\n        method: \"get\",\r\n        success: function(data){\r\n\r\n            clienttype = data.replaceAll('\"', '')\r\n            if (clienttype === 'unknown') return\r\n            instr_links.forEach(l => {\r\n                if (!l.classList.contains(clienttype)) l.classList.add('hidden')\r\n            })\r\n        },\r\n        error: function(){\r\n           console.log(\"Не удалось определить тип пользователя\")\r\n        }\r\n    });\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hideInstructions);\n\n//# sourceURL=webpack://rks/./src/js/modules/modals/hideInstructions.js?");

/***/ }),

/***/ "./src/js/modules/postService/getSimpleSettings.js":
/*!*********************************************************!*\
  !*** ./src/js/modules/postService/getSimpleSettings.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _hideForUL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hideForUL.js */ \"./src/js/modules/postService/hideForUL.js\");\n\r\n\r\nfunction getSimpleSettings(is_simple) {\r\n    $.ajax({\r\n        url: \"./getSimpleJson/\",\r\n        success: function(data){\r\n            is_simple = data === \"true\" ? true : false;\r\n\r\n            if (is_simple)\r\n                (0,_hideForUL_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"settings\")\r\n        }\r\n    });\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSimpleSettings);\n\n//# sourceURL=webpack://rks/./src/js/modules/postService/getSimpleSettings.js?");

/***/ }),

/***/ "./src/js/modules/postService/hideForUL.js":
/*!*************************************************!*\
  !*** ./src/js/modules/postService/hideForUL.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction hideForUL(pageType) {\r\n    var is_ul\r\n    $.ajax({\r\n        url: \"./getClienttypeJson/\",\r\n        success: function(data){\r\n            is_ul = data === \"\\\"UL\\\"\";\r\n\r\n            if (!is_ul) return\r\n\r\n            if (pageType === \"settings\") {\r\n                if(document.querySelector('[name=\"kpp\"]'))\r\n                    document.querySelector('[name=\"kpp\"]').parentElement.parentElement.classList.add('hidden');\r\n            }\r\n            else if (pageType === \"request\") {\r\n                if(document.querySelector('[name=\"statementtcjul_kpp\"]')) {\r\n                    document.querySelector('[name=\"statementtcjul_kpp\"]').parentElement.parentElement.classList.add('hidden');\r\n                    if(document.querySelector('[name=\"statementtcjul_ogrn\"]'))\r\n                        document.querySelector('[name=\"statementtcjul_ogrn\"]').parentElement.parentElement.classList.add('fr');\r\n                }\r\n                if(document.querySelector('[name=\"statementtcjul_tel\"]'))\r\n                    document.querySelector('[name=\"statementtcjul_tel\"]').parentElement.parentElement.classList.add('hidden');\r\n                if(document.querySelector('[name=\"statementtcjul_email\"]'))\r\n                    document.querySelector('[name=\"statementtcjul_email\"]').parentElement.parentElement.classList.add('hidden');\r\n\r\n            }\r\n\r\n        }\r\n    });\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hideForUL);\n\n//# sourceURL=webpack://rks/./src/js/modules/postService/hideForUL.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/lk_settings.js");
/******/ 	
/******/ })()
;