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
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Hello CodeSandbox"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Start editing to see some magic happen!"), __jsx(Button, {
    ph: 14,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Get started")));
});

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: compose, combine, base, variant, is, paddingPropTypes, padding, marginPropTypes, margin, spacingPropTypes, spacing, opacityPropTypes, opacity, displayPropTypes, display, sizePropTypes, size, flexPropTypes, flex, gridPropTypes, grid, typographyPropTypes, typography, colorPropTypes, color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combine", function() { return combine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variant", function() { return variant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingPropTypes", function() { return paddingPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padding", function() { return padding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marginPropTypes", function() { return marginPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "margin", function() { return margin; });
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


var compose = function compose() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (props) {
    return args.reduce(function (acc, arg) {
      var styles = arg(props);

      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(styles).forEach(function (key) {
        var value = styles[key];

        if (value !== undefined && value !== null) {
          acc[key] = value;
        }
      });

      return acc;
    }, {});
  };
};
var combine = function combine(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15) {
  var atomics = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15].filter(Boolean);
  return function (props) {
    return atomics.map(function (atomic) {
      return atomic(props);
    }).flat(1).filter(Boolean);
  };
};
var aliases = {
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

var isThemeAccessor = function isThemeAccessor(candidate) {
  return typeof candidate === 'function';
};

var hasTheme = function hasTheme(props) {
  return typeof props.theme === 'object';
};

var getProperty = function getProperty(props, name) {
  var alias = aliases[name];
  var variable = props[name] || alias && props[alias];

  if (typeof variable === 'object') {
    throw new Error("getProperty does not support nested objects.");
  }

  if (isThemeAccessor(variable)) {
    if (!hasTheme(props)) {
      throw new Error("getProperty tried to access props.theme and got undefined. Try adding a ThemeProvider.");
    }

    return variable(props);
  }

  return variable;
};

var toPx = function toPx(value) {
  return typeof value === 'undefined' ? undefined : typeof value === 'string' ? value : "".concat(value, "px");
};

var base = function base(css) {
  return function (props) {
    var properties = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(css).reduce(function (obj, key) {
      var property = getProperty(_objectSpread({}, props, {}, css), key);
      return _objectSpread({}, obj, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({}, key, property));
    }, {});

    return interpolate(properties);
  };
};
var variant = function variant(name, css) {
  return function (props) {
    if (props.variant === name) {
      return base(css)(props);
    }

    return [];
  };
};
var is = function is(name, css) {
  return function (props) {
    if (props[name]) {
      return base(css)(props);
    }

    return [];
  };
};
var globalsNumberType = Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["number"], // This looks weird but it's the only way to make TS happy with inferred propTypes
Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOf"])(['-moz-initial', 'inherit', 'initial', 'revert', 'unset'])]);
var paddingPropTypes = {
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
var padding = function padding(props) {
  var padding = toPx(getProperty(props, 'padding'));
  var paddingLeft = toPx(getProperty(props, 'paddingLeft'));
  var paddingRight = toPx(getProperty(props, 'paddingRight'));
  var paddingTop = toPx(getProperty(props, 'paddingTop'));
  var paddingBottom = toPx(getProperty(props, 'paddingBottom'));
  return interpolate({
    padding: padding,
    paddingLeft: paddingLeft,
    paddingRight: paddingRight,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom
  });
};
var marginPropTypes = {
  margin: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  m: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  marginLeft: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  ml: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  marginRight: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  mr: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  marginTop: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  mt: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  marginBottom: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  mb: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]])
};
var margin = function margin(props) {
  var margin = toPx(getProperty(props, 'margin'));
  var marginLeft = toPx(getProperty(props, 'marginLeft'));
  var marginRight = toPx(getProperty(props, 'marginRight'));
  var marginTop = toPx(getProperty(props, 'marginTop'));
  var marginBottom = toPx(getProperty(props, 'marginBottom'));
  return interpolate({
    margin: margin,
    marginLeft: marginLeft,
    marginRight: marginRight,
    marginTop: marginTop,
    marginBottom: marginBottom
  });
};
var spacingPropTypes = _objectSpread({}, marginPropTypes, {}, paddingPropTypes);
var spacing = combine(margin, padding);
var opacityPropTypes = {
  opacity: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  o: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]])
};
var opacity = function opacity(props) {
  var opacity = getProperty(props, 'opacity');
  return interpolate({
    opacity: opacity
  });
};
var displayPropTypes = {
  display: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  d: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"]
};
var display = function display(props) {
  var display = getProperty(props, 'display');
  return interpolate({
    display: display
  });
};
var sizePropTypes = {
  width: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["number"], prop_types__WEBPACK_IMPORTED_MODULE_7__["string"]]),
  w: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["number"], prop_types__WEBPACK_IMPORTED_MODULE_7__["string"]]),
  height: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["number"], prop_types__WEBPACK_IMPORTED_MODULE_7__["string"]]),
  h: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["number"], prop_types__WEBPACK_IMPORTED_MODULE_7__["string"]])
};
var size = function size(props) {
  var width = toPx(getProperty(props, 'width'));
  var height = toPx(getProperty(props, 'height'));
  return interpolate({
    width: width,
    height: height
  });
};
var flexDirectionType = Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOf"])(['-moz-initial', 'inherit', 'initial', 'revert', 'unset', 'column', 'column-reverse', 'row', 'row-reverse']);
var flexWrapType = Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOf"])(['wrap', '-moz-initial', 'inherit', 'initial', 'revert', 'unset', 'nowrap', 'wrap-reverse']);
var flexPropTypes = {
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
var flex = function flex(props) {
  var flex = getProperty(props, 'flex');
  var order = getProperty(props, 'order');
  var flexDirection = getProperty(props, 'flexDirection');
  var alignItems = getProperty(props, 'alignItems');
  var justifyContent = getProperty(props, 'justifyContent');
  var flexWrap = getProperty(props, 'flexWrap');
  var flexGrow = getProperty(props, 'flexGrow');
  var flexShrink = getProperty(props, 'flexShrink');
  var flexBasis = getProperty(props, 'flexBasis');
  var alignContent = getProperty(props, 'alignContent');
  var flexFlow = getProperty(props, 'flexFlow');
  return interpolate({
    flex: flex,
    order: order,
    flexDirection: flexDirection,
    alignItems: alignItems,
    justifyContent: justifyContent,
    flexWrap: flexWrap,
    flexGrow: flexGrow,
    flexShrink: flexShrink,
    flexBasis: flexBasis,
    alignContent: alignContent,
    flexFlow: flexFlow
  });
};
var gridPropTypes = {
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
var grid = function grid(props) {
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
var fontWeightType = Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["number"], Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOf"])(['-moz-initial', 'inherit', 'initial', 'revert', 'unset', 'normal', 'bold', 'bolder', 'lighter'])]);
var textAlignType = Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOf"])(['-moz-initial', 'inherit', 'initial', 'revert', 'unset', 'center', 'end', 'justify', 'left', 'match-parent', 'right', 'start']);
var typographyPropTypes = {
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  fontSize: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  fontWeight: fontWeightType,
  lineHeight: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  letterSpacing: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]),
  textAlign: textAlignType,
  fontStyle: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"]
};
var typography = function typography(props) {
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
var colorPropTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  c: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  bg: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"]
};
var color = function color(props) {
  return interpolate({
    color: getProperty(props, 'color'),
    backgroundColor: getProperty(props, 'backgroundColor')
  });
};

/***/ })

})
//# sourceMappingURL=index.js.66a98b592773aa8d6426.hot-update.js.map