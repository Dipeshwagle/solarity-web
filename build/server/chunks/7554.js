"use strict";
exports.id = 7554;
exports.ids = [7554];
exports.modules = {

/***/ 606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SearchInput = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative w-full text-gray-600 focus-within:text-gray-400",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute inset-y-0 flex items-center pl-2 left-2 ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "submit",
                    className: "p-1 focus:outline-none focus:shadow-outline",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        width: 16,
                        height: 15,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "m15.148 13.852-2.745-2.745A6.75 6.75 0 1 0 7.25 13.5c1.66 0 3.179-.603 4.355-1.598l2.745 2.746a.565.565 0 0 0 .795 0 .56.56 0 0 0 .002-.796ZM1.625 6.75A5.632 5.632 0 0 1 7.25 1.125a5.632 5.632 0 0 1 5.625 5.625 5.632 5.632 0 0 1-5.625 5.625A5.632 5.632 0 0 1 1.625 6.75Z",
                            fill: "#8899A6"
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "search",
                className: "w-full py-4 pl-12 text-[15px] text-white rounded-full bg-primary focus:outline-none focus:bg-black focus:text-white placeholder:text-gray-950\xcd",
                placeholder: "Search",
                autoComplete: "off"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchInput);


/***/ }),

/***/ 6546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



const TagsCollection = ({ tags , onChange  })=>{
    const { 0: activeTagIndex , 1: setActiveTabIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const handleTagClick = (index, tag)=>{
        setActiveTabIndex(index);
        onChange(tag);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex flex-wrap gap-2 ",
        children: tags.map((tag, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(activeTagIndex === index ? "btn-secondary" : "btn-primary", "rounded-full btn btn-sm  h-7 text-sm normal-case font-normal"),
                onClick: ()=>{
                    handleTagClick(index, tag);
                },
                children: tag
            }, index)
        )
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagsCollection);


/***/ })

};
;