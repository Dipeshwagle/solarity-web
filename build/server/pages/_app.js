"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 5097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react/lib/ConnectionProvider.js
var ConnectionProvider = __webpack_require__(9704);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./src/redux/slices/chatSlice.ts
var chatSlice = __webpack_require__(6247);
;// CONCATENATED MODULE: ./src/redux/store.ts


function makeStore() {
    return (0,toolkit_.configureStore)({
        reducer: {
            chat: chatSlice/* default */.ZP
        }
    });
}
const store = makeStore();
/* harmony default export */ const redux_store = (store);

;// CONCATENATED MODULE: ./src/pages/_app.tsx




// For redux





// set custom RPC server endpoint for the final website
// const endpoint = "https://explorer-api.devnet.solana.com";
// const endpoint = "http://127.0.0.1:8899";
const endpoint = "https://ssc-dao.genesysgo.net";
const WalletProvider = (0,dynamic["default"])(null, {
    loadableGenerated: {
        modules: [
            "_app.tsx -> " + "../contexts/ClientWalletProvider"
        ]
    },
    ssr: false
});
function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: redux_store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(ConnectionProvider/* ConnectionProvider */.U, {
            endpoint: endpoint,
            children: /*#__PURE__*/ jsx_runtime_.jsx(WalletProvider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 7831:
/***/ ((module) => {

module.exports = require("@solana/web3.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6683,6247], () => (__webpack_exec__(5097)));
module.exports = __webpack_exports__;

})();