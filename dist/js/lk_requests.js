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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modals_hideInstructions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals/hideInstructions.js */ \"./src/js/modules/modals/hideInstructions.js\");\n\n$(document).ready(function () {\n  // .lk_menu стили для пункта меню\n  function setActiveMenuItem() {\n    var menuItems = $('.lk_menu__list_item a');\n    var pathname = window.location.pathname.split('/');\n    menuItems.each(function (e) {\n      var menuItem = $(this);\n      var menuItemHref = menuItem.attr('href');\n      var parentItem = menuItem.parent();\n      var pathnameLastItem = pathname[pathname.length - 1];\n      menuItemHref == pathnameLastItem ? parentItem.addClass('active') : parentItem.removeClass('active');\n    });\n  }\n\n  setActiveMenuItem(); // показ меню\n  // function toggleMenu() {\n  //   const lkMenuBurger = $('.lk_menu__burger'),\n  //         lkMenuList = $('.lk_menu__list'),\n  //         lkMenuClose = $('.lk_menu__close');\n  //\n  //   lkMenuBurger.click(function() {\n  //     lkMenuList.addClass('active');\n  //   });\n  //\n  //   lkMenuClose.click(function() {\n  //     lkMenuList.removeClass('active');\n  //   });\n  // };\n  // toggleMenu();\n  // показ блока таблиц\n\n  function showTablesBlock() {\n    var itemShowMore = $('.item__show_more');\n    itemShowMore.click(function () {\n      $(this).toggleClass('active');\n      $(this).parent().next().toggleClass('hidden');\n    });\n  }\n\n  showTablesBlock(); // Модалка \"Удалить\"\n\n  var body = $('body');\n\n  function initModalDeleteRequest() {\n    var deleteRequest = $('.control_btns__link.delete_icon'),\n        deleteRequestModal = $('.modal_delete_request'),\n        deleteRequestModalContent = $('.modal_delete_request__content'),\n        deleteRequestModalClose = $('.modal_delete_request .close'),\n        deleteRequestModalCancel = $('.modal_delete_request .cancel'),\n        deleteRequestModalSubmit = $('.modal_delete_request .submit');\n    deleteRequest.click(function (e) {\n      e.preventDefault();\n      body.css('overflow', 'hidden');\n      deleteRequestModalContent.css('overflow-y', 'auto');\n      deleteRequestModalContent.css('overflow-x', 'hidden');\n      deleteRequestModal.removeClass('hidden');\n    });\n    deleteRequestModalClose.click(function (e) {\n      e.preventDefault();\n      body.css('overflow', 'auto');\n      deleteRequestModal.addClass('hidden');\n    });\n    deleteRequestModalCancel.click(function (e) {\n      e.preventDefault();\n      body.css('overflow', 'auto');\n      deleteRequestModal.addClass('hidden');\n    });\n    deleteRequestModalSubmit.click(function (e) {\n      e.preventDefault();\n      body.css('overflow', 'auto');\n      deleteRequestModal.addClass('hidden'); // обработчик удаления запроса/заявки\n    });\n  }\n\n  initModalDeleteRequest(); // Модалка \"Аннулировать\"\n  // function initModalAnnulRequest() {\n  //   const annulRequest = $('.control_btns__link.annul_icon'),\n  //         annulRequestModal = $('.modal_annul_request'),\n  //         annulRequestModalContent = $('.modal_annul_request__content'),\n  //         annulRequestModalClose = $('.modal_annul_request .close'),\n  //         annulRequestModalCancel = $('.modal_annul_request .cancel'),\n  //         annulRequestModalSubmit = $('.modal_annul_request .submit');\n  //\n  //   annulRequest.click(function(e) {\n  //     e.preventDefault();\n  //     body.css('overflow', 'hidden');\n  //     annulRequestModalContent.css('overflow-y', 'auto');\n  //     annulRequestModalContent.css('overflow-x', 'hidden');\n  //     annulRequestModal.removeClass('hidden');\n  //   });\n  //\n  //   annulRequestModalClose.click(function(e) {\n  //     e.preventDefault();\n  //     body.css('overflow', 'auto');\n  //     annulRequestModal.addClass('hidden');\n  //   });\n  //\n  //   annulRequestModalCancel.click(function(e) {\n  //     e.preventDefault();\n  //     body.css('overflow', 'auto');\n  //     annulRequestModal.addClass('hidden');\n  //   });\n  //\n  //   annulRequestModalSubmit.click(function(e) {\n  //     e.preventDefault();\n  //     body.css('overflow', 'auto');\n  //     annulRequestModal.addClass('hidden');\n  //\n  //     // обработчик аннулирования запроса/заявки\n  //\n  //   })\n  //\n  // }\n  // initModalAnnulRequest()\n  // Модалка \"Добавить ответ\"\n  // function initModalAddAnswer() {\n  //   const addAnswer = $('.add_answer__button'),\n  //         addAnswerModal = $('.modal_add_answer'),\n  //         addAnswerModalContent = $('.modal_add_answer__content'),\n  //         addAnswerModalClose = $('.modal_add_answer .close'),\n  //         addAnswerModalCancel = $('.modal_add_answer .cancel'),\n  //         addAnswerModalSubmit = $('.modal_add_answer .submit');\n  //\n  //   addAnswer.click(function(e) {\n  //     e.preventDefault();\n  //     body.css('overflow', 'hidden');\n  //     addAnswerModalContent.css('overflow-y', 'auto');\n  //     addAnswerModalContent.css('overflow-x', 'hidden');\n  //     addAnswerModal.removeClass('hidden');\n  //   });\n  //\n  //   addAnswerModalClose.click(function(e) {\n  //     e.preventDefault();\n  //     body.css('overflow', 'auto');\n  //     addAnswerModal.addClass('hidden');\n  //   });\n  //\n  //   addAnswerModalCancel.click(function(e) {\n  //     e.preventDefault();\n  //     body.css('overflow', 'auto');\n  //     addAnswerModal.addClass('hidden');\n  //   });\n  //\n  //   addAnswerModalSubmit.click(function(e) {\n  //     e.preventDefault();\n  //     body.css('overflow', 'auto');\n  //     addAnswerModal.addClass('hidden');\n  //\n  //     // обработчик отправки добавления ответа на сервер\n  //\n  //   })\n  //\n  // }\n  // initModalAddAnswer()\n  // Модалка \"Скачать инструкцию\"\n\n  function initModalDownloadInstructions() {\n    var instructionsBtn = $('.instructions__btn');\n    var instructionsModal = $('.modal_instructions');\n    var instructionsModalContent = $('.modal_instructions__content');\n    var instructionsModalClose = $('.modal_instructions .close');\n    instructionsBtn.click(function (e) {\n      e.preventDefault();\n      body.css('overflow', 'hidden');\n      instructionsModalContent.css('overflow-y', 'auto');\n      instructionsModalContent.css('overflow-x', 'hidden');\n      instructionsModal.removeClass('hidden');\n    });\n    instructionsModalClose.click(function (e) {\n      e.preventDefault();\n      body.css('overflow', 'auto');\n      instructionsModal.addClass('hidden');\n    });\n    (0,_modules_modals_hideInstructions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  }\n\n  initModalDownloadInstructions(); // тогл фильтра в Реестре\n\n  function initFilter() {\n    var filterBtn = $('.filter__btn');\n    var filterInput = $('.filter__input');\n    filterBtn.click(function (e) {\n      e.preventDefault();\n      setTimeout(function () {\n        filterInput.toggleClass('hidden');\n        filterBtn.toggleClass('active');\n      }, 200);\n    });\n  }\n\n  initFilter(); // тогл сортировки в Реестре\n\n  function initSort() {\n    var sortBtn = $('.sort__btn');\n    var sortContent = $('.sort__content');\n    var radioBtn = $('.radio');\n    sortBtn.click(function (e) {\n      e.preventDefault();\n      sortContent.toggleClass('hidden');\n      sortBtn.toggleClass('active');\n    });\n    radioBtn.click(function (e) {\n      // функция обработки сортировки\n      setTimeout(function () {\n        sortContent.toggleClass('hidden');\n        sortBtn.toggleClass('active');\n      }, 200);\n    });\n  }\n\n  initSort();\n});\n\n//# sourceURL=webpack://rks/./src/js/lk_requests.js?");

/***/ }),

/***/ "./src/js/modules/modals/hideInstructions.js":
/*!***************************************************!*\
  !*** ./src/js/modules/modals/hideInstructions.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction hideInstructions() {\n  var clienttype = \"unknown\";\n  var instr_links = document.querySelectorAll('.modal_instructions .instructions__link');\n  $.ajax({\n    url: \"./getClienttypeJson/\",\n    method: \"get\",\n    success: function success(data) {\n      clienttype = data.replaceAll('\"', '');\n      if (clienttype === 'unknown') return;\n      instr_links.forEach(function (l) {\n        if (!l.classList.contains(clienttype)) l.classList.add('hidden');\n      });\n    },\n    error: function error() {\n      console.log(\"Не удалось определить тип пользователя\");\n    }\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hideInstructions);\n\n//# sourceURL=webpack://rks/./src/js/modules/modals/hideInstructions.js?");

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