module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src */ "./src/index.ts");
var _jsxFileName = "/Users/danielkov/projects/packages/atomic/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(Object(_src__WEBPACK_IMPORTED_MODULE_2__["compose"])(props => ({
  backgroundColor: props.theme.colors.primary,
  color: props.theme.colors.primaryColor,
  paddingLeft: props.theme.spacing.l,
  paddingRight: props.theme.spacing.l,
  paddingTop: props.theme.spacing.m,
  paddingBottom: props.theme.spacing.m
}), () => ({
  fontSize: 20,
  borderRadius: 5,
  border: 'none'
}), _src__WEBPACK_IMPORTED_MODULE_2__["spacing"]));
const theme = {
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
/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "Hello CodeSandbox"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Start editing to see some magic happen!"), __jsx(Button, {
    ph: 14,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Get started")));
});

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: compose, combine, base, variant, is, spacingPropTypes, spacing, opacityPropTypes, opacity, displayPropTypes, display, sizePropTypes, size, flexPropTypes, flex, gridPropTypes, grid, typographyPropTypes, typography, colorPropTypes, color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combine", function() { return combine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variant", function() { return variant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spacingPropTypes", function() { return spacingPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spacing", function() { return spacing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opacityPropTypes", function() { return opacityPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opacity", function() { return opacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayPropTypes", function() { return displayPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "display", function() { return display; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizePropTypes", function() { return sizePropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexPropTypes", function() { return flexPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flex", function() { return flex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridPropTypes", function() { return gridPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return grid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typographyPropTypes", function() { return typographyPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typography", function() { return typography; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorPropTypes", function() { return colorPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const compose = (...args) => {
  return props => {
    return args.reduce((acc, arg) => {
      const styles = arg(props);

      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(styles).forEach(key => {
        const value = styles[key];

        if (value !== undefined && value !== null) {
          acc[key] = value;
        }
      });

      return acc;
    }, {});
  };
};
const combine = (p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15) => {
  const atomics = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15].filter(Boolean);
  return props => {
    return atomics.map(atomic => atomic(props)).flat(1).filter(Boolean);
  };
};
const aliases = {
  padding: 'p',
  paddingLeft: 'pl',
  paddingRight: 'pr',
  paddingTop: 'pt',
  paddingBottom: 'pb',
  margin: 'm',
  marginLeft: 'ml',
  marginRight: 'mr',
  marginTop: 'mt',
  marginBottom: 'mb',
  opacity: 'o',
  display: 'd',
  width: 'w',
  height: 'h',
  flexDirection: 'direction',
  alignItems: 'align',
  justifyContent: 'justify',
  flexWrap: 'wrap',
  flexGrow: 'grow',
  flexShrink: 'shrink',
  flexBasis: 'basis',
  flexFlow: 'flow',
  gridArea: 'area',
  gridAutoColumns: 'autoColumns',
  gridAutoFlow: 'autoFlow',
  gridAutoRows: 'autoRows',
  gridColumnEnd: 'columnEnd',
  gridColumnGap: 'columnGap',
  gridColumnStart: 'columnStart',
  gridColumn: 'column',
  gridGap: 'gap',
  gridRowEnd: 'rowEnd',
  gridRowGap: 'rowGap',
  gridRowStart: 'rowStart',
  gridRow: 'row',
  gridTemplateAreas: 'areas',
  gridTemplateColumns: 'columns',
  gridTemplateRows: 'rows',
  gridTemplate: 'template',
  background: 'bg',
  color: 'c'
};

const isThemeAccessor = candidate => {
  return typeof candidate === 'function';
};

const hasTheme = props => {
  return typeof props.theme === 'object';
};

const getProperty = (props, name) => {
  const alias = aliases[name];
  const variable = props[name] || alias && props[alias];

  if (typeof variable === 'object') {
    throw new Error(`getProperty does not support nested objects.`);
  }

  if (isThemeAccessor(variable)) {
    if (!hasTheme(props)) {
      throw new Error(`getProperty tried to access props.theme and got undefined. Try adding a ThemeProvider.`);
    }

    return variable(props);
  }

  return variable;
};

const toPx = value => typeof value === 'undefined' ? undefined : typeof value === 'string' ? value : `${value}px`;

const base = css => {
  return props => {
    const properties = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(css).reduce((obj, key) => {
      const property = getProperty(_objectSpread({}, props, {}, css), key);
      return _objectSpread({}, obj, {
        [key]: property
      });
    }, {});

    return interpolate(properties);
  };
};
const variant = (name, css) => {
  return props => {
    if (props.variant === name) {
      return base(css)(props);
    }

    return [];
  };
};
const is = (name, css) => {
  return props => {
    if (props[name]) {
      return base(css)(props);
    }

    return [];
  };
};
const globalsNumberType = Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["number"], // This looks weird but it's the only way to make TS happy with inferred propTypes
Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOf"])(['-moz-initial', 'inherit', 'initial', 'revert', 'unset'])]);
const spacingPropTypes = {
  margin: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  m: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  marginLeft: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  ml: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  marginRight: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  mr: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  marginTop: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  mt: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  marginBottom: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  mb: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  padding: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  p: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  paddingLeft: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  pl: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  paddingRight: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  pr: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  paddingTop: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  pt: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  paddingBottom: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  pb: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]])
};
const spacing = props => {
  var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref18, _ref19, _ref20, _ref21, _ref22, _ref23, _ref24, _ref25, _ref26;

  const padding = (_ref = props === null || props === void 0 ? void 0 : props.padding) !== null && _ref !== void 0 ? _ref : props === null || props === void 0 ? void 0 : props.p;
  const paddingTop = (_ref2 = (_ref3 = (_ref4 = props === null || props === void 0 ? void 0 : props.paddingVertical) !== null && _ref4 !== void 0 ? _ref4 : props === null || props === void 0 ? void 0 : props.pv) !== null && _ref3 !== void 0 ? _ref3 : props === null || props === void 0 ? void 0 : props.paddingTop) !== null && _ref2 !== void 0 ? _ref2 : props === null || props === void 0 ? void 0 : props.pt;
  const paddingBottom = (_ref5 = (_ref6 = (_ref7 = props === null || props === void 0 ? void 0 : props.paddingVertical) !== null && _ref7 !== void 0 ? _ref7 : props === null || props === void 0 ? void 0 : props.pv) !== null && _ref6 !== void 0 ? _ref6 : props === null || props === void 0 ? void 0 : props.paddingBottom) !== null && _ref5 !== void 0 ? _ref5 : props === null || props === void 0 ? void 0 : props.pb;
  const paddingLeft = (_ref8 = (_ref9 = (_ref10 = props === null || props === void 0 ? void 0 : props.paddingHorizontal) !== null && _ref10 !== void 0 ? _ref10 : props === null || props === void 0 ? void 0 : props.ph) !== null && _ref9 !== void 0 ? _ref9 : props === null || props === void 0 ? void 0 : props.paddingLeft) !== null && _ref8 !== void 0 ? _ref8 : props === null || props === void 0 ? void 0 : props.pl;
  const paddingRight = (_ref11 = (_ref12 = (_ref13 = props === null || props === void 0 ? void 0 : props.paddingHorizontal) !== null && _ref13 !== void 0 ? _ref13 : props === null || props === void 0 ? void 0 : props.ph) !== null && _ref12 !== void 0 ? _ref12 : props === null || props === void 0 ? void 0 : props.paddingRight) !== null && _ref11 !== void 0 ? _ref11 : props === null || props === void 0 ? void 0 : props.pr;
  const margin = (_ref14 = props === null || props === void 0 ? void 0 : props.margin) !== null && _ref14 !== void 0 ? _ref14 : props === null || props === void 0 ? void 0 : props.m;
  const marginTop = (_ref15 = (_ref16 = (_ref17 = props === null || props === void 0 ? void 0 : props.marginVertical) !== null && _ref17 !== void 0 ? _ref17 : props === null || props === void 0 ? void 0 : props.mv) !== null && _ref16 !== void 0 ? _ref16 : props === null || props === void 0 ? void 0 : props.marginTop) !== null && _ref15 !== void 0 ? _ref15 : props === null || props === void 0 ? void 0 : props.mt;
  const marginBottom = (_ref18 = (_ref19 = (_ref20 = props === null || props === void 0 ? void 0 : props.marginVertical) !== null && _ref20 !== void 0 ? _ref20 : props === null || props === void 0 ? void 0 : props.mv) !== null && _ref19 !== void 0 ? _ref19 : props === null || props === void 0 ? void 0 : props.marginBottom) !== null && _ref18 !== void 0 ? _ref18 : props === null || props === void 0 ? void 0 : props.mb;
  const marginLeft = (_ref21 = (_ref22 = (_ref23 = props === null || props === void 0 ? void 0 : props.marginHorizontal) !== null && _ref23 !== void 0 ? _ref23 : props === null || props === void 0 ? void 0 : props.mh) !== null && _ref22 !== void 0 ? _ref22 : props === null || props === void 0 ? void 0 : props.marginLeft) !== null && _ref21 !== void 0 ? _ref21 : props === null || props === void 0 ? void 0 : props.ml;
  const marginRight = (_ref24 = (_ref25 = (_ref26 = props === null || props === void 0 ? void 0 : props.marginHorizontal) !== null && _ref26 !== void 0 ? _ref26 : props === null || props === void 0 ? void 0 : props.mh) !== null && _ref25 !== void 0 ? _ref25 : props === null || props === void 0 ? void 0 : props.marginRight) !== null && _ref24 !== void 0 ? _ref24 : props === null || props === void 0 ? void 0 : props.mr;
  return {
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight
  };
};
const opacityPropTypes = {
  opacity: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  o: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]])
};
const opacity = props => {
  const opacity = getProperty(props, 'opacity');
  return interpolate({
    opacity
  });
};
const displayPropTypes = {
  display: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  d: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"]
};
const display = props => {
  const display = getProperty(props, 'display');
  return interpolate({
    display
  });
};
const sizePropTypes = {
  width: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["number"], prop_types__WEBPACK_IMPORTED_MODULE_7__["string"]]),
  w: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["number"], prop_types__WEBPACK_IMPORTED_MODULE_7__["string"]]),
  height: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["number"], prop_types__WEBPACK_IMPORTED_MODULE_7__["string"]]),
  h: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["number"], prop_types__WEBPACK_IMPORTED_MODULE_7__["string"]])
};
const size = props => {
  const width = toPx(getProperty(props, 'width'));
  const height = toPx(getProperty(props, 'height'));
  return interpolate({
    width,
    height
  });
};
const flexDirectionType = Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOf"])(['-moz-initial', 'inherit', 'initial', 'revert', 'unset', 'column', 'column-reverse', 'row', 'row-reverse']);
const flexWrapType = Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOf"])(['wrap', '-moz-initial', 'inherit', 'initial', 'revert', 'unset', 'nowrap', 'wrap-reverse']);
const flexPropTypes = {
  flex: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  order: globalsNumberType,
  flexDirection: flexDirectionType,
  direction: flexDirectionType,
  alignItems: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  align: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  justifyContent: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  justify: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  flexWrap: flexWrapType,
  wrap: flexWrapType,
  flexGrow: globalsNumberType,
  grow: globalsNumberType,
  flexShrink: globalsNumberType,
  shrink: globalsNumberType,
  flexBasis: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  basis: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  alignContent: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  flexFlow: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  flow: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"]
};
const flex = props => {
  const flex = getProperty(props, 'flex');
  const order = getProperty(props, 'order');
  const flexDirection = getProperty(props, 'flexDirection');
  const alignItems = getProperty(props, 'alignItems');
  const justifyContent = getProperty(props, 'justifyContent');
  const flexWrap = getProperty(props, 'flexWrap');
  const flexGrow = getProperty(props, 'flexGrow');
  const flexShrink = getProperty(props, 'flexShrink');
  const flexBasis = getProperty(props, 'flexBasis');
  const alignContent = getProperty(props, 'alignContent');
  const flexFlow = getProperty(props, 'flexFlow');
  return interpolate({
    flex,
    order,
    flexDirection,
    alignItems,
    justifyContent,
    flexWrap,
    flexGrow,
    flexShrink,
    flexBasis,
    alignContent,
    flexFlow
  });
};
const gridPropTypes = {
  grid: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  gridArea: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  area: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  gridAutoColumns: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  autoColumns: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  gridAutoFlow: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  autoFlow: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  gridAutoRows: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  autoRows: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  gridColumnEnd: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  columnEnd: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  gridColumnGap: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  columnGap: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  gridColumnStart: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  columnStart: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  gridColumn: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  column: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  gridGap: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  gap: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  gridRowEnd: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  rowEnd: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  gridRowGap: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  rowGap: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  gridRowStart: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  rowStart: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  gridRow: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  row: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  gridTemplateAreas: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  areas: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  gridTemplateColumns: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  columns: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  gridTemplateRows: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  rows: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  gridTemplate: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  template: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"]
};
const grid = props => {
  return interpolate({
    grid: getProperty(props, 'grid'),
    gridArea: getProperty(props, 'gridArea'),
    gridAutoColumns: getProperty(props, 'gridAutoColumns'),
    gridAutoFlow: getProperty(props, 'gridAutoFlow'),
    gridAutoRows: getProperty(props, 'gridAutoRows'),
    gridColumnEnd: getProperty(props, 'gridColumnEnd'),
    gridColumnGap: toPx(getProperty(props, 'gridColumnGap')),
    gridColumnStart: getProperty(props, 'gridColumnStart'),
    gridColumn: getProperty(props, 'gridColumn'),
    gridGap: toPx(getProperty(props, 'gridGap')),
    gridRowEnd: getProperty(props, 'gridRowEnd'),
    gridRowGap: toPx(getProperty(props, 'gridRowGap')),
    gridRowStart: getProperty(props, 'gridRowStart'),
    gridRow: getProperty(props, 'gridRow'),
    gridTemplateAreas: getProperty(props, 'gridTemplateAreas'),
    gridTemplateColumns: getProperty(props, 'gridTemplateColumns'),
    gridTemplateRows: getProperty(props, 'gridTemplateRows'),
    gridTemplate: getProperty(props, 'gridTemplate')
  });
};
const fontWeightType = Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["number"], Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOf"])(['-moz-initial', 'inherit', 'initial', 'revert', 'unset', 'normal', 'bold', 'bolder', 'lighter'])]);
const textAlignType = Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOf"])(['-moz-initial', 'inherit', 'initial', 'revert', 'unset', 'center', 'end', 'justify', 'left', 'match-parent', 'right', 'start']);
const typographyPropTypes = {
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  fontSize: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  fontWeight: fontWeightType,
  lineHeight: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  letterSpacing: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  textAlign: textAlignType,
  fontStyle: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"]
};
const typography = props => {
  return interpolate({
    fontFamily: getProperty(props, 'fontFamily'),
    fontSize: toPx(getProperty(props, 'fontSize')),
    fontWeight: getProperty(props, 'fontWeight'),
    lineHeight: toPx(getProperty(props, 'lineHeight')),
    letterSpacing: toPx(getProperty(props, 'letterSpacing')),
    textAlign: getProperty(props, 'textAlign'),
    fontStyle: getProperty(props, 'fontStyle')
  });
};
const colorPropTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  c: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  bg: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"]
};
const color = props => {
  return interpolate({
    color: getProperty(props, 'color'),
    backgroundColor: getProperty(props, 'backgroundColor')
  });
};

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danielkov/projects/packages/atomic/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map