(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9058],{

/***/ 5525:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/daos/moneyboys/vault",
      function () {
        return __webpack_require__(1462);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 7844:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DAOS_Base; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/Link/index.tsx
var Link = __webpack_require__(7500);
;// CONCATENATED MODULE: ./src/components/TagsCollection/Link.tsx



var TagsCollection = function(param) {
    var tags = param.tags;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "flex flex-wrap gap-2 ",
        children: tags.map(function(tag, index) {
            /*#__PURE__*/ return (0,jsx_runtime.jsx)(Link/* default */.Z, {
                href: tag.link,
                exact: true,
                className: "text-sm font-normal normal-case rounded-full btn btn-sm h-7",
                defaultClassName: "btn-primary",
                activeClassName: "btn-secondary",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    children: tag.label
                }, index)
            }, index);
        })
    }));
};
/* harmony default export */ var TagsCollection_Link = (TagsCollection);

// EXTERNAL MODULE: ./src/data/daos.ts
var daos = __webpack_require__(170);
;// CONCATENATED MODULE: ./src/modules/DAOS/Base.tsx




var Base = function(param) {
    var children = param.children;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TagsCollection_Link, {
                tags: daos/* TAGS.tags */.DX.tags
            }),
            children
        ]
    }));
};
/* harmony default export */ var DAOS_Base = (Base);


/***/ }),

/***/ 6098:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var components_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2279);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8193);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9583);





var Hero = function() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-10",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Banner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                vrdao: {
                    featured: true,
                    imageUrl: "/images/placeholder/post/post_one.png",
                    price: "5"
                },
                smallImage: "/gid.gif"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                    className: "mr-5 -mt-10 rounded-full btn btn-secondary",
                    children: "Follow"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    className: "text-lg font-bold ",
                    children: "Solana Money Boys"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-center gap-4 mt-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: "gap-2 text-sm normal-case rounded-full btn btn-primary",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                    d: "M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z",
                                    fill: "#6163FF"
                                })
                            }),
                            "22.5K Followers"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        className: "bg-white btn btn-circle",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__/* .AiFillGithub */ .RrF, {
                            size: 22,
                            color: "#000"
                        })
                    }),
                    " ",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        className: "bg-white btn btn-circle",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__/* .AiOutlineTwitter */ .h3E, {
                            size: 22,
                            color: "#55ACEE"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        className: "bg-white btn btn-circle",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__/* .FaDiscord */ .j2d, {
                            size: 22,
                            color: "#7289d9"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "flex justify-center mt-6",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    className: "max-w-[750px] text-sm text-center text-gray-950",
                    children: "4,444 Money Boys Building the metaverse. For the best insights and NFT analytic tools visit our platform."
                })
            })
        ]
    }));
};
/* harmony default export */ __webpack_exports__["Z"] = (Hero);


/***/ }),

/***/ 1462:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ vault; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/Layout/index.tsx + 8 modules
var Layout = __webpack_require__(5090);
// EXTERNAL MODULE: ./src/modules/DAOS/Base.tsx + 1 modules
var Base = __webpack_require__(7844);
// EXTERNAL MODULE: ./src/components/TokenBalances/index.tsx + 2 modules
var TokenBalances = __webpack_require__(333);
// EXTERNAL MODULE: ./src/components/SelectInput/index.tsx
var SelectInput = __webpack_require__(2633);
;// CONCATENATED MODULE: ./src/components/Tables/Transfer.tsx



var Transfer = function(param) {
    var rows = param.rows;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-8 p-8 mb-10 bg-brandblack",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-lg font-bold",
                        children: "Transfer"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectInput/* default */.Z, {
                                title: "Type",
                                className: "rounded-full bg-base-100 btn-primary btn-sm"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectInput/* default */.Z, {
                                title: "Token",
                                className: "rounded-full bg-base-100 btn-primary btn-sm"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                className: "gap-2 normal-case btn btn-primary btn-sm",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                        width: "15",
                                        height: "15",
                                        viewBox: "0 0 15 15",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                d: "M11.6479 3.91481L7.89788 0.164812C7.67813 -0.0549383 7.32188 -0.0549382 7.10288 0.164812L3.35288 3.91481C3.13238 4.13456 3.13238 4.49081 3.35288 4.70981C3.57338 4.92881 3.92813 4.93031 4.14788 4.70981L6.93788 1.91981L6.93788 9.56231C6.93788 9.87281 7.18988 10.1248 7.50038 10.1248C7.81088 10.1248 8.06288 9.87281 8.06288 9.56231L8.06288 1.91981L10.8529 4.70981C10.9624 4.82006 11.1064 4.87481 11.2504 4.87481C11.3944 4.87481 11.5384 4.82081 11.6479 4.70981C11.8676 4.49006 11.8676 4.13456 11.6479 3.91481Z",
                                                fill: "#8899A6"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                d: "M13.281 14.7712H1.719C0.771 14.7712 0 14.0002 0 13.0522V8.81323C0 8.50273 0.252 8.25073 0.5625 8.25073C0.873 8.25073 1.125 8.50273 1.125 8.81323V13.0522C1.125 13.38 1.39125 13.6462 1.719 13.6462H13.281C13.6088 13.6462 13.875 13.38 13.875 13.0522V8.81323C13.875 8.50273 14.127 8.25073 14.4375 8.25073C14.748 8.25073 15 8.50273 15 8.81323V13.0522C15 14.0002 14.229 14.7712 13.281 14.7712Z",
                                                fill: "#8899A6"
                                            })
                                        ]
                                    }),
                                    "Export"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid grid-cols-6 text-xs text-gray-950",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        children: " Date "
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        children: " Source/Recipient "
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "col-span-2 ",
                        children: "Reference"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        children: "Amount"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {})
                ]
            }),
            rows.map(function(row, index) {
                /*#__PURE__*/ return (0,jsx_runtime.jsxs)("div", {
                    className: "grid grid-cols-6 text-sm",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                " ",
                                row.date,
                                " "
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                " ",
                                row.source,
                                " "
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "col-span-2 ",
                            children: row.reference
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: row.type === "plus" ? "text-[#11C278]" : "text-[#E0464D]",
                            children: row.amount
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                width: "20",
                                height: "4",
                                viewBox: "0 0 20 4",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                                        cx: "2",
                                        cy: "2",
                                        r: "2",
                                        fill: "#8899A6"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                                        cx: "10",
                                        cy: "2",
                                        r: "2",
                                        fill: "#8899A6"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                                        cx: "18",
                                        cy: "2",
                                        r: "2",
                                        fill: "#8899A6"
                                    })
                                ]
                            })
                        })
                    ]
                }, index);
            })
        ]
    }));
};
/* harmony default export */ var Tables_Transfer = (Transfer);

// EXTERNAL MODULE: ./src/data/daos.ts
var daos = __webpack_require__(170);
;// CONCATENATED MODULE: ./src/modules/DAOS/Vault.tsx






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
var Home = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Base/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenBalances/* default */.Z, _objectSpread({}, daos/* TOKEN_BALANCES */.rv)),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tables_Transfer, _objectSpread({}, daos/* TRANSFER_TABLE_PROPS */.ZY))
        ]
    }));
};
/* harmony default export */ var Vault = (Home);

// EXTERNAL MODULE: ./src/modules/DAOS/Hero.tsx
var Hero = __webpack_require__(6098);
;// CONCATENATED MODULE: ./src/pages/daos/moneyboys/vault.tsx





var Index = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Layout/* default */.Z, {
        heroContent: /*#__PURE__*/ (0,jsx_runtime.jsx)(Hero/* default */.Z, {}),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Vault, {})
    }));
};
/* harmony default export */ var vault = (Index);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6446,5445,4617,6419,7143,5090,170,735,9774,2888,179], function() { return __webpack_exec__(5525); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);