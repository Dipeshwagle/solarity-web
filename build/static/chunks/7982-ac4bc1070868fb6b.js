"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7982],{

/***/ 9739:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ AframeComp6; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);


function AframeComp6() {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), mounted = ref[0], setMounted = ref[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {
        __webpack_require__(5569);
        setMounted(true);
    }, []);
    if (mounted) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a-scene", {
            arjs: "",
            embedded: true,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-cursor", {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-entity", {
                    camera: true,
                    "look-controls": true,
                    fov: "70"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-assets", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-asset-item", {
                        id: "zizzi",
                        src: "/Final.glb"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-entity", {
                    rotation: "0 0 0",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-gltf-model", {
                        src: "#zizzi",
                        scale: "10 10 10",
                        position: "0 0 -30"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-entity", {
                    camera: true
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-sky", {
                    src: "https://t3.ftcdn.net/jpg/03/56/62/18/360_F_356621844_02EwpDTxw9lOCA8B52cagLvT8j7zczbS.jpg"
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        children: "load..."
    }));
};


/***/ }),

/***/ 3993:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);


var WidgetBase = function(param) {
    var title = param.title, footer = param.footer, subtitle = param.subtitle, headerRight = param.headerRight, children = param.children;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "justify-between bg-brandblack rounded-3xl",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-between border-b border-borderwidget",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col p-5",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flexfont-[19px] font-bold",
                                children: [
                                    title,
                                    " "
                                ]
                            }),
                            subtitle && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-sm text-gray-950",
                                children: [
                                    subtitle,
                                    " "
                                ]
                            })
                        ]
                    }),
                    (headerRight !== null && headerRight !== void 0 ? headerRight : typeof headerRight === "string") ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "pr-5 text-xs cursor-pointer text-secondary",
                        children: headerRight
                    }) : headerRight
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                children: children
            }),
            footer && footer
        ]
    }));
};
/* harmony default export */ __webpack_exports__["Z"] = (WidgetBase);


/***/ }),

/***/ 6656:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Widget_TopPools; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/Widget/Base.tsx
var Base = __webpack_require__(3993);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/components/Modals/Base.tsx
var Modals_Base = __webpack_require__(4432);
;// CONCATENATED MODULE: ./src/components/Modals/SwapCoin.tsx




var SwapCoin = function(param) {
    var open = param.open, onClose = param.onClose;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Modals_Base/* default */.Z, {
        open: open,
        onClose: onClose,
        title: "Swap Coin",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-col gap-8 mt-8",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex justify-between py-4 px-7 bg-primary rounded-xl",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-md text-gray-950",
                                    children: "From"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-4xl font-bold",
                                    children: "0"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-md text-gray-950",
                                    children: "Balance"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                            src: "/images/icons/tokens/eth.png",
                                            alt: "eth logo",
                                            height: 42,
                                            width: 42
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "text-xl",
                                            children: "ETH"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center justify-center gap-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                            width: 32,
                            height: 32,
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                                    cx: 16,
                                    cy: 16,
                                    r: 16,
                                    fill: "#151719"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    d: "m14.007 21.667-3.347-3.34M14.007 10.333v11.334M17.993 10.333l3.347 3.34M17.993 21.667V10.333",
                                    stroke: "#fff",
                                    strokeWidth: 1.5,
                                    strokeMiterlimit: 10,
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: " text-gray-950",
                            children: "0 ETH = 0 ANJ"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex justify-between py-4 px-7 bg-primary rounded-xl",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-md text-gray-950",
                                    children: "To ( Estimate )"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-4xl font-bold",
                                    children: "0"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-md text-gray-950",
                                    children: "Balance"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                            src: "/images/icons/tokens/anj.png",
                                            alt: "eth logo",
                                            height: 42,
                                            width: 42
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "text-xl",
                                            children: "ANJ"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex justify-center",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        className: "rounded-full btn btn-sm btn-secondary",
                        children: "Connect Wallet"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-col gap-4 p-10 -mx-10 -mb-10 bg-base-100",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex justify-between px-8",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-xs text-gray-950",
                                    children: "Amount Received"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-xs ",
                                    children: "$0"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex justify-between px-8",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-xs text-gray-950",
                                    children: "Worst Price"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-xs ",
                                    children: "$33.8"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ var Modals_SwapCoin = (SwapCoin);

;// CONCATENATED MODULE: ./src/components/Widget/TopPools.tsx




var TopPools = function() {
    var ref = (0,react.useState)(false), swapModalOpen = ref[0], setSwapModalOpen = ref[1];
    var handleModalToggle = function() {
        setSwapModalOpen(!swapModalOpen);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Base/* default */.Z, {
        title: "Top Pools",
        headerRight: "View More",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "divide-y divide-borderwidget",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid items-center grid-cols-5 gap-6 px-5 py-4 cursor-pointer",
                        onClick: handleModalToggle,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "font-bold text-[15px] font-white col-span-2",
                                children: "DUSK - USDT"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-span-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "text-xs text-gray-950",
                                        children: "Volume"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "flex items-center gap-12 mt-1",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "mt-2 text-xs font-semibold text-white",
                                            children: "340,170.90 USD"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "mt-2 text-xs text-[#3BA946]",
                                children: "23%"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid items-center grid-cols-5 gap-6 px-5 py-4 cursor-pointer",
                        onClick: handleModalToggle,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "font-bold text-[15px] font-white col-span-2",
                                children: "SMB - MonkeDAO"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-span-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "text-xs text-gray-950",
                                        children: "Volume"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "flex items-center gap-12 mt-1",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "mt-2 text-xs font-semibold text-white",
                                            children: "340,170.90 USD"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "mt-2 text-xs text-[#E0464D]",
                                children: "8.5%"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid items-center grid-cols-5 gap-6 px-5 py-4 cursor-pointer",
                        onClick: handleModalToggle,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "font-bold text-[15px] font-white col-span-2",
                                children: "DUST - SOL"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-span-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "text-xs text-gray-950",
                                        children: "Volume"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "flex items-center gap-12 mt-1",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "mt-2 text-xs font-semibold text-white",
                                            children: "340,170.90 USD"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "mt-2 text-xs text-[#3BA946]",
                                children: "1.05%"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid items-center grid-cols-5 gap-6 px-5 py-4 cursor-pointer",
                        onClick: handleModalToggle,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "font-bold text-[15px] font-white col-span-2",
                                children: "SMB - ETH"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-span-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "text-xs text-gray-950",
                                        children: "Volume"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "flex items-center gap-12 mt-1",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "mt-2 text-xs font-semibold text-white",
                                            children: "340,170.90 USD"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "mt-2 text-xs text-[#3BA946]",
                                children: "1.05%"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid items-center grid-cols-5 gap-6 px-5 py-4 cursor-pointer",
                        onClick: handleModalToggle,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "font-bold text-[15px] font-white col-span-2",
                                children: "BTC - ETH"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-span-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "text-xs text-gray-950",
                                        children: "Volume"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "flex items-center gap-12 mt-1",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "mt-2 text-xs font-semibold text-white",
                                            children: "340,170.90 USD"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "mt-2 text-xs text-[#3BA946]",
                                children: "1.05%"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Modals_SwapCoin, {
                open: swapModalOpen,
                onClose: handleModalToggle
            })
        ]
    }));
};
/* harmony default export */ var Widget_TopPools = (TopPools);


/***/ })

}]);