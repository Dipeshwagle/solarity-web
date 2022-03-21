(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[5396],{

/***/ 5163:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/old/mint",
      function () {
        return __webpack_require__(1685);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 1685:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ mint; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./src/views/index.tsx + 17 modules
var views = __webpack_require__(164);
// EXTERNAL MODULE: ./node_modules/react-alert/dist/esm/react-alert.js + 9 modules
var react_alert = __webpack_require__(7055);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/react-alert-template-basic/dist/esm/react-alert-template-basic.js


var BaseIcon = function BaseIcon(_ref) {
  var color = _ref.color,
      _ref$pushRight = _ref.pushRight,
      pushRight = _ref$pushRight === undefined ? true : _ref$pushRight,
      children = _ref.children;
  return react.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      style: { marginRight: pushRight ? '20px' : '0', minWidth: 24 }
    },
    children
  );
};

var InfoIcon = function InfoIcon() {
  return react.createElement(
    BaseIcon,
    { color: '#2E9AFE' },
    react.createElement('circle', { cx: '12', cy: '12', r: '10' }),
    react.createElement('line', { x1: '12', y1: '16', x2: '12', y2: '12' }),
    react.createElement('line', { x1: '12', y1: '8', x2: '12', y2: '8' })
  );
};

var SuccessIcon = function SuccessIcon() {
  return react.createElement(
    BaseIcon,
    { color: '#31B404' },
    react.createElement('path', { d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14' }),
    react.createElement('polyline', { points: '22 4 12 14.01 9 11.01' })
  );
};

var ErrorIcon = function ErrorIcon() {
  return react.createElement(
    BaseIcon,
    { color: '#FF0040' },
    react.createElement('circle', { cx: '12', cy: '12', r: '10' }),
    react.createElement('line', { x1: '12', y1: '8', x2: '12', y2: '12' }),
    react.createElement('line', { x1: '12', y1: '16', x2: '12', y2: '16' })
  );
};

var CloseIcon = function CloseIcon() {
  return react.createElement(
    BaseIcon,
    { color: '#FFFFFF', pushRight: false },
    react.createElement('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
    react.createElement('line', { x1: '6', y1: '6', x2: '18', y2: '18' })
  );
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var alertStyle = {
  backgroundColor: '#151515',
  color: 'white',
  padding: '10px',
  textTransform: 'uppercase',
  borderRadius: '3px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.03)',
  fontFamily: 'Arial',
  width: '300px',
  boxSizing: 'border-box'
};

var buttonStyle = {
  marginLeft: '20px',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  color: '#FFFFFF'
};

var AlertTemplate = function AlertTemplate(_ref) {
  var message = _ref.message,
      options = _ref.options,
      style = _ref.style,
      close = _ref.close;

  return react.createElement(
    'div',
    { style: _extends({}, alertStyle, style) },
    options.type === 'info' && react.createElement(InfoIcon, null),
    options.type === 'success' && react.createElement(SuccessIcon, null),
    options.type === 'error' && react.createElement(ErrorIcon, null),
    react.createElement(
      'span',
      { style: { flex: 2 } },
      message
    ),
    react.createElement(
      'button',
      { onClick: close, style: buttonStyle },
      react.createElement(CloseIcon, null)
    )
  );
};

/* harmony default export */ var react_alert_template_basic = (AlertTemplate);

;// CONCATENATED MODULE: ./src/pages/old/mint.tsx





function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
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
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
// optional configuration
var options = {
    // you can also just use 'bottom center'
    position: react_alert/* positions.BOTTOM_LEFT */.m7.BOTTOM_LEFT,
    timeout: 5000,
    offset: "10px",
    // you can also just use 'scale'
    transition: react_alert/* transitions.SCALE */.pB.SCALE
};
var Mint = function(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(head["default"], {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                        children: "Mint NFT!"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "description",
                        content: "This site will fly high 🦤"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(react_alert/* Provider */.zt, _objectSpread({
                template: react_alert_template_basic
            }, options, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(views/* CandyMachineMintView */.IG, {})
            }))
        ]
    }));
};
/* harmony default export */ var mint = (Mint);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [3714,4870,2655,7843,3062,164,9774,2888,179], function() { return __webpack_exec__(5163); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);