"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/contacts.js":
/*!********************************!*\
  !*** ./components/contacts.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cards_blogs_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards/blogs-card */ \"./components/cards/blogs-card.js\");\n/* harmony import */ var _data_contacts_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/contacts-data */ \"./components/data/contacts-data.js\");\nvar _this = undefined;\n\n\n\nvar Contacts = function() {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-start items-start h-screen ml-52 mt-16 p-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-[#FF9001] font-bold text-2xl\",\n                children: \"Contact me\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\tutorials\\\\nextJs\\\\my-portfolio\\\\components\\\\contacts.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-start justify-center\",\n                children: _data_contacts_data__WEBPACK_IMPORTED_MODULE_2__.ContactsData.map(function(contact) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"\".concat(contact.name, \" : \").concat(contact.address)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\tutorials\\\\nextJs\\\\my-portfolio\\\\components\\\\contacts.js\",\n                            lineNumber: 11,\n                            columnNumber: 13\n                        }, _this1)\n                    }, contact.name, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\tutorials\\\\nextJs\\\\my-portfolio\\\\components\\\\contacts.js\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\tutorials\\\\nextJs\\\\my-portfolio\\\\components\\\\contacts.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\tutorials\\\\nextJs\\\\my-portfolio\\\\components\\\\contacts.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, _this);\n};\n_c = Contacts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contacts);\nvar _c;\n$RefreshReg$(_c, \"Contacts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRhY3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQTJDO0FBQ1M7QUFFcEQsSUFBTUUsUUFBUSxHQUFHLFdBQU07O0lBQ3JCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxtRUFBbUU7OzBCQUNoRiw4REFBQ0MsTUFBSTtnQkFBQ0QsU0FBUyxFQUFDLG1DQUFtQzswQkFBQyxZQUFVOzs7OztxQkFBTzswQkFDckUsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQywwQ0FBMEM7MEJBQ3RESCxpRUFBZ0IsQ0FBQyxTQUFDTSxPQUFPO3lDQUN4Qiw4REFBQ0osS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLE1BQU07a0NBQ25CLDRFQUFDQyxNQUFJO3NDQUFFLEVBQUMsQ0FBb0JFLE1BQWUsQ0FBakNBLE9BQU8sQ0FBQ0MsSUFBSSxFQUFDLEtBQUcsQ0FBa0IsUUFBaEJELE9BQU8sQ0FBQ0UsT0FBTyxDQUFFOzs7OztrQ0FBUTt1QkFENUJGLE9BQU8sQ0FBQ0MsSUFBSTs7Ozs4QkFFakM7aUJBQ1AsQ0FBQzs7Ozs7cUJBQ0U7Ozs7OzthQUNGLENBQ047Q0FDSDtBQWJLTixLQUFBQSxRQUFRO0FBZWQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbnRhY3RzLmpzPzE1NGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2dzQ2FyZCBmcm9tIFwiLi9jYXJkcy9ibG9ncy1jYXJkXCI7XHJcbmltcG9ydCB7IENvbnRhY3RzRGF0YSB9IGZyb20gXCIuL2RhdGEvY29udGFjdHMtZGF0YVwiO1xyXG5cclxuY29uc3QgQ29udGFjdHMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0IGgtc2NyZWVuIG1sLTUyIG10LTE2IHAtMTBcIj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bI0ZGOTAwMV0gZm9udC1ib2xkIHRleHQtMnhsXCI+Q29udGFjdCBtZTwvc3Bhbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAge0NvbnRhY3RzRGF0YS5tYXAoKGNvbnRhY3QpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiIGtleT17Y29udGFjdC5uYW1lfT5cclxuICAgICAgICAgICAgPHNwYW4+e2Ake2NvbnRhY3QubmFtZX0gOiAke2NvbnRhY3QuYWRkcmVzc31gfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0cztcclxuIl0sIm5hbWVzIjpbIkJsb2dzQ2FyZCIsIkNvbnRhY3RzRGF0YSIsIkNvbnRhY3RzIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsIm1hcCIsImNvbnRhY3QiLCJuYW1lIiwiYWRkcmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/contacts.js\n");

/***/ })

});