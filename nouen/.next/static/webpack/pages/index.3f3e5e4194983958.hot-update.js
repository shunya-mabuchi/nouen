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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LandTile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LandTile */ \"./components/LandTile.js\");\n/* harmony import */ var _components_ActionMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ActionMenu */ \"./components/ActionMenu.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    var _this = this;\n    _s();\n    var initialLandState = {\n        type: \"荒地\",\n        crop: null,\n        growthStage: \"未播種\"\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(new Array(80).fill((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, initialLandState))).concat([\n        {\n            type: \"倉庫\",\n            crop: \"米\",\n            count: 0\n        },\n        {\n            type: \"倉庫\",\n            crop: \"米の種\",\n            count: 0\n        },\n        {\n            type: \"倉庫\",\n            crop: \"小麦\",\n            count: 0\n        },\n        {\n            type: \"倉庫\",\n            crop: \"小麦の種\",\n            count: 0\n        }, \n    ])), lands = ref[0], setLands = ref[1];\n    var _obj;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_obj = {\n        \"小麦\": 0,\n        \"米の種\": 0\n    }, (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_obj, \"小麦\", 0), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_obj, \"小麦の種\", 0), _obj)), warehouse = ref1[0], setWarehouse = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), selectedAction = ref2[0], setSelectedAction = ref2[1];\n    var updateWarehouseInLands = function(currentWarehouse) {\n        setLands(lands.map(function(land) {\n            if (land.type === \"倉庫\") {\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, land), {\n                    count: currentWarehouse[land.crop]\n                });\n            }\n            return land;\n        }));\n    };\n    var handleLandClick = function(index) {\n        var land = lands[index];\n        if (land.growthStage === \"収穫可能\") {\n            harvest(index);\n        } else if (selectedAction) {\n            toggleLandType(index);\n        }\n    };\n    var handleActionSelected = function(action, cropType) {\n        setSelectedAction({\n            action: action,\n            cropType: cropType\n        });\n    };\n    var toggleLandType = function(index) {\n        var updatedLands = lands.map(function(land, i) {\n            if (i === index) {\n                var newLand = (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, land);\n                if (selectedAction.action === \"耕地に変換\" && (land.type === \"荒地\" || land.type === \"草地\")) {\n                    newLand = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, initialLandState), {\n                        type: \"耕地\"\n                    });\n                } else if (selectedAction.action === \"草地に変換\" && land.type === \"耕地\") {\n                    newLand = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, initialLandState), {\n                        type: \"草地\"\n                    });\n                } else if (selectedAction.action === \"種をまく\" && land.type === \"耕地\" && land.growthStage === \"未播種\") {\n                    newLand.crop = selectedAction.cropType;\n                    newLand.growthStage = \"播種\";\n                }\n                return newLand;\n            }\n            return land;\n        });\n        setLands(updatedLands);\n    };\n    var harvest = function(index) {\n        var land = lands[index];\n        if (land.growthStage === \"収穫可能\") {\n            setWarehouse(function(prevWarehouse) {\n                var _obj;\n                var newWarehouse = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, prevWarehouse), (_obj = {}, (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_obj, land.crop, prevWarehouse[land.crop] + 1), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_obj, \"\".concat(land.crop, \"の種\"), prevWarehouse[\"\".concat(land.crop, \"の種\")] + 1), _obj));\n                setLands(lands.map(function(l) {\n                    if (l.type === \"倉庫\") {\n                        return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, l), {\n                            count: newWarehouse[l.crop]\n                        });\n                    }\n                    return l;\n                }));\n                return newWarehouse;\n            });\n            var updatedLands = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(lands);\n            updatedLands[index] = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, initialLandState), {\n                type: \"耕地\",\n                growthStage: \"未播種\"\n            });\n            setLands(updatedLands);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ActionMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onActionSelected: handleActionSelected\n            }, void 0, false, {\n                fileName: \"/Users/syunya.mabuchi/my_project/project/nouen/pages/index.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexWrap: \"wrap\",\n                    width: \"100%\"\n                },\n                children: lands.map(function(land, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LandTile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        land: land,\n                        onToggle: function() {\n                            return handleLandClick(index);\n                        }\n                    }, index, false, {\n                        fileName: \"/Users/syunya.mabuchi/my_project/project/nouen/pages/index.js\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/syunya.mabuchi/my_project/project/nouen/pages/index.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/syunya.mabuchi/my_project/project/nouen/pages/index.js\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"a+SRN5kzT/Hi5qnvxgbPeFnyk6o=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtvQkFBRUMsT0FBTyxFQUFFLE1BQU07b0JBQUVDLFFBQVEsRUFBRSxNQUFNO29CQUFFQyxLQUFLLEVBQUUsTUFBTTtpQkFBRTswQkFDN0Q1QixLQUFLLENBQUNRLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVFLEtBQUs7eUNBQ3JCLDhEQUFDckIsNERBQVE7d0JBQWFtQixJQUFJLEVBQUVBLElBQUk7d0JBQUVvQixRQUFRLEVBQUU7bUNBQU1uQixlQUFlLENBQUNDLEtBQUssQ0FBQzt5QkFBQTt1QkFBekRBLEtBQUs7Ozs7NkJBQXdEO2lCQUM3RSxDQUFDOzs7OztvQkFDRTs7Ozs7O1lBQ0YsQ0FDTjtBQUNKLENBQUM7R0FwR3VCbkIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExhbmRUaWxlIGZyb20gJy4uL2NvbXBvbmVudHMvTGFuZFRpbGUnO1xuaW1wb3J0IEFjdGlvbk1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9BY3Rpb25NZW51JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgaW5pdGlhbExhbmRTdGF0ZSA9IHtcbiAgICB0eXBlOiAn6I2S5ZywJyxcbiAgICBjcm9wOiBudWxsLFxuICAgIGdyb3d0aFN0YWdlOiAn5pyq5pKt56iuJyxcbiAgfTtcblxuICBjb25zdCBbbGFuZHMsIHNldExhbmRzXSA9IHVzZVN0YXRlKFtcbiAgICAuLi5uZXcgQXJyYXkoODApLmZpbGwoeyAuLi5pbml0aWFsTGFuZFN0YXRlIH0pLFxuICAgIHsgdHlwZTogJ+WAieW6qycsIGNyb3A6ICfnsbMnLCBjb3VudDogMCB9LFxuICAgIHsgdHlwZTogJ+WAieW6qycsIGNyb3A6ICfnsbPjga7nqK4nLCBjb3VudDogMCB9LFxuICAgIHsgdHlwZTogJ+WAieW6qycsIGNyb3A6ICflsI/puqYnLCBjb3VudDogMCB9LFxuICAgIHsgdHlwZTogJ+WAieW6qycsIGNyb3A6ICflsI/puqbjga7nqK4nLCBjb3VudDogMCB9LFxuICBdKTtcblxuICBjb25zdCBbd2FyZWhvdXNlLCBzZXRXYXJlaG91c2VdID0gdXNlU3RhdGUoe1xuICAgICflsI/puqYnOiAwLFxuICAgICfnsbPjga7nqK4nOiAwLFxuICAgICflsI/puqYnOiAwLFxuICAgICflsI/puqbjga7nqK4nOiAwLFxuICB9KTtcblxuICBjb25zdCBbc2VsZWN0ZWRBY3Rpb24sIHNldFNlbGVjdGVkQWN0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IHVwZGF0ZVdhcmVob3VzZUluTGFuZHMgPSAoY3VycmVudFdhcmVob3VzZSkgPT4ge1xuICAgIHNldExhbmRzKGxhbmRzLm1hcChsYW5kID0+IHtcbiAgICAgIGlmIChsYW5kLnR5cGUgPT09ICflgInluqsnKSB7XG4gICAgICAgIHJldHVybiB7IC4uLmxhbmQsIGNvdW50OiBjdXJyZW50V2FyZWhvdXNlW2xhbmQuY3JvcF0gfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsYW5kO1xuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVMYW5kQ2xpY2sgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCBsYW5kID0gbGFuZHNbaW5kZXhdO1xuXG4gICAgaWYgKGxhbmQuZ3Jvd3RoU3RhZ2UgPT09ICflj47nqavlj6/og70nKSB7XG4gICAgICBoYXJ2ZXN0KGluZGV4KTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQWN0aW9uKSB7XG4gICAgICB0b2dnbGVMYW5kVHlwZShpbmRleCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFjdGlvblNlbGVjdGVkID0gKGFjdGlvbiwgY3JvcFR5cGUpID0+IHtcbiAgICBzZXRTZWxlY3RlZEFjdGlvbih7IGFjdGlvbiwgY3JvcFR5cGUgfSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlTGFuZFR5cGUgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkTGFuZHMgPSBsYW5kcy5tYXAoKGxhbmQsIGkpID0+IHtcbiAgICAgIGlmIChpID09PSBpbmRleCkge1xuICAgICAgICBsZXQgbmV3TGFuZCA9IHsgLi4ubGFuZCB9O1xuICAgICAgICBpZiAoc2VsZWN0ZWRBY3Rpb24uYWN0aW9uID09PSAn6ICV5Zyw44Gr5aSJ5o+bJyAmJiAobGFuZC50eXBlID09PSAn6I2S5ZywJyB8fCBsYW5kLnR5cGUgPT09ICfojYnlnLAnKSkge1xuICAgICAgICAgIG5ld0xhbmQgPSB7IC4uLmluaXRpYWxMYW5kU3RhdGUsIHR5cGU6ICfogJXlnLAnIH07XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRBY3Rpb24uYWN0aW9uID09PSAn6I2J5Zyw44Gr5aSJ5o+bJyAmJiBsYW5kLnR5cGUgPT09ICfogJXlnLAnKSB7XG4gICAgICAgICAgbmV3TGFuZCA9IHsgLi4uaW5pdGlhbExhbmRTdGF0ZSwgdHlwZTogJ+iNieWcsCcgfTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEFjdGlvbi5hY3Rpb24gPT09ICfnqK7jgpLjgb7jgY8nICYmIGxhbmQudHlwZSA9PT0gJ+iAleWcsCcgJiYgbGFuZC5ncm93dGhTdGFnZSA9PT0gJ+acquaSreeoricpIHtcbiAgICAgICAgICBuZXdMYW5kLmNyb3AgPSBzZWxlY3RlZEFjdGlvbi5jcm9wVHlwZTtcbiAgICAgICAgICBuZXdMYW5kLmdyb3d0aFN0YWdlID0gJ+aSreeoric7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0xhbmQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGFuZDtcbiAgICB9KTtcblxuICAgIHNldExhbmRzKHVwZGF0ZWRMYW5kcyk7XG4gIH07XG5cbiAgY29uc3QgaGFydmVzdCA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IGxhbmQgPSBsYW5kc1tpbmRleF07XG4gICAgaWYgKGxhbmQuZ3Jvd3RoU3RhZ2UgPT09ICflj47nqavlj6/og70nKSB7XG4gICAgICBzZXRXYXJlaG91c2UocHJldldhcmVob3VzZSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1dhcmVob3VzZSA9IHtcbiAgICAgICAgICAgICAuLi5wcmV2V2FyZWhvdXNlLFxuICAgICAgICAgICAgIFtsYW5kLmNyb3BdOiBwcmV2V2FyZWhvdXNlW2xhbmQuY3JvcF0gKyAxLFxuICAgICAgICAgICAgIFtgJHtsYW5kLmNyb3B944Gu56iuYF06IHByZXZXYXJlaG91c2VbYCR7bGFuZC5jcm9wfeOBrueormBdICsgMSxcbiAgICAgICAgfTtcbiAgICAgICAgc2V0TGFuZHMobGFuZHMubWFwKGwgPT4ge1xuICAgICAgICAgICAgIGlmIChsLnR5cGUgPT09ICflgInluqsnKSB7XG4gICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmwsIGNvdW50OiBuZXdXYXJlaG91c2VbbC5jcm9wXSB9O1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICByZXR1cm4gbDtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gbmV3V2FyZWhvdXNlO1xuICAgICAgfSk7XG4gIFxuICAgICAgY29uc3QgdXBkYXRlZExhbmRzID0gWy4uLmxhbmRzXTtcbiAgICAgIHVwZGF0ZWRMYW5kc1tpbmRleF0gPSB7IC4uLmluaXRpYWxMYW5kU3RhdGUsIHR5cGU6ICfogJXlnLAnLCBncm93dGhTdGFnZTogJ+acquaSreeoricgfTtcbiAgICAgIHNldExhbmRzKHVwZGF0ZWRMYW5kcyk7XG4gICAgfVxuICB9O1xuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxBY3Rpb25NZW51IG9uQWN0aW9uU2VsZWN0ZWQ9e2hhbmRsZUFjdGlvblNlbGVjdGVkfSAvPlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhXcmFwOiAnd3JhcCcsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgIHtsYW5kcy5tYXAoKGxhbmQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPExhbmRUaWxlIGtleT17aW5kZXh9IGxhbmQ9e2xhbmR9IG9uVG9nZ2xlPXsoKSA9PiBoYW5kbGVMYW5kQ2xpY2soaW5kZXgpfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGFuZFRpbGUiLCJBY3Rpb25NZW51IiwiSG9tZSIsImluaXRpYWxMYW5kU3RhdGUiLCJ0eXBlIiwiY3JvcCIsImdyb3d0aFN0YWdlIiwiQXJyYXkiLCJmaWxsIiwiY291bnQiLCJsYW5kcyIsInNldExhbmRzIiwid2FyZWhvdXNlIiwic2V0V2FyZWhvdXNlIiwic2VsZWN0ZWRBY3Rpb24iLCJzZXRTZWxlY3RlZEFjdGlvbiIsInVwZGF0ZVdhcmVob3VzZUluTGFuZHMiLCJjdXJyZW50V2FyZWhvdXNlIiwibWFwIiwibGFuZCIsImhhbmRsZUxhbmRDbGljayIsImluZGV4IiwiaGFydmVzdCIsInRvZ2dsZUxhbmRUeXBlIiwiaGFuZGxlQWN0aW9uU2VsZWN0ZWQiLCJhY3Rpb24iLCJjcm9wVHlwZSIsInVwZGF0ZWRMYW5kcyIsImkiLCJuZXdMYW5kIiwicHJldldhcmVob3VzZSIsIm5ld1dhcmVob3VzZSIsImwiLCJkaXYiLCJvbkFjdGlvblNlbGVjdGVkIiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJ3aWR0aCIsIm9uVG9nZ2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});