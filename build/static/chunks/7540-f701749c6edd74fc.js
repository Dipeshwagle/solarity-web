"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7540],{

/***/ 7016:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ AframeComp1; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);


function AframeComp1() {
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
                        id: "bro",
                        src: "/monke/scene.gltf"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-marker", {
                    preset: "hiro",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-entity", {
                        position: "0 0 0",
                        rotation: "0 0 0",
                        scale: "0.05 0.05 0.05",
                        "gltf-model": "/examples/image-tracking/nft/trex/scene.gltf"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-entity", {
                    camera: true
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-gltf-model", {
                    src: "#bro",
                    scale: "0.1 0.1 0.1",
                    position: "-2.3 1.2 -5",
                    rotation: "0 70 0"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-sky", {
                    src: "https://media.istockphoto.com/photos/clear-sunset-sky-background-texture-with-copyspace-and-natural-picture-id936641980?k=20&m=936641980&s=170667a&w=0&h=Qg9D6OjvEp-HW90PG7bjWGEHREKzZ4t6ci_mn1zwmvQ="
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        children: "load..."
    }));
};


/***/ }),

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

/***/ 5566:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ AframeComp7; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);


function AframeComp7() {
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
                        id: "nono",
                        src: "/mine/scene.gltf"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-entity", {
                    rotation: "0 0 0",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-gltf-model", {
                        src: "#nono",
                        scale: "1 1 1",
                        position: "0 7 -130",
                        rotation: "0 70 0"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-entity", {
                    camera: true
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-sky", {
                    src: "/zio.jpg"
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        children: "load..."
    }));
};


/***/ }),

/***/ 324:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ AframeComp8; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);


function AframeComp8() {
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
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-entity", {
                    id: "rig",
                    position: "25 10 0",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-entity", {
                        id: "camera",
                        camera: true,
                        "look-controls": true
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-assets", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-asset-item", {
                        id: "affaf",
                        src: "/asia/scene.gltf"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-entity", {
                    rotation: "0 0 0",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-gltf-model", {
                        src: "#affaf",
                        scale: "0.12 0.12 0.12",
                        position: "0 -2.4 -4 ",
                        rotation: "0 0 0",
                        animation__rot: "property:rotation; dur:5000; to:0 360 0; loop: true; easing:linear;"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-sky", {
                    src: "https://media.istockphoto.com/photos/dark-background-with-a-spotlight-in-the-center-picture-id1002995898?k=20&m=1002995898&s=170667a&w=0&h=8yWv-UOChWMCefA-Md0KkzyFKnjSjzWA7kOAVP1mUUI="
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        children: "load..."
    }));
};


/***/ }),

/***/ 1920:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ AframeComp9; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);


function AframeComp9() {
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
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-entity", {
                    id: "rig",
                    position: "25 10 0",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-entity", {
                        id: "camera",
                        camera: true,
                        "look-controls": true
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-assets", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-asset-item", {
                        id: "eqeq",
                        src: "/vr(1).glb"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-entity", {
                    rotation: "0 0 0",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-gltf-model", {
                        src: "#eqeq",
                        scale: "2 2 2",
                        position: "0 1.3 -1 ",
                        rotation: "0 0 0",
                        animation__rot: "property:rotation; dur:5000; to:0 360 0; loop: true; easing:linear;"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a-sky", {
                    src: "https://media.istockphoto.com/photos/dark-background-with-a-spotlight-in-the-center-picture-id1002995898?k=20&m=1002995898&s=170667a&w=0&h=8yWv-UOChWMCefA-Md0KkzyFKnjSjzWA7kOAVP1mUUI="
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        children: "load..."
    }));
};


/***/ }),

/***/ 7540:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Home_Posts; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/components/Post/Tags.tsx


var Tags = function(param1) {
    var tags = param1.tags;
    var tagsTypeMapping = {
        secondary: "bg-secondary",
        info: "bg-error",
        error: "bg-error",
        warning: "bg-warning"
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "flex gap-1",
        children: tags.map(function(param, index) {
            var title = param.title, type = param.type;
            /*#__PURE__*/ return (0,jsx_runtime.jsx)("button", {
                className: "mt-2 rounded-full badge ".concat(tagsTypeMapping[type], " text-white"),
                children: title
            }, index);
        })
    }));
};
/* harmony default export */ var Post_Tags = (Tags);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/assets/images/placeholder/avatar_small.png
/* harmony default export */ var avatar_small = ({"src":"/_next/static/media/avatar_small.85764696.png","height":24,"width":24,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA6klEQVR42mOAAl0jJaH9OuI8P+yUhH/ZqwntAYrpwCR1UhyV3s2LNfqvzMP230Nd9P+kEN3/Aboi74Byegzq0tx7liaZ/I9QEvgJFPjPCMTGPBw/cxyU/pvI8+5nKHJT/rUoRv8/SFKBn/W/NBfrf1021v+uikL/3bTEfjCk28v9qPFVBSsQ5WT+z8XGBGbXe6n8T7aX+8UgxsWyX0aADST4k42R6b8gGzOYHWkt999VV3QPAxDoMTEwvONgYvrPzMD4nwGIBVjBit7BfSLPw6LDwci4h4mB8RczI+MPFgam/WrinHoMDAwMAObpRaw6qP1UAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 30 modules
var Icons = __webpack_require__(467);
;// CONCATENATED MODULE: ./src/components/Post/Footer.tsx






var Footer = function(param) {
    var type = param.type;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "border-t justify-between border-[hsl(210,9%,9%)] flex px-10 py-5 bg-[#1F2125] border-l border-r border-l-darkcharcoal border-r-darkcharcoal w-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex gap-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center justify-center gap-3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-xs text-gray-950",
                                children: "Posted by"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(next_link["default"], {
                                        href: "/user/123",
                                        passHref: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            className: "flex flex-row",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                                src: avatar_small,
                                                alt: "user avatar"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "ml-1 text-sm text-secondary",
                                        children: "u/rayvtoriq_"
                                    })
                                ]
                            })
                        ]
                    }),
                    type !== "announcement" && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center justify-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* Download */.UW, {}),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-xs text-gray-950",
                                        children: "808 Downloads"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center justify-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* Love */.jW, {}),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-xs text-gray-950",
                                        children: "2.5k Likes"
                                    })
                                ]
                            })
                        ]
                    }),
                    type === "announcement" && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex items-center justify-center gap-3",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "text-xs text-gray-950",
                            children: "9 hours ago"
                        })
                    }),
                    type === "featured" && /*#__PURE__*/ (0,jsx_runtime.jsx)(next_link["default"], {
                        href: "/#",
                        passHref: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                            className: "ml-1 text-sm text-secondary",
                            children: "Try in your Room"
                        })
                    }),
                    type === "normal" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center justify-center gap-3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* Share */.mB, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-xs text-gray-950",
                                children: "101 Shares"
                            })
                        ]
                    })
                ]
            }),
            type === "announcement" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                className: "gap-3 text-xs font-bold btn btn-sm rounded-3xl bg-[#1d3040] ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* Calendar */.f, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "font-normal text-white normal-case",
                                children: "End of vote:"
                            }),
                            " ",
                            "08-13-00"
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ var Post_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/AframeComp/index.tsx


function AframeComp() {
    var ref = (0,react.useState)(false), mounted = ref[0], setMounted = ref[1];
    (0,react.useEffect)(function() {
        __webpack_require__(5569);
        setMounted(true);
    }, []);
    if (mounted) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("a-scene", {
            arjs: "",
            embedded: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-entity", {
                    camera: true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-assets", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a-asset-item", {
                        id: "ciao",
                        src: "/slot/scene.gltf"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-entity", {
                    camera: true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-gltf-model", {
                    src: "#ciao",
                    scale: "0.06 0.06 0.06",
                    position: "3 -5 -7",
                    rotation: "0 -50 0"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-sky", {
                    src: "https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhciUyMHRleHR1cmV8ZW58MHx8MHx8&w=1000&q=80"
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: "load..."
    }));
};

// EXTERNAL MODULE: ./src/components/AframeComp1/index.tsx
var AframeComp1 = __webpack_require__(7016);
// EXTERNAL MODULE: ./src/components/AframeComp2/index.tsx
var AframeComp2 = __webpack_require__(9688);
;// CONCATENATED MODULE: ./src/components/AframeComp3/index.tsx


function AframeComp4() {
    var ref = (0,react.useState)(false), mounted = ref[0], setMounted = ref[1];
    (0,react.useEffect)(function() {
        __webpack_require__(5569);
        setMounted(true);
    }, []);
    if (mounted) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("a-scene", {
            arjs: "",
            embedded: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-entity", {
                    camera: true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-assets", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a-asset-item", {
                        id: "bastardo",
                        src: "/room/scene.gltf"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-entity", {
                    camera: true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-entity", {
                    rotation: "0 -105 0",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a-gltf-model", {
                        src: "#bastardo",
                        scale: "1 1 1",
                        position: "0 -40 0",
                        rotation: "0 -35 0"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-sky", {
                    src: "https://t4.ftcdn.net/jpg/03/38/03/31/360_F_338033132_xBAEbVbjqYOkxtpyhWF5CzdyiecmRp2F.jpg"
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: "load..."
    }));
};

;// CONCATENATED MODULE: ./src/components/AframeComp4/index.tsx


function AframeComp3() {
    var ref = (0,react.useState)(false), mounted = ref[0], setMounted = ref[1];
    (0,react.useEffect)(function() {
        __webpack_require__(5569);
        setMounted(true);
    }, []);
    if (mounted) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("a-scene", {
            arjs: "",
            embedded: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-entity", {
                    id: "rig",
                    position: "25 10 0",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a-entity", {
                        id: "camera",
                        camera: true,
                        "look-controls": true
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-assets", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a-asset-item", {
                        id: "tio",
                        src: "/alien/scene.gltf"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-entity", {
                    rotation: "0 0 0",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a-gltf-model", {
                        src: "#tio",
                        scale: "2 2 2",
                        position: "0 1.6 -0.7 ",
                        rotation: "0 0 0",
                        animation__rot: "property:rotation; dur:5000; to:0 360 0; loop: true; easing:linear;"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-sky", {
                    src: "https://media.istockphoto.com/photos/dark-background-with-a-spotlight-in-the-center-picture-id1002995898?k=20&m=1002995898&s=170667a&w=0&h=8yWv-UOChWMCefA-Md0KkzyFKnjSjzWA7kOAVP1mUUI="
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: "load..."
    }));
};

;// CONCATENATED MODULE: ./src/components/AframeComp5/index.tsx


function AframeComp5() {
    var ref = (0,react.useState)(false), mounted = ref[0], setMounted = ref[1];
    (0,react.useEffect)(function() {
        __webpack_require__(5569);
        setMounted(true);
    }, []);
    if (mounted) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("a-scene", {
            arjs: "",
            embedded: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-cursor", {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-entity", {
                    camera: true,
                    "look-controls": true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-assets", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a-asset-item", {
                        id: "nonno",
                        src: "/super mario/scene.gltf"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-entity", {
                    rotation: "0 0 0",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a-gltf-model", {
                        src: "#nonno",
                        scale: "1 1 1",
                        position: "0 -5 0"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-entity", {
                    camera: true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-sky", {
                    src: "https://cdna.artstation.com/p/assets/images/images/027/829/656/medium/porntap-paenmook-nsmbu-sky-background-1.jpg?1592674343∂"
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: "load..."
    }));
};

// EXTERNAL MODULE: ./src/components/AframeComp7/index.tsx
var AframeComp7 = __webpack_require__(5566);
// EXTERNAL MODULE: ./src/components/AframeComp8/index.tsx
var AframeComp8 = __webpack_require__(324);
// EXTERNAL MODULE: ./src/components/AframeComp9/index.tsx
var AframeComp9 = __webpack_require__(1920);
;// CONCATENATED MODULE: ./src/components/Post/index.tsx















var index = function(param) {
    var _data = param.data, title = _data.title, subtitle = _data.subtitle, likes = _data.likes, vr = _data.vr, vr1 = _data.vr1, vr2 = _data.vr2, vr3 = _data.vr3, vr4 = _data.vr4, vr5 = _data.vr5, vr6 = _data.vr6, vr7 = _data.vr7, vr8 = _data.vr8, vr9 = _data.vr9, type = _data.type, tags = _data.tags, progress = _data.progress, user = _data.user;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex gap-4 bg-[#1F2125] px-5 py-3 border-l border-darkcharcoal border-r ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "relative mt-3 w-14 h-14",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                src: user.avatar,
                                alt: title,
                                layout: "fill",
                                className: "rounded-full"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col w-full",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "font-bold text-secondary",
                                children: user.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-start justify-between w-full",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "flex",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: classnames_default()(type === "featured" ? "text-base" : "text-xl", "font-bold"),
                                                    dangerouslySetInnerHTML: {
                                                        __html: title
                                                    }
                                                })
                                            }),
                                            tags && /*#__PURE__*/ (0,jsx_runtime.jsx)(Post_Tags, {
                                                tags: tags
                                            })
                                        ]
                                    }),
                                    type !== "announcement" ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col items-end",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-sm font-bold",
                                                children: likes
                                            }),
                                            type !== "featured" && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "text-xs text-gray-950",
                                                children: "9 hours ago"
                                            })
                                        ]
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        className: "rounded-full btn btn-primary",
                                        children: "ACTIVE"
                                    })
                                ]
                            }),
                            subtitle && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "mt-2 text-sm leading-5",
                                dangerouslySetInnerHTML: {
                                    __html: subtitle
                                }
                            }),
                            progress && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center justify-end w-full gap-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: "text-xs text-gray-950",
                                        children: [
                                            progress,
                                            "% Completed"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("progress", {
                                        className: "w-40 h-1 progress progress-success h",
                                        value: progress,
                                        max: "100"
                                    })
                                ]
                            }),
                            vr && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "relative w-full h-[229px] rounded-2xl mt-4",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AframeComp, {})
                            }),
                            vr1 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative w-full h-[229px] rounded-2xl mt-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AframeComp1/* default */.Z, {}),
                                    vr1.price && /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        className: "absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary",
                                        children: [
                                            vr1.price,
                                            " $VRS"
                                        ]
                                    })
                                ]
                            }),
                            vr2 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative w-full h-[229px] rounded-2xl mt-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AframeComp2/* default */.Z, {}),
                                    vr2.price && /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        className: "absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary",
                                        children: [
                                            vr2.price,
                                            " $VRS"
                                        ]
                                    })
                                ]
                            }),
                            vr3 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative w-full h-[229px] rounded-2xl mt-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AframeComp4, {}),
                                    vr3.price && /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        className: "absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary",
                                        children: [
                                            vr3.price,
                                            " $VRS"
                                        ]
                                    })
                                ]
                            }),
                            vr4 && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "relative w-full h-[229px] rounded-2xl mt-4",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AframeComp3, {})
                            }),
                            vr5 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative w-full h-[229px] rounded-2xl mt-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AframeComp5, {}),
                                    vr5.price && /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        className: "absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary",
                                        children: [
                                            vr5.price,
                                            " $VRS"
                                        ]
                                    })
                                ]
                            }),
                            vr7 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative w-full h-[229px] rounded-2xl mt-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AframeComp7/* default */.Z, {}),
                                    vr7.price && /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        className: "absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary",
                                        children: [
                                            vr7.price,
                                            " $VRS"
                                        ]
                                    })
                                ]
                            }),
                            vr8 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative w-full h-[229px] rounded-2xl mt-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AframeComp8/* default */.Z, {}),
                                    vr8.price && /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        className: "absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary",
                                        children: [
                                            vr8.price,
                                            " $VRS"
                                        ]
                                    })
                                ]
                            }),
                            vr9 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative w-full h-[229px] rounded-2xl mt-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AframeComp9/* default */.Z, {}),
                                    vr9.price && /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        className: "absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary",
                                        children: [
                                            vr9.price,
                                            " $VRS"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Post_Footer, {
                type: type
            })
        ]
    }));
};
/* harmony default export */ var Post = (index);

;// CONCATENATED MODULE: ./src/modules/Home/Posts.tsx



var Posts = function(param) {
    var posts = param.posts;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "flex flex-col gap-1 pb-5",
        children: posts.map(function(post, index) {
            /*#__PURE__*/ return (0,jsx_runtime.jsx)(Post, {
                data: post
            }, index);
        })
    }));
};
/* harmony default export */ var Home_Posts = (Posts);


/***/ })

}]);