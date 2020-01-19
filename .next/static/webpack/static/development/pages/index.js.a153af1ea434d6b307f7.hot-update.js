webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src */ "./src/index.ts");
var _jsxFileName = "/Users/danielkov/projects/packages/atomic/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




var spacing = function spacing(props) {
  var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref18, _ref19, _ref20, _ref21, _ref22, _ref23, _ref24, _ref25, _ref26;

  var padding = (_ref = props === null || props === void 0 ? void 0 : props.padding) !== null && _ref !== void 0 ? _ref : props === null || props === void 0 ? void 0 : props.p;
  var paddingTop = (_ref2 = (_ref3 = (_ref4 = props === null || props === void 0 ? void 0 : props.paddingVertical) !== null && _ref4 !== void 0 ? _ref4 : props === null || props === void 0 ? void 0 : props.pv) !== null && _ref3 !== void 0 ? _ref3 : props === null || props === void 0 ? void 0 : props.paddingTop) !== null && _ref2 !== void 0 ? _ref2 : props === null || props === void 0 ? void 0 : props.pt;
  var paddingBottom = (_ref5 = (_ref6 = (_ref7 = props === null || props === void 0 ? void 0 : props.paddingVertical) !== null && _ref7 !== void 0 ? _ref7 : props === null || props === void 0 ? void 0 : props.pv) !== null && _ref6 !== void 0 ? _ref6 : props === null || props === void 0 ? void 0 : props.paddingBottom) !== null && _ref5 !== void 0 ? _ref5 : props === null || props === void 0 ? void 0 : props.pb;
  var paddingLeft = (_ref8 = (_ref9 = (_ref10 = props === null || props === void 0 ? void 0 : props.paddingHorizontal) !== null && _ref10 !== void 0 ? _ref10 : props === null || props === void 0 ? void 0 : props.ph) !== null && _ref9 !== void 0 ? _ref9 : props === null || props === void 0 ? void 0 : props.paddingLeft) !== null && _ref8 !== void 0 ? _ref8 : props === null || props === void 0 ? void 0 : props.pl;
  var paddingRight = (_ref11 = (_ref12 = (_ref13 = props === null || props === void 0 ? void 0 : props.paddingHorizontal) !== null && _ref13 !== void 0 ? _ref13 : props === null || props === void 0 ? void 0 : props.ph) !== null && _ref12 !== void 0 ? _ref12 : props === null || props === void 0 ? void 0 : props.paddingRight) !== null && _ref11 !== void 0 ? _ref11 : props === null || props === void 0 ? void 0 : props.pr;
  var margin = (_ref14 = props === null || props === void 0 ? void 0 : props.margin) !== null && _ref14 !== void 0 ? _ref14 : props === null || props === void 0 ? void 0 : props.m;
  var marginTop = (_ref15 = (_ref16 = (_ref17 = props === null || props === void 0 ? void 0 : props.marginVertical) !== null && _ref17 !== void 0 ? _ref17 : props === null || props === void 0 ? void 0 : props.mv) !== null && _ref16 !== void 0 ? _ref16 : props === null || props === void 0 ? void 0 : props.marginTop) !== null && _ref15 !== void 0 ? _ref15 : props === null || props === void 0 ? void 0 : props.mt;
  var marginBottom = (_ref18 = (_ref19 = (_ref20 = props === null || props === void 0 ? void 0 : props.marginVertical) !== null && _ref20 !== void 0 ? _ref20 : props === null || props === void 0 ? void 0 : props.mv) !== null && _ref19 !== void 0 ? _ref19 : props === null || props === void 0 ? void 0 : props.marginBottom) !== null && _ref18 !== void 0 ? _ref18 : props === null || props === void 0 ? void 0 : props.mb;
  var marginLeft = (_ref21 = (_ref22 = (_ref23 = props === null || props === void 0 ? void 0 : props.marginHorizontal) !== null && _ref23 !== void 0 ? _ref23 : props === null || props === void 0 ? void 0 : props.mh) !== null && _ref22 !== void 0 ? _ref22 : props === null || props === void 0 ? void 0 : props.marginLeft) !== null && _ref21 !== void 0 ? _ref21 : props === null || props === void 0 ? void 0 : props.ml;
  var marginRight = (_ref24 = (_ref25 = (_ref26 = props === null || props === void 0 ? void 0 : props.marginHorizontal) !== null && _ref26 !== void 0 ? _ref26 : props === null || props === void 0 ? void 0 : props.mh) !== null && _ref25 !== void 0 ? _ref25 : props === null || props === void 0 ? void 0 : props.marginRight) !== null && _ref24 !== void 0 ? _ref24 : props === null || props === void 0 ? void 0 : props.mr;
  return function () {
    return {
      padding: padding,
      paddingTop: paddingTop,
      paddingBottom: paddingBottom,
      paddingLeft: paddingLeft,
      paddingRight: paddingRight,
      margin: margin,
      marginTop: marginTop,
      marginBottom: marginBottom,
      marginLeft: marginLeft,
      marginRight: marginRight
    };
  };
};

var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(Object(_src__WEBPACK_IMPORTED_MODULE_2__["compose"])(function (props) {
  return {
    backgroundColor: props.theme.colors.primary,
    color: props.theme.colors.primaryColor,
    paddingLeft: props.theme.spacing.l,
    paddingRight: props.theme.spacing.l,
    paddingTop: props.theme.spacing.m,
    paddingBottom: props.theme.spacing.m
  };
}, function () {
  return {
    fontSize: 20,
    borderRadius: 5,
    border: 'none'
  };
}, spacing));
var theme = {
  colors: {
    primary: 'purple',
    primaryColor: 'white'
  },
  spacing: {
    xs: 2,
    s: 4,
    m: 8,
    l: 12,
    xl: 16
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Hello CodeSandbox"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Start editing to see some magic happen!"), __jsx(Button, {
    ph: 14,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Get started")));
});

/***/ })

})
//# sourceMappingURL=index.js.a153af1ea434d6b307f7.hot-update.js.map