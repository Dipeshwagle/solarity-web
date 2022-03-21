"use strict";
exports.id = 6359;
exports.ids = [6359];
exports.modules = {

/***/ 6359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(467);




const GalleryItem = ({ title , collection , imageUrl , currentBid , endingIn , subtitle , type ="bid" , applicationNumber  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col group ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col justify-center gap-2 p-2 transition-all ease-in rounded-t-3xl rounded-b-3xl group-hover:rounded-b-none bg-brandblack",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative h-[133px] w-full flex justify-center items-center ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                src: imageUrl,
                                alt: "nft item",
                                height: 133,
                                layout: "fill",
                                width: 175,
                                className: "rounded-3xl"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
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
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M15.4163 16.25H12.083",
                                                    stroke: "#6163FF",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M13.75 17.9167V14.5833",
                                                    stroke: "#6163FF",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    "stroke-Linejoin": "round"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M10.1332 9.05834C10.0498 9.05 9.94984 9.05 9.85817 9.05834C7.87484 8.99167 6.29984 7.36667 6.29984 5.36667C6.2915 3.32501 7.94984 1.66667 9.9915 1.66667C12.0332 1.66667 13.6915 3.32501 13.6915 5.36667C13.6915 7.36667 12.1082 8.99167 10.1332 9.05834Z",
                                                    stroke: "#6163FF",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
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
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Icons__WEBPACK_IMPORTED_MODULE_3__/* .Bid */ .QE, {}),
                                        " Place a Bid"
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "px-2 text-xs",
                        children: title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center gap-2 px-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-[10px] text-secondary ",
                                children: collection
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Icons__WEBPACK_IMPORTED_MODULE_3__/* .TickCircle */ .bh, {})
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xs text-gray-950",
                                        children: "Current bid"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "h-[16px] w-[16px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xs text-gray-950",
                                        children: "Ending in"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-xs text-gray-950",
                                children: subtitle
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-[16px] w-[16px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M6.10671 7.24683C6.04004 7.24016 5.96004 7.24016 5.88671 7.24683C4.30004 7.1935 3.04004 5.8935 3.04004 4.2935C3.04004 2.66016 4.36004 1.3335 6.00004 1.3335C7.63337 1.3335 8.96004 2.66016 8.96004 4.2935C8.95337 5.8935 7.69337 7.1935 6.10671 7.24683Z",
                                                stroke: "white",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M10.9402 2.6665C12.2335 2.6665 13.2735 3.71317 13.2735 4.99984C13.2735 6.25984 12.2735 7.2865 11.0268 7.33317C10.9735 7.3265 10.9135 7.3265 10.8535 7.33317",
                                                stroke: "white",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M2.77348 9.7065C1.16014 10.7865 1.16014 12.5465 2.77348 13.6198C4.60681 14.8465 7.61348 14.8465 9.44681 13.6198C11.0601 12.5398 11.0601 10.7798 9.44681 9.7065C7.62014 8.4865 4.61348 8.4865 2.77348 9.7065Z",
                                                stroke: "white",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-[16px] w-[16px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GalleryItem);


/***/ })

};
;