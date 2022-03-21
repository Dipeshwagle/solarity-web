(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2742],{

/***/ 6124:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/daos/moneyboys/voting",
      function () {
        return __webpack_require__(7621);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 9506:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ListSelect; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/headlessui.esm.js
var headlessui_esm = __webpack_require__(6727);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/solid/esm/SelectorIcon.js


function SelectorIcon(props, svgRef) {
  return /*#__PURE__*/react.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

const ForwardRef = react.forwardRef(SelectorIcon);
/* harmony default export */ var esm_SelectorIcon = (ForwardRef);
;// CONCATENATED MODULE: ./node_modules/@heroicons/react/solid/esm/CheckIcon.js


function CheckIcon(props, svgRef) {
  return /*#__PURE__*/react.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

const CheckIcon_ForwardRef = react.forwardRef(CheckIcon);
/* harmony default export */ var esm_CheckIcon = (CheckIcon_ForwardRef);
;// CONCATENATED MODULE: ./src/components/ListSelect/index.tsx




var SelectList = function(param1) {
    var options = param1.options;
    var ref = (0,react.useState)(options[0]), selected1 = ref[0], setSelected = ref[1];
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(headlessui_esm/* Listbox */.Ri, {
        value: selected1,
        onChange: setSelected,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "relative mt-1",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(headlessui_esm/* Listbox.Button */.Ri.Button, {
                    className: "relative flex flex-row items-center w-full input bg-brandblack boder border-base-100",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "",
                            children: selected1.label
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_SelectorIcon, {
                                className: "w-5 h-5 text-gray-400",
                                "aria-hidden": "true"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(headlessui_esm/* Transition */.uT, {
                    as: react.Fragment,
                    leave: "transition ease-in duration-100",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(headlessui_esm/* Listbox.Options */.Ri.Options, {
                        className: "absolute z-50 w-full py-1 mt-1 overflow-auto text-base rounded-md shadow-lg bg-brandblack max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
                        children: options.map(function(option, optionId) {
                            /*#__PURE__*/ return (0,jsx_runtime.jsx)(headlessui_esm/* Listbox.Option */.Ri.Option, {
                                className: function(param) {
                                    var active = param.active;
                                    return "cursor-default select-none relative py-2 pl-10 pr-4 ".concat(active ? "text-amber-900 bg-amber-100" : "text-white");
                                },
                                value: option,
                                children: function(param) {
                                    var selected = param.selected;
                                    /*#__PURE__*/ return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "block truncate ".concat(selected ? "font-medium" : "font-normal"),
                                                children: option.label
                                            }),
                                            selected ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_CheckIcon, {
                                                    className: "w-5 h-5",
                                                    "aria-hidden": "true"
                                                })
                                            }) : null
                                        ]
                                    });
                                }
                            }, optionId);
                        })
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ var ListSelect = (SelectList);


/***/ }),

/***/ 4432:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ 7621:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ voting; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/Layout/index.tsx + 8 modules
var Layout = __webpack_require__(5090);
// EXTERNAL MODULE: ./src/modules/DAOS/Base.tsx + 1 modules
var Base = __webpack_require__(7844);
// EXTERNAL MODULE: ./src/modules/Home/Posts.tsx + 8 modules
var Posts = __webpack_require__(7540);
// EXTERNAL MODULE: ./src/data/daos.ts
var daos = __webpack_require__(170);
// EXTERNAL MODULE: ./src/components/Modals/Base.tsx
var Modals_Base = __webpack_require__(4432);
// EXTERNAL MODULE: ./src/components/ListSelect/index.tsx + 2 modules
var ListSelect = __webpack_require__(9506);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/headlessui.esm.js
var headlessui_esm = __webpack_require__(6727);
;// CONCATENATED MODULE: ./src/components/Modals/CreateProposal.tsx





function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
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
var CreateProposal = function(param) {
    var open = param.open, onClose = param.onClose;
    var ref = _slicedToArray(react.useState("real-time"), 2), selected = ref[0], setSelected = ref[1];
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Modals_Base/* default */.Z, {
        open: open,
        onClose: onClose,
        title: "New Proposal",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-col gap-10",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "w-full form-control",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                            className: "label",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "ml-4 text-white label-text",
                                children: "Title"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                            type: "text",
                            placeholder: "Contract title",
                            className: "w-full input input-bordered input-primary boder border-base-100 bg-brandblack"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(RaidoButtons, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "w-full form-control",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                            className: "label",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "ml-4 text-white label-text",
                                children: "Description"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                            placeholder: "A description of your proposal",
                            className: "resize-none textarea textarea-primary h-[135px] boder border-base-100 bg-brandblack"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "w-full form-control",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                            className: "label",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "ml-4 label-text text-gray-950",
                                children: "Shares Requested"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                            type: "text",
                            placeholder: "25",
                            className: "w-full input input-bordered input-primary boder border-base-100 bg-brandblack"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "w-full form-control",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                            className: "label",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "ml-4 label-text text-gray-950",
                                children: "Token Tribute"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid items-center grid-cols-2 gap-10",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "relative",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                        type: "text",
                                        placeholder: "25",
                                        className: "w-full input input-bordered input-primary boder border-base-100 bg-brandblack"
                                    })
                                }),
                                " ",
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListSelect/* default */.Z, {
                                        options: [
                                            {
                                                label: "SOL"
                                            },
                                            {
                                                label: "VERSE"
                                            }, 
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center justify-center gap-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            type: "button",
                            className: "mt-1 text-black normal-case bg-white rounded-full btn-sm btn ",
                            onClick: onClose,
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            type: "button",
                            className: "text-sm normal-case rounded-full btn btn-sm btn-secondary",
                            onClick: onClose,
                            children: "Create Proposal"
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ var Modals_CreateProposal = (CreateProposal);
var RaidoButtons = function() {
    var ref = (0,react.useState)("real-time"), plan = ref[0], setPlan = ref[1];
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(headlessui_esm/* RadioGroup */.Ee, {
        value: plan,
        onChange: setPlan,
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(headlessui_esm/* RadioGroup.Option */.Ee.Option, {
                value: "real-time",
                children: function(param) {
                    var checked = param.checked;
                    /*#__PURE__*/ return (0,jsx_runtime.jsxs)("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "w-5",
                                children: checked ? /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                        d: "M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z",
                                        fill: "#6163FF"
                                    })
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                                        cx: "10",
                                        cy: "10",
                                        r: "9.5",
                                        stroke: "#2F3336"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-[15px]",
                                children: "Real time results"
                            })
                        ]
                    });
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(headlessui_esm/* RadioGroup.Option */.Ee.Option, {
                value: "encrypted",
                children: function(param) {
                    var checked = param.checked;
                    /*#__PURE__*/ return (0,jsx_runtime.jsxs)("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "w-5 ",
                                children: checked ? /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                        d: "M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z",
                                        fill: "#6163FF"
                                    })
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                                        cx: "10",
                                        cy: "10",
                                        r: "9.5",
                                        stroke: "#2F3336"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-[15px]",
                                children: "Encrypted results"
                            })
                        ]
                    });
                }
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/modules/DAOS/Voting.tsx






var Home = function() {
    var ref = (0,react.useState)(false), open = ref[0], setOpen = ref[1];
    var handleToggle = function() {
        setOpen(!open);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Base/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    className: "normal-case rounded-full btn btn-sm btn-secondary",
                    onClick: handleToggle,
                    children: "+ New Proposasl"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Posts/* default */.Z, {
                posts: daos/* POSTS */.vA
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Modals_CreateProposal, {
                open: open,
                onClose: handleToggle
            })
        ]
    }));
};
/* harmony default export */ var Voting = (Home);

// EXTERNAL MODULE: ./src/modules/DAOS/Hero.tsx
var Hero = __webpack_require__(6098);
// EXTERNAL MODULE: ./src/modules/DAOS/Sidebar/Voting.tsx
var Sidebar_Voting = __webpack_require__(5533);
;// CONCATENATED MODULE: ./src/pages/daos/moneyboys/voting.tsx






var Index = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Layout/* default */.Z, {
        rightSidebar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Sidebar_Voting/* default */.Z, {}),
        heroContent: /*#__PURE__*/ (0,jsx_runtime.jsx)(Hero/* default */.Z, {}),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Voting, {})
    }));
};
/* harmony default export */ var voting = (Index);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6446,5445,4617,6419,7143,5090,170,7540,7061,9774,2888,179], function() { return __webpack_exec__(6124); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);