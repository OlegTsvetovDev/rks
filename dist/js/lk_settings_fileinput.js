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

eval("__webpack_require__.r(__webpack_exports__);\nfunction parseLimit(size) {\n  if (!size) return Number.MAX_VALUE;\n  if (typeof size == \"number\") return size > 0 ? size : Number.MAX_VALUE;\n  size = size.toString().toLowerCase();\n  size = /^(\\d+)(k|m)?$/g.exec(size);\n  if (!size) return Number.MAX_VALUE;\n  var result = parseInt(size[1], 10);\n  if (size[2] == \"k\") result *= 1024;else if (size[2] == \"m\") result *= 1024 * 1024;else if (size[2] == \"g\") result *= 1024 * 1024 * 1024;\n  return result;\n}\n\nfunction formatSize(size) {\n  var K = 1024;\n  var M = K * K;\n  var suffix = \"\";\n\n  if (size > K) {\n    size /= K;\n    suffix = \" кб\";\n  }\n\n  if (size > K) {\n    size /= K;\n    suffix = \" мб\";\n  }\n\n  size = size.toFixed(2);\n  size = size.replace(/0+$/gi, \"\").replace(/\\.$/gi, \"\");\n  return size + suffix;\n}\n\nvar totalSize = 0;\n\nfunction bindAttachment(div, input, size) {\n  div.find(\".delete_file_btn\").click(function (e) {\n    e.preventDefault();\n    e.stopPropagation();\n    totalSize -= size;\n    input.remove();\n    div.remove();\n  });\n}\n\nfunction bindFileInput(el) {\n  el = $(el);\n  el.change(function () {\n    var $this = $(this);\n    var label = $(\"label[for=\" + $this.attr(\"id\") + \"]\");\n    if (!label.length) return;\n    var div = $(\"<div class=\\\"attachment\\\" />\"); // style=\\\"display:grid;grid-template-columns: auto auto; justify-content: space-between;\\\" \n\n    var names = [];\n    var size = 0;\n    $(this.files).each(function (i, f) {\n      names.push(f.name);\n      size += f.size;\n      $(\"<div class=\\\"attachment__item\\\" />\") //\n      .text(f.name + \" (\" + formatSize(f.size) + \")\") //\n      .appendTo(div);\n      $(\"<a href=\\\"#\\\" class=\\\"delete_file_btn\\\" />\").appendTo(div); //style=\\\"display:block\\\"\n    });\n\n    if (names.length) {\n      var limit = parseLimit($this.attr(\"data-maxsize\")); // Проверить лимит на размер выбранных файлов\n\n      if (totalSize + size > limit) {\n        alert(\"Ошибка\", \"Размер выбранных файлов \" + formatSize(totalSize + size) + \" превышает указанный лимит в \" + formatSize(limit));\n        $this.val(\"\");\n        setTimeout(function () {\n          $this.change();\n        }, 1);\n        return;\n      }\n\n      label.after(div);\n      var newInput = $this.clone();\n      newInput.val(\"\");\n      label.after(newInput);\n      bindFileInput(newInput);\n      $this.removeAttr(\"id\"); // Присвоим наименование поле выбора файла с указанным типом документа\n\n      var doctype_id = $this.attr('data-id');\n      $this.attr(\"name\", \"doc_\" + doctype_id);\n      totalSize += size;\n      bindAttachment(div, $this, size);\n    } else {\n      label.empty();\n    }\n  });\n}\n\n$(function () {\n  bindFileInput(\".fileinput\");\n});\n$(function () {\n  $(\".modaldelfileclose\").click(function (e) {\n    e.preventDefault();\n    var modal = e.target.parentNode.parentNode;\n    if (modal) modal.classList.add('hidden');\n  });\n  $(\"[data-target-modal-file^='confirm_']\").click(function (e) {\n    e.preventDefault();\n    var modal = document.getElementById(e.target.getAttribute('data-target-modal-file') || '');\n    if (modal) modal.classList.remove('hidden');\n  });\n  $(\"[id^='delete_cancel_']\").click(function () {\n    var uuid = $(this).attr(\"id\").replace(\"delete_cancel_\", \"\");\n    $(\"input#\" + uuid).prop(\"checked\", false);\n    $(\".modaldelfileclose\").trigger('click');\n  });\n  $(\"[id^='modal_accept_del_']\").click(function () {\n    var uuid = $(this).attr(\"id\").replace(\"modal_accept_del_\", \"\");\n    $(\"input#\" + uuid).prop(\"checked\", true);\n    $(\"label[for='\" + uuid + \"']\").hide();\n    $(\".attachment__item_\" + uuid).remove();\n    $(\".modaldelfileclose\").trigger('click');\n  });\n});\n\n//# sourceURL=webpack://rks/./src/js/lk_settings_fileinput.js?");

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