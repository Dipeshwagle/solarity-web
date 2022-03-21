"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[5277],{

/***/ 6359:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ 4432:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6727);



var CreateContract = function(param) {
    var title = param.title, children = param.children, open = param.open, onClose = param.onClose;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__/* .Transition */ .uT, {
        appear: true,
        show: open,
        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__/* .Dialog */ .Vq, {
            as: "div",
            className: "fixed inset-0 z-40 overflow-y-auto",
            onClose: onClose,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "min-h-screen px-4 text-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__/* .Transition.Child */ .uT.Child, {
                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__/* .Dialog.Overlay */ .Vq.Overlay, {
                            className: "fixed inset-0"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        className: "inline-block h-screen align-middle",
                        "aria-hidden": "true",
                        children: "​"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__/* .Transition.Child */ .uT.Child, {
                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl bg-brandblack rounded-2xl",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__/* .Dialog.Title */ .Vq.Title, {
                                    as: "h3",
                                    className: "text-lg font-bold leading-6 text-center",
                                    children: title
                                }),
                                children
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ __webpack_exports__["Z"] = (CreateContract);


/***/ }),

/***/ 8751:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DX": function() { return /* binding */ TAGS; },
/* harmony export */   "CT": function() { return /* binding */ HERO_DATA; },
/* harmony export */   "yg": function() { return /* binding */ GALLERY; },
/* harmony export */   "m8": function() { return /* binding */ GALLERYE; }
/* harmony export */ });
var TAGS = [
    "All",
    "Land",
    "3D Models",
    "Avatars",
    "Your Assets"
];
var HERO_DATA = {
    vrmarket: {
        featured: true,
        imageUrl: "/images/placeholder/post/post_one.png",
        price: 5
    },
    content: {
        title: "Land # 1414, Solarity",
        description: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,eget quisque pharetra, nisl. Nisl a proin a commodo libero purusduis. Leo, condimentum viverra mattis feugiat egestas est at nec.Praesent vitae fames feugiat diam mauris. Fringilla posuere quamenim id urna. Arcu, ut magna cursus pharetra semper a.",
        buttonText: "Buy Now",
        buttonLink: "/buy-now"
    }
};
var GALLERY = {
    rows: [
        {
            title: "Raising Verses",
            items: [
                {
                    title: "MoneyVerse #4141",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/boh1.png",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                },
                {
                    title: "DeVerse #1633",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/boh2.jpg",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                },
                {
                    title: "MonkeVerse #1094",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/boh3.png",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                }, 
            ]
        },
        {
            title: "3D Assets",
            items: [
                {
                    title: "Crypto VR Headset",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/tuma.jpg",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                },
                {
                    title: "Jelly Gun",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/raygun.jpeg",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                },
                {
                    title: "MoneyBoy Mansion",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/mansion.jpg",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                }, 
            ]
        },
        {
            title: "Collections",
            items: [
                {
                    title: "Money Boys",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/moneymarket.jpg",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                },
                {
                    title: "SolGods",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/marketgods.jpg",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                },
                {
                    title: "DeGods",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/marketdegods.jpg",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                }, 
            ]
        },
        {
            title: "Services & Widgets",
            items: [
                {
                    title: "Money Boy Machine",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/ten.png",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                },
                {
                    title: "DyApps",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/eleven.png",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                },
                {
                    title: "Blockchain API",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/twelve.png",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                }, 
            ]
        }, 
    ]
};
var GALLERYE = {
    rows: [
        {
            title: "Raising Verses",
            items: [
                {
                    title: "MoneyVerse #4141",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/boh1.png",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                },
                {
                    title: "DeVerse #1633",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/boh2.jpg",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                },
                {
                    title: "MonkeVerse #1094",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/boh3.png",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                },
                {
                    title: "DeVerse #1633",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/boh2.jpg",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                }, 
            ]
        },
        {
            title: "3D Assets",
            items: [
                {
                    title: "Crypto VR Headset",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/tuma.jpg",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                },
                {
                    title: "Jelly Gun",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/raygun.jpeg",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                },
                {
                    title: "MoneyBoy Mansion",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/mansion.jpg",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                },
                {
                    title: "Crypto VR Headset",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/tuma.jpg",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                }, 
            ]
        },
        {
            title: "Collections",
            items: [
                {
                    title: "Money Boys",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/moneymarket.jpg",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                },
                {
                    title: "SolGods",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/marketgods.jpg",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                },
                {
                    title: "DeGods",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/marketdegods.jpg",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                },
                {
                    title: "SolGods",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/marketgods.jpg",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                }, 
            ]
        },
        {
            title: "Services & Widgets",
            items: [
                {
                    title: "Money Boy Machine",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/ten.png",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                },
                {
                    title: "DyApps",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/eleven.png",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                },
                {
                    title: "Blockchain API",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/twelve.png",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                },
                {
                    title: "Blockchain API",
                    collection: "Solana Money Boys",
                    imageUrl: "/images/placeholder/marketplace/gallery/twelve.png",
                    currentBid: 10,
                    endingIn: "12h  43m  27s"
                }, 
            ]
        }, 
    ]
};


/***/ })

}]);