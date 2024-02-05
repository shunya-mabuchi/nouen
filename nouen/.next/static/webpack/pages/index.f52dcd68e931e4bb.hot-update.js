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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LandTile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LandTile */ \"./components/LandTile.js\");\n/* harmony import */ var _components_ActionMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ActionMenu */ \"./components/ActionMenu.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    var _this = this;\n    _s();\n    var initialLandState = {\n        type: \"荒地\",\n        crop: null,\n        growthStage: \"未播種\"\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        米: 0,\n        米の種: 0,\n        小麦: 0,\n        小麦の種: 0\n    }), warehouse = ref[0], setWarehouse = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"Warehouse state updated:\", warehouse);\n    }, [\n        warehouse\n    ]);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(new Array(80).fill((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, initialLandState))).concat([\n        {\n            type: \"倉庫\",\n            crop: \"米\",\n            count: warehouse[\"米\"]\n        },\n        {\n            type: \"倉庫\",\n            crop: \"米の種\",\n            count: warehouse[\"米の種\"]\n        },\n        {\n            type: \"倉庫\",\n            crop: \"小麦\",\n            count: warehouse[\"小麦\"]\n        },\n        {\n            type: \"倉庫\",\n            crop: \"小麦の種\",\n            count: warehouse[\"小麦の種\"]\n        }, \n    ])), lands = ref1[0], setLands = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), selectedAction = ref2[0], setSelectedAction = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var interval = setInterval(function() {\n            setLands(function(currentLands) {\n                return currentLands.map(function(land) {\n                    if (land.type === \"耕地\" && land.crop !== null) {\n                        var newGrowthStage = land.growthStage;\n                        switch(land.growthStage){\n                            case \"未播種\":\n                                newGrowthStage = \"播種\";\n                                break;\n                            case \"播種\":\n                                newGrowthStage = \"双葉\";\n                                break;\n                            case \"双葉\":\n                                newGrowthStage = \"成長中\";\n                                break;\n                            case \"成長中\":\n                                newGrowthStage = \"収穫可能\";\n                                break;\n                            default:\n                                break;\n                        }\n                        return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, land), {\n                            growthStage: newGrowthStage\n                        });\n                    }\n                    return land;\n                });\n            });\n        }, 10000); // 10秒ごとに成長サイクルを更新\n        return function() {\n            return clearInterval(interval);\n        };\n    }, []);\n    var handleLandClick = function(index) {\n        console.log(\"Land clicked at index: \".concat(index, \", selectedAction:\"), selectedAction);\n        var land = lands[index];\n        console.log(\"Land state before action:\", land);\n        // 選択されたアクションが収穫の場合、かつ土地が収穫可能な場合に収穫処理を実行\n        if (selectedAction && selectedAction.action === \"収穫\" && land.growthStage === \"収穫可能\") {\n            console.log(\"Harvesting land at index: \".concat(index));\n            harvest(index);\n        } else if (selectedAction && selectedAction.action !== \"収穫\") {\n            // 他のアクションが選択されている場合、それに応じた処理を実行\n            console.log(\"Applying action '\".concat(selectedAction.action, \"' to land at index: \").concat(index));\n            toggleLandType(index);\n        }\n    };\n    var handleActionSelected = function(action, cropType) {\n        setSelectedAction({\n            action: action,\n            cropType: cropType\n        });\n    };\n    var toggleLandType = function(index) {\n        var updatedLands = lands.map(function(land, i) {\n            if (i === index) {\n                var newLand = (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, land);\n                if (selectedAction.action === \"耕地に変換\" && (land.type === \"荒地\" || land.type === \"草地\")) {\n                    newLand = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, initialLandState), {\n                        type: \"耕地\"\n                    });\n                } else if (selectedAction.action === \"草地に変換\" && land.type === \"耕地\") {\n                    newLand = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, initialLandState), {\n                        type: \"草地\"\n                    });\n                } else if (selectedAction.action === \"種をまく\" && land.type === \"耕地\" && land.growthStage === \"未播種\") {\n                    newLand.crop = selectedAction.cropType;\n                    newLand.growthStage = \"播種\";\n                }\n                return newLand;\n            }\n            return land;\n        });\n        setLands(updatedLands);\n    };\n    var harvest = function(index) {\n        var land = lands[index];\n        console.log(\"Harvesting process started for land at index: \".concat(index), land);\n        if (land.growthStage === \"収穫可能\") {\n            // 作物とその種のカウントを増やす\n            console.log(\"Warehouse state before harvest:\", warehouse);\n            var _obj;\n            var update = (_obj = {}, (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_obj, land.crop, warehouse[land.crop] + 1), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_obj, \"\".concat(land.crop, \"の種\"), warehouse[\"\".concat(land.crop, \"の種\")] + 1), _obj);\n            setWarehouse(function(prev) {\n                console.log(\"Updating warehouse state for harvest:\", update);\n                return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, prev, update);\n            });\n            console.log(\"Resetting land at index: \".concat(index, \" to tillable land after harvest.\"));\n            // 土地を耕地にリセット\n            setLands(function(currentLands) {\n                return currentLands.map(function(l, idx) {\n                    return idx === index ? (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, initialLandState), {\n                        type: \"耕地\"\n                    }) : l;\n                });\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ActionMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onActionSelected: handleActionSelected\n            }, void 0, false, {\n                fileName: \"/Users/syunya.mabuchi/my_project/project/nouen/pages/index.js\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexWrap: \"wrap\",\n                    width: \"100%\"\n                },\n                children: lands.map(function(land, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LandTile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        land: land,\n                        onToggle: function() {\n                            return handleLandClick(index);\n                        }\n                    }, index, false, {\n                        fileName: \"/Users/syunya.mabuchi/my_project/project/nouen/pages/index.js\",\n                        lineNumber: 133,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/syunya.mabuchi/my_project/project/nouen/pages/index.js\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/syunya.mabuchi/my_project/project/nouen/pages/index.js\",\n        lineNumber: 129,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"nGS9XPNxkh01xcEFidDTnwwau3g=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxDQUFDLFNBQUNnQixDQUFDLEVBQUVDLEdBQUc7MkJBQUtBLEdBQUcsS0FBS1osS0FBSyxHQUFHLHdLQUFLM0IsZ0JBQWdCO3dCQUFFQyxJQUFJLEVBQUUsSUFBSTtzQkFBRSxHQUFHcUMsQ0FBQztpQkFBQSxDQUFDO2FBQUEsQ0FBQyxDQUFDO1FBQ2xILENBQUM7SUFDSCxDQUFDO0lBQ0QscUJBQ0UsOERBQUNFLEtBQUc7OzBCQUNGLDhEQUFDMUMsOERBQVU7Z0JBQUMyQyxnQkFBZ0IsRUFBRVYsb0JBQW9COzs7OztvQkFBSTswQkFDdEQsOERBQUNTLEtBQUc7Z0JBQUNFLEtBQUssRUFBRTtvQkFBRUMsT0FBTyxFQUFFLE1BQU07b0JBQUVDLFFBQVEsRUFBRSxNQUFNO29CQUFFQyxLQUFLLEVBQUUsTUFBTTtpQkFBRTswQkFDN0Q5QixLQUFLLENBQUNPLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVJLEtBQUs7eUNBQ3JCLDhEQUFDOUIsNERBQVE7d0JBQWEwQixJQUFJLEVBQUVBLElBQUk7d0JBQUV1QixRQUFRLEVBQUU7bUNBQU1wQixlQUFlLENBQUNDLEtBQUssQ0FBQzt5QkFBQTt1QkFBekRBLEtBQUs7Ozs7NkJBQXdEO2lCQUM3RSxDQUFDOzs7OztvQkFDRTs7Ozs7O1lBQ0YsQ0FDTjtBQUNKLENBQUM7R0FySXVCNUIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGFuZFRpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9MYW5kVGlsZSc7XG5pbXBvcnQgQWN0aW9uTWVudSBmcm9tICcuLi9jb21wb25lbnRzL0FjdGlvbk1lbnUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBpbml0aWFsTGFuZFN0YXRlID0ge1xuICAgIHR5cGU6ICfojZLlnLAnLFxuICAgIGNyb3A6IG51bGwsXG4gICAgZ3Jvd3RoU3RhZ2U6ICfmnKrmkq3nqK4nLFxuICB9O1xuXG4gIGNvbnN0IFt3YXJlaG91c2UsIHNldFdhcmVob3VzZV0gPSB1c2VTdGF0ZSh7XG4gICAg57GzOiAwLFxuICAgIOexs+OBrueorjogMCxcbiAgICDlsI/puqY6IDAsXG4gICAg5bCP6bqm44Gu56iuOiAwLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiV2FyZWhvdXNlIHN0YXRlIHVwZGF0ZWQ6XCIsIHdhcmVob3VzZSk7XG4gIH0sIFt3YXJlaG91c2VdKTtcblxuXG4gIGNvbnN0IFtsYW5kcywgc2V0TGFuZHNdID0gdXNlU3RhdGUoW1xuICAgIC4uLm5ldyBBcnJheSg4MCkuZmlsbCh7IC4uLmluaXRpYWxMYW5kU3RhdGUgfSksXG4gICAgeyB0eXBlOiAn5YCJ5bqrJywgY3JvcDogJ+exsycsIGNvdW50OiB3YXJlaG91c2VbJ+exsyddIH0sXG4gICAgeyB0eXBlOiAn5YCJ5bqrJywgY3JvcDogJ+exs+OBrueoricsIGNvdW50OiB3YXJlaG91c2VbJ+exs+OBrueoriddIH0sXG4gICAgeyB0eXBlOiAn5YCJ5bqrJywgY3JvcDogJ+Wwj+m6picsIGNvdW50OiB3YXJlaG91c2VbJ+Wwj+m6piddIH0sXG4gICAgeyB0eXBlOiAn5YCJ5bqrJywgY3JvcDogJ+Wwj+m6puOBrueoricsIGNvdW50OiB3YXJlaG91c2VbJ+Wwj+m6puOBrueoriddIH0sXG4gIF0pO1xuXG4gIGNvbnN0IFtzZWxlY3RlZEFjdGlvbiwgc2V0U2VsZWN0ZWRBY3Rpb25dID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldExhbmRzKGN1cnJlbnRMYW5kcyA9PiBjdXJyZW50TGFuZHMubWFwKGxhbmQgPT4ge1xuICAgICAgICBpZiAobGFuZC50eXBlID09PSAn6ICV5ZywJyAmJiBsYW5kLmNyb3AgIT09IG51bGwpIHtcbiAgICAgICAgICBsZXQgbmV3R3Jvd3RoU3RhZ2UgPSBsYW5kLmdyb3d0aFN0YWdlO1xuICAgICAgICAgIHN3aXRjaCAobGFuZC5ncm93dGhTdGFnZSkge1xuICAgICAgICAgICAgY2FzZSAn5pyq5pKt56iuJzpcbiAgICAgICAgICAgICAgbmV3R3Jvd3RoU3RhZ2UgPSAn5pKt56iuJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICfmkq3nqK4nOlxuICAgICAgICAgICAgICBuZXdHcm93dGhTdGFnZSA9ICflj4zokYknO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ+WPjOiRiSc6XG4gICAgICAgICAgICAgIG5ld0dyb3d0aFN0YWdlID0gJ+aIkOmVt+S4rSc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAn5oiQ6ZW35LitJzpcbiAgICAgICAgICAgICAgbmV3R3Jvd3RoU3RhZ2UgPSAn5Y+O56mr5Y+v6IO9JztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgLi4ubGFuZCwgZ3Jvd3RoU3RhZ2U6IG5ld0dyb3d0aFN0YWdlIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxhbmQ7XG4gICAgICB9KSk7XG4gICAgfSwgMTAwMDApOyAvLyAxMOenkuOBlOOBqOOBq+aIkOmVt+OCteOCpOOCr+ODq+OCkuabtOaWsFxuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTGFuZENsaWNrID0gKGluZGV4KSA9PiB7XG4gICAgY29uc29sZS5sb2coYExhbmQgY2xpY2tlZCBhdCBpbmRleDogJHtpbmRleH0sIHNlbGVjdGVkQWN0aW9uOmAsIHNlbGVjdGVkQWN0aW9uKTtcblxuICAgIGNvbnN0IGxhbmQgPSBsYW5kc1tpbmRleF07XG4gICAgY29uc29sZS5sb2coYExhbmQgc3RhdGUgYmVmb3JlIGFjdGlvbjpgLCBsYW5kKTtcbiAgXG4gICAgLy8g6YG45oqe44GV44KM44Gf44Ki44Kv44K344On44Oz44GM5Y+O56mr44Gu5aC05ZCI44CB44GL44Gk5Zyf5Zyw44GM5Y+O56mr5Y+v6IO944Gq5aC05ZCI44Gr5Y+O56mr5Yem55CG44KS5a6f6KGMXG4gICAgaWYgKHNlbGVjdGVkQWN0aW9uICYmIHNlbGVjdGVkQWN0aW9uLmFjdGlvbiA9PT0gJ+WPjuepqycgJiYgbGFuZC5ncm93dGhTdGFnZSA9PT0gJ+WPjuepq+WPr+iDvScpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBIYXJ2ZXN0aW5nIGxhbmQgYXQgaW5kZXg6ICR7aW5kZXh9YCk7XG4gICAgICBoYXJ2ZXN0KGluZGV4KTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQWN0aW9uICYmIHNlbGVjdGVkQWN0aW9uLmFjdGlvbiAhPT0gJ+WPjuepqycpIHtcbiAgICAgIC8vIOS7luOBruOCouOCr+OCt+ODp+ODs+OBjOmBuOaKnuOBleOCjOOBpuOBhOOCi+WgtOWQiOOAgeOBneOCjOOBq+W/nOOBmOOBn+WHpueQhuOCkuWun+ihjFxuICAgICAgY29uc29sZS5sb2coYEFwcGx5aW5nIGFjdGlvbiAnJHtzZWxlY3RlZEFjdGlvbi5hY3Rpb259JyB0byBsYW5kIGF0IGluZGV4OiAke2luZGV4fWApO1xuICAgICAgdG9nZ2xlTGFuZFR5cGUoaW5kZXgpO1xuICAgIH1cbiAgfTtcbiAgXG4gIGNvbnN0IGhhbmRsZUFjdGlvblNlbGVjdGVkID0gKGFjdGlvbiwgY3JvcFR5cGUpID0+IHtcbiAgICBzZXRTZWxlY3RlZEFjdGlvbih7IGFjdGlvbiwgY3JvcFR5cGUgfSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlTGFuZFR5cGUgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkTGFuZHMgPSBsYW5kcy5tYXAoKGxhbmQsIGkpID0+IHtcbiAgICAgIGlmIChpID09PSBpbmRleCkge1xuICAgICAgICBsZXQgbmV3TGFuZCA9IHsgLi4ubGFuZCB9O1xuICAgICAgICBpZiAoc2VsZWN0ZWRBY3Rpb24uYWN0aW9uID09PSAn6ICV5Zyw44Gr5aSJ5o+bJyAmJiAobGFuZC50eXBlID09PSAn6I2S5ZywJyB8fCBsYW5kLnR5cGUgPT09ICfojYnlnLAnKSkge1xuICAgICAgICAgIG5ld0xhbmQgPSB7IC4uLmluaXRpYWxMYW5kU3RhdGUsIHR5cGU6ICfogJXlnLAnIH07XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRBY3Rpb24uYWN0aW9uID09PSAn6I2J5Zyw44Gr5aSJ5o+bJyAmJiBsYW5kLnR5cGUgPT09ICfogJXlnLAnKSB7XG4gICAgICAgICAgbmV3TGFuZCA9IHsgLi4uaW5pdGlhbExhbmRTdGF0ZSwgdHlwZTogJ+iNieWcsCcgfTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEFjdGlvbi5hY3Rpb24gPT09ICfnqK7jgpLjgb7jgY8nICYmIGxhbmQudHlwZSA9PT0gJ+iAleWcsCcgJiYgbGFuZC5ncm93dGhTdGFnZSA9PT0gJ+acquaSreeoricpIHtcbiAgICAgICAgICBuZXdMYW5kLmNyb3AgPSBzZWxlY3RlZEFjdGlvbi5jcm9wVHlwZTtcbiAgICAgICAgICBuZXdMYW5kLmdyb3d0aFN0YWdlID0gJ+aSreeoric7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0xhbmQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGFuZDtcbiAgICB9KTtcblxuICAgIHNldExhbmRzKHVwZGF0ZWRMYW5kcyk7XG4gIH07XG5cbiAgY29uc3QgaGFydmVzdCA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IGxhbmQgPSBsYW5kc1tpbmRleF07XG4gICAgY29uc29sZS5sb2coYEhhcnZlc3RpbmcgcHJvY2VzcyBzdGFydGVkIGZvciBsYW5kIGF0IGluZGV4OiAke2luZGV4fWAsIGxhbmQpO1xuXG4gICAgaWYgKGxhbmQuZ3Jvd3RoU3RhZ2UgPT09ICflj47nqavlj6/og70nKSB7XG4gICAgICAvLyDkvZznianjgajjgZ3jga7nqK7jga7jgqvjgqbjg7Pjg4jjgpLlopfjgoTjgZlcbiAgICAgIGNvbnNvbGUubG9nKFwiV2FyZWhvdXNlIHN0YXRlIGJlZm9yZSBoYXJ2ZXN0OlwiLCB3YXJlaG91c2UpO1xuXG4gICAgICBjb25zdCB1cGRhdGUgPSB7XG4gICAgICAgIFtsYW5kLmNyb3BdOiB3YXJlaG91c2VbbGFuZC5jcm9wXSArIDEsXG4gICAgICAgIFtgJHtsYW5kLmNyb3B944Gu56iuYF06IHdhcmVob3VzZVtgJHtsYW5kLmNyb3B944Gu56iuYF0gKyAxLFxuICAgICAgfTtcbiAgXG4gICAgICBzZXRXYXJlaG91c2UocHJldiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgd2FyZWhvdXNlIHN0YXRlIGZvciBoYXJ2ZXN0OlwiLCB1cGRhdGUpO1xuICAgICAgICByZXR1cm4geyAuLi5wcmV2LCAuLi51cGRhdGUgfTtcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBjb25zb2xlLmxvZyhgUmVzZXR0aW5nIGxhbmQgYXQgaW5kZXg6ICR7aW5kZXh9IHRvIHRpbGxhYmxlIGxhbmQgYWZ0ZXIgaGFydmVzdC5gKTtcbiAgICAgIC8vIOWcn+WcsOOCkuiAleWcsOOBq+ODquOCu+ODg+ODiFxuICAgICAgc2V0TGFuZHMoY3VycmVudExhbmRzID0+IGN1cnJlbnRMYW5kcy5tYXAoKGwsIGlkeCkgPT4gaWR4ID09PSBpbmRleCA/IHsgLi4uaW5pdGlhbExhbmRTdGF0ZSwgdHlwZTogJ+iAleWcsCcgfSA6IGwpKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxBY3Rpb25NZW51IG9uQWN0aW9uU2VsZWN0ZWQ9e2hhbmRsZUFjdGlvblNlbGVjdGVkfSAvPlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhXcmFwOiAnd3JhcCcsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgIHtsYW5kcy5tYXAoKGxhbmQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPExhbmRUaWxlIGtleT17aW5kZXh9IGxhbmQ9e2xhbmR9IG9uVG9nZ2xlPXsoKSA9PiBoYW5kbGVMYW5kQ2xpY2soaW5kZXgpfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGFuZFRpbGUiLCJBY3Rpb25NZW51IiwiSG9tZSIsImluaXRpYWxMYW5kU3RhdGUiLCJ0eXBlIiwiY3JvcCIsImdyb3d0aFN0YWdlIiwi57GzIiwi57Gz44Gu56iuIiwi5bCP6bqmIiwi5bCP6bqm44Gu56iuIiwid2FyZWhvdXNlIiwic2V0V2FyZWhvdXNlIiwiY29uc29sZSIsImxvZyIsIkFycmF5IiwiZmlsbCIsImNvdW50IiwibGFuZHMiLCJzZXRMYW5kcyIsInNlbGVjdGVkQWN0aW9uIiwic2V0U2VsZWN0ZWRBY3Rpb24iLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY3VycmVudExhbmRzIiwibWFwIiwibGFuZCIsIm5ld0dyb3d0aFN0YWdlIiwiY2xlYXJJbnRlcnZhbCIsImhhbmRsZUxhbmRDbGljayIsImluZGV4IiwiYWN0aW9uIiwiaGFydmVzdCIsInRvZ2dsZUxhbmRUeXBlIiwiaGFuZGxlQWN0aW9uU2VsZWN0ZWQiLCJjcm9wVHlwZSIsInVwZGF0ZWRMYW5kcyIsImkiLCJuZXdMYW5kIiwidXBkYXRlIiwicHJldiIsImwiLCJpZHgiLCJkaXYiLCJvbkFjdGlvblNlbGVjdGVkIiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJ3aWR0aCIsIm9uVG9nZ2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});