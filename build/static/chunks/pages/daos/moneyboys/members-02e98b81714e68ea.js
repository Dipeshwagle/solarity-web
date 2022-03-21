(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8580],{

/***/ 2325:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/daos/moneyboys/members",
      function () {
        return __webpack_require__(8125);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 9688:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ 8125:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ members; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/Layout/index.tsx + 8 modules
var Layout = __webpack_require__(5090);
// EXTERNAL MODULE: ./src/modules/DAOS/Base.tsx + 1 modules
var Base = __webpack_require__(7844);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/components/MembersList/Member.tsx



var Member = function(param) {
    var name = param.name, post = param.post, imageUrl = param.imageUrl, points = param.points;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "rounded-2xl",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                    src: imageUrl,
                    alt: "name",
                    width: 100,
                    height: 76,
                    className: "rounded-2xl "
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "text-sm font-semibold",
                children: name
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "text-sm text-gray-950",
                children: post
            }),
            points && /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                className: "mt-2 text-xs normal-case rounded-full btn btn-sm bg-[#19a0fd] bg-opacity-10",
                children: [
                    points,
                    " Points"
                ]
            })
        ]
    }));
};
/* harmony default export */ var MembersList_Member = (Member);

;// CONCATENATED MODULE: ./src/components/MembersList/MemberVote.tsx



var ColorMapping = {
    info: "bg-[#438Bf6]",
    warning: "bg-[#EC903C]",
    general: 'bg-[#6163FF]'
};
var MemberVote_Member = function(param) {
    var name = param.name, post = param.post, imageUrl = param.imageUrl, points = param.points, votes = param.votes, voteColor = param.voteColor;
    var _voteColor;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "grid items-center w-full grid-cols-9",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "rounded-2xl",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                    src: imageUrl,
                    height: 48,
                    width: 48,
                    className: "border border-white rounded-[48px]",
                    alt: "avatar"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col col-span-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-sm font-semibold",
                        children: name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-sm text-gray-950",
                        children: post
                    })
                ]
            }),
            votes && voteColor && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col col-span-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "text-xs",
                        children: [
                            points,
                            " Points"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("progress", {
                            className: "w-56 progress ".concat((_voteColor = ColorMapping[voteColor]) !== null && _voteColor !== void 0 ? _voteColor : "", " h-[3px]"),
                            value: votes,
                            max: "100"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "col-span-2 ",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    className: "text-xs rounded-full btn btn-sm btn-primary ",
                    children: "Vote Now"
                })
            })
        ]
    }));
};
/* harmony default export */ var MemberVote = (MemberVote_Member);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/components/MembersList/index.tsx






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
var Memebers = function(param) {
    var title = param.title, members = param.members, vote = param.vote;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-8 p-8 bg-brandblack rounded-3xl",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "text-lg font-bold",
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classnames_default()("flex", vote ? "flex-col gap-4" : "gap-16"),
                children: !!members && members.map(function(member, index) {
                    return vote ? /*#__PURE__*/ (0,react.createElement)(MemberVote, _objectSpread({}, member, {
                        key: index
                    })) : /*#__PURE__*/ (0,react.createElement)(MembersList_Member, _objectSpread({}, member, {
                        key: index
                    }));
                })
            })
        ]
    }));
};
/* harmony default export */ var MembersList = (Memebers);

// EXTERNAL MODULE: ./src/data/daos.ts
var daos = __webpack_require__(170);
;// CONCATENATED MODULE: ./src/modules/DAOS/Members.tsx





function Members_defineProperty(obj, key, value) {
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
function Members_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            Members_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
var Home = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-col gap-8 mb-20",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(MembersList, Members_objectSpread({}, daos/* Members.0 */.iu[0])),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(MembersList, Members_objectSpread({}, daos/* Members.1 */.iu[1])),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(MembersList, Members_objectSpread({}, daos/* Members.2 */.iu[2]))
            ]
        })
    }));
};
/* harmony default export */ var Members = (Home);

// EXTERNAL MODULE: ./src/modules/DAOS/Hero.tsx
var Hero = __webpack_require__(6098);
// EXTERNAL MODULE: ./src/modules/DAOS/Sidebar/Voting.tsx
var Voting = __webpack_require__(5533);
;// CONCATENATED MODULE: ./src/pages/daos/moneyboys/members.tsx






var Index = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Layout/* default */.Z, {
        heroContent: /*#__PURE__*/ (0,jsx_runtime.jsx)(Hero/* default */.Z, {}),
        rightSidebar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Voting/* default */.Z, {}),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Members, {})
    }));
};
/* harmony default export */ var members = (Index);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6446,5445,4617,6419,7143,5090,170,7061,9774,2888,179], function() { return __webpack_exec__(2325); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);