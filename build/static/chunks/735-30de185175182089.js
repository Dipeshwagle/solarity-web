"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[735],{

/***/ 9688:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ AframeComp2; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);


function AframeComp2() {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), mounted = ref[0], setMounted = ref[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {
        __webpack_require__(5569);
        setMounted(true);
    }, []);
    if (mounted) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a-scene", {
            arjs: "",
            embedded: true,
            renderer: "antialias: true; colorManagement: true; sortObjects: true; physicallyCorrectLights: true;",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-entity", {
                    camera: true
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-assets", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-asset-item", {
                        id: "U",
                        src: "/normalroom.glb"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-entity", {
                    camera: true
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-entity", {
                    rotation: "0 -105 0",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-gltf-model", {
                        src: "#U",
                        position: "0 0 0",
                        scale: "1 1 1",
                        rotation: "0 0 0"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-sky", {
                    src: "https://ak.picdn.net/shutterstock/videos/17170723/thumb/1.jpg"
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        children: "load..."
    }));
};


/***/ }),

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

/***/ 2279:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var components_AframeComp2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9688);
/* harmony import */ var components_AframeComp6__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9739);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);






var Banner = function(param) {
    var vrprofile = param.vrprofile, vrdao = param.vrdao, smallImage = param.smallImage;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            vrprofile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative w-full h-[400px] rounded-2xl -mt-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_AframeComp2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    vrprofile.price && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        href: 'https://solarityvr.github.io/money-boy-hub/room/room.html?controls=mouse',
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                            className: "absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary",
                            children: "Play"
                        })
                    })
                ]
            }),
            vrdao && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative w-full h-[400px] rounded-2xl -mt-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_AframeComp6__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    vrdao.price && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        href: 'https://solarityvr.github.io/money-boy-hub/hub/hub.html?controls=mouse',
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                            className: "absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary",
                            children: "Play"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "flex justify-center ",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "h-[201px] w-[201px] rounded-full relative -mt-28",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        src: smallImage,
                        alt: "VR Image",
                        layout: "fill",
                        objectFit: "cover"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ __webpack_exports__["Z"] = (Banner);


/***/ }),

/***/ 9506:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


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

/***/ 2633:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6727);
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(467);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tailwind_override__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1182);
/* harmony import */ var tailwind_override__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tailwind_override__WEBPACK_IMPORTED_MODULE_4__);






var SelectInput = function(param) {
    var title = param.title, className = param.className;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__/* .Popover */ .J2, {
        className: "relative",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__/* .Popover.Button */ .J2.Button, {
                className: (0,tailwind_override__WEBPACK_IMPORTED_MODULE_4__.overrideTailwindClasses)(classnames__WEBPACK_IMPORTED_MODULE_3___default()("justify-between w-full gap-2 text-sm font-normal normal-case btn rounded-1xl bg-brandblack", className)),
                children: [
                    title,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Icons__WEBPACK_IMPORTED_MODULE_2__/* .CaretDown */ .pO, {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__/* .Popover.Panel */ .J2.Panel, {
                className: "absolute z-10 rounded-lg bg-brandblack",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col p-5",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                            href: "/analytics",
                            children: "Analytics"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                            href: "/engagement",
                            children: "Engagement"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                            href: "/security",
                            children: "Security"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                            href: "/integrations",
                            children: "Integrations"
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ __webpack_exports__["Z"] = (SelectInput);


/***/ }),

/***/ 333:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ TokenBalances; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/headlessui.esm.js
var headlessui_esm = __webpack_require__(6727);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/components/ListSelect/index.tsx + 2 modules
var ListSelect = __webpack_require__(9506);
;// CONCATENATED MODULE: ./src/components/Modals/CreateContract.tsx





var CreateContract = function(param) {
    var open = param.open, onClose = param.onClose;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(headlessui_esm/* Transition */.uT, {
        appear: true,
        show: open,
        as: react.Fragment,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(headlessui_esm/* Dialog */.Vq, {
            as: "div",
            className: "fixed inset-0 z-40 overflow-y-auto",
            onClose: onClose,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "min-h-screen px-4 text-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(headlessui_esm/* Transition.Child */.uT.Child, {
                        as: react.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(headlessui_esm/* Dialog.Overlay */.Vq.Overlay, {
                            className: "fixed inset-0"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "inline-block h-screen align-middle",
                        "aria-hidden": "true",
                        children: "​"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(headlessui_esm/* Transition.Child */.uT.Child, {
                        as: react.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl bg-brandblack rounded-2xl",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(headlessui_esm/* Dialog.Title */.Vq.Title, {
                                    as: "h3",
                                    className: "text-lg font-bold leading-6 text-center",
                                    children: "Create Contract"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col w-full gap-5 my-5",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "w-full form-control",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                type: "text",
                                                placeholder: "Contract title",
                                                className: "w-full input input-bordered input-primary boder border-base-100 bg-brandblack"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "w-full form-control",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                                                placeholder: "Description",
                                                className: "resize-none textarea textarea-primary h-[135px] boder border-base-100 bg-brandblack"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "w-full form-control",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                    className: "label",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "ml-4 label-text text-gray-950",
                                                        children: "Looking for"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListSelect/* default */.Z, {
                                                        options: [
                                                            {
                                                                label: "Developer"
                                                            },
                                                            {
                                                                label: "Designer"
                                                            }, 
                                                        ]
                                                    })
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
                                                        children: "Type of Experience"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListSelect/* default */.Z, {
                                                        options: [
                                                            {
                                                                label: "Expert"
                                                            },
                                                            {
                                                                label: "Intermediate"
                                                            },
                                                            {
                                                                label: "Beginner"
                                                            }, 
                                                        ]
                                                    })
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
                                                        children: "DAO Preference"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListSelect/* default */.Z, {
                                                        options: [
                                                            {
                                                                label: "Any"
                                                            },
                                                            {
                                                                label: "SOL"
                                                            }, 
                                                        ]
                                                    })
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
                                                        children: "Estimated Budget"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "grid grid-cols-2 gap-10",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                    type: "text",
                                                                    placeholder: "25",
                                                                    className: "w-full input input-bordered input-primary boder border-base-100 bg-brandblack"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "absolute top-3 right-3",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                                                        src: "/images/icons/tokens/sol.png",
                                                                        alt: "sol logo",
                                                                        height: 21,
                                                                        width: 21
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListSelect/* default */.Z, {
                                                                options: [
                                                                    {
                                                                        label: "Fixed Price"
                                                                    },
                                                                    {
                                                                        label: "100"
                                                                    }, 
                                                                ]
                                                            })
                                                        })
                                                    ]
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
                                                        children: "Estimated Budget"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "grid grid-cols-2 gap-10",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "relative",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "date",
                                                                placeholder: "08-23-22",
                                                                className: "w-full input input-bordered input-primary boder border-base-100 bg-brandblack"
                                                            })
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {})
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex justify-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                            type: "button",
                                            className: "text-black normal-case bg-white rounded-full btn ",
                                            onClick: onClose,
                                            children: "Cancel"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                            type: "button",
                                            className: "text-sm normal-case rounded-full btn btn-secondary",
                                            onClick: onClose,
                                            children: "Create Contract"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ var Modals_CreateContract = (CreateContract);

;// CONCATENATED MODULE: ./src/components/TokenBalances/TokenBalanceItem.tsx



var TokenBalanceItem = function(param) {
    var title = param.title, volume = param.volume, amount = param.amount, imageUrl = param.imageUrl;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col items-center px-8 py-4 border select-none border-base-100 rounded-3xl max-w-[158px]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                    src: imageUrl,
                    alt: "".concat(title, " logo"),
                    height: 42,
                    width: 42
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "mt-1 text-sm",
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                className: "mt-3 text-2xl font-bold",
                children: [
                    volume.split(".")[0],
                    ".",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-lg ",
                        children: volume.split(".")[1]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "text-xs text-gray-950",
                children: amount ? "".concat(amount) : "-"
            })
        ]
    }));
};
/* harmony default export */ var TokenBalances_TokenBalanceItem = (TokenBalanceItem);

;// CONCATENATED MODULE: ./src/components/TokenBalances/index.tsx




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
var TokenBalance = function(param) {
    var title = param.title, tokens = param.tokens;
    var ref = (0,react.useState)(false), isOpen = ref[0], setIsOpen = ref[1];
    var toogleModal = function() {
        setIsOpen(!isOpen);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col gap-8 py-8 bg-brandblack",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center justify-between px-8",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-lg font-bold",
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                className: "rounded-full btn btn-secondary",
                                onClick: toogleModal,
                                children: "Create Contract"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex gap-4 pb-5 pl-8 overflow-x-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-white",
                        children: tokens.map(function(item, index) {
                            /*#__PURE__*/ return (0,jsx_runtime.jsx)(TokenBalances_TokenBalanceItem, _objectSpread({}, item), index);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Modals_CreateContract, {
                open: isOpen,
                onClose: toogleModal
            })
        ]
    }));
};
/* harmony default export */ var TokenBalances = (TokenBalance);


/***/ })

}]);