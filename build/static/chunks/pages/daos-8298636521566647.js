(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8806],{

/***/ 9628:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/daos",
      function () {
        return __webpack_require__(9326);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 7769:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(467);



var GalleryRowHeader = function(param) {
    var title = param.title, detail = param.detail;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-between pb-2 ".concat(!detail && "border-b border-darkcharcoal"),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        className: "text-lg font-bold",
                        children: title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        className: "text-sm text-gray-950",
                        children: detail
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        className: "btn btn-circle btn-sm",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Icons__WEBPACK_IMPORTED_MODULE_2__/* .CaretLeft */ .W, {})
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        className: "rotate-180 btn btn-circle btn-sm btn-secondary transfrom",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Icons__WEBPACK_IMPORTED_MODULE_2__/* .CaretLeft */ .W, {})
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ __webpack_exports__["Z"] = (GalleryRowHeader);


/***/ }),

/***/ 9326:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_daos; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/Layout/index.tsx + 8 modules
var Layout = __webpack_require__(5090);
// EXTERNAL MODULE: ./src/components/Gallery/GalleryRowHeader.tsx
var GalleryRowHeader = __webpack_require__(7769);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 30 modules
var Icons = __webpack_require__(467);
;// CONCATENATED MODULE: ./src/components/Gallery/GalleryRowHeader1.tsx



var GalleryRowHeader1 = function(param) {
    var title = param.title, detail = param.detail;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex justify-between pb-2 ".concat(!detail && "border-b border-darkcharcoal"),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-lg font-bold",
                        children: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-sm text-gray-950",
                        children: detail
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        className: "btn btn-circle btn-sm",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* CaretLeft */.W, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        className: "rotate-180 btn btn-circle btn-sm btn-secondary transfrom",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* CaretLeft */.W, {})
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ var Gallery_GalleryRowHeader1 = (GalleryRowHeader1);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/Cards/Dao.tsx




var Dao = function(param) {
    var title = param.title, imageURL = param.imageURL, pageURL = param.pageURL;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col items-center justify-center gap-6 p-8 transition-all ease-in border cursor-pointer b bg-brandblack rounded-3xl hover:bg-base-100 border-brandblack",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(next_link["default"], {
                href: pageURL,
                passHref: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                            src: imageURL,
                            width: 77,
                            height: 77,
                            alt: title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "text-lg font-bold text-center",
                            children: title
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "text-lg font-bold text-center",
                children: title
            })
        ]
    }));
};
/* harmony default export */ var Cards_Dao = (Dao);

// EXTERNAL MODULE: ./src/data/daos.ts
var daos = __webpack_require__(170);
;// CONCATENATED MODULE: ./src/modules/DAOS/Yours.tsx






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
var Yours = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col mb-10 -mt-4 gap-7",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(GalleryRowHeader/* default */.Z, {
                title: "Your DAOs",
                detail: "In a goldberg Polyhedron there are 12 pentagons, those will be the community leaders, so choose carefully! They can be single members, or other DAOs"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "grid grid-cols-5 gap-3",
                children: daos/* YOUR_DAO.map */.Gz.map(function(dao, index) {
                    /*#__PURE__*/ return (0,jsx_runtime.jsx)(Cards_Dao, _objectSpread({}, dao), index);
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Gallery_GalleryRowHeader1, {
                title: "Your Unions",
                detail: "In a goldberg Polyhedron there are 12 pentagons, those will be the community leaders, so choose carefully! They can be single members, or other DAOs"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "grid grid-cols-5 gap-3",
                children: daos/* YOUR_UNIONS.map */.mA.map(function(dao, index) {
                    /*#__PURE__*/ return (0,jsx_runtime.jsx)(Cards_Dao, _objectSpread({}, dao), index);
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-lg font-bold",
                        children: "Discover New DAOs"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex gap-4",
                        children: [
                            " ",
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative w-full max-w-md text-gray-600 focus-within:text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "absolute inset-y-0 flex items-center pl-2 left-2 ",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                            type: "submit",
                                            className: "p-1 focus:outline-none focus:shadow-outline",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                width: 16,
                                                height: 15,
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                    d: "m15.148 13.852-2.745-2.745A6.75 6.75 0 1 0 7.25 13.5c1.66 0 3.179-.603 4.355-1.598l2.745 2.746a.565.565 0 0 0 .795 0 .56.56 0 0 0 .002-.796ZM1.625 6.75A5.632 5.632 0 0 1 7.25 1.125a5.632 5.632 0 0 1 5.625 5.625 5.632 5.632 0 0 1-5.625 5.625A5.632 5.632 0 0 1 1.625 6.75Z",
                                                    fill: "#8899A6"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                        type: "search",
                                        className: "w-[348px] py-3 pl-12 text-[15px] text-white rounded-full bg-primary focus:outline-none focus:bg-black focus:text-white placeholder:text-gray-950\xcd",
                                        placeholder: "Search",
                                        autoComplete: "off"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                className: "rounded-full btn btn-secondary",
                                children: "Create DAO"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "grid grid-cols-5 gap-3",
                children: daos/* DISCOVER.map */.Xp.map(function(dao, index) {
                    /*#__PURE__*/ return (0,jsx_runtime.jsx)(Cards_Dao, _objectSpread({}, dao), index);
                })
            })
        ]
    }));
};
/* harmony default export */ var DAOS_Yours = (Yours);

;// CONCATENATED MODULE: ./src/pages/daos/index.tsx




var Index = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Layout/* default */.Z, {
        sol: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DAOS_Yours, {})
    }));
};
/* harmony default export */ var pages_daos = (Index);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6419,5090,170,9774,2888,179], function() { return __webpack_exec__(9628); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);