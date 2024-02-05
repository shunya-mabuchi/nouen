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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LandTile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LandTile */ \"./components/LandTile.js\");\n/* harmony import */ var _components_ActionMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ActionMenu */ \"./components/ActionMenu.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    var _this = this;\n    _s();\n    var initialLandState = {\n        type: \"荒地\",\n        crop: null,\n        growthStage: \"未播種\"\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        米: 0,\n        米の種: 0,\n        小麦: 0,\n        小麦の種: 0\n    }), warehouse = ref[0], setWarehouse = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"Warehouse state updated:\", warehouse);\n    }, [\n        warehouse\n    ]);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(new Array(80).fill((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, initialLandState))).concat([\n        {\n            type: \"倉庫\",\n            crop: \"米\",\n            count: warehouse[\"米\"]\n        },\n        {\n            type: \"倉庫\",\n            crop: \"米の種\",\n            count: warehouse[\"米の種\"]\n        },\n        {\n            type: \"倉庫\",\n            crop: \"小麦\",\n            count: warehouse[\"小麦\"]\n        },\n        {\n            type: \"倉庫\",\n            crop: \"小麦の種\",\n            count: warehouse[\"小麦の種\"]\n        }, \n    ])), lands = ref1[0], setLands = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), selectedAction = ref2[0], setSelectedAction = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var interval = setInterval(function() {\n            setLands(function(currentLands) {\n                return currentLands.map(function(land) {\n                    if (land.type === \"耕地\" && land.crop !== null) {\n                        var newGrowthStage = land.growthStage;\n                        switch(land.growthStage){\n                            case \"未播種\":\n                                newGrowthStage = \"播種\";\n                                break;\n                            case \"播種\":\n                                newGrowthStage = \"双葉\";\n                                break;\n                            case \"双葉\":\n                                newGrowthStage = \"成長中\";\n                                break;\n                            case \"成長中\":\n                                newGrowthStage = \"収穫可能\";\n                                break;\n                            default:\n                                break;\n                        }\n                        return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, land), {\n                            growthStage: newGrowthStage\n                        });\n                    }\n                    return land;\n                });\n            });\n        }, 10000); // 10秒ごとに成長サイクルを更新\n        return function() {\n            return clearInterval(interval);\n        };\n    }, []);\n    var handleLandClick = function(index) {\n        console.log(\"Land clicked at index: \".concat(index, \", selectedAction:\"), selectedAction);\n        var land = lands[index];\n        console.log(\"Land state before action:\", land);\n        // 選択されたアクションが収穫の場合、かつ土地が収穫可能な場合に収穫処理を実行\n        if (selectedAction && selectedAction.action === \"収穫\" && land.growthStage === \"収穫可能\") {\n            console.log(\"Harvesting land at index: \".concat(index));\n            harvest(index);\n        } else if (selectedAction && selectedAction.action !== \"収穫\") {\n            // 他のアクションが選択されている場合、それに応じた処理を実行\n            console.log(\"Applying action '\".concat(selectedAction.action, \"' to land at index: \").concat(index));\n            toggleLandType(index);\n        }\n    };\n    var handleActionSelected = function(action, cropType) {\n        setSelectedAction({\n            action: action,\n            cropType: cropType\n        });\n    };\n    var toggleLandType = function(index) {\n        var updatedLands = lands.map(function(land, i) {\n            if (i === index) {\n                var newLand = (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, land);\n                if (selectedAction.action === \"耕地に変換\" && (land.type === \"荒地\" || land.type === \"草地\")) {\n                    newLand = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, initialLandState), {\n                        type: \"耕地\"\n                    });\n                } else if (selectedAction.action === \"草地に変換\" && land.type === \"耕地\") {\n                    newLand = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, initialLandState), {\n                        type: \"草地\"\n                    });\n                } else if (selectedAction.action === \"種をまく\" && land.type === \"耕地\" && land.growthStage === \"未播種\") {\n                    newLand.crop = selectedAction.cropType;\n                    newLand.growthStage = \"播種\";\n                }\n                return newLand;\n            }\n            return land;\n        });\n        setLands(updatedLands);\n    };\n    var harvest = function(index) {\n        var land = lands[index];\n        console.log(\"Harvesting process started for land at index: \".concat(index), land);\n        if (land.growthStage === \"収穫可能\") {\n            // 作物とその種のカウントを増やす\n            console.log(\"Warehouse state before harvest:\", warehouse);\n            var _obj;\n            var update = (_obj = {}, (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_obj, land.crop, warehouse[land.crop] + 1), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_obj, \"\".concat(land.crop, \"の種\"), warehouse[\"\".concat(land.crop, \"の種\")] + 1), _obj);\n            setWarehouse(function(prev) {\n                var _obj;\n                var update = (_obj = {}, (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_obj, land.crop, prev[land.crop] + 1), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_obj, \"\".concat(land.crop, \"の種\"), prev[\"\".concat(land.crop, \"の種\")] + 1), _obj);\n                console.log(\"Updating warehouse state for harvest with:\", update);\n                return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, prev, update);\n            });\n            console.log(\"Resetting land at index: \".concat(index, \" to tillable land after harvest.\"));\n            // 土地を耕地にリセット\n            setLands(function(currentLands) {\n                return currentLands.map(function(l, idx) {\n                    return idx === index ? (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, initialLandState), {\n                        type: \"耕地\"\n                    }) : l;\n                });\n            });\n        }\n        console.log(\"Lands state after updating warehouse count:\", lands);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ActionMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onActionSelected: handleActionSelected\n            }, void 0, false, {\n                fileName: \"/Users/syunya.mabuchi/my_project/project/nouen/pages/index.js\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexWrap: \"wrap\",\n                    width: \"100%\"\n                },\n                children: lands.map(function(land, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LandTile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        land: land,\n                        onToggle: function() {\n                            return handleLandClick(index);\n                        }\n                    }, index, false, {\n                        fileName: \"/Users/syunya.mabuchi/my_project/project/nouen/pages/index.js\",\n                        lineNumber: 138,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/syunya.mabuchi/my_project/project/nouen/pages/index.js\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/syunya.mabuchi/my_project/project/nouen/pages/index.js\",\n        lineNumber: 134,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"nGS9XPNxkh01xcEFidDTnwwau3g=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztZQUNGLENBQ047QUFDSixDQUFDO0dBMUl1QjVCLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExhbmRUaWxlIGZyb20gJy4uL2NvbXBvbmVudHMvTGFuZFRpbGUnO1xuaW1wb3J0IEFjdGlvbk1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9BY3Rpb25NZW51JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgaW5pdGlhbExhbmRTdGF0ZSA9IHtcbiAgICB0eXBlOiAn6I2S5ZywJyxcbiAgICBjcm9wOiBudWxsLFxuICAgIGdyb3d0aFN0YWdlOiAn5pyq5pKt56iuJyxcbiAgfTtcblxuICBjb25zdCBbd2FyZWhvdXNlLCBzZXRXYXJlaG91c2VdID0gdXNlU3RhdGUoe1xuICAgIOexszogMCxcbiAgICDnsbPjga7nqK46IDAsXG4gICAg5bCP6bqmOiAwLFxuICAgIOWwj+m6puOBrueorjogMCxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIldhcmVob3VzZSBzdGF0ZSB1cGRhdGVkOlwiLCB3YXJlaG91c2UpO1xuICB9LCBbd2FyZWhvdXNlXSk7XG5cblxuICBjb25zdCBbbGFuZHMsIHNldExhbmRzXSA9IHVzZVN0YXRlKFtcbiAgICAuLi5uZXcgQXJyYXkoODApLmZpbGwoeyAuLi5pbml0aWFsTGFuZFN0YXRlIH0pLFxuICAgIHsgdHlwZTogJ+WAieW6qycsIGNyb3A6ICfnsbMnLCBjb3VudDogd2FyZWhvdXNlWyfnsbMnXSB9LFxuICAgIHsgdHlwZTogJ+WAieW6qycsIGNyb3A6ICfnsbPjga7nqK4nLCBjb3VudDogd2FyZWhvdXNlWyfnsbPjga7nqK4nXSB9LFxuICAgIHsgdHlwZTogJ+WAieW6qycsIGNyb3A6ICflsI/puqYnLCBjb3VudDogd2FyZWhvdXNlWyflsI/puqYnXSB9LFxuICAgIHsgdHlwZTogJ+WAieW6qycsIGNyb3A6ICflsI/puqbjga7nqK4nLCBjb3VudDogd2FyZWhvdXNlWyflsI/puqbjga7nqK4nXSB9LFxuICBdKTtcblxuICBjb25zdCBbc2VsZWN0ZWRBY3Rpb24sIHNldFNlbGVjdGVkQWN0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRMYW5kcyhjdXJyZW50TGFuZHMgPT4gY3VycmVudExhbmRzLm1hcChsYW5kID0+IHtcbiAgICAgICAgaWYgKGxhbmQudHlwZSA9PT0gJ+iAleWcsCcgJiYgbGFuZC5jcm9wICE9PSBudWxsKSB7XG4gICAgICAgICAgbGV0IG5ld0dyb3d0aFN0YWdlID0gbGFuZC5ncm93dGhTdGFnZTtcbiAgICAgICAgICBzd2l0Y2ggKGxhbmQuZ3Jvd3RoU3RhZ2UpIHtcbiAgICAgICAgICAgIGNhc2UgJ+acquaSreeoric6XG4gICAgICAgICAgICAgIG5ld0dyb3d0aFN0YWdlID0gJ+aSreeoric7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAn5pKt56iuJzpcbiAgICAgICAgICAgICAgbmV3R3Jvd3RoU3RhZ2UgPSAn5Y+M6JGJJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICflj4zokYknOlxuICAgICAgICAgICAgICBuZXdHcm93dGhTdGFnZSA9ICfmiJDplbfkuK0nO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ+aIkOmVt+S4rSc6XG4gICAgICAgICAgICAgIG5ld0dyb3d0aFN0YWdlID0gJ+WPjuepq+WPr+iDvSc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IC4uLmxhbmQsIGdyb3d0aFN0YWdlOiBuZXdHcm93dGhTdGFnZSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsYW5kO1xuICAgICAgfSkpO1xuICAgIH0sIDEwMDAwKTsgLy8gMTDnp5LjgZTjgajjgavmiJDplbfjgrXjgqTjgq/jg6vjgpLmm7TmlrBcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUxhbmRDbGljayA9IChpbmRleCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBMYW5kIGNsaWNrZWQgYXQgaW5kZXg6ICR7aW5kZXh9LCBzZWxlY3RlZEFjdGlvbjpgLCBzZWxlY3RlZEFjdGlvbik7XG5cbiAgICBjb25zdCBsYW5kID0gbGFuZHNbaW5kZXhdO1xuICAgIGNvbnNvbGUubG9nKGBMYW5kIHN0YXRlIGJlZm9yZSBhY3Rpb246YCwgbGFuZCk7XG4gIFxuICAgIC8vIOmBuOaKnuOBleOCjOOBn+OCouOCr+OCt+ODp+ODs+OBjOWPjuepq+OBruWgtOWQiOOAgeOBi+OBpOWcn+WcsOOBjOWPjuepq+WPr+iDveOBquWgtOWQiOOBq+WPjuepq+WHpueQhuOCkuWun+ihjFxuICAgIGlmIChzZWxlY3RlZEFjdGlvbiAmJiBzZWxlY3RlZEFjdGlvbi5hY3Rpb24gPT09ICflj47nqasnICYmIGxhbmQuZ3Jvd3RoU3RhZ2UgPT09ICflj47nqavlj6/og70nKSB7XG4gICAgICBjb25zb2xlLmxvZyhgSGFydmVzdGluZyBsYW5kIGF0IGluZGV4OiAke2luZGV4fWApO1xuICAgICAgaGFydmVzdChpbmRleCk7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZEFjdGlvbiAmJiBzZWxlY3RlZEFjdGlvbi5hY3Rpb24gIT09ICflj47nqasnKSB7XG4gICAgICAvLyDku5bjga7jgqLjgq/jgrfjg6fjg7PjgYzpgbjmip7jgZXjgozjgabjgYTjgovloLTlkIjjgIHjgZ3jgozjgavlv5zjgZjjgZ/lh6bnkIbjgpLlrp/ooYxcbiAgICAgIGNvbnNvbGUubG9nKGBBcHBseWluZyBhY3Rpb24gJyR7c2VsZWN0ZWRBY3Rpb24uYWN0aW9ufScgdG8gbGFuZCBhdCBpbmRleDogJHtpbmRleH1gKTtcbiAgICAgIHRvZ2dsZUxhbmRUeXBlKGluZGV4KTtcbiAgICB9XG4gIH07XG4gIFxuICBjb25zdCBoYW5kbGVBY3Rpb25TZWxlY3RlZCA9IChhY3Rpb24sIGNyb3BUeXBlKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRBY3Rpb24oeyBhY3Rpb24sIGNyb3BUeXBlIH0pO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUxhbmRUeXBlID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZExhbmRzID0gbGFuZHMubWFwKChsYW5kLCBpKSA9PiB7XG4gICAgICBpZiAoaSA9PT0gaW5kZXgpIHtcbiAgICAgICAgbGV0IG5ld0xhbmQgPSB7IC4uLmxhbmQgfTtcbiAgICAgICAgaWYgKHNlbGVjdGVkQWN0aW9uLmFjdGlvbiA9PT0gJ+iAleWcsOOBq+WkieaPmycgJiYgKGxhbmQudHlwZSA9PT0gJ+iNkuWcsCcgfHwgbGFuZC50eXBlID09PSAn6I2J5ZywJykpIHtcbiAgICAgICAgICBuZXdMYW5kID0geyAuLi5pbml0aWFsTGFuZFN0YXRlLCB0eXBlOiAn6ICV5ZywJyB9O1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQWN0aW9uLmFjdGlvbiA9PT0gJ+iNieWcsOOBq+WkieaPmycgJiYgbGFuZC50eXBlID09PSAn6ICV5ZywJykge1xuICAgICAgICAgIG5ld0xhbmQgPSB7IC4uLmluaXRpYWxMYW5kU3RhdGUsIHR5cGU6ICfojYnlnLAnIH07XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRBY3Rpb24uYWN0aW9uID09PSAn56iu44KS44G+44GPJyAmJiBsYW5kLnR5cGUgPT09ICfogJXlnLAnICYmIGxhbmQuZ3Jvd3RoU3RhZ2UgPT09ICfmnKrmkq3nqK4nKSB7XG4gICAgICAgICAgbmV3TGFuZC5jcm9wID0gc2VsZWN0ZWRBY3Rpb24uY3JvcFR5cGU7XG4gICAgICAgICAgbmV3TGFuZC5ncm93dGhTdGFnZSA9ICfmkq3nqK4nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdMYW5kO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxhbmQ7XG4gICAgfSk7XG5cbiAgICBzZXRMYW5kcyh1cGRhdGVkTGFuZHMpO1xuICB9O1xuXG4gIGNvbnN0IGhhcnZlc3QgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCBsYW5kID0gbGFuZHNbaW5kZXhdO1xuICAgIGNvbnNvbGUubG9nKGBIYXJ2ZXN0aW5nIHByb2Nlc3Mgc3RhcnRlZCBmb3IgbGFuZCBhdCBpbmRleDogJHtpbmRleH1gLCBsYW5kKTtcblxuICAgIGlmIChsYW5kLmdyb3d0aFN0YWdlID09PSAn5Y+O56mr5Y+v6IO9Jykge1xuICAgICAgLy8g5L2c54mp44Go44Gd44Gu56iu44Gu44Kr44Km44Oz44OI44KS5aKX44KE44GZXG4gICAgICBjb25zb2xlLmxvZyhcIldhcmVob3VzZSBzdGF0ZSBiZWZvcmUgaGFydmVzdDpcIiwgd2FyZWhvdXNlKTtcblxuICAgICAgY29uc3QgdXBkYXRlID0ge1xuICAgICAgICBbbGFuZC5jcm9wXTogd2FyZWhvdXNlW2xhbmQuY3JvcF0gKyAxLFxuICAgICAgICBbYCR7bGFuZC5jcm9wfeOBrueormBdOiB3YXJlaG91c2VbYCR7bGFuZC5jcm9wfeOBrueormBdICsgMSxcbiAgICAgIH07XG4gIFxuICAgICAgc2V0V2FyZWhvdXNlKHByZXYgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGUgPSB7XG4gICAgICAgICAgW2xhbmQuY3JvcF06IHByZXZbbGFuZC5jcm9wXSArIDEsXG4gICAgICAgICAgW2Ake2xhbmQuY3JvcH3jga7nqK5gXTogcHJldltgJHtsYW5kLmNyb3B944Gu56iuYF0gKyAxLFxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhcIlVwZGF0aW5nIHdhcmVob3VzZSBzdGF0ZSBmb3IgaGFydmVzdCB3aXRoOlwiLCB1cGRhdGUpO1xuICAgICAgICByZXR1cm4geyAuLi5wcmV2LCAuLi51cGRhdGUgfTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBjb25zb2xlLmxvZyhgUmVzZXR0aW5nIGxhbmQgYXQgaW5kZXg6ICR7aW5kZXh9IHRvIHRpbGxhYmxlIGxhbmQgYWZ0ZXIgaGFydmVzdC5gKTtcbiAgICAgIC8vIOWcn+WcsOOCkuiAleWcsOOBq+ODquOCu+ODg+ODiFxuICAgICAgc2V0TGFuZHMoY3VycmVudExhbmRzID0+IGN1cnJlbnRMYW5kcy5tYXAoKGwsIGlkeCkgPT4gaWR4ID09PSBpbmRleCA/IHsgLi4uaW5pdGlhbExhbmRTdGF0ZSwgdHlwZTogJ+iAleWcsCcgfSA6IGwpKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJMYW5kcyBzdGF0ZSBhZnRlciB1cGRhdGluZyB3YXJlaG91c2UgY291bnQ6XCIsIGxhbmRzKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEFjdGlvbk1lbnUgb25BY3Rpb25TZWxlY3RlZD17aGFuZGxlQWN0aW9uU2VsZWN0ZWR9IC8+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleFdyYXA6ICd3cmFwJywgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAge2xhbmRzLm1hcCgobGFuZCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8TGFuZFRpbGUga2V5PXtpbmRleH0gbGFuZD17bGFuZH0gb25Ub2dnbGU9eygpID0+IGhhbmRsZUxhbmRDbGljayhpbmRleCl9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMYW5kVGlsZSIsIkFjdGlvbk1lbnUiLCJIb21lIiwiaW5pdGlhbExhbmRTdGF0ZSIsInR5cGUiLCJjcm9wIiwiZ3Jvd3RoU3RhZ2UiLCLnsbMiLCLnsbPjga7nqK4iLCLlsI/puqYiLCLlsI/puqbjga7nqK4iLCJ3YXJlaG91c2UiLCJzZXRXYXJlaG91c2UiLCJjb25zb2xlIiwibG9nIiwiQXJyYXkiLCJmaWxsIiwiY291bnQiLCJsYW5kcyIsInNldExhbmRzIiwic2VsZWN0ZWRBY3Rpb24iLCJzZXRTZWxlY3RlZEFjdGlvbiIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50TGFuZHMiLCJtYXAiLCJsYW5kIiwibmV3R3Jvd3RoU3RhZ2UiLCJjbGVhckludGVydmFsIiwiaGFuZGxlTGFuZENsaWNrIiwiaW5kZXgiLCJhY3Rpb24iLCJoYXJ2ZXN0IiwidG9nZ2xlTGFuZFR5cGUiLCJoYW5kbGVBY3Rpb25TZWxlY3RlZCIsImNyb3BUeXBlIiwidXBkYXRlZExhbmRzIiwiaSIsIm5ld0xhbmQiLCJ1cGRhdGUiLCJwcmV2IiwibCIsImlkeCIsImRpdiIsIm9uQWN0aW9uU2VsZWN0ZWQiLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIndpZHRoIiwib25Ub2dnbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});