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

/***/ "./src/js/lk_requests.js":
/*!*******************************!*\
  !*** ./src/js/lk_requests.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modals_hideInstructions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals/hideInstructions.js */ \"./src/js/modules/modals/hideInstructions.js\");\n\r\n\r\n$(document).ready(function() {\r\n\r\n  // .lk_menu стили для пункта меню\r\n  function setActiveMenuItem() {\r\n    const menuItems = $('.lk_menu__list_item a')\r\n    const pathname = window.location.pathname.split('/')\r\n\r\n    menuItems.each(function(e) {\r\n      const menuItem = $(this)\r\n      const menuItemHref = menuItem.attr('href')\r\n      const parentItem = menuItem.parent()\r\n      const pathnameLastItem = pathname[pathname.length - 1];\r\n\r\n      (menuItemHref == pathnameLastItem) ?\r\n        parentItem.addClass('active') :\r\n        parentItem.removeClass('active')\r\n    })\r\n\r\n  }\r\n  setActiveMenuItem()\r\n\r\n\r\n  // показ меню\r\n  // function toggleMenu() {\r\n  //   const lkMenuBurger = $('.lk_menu__burger'),\r\n  //         lkMenuList = $('.lk_menu__list'),\r\n  //         lkMenuClose = $('.lk_menu__close');\r\n  //\r\n  //   lkMenuBurger.click(function() {\r\n  //     lkMenuList.addClass('active');\r\n  //   });\r\n  //\r\n  //   lkMenuClose.click(function() {\r\n  //     lkMenuList.removeClass('active');\r\n  //   });\r\n  // };\r\n  // toggleMenu();\r\n\r\n\r\n  // показ блока таблиц\r\n  function showTablesBlock() {\r\n    const itemShowMore = $('.item__show_more')\r\n\r\n    itemShowMore.click(function() {\r\n      $(this).toggleClass('active')\r\n      $(this).parent().next().toggleClass('hidden')\r\n    })\r\n  }\r\n  showTablesBlock()\r\n\r\n\r\n  // Модалка \"Удалить\"\r\n  const body = $('body')\r\n\r\n  function initModalDeleteRequest() {\r\n    const deleteRequest = $('.control_btns__link.delete_icon'),\r\n          deleteRequestModal = $('.modal_delete_request'),\r\n          deleteRequestModalContent = $('.modal_delete_request__content'),\r\n          deleteRequestModalClose = $('.modal_delete_request .close'),\r\n          deleteRequestModalCancel = $('.modal_delete_request .cancel'),\r\n          deleteRequestModalSubmit = $('.modal_delete_request .submit');\r\n\r\n    deleteRequest.click(function(e) {\r\n      e.preventDefault();\r\n      body.css('overflow', 'hidden');\r\n      deleteRequestModalContent.css('overflow-y', 'auto');\r\n      deleteRequestModalContent.css('overflow-x', 'hidden');\r\n      deleteRequestModal.removeClass('hidden');\r\n    })\r\n\r\n    deleteRequestModalClose.click(function(e) {\r\n      e.preventDefault();\r\n      body.css('overflow', 'auto');\r\n      deleteRequestModal.addClass('hidden');\r\n    })\r\n\r\n    deleteRequestModalCancel.click(function(e) {\r\n      e.preventDefault();\r\n      body.css('overflow', 'auto');\r\n      deleteRequestModal.addClass('hidden');\r\n    })\r\n\r\n    deleteRequestModalSubmit.click(function(e) {\r\n      e.preventDefault();\r\n      body.css('overflow', 'auto');\r\n      deleteRequestModal.addClass('hidden');\r\n\r\n      // обработчик удаления запроса/заявки\r\n\r\n    })\r\n\r\n  }\r\n  initModalDeleteRequest()\r\n\r\n\r\n  // Модалка \"Аннулировать\"\r\n  // function initModalAnnulRequest() {\r\n  //   const annulRequest = $('.control_btns__link.annul_icon'),\r\n  //         annulRequestModal = $('.modal_annul_request'),\r\n  //         annulRequestModalContent = $('.modal_annul_request__content'),\r\n  //         annulRequestModalClose = $('.modal_annul_request .close'),\r\n  //         annulRequestModalCancel = $('.modal_annul_request .cancel'),\r\n  //         annulRequestModalSubmit = $('.modal_annul_request .submit');\r\n  //\r\n  //   annulRequest.click(function(e) {\r\n  //     e.preventDefault();\r\n  //     body.css('overflow', 'hidden');\r\n  //     annulRequestModalContent.css('overflow-y', 'auto');\r\n  //     annulRequestModalContent.css('overflow-x', 'hidden');\r\n  //     annulRequestModal.removeClass('hidden');\r\n  //   });\r\n  //\r\n  //   annulRequestModalClose.click(function(e) {\r\n  //     e.preventDefault();\r\n  //     body.css('overflow', 'auto');\r\n  //     annulRequestModal.addClass('hidden');\r\n  //   });\r\n  //\r\n  //   annulRequestModalCancel.click(function(e) {\r\n  //     e.preventDefault();\r\n  //     body.css('overflow', 'auto');\r\n  //     annulRequestModal.addClass('hidden');\r\n  //   });\r\n  //\r\n  //   annulRequestModalSubmit.click(function(e) {\r\n  //     e.preventDefault();\r\n  //     body.css('overflow', 'auto');\r\n  //     annulRequestModal.addClass('hidden');\r\n  //\r\n  //     // обработчик аннулирования запроса/заявки\r\n  //\r\n  //   })\r\n  //\r\n  // }\r\n  // initModalAnnulRequest()\r\n\r\n\r\n  // Модалка \"Добавить ответ\"\r\n  // function initModalAddAnswer() {\r\n  //   const addAnswer = $('.add_answer__button'),\r\n  //         addAnswerModal = $('.modal_add_answer'),\r\n  //         addAnswerModalContent = $('.modal_add_answer__content'),\r\n  //         addAnswerModalClose = $('.modal_add_answer .close'),\r\n  //         addAnswerModalCancel = $('.modal_add_answer .cancel'),\r\n  //         addAnswerModalSubmit = $('.modal_add_answer .submit');\r\n  //\r\n  //   addAnswer.click(function(e) {\r\n  //     e.preventDefault();\r\n  //     body.css('overflow', 'hidden');\r\n  //     addAnswerModalContent.css('overflow-y', 'auto');\r\n  //     addAnswerModalContent.css('overflow-x', 'hidden');\r\n  //     addAnswerModal.removeClass('hidden');\r\n  //   });\r\n  //\r\n  //   addAnswerModalClose.click(function(e) {\r\n  //     e.preventDefault();\r\n  //     body.css('overflow', 'auto');\r\n  //     addAnswerModal.addClass('hidden');\r\n  //   });\r\n  //\r\n  //   addAnswerModalCancel.click(function(e) {\r\n  //     e.preventDefault();\r\n  //     body.css('overflow', 'auto');\r\n  //     addAnswerModal.addClass('hidden');\r\n  //   });\r\n  //\r\n  //   addAnswerModalSubmit.click(function(e) {\r\n  //     e.preventDefault();\r\n  //     body.css('overflow', 'auto');\r\n  //     addAnswerModal.addClass('hidden');\r\n  //\r\n  //     // обработчик отправки добавления ответа на сервер\r\n  //\r\n  //   })\r\n  //\r\n  // }\r\n  // initModalAddAnswer()\r\n\r\n\r\n  // Модалка \"Скачать инструкцию\"\r\n  function initModalDownloadInstructions() {\r\n    const instructionsBtn = $('.instructions__btn')\r\n    const instructionsModal = $('.modal_instructions')\r\n    const instructionsModalContent = $('.modal_instructions__content')\r\n    const instructionsModalClose = $('.modal_instructions .close')\r\n\r\n    instructionsBtn.click(function (e) {\r\n      e.preventDefault()\r\n      body.css('overflow', 'hidden')\r\n      instructionsModalContent.css('overflow-y', 'auto')\r\n      instructionsModalContent.css('overflow-x', 'hidden')\r\n      instructionsModal.removeClass('hidden')\r\n    })\r\n\r\n    instructionsModalClose.click(function (e) {\r\n      e.preventDefault()\r\n      body.css('overflow', 'auto')\r\n      instructionsModal.addClass('hidden')\r\n    })\r\n\r\n    ;(0,_modules_modals_hideInstructions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n  }\r\n  initModalDownloadInstructions()\r\n\r\n\r\n // тогл фильтра в Реестре\r\n  function initFilter() {\r\n    const filterBtn = $('.filter__btn')\r\n    const filterInput = $('.filter__input')\r\n\r\n    filterBtn.click(function (e) {\r\n      e.preventDefault()\r\n      setTimeout(function () {\r\n        filterInput.toggleClass('hidden')\r\n        filterBtn.toggleClass('active')\r\n      }, 200)\r\n    })\r\n  }\r\n  initFilter()\r\n\r\n  // тогл сортировки в Реестре\r\n   function initSort() {\r\n     const sortBtn = $('.sort__btn')\r\n     const sortContent = $('.sort__content')\r\n     const radioBtn = $('.radio')\r\n\r\n     sortBtn.click(function (e) {\r\n       e.preventDefault()\r\n       sortContent.toggleClass('hidden')\r\n       sortBtn.toggleClass('active')\r\n     })\r\n\r\n     radioBtn.click(function (e) {\r\n\r\n       // функция обработки сортировки\r\n\r\n       setTimeout(() => {\r\n         sortContent.toggleClass('hidden')\r\n         sortBtn.toggleClass('active')\r\n       }, 200)\r\n     })\r\n\r\n   }\r\n   initSort()\r\n\r\n})\r\n\n\n//# sourceURL=webpack://rks/./src/js/lk_requests.js?");

/***/ }),

/***/ "./src/js/modules/modals/hideInstructions.js":
/*!***************************************************!*\
  !*** ./src/js/modules/modals/hideInstructions.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction hideInstructions() {\r\n    let clienttype = \"unkown\"\r\n    const instr_links = document.querySelectorAll('.modal_instructions .instructions__link')\r\n\r\n    $.ajax({\r\n        url: \"./getClienttypeJson/\",\r\n        success: function(data){\r\n\r\n            clienttype = data.replaceAll('\"', '')\r\n            if (clienttype === 'unknown') return\r\n            instr_links.forEach(l => {\r\n                if (!l.classList.contains(clienttype)) l.classList.add('hidden')\r\n            })\r\n        }\r\n    });\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hideInstructions);\n\n//# sourceURL=webpack://rks/./src/js/modules/modals/hideInstructions.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/lk_requests.js");
/******/ 	
/******/ })()
;