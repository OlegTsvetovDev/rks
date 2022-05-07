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

/***/ "./src/js/lk_settings_fileinput.js":
/*!*****************************************!*\
  !*** ./src/js/lk_settings_fileinput.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n    function parseLimit(size) {\r\n      if (!size) return Number.MAX_VALUE;\r\n      if (typeof size == \"number\") return size > 0 ? size : Number.MAX_VALUE;\r\n      size = size.toString().toLowerCase();\r\n      size = /^(\\d+)(k|m)?$/g.exec(size);\r\n      if (!size) return Number.MAX_VALUE;\r\n      var result = parseInt(size[1], 10);\r\n      if (size[2] == \"k\")\r\n        result *= 1024;\r\n      else if (size[2] == \"m\")\r\n        result *= 1024 * 1024;\r\n      else if (size[2] == \"g\") result *= 1024 * 1024 * 1024;\r\n      return result;\r\n    }\r\n\r\n    function formatSize(size) {\r\n      var K = 1024;\r\n      var M = K * K;\r\n      var suffix = \"\";\r\n      if (size > K) {\r\n        size /= K;\r\n        suffix = \" кб\";\r\n      }\r\n      if (size > K) {\r\n        size /= K;\r\n        suffix = \" мб\";\r\n      }\r\n      size = size.toFixed(2);\r\n      size = size.replace(/0+$/gi, \"\").replace(/\\.$/gi, \"\");\r\n      return size + suffix;\r\n    }\r\n\r\n    var totalSize = 0;\r\n\r\n    function bindAttachment(div, input, size) {\r\n      div.find(\".delete_file_btn\").click(function (e) {\r\n        e.preventDefault();\r\n        e.stopPropagation();\r\n        totalSize -= size;\r\n        input.remove();\r\n        div.remove();\r\n      });\r\n    }\r\n\r\n    function bindFileInput(el) {\r\n\r\n      el = $(el);\r\n\r\n      el.change(function () {\r\n\r\n        var $this = $(this);\r\n        var label = $(\"label[for=\" + $this.attr(\"id\") + \"]\");\r\n        if (!label.length) return;\r\n\t\t\r\n        var div = $(\"<div class=\\\"attachment\\\" />\"); // style=\\\"display:grid;grid-template-columns: auto auto; justify-content: space-between;\\\" \r\n        var names = [];\r\n        var size = 0;\r\n        $(this.files).each(function (i, f) {\r\n          names.push(f.name);\r\n          size += f.size;\r\n          $(\"<div class=\\\"attachment__item\\\" />\") //\r\n            .text(f.name + \" (\" + formatSize(f.size) + \")\") //\r\n            .appendTo(div);\r\n          $(\"<a href=\\\"#\\\" class=\\\"delete_file_btn\\\" />\").appendTo(div); //style=\\\"display:block\\\"\r\n        });\r\n\r\n        if (names.length) {\r\n\r\n          var limit = parseLimit($this.attr(\"data-maxsize\"));\r\n\r\n          // Проверить лимит на размер выбранных файлов\r\n          if (totalSize + size > limit) {\r\n            alert(\"Ошибка\", \"Размер выбранных файлов \"\r\n              + formatSize(totalSize + size)\r\n              + \" превышает указанный лимит в \" + formatSize(limit));\r\n            $this.val(\"\");\r\n            setTimeout(function () {\r\n              $this.change();\r\n            }, 1);\r\n            return;\r\n          }\r\n\r\n          label.after(div);\r\n\r\n          var newInput = $this.clone();\r\n          newInput.val(\"\");\r\n          label.after(newInput);\r\n          bindFileInput(newInput);\r\n\r\n          $this.removeAttr(\"id\");\r\n          // Присвоим наименование поле выбора файла с указанным типом документа\r\n          var doctype_id = $this.attr('data-id');\r\n          $this.attr(\"name\", \"doc_\" + doctype_id);\r\n\r\n          totalSize += size;\r\n          bindAttachment(div, $this, size);\r\n\t\t  \r\n        }\r\n\r\n        else {\r\n          label.empty();\r\n        }\r\n\r\n      });\r\n\r\n    }\r\n    \r\n    $(function() {\r\n      bindFileInput(\".fileinput\");\r\n      });\r\n      \r\n    $(function() {\r\n\r\n         $(\".modaldelfileclose\").click(function(e) {\r\n             e.preventDefault();\r\n             var modal = e.target.parentNode.parentNode;\r\n             if (modal) modal.classList.add('hidden');\r\n         });\r\n\r\n         $(\"[data-target-modal-file^='confirm_']\").click(function(e) {\r\n             e.preventDefault();\r\n             var modal = document.getElementById(e.target.getAttribute('data-target-modal-file') || '');\r\n             if (modal) modal.classList.remove('hidden');\r\n         });\r\n\r\n         $(\"[id^='delete_cancel_']\").click(function() {\r\n             var uuid = $(this).attr(\"id\").replace(\"delete_cancel_\", \"\");\r\n             $(\"input#\" + uuid).prop(\"checked\", false);\r\n             $(\".modaldelfileclose\").trigger('click');\r\n         });\r\n\r\n         $(\"[id^='modal_accept_del_']\").click(function() {\r\n             var uuid = $(this).attr(\"id\").replace(\"modal_accept_del_\", \"\");\r\n             $(\"input#\" + uuid).prop(\"checked\", true);\r\n             $(\"label[for='\" + uuid + \"']\").hide();\r\n             $(\".attachment__item_\" + uuid).remove();\r\n             $(\".modaldelfileclose\").trigger('click');\r\n         });\r\n\r\n\r\n     });\n\n//# sourceURL=webpack://rks/./src/js/lk_settings_fileinput.js?");

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
/******/ 	__webpack_modules__["./src/js/lk_settings_fileinput.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;