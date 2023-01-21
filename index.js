"use strict";
(self["webpackChunkwebpack_boilerplate"] = self["webpackChunkwebpack_boilerplate"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,900;1,300;1,400;1,500;1,600;1,800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 0.5rem 0;\r\n  background-color: #fafafa;\r\n  animation: fadeIn 3s;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from { opacity: 0; }\r\n  to { opacity: 1; }\r\n}\r\n\r\n.body_wrapper {\r\n  width: 70%;\r\n  height: 100vh;\r\n  margin: 2rem auto;\r\n}\r\n\r\nnav {\r\n  height: 50px;\r\n  display: flex;\r\n  border: 1px solid #e0e0e0;\r\n  border-radius: 7px;\r\n  margin: 0 0 2rem;\r\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\nnav ul {\r\n  flex: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 10px;\r\n}\r\n\r\nnav li {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 6px;\r\n  cursor: pointer;\r\n  color: #6a6262;\r\n  font-size: 1.1rem;\r\n}\r\n\r\nnav li:first-child {\r\n  background-color: rgb(158, 247, 228);\r\n  padding: 0.4rem;\r\n  border-radius: 5px;\r\n  font-weight: 800;\r\n}\r\n\r\nnav li:nth-child(3) {\r\n  padding: 0.4rem;\r\n}\r\n\r\nnav li:nth-child(4) {\r\n  margin-right: auto;\r\n}\r\n\r\nnav li:nth-child(2),\r\nnav li:nth-child(3),\r\nnav li:nth-child(4) {\r\n  border-left: 1px solid #c8c6c6;\r\n  padding-left: 0.5rem;\r\n}\r\n\r\nnav img {\r\n  width: 20px;\r\n  height: 20px;\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\nnav img:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n.details_container {\r\n  padding: 1rem 0.5rem;\r\n}\r\n\r\n.details_container h1 {\r\n  font-size: 1.5rem;\r\n  margin: 1rem 0;\r\n  padding-bottom: 1rem;\r\n  border-bottom: 1px solid #cac6c6;\r\n}\r\n\r\n.details_container p {\r\n  color: #6d6868;\r\n  line-height: 2;\r\n}\r\n\r\n.textArea {\r\n  max-width: 100%;\r\n  width: 100%;\r\n  white-space: pre-wrap;\r\n  padding: 0.5rem 0;\r\n  word-break: break-word;\r\n  caret-color: #37352f;\r\n  color: #222;\r\n  cursor: text;\r\n  position: relative;\r\n  border: none;\r\n  background: #fafafa;\r\n}\r\n\r\n.textArea:focus {\r\n  outline: none;\r\n}\r\n\r\n.textArea::placeholder {\r\n  color: #37352f;\r\n  font-size: 1rem;\r\n}\r\n\r\n[contenteditable]:empty::before {\r\n  content: attr(placeholder);\r\n  color: #37352f80;\r\n}\r\n\r\n.popup_container {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  width: 20rem;\r\n  height: 15rem;\r\n  background-color: #000;\r\n  color: #fff;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n  overflow-y: scroll;\r\n}\r\n\r\n.popup_container::-webkit-scrollbar {\r\n  width: 0.5rem;\r\n}\r\n\r\n.popup_container::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.popup_container::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n}\r\n\r\n.popup_container::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n.heading_popup {\r\n  padding: 1rem 0.5rem;\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  border-bottom: 1px solid #e0e0e0;\r\n}\r\n\r\n.list_popup {\r\n  padding: 0.5rem;\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.popup_item {\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n  padding: 0.5rem;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  color: #fff;\r\n}\r\n\r\n.popup_item:hover,\r\n.popup_item:focus,\r\n.popup_item:active {\r\n  background-color: rgb(139, 136, 136);\r\n  outline: none;\r\n}\r\n\r\n.popup_item div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n\r\n.popup_item p {\r\n  font-size: 0.8rem;\r\n  margin-top: 0.2rem;\r\n}\r\n\r\n.h1 {\r\n  font-size: 2rem;\r\n  color: rgb(239, 21, 178);\r\n  font-weight: 700;\r\n}\r\n\r\n.h2 {\r\n  font-size: 1.5rem;\r\n  color: blue;\r\n  font-weight: 600;\r\n}\r\n\r\n.h3 {\r\n  font-size: 1.25rem;\r\n  color: rgb(24, 189, 93);\r\n  font-weight: 500;\r\n}\r\n\r\n.h4 {\r\n  font-size: 1.125rem;\r\n  color: rgb(28, 173, 236);\r\n  font-weight: 500;\r\n}\r\n\r\n.h5 {\r\n  font-size: 1rem;\r\n  color: rgb(197, 232, 40);\r\n  font-weight: 500;\r\n}\r\n\r\n.h6 {\r\n  font-size: 0.875rem;\r\n  color: rgb(255, 0, 0);\r\n  font-weight: 500;\r\n}\r\n\r\n.p {\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  nav img {\r\n    width: 15px;\r\n    height: 15px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,900;1,300;1,400;1,500;1,600;1,800&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 0.5rem 0;\r\n  background-color: #fafafa;\r\n  animation: fadeIn 3s;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from { opacity: 0; }\r\n  to { opacity: 1; }\r\n}\r\n\r\n.body_wrapper {\r\n  width: 70%;\r\n  height: 100vh;\r\n  margin: 2rem auto;\r\n}\r\n\r\nnav {\r\n  height: 50px;\r\n  display: flex;\r\n  border: 1px solid #e0e0e0;\r\n  border-radius: 7px;\r\n  margin: 0 0 2rem;\r\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\nnav ul {\r\n  flex: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 10px;\r\n}\r\n\r\nnav li {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 6px;\r\n  cursor: pointer;\r\n  color: #6a6262;\r\n  font-size: 1.1rem;\r\n}\r\n\r\nnav li:first-child {\r\n  background-color: rgb(158, 247, 228);\r\n  padding: 0.4rem;\r\n  border-radius: 5px;\r\n  font-weight: 800;\r\n}\r\n\r\nnav li:nth-child(3) {\r\n  padding: 0.4rem;\r\n}\r\n\r\nnav li:nth-child(4) {\r\n  margin-right: auto;\r\n}\r\n\r\nnav li:nth-child(2),\r\nnav li:nth-child(3),\r\nnav li:nth-child(4) {\r\n  border-left: 1px solid #c8c6c6;\r\n  padding-left: 0.5rem;\r\n}\r\n\r\nnav img {\r\n  width: 20px;\r\n  height: 20px;\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\nnav img:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n.details_container {\r\n  padding: 1rem 0.5rem;\r\n}\r\n\r\n.details_container h1 {\r\n  font-size: 1.5rem;\r\n  margin: 1rem 0;\r\n  padding-bottom: 1rem;\r\n  border-bottom: 1px solid #cac6c6;\r\n}\r\n\r\n.details_container p {\r\n  color: #6d6868;\r\n  line-height: 2;\r\n}\r\n\r\n.textArea {\r\n  max-width: 100%;\r\n  width: 100%;\r\n  white-space: pre-wrap;\r\n  padding: 0.5rem 0;\r\n  word-break: break-word;\r\n  caret-color: #37352f;\r\n  color: #222;\r\n  cursor: text;\r\n  position: relative;\r\n  border: none;\r\n  background: #fafafa;\r\n}\r\n\r\n.textArea:focus {\r\n  outline: none;\r\n}\r\n\r\n.textArea::placeholder {\r\n  color: #37352f;\r\n  font-size: 1rem;\r\n}\r\n\r\n[contenteditable]:empty::before {\r\n  content: attr(placeholder);\r\n  color: #37352f80;\r\n}\r\n\r\n.popup_container {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  width: 20rem;\r\n  height: 15rem;\r\n  background-color: #000;\r\n  color: #fff;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n  overflow-y: scroll;\r\n}\r\n\r\n.popup_container::-webkit-scrollbar {\r\n  width: 0.5rem;\r\n}\r\n\r\n.popup_container::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n.popup_container::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n}\r\n\r\n.popup_container::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\r\n}\r\n\r\n.heading_popup {\r\n  padding: 1rem 0.5rem;\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  border-bottom: 1px solid #e0e0e0;\r\n}\r\n\r\n.list_popup {\r\n  padding: 0.5rem;\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.popup_item {\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n  padding: 0.5rem;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  color: #fff;\r\n}\r\n\r\n.popup_item:hover,\r\n.popup_item:focus,\r\n.popup_item:active {\r\n  background-color: rgb(139, 136, 136);\r\n  outline: none;\r\n}\r\n\r\n.popup_item div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n\r\n.popup_item p {\r\n  font-size: 0.8rem;\r\n  margin-top: 0.2rem;\r\n}\r\n\r\n.h1 {\r\n  font-size: 2rem;\r\n  color: rgb(239, 21, 178);\r\n  font-weight: 700;\r\n}\r\n\r\n.h2 {\r\n  font-size: 1.5rem;\r\n  color: blue;\r\n  font-weight: 600;\r\n}\r\n\r\n.h3 {\r\n  font-size: 1.25rem;\r\n  color: rgb(24, 189, 93);\r\n  font-weight: 500;\r\n}\r\n\r\n.h4 {\r\n  font-size: 1.125rem;\r\n  color: rgb(28, 173, 236);\r\n  font-weight: 500;\r\n}\r\n\r\n.h5 {\r\n  font-size: 1rem;\r\n  color: rgb(197, 232, 40);\r\n  font-weight: 500;\r\n}\r\n\r\n.h6 {\r\n  font-size: 0.875rem;\r\n  color: rgb(255, 0, 0);\r\n  font-weight: 500;\r\n}\r\n\r\n.p {\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  nav img {\r\n    width: 15px;\r\n    height: 15px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _modules_handleInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/handleInput.js */ "./src/modules/handleInput.js");



(0,_modules_handleInput_js__WEBPACK_IMPORTED_MODULE_1__["default"])();


/***/ }),

/***/ "./src/modules/.data.js":
/*!******************************!*\
  !*** ./src/modules/.data.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "optionsData": () => (/* binding */ optionsData)
/* harmony export */ });
const optionsData = [
    {
      title: 'Heading 1',
      description: 'Big Section heading',
      type: 'h1',
    },
    {
      title: 'Heading 2',
      description: 'Medium Section heading',
      type: 'h2',
    },
    {
      title: 'Heading 3',
      description: 'Small Section heading',
      type: 'h3',
    },
    {
      title: 'Heading 4',
      description: 'Big Subsection heading',
      type: 'h4',
    },
    {
      title: 'Heading 5',
      description: 'Medium Subsection heading',
      type: 'h5',
    },
    {
      title: 'Heading 6',
      description: 'Small Subsection heading',
      type: 'h6',
    },
    {
      title: 'Paragraph',
      description: 'Normal text',
      type: 'p',
    },
  ];
  

/***/ }),

/***/ "./src/modules/createInput.js":
/*!************************************!*\
  !*** ./src/modules/createInput.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createInput = (currentInput, currentId) => {
  const newInput = document.createElement('div');
  newInput.classList.add('textArea');
  newInput.setAttribute('contenteditable', true);
  newInput.setAttribute('placeholder', "Type '/' for blocks");
  newInput.setAttribute('id', `${Number(currentId) + 1}`);

  currentInput.insertAdjacentElement('afterend', newInput);
  newInput.focus();

  return newInput;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createInput);


/***/ }),

/***/ "./src/modules/createOption.js":
/*!*************************************!*\
  !*** ./src/modules/createOption.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createOption = (option) => {
  const { title, description, type } = option;
  return `
    <button class="popup_item" data-type="${type}">
    <div>
      <h4>${title}</h4>
      <p>${description}</p>
    </div>
    </button>`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createOption);


/***/ }),

/***/ "./src/modules/createTag.js":
/*!**********************************!*\
  !*** ./src/modules/createTag.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ "./src/modules/popup.js");


const createTag = (input, tagType) => {
  input.className = 'textArea';
  input.classList.add(tagType);
  input.textContent = input.textContent.slice(2).trim();
  // eslint-disable-next-line no-unused-expressions
  tagType === 'p'
    ? input.setAttribute('placeholder', 'Paragraph')
    : input.setAttribute('placeholder', `Heading ${tagType}`);
  input.focus();
  (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__.removePopup)();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTag);


/***/ }),

/***/ "./src/modules/filterOptions.js":
/*!**************************************!*\
  !*** ./src/modules/filterOptions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const filterOptions = (searchInput) => {
  searchInput = searchInput.slice(1);
  const options = [...document.querySelectorAll('.popup_item')];
  options.forEach((option) => {
    const title = option.querySelector('h4').textContent;
    option.style.display = title
      .toLowerCase()
      .includes(searchInput.toLowerCase())
      ? 'flex'
      : 'none';
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterOptions);


/***/ }),

/***/ "./src/modules/handleInput.js":
/*!************************************!*\
  !*** ./src/modules/handleInput.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ "./src/modules/popup.js");
/* harmony import */ var _createInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createInput.js */ "./src/modules/createInput.js");
/* harmony import */ var _selectOption_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectOption.js */ "./src/modules/selectOption.js");
/* harmony import */ var _filterOptions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filterOptions.js */ "./src/modules/filterOptions.js");
/* harmony import */ var _createTag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTag.js */ "./src/modules/createTag.js");






const handleInput = (input = document.getElementById('1')) => {
  input.addEventListener('input', () => {
    if (input.textContent[0] === '/') {
      (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__.createPopup)(input);
      (0,_selectOption_js__WEBPACK_IMPORTED_MODULE_2__["default"])(input);
      (0,_filterOptions_js__WEBPACK_IMPORTED_MODULE_3__["default"])(input.textContent);
    } else {
      (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__.removePopup)();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const text = input.textContent;
      if (text[0] === '/' && text[1] === '1') (0,_createTag_js__WEBPACK_IMPORTED_MODULE_4__["default"])(input, 'h1');
      if (text[0] === '/' && text[1] === '2') (0,_createTag_js__WEBPACK_IMPORTED_MODULE_4__["default"])(input, 'h2');
      if (text === '') input.removeAttribute('placeholder');

      const newInput = (0,_createInput_js__WEBPACK_IMPORTED_MODULE_1__["default"])(input, input.id);
      handleInput(newInput);
    }

    if (e.key === 'Backspace' && input.textContent.length === 0 && input.id !== '1') {
      const previousInput = input.previousElementSibling;
      input.remove();
      previousInput.setAttribute('placeholder', "Type '/' for blocks");
      previousInput.textContent += ' ';
      previousInput.focus();
      const range = document.createRange();
      const sel = window.getSelection();
      range.setStart(
        previousInput.childNodes[0] || previousInput,
        previousInput.textContent.length,
      );
      sel.removeAllRanges();
      sel.addRange(range);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleInput);


/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopup": () => (/* binding */ createPopup),
/* harmony export */   "removePopup": () => (/* binding */ removePopup)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./.data.js */ "./src/modules/.data.js");
/* harmony import */ var _createOption_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createOption.js */ "./src/modules/createOption.js");



let flag = false;
let active = -1;

const createPopup = (currentInput) => {
  if (flag) return;
  const popupHtml = `
  <div class="popup_container">
    <div class="heading_popup">
      <h4>Basic Blocks</h4>
    </div>
    <div class="list_popup" role="listitem">
      ${_data_js__WEBPACK_IMPORTED_MODULE_0__.optionsData.map((option) => (0,_createOption_js__WEBPACK_IMPORTED_MODULE_1__["default"])(option)).join('')}
    </div>
  </div>`;

  currentInput.insertAdjacentHTML('afterend', popupHtml);
  flag = true;
};

const removePopup = () => {
  const popup = document.querySelector('.popup_container');
  if (popup) {
    popup.remove();
    flag = false;
  }
};

document.addEventListener('keydown', (e) => {
  const popOptions = [...document.querySelectorAll('.popup_item')];
  if (!flag) return;
  if (e.key === 'ArrowDown' && active < popOptions.length - 1) {
    active += 1;
    popOptions[active].focus();
  }
  if (e.key === 'ArrowUp' && active > 0) {
    active -= 1;
    popOptions[active].focus();
  }
  if (e.key === 'Escape') removePopup();
});

document.addEventListener('click', (e) => {
  if (e.target.closest('.popup')) return;
  removePopup();
});




/***/ }),

/***/ "./src/modules/selectOption.js":
/*!*************************************!*\
  !*** ./src/modules/selectOption.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTag.js */ "./src/modules/createTag.js");


const selectOption = (input) => {
  const options = document.querySelectorAll('.popup_item');
  options.forEach((option) => {
    option.addEventListener('click', () => {
      const tagType = option.getAttribute('data-type');
      (0,_createTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input, tagType);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectOption);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLE9BQU8sWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssMkdBQTJHLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLHNCQUFzQixXQUFX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QUFNLHNEQUFXO0FBQ2pCLE1BQU0sNERBQVk7QUFDbEIsTUFBTSw2REFBYTtBQUNuQixNQUFNO0FBQ04sTUFBTSxzREFBVztBQUNqQjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMseURBQVM7QUFDdkQsOENBQThDLHlEQUFTO0FBQ3ZEOztBQUVBLHVCQUF1QiwyREFBVztBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DYztBQUNJOztBQUU3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFlLGFBQWEsNERBQVk7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVtQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pERzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0seURBQVM7QUFDZixLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBLGlFQUFlLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvLmRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL2NyZWF0ZUlucHV0LmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlcy9jcmVhdGVPcHRpb24uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL2NyZWF0ZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvZmlsdGVyT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvaGFuZGxlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL3BvcHVwLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlcy9zZWxlY3RPcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDQwMDswLDUwMDswLDkwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxyXFxuICBhbmltYXRpb246IGZhZGVJbiAzcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcclxcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cXHJcXG4gIHRvIHsgb3BhY2l0eTogMTsgfVxcclxcbn1cXHJcXG5cXHJcXG4uYm9keV93cmFwcGVyIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gIG1hcmdpbjogMCAwIDJyZW07XFxyXFxuICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGxpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDZweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiAjNmE2MjYyO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbm5hdiBsaTpmaXJzdC1jaGlsZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU4LCAyNDcsIDIyOCk7XFxyXFxuICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgbGk6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGxpOm50aC1jaGlsZCg0KSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbm5hdiBsaTpudGgtY2hpbGQoMiksXFxyXFxubmF2IGxpOm50aC1jaGlsZCgzKSxcXHJcXG5uYXYgbGk6bnRoLWNoaWxkKDQpIHtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2M4YzZjNjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgaW1nIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGltZzpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzX2NvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHNfY29udGFpbmVyIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2FjNmM2O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsc19jb250YWluZXIgcCB7XFxyXFxuICBjb2xvcjogIzZkNjg2ODtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dEFyZWEge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcXHJcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxyXFxuICBjYXJldC1jb2xvcjogIzM3MzUyZjtcXHJcXG4gIGNvbG9yOiAjMjIyO1xcclxcbiAgY3Vyc29yOiB0ZXh0O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRBcmVhOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50ZXh0QXJlYTo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6ICMzNzM1MmY7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbltjb250ZW50ZWRpdGFibGVdOmVtcHR5OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogYXR0cihwbGFjZWhvbGRlcik7XFxyXFxuICBjb2xvcjogIzM3MzUyZjgwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMjByZW07XFxyXFxuICBoZWlnaHQ6IDE1cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjODg4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGluZ19wb3B1cCB7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RfcG9wdXAge1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9pdGVtIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX2l0ZW06aG92ZXIsXFxyXFxuLnBvcHVwX2l0ZW06Zm9jdXMsXFxyXFxuLnBvcHVwX2l0ZW06YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDEzNiwgMTM2KTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9pdGVtIGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfaXRlbSBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaDEge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY29sb3I6IHJnYigyMzksIDIxLCAxNzgpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6IGJsdWU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaDMge1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgY29sb3I6IHJnYigyNCwgMTg5LCA5Myk7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaDQge1xcclxcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMjgsIDE3MywgMjM2KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5oNSB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBjb2xvcjogcmdiKDE5NywgMjMyLCA0MCk7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaDYge1xcclxcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5wIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgbmF2IGltZyB7XFxyXFxuICAgIHdpZHRoOiAxNXB4O1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsT0FBTyxVQUFVLEVBQUU7RUFDbkIsS0FBSyxVQUFVLEVBQUU7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7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Zm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCw0MDA7MCw1MDA7MCw5MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw4MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlSW4gM3M7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXHJcXG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XFxyXFxuICB0byB7IG9wYWNpdHk6IDE7IH1cXHJcXG59XFxyXFxuXFxyXFxuLmJvZHlfd3JhcHBlciB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICBtYXJnaW46IDAgMCAycmVtO1xcclxcbiAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbm5hdiBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiA2cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogIzZhNjI2MjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgbGk6Zmlyc3QtY2hpbGQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OCwgMjQ3LCAyMjgpO1xcclxcbiAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGxpOm50aC1jaGlsZCgzKSB7XFxyXFxuICBwYWRkaW5nOiAwLjRyZW07XFxyXFxufVxcclxcblxcclxcbm5hdiBsaTpudGgtY2hpbGQoNCkge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgbGk6bnRoLWNoaWxkKDIpLFxcclxcbm5hdiBsaTpudGgtY2hpbGQoMyksXFxyXFxubmF2IGxpOm50aC1jaGlsZCg0KSB7XFxyXFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjOGM2YzY7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGltZyB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbm5hdiBpbWc6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsc19jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogMXJlbSAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzX2NvbnRhaW5lciBoMSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NhYzZjNjtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHNfY29udGFpbmVyIHAge1xcclxcbiAgY29sb3I6ICM2ZDY4Njg7XFxyXFxuICBsaW5lLWhlaWdodDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRBcmVhIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDA7XFxyXFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcclxcbiAgY2FyZXQtY29sb3I6ICMzNzM1MmY7XFxyXFxuICBjb2xvcjogIzIyMjtcXHJcXG4gIGN1cnNvcjogdGV4dDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxyXFxufVxcclxcblxcclxcbi50ZXh0QXJlYTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dEFyZWE6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiAjMzczNTJmO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5bY29udGVudGVkaXRhYmxlXTplbXB0eTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IGF0dHIocGxhY2Vob2xkZXIpO1xcclxcbiAgY29sb3I6ICMzNzM1MmY4MDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX2NvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDIwcmVtO1xcclxcbiAgaGVpZ2h0OiAxNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX2NvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX2NvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX2NvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogIzg4ODtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX2NvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmdfcG9wdXAge1xcclxcbiAgcGFkZGluZzogMXJlbSAwLjVyZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XFxyXFxufVxcclxcblxcclxcbi5saXN0X3BvcHVwIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfaXRlbSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9pdGVtOmhvdmVyLFxcclxcbi5wb3B1cF9pdGVtOmZvY3VzLFxcclxcbi5wb3B1cF9pdGVtOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAxMzYsIDEzNik7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfaXRlbSBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX2l0ZW0gcCB7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMjM5LCAyMSwgMTc4KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5oMiB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiBibHVlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMjQsIDE4OSwgOTMpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmg0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuICBjb2xvcjogcmdiKDI4LCAxNzMsIDIzNik7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaDUge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgY29sb3I6IHJnYigxOTcsIDIzMiwgNDApO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmg2IHtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxuICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucCB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIG5hdiBpbWcge1xcclxcbiAgICB3aWR0aDogMTVweDtcXHJcXG4gICAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCBoYW5kbGVJbnB1dCBmcm9tICcuL21vZHVsZXMvaGFuZGxlSW5wdXQuanMnO1xuXG5oYW5kbGVJbnB1dCgpO1xuIiwiZXhwb3J0IGNvbnN0IG9wdGlvbnNEYXRhID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0hlYWRpbmcgMScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnQmlnIFNlY3Rpb24gaGVhZGluZycsXHJcbiAgICAgIHR5cGU6ICdoMScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0hlYWRpbmcgMicsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnTWVkaXVtIFNlY3Rpb24gaGVhZGluZycsXHJcbiAgICAgIHR5cGU6ICdoMicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0hlYWRpbmcgMycsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnU21hbGwgU2VjdGlvbiBoZWFkaW5nJyxcclxuICAgICAgdHlwZTogJ2gzJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnSGVhZGluZyA0JyxcclxuICAgICAgZGVzY3JpcHRpb246ICdCaWcgU3Vic2VjdGlvbiBoZWFkaW5nJyxcclxuICAgICAgdHlwZTogJ2g0JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnSGVhZGluZyA1JyxcclxuICAgICAgZGVzY3JpcHRpb246ICdNZWRpdW0gU3Vic2VjdGlvbiBoZWFkaW5nJyxcclxuICAgICAgdHlwZTogJ2g1JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnSGVhZGluZyA2JyxcclxuICAgICAgZGVzY3JpcHRpb246ICdTbWFsbCBTdWJzZWN0aW9uIGhlYWRpbmcnLFxyXG4gICAgICB0eXBlOiAnaDYnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdQYXJhZ3JhcGgnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ05vcm1hbCB0ZXh0JyxcclxuICAgICAgdHlwZTogJ3AnLFxyXG4gICAgfSxcclxuICBdO1xyXG4gICIsImNvbnN0IGNyZWF0ZUlucHV0ID0gKGN1cnJlbnRJbnB1dCwgY3VycmVudElkKSA9PiB7XG4gIGNvbnN0IG5ld0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld0lucHV0LmNsYXNzTGlzdC5hZGQoJ3RleHRBcmVhJyk7XG4gIG5ld0lucHV0LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdHJ1ZSk7XG4gIG5ld0lucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBcIlR5cGUgJy8nIGZvciBibG9ja3NcIik7XG4gIG5ld0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtOdW1iZXIoY3VycmVudElkKSArIDF9YCk7XG5cbiAgY3VycmVudElucHV0Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBuZXdJbnB1dCk7XG4gIG5ld0lucHV0LmZvY3VzKCk7XG5cbiAgcmV0dXJuIG5ld0lucHV0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSW5wdXQ7XG4iLCJjb25zdCBjcmVhdGVPcHRpb24gPSAob3B0aW9uKSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCB0eXBlIH0gPSBvcHRpb247XG4gIHJldHVybiBgXG4gICAgPGJ1dHRvbiBjbGFzcz1cInBvcHVwX2l0ZW1cIiBkYXRhLXR5cGU9XCIke3R5cGV9XCI+XG4gICAgPGRpdj5cbiAgICAgIDxoND4ke3RpdGxlfTwvaDQ+XG4gICAgICA8cD4ke2Rlc2NyaXB0aW9ufTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8L2J1dHRvbj5gO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlT3B0aW9uO1xuIiwiaW1wb3J0IHsgcmVtb3ZlUG9wdXAgfSBmcm9tICcuL3BvcHVwLmpzJztcblxuY29uc3QgY3JlYXRlVGFnID0gKGlucHV0LCB0YWdUeXBlKSA9PiB7XG4gIGlucHV0LmNsYXNzTmFtZSA9ICd0ZXh0QXJlYSc7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQodGFnVHlwZSk7XG4gIGlucHV0LnRleHRDb250ZW50ID0gaW5wdXQudGV4dENvbnRlbnQuc2xpY2UoMikudHJpbSgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gIHRhZ1R5cGUgPT09ICdwJ1xuICAgID8gaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQYXJhZ3JhcGgnKVxuICAgIDogaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGBIZWFkaW5nICR7dGFnVHlwZX1gKTtcbiAgaW5wdXQuZm9jdXMoKTtcbiAgcmVtb3ZlUG9wdXAoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhZztcbiIsImNvbnN0IGZpbHRlck9wdGlvbnMgPSAoc2VhcmNoSW5wdXQpID0+IHtcbiAgc2VhcmNoSW5wdXQgPSBzZWFyY2hJbnB1dC5zbGljZSgxKTtcbiAgY29uc3Qgb3B0aW9ucyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfaXRlbScpXTtcbiAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IG9wdGlvbi5xdWVyeVNlbGVjdG9yKCdoNCcpLnRleHRDb250ZW50O1xuICAgIG9wdGlvbi5zdHlsZS5kaXNwbGF5ID0gdGl0bGVcbiAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAuaW5jbHVkZXMoc2VhcmNoSW5wdXQudG9Mb3dlckNhc2UoKSlcbiAgICAgID8gJ2ZsZXgnXG4gICAgICA6ICdub25lJztcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaWx0ZXJPcHRpb25zO1xuIiwiaW1wb3J0IHsgY3JlYXRlUG9wdXAsIHJlbW92ZVBvcHVwIH0gZnJvbSAnLi9wb3B1cC5qcyc7XG5pbXBvcnQgY3JlYXRlSW5wdXQgZnJvbSAnLi9jcmVhdGVJbnB1dC5qcyc7XG5pbXBvcnQgc2VsZWN0T3B0aW9uIGZyb20gJy4vc2VsZWN0T3B0aW9uLmpzJztcbmltcG9ydCBmaWx0ZXJPcHRpb25zIGZyb20gJy4vZmlsdGVyT3B0aW9ucy5qcyc7XG5pbXBvcnQgY3JlYXRlVGFnIGZyb20gJy4vY3JlYXRlVGFnLmpzJztcblxuY29uc3QgaGFuZGxlSW5wdXQgPSAoaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnMScpKSA9PiB7XG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGlmIChpbnB1dC50ZXh0Q29udGVudFswXSA9PT0gJy8nKSB7XG4gICAgICBjcmVhdGVQb3B1cChpbnB1dCk7XG4gICAgICBzZWxlY3RPcHRpb24oaW5wdXQpO1xuICAgICAgZmlsdGVyT3B0aW9ucyhpbnB1dC50ZXh0Q29udGVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZVBvcHVwKCk7XG4gICAgfVxuICB9KTtcblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHRleHQgPSBpbnB1dC50ZXh0Q29udGVudDtcbiAgICAgIGlmICh0ZXh0WzBdID09PSAnLycgJiYgdGV4dFsxXSA9PT0gJzEnKSBjcmVhdGVUYWcoaW5wdXQsICdoMScpO1xuICAgICAgaWYgKHRleHRbMF0gPT09ICcvJyAmJiB0ZXh0WzFdID09PSAnMicpIGNyZWF0ZVRhZyhpbnB1dCwgJ2gyJyk7XG4gICAgICBpZiAodGV4dCA9PT0gJycpIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKTtcblxuICAgICAgY29uc3QgbmV3SW5wdXQgPSBjcmVhdGVJbnB1dChpbnB1dCwgaW5wdXQuaWQpO1xuICAgICAgaGFuZGxlSW5wdXQobmV3SW5wdXQpO1xuICAgIH1cblxuICAgIGlmIChlLmtleSA9PT0gJ0JhY2tzcGFjZScgJiYgaW5wdXQudGV4dENvbnRlbnQubGVuZ3RoID09PSAwICYmIGlucHV0LmlkICE9PSAnMScpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzSW5wdXQgPSBpbnB1dC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgaW5wdXQucmVtb3ZlKCk7XG4gICAgICBwcmV2aW91c0lucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBcIlR5cGUgJy8nIGZvciBibG9ja3NcIik7XG4gICAgICBwcmV2aW91c0lucHV0LnRleHRDb250ZW50ICs9ICcgJztcbiAgICAgIHByZXZpb3VzSW5wdXQuZm9jdXMoKTtcbiAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgIGNvbnN0IHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgIHJhbmdlLnNldFN0YXJ0KFxuICAgICAgICBwcmV2aW91c0lucHV0LmNoaWxkTm9kZXNbMF0gfHwgcHJldmlvdXNJbnB1dCxcbiAgICAgICAgcHJldmlvdXNJbnB1dC50ZXh0Q29udGVudC5sZW5ndGgsXG4gICAgICApO1xuICAgICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgc2VsLmFkZFJhbmdlKHJhbmdlKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlSW5wdXQ7XG4iLCJpbXBvcnQgeyBvcHRpb25zRGF0YSB9IGZyb20gJy4vLmRhdGEuanMnO1xuaW1wb3J0IGNyZWF0ZU9wdGlvbiBmcm9tICcuL2NyZWF0ZU9wdGlvbi5qcyc7XG5cbmxldCBmbGFnID0gZmFsc2U7XG5sZXQgYWN0aXZlID0gLTE7XG5cbmNvbnN0IGNyZWF0ZVBvcHVwID0gKGN1cnJlbnRJbnB1dCkgPT4ge1xuICBpZiAoZmxhZykgcmV0dXJuO1xuICBjb25zdCBwb3B1cEh0bWwgPSBgXG4gIDxkaXYgY2xhc3M9XCJwb3B1cF9jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGluZ19wb3B1cFwiPlxuICAgICAgPGg0PkJhc2ljIEJsb2NrczwvaDQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImxpc3RfcG9wdXBcIiByb2xlPVwibGlzdGl0ZW1cIj5cbiAgICAgICR7b3B0aW9uc0RhdGEubWFwKChvcHRpb24pID0+IGNyZWF0ZU9wdGlvbihvcHRpb24pKS5qb2luKCcnKX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+YDtcblxuICBjdXJyZW50SW5wdXQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIHBvcHVwSHRtbCk7XG4gIGZsYWcgPSB0cnVlO1xufTtcblxuY29uc3QgcmVtb3ZlUG9wdXAgPSAoKSA9PiB7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX2NvbnRhaW5lcicpO1xuICBpZiAocG9wdXApIHtcbiAgICBwb3B1cC5yZW1vdmUoKTtcbiAgICBmbGFnID0gZmFsc2U7XG4gIH1cbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICBjb25zdCBwb3BPcHRpb25zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cF9pdGVtJyldO1xuICBpZiAoIWZsYWcpIHJldHVybjtcbiAgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJyAmJiBhY3RpdmUgPCBwb3BPcHRpb25zLmxlbmd0aCAtIDEpIHtcbiAgICBhY3RpdmUgKz0gMTtcbiAgICBwb3BPcHRpb25zW2FjdGl2ZV0uZm9jdXMoKTtcbiAgfVxuICBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJyAmJiBhY3RpdmUgPiAwKSB7XG4gICAgYWN0aXZlIC09IDE7XG4gICAgcG9wT3B0aW9uc1thY3RpdmVdLmZvY3VzKCk7XG4gIH1cbiAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykgcmVtb3ZlUG9wdXAoKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbG9zZXN0KCcucG9wdXAnKSkgcmV0dXJuO1xuICByZW1vdmVQb3B1cCgpO1xufSk7XG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHVwLCByZW1vdmVQb3B1cCB9O1xuIiwiaW1wb3J0IGNyZWF0ZVRhZyBmcm9tICcuL2NyZWF0ZVRhZy5qcyc7XG5cbmNvbnN0IHNlbGVjdE9wdGlvbiA9IChpbnB1dCkgPT4ge1xuICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwX2l0ZW0nKTtcbiAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCB0YWdUeXBlID0gb3B0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyk7XG4gICAgICBjcmVhdGVUYWcoaW5wdXQsIHRhZ1R5cGUpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlbGVjdE9wdGlvbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==