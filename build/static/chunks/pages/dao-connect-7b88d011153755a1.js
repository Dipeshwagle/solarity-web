(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[6225],{

/***/ 6020:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/dao-connect",
      function () {
        return __webpack_require__(9944);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 6359:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(467);




var GalleryItem = function(param) {
    var title = param.title, collection = param.collection, imageUrl = param.imageUrl, currentBid = param.currentBid, endingIn = param.endingIn, subtitle = param.subtitle, _type = param.type, type = _type === void 0 ? "bid" : _type, applicationNumber = param.applicationNumber;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col group ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col justify-center gap-2 p-2 transition-all ease-in rounded-t-3xl rounded-b-3xl group-hover:rounded-b-none bg-brandblack",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative h-[133px] w-full flex justify-center items-center ",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                src: imageUrl,
                                alt: "nft item",
                                height: 133,
                                layout: "fill",
                                width: 175,
                                className: "rounded-3xl"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                className: "z-10 gap-1 normal-case bg-white rounded-full opacity-0 btn btn-sm btn-accent group-hover:opacity-100 hover:bg-accent text-secondary",
                                children: type === "connect" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 20 20",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                                    d: "M15.4163 16.25H12.083",
                                                    stroke: "#6163FF",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                                    d: "M13.75 17.9167V14.5833",
                                                    stroke: "#6163FF",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    "stroke-Linejoin": "round"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                                    d: "M10.1332 9.05834C10.0498 9.05 9.94984 9.05 9.85817 9.05834C7.87484 8.99167 6.29984 7.36667 6.29984 5.36667C6.2915 3.32501 7.94984 1.66667 9.9915 1.66667C12.0332 1.66667 13.6915 3.32501 13.6915 5.36667C13.6915 7.36667 12.1082 8.99167 10.1332 9.05834Z",
                                                    stroke: "#6163FF",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                                    d: "M9.99121 18.175C8.47454 18.175 6.96621 17.7917 5.81621 17.025C3.79954 15.675 3.79954 13.475 5.81621 12.1333C8.10788 10.6 11.8662 10.6 14.1579 12.1333",
                                                    stroke: "#6163FF",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            ]
                                        }),
                                        "Connect"
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Icons__WEBPACK_IMPORTED_MODULE_3__/* .Bid */ .QE, {}),
                                        " Place a Bid"
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        className: "px-2 text-xs",
                        children: title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center gap-2 px-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: "text-[10px] text-secondary ",
                                children: collection
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "mb-1",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Icons__WEBPACK_IMPORTED_MODULE_3__/* .TickCircle */ .bh, {})
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-between p-2 transition-all ease-in border rounded-b-3xl group-hover:border group-hover:border-brandblack border-base-100 ",
                children: [
                    type === "bid" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: "text-xs text-gray-950",
                                        children: "Current bid"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "h-[16px] w-[16px]",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                    src: "/images/icons/sol.png",
                                                    alt: "sol-icon",
                                                    height: 32,
                                                    width: 32
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "mt-2 text-xs text-white",
                                                children: [
                                                    currentBid,
                                                    " SOL"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: "text-xs text-gray-950",
                                        children: "Ending in"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: "mt-2 text-xs text-white",
                                        children: endingIn
                                    })
                                ]
                            })
                        ]
                    }),
                    type === "connect" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between w-full",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: "text-xs text-gray-950",
                                children: subtitle
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "h-[16px] w-[16px]",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            src: "/images/icons/sol.png",
                                            alt: "sol-icon",
                                            height: 32,
                                            width: 32
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "mt-1 text-xs text-white ",
                                        children: [
                                            currentBid,
                                            " SOL"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    type === "job" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between w-full",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "flex gap-2 text-xs font-semibold",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 16 16",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                                d: "M6.10671 7.24683C6.04004 7.24016 5.96004 7.24016 5.88671 7.24683C4.30004 7.1935 3.04004 5.8935 3.04004 4.2935C3.04004 2.66016 4.36004 1.3335 6.00004 1.3335C7.63337 1.3335 8.96004 2.66016 8.96004 4.2935C8.95337 5.8935 7.69337 7.1935 6.10671 7.24683Z",
                                                stroke: "white",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                                d: "M10.9402 2.6665C12.2335 2.6665 13.2735 3.71317 13.2735 4.99984C13.2735 6.25984 12.2735 7.2865 11.0268 7.33317C10.9735 7.3265 10.9135 7.3265 10.8535 7.33317",
                                                stroke: "white",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                                d: "M2.77348 9.7065C1.16014 10.7865 1.16014 12.5465 2.77348 13.6198C4.60681 14.8465 7.61348 14.8465 9.44681 13.6198C11.0601 12.5398 11.0601 10.7798 9.44681 9.7065C7.62014 8.4865 4.61348 8.4865 2.77348 9.7065Z",
                                                stroke: "white",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                                d: "M12.2266 13.3333C12.7066 13.2333 13.1599 13.0399 13.5332 12.7533C14.5732 11.9733 14.5732 10.6866 13.5332 9.90659C13.1666 9.62659 12.7199 9.43992 12.2466 9.33325",
                                                stroke: "white",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            })
                                        ]
                                    }),
                                    applicationNumber
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "h-[16px] w-[16px]",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            src: "/images/icons/sol.png",
                                            alt: "sol-icon",
                                            height: 32,
                                            width: 32
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "mt-1 text-xs text-white ",
                                        children: [
                                            currentBid,
                                            " SOL"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ __webpack_exports__["Z"] = (GalleryItem);


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

/***/ 6160:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Gallery; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/Gallery/GalleryRowHeader.tsx
var GalleryRowHeader = __webpack_require__(7769);
// EXTERNAL MODULE: ./src/components/Gallery/GalleryItem.tsx
var GalleryItem = __webpack_require__(6359);
;// CONCATENATED MODULE: ./src/components/Gallery/GalleryRow.tsx




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
var GalleryRow = function(param) {
    var title = param.title, items = param.items, detail = param.detail, itemsPerRow = param.itemsPerRow;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(GalleryRowHeader/* default */.Z, {
                title: title,
                detail: detail
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "grid ".concat(itemsPerRow ? "grid-cols-5" : "grid-cols-3", " gap-3 mt-4"),
                children: items.map(function(item, index) {
                    /*#__PURE__*/ return (0,jsx_runtime.jsx)(GalleryItem/* default */.Z, _objectSpread({}, item), index);
                })
            })
        ]
    }));
};
/* harmony default export */ var Gallery_GalleryRow = (GalleryRow);

;// CONCATENATED MODULE: ./src/components/Gallery/index.tsx



function Gallery_defineProperty(obj, key, value) {
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
function Gallery_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            Gallery_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
var Gallery = function(param) {
    var rows = param.rows;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "flex flex-col gap-6 my-9",
        children: rows.map(function(row, index) {
            /*#__PURE__*/ return (0,jsx_runtime.jsx)(Gallery_GalleryRow, Gallery_objectSpread({}, row), index);
        })
    }));
};
/* harmony default export */ var components_Gallery = (Gallery);


/***/ }),

/***/ 9944:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ dao_connect; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/Layout/index.tsx + 8 modules
var Layout = __webpack_require__(5090);
;// CONCATENATED MODULE: ./src/components/SwitchButton/index.tsx


var Index = function(param) {
    var options = param.options, onChange = param.onChange;
    var ref = (0,react.useState)(options[0]), value1 = ref[0], setValue = ref[1];
    var handleChange = function(value) {
        setValue(value);
        onChange(value);
    };
    var selectedClass = "rounded-full btn btn-primary hover:bg-primary";
    var unselectedClass = "px-4 ";
    var commonClass = "text-brand-lg normal-case";
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "flex gap-2 p-1 border-2 rounded-full border-darkcharcoal",
        children: options.map(function(option, index) {
            /*#__PURE__*/ return (0,jsx_runtime.jsx)("button", {
                className: "".concat(value1 === option ? selectedClass : unselectedClass, " ").concat(commonClass),
                onClick: function() {
                    return handleChange(option);
                },
                children: option
            }, index);
        })
    }));
};
/* harmony default export */ var SwitchButton = (Index);

// EXTERNAL MODULE: ./src/components/Gallery/index.tsx + 1 modules
var Gallery = __webpack_require__(6160);
;// CONCATENATED MODULE: ./src/data/dao-connect.ts
var CONNECT_GALLERY = {
    rows: [
        {
            title: "Art Union Members",
            detail: "help the developers all around the world trying to continue the legacy of what the internet really is about: open source decentralization",
            itemsPerRow: 4,
            items: [
                {
                    title: "MoneyBoy0x",
                    collection: "Artist at $MB",
                    imageUrl: "/images/placeholder/marketplace/gallery/moneymarket.jpg",
                    type: "connect",
                    currentBid: 10,
                    subtitle: "UI UX Designer"
                },
                {
                    title: "FOMOBYDICK",
                    collection: "CAO at $MB",
                    imageUrl: "/images/placeholder/avatars/cat.jpg",
                    type: "connect",
                    currentBid: 10,
                    subtitle: "Creative Director"
                },
                {
                    title: "7 X 7 Size #1231",
                    collection: "Avatar for Metaverse",
                    imageUrl: "/images/placeholder/marketplace/gallery/marketdegods.jpg",
                    type: "connect",
                    currentBid: 10,
                    subtitle: "3D Artist"
                },
                {
                    title: "7 X 7 Size #1231",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/marketgods.jpg",
                    type: "connect",
                    currentBid: 10,
                    subtitle: "UI UX Designer"
                },
                {
                    title: "7 X 7 Size #1231",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/avatars/degen1.jpg",
                    type: "connect",
                    currentBid: 10,
                    subtitle: "UI UX Designer"
                }, 
            ]
        },
        {
            title: "Trusted by Your DAOs",
            detail: "help the developers all around the world trying to continue the legacy of what the internet really is about: open source decentralization",
            itemsPerRow: 4,
            items: [
                {
                    title: "7 X 7 Size #1231",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/avatars/cat.jpg",
                    type: "connect",
                    currentBid: 10,
                    subtitle: "Wordpress Developer"
                },
                {
                    title: "7 X 7 Size #1231",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/avatars/solgods2.jpg",
                    type: "connect",
                    currentBid: 10,
                    subtitle: "Wordpress Developer"
                },
                {
                    title: "7 X 7 Size #1231",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/avatars/degods32.jpg",
                    type: "connect",
                    currentBid: 10,
                    subtitle: "Wordpress Developer"
                },
                {
                    title: "7 X 7 Size #1231",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/avatars/money1.jpg",
                    type: "connect",
                    currentBid: 10,
                    subtitle: "Wordpress Developer"
                },
                {
                    title: "7 X 7 Size #1231",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/marketgods.jpg",
                    type: "connect",
                    currentBid: 10,
                    subtitle: "Wordpress Developer"
                }, 
            ]
        },
        {
            title: "Find your Co-Founders",
            detail: "help the developers all around the world trying to continue the legacy of what the internet really is about: open source decentralization",
            itemsPerRow: 4,
            items: [
                {
                    title: "7 X 7 Size #1231",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/avatars/degen.png",
                    type: "connect",
                    currentBid: 10,
                    subtitle: "Wordpress Developer"
                },
                {
                    title: "7 X 7 Size #1231",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/avatars/cat.jpg",
                    type: "connect",
                    currentBid: 10,
                    subtitle: "Wordpress Developer"
                },
                {
                    title: "7 X 7 Size #1231",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/avatars/monke.jpg",
                    type: "connect",
                    currentBid: 10,
                    subtitle: "Wordpress Developer"
                },
                {
                    title: "7 X 7 Size #1231",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/avatars/degods32.jpg",
                    type: "connect",
                    currentBid: 10,
                    subtitle: "Wordpress Developer"
                },
                {
                    title: "7 X 7 Size #1231",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/avatars/monke21.jpg",
                    type: "connect",
                    currentBid: 10,
                    subtitle: "Wordpress Developer"
                }, 
            ]
        }, 
    ]
};
var JOB_GALLERY = {
    rows: [
        {
            title: "Short Term Proposals from your DAOs",
            detail: "help the developers all around the world trying to continue the legacy of what the internet really is about: open source decentralization",
            itemsPerRow: 4,
            items: [
                {
                    title: "Experienced Front-end Dev",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/dao-connect/jobs/frontend.jpg",
                    type: "job",
                    applicationNumber: '20 +',
                    currentBid: 500
                },
                {
                    title: "Blender Artist",
                    collection: "Solarity",
                    imageUrl: "/images/placeholder/dao-connect/jobs/3d.jpg",
                    type: "job",
                    applicationNumber: '20 +',
                    currentBid: 500
                },
                {
                    title: "App Developer",
                    collection: "Monke DAO",
                    imageUrl: "/images/placeholder/dao-connect/jobs/mobile.png",
                    type: "job",
                    applicationNumber: '20 +',
                    currentBid: 500
                },
                {
                    title: "Smart Contracts Dev",
                    collection: "Solarity",
                    imageUrl: "/images/placeholder/dao-connect/jobs/rustdev.png",
                    type: "job",
                    applicationNumber: '20 +',
                    currentBid: 500
                },
                {
                    title: "UI/UX expert",
                    collection: "DeGods",
                    imageUrl: "/images/placeholder/dao-connect/jobs/ui.jpg",
                    type: "job",
                    applicationNumber: '20 +',
                    currentBid: 500
                }, 
            ]
        },
        {
            title: "Since you are in the webXR Dev Union",
            detail: "Since you are an active memberio of the webXR Union, you have priority access and are certified for your work.",
            itemsPerRow: 4,
            items: [
                {
                    title: "Need an app Designer",
                    collection: "Allinweb IT",
                    imageUrl: "/images/placeholder/launchpad/webAR.png",
                    type: "job",
                    applicationNumber: '20 +',
                    currentBid: 500
                },
                {
                    title: "Need an app Designer",
                    collection: "Creative IT",
                    imageUrl: "/images/placeholder/dao-connect/jobs/mozillahubs.png",
                    type: "job",
                    applicationNumber: '20 +',
                    currentBid: 500
                },
                {
                    title: "Need an app Designer",
                    collection: "Allinweb IT",
                    imageUrl: "/images/placeholder/dao-connect/jobs/frontend.jpg",
                    type: "job",
                    applicationNumber: '20 +',
                    currentBid: 500
                },
                {
                    title: "Need an app Designer",
                    collection: "Allinweb IT",
                    imageUrl: "/images/placeholder/dao-connect/jobs/AR expert.jpg",
                    type: "job",
                    applicationNumber: '20 +',
                    currentBid: 500
                },
                {
                    title: "Need an app Designer",
                    collection: "Allinweb IT",
                    imageUrl: "/images/placeholder/dao-connect/jobs/concept.jpg",
                    type: "job",
                    applicationNumber: '20 +',
                    currentBid: 500
                }, 
            ]
        },
        {
            title: "Early Stage DAOs",
            detail: "help the developers all around the world trying to continue the legacy of what the internet really is about: open source decentralization",
            itemsPerRow: 4,
            items: [
                {
                    title: "Need an app Designer",
                    collection: "Allinweb IT",
                    imageUrl: "/images/placeholder/dao-connect/jobs/zio.png",
                    type: "job",
                    applicationNumber: '20 +',
                    currentBid: 500
                },
                {
                    title: "Need an app Designer",
                    collection: "Creative IT",
                    imageUrl: "/images/placeholder/dao-connect/jobs/metahq.png",
                    type: "job",
                    applicationNumber: '20 +',
                    currentBid: 500
                },
                {
                    title: "Need an app Designer",
                    collection: "Allinweb IT",
                    imageUrl: "/images/placeholder/dao-connect/jobs/bohh.jpg",
                    type: "job",
                    applicationNumber: '20 +',
                    currentBid: 500
                },
                {
                    title: "Need an app Designer",
                    collection: "Allinweb IT",
                    imageUrl: "/images/placeholder/dao-connect/jobs/tlm.jpg",
                    type: "job",
                    applicationNumber: '20 +',
                    currentBid: 500
                },
                {
                    title: "Need an app Designer",
                    collection: "Allinweb IT",
                    imageUrl: "/images/placeholder/dao-connect/jobs/cube.gif",
                    type: "job",
                    applicationNumber: '20 +',
                    currentBid: 500
                }, 
            ]
        }
    ]
};

;// CONCATENATED MODULE: ./src/modules/DAOConnect/index.tsx





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
var DAOConnect = function() {
    var ref = (0,react.useState)("Connect"), selectedScreen = ref[0], setSelectedScreen = ref[1];
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col items-center gap-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SwitchButton, {
                        onChange: setSelectedScreen,
                        options: [
                            "Connect",
                            "Jobs"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-sm text-gray-950",
                        children: selectedScreen === "Connect" ? "Want to find new members for your DAO or kickstart a new one?" : "Join a Union and get automatically rewarded for your contribute!"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "relative w-full max-w-md form-control",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                width: "16",
                                height: "15",
                                viewBox: "0 0 16 15",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "absolute left-4 top-[17px]",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    d: "M15.1475 13.8525L12.4025 11.1075C13.3963 9.93 14 8.4105 14 6.75C14 3.0225 10.9775 0 7.25 0C3.5225 0 0.5 3.0225 0.5 6.75C0.5 10.4775 3.5225 13.5 7.25 13.5C8.91125 13.5 10.43 12.897 11.606 11.9025L14.351 14.6475C14.4613 14.757 14.606 14.8125 14.7485 14.8125C14.891 14.8125 15.0373 14.7578 15.146 14.6475C15.3673 14.4278 15.3673 14.0722 15.1475 13.8525ZM1.625 6.75C1.625 3.64875 4.14875 1.125 7.25 1.125C10.3513 1.125 12.875 3.64875 12.875 6.75C12.875 9.85125 10.3513 12.375 7.25 12.375C4.14875 12.375 1.625 9.85125 1.625 6.75Z",
                                    fill: "#8899A6"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                type: "text",
                                placeholder: "Search",
                                className: "pl-10 rounded-full input bg-brandblack"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "absolute right-0 flex items-center justify-center rounded-r-full bg-secondary input",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            d: "M17.7499 6.31667H13.0999C12.7749 6.31667 12.5166 6.05834 12.5166 5.73334C12.5166 5.40834 12.7749 5.15 13.0999 5.15H17.7499C18.0749 5.15 18.3333 5.40834 18.3333 5.73334C18.3333 6.05834 18.0749 6.31667 17.7499 6.31667Z",
                                            fill: "white"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            d: "M5.35033 6.31667H2.25033C1.92533 6.31667 1.66699 6.05834 1.66699 5.73334C1.66699 5.40834 1.92533 5.15 2.25033 5.15H5.35033C5.67533 5.15 5.93366 5.40834 5.93366 5.73334C5.93366 6.05834 5.66699 6.31667 5.35033 6.31667Z",
                                            fill: "white"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            d: "M8.44987 9.025C10.2678 9.025 11.7415 7.55127 11.7415 5.73333C11.7415 3.9154 10.2678 2.44167 8.44987 2.44167C6.63193 2.44167 5.1582 3.9154 5.1582 5.73333C5.1582 7.55127 6.63193 9.025 8.44987 9.025Z",
                                            fill: "white"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            d: "M17.7497 14.8417H14.6497C14.3247 14.8417 14.0664 14.5833 14.0664 14.2583C14.0664 13.9333 14.3247 13.675 14.6497 13.675H17.7497C18.0747 13.675 18.3331 13.9333 18.3331 14.2583C18.3331 14.5833 18.0747 14.8417 17.7497 14.8417Z",
                                            fill: "white"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            d: "M6.90032 14.8417H2.25033C1.92533 14.8417 1.66699 14.5833 1.66699 14.2583C1.66699 13.9333 1.92533 13.675 2.25033 13.675H6.90032C7.22532 13.675 7.48366 13.9333 7.48366 14.2583C7.48366 14.5833 7.21699 14.8417 6.90032 14.8417Z",
                                            fill: "white"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            d: "M11.5505 17.5583C13.3684 17.5583 14.8421 16.0846 14.8421 14.2667C14.8421 12.4487 13.3684 10.975 11.5505 10.975C9.73252 10.975 8.25879 12.4487 8.25879 14.2667C8.25879 16.0846 9.73252 17.5583 11.5505 17.5583Z",
                                            fill: "white"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Gallery/* default */.Z, _objectSpread({}, selectedScreen === "Connect" ? CONNECT_GALLERY : JOB_GALLERY))
            })
        ]
    }));
};
/* harmony default export */ var modules_DAOConnect = (DAOConnect);

;// CONCATENATED MODULE: ./src/pages/dao-connect.tsx




var dao_connect_Index = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Layout/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(modules_DAOConnect, {})
    }));
};
/* harmony default export */ var dao_connect = (dao_connect_Index);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6419,5090,9774,2888,179], function() { return __webpack_exec__(6020); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);