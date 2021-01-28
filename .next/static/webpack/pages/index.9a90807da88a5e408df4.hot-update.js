webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_andre_Downloads_Next_js_single_page_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_andre_Downloads_Next_js_single_page_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_andre_Downloads_Next_js_single_page_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_andre_Downloads_Next_js_single_page_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_andre_Downloads_Next_js_single_page_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_andre_Downloads_Next_js_single_page_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _snippets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./snippets */ \"./components/snippets.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/andre/Downloads/Next-js-single-page-app/components/Header.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_andre_Downloads_Next_js_single_page_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_andre_Downloads_Next_js_single_page_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_andre_Downloads_Next_js_single_page_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar Header = /*#__PURE__*/function (_Component) {\n  Object(_Users_andre_Downloads_Next_js_single_page_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Header, _Component);\n\n  var _super = _createSuper(Header);\n\n  function Header(props) {\n    var _this;\n\n    Object(_Users_andre_Downloads_Next_js_single_page_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Header);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      navOpen: false\n    };\n    _this.showMobileNav = _this.showMobileNav.bind(Object(_Users_andre_Downloads_Next_js_single_page_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_Users_andre_Downloads_Next_js_single_page_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Header, [{\n    key: \"showMobileNav\",\n    value: function showMobileNav() {\n      var _this2 = this;\n\n      this.setState(function (state) {\n        return {\n          navOpen: !_this2.state.navOpen\n        };\n      });\n    }\n  }, {\n    key: \"scrollToTeams\",\n    value: function scrollToTeams() {\n      document.getElementById(\"teamsId\").scrollIntoView({\n        behavior: 'smooth'\n      });\n    }\n  }, {\n    key: \"scrollToFeatures\",\n    value: function scrollToFeatures() {\n      document.getElementById(\"featuresId\").scrollIntoView({\n        behavior: 'smooth'\n      });\n    }\n  }, {\n    key: \"scrollToSignIn\",\n    value: function scrollToSignIn() {\n      document.getElementById(\"signInId\").scrollIntoView({\n        behavior: 'smooth'\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(_snippets__WEBPACK_IMPORTED_MODULE_9__[\"HeaderBody\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }\n      }, __jsx(_snippets__WEBPACK_IMPORTED_MODULE_9__[\"NavRight\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 17\n        }\n      }, __jsx(_snippets__WEBPACK_IMPORTED_MODULE_9__[\"NavLinks\"], {\n        onClick: this.scrollToFeatures.bind(this),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 21\n        }\n      }, \"Features\"), __jsx(_snippets__WEBPACK_IMPORTED_MODULE_9__[\"NavLinks\"], {\n        onClick: this.scrollToTeams.bind(this),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 21\n        }\n      }, \"Team\"), __jsx(_snippets__WEBPACK_IMPORTED_MODULE_9__[\"NavLinks\"], {\n        onClick: this.scrollToSignIn.bind(this),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 21\n        }\n      }, \"Sign in\")), __jsx(_snippets__WEBPACK_IMPORTED_MODULE_9__[\"NavbarToggle\"], {\n        onClick: this.showMobileNav,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 17\n        }\n      }, \"\\u2630\"), this.state.navOpen ? __jsx(_snippets__WEBPACK_IMPORTED_MODULE_9__[\"MobileNavRight\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 25\n        }\n      }, __jsx(_snippets__WEBPACK_IMPORTED_MODULE_9__[\"NavLinks\"], {\n        onClick: this.scrollToFeatures.bind(this),\n        style: {\n          justifyContent: 'center',\n          fontWeight: '600'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 29\n        }\n      }, \"Features\"), __jsx(_snippets__WEBPACK_IMPORTED_MODULE_9__[\"NavLinks\"], {\n        onClick: this.scrollToTeams.bind(this),\n        style: {\n          justifyContent: 'center',\n          fontWeight: '600'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 29\n        }\n      }, \"Team\"), __jsx(_snippets__WEBPACK_IMPORTED_MODULE_9__[\"NavLinks\"], {\n        onClick: this.scrollToSignIn.bind(this),\n        style: {\n          justifyContent: 'center',\n          fontWeight: '600'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 29\n        }\n      }, \"Sign in\")) : \"\");\n    }\n  }]);\n\n  return Header;\n}(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NmY0YSJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwcm9wcyIsInN0YXRlIiwibmF2T3BlbiIsInNob3dNb2JpbGVOYXYiLCJiaW5kIiwic2V0U3RhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInNjcm9sbFRvRmVhdHVyZXMiLCJzY3JvbGxUb1RlYW1zIiwic2Nyb2xsVG9TaWduSW4iLCJqdXN0aWZ5Q29udGVudCIsImZvbnRXZWlnaHQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBYU1BLE07Ozs7O0FBQ0Ysa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxhQUFPLEVBQUU7QUFEQSxLQUFiO0FBR0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CQyxJQUFuQixvS0FBckI7QUFMZTtBQU1sQjs7OztvQ0FFZTtBQUFBOztBQUNaLFdBQUtDLFFBQUwsQ0FBYyxVQUFBSixLQUFLO0FBQUEsZUFBSztBQUNwQkMsaUJBQU8sRUFBRSxDQUFDLE1BQUksQ0FBQ0QsS0FBTCxDQUFXQztBQURELFNBQUw7QUFBQSxPQUFuQjtBQUdIOzs7b0NBRWU7QUFDWkksY0FBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLEVBQW1DQyxjQUFuQyxDQUFrRDtBQUM5Q0MsZ0JBQVEsRUFBRTtBQURvQyxPQUFsRDtBQUdIOzs7dUNBRWtCO0FBQ2ZILGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ0MsY0FBdEMsQ0FBcUQ7QUFDakRDLGdCQUFRLEVBQUU7QUFEdUMsT0FBckQ7QUFHSDs7O3FDQUVnQjtBQUNiSCxjQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDLGNBQXBDLENBQW1EO0FBQy9DQyxnQkFBUSxFQUFFO0FBRHFDLE9BQW5EO0FBR0g7Ozs2QkFJUTtBQUNMLGFBQ0ksTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUUksTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxrREFBRDtBQUFVLGVBQU8sRUFBRSxLQUFLQyxnQkFBTCxDQUFzQk4sSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixFQUdJLE1BQUMsa0RBQUQ7QUFBVSxlQUFPLEVBQUUsS0FBS08sYUFBTCxDQUFtQlAsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixFQUtJLE1BQUMsa0RBQUQ7QUFBVSxlQUFPLEVBQUUsS0FBS1EsY0FBTCxDQUFvQlIsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixDQVJKLEVBZ0JJLE1BQUMsc0RBQUQ7QUFBYyxlQUFPLEVBQUUsS0FBS0QsYUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoQkosRUFxQlEsS0FBS0YsS0FBTCxDQUFXQyxPQUFYLEdBQ0ksTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxrREFBRDtBQUFVLGVBQU8sRUFBRSxLQUFLUSxnQkFBTCxDQUFzQk4sSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBbkI7QUFBcUQsYUFBSyxFQUFFO0FBQUVTLHdCQUFjLEVBQUUsUUFBbEI7QUFBNEJDLG9CQUFVLEVBQUU7QUFBeEMsU0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixFQU9JLE1BQUMsa0RBQUQ7QUFBVSxlQUFPLEVBQUUsS0FBS0gsYUFBTCxDQUFtQlAsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBbkI7QUFBa0QsYUFBSyxFQUFFO0FBQUVTLHdCQUFjLEVBQUUsUUFBbEI7QUFBNEJDLG9CQUFVLEVBQUU7QUFBeEMsU0FBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSixFQVNJLE1BQUMsa0RBQUQ7QUFBVSxlQUFPLEVBQUUsS0FBS0YsY0FBTCxDQUFvQlIsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBbkI7QUFBbUQsYUFBSyxFQUFFO0FBQUVTLHdCQUFjLEVBQUUsUUFBbEI7QUFBNEJDLG9CQUFVLEVBQUU7QUFBeEMsU0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFUSixDQURKLEdBY0ksRUFuQ1osQ0FESjtBQTJDSDs7OztFQS9FZ0JDLCtDOztBQWtGTmhCLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7XG4gICAgSGVhZGVyQm9keSxcbiAgICBOYXZMZWZ0LFxuICAgIExvZ29EaXYsXG4gICAgTmF2UmlnaHQsXG4gICAgTmF2TGlua3MsXG4gICAgTW9iaWxlTmF2UmlnaHQsXG4gICAgTmF2YmFyVG9nZ2xlXG59IGZyb20gXCIuL3NuaXBwZXRzXCI7XG5cblxuXG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmF2T3BlbjogZmFsc2UsXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93TW9iaWxlTmF2ID0gdGhpcy5zaG93TW9iaWxlTmF2LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2hvd01vYmlsZU5hdigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgICAgICAgbmF2T3BlbjogIXRoaXMuc3RhdGUubmF2T3BlbiwgXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBzY3JvbGxUb1RlYW1zKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlYW1zSWRcIikuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNjcm9sbFRvRmVhdHVyZXMoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVhdHVyZXNJZFwiKS5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9TaWduSW4oKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbkluSWRcIikuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEhlYWRlckJvZHk+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgey8qIDxOYXZMZWZ0PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ29EaXYgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvTmF2TGVmdD4gKi99XG5cbiAgICAgICAgICAgICAgICA8TmF2UmlnaHQ+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rcyBvbkNsaWNrPXt0aGlzLnNjcm9sbFRvRmVhdHVyZXMuYmluZCh0aGlzKX0+RmVhdHVyZXM8L05hdkxpbmtzPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmtzIG9uQ2xpY2s9e3RoaXMuc2Nyb2xsVG9UZWFtcy5iaW5kKHRoaXMpfT5UZWFtPC9OYXZMaW5rcz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rcyBvbkNsaWNrPXt0aGlzLnNjcm9sbFRvU2lnbkluLmJpbmQodGhpcyl9PlNpZ24gaW48L05hdkxpbmtzPlxuICAgICAgICAgICAgICAgIDwvTmF2UmlnaHQ+XG5cbiAgICAgICAgICAgICAgICA8TmF2YmFyVG9nZ2xlIG9uQ2xpY2s9e3RoaXMuc2hvd01vYmlsZU5hdn0+XG4gICAgICAgICAgICAgICAgICAgICYjOTc3NjtcbiAgICAgICAgICAgICAgICA8L05hdmJhclRvZ2dsZT5cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5uYXZPcGVuID8gXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9iaWxlTmF2UmlnaHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmtzIG9uQ2xpY2s9e3RoaXMuc2Nyb2xsVG9GZWF0dXJlcy5iaW5kKHRoaXMpfSBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGZvbnRXZWlnaHQ6ICc2MDAnIH19PkZlYXR1cmVzPC9OYXZMaW5rcz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rcyBzdHlsZT17e2p1c3RpZnlDb250ZW50OiAnY2VudGVyJywgZm9udFdlaWdodDogJzYwMCd9fT5GZWF0dXJlczwvTmF2TGlua3M+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rcyBvbkNsaWNrPXt0aGlzLnNjcm9sbFRvVGVhbXMuYmluZCh0aGlzKX0gc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBmb250V2VpZ2h0OiAnNjAwJyB9fT5UZWFtPC9OYXZMaW5rcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGlua3Mgb25DbGljaz17dGhpcy5zY3JvbGxUb1NpZ25Jbi5iaW5kKHRoaXMpfSBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGZvbnRXZWlnaHQ6ICc2MDAnIH19PlNpZ24gaW48L05hdkxpbmtzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2JpbGVOYXZSaWdodD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvSGVhZGVyQm9keT5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

})