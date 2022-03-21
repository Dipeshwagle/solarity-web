"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9128],{

/***/ 9128:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientWalletProvider": function() { return /* binding */ ClientWalletProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7354);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6023);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6269);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8841);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7843);





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
__webpack_require__.e(/* import() */ 999).then(__webpack_require__.t.bind(__webpack_require__, 6924, 23));
function ClientWalletProvider(props) {
    var wallets = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {
        return [
            (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__/* .getPhantomWallet */ .y)(),
            (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__/* .getSolflareWallet */ .I)(),
            // getTorusWallet({
            //   options: {
            //     // TODO: Get your own tor.us wallet client Id
            //     clientId:
            //       "BOM5Cl7PXgE9Ylq1Z1tqzhpydY0RVr8k90QQ85N7AKI5QGSrr9iDC-3rvmy0K_hF0JfpLMiXoDhta68JwcxS1LQ",
            //   },
            // }),
            // getLedgerWallet(),
            // getSolongWallet(),
            // getMathWallet(),
            (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__/* .getSolletWallet */ .D)(), 
        ];
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__/* .WalletProvider */ .n, _objectSpread({
        wallets: wallets
    }, props, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__/* .WalletModalProvider */ .sR, _objectSpread({}, props))
    })));
}
/* harmony default export */ __webpack_exports__["default"] = (ClientWalletProvider);


/***/ })

}]);