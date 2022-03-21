"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9384],{

/***/ 6296:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mI": function() { return /* binding */ BaseWalletAdapter; },
/* harmony export */   "QZ": function() { return /* binding */ WalletAdapterNetwork; }
/* harmony export */ });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6729);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);

function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}

var BaseWalletAdapter = /*#__PURE__*/ function(EventEmitter1) {
    "use strict";
    _inherits(BaseWalletAdapter, EventEmitter1);
    var _super = _createSuper(BaseWalletAdapter);
    function BaseWalletAdapter() {
        _classCallCheck(this, BaseWalletAdapter);
        return _super.apply(this, arguments);
    }
    return BaseWalletAdapter;
}((eventemitter3__WEBPACK_IMPORTED_MODULE_0___default()));
var WalletAdapterNetwork;
(function(WalletAdapterNetwork1) {
    WalletAdapterNetwork1["Mainnet"] = "mainnet-beta";
    WalletAdapterNetwork1["Testnet"] = "testnet";
    WalletAdapterNetwork1["Devnet"] = "devnet";
})(WalletAdapterNetwork || (WalletAdapterNetwork = {})); //# sourceMappingURL=adapter.js.map


/***/ }),

/***/ 4004:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lj": function() { return /* binding */ WalletError; },
/* harmony export */   "l5": function() { return /* binding */ WalletNotFoundError; },
/* harmony export */   "Yf": function() { return /* binding */ WalletNotInstalledError; },
/* harmony export */   "OZ": function() { return /* binding */ WalletNotReadyError; },
/* harmony export */   "$w": function() { return /* binding */ WalletConnectionError; },
/* harmony export */   "at": function() { return /* binding */ WalletDisconnectedError; },
/* harmony export */   "UG": function() { return /* binding */ WalletDisconnectionError; },
/* harmony export */   "Nx": function() { return /* binding */ WalletPublicKeyError; },
/* harmony export */   "oS": function() { return /* binding */ WalletNotConnectedError; },
/* harmony export */   "IW": function() { return /* binding */ WalletSendTransactionError; },
/* harmony export */   "fk": function() { return /* binding */ WalletSignMessageError; },
/* harmony export */   "PY": function() { return /* binding */ WalletSignTransactionError; },
/* harmony export */   "NK": function() { return /* binding */ WalletTimeoutError; },
/* harmony export */   "d2": function() { return /* binding */ WalletWindowBlockedError; },
/* harmony export */   "hd": function() { return /* binding */ WalletWindowClosedError; }
/* harmony export */ });
/* unused harmony exports WalletAccountError, WalletKeypairError */
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var WalletError = /*#__PURE__*/ function(Error) {
    "use strict";
    _inherits(WalletError, Error);
    var _super = _createSuper(WalletError);
    function WalletError(message, error) {
        _classCallCheck(this, WalletError);
        var _this;
        _this = _super.call(this, message);
        _this.error = error;
        return _this;
    }
    return WalletError;
}(_wrapNativeSuper(Error));
var WalletNotFoundError = /*#__PURE__*/ function(WalletError) {
    "use strict";
    _inherits(WalletNotFoundError, WalletError);
    var _super = _createSuper(WalletNotFoundError);
    function WalletNotFoundError() {
        _classCallCheck(this, WalletNotFoundError);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.name = 'WalletNotFoundError';
        return _this;
    }
    return WalletNotFoundError;
}(WalletError);
var WalletNotInstalledError = /*#__PURE__*/ function(WalletError) {
    "use strict";
    _inherits(WalletNotInstalledError, WalletError);
    var _super = _createSuper(WalletNotInstalledError);
    function WalletNotInstalledError() {
        _classCallCheck(this, WalletNotInstalledError);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.name = 'WalletNotInstalledError';
        return _this;
    }
    return WalletNotInstalledError;
}(WalletError);
var WalletNotReadyError = /*#__PURE__*/ function(WalletError) {
    "use strict";
    _inherits(WalletNotReadyError, WalletError);
    var _super = _createSuper(WalletNotReadyError);
    function WalletNotReadyError() {
        _classCallCheck(this, WalletNotReadyError);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.name = 'WalletNotReadyError';
        return _this;
    }
    return WalletNotReadyError;
}(WalletError);
var WalletConnectionError = /*#__PURE__*/ function(WalletError) {
    "use strict";
    _inherits(WalletConnectionError, WalletError);
    var _super = _createSuper(WalletConnectionError);
    function WalletConnectionError() {
        _classCallCheck(this, WalletConnectionError);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.name = 'WalletConnectionError';
        return _this;
    }
    return WalletConnectionError;
}(WalletError);
var WalletDisconnectedError = /*#__PURE__*/ function(WalletError) {
    "use strict";
    _inherits(WalletDisconnectedError, WalletError);
    var _super = _createSuper(WalletDisconnectedError);
    function WalletDisconnectedError() {
        _classCallCheck(this, WalletDisconnectedError);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.name = 'WalletDisconnectedError';
        return _this;
    }
    return WalletDisconnectedError;
}(WalletError);
var WalletDisconnectionError = /*#__PURE__*/ function(WalletError) {
    "use strict";
    _inherits(WalletDisconnectionError, WalletError);
    var _super = _createSuper(WalletDisconnectionError);
    function WalletDisconnectionError() {
        _classCallCheck(this, WalletDisconnectionError);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.name = 'WalletDisconnectionError';
        return _this;
    }
    return WalletDisconnectionError;
}(WalletError);
var WalletAccountError = /*#__PURE__*/ (/* unused pure expression or super */ null && (function(WalletError) {
    "use strict";
    _inherits(WalletAccountError, WalletError);
    var _super = _createSuper(WalletAccountError);
    function WalletAccountError() {
        _classCallCheck(this, WalletAccountError);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.name = 'WalletAccountError';
        return _this;
    }
    return WalletAccountError;
}(WalletError)));
var WalletPublicKeyError = /*#__PURE__*/ function(WalletError) {
    "use strict";
    _inherits(WalletPublicKeyError, WalletError);
    var _super = _createSuper(WalletPublicKeyError);
    function WalletPublicKeyError() {
        _classCallCheck(this, WalletPublicKeyError);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.name = 'WalletPublicKeyError';
        return _this;
    }
    return WalletPublicKeyError;
}(WalletError);
var WalletKeypairError = /*#__PURE__*/ (/* unused pure expression or super */ null && (function(WalletError) {
    "use strict";
    _inherits(WalletKeypairError, WalletError);
    var _super = _createSuper(WalletKeypairError);
    function WalletKeypairError() {
        _classCallCheck(this, WalletKeypairError);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.name = 'WalletKeypairError';
        return _this;
    }
    return WalletKeypairError;
}(WalletError)));
var WalletNotConnectedError = /*#__PURE__*/ function(WalletError) {
    "use strict";
    _inherits(WalletNotConnectedError, WalletError);
    var _super = _createSuper(WalletNotConnectedError);
    function WalletNotConnectedError() {
        _classCallCheck(this, WalletNotConnectedError);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.name = 'WalletNotConnectedError';
        return _this;
    }
    return WalletNotConnectedError;
}(WalletError);
var WalletSendTransactionError = /*#__PURE__*/ function(WalletError) {
    "use strict";
    _inherits(WalletSendTransactionError, WalletError);
    var _super = _createSuper(WalletSendTransactionError);
    function WalletSendTransactionError() {
        _classCallCheck(this, WalletSendTransactionError);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.name = 'WalletSendTransactionError';
        return _this;
    }
    return WalletSendTransactionError;
}(WalletError);
var WalletSignMessageError = /*#__PURE__*/ function(WalletError) {
    "use strict";
    _inherits(WalletSignMessageError, WalletError);
    var _super = _createSuper(WalletSignMessageError);
    function WalletSignMessageError() {
        _classCallCheck(this, WalletSignMessageError);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.name = 'WalletSignMessageError';
        return _this;
    }
    return WalletSignMessageError;
}(WalletError);
var WalletSignTransactionError = /*#__PURE__*/ function(WalletError) {
    "use strict";
    _inherits(WalletSignTransactionError, WalletError);
    var _super = _createSuper(WalletSignTransactionError);
    function WalletSignTransactionError() {
        _classCallCheck(this, WalletSignTransactionError);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.name = 'WalletSignTransactionError';
        return _this;
    }
    return WalletSignTransactionError;
}(WalletError);
var WalletTimeoutError = /*#__PURE__*/ function(WalletError) {
    "use strict";
    _inherits(WalletTimeoutError, WalletError);
    var _super = _createSuper(WalletTimeoutError);
    function WalletTimeoutError() {
        _classCallCheck(this, WalletTimeoutError);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.name = 'WalletTimeoutError';
        return _this;
    }
    return WalletTimeoutError;
}(WalletError);
var WalletWindowBlockedError = /*#__PURE__*/ function(WalletError) {
    "use strict";
    _inherits(WalletWindowBlockedError, WalletError);
    var _super = _createSuper(WalletWindowBlockedError);
    function WalletWindowBlockedError() {
        _classCallCheck(this, WalletWindowBlockedError);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.name = 'WalletWindowBlockedError';
        return _this;
    }
    return WalletWindowBlockedError;
}(WalletError);
var WalletWindowClosedError = /*#__PURE__*/ function(WalletError) {
    "use strict";
    _inherits(WalletWindowClosedError, WalletError);
    var _super = _createSuper(WalletWindowClosedError);
    function WalletWindowClosedError() {
        _classCallCheck(this, WalletWindowClosedError);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.name = 'WalletWindowClosedError';
        return _this;
    }
    return WalletWindowClosedError;
} //# sourceMappingURL=errors.js.map
(WalletError);


/***/ }),

/***/ 2983:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": function() { return /* binding */ pollUntilReady; }
/* harmony export */ });
/* unused harmony export poll */
/* harmony import */ var C_Users_Administrator_Documents_rep_solarity_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4051);
/* harmony import */ var C_Users_Administrator_Documents_rep_solarity_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Administrator_Documents_rep_solarity_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);

function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    var adopt = function adopt(value) {
        return _instanceof(value, P) ? value : new P(function(resolve) {
            resolve(value);
        });
    };
    return new (P || (P = Promise))(function(resolve, reject) {
        var fulfilled = function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        };
        var step = function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function poll(callback, interval, count) {
    if (count > 0) {
        var _this = this;
        setTimeout(function() {
            return __awaiter(_this, void 0, void 0, C_Users_Administrator_Documents_rep_solarity_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
                var done;
                return C_Users_Administrator_Documents_rep_solarity_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {
                    while(1)switch(_ctx.prev = _ctx.next){
                        case 0:
                            _ctx.next = 2;
                            return callback();
                        case 2:
                            done = _ctx.sent;
                            if (!done) poll(callback, interval, count - 1);
                        case 4:
                        case "end":
                            return _ctx.stop();
                    }
                }, _callee);
            }));
        }, interval);
    }
}
function pollUntilReady(adapter, pollInterval, pollCount) {
    poll(function() {
        var ready = adapter.ready;
        if (ready) {
            if (!adapter.emit('ready')) {
                console.warn("".concat(adapter.constructor.name, " is ready but no listener was registered"));
            }
        }
        return ready;
    }, pollInterval, pollCount);
} //# sourceMappingURL=poll.js.map


/***/ }),

/***/ 394:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": function() { return /* binding */ BaseMessageSignerWalletAdapter; }
/* harmony export */ });
/* unused harmony export BaseSignerWalletAdapter */
/* harmony import */ var C_Users_Administrator_Documents_rep_solarity_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4051);
/* harmony import */ var C_Users_Administrator_Documents_rep_solarity_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Administrator_Documents_rep_solarity_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6296);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4004);



function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    var adopt = function adopt(value) {
        return _instanceof(value, P) ? value : new P(function(resolve) {
            resolve(value);
        });
    };
    return new (P || (P = Promise))(function(resolve, reject) {
        var fulfilled = function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        };
        var step = function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var BaseSignerWalletAdapter = /*#__PURE__*/ function(BaseWalletAdapter1) {
    "use strict";
    _inherits(BaseSignerWalletAdapter, BaseWalletAdapter1);
    var _super = _createSuper(BaseSignerWalletAdapter);
    function BaseSignerWalletAdapter() {
        _classCallCheck(this, BaseSignerWalletAdapter);
        return _super.apply(this, arguments);
    }
    _createClass(BaseSignerWalletAdapter, [
        {
            key: "sendTransaction",
            value: function sendTransaction(transaction, connection) {
                var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return __awaiter(this, void 0, void 0, C_Users_Administrator_Documents_rep_solarity_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
                    var emit, _transaction, signers, sendOptions, rawTransaction;
                    return C_Users_Administrator_Documents_rep_solarity_web_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                emit = true;
                                _ctx.prev = 1;
                                _ctx.prev = 2;
                                ;
                                transaction.feePayer || (transaction.feePayer = this.publicKey || undefined);
                                _ctx.t0 = transaction.recentBlockhash;
                                if (_ctx.t0) {
                                    _ctx.next = 10;
                                    break;
                                }
                                _ctx.next = 9;
                                return connection.getRecentBlockhash('finalized');
                            case 9:
                                transaction.recentBlockhash = _ctx.sent.blockhash;
                            case 10:
                                signers = options.signers, sendOptions = __rest(options, [
                                    "signers"
                                ]);
                                (signers === null || signers === void 0 ? void 0 : signers.length) && (_transaction = transaction).partialSign.apply(_transaction, _toConsumableArray(signers));
                                _ctx.next = 14;
                                return this.signTransaction(transaction);
                            case 14:
                                transaction = _ctx.sent;
                                rawTransaction = transaction.serialize();
                                _ctx.next = 18;
                                return connection.sendRawTransaction(rawTransaction, sendOptions);
                            case 18:
                                return _ctx.abrupt("return", _ctx.sent);
                            case 21:
                                _ctx.prev = 21;
                                _ctx.t1 = _ctx["catch"](2);
                                if (!_instanceof(_ctx.t1, _errors__WEBPACK_IMPORTED_MODULE_1__/* .WalletError */ .lj)) {
                                    _ctx.next = 26;
                                    break;
                                }
                                emit = false;
                                throw _ctx.t1;
                            case 26:
                                throw new _errors__WEBPACK_IMPORTED_MODULE_1__/* .WalletSendTransactionError */ .IW(_ctx.t1 === null || _ctx.t1 === void 0 ? void 0 : _ctx.t1.message, _ctx.t1);
                            case 27:
                                _ctx.next = 33;
                                break;
                            case 29:
                                _ctx.prev = 29;
                                _ctx.t2 = _ctx["catch"](1);
                                if (emit) {
                                    this.emit('error', _ctx.t2);
                                }
                                throw _ctx.t2;
                            case 33:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, this, [
                        [
                            1,
                            29
                        ],
                        [
                            2,
                            21
                        ]
                    ]);
                }));
            }
        }
    ]);
    return BaseSignerWalletAdapter;
}(_adapter__WEBPACK_IMPORTED_MODULE_2__/* .BaseWalletAdapter */ .mI);
var BaseMessageSignerWalletAdapter = /*#__PURE__*/ function(BaseSignerWalletAdapter) {
    "use strict";
    _inherits(BaseMessageSignerWalletAdapter, BaseSignerWalletAdapter);
    var _super = _createSuper(BaseMessageSignerWalletAdapter);
    function BaseMessageSignerWalletAdapter() {
        _classCallCheck(this, BaseMessageSignerWalletAdapter);
        return _super.apply(this, arguments);
    }
    return BaseMessageSignerWalletAdapter;
} //# sourceMappingURL=signer.js.map
(BaseSignerWalletAdapter);


/***/ }),

/***/ 7354:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": function() { return /* binding */ WalletProvider; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js
var runtime = __webpack_require__(4051);
var runtime_default = /*#__PURE__*/__webpack_require__.n(runtime);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/errors.js
var errors = __webpack_require__(4004);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react/lib/errors.js

function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var WalletNotSelectedError = /*#__PURE__*/ function(WalletError1) {
    "use strict";
    _inherits(WalletNotSelectedError, WalletError1);
    var _super = _createSuper(WalletNotSelectedError);
    function WalletNotSelectedError() {
        _classCallCheck(this, WalletNotSelectedError);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.name = 'WalletNotSelectedError';
        return _this;
    }
    return WalletNotSelectedError;
} //# sourceMappingURL=errors.js.map
(errors/* WalletError */.lj);

;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useLocalStorage.js

function useLocalStorage(key, defaultState) {
    var ref = (0,react.useState)(function() {
        if (typeof localStorage === 'undefined') return defaultState;
        var value = localStorage.getItem(key);
        try {
            return value ? JSON.parse(value) : defaultState;
        } catch (error) {
            console.warn(error);
            return defaultState;
        }
    }), value1 = ref[0], setValue = ref[1];
    var setLocalStorage = (0,react.useCallback)(function(newValue) {
        if (newValue === value1) return;
        setValue(newValue);
        if (newValue === null) {
            localStorage.removeItem(key);
        } else {
            try {
                localStorage.setItem(key, JSON.stringify(newValue));
            } catch (error) {
                console.error(error);
            }
        }
    }, [
        value1,
        setValue,
        key
    ]);
    return [
        value1,
        setLocalStorage
    ];
} //# sourceMappingURL=useLocalStorage.js.map

// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useWallet.js
var useWallet = __webpack_require__(7257);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react/lib/WalletProvider.js






function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    var adopt = function adopt(value) {
        return _instanceof(value, P) ? value : new P(function(resolve) {
            resolve(value);
        });
    };
    return new (P || (P = Promise))(function(resolve, reject) {
        var fulfilled = function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        };
        var step = function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var initialState = {
    wallet: null,
    adapter: null,
    ready: false,
    publicKey: null,
    connected: false
};
var WalletProvider = function(param) {
    var children = param.children, wallets = param.wallets, _autoConnect = param.autoConnect, autoConnect = _autoConnect === void 0 ? false : _autoConnect, tmp = param.onError, _onError = tmp === void 0 ? function(error) {
        return console.error(error);
    } : tmp, _localStorageKey = param.localStorageKey, localStorageKey = _localStorageKey === void 0 ? 'walletName' : _localStorageKey;
    var ref = _slicedToArray(useLocalStorage(localStorageKey, null), 2), name = ref[0], setName = ref[1];
    var ref1 = (0,react.useState)(initialState), ref2 = ref1[0], wallet1 = ref2.wallet, adapter1 = ref2.adapter, ready1 = ref2.ready, publicKey1 = ref2.publicKey, connected1 = ref2.connected, setState = ref1[1];
    var ref3 = (0,react.useState)(false), connecting = ref3[0], setConnecting = ref3[1];
    var ref4 = (0,react.useState)(false), disconnecting = ref4[0], setDisconnecting = ref4[1];
    var isConnecting = (0,react.useRef)(false);
    var isDisconnecting = (0,react.useRef)(false);
    var isUnloading = (0,react.useRef)(false);
    // Map of wallet names to wallets
    var walletsByName1 = (0,react.useMemo)(function() {
        return wallets.reduce(function(walletsByName, wallet) {
            walletsByName[wallet.name] = wallet;
            return walletsByName;
        }, {});
    }, [
        wallets
    ]);
    // When the selected wallet changes, initialize the state
    (0,react.useEffect)(function() {
        var wallet = name && walletsByName1[name] || null;
        var adapter = wallet && wallet.adapter();
        if (adapter) {
            var ready = adapter.ready, publicKey = adapter.publicKey, connected = adapter.connected;
            setState({
                wallet: wallet,
                adapter: adapter,
                connected: connected,
                publicKey: publicKey,
                ready: ready
            });
        } else {
            setState(initialState);
        }
    }, [
        name,
        walletsByName1,
        setState
    ]);
    // If autoConnect is enabled, try to connect when the adapter changes and is ready
    (0,react.useEffect)(function() {
        if (isConnecting.current || connecting || connected1 || !autoConnect || !adapter1 || !ready1) return;
        (function() {
            return __awaiter(this, void 0, void 0, runtime_default().mark(function _callee() {
                return runtime_default().wrap(function _callee$(_ctx) {
                    while(1)switch(_ctx.prev = _ctx.next){
                        case 0:
                            isConnecting.current = true;
                            setConnecting(true);
                            _ctx.prev = 2;
                            _ctx.next = 5;
                            return adapter1.connect();
                        case 5:
                            _ctx.next = 10;
                            break;
                        case 7:
                            _ctx.prev = 7;
                            _ctx.t0 = _ctx["catch"](2);
                            // Clear the selected wallet
                            setName(null);
                        case 10:
                            _ctx.prev = 10;
                            setConnecting(false);
                            isConnecting.current = false;
                            return _ctx.finish(10);
                        case 14:
                        case "end":
                            return _ctx.stop();
                    }
                }, _callee, null, [
                    [
                        2,
                        7,
                        10,
                        14
                    ]
                ]);
            }));
        })();
    }, [
        isConnecting,
        connecting,
        connected1,
        autoConnect,
        adapter1,
        ready1,
        setConnecting,
        setName
    ]);
    // If the window is closing or reloading, ignore disconnect and error events from the adapter
    (0,react.useEffect)(function() {
        var listener = function listener() {
            isUnloading.current = true;
        };
        window.addEventListener('beforeunload', listener);
        return function() {
            return window.removeEventListener('beforeunload', listener);
        };
    }, [
        isUnloading
    ]);
    // Select a wallet by name
    var select = (0,react.useCallback)(function(newName) {
        return __awaiter(void 0, void 0, void 0, runtime_default().mark(function _callee() {
            return runtime_default().wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        if (!(name === newName)) {
                            _ctx.next = 2;
                            break;
                        }
                        return _ctx.abrupt("return");
                    case 2:
                        if (!adapter1) {
                            _ctx.next = 5;
                            break;
                        }
                        _ctx.next = 5;
                        return adapter1.disconnect();
                    case 5:
                        setName(newName);
                    case 6:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee);
        }));
    }, [
        name,
        adapter1,
        setName
    ]);
    // Handle the adapter's ready event
    var onReady = (0,react.useCallback)(function() {
        return setState(function(state) {
            return Object.assign(Object.assign({}, state), {
                ready: true
            });
        });
    }, [
        setState
    ]);
    // Handle the adapter's connect event
    var onConnect = (0,react.useCallback)(function() {
        if (!adapter1) return;
        var connected = adapter1.connected, publicKey = adapter1.publicKey, ready = adapter1.ready;
        setState(function(state) {
            return Object.assign(Object.assign({}, state), {
                connected: connected,
                publicKey: publicKey,
                ready: ready
            });
        });
    }, [
        adapter1,
        setState
    ]);
    // Handle the adapter's disconnect event
    var onDisconnect = (0,react.useCallback)(function() {
        // Clear the selected wallet unless the window is unloading
        if (!isUnloading.current) setName(null);
    }, [
        isUnloading,
        setName
    ]);
    // Handle the adapter's error event, and local errors
    var onError = (0,react.useCallback)(function(error) {
        // Call the provided error handler unless the window is unloading
        if (!isUnloading.current) _onError(error);
        return error;
    }, [
        isUnloading,
        _onError
    ]);
    // Connect the adapter to the wallet
    var connect = (0,react.useCallback)(function() {
        return __awaiter(void 0, void 0, void 0, runtime_default().mark(function _callee() {
            return runtime_default().wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        if (!(isConnecting.current || connecting || disconnecting || connected1)) {
                            _ctx.next = 2;
                            break;
                        }
                        return _ctx.abrupt("return");
                    case 2:
                        if (!(!wallet1 || !adapter1)) {
                            _ctx.next = 4;
                            break;
                        }
                        throw onError(new WalletNotSelectedError());
                    case 4:
                        if (ready1) {
                            _ctx.next = 8;
                            break;
                        }
                        // Clear the selected wallet
                        setName(null);
                        if (true) {
                            window.open(wallet1.url, '_blank');
                        }
                        throw onError(new errors/* WalletNotReadyError */.OZ());
                    case 8:
                        isConnecting.current = true;
                        setConnecting(true);
                        _ctx.prev = 10;
                        _ctx.next = 13;
                        return adapter1.connect();
                    case 13:
                        _ctx.next = 19;
                        break;
                    case 15:
                        _ctx.prev = 15;
                        _ctx.t0 = _ctx["catch"](10);
                        // Clear the selected wallet
                        setName(null);
                        // Rethrow the error, and onError will also be called
                        throw _ctx.t0;
                    case 19:
                        _ctx.prev = 19;
                        setConnecting(false);
                        isConnecting.current = false;
                        return _ctx.finish(19);
                    case 23:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee, null, [
                [
                    10,
                    15,
                    19,
                    23
                ]
            ]);
        }));
    }, [
        isConnecting,
        connecting,
        disconnecting,
        connected1,
        wallet1,
        adapter1,
        onError,
        ready1,
        setConnecting,
        setName
    ]);
    // Disconnect the adapter from the wallet
    var disconnect = (0,react.useCallback)(function() {
        return __awaiter(void 0, void 0, void 0, runtime_default().mark(function _callee() {
            return runtime_default().wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        if (!(isDisconnecting.current || disconnecting)) {
                            _ctx.next = 2;
                            break;
                        }
                        return _ctx.abrupt("return");
                    case 2:
                        if (adapter1) {
                            _ctx.next = 4;
                            break;
                        }
                        return _ctx.abrupt("return", setName(null));
                    case 4:
                        isDisconnecting.current = true;
                        setDisconnecting(true);
                        _ctx.prev = 6;
                        _ctx.next = 9;
                        return adapter1.disconnect();
                    case 9:
                        _ctx.next = 15;
                        break;
                    case 11:
                        _ctx.prev = 11;
                        _ctx.t0 = _ctx["catch"](6);
                        // Clear the selected wallet
                        setName(null);
                        // Rethrow the error, and onError will also be called
                        throw _ctx.t0;
                    case 15:
                        _ctx.prev = 15;
                        setDisconnecting(false);
                        isDisconnecting.current = false;
                        return _ctx.finish(15);
                    case 19:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee, null, [
                [
                    6,
                    11,
                    15,
                    19
                ]
            ]);
        }));
    }, [
        isDisconnecting,
        disconnecting,
        adapter1,
        setDisconnecting,
        setName
    ]);
    // Send a transaction using the provided connection
    var sendTransaction = (0,react.useCallback)(function(transaction, connection, options) {
        return __awaiter(void 0, void 0, void 0, runtime_default().mark(function _callee() {
            return runtime_default().wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        if (adapter1) {
                            _ctx.next = 2;
                            break;
                        }
                        throw onError(new WalletNotSelectedError());
                    case 2:
                        if (connected1) {
                            _ctx.next = 4;
                            break;
                        }
                        throw onError(new errors/* WalletNotConnectedError */.oS());
                    case 4:
                        _ctx.next = 6;
                        return adapter1.sendTransaction(transaction, connection, options);
                    case 6:
                        return _ctx.abrupt("return", _ctx.sent);
                    case 7:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee);
        }));
    }, [
        adapter1,
        onError,
        connected1
    ]);
    // Sign a transaction if the wallet supports it
    var signTransaction = (0,react.useMemo)(function() {
        return adapter1 && 'signTransaction' in adapter1 ? function(transaction) {
            return __awaiter(void 0, void 0, void 0, runtime_default().mark(function _callee() {
                return runtime_default().wrap(function _callee$(_ctx) {
                    while(1)switch(_ctx.prev = _ctx.next){
                        case 0:
                            if (connected1) {
                                _ctx.next = 2;
                                break;
                            }
                            throw onError(new errors/* WalletNotConnectedError */.oS());
                        case 2:
                            _ctx.next = 4;
                            return adapter1.signTransaction(transaction);
                        case 4:
                            return _ctx.abrupt("return", _ctx.sent);
                        case 5:
                        case "end":
                            return _ctx.stop();
                    }
                }, _callee);
            }));
        } : undefined;
    }, [
        adapter1,
        onError,
        connected1
    ]);
    // Sign multiple transactions if the wallet supports it
    var signAllTransactions = (0,react.useMemo)(function() {
        return adapter1 && 'signAllTransactions' in adapter1 ? function(transactions) {
            return __awaiter(void 0, void 0, void 0, runtime_default().mark(function _callee() {
                return runtime_default().wrap(function _callee$(_ctx) {
                    while(1)switch(_ctx.prev = _ctx.next){
                        case 0:
                            if (connected1) {
                                _ctx.next = 2;
                                break;
                            }
                            throw onError(new errors/* WalletNotConnectedError */.oS());
                        case 2:
                            _ctx.next = 4;
                            return adapter1.signAllTransactions(transactions);
                        case 4:
                            return _ctx.abrupt("return", _ctx.sent);
                        case 5:
                        case "end":
                            return _ctx.stop();
                    }
                }, _callee);
            }));
        } : undefined;
    }, [
        adapter1,
        onError,
        connected1
    ]);
    // Sign an arbitrary message if the wallet supports it
    var signMessage = (0,react.useMemo)(function() {
        return adapter1 && 'signMessage' in adapter1 ? function(message) {
            return __awaiter(void 0, void 0, void 0, runtime_default().mark(function _callee() {
                return runtime_default().wrap(function _callee$(_ctx) {
                    while(1)switch(_ctx.prev = _ctx.next){
                        case 0:
                            if (connected1) {
                                _ctx.next = 2;
                                break;
                            }
                            throw onError(new errors/* WalletNotConnectedError */.oS());
                        case 2:
                            _ctx.next = 4;
                            return adapter1.signMessage(message);
                        case 4:
                            return _ctx.abrupt("return", _ctx.sent);
                        case 5:
                        case "end":
                            return _ctx.stop();
                    }
                }, _callee);
            }));
        } : undefined;
    }, [
        adapter1,
        onError,
        connected1
    ]);
    // Setup and teardown event listeners when the adapter changes
    (0,react.useEffect)(function() {
        if (adapter1) {
            adapter1.on('ready', onReady);
            adapter1.on('connect', onConnect);
            adapter1.on('disconnect', onDisconnect);
            adapter1.on('error', onError);
            return function() {
                adapter1.off('ready', onReady);
                adapter1.off('connect', onConnect);
                adapter1.off('disconnect', onDisconnect);
                adapter1.off('error', onError);
            };
        }
    }, [
        adapter1,
        onReady,
        onConnect,
        onDisconnect,
        onError
    ]);
    return(/*#__PURE__*/ react.createElement(useWallet/* WalletContext.Provider */.z.Provider, {
        value: {
            wallets: wallets,
            autoConnect: autoConnect,
            wallet: wallet1,
            adapter: adapter1,
            publicKey: publicKey1,
            ready: ready1,
            connected: connected1,
            connecting: connecting,
            disconnecting: disconnecting,
            select: select,
            connect: connect,
            disconnect: disconnect,
            sendTransaction: sendTransaction,
            signTransaction: signTransaction,
            signAllTransactions: signAllTransactions,
            signMessage: signMessage
        }
    }, children));
}; //# sourceMappingURL=WalletProvider.js.map


/***/ }),

/***/ 6023:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "y": function() { return /* binding */ getPhantomWallet; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js
var runtime = __webpack_require__(4051);
var runtime_default = /*#__PURE__*/__webpack_require__.n(runtime);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/errors.js
var errors = __webpack_require__(4004);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/poll.js
var poll = __webpack_require__(2983);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/signer.js
var signer = __webpack_require__(394);
// EXTERNAL MODULE: ./node_modules/@solana/web3.js/lib/index.browser.esm.js + 1 modules
var index_browser_esm = __webpack_require__(8155);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-phantom/lib/adapter.js



function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    var adopt = function adopt(value) {
        return _instanceof(value, P) ? value : new P(function(resolve) {
            resolve(value);
        });
    };
    return new (P || (P = Promise))(function(resolve, reject) {
        var fulfilled = function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        };
        var step = function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var PhantomWalletAdapter = /*#__PURE__*/ function(BaseMessageSignerWalletAdapter1) {
    "use strict";
    _inherits(PhantomWalletAdapter, BaseMessageSignerWalletAdapter1);
    var _super = _createSuper(PhantomWalletAdapter);
    function PhantomWalletAdapter() {
        var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        _classCallCheck(this, PhantomWalletAdapter);
        var _this;
        _this = _super.call(this);
        _this._disconnected = function() {
            var wallet = _this._wallet;
            if (wallet) {
                wallet.off('disconnect', _this._disconnected);
                _this._wallet = null;
                _this._publicKey = null;
                _this.emit('error', new errors/* WalletDisconnectedError */.at());
                _this.emit('disconnect');
            }
        };
        _this._connecting = false;
        _this._wallet = null;
        _this._publicKey = null;
        if (!_this.ready) (0,poll/* pollUntilReady */._)(_assertThisInitialized(_this), config.pollInterval || 1000, config.pollCount || 3);
        return _this;
    }
    _createClass(PhantomWalletAdapter, [
        {
            key: "publicKey",
            get: function get() {
                return this._publicKey;
            }
        },
        {
            key: "ready",
            get: function get() {
                var _a;
                return  true && !!((_a = window.solana) === null || _a === void 0 ? void 0 : _a.isPhantom);
            }
        },
        {
            key: "connecting",
            get: function get() {
                return this._connecting;
            }
        },
        {
            key: "connected",
            get: function get() {
                var _a;
                return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.isConnected);
            }
        },
        {
            key: "connect",
            value: function connect1() {
                return __awaiter(this, void 0, void 0, runtime_default().mark(function _callee() {
                    var wallet, handleDisconnect, publicKey;
                    return runtime_default().wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.prev = 0;
                                if (!(this.connected || this.connecting)) {
                                    _ctx.next = 3;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 3:
                                this._connecting = true;
                                wallet =  true && window.solana;
                                if (wallet) {
                                    _ctx.next = 7;
                                    break;
                                }
                                throw new errors/* WalletNotFoundError */.l5();
                            case 7:
                                if (wallet.isPhantom) {
                                    _ctx.next = 9;
                                    break;
                                }
                                throw new errors/* WalletNotInstalledError */.Yf();
                            case 9:
                                if (wallet.isConnected) {
                                    _ctx.next = 24;
                                    break;
                                }
                                handleDisconnect = wallet._handleDisconnect;
                                _ctx.prev = 11;
                                _ctx.next = 14;
                                return new Promise(function(resolve, reject) {
                                    var connect = function() {
                                        wallet.off('connect', connect);
                                        resolve();
                                    };
                                    wallet._handleDisconnect = function() {
                                        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                                            args[_key] = arguments[_key];
                                        }
                                        wallet.off('connect', connect);
                                        reject(new errors/* WalletWindowClosedError */.hd());
                                        return handleDisconnect.apply(wallet, args);
                                    };
                                    wallet.on('connect', connect);
                                    wallet.connect().catch(function(reason) {
                                        wallet.off('connect', connect);
                                        reject(reason);
                                    });
                                });
                            case 14:
                                _ctx.next = 21;
                                break;
                            case 16:
                                _ctx.prev = 16;
                                _ctx.t0 = _ctx["catch"](11);
                                if (!_instanceof(_ctx.t0, errors/* WalletError */.lj)) {
                                    _ctx.next = 20;
                                    break;
                                }
                                throw _ctx.t0;
                            case 20:
                                throw new errors/* WalletConnectionError */.$w(_ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message, _ctx.t0);
                            case 21:
                                _ctx.prev = 21;
                                wallet._handleDisconnect = handleDisconnect;
                                return _ctx.finish(21);
                            case 24:
                                if (wallet.publicKey) {
                                    _ctx.next = 26;
                                    break;
                                }
                                throw new errors/* WalletConnectionError */.$w();
                            case 26:
                                ;
                                _ctx.prev = 27;
                                publicKey = new index_browser_esm.PublicKey(wallet.publicKey.toBytes());
                                _ctx.next = 34;
                                break;
                            case 31:
                                _ctx.prev = 31;
                                _ctx.t1 = _ctx["catch"](27);
                                throw new errors/* WalletPublicKeyError */.Nx(_ctx.t1 === null || _ctx.t1 === void 0 ? void 0 : _ctx.t1.message, _ctx.t1);
                            case 34:
                                wallet.on('disconnect', this._disconnected);
                                this._wallet = wallet;
                                this._publicKey = publicKey;
                                this.emit('connect');
                                _ctx.next = 44;
                                break;
                            case 40:
                                _ctx.prev = 40;
                                _ctx.t2 = _ctx["catch"](0);
                                this.emit('error', _ctx.t2);
                                throw _ctx.t2;
                            case 44:
                                _ctx.prev = 44;
                                this._connecting = false;
                                return _ctx.finish(44);
                            case 47:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, this, [
                        [
                            0,
                            40,
                            44,
                            47
                        ],
                        [
                            11,
                            16,
                            21,
                            24
                        ],
                        [
                            27,
                            31
                        ]
                    ]);
                }));
            }
        },
        {
            key: "disconnect",
            value: function disconnect() {
                return __awaiter(this, void 0, void 0, runtime_default().mark(function _callee() {
                    var wallet;
                    return runtime_default().wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                wallet = this._wallet;
                                if (!wallet) {
                                    _ctx.next = 13;
                                    break;
                                }
                                wallet.off('disconnect', this._disconnected);
                                this._wallet = null;
                                this._publicKey = null;
                                _ctx.prev = 5;
                                _ctx.next = 8;
                                return wallet.disconnect();
                            case 8:
                                _ctx.next = 13;
                                break;
                            case 10:
                                _ctx.prev = 10;
                                _ctx.t0 = _ctx["catch"](5);
                                this.emit('error', new errors/* WalletDisconnectionError */.UG(_ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message, _ctx.t0));
                            case 13:
                                this.emit('disconnect');
                            case 14:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, this, [
                        [
                            5,
                            10
                        ]
                    ]);
                }));
            }
        },
        {
            key: "signTransaction",
            value: function signTransaction(transaction) {
                return __awaiter(this, void 0, void 0, runtime_default().mark(function _callee() {
                    var wallet;
                    return runtime_default().wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.prev = 0;
                                wallet = this._wallet;
                                if (wallet) {
                                    _ctx.next = 4;
                                    break;
                                }
                                throw new errors/* WalletNotConnectedError */.oS();
                            case 4:
                                _ctx.prev = 4;
                                _ctx.next = 7;
                                return wallet.signTransaction(transaction);
                            case 7:
                                _ctx.t0 = _ctx.sent;
                                if (_ctx.t0) {
                                    _ctx.next = 10;
                                    break;
                                }
                                _ctx.t0 = transaction;
                            case 10:
                                return _ctx.abrupt("return", _ctx.t0);
                            case 13:
                                _ctx.prev = 13;
                                _ctx.t1 = _ctx["catch"](4);
                                throw new errors/* WalletSignTransactionError */.PY(_ctx.t1 === null || _ctx.t1 === void 0 ? void 0 : _ctx.t1.message, _ctx.t1);
                            case 16:
                                _ctx.next = 22;
                                break;
                            case 18:
                                _ctx.prev = 18;
                                _ctx.t2 = _ctx["catch"](0);
                                this.emit('error', _ctx.t2);
                                throw _ctx.t2;
                            case 22:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, this, [
                        [
                            0,
                            18
                        ],
                        [
                            4,
                            13
                        ]
                    ]);
                }));
            }
        },
        {
            key: "signAllTransactions",
            value: function signAllTransactions(transactions) {
                return __awaiter(this, void 0, void 0, runtime_default().mark(function _callee() {
                    var wallet;
                    return runtime_default().wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.prev = 0;
                                wallet = this._wallet;
                                if (wallet) {
                                    _ctx.next = 4;
                                    break;
                                }
                                throw new errors/* WalletNotConnectedError */.oS();
                            case 4:
                                _ctx.prev = 4;
                                _ctx.next = 7;
                                return wallet.signAllTransactions(transactions);
                            case 7:
                                _ctx.t0 = _ctx.sent;
                                if (_ctx.t0) {
                                    _ctx.next = 10;
                                    break;
                                }
                                _ctx.t0 = transactions;
                            case 10:
                                return _ctx.abrupt("return", _ctx.t0);
                            case 13:
                                _ctx.prev = 13;
                                _ctx.t1 = _ctx["catch"](4);
                                throw new errors/* WalletSignTransactionError */.PY(_ctx.t1 === null || _ctx.t1 === void 0 ? void 0 : _ctx.t1.message, _ctx.t1);
                            case 16:
                                _ctx.next = 22;
                                break;
                            case 18:
                                _ctx.prev = 18;
                                _ctx.t2 = _ctx["catch"](0);
                                this.emit('error', _ctx.t2);
                                throw _ctx.t2;
                            case 22:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, this, [
                        [
                            0,
                            18
                        ],
                        [
                            4,
                            13
                        ]
                    ]);
                }));
            }
        },
        {
            key: "signMessage",
            value: function signMessage(message) {
                return __awaiter(this, void 0, void 0, runtime_default().mark(function _callee() {
                    var wallet, signature;
                    return runtime_default().wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.prev = 0;
                                wallet = this._wallet;
                                if (wallet) {
                                    _ctx.next = 4;
                                    break;
                                }
                                throw new errors/* WalletNotConnectedError */.oS();
                            case 4:
                                _ctx.prev = 4;
                                _ctx.next = 7;
                                return wallet.signMessage(message);
                            case 7:
                                signature = _ctx.sent.signature;
                                return _ctx.abrupt("return", Uint8Array.from(signature));
                            case 11:
                                _ctx.prev = 11;
                                _ctx.t0 = _ctx["catch"](4);
                                throw new errors/* WalletSignTransactionError */.PY(_ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message, _ctx.t0);
                            case 14:
                                _ctx.next = 20;
                                break;
                            case 16:
                                _ctx.prev = 16;
                                _ctx.t1 = _ctx["catch"](0);
                                this.emit('error', _ctx.t1);
                                throw _ctx.t1;
                            case 20:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, this, [
                        [
                            0,
                            16
                        ],
                        [
                            4,
                            11
                        ]
                    ]);
                }));
            }
        }
    ]);
    return PhantomWalletAdapter;
} //# sourceMappingURL=adapter.js.map
(signer/* BaseMessageSignerWalletAdapter */.e);

// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/types.js
var types = __webpack_require__(9501);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/phantom.js


var getPhantomWallet = function() {
    var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return {
        name: types/* WalletName.Phantom */.w.Phantom,
        url: 'https://phantom.app',
        icon: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjM0IiB3aWR0aD0iMzQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iLjUiIHgyPSIuNSIgeTE9IjAiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1MzRiYjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1NTFiZjkiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9Ii41IiB4Mj0iLjUiIHkxPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii44MiIvPjwvbGluZWFyR3JhZGllbnQ+PGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgZmlsbD0idXJsKCNhKSIgcj0iMTciLz48cGF0aCBkPSJtMjkuMTcwMiAxNy4yMDcxaC0yLjk5NjljMC02LjEwNzQtNC45NjgzLTExLjA1ODE3LTExLjA5NzUtMTEuMDU4MTctNi4wNTMyNSAwLTEwLjk3NDYzIDQuODI5NTctMTEuMDk1MDggMTAuODMyMzctLjEyNDYxIDYuMjA1IDUuNzE3NTIgMTEuNTkzMiAxMS45NDUzOCAxMS41OTMyaC43ODM0YzUuNDkwNiAwIDEyLjg0OTctNC4yODI5IDEzLjk5OTUtOS41MDEzLjIxMjMtLjk2MTktLjU1MDItMS44NjYxLTEuNTM4OC0xLjg2NjF6bS0xOC41NDc5LjI3MjFjMCAuODE2Ny0uNjcwMzggMS40ODQ3LTEuNDkwMDEgMS40ODQ3LS44MTk2NCAwLTEuNDg5OTgtLjY2ODMtMS40ODk5OC0xLjQ4NDd2LTIuNDAxOWMwLS44MTY3LjY3MDM0LTEuNDg0NyAxLjQ4OTk4LTEuNDg0Ny44MTk2MyAwIDEuNDkwMDEuNjY4IDEuNDkwMDEgMS40ODQ3em01LjE3MzggMGMwIC44MTY3LS42NzAzIDEuNDg0Ny0xLjQ4OTkgMS40ODQ3LS44MTk3IDAtMS40OS0uNjY4My0xLjQ5LTEuNDg0N3YtMi40MDE5YzAtLjgxNjcuNjcwNi0xLjQ4NDcgMS40OS0xLjQ4NDcuODE5NiAwIDEuNDg5OS42NjggMS40ODk5IDEuNDg0N3oiIGZpbGw9InVybCgjYikiLz48L3N2Zz4K',
        adapter: function() {
            return new PhantomWalletAdapter(config);
        }
    };
}; //# sourceMappingURL=phantom.js.map


/***/ }),

/***/ 6269:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": function() { return /* binding */ getSolflareWallet; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js
var runtime = __webpack_require__(4051);
var runtime_default = /*#__PURE__*/__webpack_require__.n(runtime);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/errors.js
var errors = __webpack_require__(4004);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/poll.js
var poll = __webpack_require__(2983);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/signer.js
var signer = __webpack_require__(394);
// EXTERNAL MODULE: ./node_modules/@solana/web3.js/lib/index.browser.esm.js + 1 modules
var index_browser_esm = __webpack_require__(8155);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-solflare/lib/adapter.js



function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    var adopt = function adopt(value) {
        return _instanceof(value, P) ? value : new P(function(resolve) {
            resolve(value);
        });
    };
    return new (P || (P = Promise))(function(resolve, reject) {
        var fulfilled = function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        };
        var step = function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var SolflareWalletAdapter = /*#__PURE__*/ function(BaseMessageSignerWalletAdapter1) {
    "use strict";
    _inherits(SolflareWalletAdapter, BaseMessageSignerWalletAdapter1);
    var _super = _createSuper(SolflareWalletAdapter);
    function SolflareWalletAdapter() {
        var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        _classCallCheck(this, SolflareWalletAdapter);
        var _this;
        _this = _super.call(this);
        _this._disconnected = function() {
            var wallet = _this._wallet;
            if (wallet) {
                wallet.off('disconnect', _this._disconnected);
                _this._wallet = null;
                _this._publicKey = null;
                _this.emit('error', new errors/* WalletDisconnectedError */.at());
                _this.emit('disconnect');
            }
        };
        _this._connecting = false;
        _this._wallet = null;
        _this._publicKey = null;
        if (!_this.ready) (0,poll/* pollUntilReady */._)(_assertThisInitialized(_this), config.pollInterval || 1000, config.pollCount || 3);
        return _this;
    }
    _createClass(SolflareWalletAdapter, [
        {
            key: "publicKey",
            get: function get() {
                return this._publicKey;
            }
        },
        {
            key: "ready",
            get: function get() {
                var _a;
                return  true && !!((_a = window.solflare) === null || _a === void 0 ? void 0 : _a.isSolflare);
            }
        },
        {
            key: "connecting",
            get: function get() {
                return this._connecting;
            }
        },
        {
            key: "connected",
            get: function get() {
                var _a;
                return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.isConnected);
            }
        },
        {
            key: "connect",
            value: function connect() {
                return __awaiter(this, void 0, void 0, runtime_default().mark(function _callee() {
                    var wallet, publicKey;
                    return runtime_default().wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.prev = 0;
                                if (!(this.connected || this.connecting)) {
                                    _ctx.next = 3;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 3:
                                this._connecting = true;
                                wallet =  true && window.solflare;
                                if (wallet) {
                                    _ctx.next = 7;
                                    break;
                                }
                                throw new errors/* WalletNotFoundError */.l5();
                            case 7:
                                if (wallet.isSolflare) {
                                    _ctx.next = 9;
                                    break;
                                }
                                throw new errors/* WalletNotInstalledError */.Yf();
                            case 9:
                                if (wallet.isConnected) {
                                    _ctx.next = 18;
                                    break;
                                }
                                _ctx.prev = 10;
                                _ctx.next = 13;
                                return wallet.connect();
                            case 13:
                                _ctx.next = 18;
                                break;
                            case 15:
                                _ctx.prev = 15;
                                _ctx.t0 = _ctx["catch"](10);
                                throw new errors/* WalletConnectionError */.$w(_ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message, _ctx.t0);
                            case 18:
                                if (wallet.publicKey) {
                                    _ctx.next = 20;
                                    break;
                                }
                                throw new errors/* WalletConnectionError */.$w();
                            case 20:
                                ;
                                _ctx.prev = 21;
                                publicKey = new index_browser_esm.PublicKey(wallet.publicKey.toBytes());
                                _ctx.next = 28;
                                break;
                            case 25:
                                _ctx.prev = 25;
                                _ctx.t1 = _ctx["catch"](21);
                                throw new errors/* WalletPublicKeyError */.Nx(_ctx.t1 === null || _ctx.t1 === void 0 ? void 0 : _ctx.t1.message, _ctx.t1);
                            case 28:
                                wallet.on('disconnect', this._disconnected);
                                this._wallet = wallet;
                                this._publicKey = publicKey;
                                this.emit('connect');
                                _ctx.next = 38;
                                break;
                            case 34:
                                _ctx.prev = 34;
                                _ctx.t2 = _ctx["catch"](0);
                                this.emit('error', _ctx.t2);
                                throw _ctx.t2;
                            case 38:
                                _ctx.prev = 38;
                                this._connecting = false;
                                return _ctx.finish(38);
                            case 41:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, this, [
                        [
                            0,
                            34,
                            38,
                            41
                        ],
                        [
                            10,
                            15
                        ],
                        [
                            21,
                            25
                        ]
                    ]);
                }));
            }
        },
        {
            key: "disconnect",
            value: function disconnect() {
                return __awaiter(this, void 0, void 0, runtime_default().mark(function _callee() {
                    var wallet;
                    return runtime_default().wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                wallet = this._wallet;
                                if (!wallet) {
                                    _ctx.next = 13;
                                    break;
                                }
                                wallet.off('disconnect', this._disconnected);
                                this._wallet = null;
                                this._publicKey = null;
                                _ctx.prev = 5;
                                _ctx.next = 8;
                                return wallet.disconnect();
                            case 8:
                                _ctx.next = 13;
                                break;
                            case 10:
                                _ctx.prev = 10;
                                _ctx.t0 = _ctx["catch"](5);
                                this.emit('error', new errors/* WalletDisconnectionError */.UG(_ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message, _ctx.t0));
                            case 13:
                                this.emit('disconnect');
                            case 14:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, this, [
                        [
                            5,
                            10
                        ]
                    ]);
                }));
            }
        },
        {
            key: "signTransaction",
            value: function signTransaction(transaction) {
                return __awaiter(this, void 0, void 0, runtime_default().mark(function _callee() {
                    var wallet;
                    return runtime_default().wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.prev = 0;
                                wallet = this._wallet;
                                if (wallet) {
                                    _ctx.next = 4;
                                    break;
                                }
                                throw new errors/* WalletNotConnectedError */.oS();
                            case 4:
                                _ctx.prev = 4;
                                _ctx.next = 7;
                                return wallet.signTransaction(transaction);
                            case 7:
                                _ctx.t0 = _ctx.sent;
                                if (_ctx.t0) {
                                    _ctx.next = 10;
                                    break;
                                }
                                _ctx.t0 = transaction;
                            case 10:
                                return _ctx.abrupt("return", _ctx.t0);
                            case 13:
                                _ctx.prev = 13;
                                _ctx.t1 = _ctx["catch"](4);
                                throw new errors/* WalletSignTransactionError */.PY(_ctx.t1 === null || _ctx.t1 === void 0 ? void 0 : _ctx.t1.message, _ctx.t1);
                            case 16:
                                _ctx.next = 22;
                                break;
                            case 18:
                                _ctx.prev = 18;
                                _ctx.t2 = _ctx["catch"](0);
                                this.emit('error', _ctx.t2);
                                throw _ctx.t2;
                            case 22:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, this, [
                        [
                            0,
                            18
                        ],
                        [
                            4,
                            13
                        ]
                    ]);
                }));
            }
        },
        {
            key: "signAllTransactions",
            value: function signAllTransactions(transactions) {
                return __awaiter(this, void 0, void 0, runtime_default().mark(function _callee() {
                    var wallet;
                    return runtime_default().wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.prev = 0;
                                wallet = this._wallet;
                                if (wallet) {
                                    _ctx.next = 4;
                                    break;
                                }
                                throw new errors/* WalletNotConnectedError */.oS();
                            case 4:
                                _ctx.prev = 4;
                                _ctx.next = 7;
                                return wallet.signAllTransactions(transactions);
                            case 7:
                                _ctx.t0 = _ctx.sent;
                                if (_ctx.t0) {
                                    _ctx.next = 10;
                                    break;
                                }
                                _ctx.t0 = transactions;
                            case 10:
                                return _ctx.abrupt("return", _ctx.t0);
                            case 13:
                                _ctx.prev = 13;
                                _ctx.t1 = _ctx["catch"](4);
                                throw new errors/* WalletSignTransactionError */.PY(_ctx.t1 === null || _ctx.t1 === void 0 ? void 0 : _ctx.t1.message, _ctx.t1);
                            case 16:
                                _ctx.next = 22;
                                break;
                            case 18:
                                _ctx.prev = 18;
                                _ctx.t2 = _ctx["catch"](0);
                                this.emit('error', _ctx.t2);
                                throw _ctx.t2;
                            case 22:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, this, [
                        [
                            0,
                            18
                        ],
                        [
                            4,
                            13
                        ]
                    ]);
                }));
            }
        },
        {
            key: "signMessage",
            value: function signMessage(message) {
                return __awaiter(this, void 0, void 0, runtime_default().mark(function _callee() {
                    var wallet, signature;
                    return runtime_default().wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.prev = 0;
                                wallet = this._wallet;
                                if (wallet) {
                                    _ctx.next = 4;
                                    break;
                                }
                                throw new errors/* WalletNotConnectedError */.oS();
                            case 4:
                                _ctx.prev = 4;
                                _ctx.next = 7;
                                return wallet.signMessage(message, 'utf8');
                            case 7:
                                signature = _ctx.sent.signature;
                                return _ctx.abrupt("return", Uint8Array.from(signature));
                            case 11:
                                _ctx.prev = 11;
                                _ctx.t0 = _ctx["catch"](4);
                                throw new errors/* WalletSignTransactionError */.PY(_ctx.t0 === null || _ctx.t0 === void 0 ? void 0 : _ctx.t0.message, _ctx.t0);
                            case 14:
                                _ctx.next = 20;
                                break;
                            case 16:
                                _ctx.prev = 16;
                                _ctx.t1 = _ctx["catch"](0);
                                this.emit('error', _ctx.t1);
                                throw _ctx.t1;
                            case 20:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, this, [
                        [
                            0,
                            16
                        ],
                        [
                            4,
                            11
                        ]
                    ]);
                }));
            }
        }
    ]);
    return SolflareWalletAdapter;
} //# sourceMappingURL=adapter.js.map
(signer/* BaseMessageSignerWalletAdapter */.e);

// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/types.js
var types = __webpack_require__(9501);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/solflare.js


var getSolflareWallet = function() {
    var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return {
        name: types/* WalletName.Solflare */.w.Solflare,
        url: 'https://solflare.com',
        icon: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMxMGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjNmMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2LjQ3ODM1IiB4Mj0iMzQuOTEwNyIgeGxpbms6aHJlZj0iI2EiIHkxPSI3LjkyIiB5Mj0iMzMuNjU5MyIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjAiIGN5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuOTkyMTg4MzIgMTIuMDYzODc5NjMgLTEyLjE4MTEzNjU1IDUuMDQwNzEwNzQgMjIuNTIwMiAyMC42MTgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTI1LjE3MDggNDcuOTEwNGMuNTI1IDAgLjk1MDcuNDIxLjk1MDcuOTQwM3MtLjQyNTcuOTQwMi0uOTUwNy45NDAyLS45NTA3LS40MjA5LS45NTA3LS45NDAyLjQyNTctLjk0MDMuOTUwNy0uOTQwM3ptLTEuMDMyOC00NC45MTU2NWMuNDY0Ni4wMzgzNi44Mzk4LjM5MDQuOTAyNy44NDY4MWwxLjEzMDcgOC4yMTU3NGMuMzc5OCAyLjcxNDMgMy42NTM1IDMuODkwNCA1LjY3NDMgMi4wNDU5bDExLjMyOTEtMTAuMzExNThjLjI3MzMtLjI0ODczLjY5ODktLjIzMTQ5Ljk1MDcuMDM4NTEuMjMwOS4yNDc3Mi4yMzc5LjYyNjk3LjAxNjEuODgyNzdsLTkuODc5MSAxMS4zOTU4Yy0xLjgxODcgMi4wOTQyLS40NzY4IDUuMzY0MyAyLjI5NTYgNS41OTc4bDguNzE2OC44NDAzYy40MzQxLjA0MTguNzUxNy40MjM0LjcwOTMuODUyNC0uMDM0OS4zNTM3LS4zMDc0LjYzOTUtLjY2MjguNjk0OWwtOS4xNTk0IDEuNDMwMmMtMi42NTkzLjM2MjUtMy44NjM2IDMuNTExNy0yLjEzMzkgNS41NTc2bDMuMjIgMy43OTYxYy4yNTk0LjMwNTguMjE4OC43NjE1LS4wOTA4IDEuMDE3OC0uMjYyMi4yMTcyLS42NDE5LjIyNTYtLjkxMzguMDIwM2wtMy45Njk0LTIuOTk3OGMtMi4xNDIxLTEuNjEwOS01LjIyOTctLjI0MTctNS40NTYxIDIuNDI0M2wtLjg3NDcgMTAuMzk3NmMtLjAzNjIuNDI5NS0uNDE3OC43NDg3LS44NTI1LjcxMy0uMzY5LS4wMzAzLS42NjcxLS4zMDk3LS43MTcxLS42NzIxbC0xLjM4NzEtMTAuMDQzN2MtLjM3MTctMi43MTQ0LTMuNjQ1NC0zLjg5MDQtNS42NzQzLTIuMDQ1OWwtMTIuMDUxOTUgMTAuOTc0Yy0uMjQ5NDcuMjI3MS0uNjM4MDkuMjExNC0uODY4LS4wMzUtLjIxMDk0LS4yMjYyLS4yMTczNS0uNTcyNC0uMDE0OTMtLjgwNmwxMC41MTgxOC0xMi4xMzg1YzEuODE4Ny0yLjA5NDIuNDg0OS01LjM2NDQtMi4yODc2LTUuNTk3OGwtOC43MTg3Mi0uODQwNWMtLjQzNDEzLS4wNDE4LS43NTE3Mi0uNDIzNS0uNzA5MzYtLjg1MjQuMDM0OTMtLjM1MzcuMzA3MzktLjYzOTQuNjYyNy0uNjk1bDkuMTUzMzgtMS40Mjk5YzIuNjU5NC0uMzYyNSAzLjg3MTgtMy41MTE3IDIuMTQyMS01LjU1NzZsLTIuMTkyLTIuNTg0MWMtLjMyMTctLjM3OTItLjI3MTMtLjk0NDMuMTEyNi0xLjI2MjEuMzI1My0uMjY5NC43OTYzLS4yNzk3IDEuMTMzNC0uMDI0OWwyLjY5MTggMi4wMzQ3YzIuMTQyMSAxLjYxMDkgNS4yMjk3LjI0MTcgNS40NTYxLTIuNDI0M2wuNzI0MS04LjU1OTk4Yy4wNDU3LS41NDA4LjUyNjUtLjk0MjU3IDEuMDczOS0uODk3Mzd6bS0yMy4xODczMyAyMC40Mzk2NWMuNTI1MDQgMCAuOTUwNjcuNDIxLjk1MDY3Ljk0MDNzLS40MjU2My45NDAzLS45NTA2Ny45NDAzYy0uNTI1MDQxIDAtLjk1MDY3LS40MjEtLjk1MDY3LS45NDAzcy40MjU2MjktLjk0MDMuOTUwNjctLjk0MDN6bTQ3LjY3OTczLS45NTQ3Yy41MjUgMCAuOTUwNy40MjEuOTUwNy45NDAzcy0uNDI1Ny45NDAyLS45NTA3Ljk0MDItLjk1MDctLjQyMDktLjk1MDctLjk0MDIuNDI1Ny0uOTQwMy45NTA3LS45NDAzem0tMjQuNjI5Ni0yMi40Nzk3Yy41MjUgMCAuOTUwNi40MjA5NzMuOTUwNi45NDAyNyAwIC41MTkzLS40MjU2Ljk0MDI3LS45NTA2Ljk0MDI3LS41MjUxIDAtLjk1MDctLjQyMDk3LS45NTA3LS45NDAyNyAwLS41MTkyOTcuNDI1Ni0uOTQwMjcuOTUwNy0uOTQwMjd6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI0LjU3MSAzMi43NzkyYzQuOTU5NiAwIDguOTgwMi0zLjk3NjUgOC45ODAyLTguODgxOSAwLTQuOTA1My00LjAyMDYtOC44ODE5LTguOTgwMi04Ljg4MTlzLTguOTgwMiAzLjk3NjYtOC45ODAyIDguODgxOWMwIDQuOTA1NCA0LjAyMDYgOC44ODE5IDguOTgwMiA4Ljg4MTl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+',
        adapter: function() {
            return new SolflareWalletAdapter(config);
        }
    };
}; //# sourceMappingURL=solflare.js.map


/***/ }),

/***/ 8841:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": function() { return /* binding */ getSolletWallet; }
});

// EXTERNAL MODULE: ./node_modules/eventemitter3/index.js
var eventemitter3 = __webpack_require__(6729);
var eventemitter3_default = /*#__PURE__*/__webpack_require__.n(eventemitter3);
// EXTERNAL MODULE: ./node_modules/@solana/web3.js/lib/index.browser.esm.js + 1 modules
var index_browser_esm = __webpack_require__(8155);
// EXTERNAL MODULE: ./node_modules/bs58/index.js
var bs58 = __webpack_require__(7191);
var bs58_default = /*#__PURE__*/__webpack_require__.n(bs58);
;// CONCATENATED MODULE: ./node_modules/@project-serum/sol-wallet-adapter/dist/esm/index.js
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class Wallet extends (eventemitter3_default()) {
    constructor(provider, _network) {
        super();
        this._network = _network;
        this._publicKey = null;
        this._popup = null;
        this._handlerAdded = false;
        this._nextRequestId = 1;
        this._autoApprove = false;
        this._responsePromises = new Map();
        this.handleMessage = (e) => {
            var _a;
            if ((this._injectedProvider && e.source === window) ||
                (e.origin === ((_a = this._providerUrl) === null || _a === void 0 ? void 0 : _a.origin) && e.source === this._popup)) {
                if (e.data.method === 'connected') {
                    const newPublicKey = new index_browser_esm.PublicKey(e.data.params.publicKey);
                    if (!this._publicKey || !this._publicKey.equals(newPublicKey)) {
                        if (this._publicKey && !this._publicKey.equals(newPublicKey)) {
                            this.handleDisconnect();
                        }
                        this._publicKey = newPublicKey;
                        this._autoApprove = !!e.data.params.autoApprove;
                        this.emit('connect', this._publicKey);
                    }
                }
                else if (e.data.method === 'disconnected') {
                    this.handleDisconnect();
                }
                else if (e.data.result || e.data.error) {
                    const promises = this._responsePromises.get(e.data.id);
                    if (promises) {
                        const [resolve, reject] = promises;
                        if (e.data.result) {
                            resolve(e.data.result);
                        }
                        else {
                            reject(new Error(e.data.error));
                        }
                    }
                }
            }
        };
        this._beforeUnload = () => {
            void this.disconnect();
        };
        if (isInjectedProvider(provider)) {
            this._injectedProvider = provider;
        }
        else if (isString(provider)) {
            this._providerUrl = new URL(provider);
            this._providerUrl.hash = new URLSearchParams({
                origin: window.location.origin,
                network: this._network,
            }).toString();
        }
        else {
            throw new Error('provider parameter must be an injected provider or a URL string.');
        }
    }
    handleConnect() {
        var _a;
        if (!this._handlerAdded) {
            this._handlerAdded = true;
            window.addEventListener('message', this.handleMessage);
            window.addEventListener('beforeunload', this._beforeUnload);
        }
        if (this._injectedProvider) {
            return new Promise((resolve) => {
                void this.sendRequest('connect', {});
                resolve();
            });
        }
        else {
            window.name = 'parent';
            this._popup = window.open((_a = this._providerUrl) === null || _a === void 0 ? void 0 : _a.toString(), '_blank', 'location,resizable,width=460,height=675');
            return new Promise((resolve) => {
                this.once('connect', resolve);
            });
        }
    }
    handleDisconnect() {
        if (this._handlerAdded) {
            this._handlerAdded = false;
            window.removeEventListener('message', this.handleMessage);
            window.removeEventListener('beforeunload', this._beforeUnload);
        }
        if (this._publicKey) {
            this._publicKey = null;
            this.emit('disconnect');
        }
        this._responsePromises.forEach(([, reject], id) => {
            this._responsePromises.delete(id);
            reject(new Error('Wallet disconnected'));
        });
    }
    sendRequest(method, params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (method !== 'connect' && !this.connected) {
                throw new Error('Wallet not connected');
            }
            const requestId = this._nextRequestId;
            ++this._nextRequestId;
            return new Promise((resolve, reject) => {
                var _a, _b, _c, _d;
                this._responsePromises.set(requestId, [resolve, reject]);
                if (this._injectedProvider) {
                    this._injectedProvider.postMessage({
                        jsonrpc: '2.0',
                        id: requestId,
                        method,
                        params: Object.assign({ network: this._network }, params),
                    });
                }
                else {
                    (_a = this._popup) === null || _a === void 0 ? void 0 : _a.postMessage({
                        jsonrpc: '2.0',
                        id: requestId,
                        method,
                        params,
                    }, (_c = (_b = this._providerUrl) === null || _b === void 0 ? void 0 : _b.origin) !== null && _c !== void 0 ? _c : '');
                    if (!this.autoApprove) {
                        (_d = this._popup) === null || _d === void 0 ? void 0 : _d.focus();
                    }
                }
            });
        });
    }
    get publicKey() {
        return this._publicKey;
    }
    get connected() {
        return this._publicKey !== null;
    }
    get autoApprove() {
        return this._autoApprove;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._popup) {
                this._popup.close();
            }
            yield this.handleConnect();
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._injectedProvider) {
                yield this.sendRequest('disconnect', {});
            }
            if (this._popup) {
                this._popup.close();
            }
            this.handleDisconnect();
        });
    }
    sign(data, display) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(data instanceof Uint8Array)) {
                throw new Error('Data must be an instance of Uint8Array');
            }
            const response = (yield this.sendRequest('sign', {
                data,
                display,
            }));
            const signature = bs58_default().decode(response.signature);
            const publicKey = new index_browser_esm.PublicKey(response.publicKey);
            return {
                signature,
                publicKey,
            };
        });
    }
    signTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = (yield this.sendRequest('signTransaction', {
                message: bs58_default().encode(transaction.serializeMessage()),
            }));
            const signature = bs58_default().decode(response.signature);
            const publicKey = new index_browser_esm.PublicKey(response.publicKey);
            transaction.addSignature(publicKey, signature);
            return transaction;
        });
    }
    signAllTransactions(transactions) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = (yield this.sendRequest('signAllTransactions', {
                messages: transactions.map((tx) => bs58_default().encode(tx.serializeMessage())),
            }));
            const signatures = response.signatures.map((s) => bs58_default().decode(s));
            const publicKey = new index_browser_esm.PublicKey(response.publicKey);
            transactions = transactions.map((tx, idx) => {
                tx.addSignature(publicKey, signatures[idx]);
                return tx;
            });
            return transactions;
        });
    }
    diffieHellman(publicKey) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(publicKey instanceof Uint8Array)) {
                throw new Error('Data must be an instance of Uint8Array');
            }
            const response = (yield this.sendRequest('diffieHellman', {
                publicKey,
            }));
            return response;
        });
    }
}
function isString(a) {
    return typeof a === 'string';
}
function isInjectedProvider(a) {
    return (isObject(a) && 'postMessage' in a && typeof a.postMessage === 'function');
}
function isObject(a) {
    return typeof a === 'object' && a !== null;
}
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/signer.js
var signer = __webpack_require__(394);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/errors.js
var errors = __webpack_require__(4004);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/adapter.js
var adapter = __webpack_require__(6296);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/poll.js
var poll = __webpack_require__(2983);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-sollet/lib/adapter.js
var adapter_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class SolletWalletAdapter extends signer/* BaseMessageSignerWalletAdapter */.e {
    constructor(config = {}) {
        super();
        this._disconnected = () => {
            const wallet = this._wallet;
            if (wallet) {
                wallet.off('disconnect', this._disconnected);
                this._wallet = null;
                this.emit('error', new errors/* WalletDisconnectedError */.at());
                this.emit('disconnect');
            }
        };
        this._provider = config.provider || (typeof window === 'undefined' ? undefined : window.sollet);
        this._network = config.network || adapter/* WalletAdapterNetwork.Mainnet */.QZ.Mainnet;
        this._connecting = false;
        this._wallet = null;
        if (!this.ready)
            (0,poll/* pollUntilReady */._)(this, config.pollInterval || 1000, config.pollCount || 3);
    }
    get publicKey() {
        var _a;
        return ((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.publicKey) || null;
    }
    get ready() {
        var _a;
        return (typeof this._provider === 'string' ||
            (typeof window !== 'undefined' && typeof ((_a = window.sollet) === null || _a === void 0 ? void 0 : _a.postMessage) === 'function'));
    }
    get connecting() {
        return this._connecting;
    }
    get connected() {
        var _a;
        return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.connected);
    }
    connect() {
        return adapter_awaiter(this, void 0, void 0, function* () {
            try {
                if (this.connected || this.connecting)
                    return;
                this._connecting = true;
                const provider = this._provider || (typeof window !== 'undefined' && window.sollet);
                if (!provider)
                    throw new errors/* WalletNotFoundError */.l5();
                let wallet;
                try {
                    wallet = new Wallet(provider, this._network);
                    // HACK: sol-wallet-adapter doesn't reject or emit an event if the popup or extension is closed or blocked
                    const handleDisconnect = wallet.handleDisconnect;
                    let timeout;
                    let interval;
                    try {
                        yield new Promise((resolve, reject) => {
                            const connect = () => {
                                if (timeout)
                                    clearTimeout(timeout);
                                wallet.off('connect', connect);
                                resolve();
                            };
                            wallet.handleDisconnect = (...args) => {
                                wallet.off('connect', connect);
                                reject(new errors/* WalletWindowClosedError */.hd());
                                return handleDisconnect.apply(wallet, args);
                            };
                            wallet.on('connect', connect);
                            wallet.connect().catch((reason) => {
                                wallet.off('connect', connect);
                                reject(reason);
                            });
                            if (typeof provider === 'string') {
                                let count = 0;
                                interval = setInterval(() => {
                                    const popup = wallet._popup;
                                    if (popup) {
                                        if (popup.closed)
                                            reject(new errors/* WalletWindowClosedError */.hd());
                                    }
                                    else {
                                        if (count > 50)
                                            reject(new errors/* WalletWindowBlockedError */.d2());
                                    }
                                    count++;
                                }, 100);
                            }
                            else {
                                // HACK: sol-wallet-adapter doesn't reject or emit an event if the extension is closed or ignored
                                timeout = setTimeout(() => reject(new errors/* WalletTimeoutError */.NK()), 10000);
                            }
                        });
                    }
                    finally {
                        wallet.handleDisconnect = handleDisconnect;
                        if (interval)
                            clearInterval(interval);
                    }
                }
                catch (error) {
                    if (error instanceof errors/* WalletError */.lj)
                        throw error;
                    throw new errors/* WalletConnectionError */.$w(error === null || error === void 0 ? void 0 : error.message, error);
                }
                wallet.on('disconnect', this._disconnected);
                this._wallet = wallet;
                this.emit('connect');
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
            finally {
                this._connecting = false;
            }
        });
    }
    disconnect() {
        return adapter_awaiter(this, void 0, void 0, function* () {
            const wallet = this._wallet;
            if (wallet) {
                wallet.off('disconnect', this._disconnected);
                this._wallet = null;
                // HACK: sol-wallet-adapter doesn't reliably fulfill its promise or emit an event on disconnect
                const handleDisconnect = wallet.handleDisconnect;
                try {
                    yield new Promise((resolve, reject) => {
                        const timeout = setTimeout(() => resolve(), 250);
                        wallet.handleDisconnect = (...args) => {
                            clearTimeout(timeout);
                            resolve();
                            // HACK: sol-wallet-adapter rejects with an uncaught promise error
                            wallet._responsePromises = new Map();
                            return handleDisconnect.apply(wallet, args);
                        };
                        wallet.disconnect().then(() => {
                            clearTimeout(timeout);
                            resolve();
                        }, (error) => {
                            clearTimeout(timeout);
                            // HACK: sol-wallet-adapter rejects with an error on disconnect
                            if ((error === null || error === void 0 ? void 0 : error.message) === 'Wallet disconnected') {
                                resolve();
                            }
                            else {
                                reject(error);
                            }
                        });
                    });
                }
                catch (error) {
                    this.emit('error', new errors/* WalletDisconnectionError */.UG(error === null || error === void 0 ? void 0 : error.message, error));
                }
                finally {
                    wallet.handleDisconnect = handleDisconnect;
                }
            }
            this.emit('disconnect');
        });
    }
    signTransaction(transaction) {
        return adapter_awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = this._wallet;
                if (!wallet)
                    throw new errors/* WalletNotConnectedError */.oS();
                try {
                    return (yield wallet.signTransaction(transaction)) || transaction;
                }
                catch (error) {
                    throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
                }
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
    signAllTransactions(transactions) {
        return adapter_awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = this._wallet;
                if (!wallet)
                    throw new errors/* WalletNotConnectedError */.oS();
                try {
                    return (yield wallet.signAllTransactions(transactions)) || transactions;
                }
                catch (error) {
                    throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
                }
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
    signMessage(message) {
        return adapter_awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = this._wallet;
                if (!wallet)
                    throw new errors/* WalletNotConnectedError */.oS();
                try {
                    const { signature } = yield wallet.sign(message, 'utf8');
                    return Uint8Array.from(signature);
                }
                catch (error) {
                    throw new errors/* WalletSignMessageError */.fk(error === null || error === void 0 ? void 0 : error.message, error);
                }
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
}
//# sourceMappingURL=adapter.js.map
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/types.js
var types = __webpack_require__(9501);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/sollet.js


var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var getSolletWallet = function() {
    var _a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var provider = _a.provider, config = __rest(_a, [
        "provider"
    ]);
    return {
        name: types/* WalletName.Sollet */.w.Sollet,
        url: 'https://www.sollet.io',
        icon: 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUzMCIgd2lkdGg9IjUzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtLTEtMWg1MzJ2NTMyaC01MzJ6IiBmaWxsPSJub25lIi8+PGcgZmlsbD0iIzAwZmZhMyI+PHBhdGggZD0ibTg4Ljg4OTM1IDM3Mi45ODIwMWMzLjE5My0zLjE5IDcuNTIyLTQuOTgyIDEyLjAzNS00Ljk4Mmg0MTYuNDYxYzcuNTg2IDAgMTEuMzg0IDkuMTc0IDYuMDE3IDE0LjUzNmwtODIuMjkxIDgyLjIyNmMtMy4xOTMgMy4xOTEtNy41MjIgNC45ODMtMTIuMDM2IDQuOTgzaC00MTYuNDYwMWMtNy41ODY2IDAtMTEuMzg0NS05LjE3NC02LjAxNzgtMTQuNTM3bDgyLjI5MTktODIuMjI2eiIvPjxwYXRoIGQ9Im04OC44ODkzNSA2NS45ODI1YzMuMTkzLTMuMTkwNCA3LjUyMi00Ljk4MjUgMTIuMDM1LTQuOTgyNWg0MTYuNDYxYzcuNTg2IDAgMTEuMzg0IDkuMTczOSA2LjAxNyAxNC41MzYzbC04Mi4yOTEgODIuMjI2N2MtMy4xOTMgMy4xOS03LjUyMiA0Ljk4Mi0xMi4wMzYgNC45ODJoLTQxNi40NjAxYy03LjU4NjYgMC0xMS4zODQ1LTkuMTc0LTYuMDE3OC0xNC41MzZsODIuMjkxOS04Mi4yMjY1eiIvPjxwYXRoIGQ9Im00NDEuMTExMzUgMjE5LjEwOTVjLTMuMTkzLTMuMTktNy41MjItNC45ODItMTIuMDM2LTQuOTgyaC00MTYuNDYwMWMtNy41ODY2IDAtMTEuMzg0NSA5LjE3My02LjAxNzggMTQuNTM2bDgyLjI5MTkgODIuMjI2YzMuMTkzIDMuMTkgNy41MjIgNC45ODMgMTIuMDM1IDQuOTgzaDQxNi40NjFjNy41ODYgMCAxMS4zODQtOS4xNzQgNi4wMTctMTQuNTM3eiIvPjwvZz48L3N2Zz4=',
        adapter: function() {
            return new SolletWalletAdapter(Object.assign({
                provider: 'https://www.sollet.io'
            }, config));
        }
    };
}; //# sourceMappingURL=sollet.js.map


/***/ }),

/***/ 9501:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": function() { return /* binding */ WalletName; }
/* harmony export */ });
var WalletName;
(function(WalletName1) {
    WalletName1["BitKeep"] = "BitKeep";
    WalletName1["Bitpie"] = "Bitpie";
    WalletName1["Blocto"] = "Blocto";
    WalletName1["Clover"] = "Clover";
    WalletName1["Coin98"] = "Coin98";
    WalletName1["Coinhub"] = "Coinhub";
    WalletName1["Ledger"] = "Ledger";
    WalletName1["MathWallet"] = "MathWallet";
    WalletName1["Phantom"] = "Phantom";
    WalletName1["SafePal"] = "SafePal";
    WalletName1["Slope"] = "Slope";
    WalletName1["Solflare"] = "Solflare";
    WalletName1["SolflareWeb"] = "Solflare (Web)";
    WalletName1["Sollet"] = "Sollet";
    WalletName1["SolletExtension"] = "Sollet (Extension)";
    WalletName1["Solong"] = "Solong";
    WalletName1["TokenPocket"] = "TokenPocket";
    WalletName1["Torus"] = "Torus";
// WalletConnect = 'WalletConnect', // not published yet
})(WalletName || (WalletName = {})); //# sourceMappingURL=types.js.map


/***/ })

}]);