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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LandTile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LandTile */ \"./components/LandTile.js\");\n/* harmony import */ var _components_ActionMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ActionMenu */ \"./components/ActionMenu.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    var _this = this;\n    _s();\n    var initialLandState = {\n        type: \"荒地\",\n        crop: null,\n        growthStage: \"未播種\"\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        米: 0,\n        米の種: 0,\n        小麦: 0,\n        小麦の種: 0\n    }), warehouse = ref[0], setWarehouse = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(\"Warehouse state updated:\", warehouse);\n    }, [\n        warehouse\n    ]);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(new Array(80).fill((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, initialLandState))).concat([\n        {\n            type: \"倉庫\",\n            crop: \"米\",\n            count: warehouse[\"米\"]\n        },\n        {\n            type: \"倉庫\",\n            crop: \"米の種\",\n            count: warehouse[\"米の種\"]\n        },\n        {\n            type: \"倉庫\",\n            crop: \"小麦\",\n            count: warehouse[\"小麦\"]\n        },\n        {\n            type: \"倉庫\",\n            crop: \"小麦の種\",\n            count: warehouse[\"小麦の種\"]\n        }, \n    ])), lands = ref1[0], setLands = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var updatedLands = lands.map(function(land) {\n            if (land.type === \"倉庫\") {\n                return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, land), {\n                    count: warehouse[land.crop]\n                });\n            }\n            return land;\n        });\n        setLands(updatedLands);\n    }, [\n        warehouse,\n        lands\n    ]); // 依存配列に warehouse と lands を追加\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), selectedAction = ref2[0], setSelectedAction = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var interval = setInterval(function() {\n            setLands(function(currentLands) {\n                return currentLands.map(function(land) {\n                    if (land.type === \"耕地\" && land.crop !== null) {\n                        var newGrowthStage = land.growthStage;\n                        switch(land.growthStage){\n                            case \"未播種\":\n                                newGrowthStage = \"播種\";\n                                break;\n                            case \"播種\":\n                                newGrowthStage = \"双葉\";\n                                break;\n                            case \"双葉\":\n                                newGrowthStage = \"成長中\";\n                                break;\n                            case \"成長中\":\n                                newGrowthStage = \"収穫可能\";\n                                break;\n                            default:\n                                break;\n                        }\n                        return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, land), {\n                            growthStage: newGrowthStage\n                        });\n                    }\n                    return land;\n                });\n            });\n        }, 10000); // 10秒ごとに成長サイクルを更新\n        return function() {\n            return clearInterval(interval);\n        };\n    }, []);\n    var handleLandClick = function(index) {\n        console.log(\"Land clicked at index: \".concat(index, \", selectedAction:\"), selectedAction);\n        var land = lands[index];\n        console.log(\"Land state before action:\", land);\n        // 選択されたアクションが収穫の場合、かつ土地が収穫可能な場合に収穫処理を実行\n        if (selectedAction && selectedAction.action === \"収穫\" && land.growthStage === \"収穫可能\") {\n            console.log(\"Harvesting land at index: \".concat(index));\n            harvest(index);\n        } else if (selectedAction && selectedAction.action !== \"収穫\") {\n            // 他のアクションが選択されている場合、それに応じた処理を実行\n            console.log(\"Applying action '\".concat(selectedAction.action, \"' to land at index: \").concat(index));\n            toggleLandType(index);\n        }\n    };\n    var handleActionSelected = function(action, cropType) {\n        setSelectedAction({\n            action: action,\n            cropType: cropType\n        });\n    };\n    var toggleLandType = function(index) {\n        var updatedLands = lands.map(function(land, i) {\n            if (i === index) {\n                var newLand = (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, land);\n                if (selectedAction.action === \"耕地に変換\" && (land.type === \"荒地\" || land.type === \"草地\")) {\n                    newLand = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, initialLandState), {\n                        type: \"耕地\"\n                    });\n                } else if (selectedAction.action === \"草地に変換\" && land.type === \"耕地\") {\n                    newLand = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, initialLandState), {\n                        type: \"草地\"\n                    });\n                } else if (selectedAction.action === \"種をまく\" && land.type === \"耕地\" && land.growthStage === \"未播種\") {\n                    newLand.crop = selectedAction.cropType;\n                    newLand.growthStage = \"播種\";\n                }\n                return newLand;\n            }\n            return land;\n        });\n        setLands(updatedLands);\n    };\n    var harvest = function(index) {\n        var land = lands[index];\n        console.log(\"Harvesting process started for land at index: \".concat(index), land);\n        if (land.growthStage === \"収穫可能\") {\n            // 作物とその種のカウントを増やす\n            console.log(\"Warehouse state before harvest:\", warehouse);\n            var _obj;\n            var update = (_obj = {}, (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_obj, land.crop, warehouse[land.crop] + 1), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_obj, \"\".concat(land.crop, \"の種\"), warehouse[\"\".concat(land.crop, \"の種\")] + 1), _obj);\n            setWarehouse(function(prev) {\n                var _obj;\n                var update = (_obj = {}, (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_obj, land.crop, prev[land.crop] + 1), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_obj, \"\".concat(land.crop, \"の種\"), prev[\"\".concat(land.crop, \"の種\")] + 1), _obj);\n                console.log(\"Updating warehouse state for harvest with:\", update);\n                return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, prev, update);\n            });\n            console.log(\"Resetting land at index: \".concat(index, \" to tillable land after harvest.\"));\n            // 土地を耕地にリセット\n            setLands(function(currentLands) {\n                return currentLands.map(function(l, idx) {\n                    return idx === index ? (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, initialLandState), {\n                        type: \"耕地\"\n                    }) : l;\n                });\n            });\n        }\n        console.log(\"Lands state after updating warehouse count:\", lands);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ActionMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onActionSelected: handleActionSelected\n            }, void 0, false, {\n                fileName: \"/Users/syunya.mabuchi/my_project/project/nouen/pages/index.js\",\n                lineNumber: 147,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexWrap: \"wrap\",\n                    width: \"100%\"\n                },\n                children: lands.map(function(land, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LandTile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        land: land,\n                        onToggle: function() {\n                            return handleLandClick(index);\n                        }\n                    }, index, false, {\n                        fileName: \"/Users/syunya.mabuchi/my_project/project/nouen/pages/index.js\",\n                        lineNumber: 150,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/syunya.mabuchi/my_project/project/nouen/pages/index.js\",\n                lineNumber: 148,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/syunya.mabuchi/my_project/project/nouen/pages/index.js\",\n        lineNumber: 146,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"59KE3mTavZDj5LktLhU/cI5cLp8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBRzs7MEJBQ0YsOERBQUMxQyw4REFBVTtnQkFBQzJDLGdCQUFnQixFQUFFVCxvQkFBb0I7Ozs7O29CQUFJOzBCQUN0RCw4REFBQ1EsS0FBRztnQkFBQ0UsS0FBSyxFQUFFO29CQUFFQyxPQUFPLEVBQUUsTUFBTTtvQkFBRUMsUUFBUSxFQUFFLE1BQU07b0JBQUVDLEtBQUssRUFBRSxNQUFNO2lCQUFFOzBCQUM3RDlCLEtBQUssQ0FBQ0csR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRVMsS0FBSzt5Q0FDckIsOERBQUMvQiw0REFBUTt3QkFBYXNCLElBQUksRUFBRUEsSUFBSTt3QkFBRTJCLFFBQVEsRUFBRTttQ0FBTW5CLGVBQWUsQ0FBQ0MsS0FBSyxDQUFDO3lCQUFBO3VCQUF6REEsS0FBSzs7Ozs2QkFBd0Q7aUJBQzdFLENBQUM7Ozs7O29CQUNFOzs7Ozs7WUFDRixDQUNOO0FBQ0osQ0FBQztHQXRKdUI3QixJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYW5kVGlsZSBmcm9tICcuLi9jb21wb25lbnRzL0xhbmRUaWxlJztcbmltcG9ydCBBY3Rpb25NZW51IGZyb20gJy4uL2NvbXBvbmVudHMvQWN0aW9uTWVudSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGluaXRpYWxMYW5kU3RhdGUgPSB7XG4gICAgdHlwZTogJ+iNkuWcsCcsXG4gICAgY3JvcDogbnVsbCxcbiAgICBncm93dGhTdGFnZTogJ+acquaSreeoricsXG4gIH07XG5cbiAgY29uc3QgW3dhcmVob3VzZSwgc2V0V2FyZWhvdXNlXSA9IHVzZVN0YXRlKHtcbiAgICDnsbM6IDAsXG4gICAg57Gz44Gu56iuOiAwLFxuICAgIOWwj+m6pjogMCxcbiAgICDlsI/puqbjga7nqK46IDAsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJXYXJlaG91c2Ugc3RhdGUgdXBkYXRlZDpcIiwgd2FyZWhvdXNlKTtcbiAgfSwgW3dhcmVob3VzZV0pO1xuXG5cbiAgY29uc3QgW2xhbmRzLCBzZXRMYW5kc10gPSB1c2VTdGF0ZShbXG4gICAgLi4ubmV3IEFycmF5KDgwKS5maWxsKHsgLi4uaW5pdGlhbExhbmRTdGF0ZSB9KSxcbiAgICB7IHR5cGU6ICflgInluqsnLCBjcm9wOiAn57GzJywgY291bnQ6IHdhcmVob3VzZVsn57GzJ10gfSxcbiAgICB7IHR5cGU6ICflgInluqsnLCBjcm9wOiAn57Gz44Gu56iuJywgY291bnQ6IHdhcmVob3VzZVsn57Gz44Gu56iuJ10gfSxcbiAgICB7IHR5cGU6ICflgInluqsnLCBjcm9wOiAn5bCP6bqmJywgY291bnQ6IHdhcmVob3VzZVsn5bCP6bqmJ10gfSxcbiAgICB7IHR5cGU6ICflgInluqsnLCBjcm9wOiAn5bCP6bqm44Gu56iuJywgY291bnQ6IHdhcmVob3VzZVsn5bCP6bqm44Gu56iuJ10gfSxcbiAgXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRMYW5kcyA9IGxhbmRzLm1hcChsYW5kID0+IHtcbiAgICAgIGlmIChsYW5kLnR5cGUgPT09ICflgInluqsnKSB7XG4gICAgICAgIHJldHVybiB7IC4uLmxhbmQsIGNvdW50OiB3YXJlaG91c2VbbGFuZC5jcm9wXSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxhbmQ7XG4gICAgfSk7XG5cbiAgICBzZXRMYW5kcyh1cGRhdGVkTGFuZHMpO1xuICB9LCBbd2FyZWhvdXNlLCBsYW5kc10pOyAvLyDkvp3lrZjphY3liJfjgasgd2FyZWhvdXNlIOOBqCBsYW5kcyDjgpLov73liqBcblxuXG4gIGNvbnN0IFtzZWxlY3RlZEFjdGlvbiwgc2V0U2VsZWN0ZWRBY3Rpb25dID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldExhbmRzKGN1cnJlbnRMYW5kcyA9PiBjdXJyZW50TGFuZHMubWFwKGxhbmQgPT4ge1xuICAgICAgICBpZiAobGFuZC50eXBlID09PSAn6ICV5ZywJyAmJiBsYW5kLmNyb3AgIT09IG51bGwpIHtcbiAgICAgICAgICBsZXQgbmV3R3Jvd3RoU3RhZ2UgPSBsYW5kLmdyb3d0aFN0YWdlO1xuICAgICAgICAgIHN3aXRjaCAobGFuZC5ncm93dGhTdGFnZSkge1xuICAgICAgICAgICAgY2FzZSAn5pyq5pKt56iuJzpcbiAgICAgICAgICAgICAgbmV3R3Jvd3RoU3RhZ2UgPSAn5pKt56iuJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICfmkq3nqK4nOlxuICAgICAgICAgICAgICBuZXdHcm93dGhTdGFnZSA9ICflj4zokYknO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ+WPjOiRiSc6XG4gICAgICAgICAgICAgIG5ld0dyb3d0aFN0YWdlID0gJ+aIkOmVt+S4rSc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAn5oiQ6ZW35LitJzpcbiAgICAgICAgICAgICAgbmV3R3Jvd3RoU3RhZ2UgPSAn5Y+O56mr5Y+v6IO9JztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgLi4ubGFuZCwgZ3Jvd3RoU3RhZ2U6IG5ld0dyb3d0aFN0YWdlIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxhbmQ7XG4gICAgICB9KSk7XG4gICAgfSwgMTAwMDApOyAvLyAxMOenkuOBlOOBqOOBq+aIkOmVt+OCteOCpOOCr+ODq+OCkuabtOaWsFxuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTGFuZENsaWNrID0gKGluZGV4KSA9PiB7XG4gICAgY29uc29sZS5sb2coYExhbmQgY2xpY2tlZCBhdCBpbmRleDogJHtpbmRleH0sIHNlbGVjdGVkQWN0aW9uOmAsIHNlbGVjdGVkQWN0aW9uKTtcblxuICAgIGNvbnN0IGxhbmQgPSBsYW5kc1tpbmRleF07XG4gICAgY29uc29sZS5sb2coYExhbmQgc3RhdGUgYmVmb3JlIGFjdGlvbjpgLCBsYW5kKTtcbiAgXG4gICAgLy8g6YG45oqe44GV44KM44Gf44Ki44Kv44K344On44Oz44GM5Y+O56mr44Gu5aC05ZCI44CB44GL44Gk5Zyf5Zyw44GM5Y+O56mr5Y+v6IO944Gq5aC05ZCI44Gr5Y+O56mr5Yem55CG44KS5a6f6KGMXG4gICAgaWYgKHNlbGVjdGVkQWN0aW9uICYmIHNlbGVjdGVkQWN0aW9uLmFjdGlvbiA9PT0gJ+WPjuepqycgJiYgbGFuZC5ncm93dGhTdGFnZSA9PT0gJ+WPjuepq+WPr+iDvScpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBIYXJ2ZXN0aW5nIGxhbmQgYXQgaW5kZXg6ICR7aW5kZXh9YCk7XG4gICAgICBoYXJ2ZXN0KGluZGV4KTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkQWN0aW9uICYmIHNlbGVjdGVkQWN0aW9uLmFjdGlvbiAhPT0gJ+WPjuepqycpIHtcbiAgICAgIC8vIOS7luOBruOCouOCr+OCt+ODp+ODs+OBjOmBuOaKnuOBleOCjOOBpuOBhOOCi+WgtOWQiOOAgeOBneOCjOOBq+W/nOOBmOOBn+WHpueQhuOCkuWun+ihjFxuICAgICAgY29uc29sZS5sb2coYEFwcGx5aW5nIGFjdGlvbiAnJHtzZWxlY3RlZEFjdGlvbi5hY3Rpb259JyB0byBsYW5kIGF0IGluZGV4OiAke2luZGV4fWApO1xuICAgICAgdG9nZ2xlTGFuZFR5cGUoaW5kZXgpO1xuICAgIH1cbiAgfTtcbiAgXG4gIGNvbnN0IGhhbmRsZUFjdGlvblNlbGVjdGVkID0gKGFjdGlvbiwgY3JvcFR5cGUpID0+IHtcbiAgICBzZXRTZWxlY3RlZEFjdGlvbih7IGFjdGlvbiwgY3JvcFR5cGUgfSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlTGFuZFR5cGUgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkTGFuZHMgPSBsYW5kcy5tYXAoKGxhbmQsIGkpID0+IHtcbiAgICAgIGlmIChpID09PSBpbmRleCkge1xuICAgICAgICBsZXQgbmV3TGFuZCA9IHsgLi4ubGFuZCB9O1xuICAgICAgICBpZiAoc2VsZWN0ZWRBY3Rpb24uYWN0aW9uID09PSAn6ICV5Zyw44Gr5aSJ5o+bJyAmJiAobGFuZC50eXBlID09PSAn6I2S5ZywJyB8fCBsYW5kLnR5cGUgPT09ICfojYnlnLAnKSkge1xuICAgICAgICAgIG5ld0xhbmQgPSB7IC4uLmluaXRpYWxMYW5kU3RhdGUsIHR5cGU6ICfogJXlnLAnIH07XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRBY3Rpb24uYWN0aW9uID09PSAn6I2J5Zyw44Gr5aSJ5o+bJyAmJiBsYW5kLnR5cGUgPT09ICfogJXlnLAnKSB7XG4gICAgICAgICAgbmV3TGFuZCA9IHsgLi4uaW5pdGlhbExhbmRTdGF0ZSwgdHlwZTogJ+iNieWcsCcgfTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEFjdGlvbi5hY3Rpb24gPT09ICfnqK7jgpLjgb7jgY8nICYmIGxhbmQudHlwZSA9PT0gJ+iAleWcsCcgJiYgbGFuZC5ncm93dGhTdGFnZSA9PT0gJ+acquaSreeoricpIHtcbiAgICAgICAgICBuZXdMYW5kLmNyb3AgPSBzZWxlY3RlZEFjdGlvbi5jcm9wVHlwZTtcbiAgICAgICAgICBuZXdMYW5kLmdyb3d0aFN0YWdlID0gJ+aSreeoric7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0xhbmQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGFuZDtcbiAgICB9KTtcblxuICAgIHNldExhbmRzKHVwZGF0ZWRMYW5kcyk7XG4gIH07XG5cbiAgY29uc3QgaGFydmVzdCA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IGxhbmQgPSBsYW5kc1tpbmRleF07XG4gICAgY29uc29sZS5sb2coYEhhcnZlc3RpbmcgcHJvY2VzcyBzdGFydGVkIGZvciBsYW5kIGF0IGluZGV4OiAke2luZGV4fWAsIGxhbmQpO1xuXG4gICAgaWYgKGxhbmQuZ3Jvd3RoU3RhZ2UgPT09ICflj47nqavlj6/og70nKSB7XG4gICAgICAvLyDkvZznianjgajjgZ3jga7nqK7jga7jgqvjgqbjg7Pjg4jjgpLlopfjgoTjgZlcbiAgICAgIGNvbnNvbGUubG9nKFwiV2FyZWhvdXNlIHN0YXRlIGJlZm9yZSBoYXJ2ZXN0OlwiLCB3YXJlaG91c2UpO1xuXG4gICAgICBjb25zdCB1cGRhdGUgPSB7XG4gICAgICAgIFtsYW5kLmNyb3BdOiB3YXJlaG91c2VbbGFuZC5jcm9wXSArIDEsXG4gICAgICAgIFtgJHtsYW5kLmNyb3B944Gu56iuYF06IHdhcmVob3VzZVtgJHtsYW5kLmNyb3B944Gu56iuYF0gKyAxLFxuICAgICAgfTtcbiAgXG4gICAgICBzZXRXYXJlaG91c2UocHJldiA9PiB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZSA9IHtcbiAgICAgICAgICBbbGFuZC5jcm9wXTogcHJldltsYW5kLmNyb3BdICsgMSxcbiAgICAgICAgICBbYCR7bGFuZC5jcm9wfeOBrueormBdOiBwcmV2W2Ake2xhbmQuY3JvcH3jga7nqK5gXSArIDEsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgd2FyZWhvdXNlIHN0YXRlIGZvciBoYXJ2ZXN0IHdpdGg6XCIsIHVwZGF0ZSk7XG4gICAgICAgIHJldHVybiB7IC4uLnByZXYsIC4uLnVwZGF0ZSB9O1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKGBSZXNldHRpbmcgbGFuZCBhdCBpbmRleDogJHtpbmRleH0gdG8gdGlsbGFibGUgbGFuZCBhZnRlciBoYXJ2ZXN0LmApO1xuICAgICAgLy8g5Zyf5Zyw44KS6ICV5Zyw44Gr44Oq44K744OD44OIXG4gICAgICBzZXRMYW5kcyhjdXJyZW50TGFuZHMgPT4gY3VycmVudExhbmRzLm1hcCgobCwgaWR4KSA9PiBpZHggPT09IGluZGV4ID8geyAuLi5pbml0aWFsTGFuZFN0YXRlLCB0eXBlOiAn6ICV5ZywJyB9IDogbCkpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIkxhbmRzIHN0YXRlIGFmdGVyIHVwZGF0aW5nIHdhcmVob3VzZSBjb3VudDpcIiwgbGFuZHMpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8QWN0aW9uTWVudSBvbkFjdGlvblNlbGVjdGVkPXtoYW5kbGVBY3Rpb25TZWxlY3RlZH0gLz5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4V3JhcDogJ3dyYXAnLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICB7bGFuZHMubWFwKChsYW5kLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxMYW5kVGlsZSBrZXk9e2luZGV4fSBsYW5kPXtsYW5kfSBvblRvZ2dsZT17KCkgPT4gaGFuZGxlTGFuZENsaWNrKGluZGV4KX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxhbmRUaWxlIiwiQWN0aW9uTWVudSIsIkhvbWUiLCJpbml0aWFsTGFuZFN0YXRlIiwidHlwZSIsImNyb3AiLCJncm93dGhTdGFnZSIsIuexsyIsIuexs+OBrueoriIsIuWwj+m6piIsIuWwj+m6puOBrueoriIsIndhcmVob3VzZSIsInNldFdhcmVob3VzZSIsImNvbnNvbGUiLCJsb2ciLCJBcnJheSIsImZpbGwiLCJjb3VudCIsImxhbmRzIiwic2V0TGFuZHMiLCJ1cGRhdGVkTGFuZHMiLCJtYXAiLCJsYW5kIiwic2VsZWN0ZWRBY3Rpb24iLCJzZXRTZWxlY3RlZEFjdGlvbiIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50TGFuZHMiLCJuZXdHcm93dGhTdGFnZSIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVMYW5kQ2xpY2siLCJpbmRleCIsImFjdGlvbiIsImhhcnZlc3QiLCJ0b2dnbGVMYW5kVHlwZSIsImhhbmRsZUFjdGlvblNlbGVjdGVkIiwiY3JvcFR5cGUiLCJpIiwibmV3TGFuZCIsInVwZGF0ZSIsInByZXYiLCJsIiwiaWR4IiwiZGl2Iiwib25BY3Rpb25TZWxlY3RlZCIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhXcmFwIiwid2lkdGgiLCJvblRvZ2dsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});