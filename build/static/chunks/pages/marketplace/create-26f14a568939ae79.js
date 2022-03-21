(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7633],{

/***/ 9429:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/marketplace/create",
      function () {
        return __webpack_require__(81);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 3862:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/media/dao-universe.2678b7b9.png","height":334,"width":334,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7UlEQVR42mMAgarEFr+JZVMezaid9WdZz/Jrl3dfsgOJL+1bxczga5lhVxzV+H9S2dT/QAV/Z9bO+r960pqfJ9ef0ATrDrPP2ZbhX/m/I7f/15yGOf/nN8/7Obli+v/pdXOmgxWE2OUci3LO/18c1fB3UulkkEm/69M6/5fGNKw/NW0FE0OoXU5NsF32/zDH3N8Z/hW/s4Or/iZ5l/yPcc6rAepnAWJF1mC7rE1Bdln/Qxxy/ocCsa9lylZzaX9dD/0EoAIwMGTzMk2M87VI7vA0SkzX5nXX1pfw4Ia6IYuRAQGYgZjD1yyFFSYAALYYYTC4SzsNAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 6546:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



var TagsCollection = function(param) {
    var tags = param.tags, onChange = param.onChange;
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), activeTagIndex = ref[0], setActiveTabIndex = ref[1];
    var handleTagClick = function(index, tag) {
        setActiveTabIndex(index);
        onChange(tag);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "flex flex-wrap gap-2 ",
        children: tags.map(function(tag, index) {
            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(activeTagIndex === index ? "btn-secondary" : "btn-primary", "rounded-full btn btn-sm  h-7 text-sm normal-case font-normal"),
                onClick: function() {
                    handleTagClick(index, tag);
                },
                children: tag
            }, index);
        })
    }));
};
/* harmony default export */ __webpack_exports__["Z"] = (TagsCollection);


/***/ }),

/***/ 81:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ create; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/Layout/index.tsx + 8 modules
var Layout = __webpack_require__(5090);
// EXTERNAL MODULE: ./node_modules/react-use-wizard/dist/react-use-wizard.esm.js
var react_use_wizard_esm = __webpack_require__(7999);
// EXTERNAL MODULE: ./node_modules/use-file-picker/dist/use-file-picker.esm.js + 4 modules
var use_file_picker_esm = __webpack_require__(5292);
// EXTERNAL MODULE: ./node_modules/jotai/esm/index.js
var esm = __webpack_require__(1131);
;// CONCATENATED MODULE: ./src/atoms/create.ts

var createFormAtom = (0,esm/* atom */.cn)({
    name: "Your name",
    description: "Add a description",
    support: "50",
    quorum: "50"
});

;// CONCATENATED MODULE: ./src/modules/Marketplace/Create/Steps/Sqad.tsx

/* eslint-disable @next/next/no-img-element */ 



function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
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
var Sqad = function() {
    var ref = _slicedToArray((0,use_file_picker_esm/* useFilePicker */.s)({
        readAs: "DataURL",
        accept: "image/*",
        multiple: false,
        limitFilesConfig: {
            max: 1
        },
        maxFileSize: 50
    }), 2), openFileSelector = ref[0], ref1 = ref[1], filesContent = ref1.filesContent, loading = ref1.loading, errors = ref1.errors;
    var ref2 = _slicedToArray((0,esm/* useAtom */.KO)(createFormAtom), 2), form = ref2[0], setForm = ref2[1];
    (0,react.useEffect)(function() {
        setForm(_objectSpread({}, form, {
            file: filesContent[0]
        }));
    }, [
        filesContent
    ]);
    console.log({
        filesContent: filesContent
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-4 p-10 border border-brandblack rounded-3xl",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "font-bold text-[19px]",
                children: "Create a new DAO"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                onClick: openFileSelector,
                className: "flex items-center justify-center w-32 h-32 rounded-full bg-brandblack",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                        width: "40",
                        height: "40",
                        viewBox: "0 0 40 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "z-10",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "M34.9498 1.66663H30.0498C28.5998 1.66663 27.5332 2.26663 27.0498 3.33329C26.7832 3.81663 26.6665 4.38329 26.6665 5.04996V9.94996C26.6665 12.0666 27.9332 13.3333 30.0498 13.3333H34.9498C35.6165 13.3333 36.1832 13.2166 36.6665 12.95C37.7332 12.4666 38.3332 11.4 38.3332 9.94996V5.04996C38.3332 2.93329 37.0665 1.66663 34.9498 1.66663ZM36.5165 8.21663C36.3498 8.38329 36.0998 8.49996 35.8332 8.51663H33.4832V9.36663L33.4998 10.8333C33.4832 11.1166 33.3832 11.35 33.1832 11.55C33.0165 11.7166 32.7665 11.8333 32.4998 11.8333C31.9498 11.8333 31.4998 11.3833 31.4998 10.8333V8.49996L29.1665 8.51663C28.6165 8.51663 28.1665 8.04996 28.1665 7.49996C28.1665 6.94996 28.6165 6.49996 29.1665 6.49996L30.6332 6.51663H31.4998V4.18329C31.4998 3.63329 31.9498 3.16663 32.4998 3.16663C33.0498 3.16663 33.4998 3.63329 33.4998 4.18329L33.4832 5.36663V6.49996H35.8332C36.3832 6.49996 36.8332 6.94996 36.8332 7.49996C36.8165 7.78329 36.6998 8.01663 36.5165 8.21663Z",
                                fill: "white"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "M14.9999 17.3C17.1906 17.3 18.9665 15.5241 18.9665 13.3334C18.9665 11.1426 17.1906 9.3667 14.9999 9.3667C12.8091 9.3667 11.0332 11.1426 11.0332 13.3334C11.0332 15.5241 12.8091 17.3 14.9999 17.3Z",
                                fill: "white"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "M34.9502 13.3334H34.1668V21.0167L33.9502 20.8334C32.6502 19.7167 30.5502 19.7167 29.2502 20.8334L22.3168 26.7834C21.0168 27.9 18.9168 27.9 17.6168 26.7834L17.0502 26.3167C15.8668 25.2834 13.9835 25.1834 12.6502 26.0834L6.41683 30.2667C6.05016 29.3334 5.8335 28.25 5.8335 26.9834V13.0167C5.8335 8.31671 8.31683 5.83337 13.0168 5.83337H26.6668V5.05004C26.6668 4.38337 26.7835 3.81671 27.0502 3.33337H13.0168C6.95016 3.33337 3.3335 6.95004 3.3335 13.0167V26.9834C3.3335 28.8 3.65016 30.3834 4.26683 31.7167C5.70016 34.8834 8.76683 36.6667 13.0168 36.6667H26.9835C33.0502 36.6667 36.6668 33.05 36.6668 26.9834V12.95C36.1835 13.2167 35.6168 13.3334 34.9502 13.3334Z",
                                fill: "white"
                            })
                        ]
                    }),
                    filesContent && filesContent[0] && /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        alt: filesContent[0].name,
                        src: filesContent[0].content,
                        className: "absolute z-0 w-32 h-32 rounded-full"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "w-full max-w-md form-control",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                        className: "label",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: " label-text text-gray-950",
                            children: "Name"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                        type: "text",
                        placeholder: "Your Name",
                        className: "w-full input input-bordered input-primary boder border-base-100 bg-brandblack",
                        onChange: function(e) {
                            setForm(_objectSpread({}, form, {
                                name: e.target.value
                            }));
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "w-full max-w-md form-control",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                        className: "label",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: " label-text text-gray-950",
                            children: "Description"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                        type: "text",
                        placeholder: "Add a description",
                        className: "w-full input input-bordered input-primary boder border-base-100 bg-brandblack",
                        onChange: function(e) {
                            setForm(_objectSpread({}, form, {
                                description: e.target.value
                            }));
                        }
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ var Steps_Sqad = (Sqad);

;// CONCATENATED MODULE: ./src/modules/Marketplace/Create/Steps/Voting.tsx




function Voting_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function Voting_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function Voting_defineProperty(obj, key, value) {
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
function Voting_iterableToArrayLimit(arr, i) {
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
function Voting_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Voting_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            Voting_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function Voting_slicedToArray(arr, i) {
    return Voting_arrayWithHoles(arr) || Voting_iterableToArrayLimit(arr, i) || Voting_unsupportedIterableToArray(arr, i) || Voting_nonIterableRest();
}
function Voting_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return Voting_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Voting_arrayLikeToArray(o, minLen);
}
var Voting = function() {
    var ref = Voting_slicedToArray((0,esm/* useAtom */.KO)(createFormAtom), 2), form = ref[0], setForm = ref[1];
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-4 p-5 border border-brandblack rounded-3xl",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "font-bold text-brand-lg",
                children: "Choose Voting System"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                className: "flex gap-4 text-brand-lg",
                children: [
                    "Voting Rules",
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                        width: "28",
                        height: "28",
                        viewBox: "0 0 28 28",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                                cx: "14",
                                cy: "14",
                                r: "13.5",
                                stroke: "white"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "M10.5859 11.1924H11.8384C11.9189 10.145 12.6221 9.49316 13.728 9.49316C14.8193 9.49316 15.5225 10.1597 15.5225 11.0679C15.5225 11.8516 15.1929 12.313 14.3433 12.833C13.3398 13.4336 12.8711 14.0928 12.8784 15.0596V15.7334H14.1602V15.2573C14.1602 14.4883 14.4238 14.0781 15.354 13.5288C16.2915 12.9648 16.8848 12.1519 16.8848 11.002C16.8848 9.49316 15.625 8.35059 13.7793 8.35059C11.7212 8.35059 10.6665 9.61035 10.5859 11.1924ZM13.6182 19.1318C14.2114 19.1318 14.6289 18.707 14.6289 18.1138C14.6289 17.5132 14.2114 17.0884 13.6182 17.0884C13.0249 17.0884 12.6001 17.5132 12.6001 18.1138C12.6001 18.707 13.0249 19.1318 13.6182 19.1318Z",
                                fill: "white"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "text-brand-md text-gray-950",
                children: "Choose voting rules for your Verse"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "flex gap-4 text-brand-lg",
                children: "Support"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "text-brand-md text-gray-950",
                children: "Choose voting rules for your Verse"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative w-full max-w-md form-control ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                        type: "text",
                        className: "rounded-full input input-primary input-sm",
                        value: form.support
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "absolute right-5 top-1 text-brand-md text-gray-950",
                        children: "%"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "w-full max-w-md form-control",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                        className: "label",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "label-text",
                                children: "0%"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "label-text-alt",
                                children: "100%"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                        type: "range",
                        min: "0",
                        max: "100",
                        onChange: function(e) {
                            return setForm(Voting_objectSpread({}, form, {
                                support: e.target.value
                            }));
                        },
                        value: form.support,
                        className: "range range-secondary"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "flex gap-4 text-brand-lg",
                children: "Quorum"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "text-brand-md text-gray-950",
                children: "Minimum % of partecipants"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative w-full max-w-md form-control ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                        type: "text",
                        className: "rounded-full input input-primary input-sm",
                        value: form.quorum
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "absolute right-5 top-1 text-brand-md text-gray-950",
                        children: "%"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "w-full max-w-md form-control",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                        className: "label",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "label-text",
                                children: "0%"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "label-text-alt",
                                children: "100%"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                        type: "range",
                        min: "0",
                        max: "100",
                        onChange: function(e) {
                            return setForm(Voting_objectSpread({}, form, {
                                quorum: e.target.value
                            }));
                        },
                        value: form.quorum,
                        className: "range range-secondary"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ var Steps_Voting = (Voting);

// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 30 modules
var Icons = __webpack_require__(467);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/modules/Marketplace/Create/Steps/components/Card.tsx




var Card = function(param) {
    var icon = param.icon, title = param.title, list = param.list, onClick = param.onClick, selected = param.selected;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classnames_default()(selected && "bg-brandblack", "flex flex-col items-center gap-6 p-4 transition-all ease-in border cursor-pointer select-none border-brandblack rounded-3xl hover:bg-brandblack"),
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    icon,
                    " "
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "font-bold text-[19px]",
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex flex-col gap-4",
                children: list.map(function(item, index) {
                    /*#__PURE__*/ return (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-4 text-[15px] text-gray-950",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* Tick */.dR, {}),
                            " ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: item
                            })
                        ]
                    }, index);
                })
            })
        ]
    }));
};
/* harmony default export */ var components_Card = (Card);

;// CONCATENATED MODULE: ./src/modules/Marketplace/Create/Steps/Template.tsx




var MarketPlaceCreate = function() {
    var ref = (0,react.useState)(null), selectedTemplateIndex = ref[0], setSelectedTemplateIndex = ref[1];
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col pb-12 ml-10 -mt-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "text-[19px] font-bold",
                children: "Choose Your Template"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid grid-cols-4 gap-4 mt-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Card, {
                        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* TemplateNFT */.KH, {}),
                        title: "Classic DAO",
                        selected: selectedTemplateIndex === 0,
                        onClick: function() {
                            return setSelectedTemplateIndex(0);
                        },
                        list: [
                            "Multi-sig wallet",
                            "Access and manage it anywhere ",
                            "DAO payouts made effortless",
                            "DAO templates", 
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Card, {
                        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* TemplateOS */.ub, {}),
                        title: "DeSci Project",
                        selected: selectedTemplateIndex === 1,
                        onClick: function() {
                            return setSelectedTemplateIndex(1);
                        },
                        list: [
                            "Fund your Open Source project",
                            "Interoperability built in",
                            "Traditional voted governance",
                            "Reputational System", 
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Card, {
                        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* TempalateExclusiveContent */.JF, {}),
                        title: "NFT Project",
                        selected: selectedTemplateIndex === 2,
                        onClick: function() {
                            return setSelectedTemplateIndex(2);
                        },
                        list: [
                            "Own your own Verse",
                            "Unlock New economies",
                            "Mint Your 3D Land",
                            "Access to Solarity's Collection", 
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Card, {
                        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* TemplateCommunity */.C1, {}),
                        selected: selectedTemplateIndex === 3,
                        onClick: function() {
                            return setSelectedTemplateIndex(3);
                        },
                        title: "Unions",
                        list: [
                            "NFT-DAO governance",
                            "Based on reputational system",
                            "Get hired instantly",
                            "Create DAO Unions", 
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ var Template = (MarketPlaceCreate);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/assets/images/dao-universe.png
var dao_universe = __webpack_require__(3862);
// EXTERNAL MODULE: ./src/components/TagsCollection/index.tsx
var TagsCollection = __webpack_require__(6546);
;// CONCATENATED MODULE: ./src/modules/Marketplace/Create/Steps/Size.tsx





function Size_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function Size_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function Size_iterableToArrayLimit(arr, i) {
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
function Size_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Size_slicedToArray(arr, i) {
    return Size_arrayWithHoles(arr) || Size_iterableToArrayLimit(arr, i) || Size_unsupportedIterableToArray(arr, i) || Size_nonIterableRest();
}
function Size_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return Size_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Size_arrayLikeToArray(o, minLen);
}
var Size = function() {
    var ref = Size_slicedToArray(react.useState(""), 2), size1 = ref[0], setSize = ref[1];
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex justify-between gap-4 p-10 pr-16 transition-all ease-in border cursor-pointer border-brandblack rounded-3xl ga-2",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                src: dao_universe/* default */.Z,
                alt: "dao universe",
                placeholder: "blur"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col max-w-md",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "font-bold text-[19px]",
                        children: "Choose the size of your Verse."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "mt-8 ",
                        children: "Size"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "mt-2",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TagsCollection/* default */.Z, {
                            tags: [
                                "Tiny",
                                "Small",
                                "Medium",
                                "Big",
                                "Massive"
                            ],
                            onChange: function(size) {
                                return setSize(size);
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center mt-10",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: "N. of Members"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                type: "number",
                                placeholder: "Size",
                                className: "w-24 ml-16 text-lg font-bold rounded-full input bg-brandblack"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ var Steps_Size = (Size);

;// CONCATENATED MODULE: ./src/assets/images/dao-universe-blue.png
/* harmony default export */ var dao_universe_blue = ({"src":"/_next/static/media/dao-universe-blue.eca1b207.png","height":334,"width":334,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA60lEQVR42mMAAb+YI8KByWeWhmZdeZTc9+5My/GvPiBxxqCbTAzC/v/ZnAO2nvYMWf3fP/bA/4jcR/+TOx7+b9zy3Aus29hmTaq9x5r/3qEbf4amnP0XmnrmZ0Dkof/RlaePgxUYmC1psbRb+t8raNvvsJRL/yNz7/8Lzbj93zNy012P1vOCDEZmcz1MzOf8t3Va9c/db8dv79BDP92D9vy3cpm1lcF2EwvEGpMJM0xMJ/83NZ/+39xqNpCe/FJNu9WZAQmw6uk3xRsYtMzU029vl1FqtWJgCGcHy1hYdjMiKWQCYqCxNUwwAQBf0V682x9gXQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/modules/Marketplace/Create/Steps/Assign.tsx







var Assign = function() {
    var ref = (0,react.useState)(null), selectedPentagons = ref[0], setSelectedPentagons = ref[1];
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col max-w-3xl -mt-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "font-bold text-[19px]",
                children: "Choose the type of DAO or Union"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                className: "text-xs text-gray-950",
                children: [
                    "Web3 is showing us how if rightly incentivize, people will be working on their passion and expand their ecosystem.",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                    "We believe the next big step is DAO inter operability (unions) and easy payouts."
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex mt-4 gap-[40px]",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classnames_default()(selectedPentagons == "for-profit" ? "bg-brandblack" : "", "flex flex-col items-center gap-4 p-8 transition-all ease-in border cursor-pointer select-none border-brandblack rounded-3xl hover:bg-brandblack"),
                        onClick: function() {
                            setSelectedPentagons("for-profit");
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center justify-center gap-4",
                                children: [
                                    selectedPentagons === "for-profit" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* CheckedRadio */.gf, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* UncheckedRaido */.AT, {}),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "font-bold text-[19px]",
                                        children: "Verse (for profit)"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                src: dao_universe/* default */.Z,
                                alt: "dao universe",
                                placeholder: "blur",
                                height: 200,
                                width: 200
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-lg font-bold",
                                children: "DAO of Members"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-col gap-7",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                width: "39",
                                                height: "36",
                                                viewBox: "0 0 39 36",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                    d: "M1.54218 13.6652L19.5 0.618033L37.4578 13.6652L30.5985 34.7758H8.40146L1.54218 13.6652Z",
                                                    fill: "#886A8B",
                                                    stroke: "white"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-lg font-bold",
                                                children: "= DAO Representatives"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                width: "35",
                                                height: "39",
                                                viewBox: "0 0 35 39",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                    d: "M9.2675 5.24091L17.5 0.574731L25.7325 5.24091L33.8898 10.0374L33.965 19.5L33.8898 28.9626L25.7325 33.7591L17.5 38.4253L9.2675 33.7591L1.11024 28.9626L1.03502 19.5L1.11024 10.0374L9.2675 5.24091Z",
                                                    fill: "#886A8B",
                                                    stroke: "white"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-xl font-bold",
                                                children: "= Share Holders"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classnames_default()(selectedPentagons == "non-profit" ? "bg-brandblack" : "", " flex flex-col items-center gap-4 p-10 transition-all ease-in border cursor-pointer select-none border-brandblack rounded-3xl hover:bg-brandblack"),
                        onClick: function() {
                            setSelectedPentagons("non-profit");
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center justify-center gap-4",
                                children: [
                                    selectedPentagons === "non-profit" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* CheckedRadio */.gf, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* UncheckedRaido */.AT, {}),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "font-bold text-[19px]",
                                        children: "Union (non profit)"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                src: dao_universe_blue,
                                alt: "dao universe",
                                placeholder: "blur",
                                height: 200,
                                width: 200
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-lg font-bold",
                                children: "DAO of DAOs"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-col gap-7",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                                width: "39",
                                                height: "36",
                                                viewBox: "0 0 39 36",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                        d: "M19.5 0L38.0456 13.4742L30.9618 35.2758H8.03819L0.954397 13.4742L19.5 0Z",
                                                        fill: "#464CA2"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                        d: "M1.54218 13.6652L19.5 0.618033L37.4578 13.6652L30.5985 34.7758H8.40146L1.54218 13.6652Z",
                                                        stroke: "white",
                                                        "stroke-Opacity": "0.41"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-xl font-bold",
                                                children: "= DAO Departments"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-7",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                                width: "35",
                                                height: "39",
                                                viewBox: "0 0 35 39",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                        d: "M17.5 0L25.9825 4.80788L34.3875 9.75L34.465 19.5L34.3875 29.25L25.9825 34.1921L17.5 39L9.0175 34.1921L0.612505 29.25L0.535 19.5L0.612505 9.75L9.0175 4.80788L17.5 0Z",
                                                        fill: "#464CA2"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                        d: "M9.2675 5.24091L17.5 0.574731L25.7325 5.24091L33.8898 10.0374L33.965 19.5L33.8898 28.9626L25.7325 33.7591L17.5 38.4253L9.2675 33.7591L1.11024 28.9626L1.03502 19.5L1.11024 10.0374L9.2675 5.24091Z",
                                                        stroke: "white",
                                                        "stroke-Opacity": "0.41"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-xl font-bold",
                                                children: "= Members"
                                            })
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
/* harmony default export */ var Steps_Assign = (Assign);

;// CONCATENATED MODULE: ./src/assets/images/dao-organization-economic.png
/* harmony default export */ var dao_organization_economic = ({"src":"/_next/static/media/dao-organization-economic.64aaeeed.png","height":425,"width":334,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAuUlEQVR42mPIjVonVZK2tZkBCmb4L2ZhgIEzx2/7b128NWjNxFUSDECQw1DFyMDA4KozvWHW/ZVTVv1f0rrsz5aC3QUMIDDFp2FfXVrn/yVdi78vbF/wf17dkvsrJy9kZyh0Kb6R6F3yvyu392drdvf/vMia11VxDcoMLtbpNYF2mf/DHfOAOPd/kHXGFkfxAF4GEAi0Tq8OtMk452eZutRI3teQgYGBkQEB5PgYGMR4HAXDmBgYGBgA96xD2B4yLe0AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/modules/Marketplace/Create/Steps/Economics.tsx




var Economics = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col -mt-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "text-lg font-bold",
                children: "Economics Setup"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                className: "text-xs text-gray-950",
                children: [
                    "It is important for a Union or a DAO to have a way to easily and rightfully distribute their treasury through a Reputational System choosen by the DAO,",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                    " and to have different Membership Tiers for the different services and access they are going to offer."
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex gap-5 mt-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col min-w-md",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "ml-8 text-lg font-bold ",
                                children: "Verse"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                src: dao_organization_economic,
                                alt: "dao universe",
                                placeholder: "blur",
                                width: 200,
                                height: 250,
                                className: "mt-16 "
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-col gap-2 mt-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-lg font-bold",
                                        children: "Membership Tiers"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "max-w-sm text-xs text-gray-950 ",
                                        children: "Here you can decide different levels of membership for your DAOverse and what they unlock."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col w-full gap-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "grid grid-cols-4 gap-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "flex items-center",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "text-sm",
                                                            children: "Tier 0:"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex col-span-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "string",
                                                                placeholder: "Access",
                                                                className: "w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                                                            }),
                                                            " ",
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "number",
                                                                placeholder: "0.5 SOL",
                                                                className: "w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "flex items-center gap-4 text-sm font-semibold"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "grid grid-cols-4 gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "flex items-center",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "text-sm",
                                                            children: "Tier 1:"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex col-span-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "string",
                                                                placeholder: "Access",
                                                                className: "w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                                                            }),
                                                            " ",
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "number",
                                                                placeholder: "1.0 SOL",
                                                                className: "w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "grid grid-cols-4 gap-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "flex items-center",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "text-sm",
                                                            children: "Tier 2:"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex col-span-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "string",
                                                                placeholder: "Access",
                                                                className: "w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                                                            }),
                                                            " ",
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "number",
                                                                placeholder: "1.5 SOL",
                                                                className: "w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-col gap-8 mt-8",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "font-bold text-[19px]",
                                        children: "Reputational system"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "max-w-sm text-xs text-gray-950 ",
                                        children: "Here you can decide with what criteria members of your DAO will be rewarded"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col w-full gap-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "grid grid-cols-4 gap-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "flex items-center",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "text-sm",
                                                            children: "Role 1:"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex col-span-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "string",
                                                                placeholder: "Criteria",
                                                                className: "w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                                                            }),
                                                            " ",
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "number",
                                                                placeholder: "Payroll",
                                                                className: "w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "grid grid-cols-4 gap-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "flex items-center",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "text-sm",
                                                            children: "Role 2:"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex col-span-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "string",
                                                                placeholder: "Criteria",
                                                                className: "w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                                                            }),
                                                            " ",
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "number",
                                                                placeholder: "Payroll",
                                                                className: "w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "grid grid-cols-4 gap-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "flex items-center",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "text-sm",
                                                            children: "Role 3:"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex col-span-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "string",
                                                                placeholder: "Criteria",
                                                                className: "w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                                                            }),
                                                            " ",
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                type: "number",
                                                                placeholder: "Payroll",
                                                                className: "w-32 text-lg font-bold rounded-full input bg-brandblack input-sm"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
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
/* harmony default export */ var Steps_Economics = (Economics);

;// CONCATENATED MODULE: ./src/modules/Marketplace/Create/Steps/Review.tsx




function Review_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function Review_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function Review_iterableToArrayLimit(arr, i) {
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
function Review_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Review_slicedToArray(arr, i) {
    return Review_arrayWithHoles(arr) || Review_iterableToArrayLimit(arr, i) || Review_unsupportedIterableToArray(arr, i) || Review_nonIterableRest();
}
function Review_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return Review_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Review_arrayLikeToArray(o, minLen);
}
var Review = function() {
    var ref = Review_slicedToArray((0,esm/* useAtom */.KO)(createFormAtom), 2), form = ref[0], setForm = ref[1];
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col max-w-3xl gap-4 p-5 border border-brandblack rounded-3xl",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "font-bold text-brand-lg",
                children: "Verse Created"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                className: "flex gap-4 text-brand-lg",
                children: [
                    "Final Review",
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                        width: "28",
                        height: "28",
                        viewBox: "0 0 28 28",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                                cx: "14",
                                cy: "14",
                                r: "13.5",
                                stroke: "white"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                d: "M10.5859 11.1924H11.8384C11.9189 10.145 12.6221 9.49316 13.728 9.49316C14.8193 9.49316 15.5225 10.1597 15.5225 11.0679C15.5225 11.8516 15.1929 12.313 14.3433 12.833C13.3398 13.4336 12.8711 14.0928 12.8784 15.0596V15.7334H14.1602V15.2573C14.1602 14.4883 14.4238 14.0781 15.354 13.5288C16.2915 12.9648 16.8848 12.1519 16.8848 11.002C16.8848 9.49316 15.625 8.35059 13.7793 8.35059C11.7212 8.35059 10.6665 9.61035 10.5859 11.1924ZM13.6182 19.1318C14.2114 19.1318 14.6289 18.707 14.6289 18.1138C14.6289 17.5132 14.2114 17.0884 13.6182 17.0884C13.0249 17.0884 12.6001 17.5132 12.6001 18.1138C12.6001 18.707 13.0249 19.1318 13.6182 19.1318Z",
                                fill: "white"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        className: "flex items-center justify-center w-32 h-32 rounded-full bg-brandblack",
                        children: form.file && // eslint-disable-next-line @next/next/no-img-element
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            alt: form.file.name,
                            src: form.file.content,
                            className: "absolute z-0 w-32 h-32 rounded-full"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: " text-brand-md text-gray-950",
                                children: "Verse Name"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: " text-brand-lg",
                                children: form.name
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex flex-col max-w-sm ",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex justify-between ",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: " text-brand-md text-gray-950",
                                    children: "Description\xa0\xa0\xa0\xa0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: " text-brand-lg",
                                    children: form.description
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex justify-between ",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: " text-brand-md text-gray-950",
                                    children: "Verse Type"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: " text-brand-lg",
                                    children: "NFT project"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex flex-col max-w-3xl",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "grid grid-cols-4 gap-6",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between px-6 py-8 bg-brandblack rounded-3xl",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: "text-4xl font-bold",
                                            children: [
                                                form.support,
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "ml-2 text-brand-lg",
                                                    children: "%"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: " text-brand-md text-gray-950",
                                            children: "Support"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                        width: "22",
                                        height: "9",
                                        viewBox: "0 0 22 9",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            d: "M1 3.11417L7 3.09417C7.75 3.09417 8.59 3.66417 8.87 4.36417L10.01 7.24417C10.27 7.89417 10.68 7.89417 10.94 7.24417L13.23 1.43417C13.45 0.874171 13.86 0.854171 14.14 1.38417L15.18 3.35417C15.49 3.94417 16.29 4.42417 16.95 4.42417H21.01",
                                            stroke: "#11C278",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between px-6 py-8 bg-brandblack rounded-3xl",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: "text-4xl font-bold",
                                            children: [
                                                form.quorum,
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "ml-2 text-brand-lg",
                                                    children: "%"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: " text-brand-md text-gray-950",
                                            children: "Quorum"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 20 20",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            d: "M5.07492 11.0667H7.64992V17.0667C7.64992 18.4667 8.40826 18.75 9.33326 17.7L15.6416 10.5333C16.4166 9.65835 16.0916 8.93335 14.9166 8.93335H12.3416V2.93335C12.3416 1.53335 11.5833 1.25002 10.6583 2.30002L4.34992 9.46668C3.58326 10.35 3.90826 11.0667 5.07492 11.0667Z",
                                            stroke: "#6163FF",
                                            strokeWidth: "1.5",
                                            strokeMiterlimit: "10",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between px-6 py-8 bg-brandblack rounded-3xl",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "text-4xl font-bold",
                                            children: "1"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: " text-brand-md text-gray-950",
                                            children: "Members"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                        width: 24,
                                        height: 24,
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            d: "M18 7.16a.605.605 0 0 0-.19 0 2.573 2.573 0 0 1-2.48-2.58c0-1.43 1.15-2.58 2.58-2.58a2.58 2.58 0 0 1 2.58 2.58A2.589 2.589 0 0 1 18 7.16ZM16.97 14.44c1.37.23 2.88-.01 3.94-.72 1.41-.94 1.41-2.48 0-3.42-1.07-.71-2.6-.95-3.97-.71M5.97 7.16c.06-.01.13-.01.19 0a2.573 2.573 0 0 0 2.48-2.58C8.64 3.15 7.49 2 6.06 2a2.58 2.58 0 0 0-2.58 2.58c.01 1.4 1.11 2.53 2.49 2.58ZM7 14.44c-1.37.23-2.88-.01-3.94-.72-1.41-.94-1.41-2.48 0-3.42 1.07-.71 2.6-.95 3.97-.71M12 14.63a.605.605 0 0 0-.19 0 2.573 2.573 0 0 1-2.48-2.58c0-1.43 1.15-2.58 2.58-2.58a2.58 2.58 0 0 1 2.58 2.58c-.01 1.4-1.11 2.54-2.49 2.58ZM9.09 17.78c-1.41.94-1.41 2.48 0 3.42 1.6 1.07 4.22 1.07 5.82 0 1.41-.94 1.41-2.48 0-3.42-1.59-1.06-4.22-1.06-5.82 0Z",
                                            stroke: "#43DFF6",
                                            strokeWidth: 1.5,
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between px-6 py-8 bg-brandblack rounded-3xl",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: "text-4xl font-bold",
                                            children: [
                                                "-",
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "ml-2 text-brand-lg",
                                                    children: "SOL"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: " text-brand-md text-gray-950",
                                            children: "Free"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {})
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ var Steps_Review = (Review);

;// CONCATENATED MODULE: ./src/modules/Marketplace/Create/index.tsx










var Footer = function() {
    var ref = (0,react_use_wizard_esm/* useWizard */.a)(), nextStep = ref.nextStep, previousStep = ref.previousStep, isLoading = ref.isLoading, activeStep = ref.activeStep, stepCount = ref.stepCount, isLastStep = ref.isLastStep, isFirstStep = ref.isFirstStep;
    console.log("Rendering footer");
    console.log({
        activeStep: activeStep
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mt-10 flex justify-between w-full",
        children: [
            !isFirstStep ? /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                className: "rounded-full btn btn-secondary",
                onClick: previousStep,
                children: "Back"
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {}),
            !isLastStep ? /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                className: "rounded-full btn btn-secondary",
                onClick: nextStep,
                children: "Continue"
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {}),
            isLastStep && /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                className: "rounded-full btn btn-secondary",
                children: "Finish"
            })
        ]
    }));
};
var Create = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "relative ",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_use_wizard_esm/* Wizard */.e, {
            footer: /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer, {}),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Steps_Sqad, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Steps_Assign, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Template, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Steps_Size, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Steps_Economics, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Steps_Voting, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Steps_Review, {})
            ]
        })
    }));
};
/* harmony default export */ var Marketplace_Create = (Create);

;// CONCATENATED MODULE: ./src/pages/marketplace/create.tsx




var Index = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Layout/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Marketplace_Create, {})
    }));
};
/* harmony default export */ var create = (Index);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6419,8409,5090,9774,2888,179], function() { return __webpack_exec__(9429); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);