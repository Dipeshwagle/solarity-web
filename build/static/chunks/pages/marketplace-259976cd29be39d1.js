(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2465],{

/***/ 4184:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 7984:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/marketplace",
      function () {
        return __webpack_require__(9726);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 7016:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ 5566:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ 606:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);


var SearchInput = function() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative w-full text-gray-600 focus-within:text-gray-400",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: "absolute inset-y-0 flex items-center pl-2 left-2 ",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                    type: "submit",
                    className: "p-1 focus:outline-none focus:shadow-outline",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                        width: 16,
                        height: 15,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                            d: "m15.148 13.852-2.745-2.745A6.75 6.75 0 1 0 7.25 13.5c1.66 0 3.179-.603 4.355-1.598l2.745 2.746a.565.565 0 0 0 .795 0 .56.56 0 0 0 .002-.796ZM1.625 6.75A5.632 5.632 0 0 1 7.25 1.125a5.632 5.632 0 0 1 5.625 5.625 5.632 5.632 0 0 1-5.625 5.625A5.632 5.632 0 0 1 1.625 6.75Z",
                            fill: "#8899A6"
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                type: "search",
                className: "w-full py-4 pl-12 text-[15px] text-white rounded-full bg-primary focus:outline-none focus:bg-black focus:text-white placeholder:text-gray-950\xcd",
                placeholder: "Search",
                autoComplete: "off"
            })
        ]
    }));
};
/* harmony default export */ __webpack_exports__["Z"] = (SearchInput);


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

/***/ 9726:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_marketplace; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/Layout/index.tsx + 8 modules
var Layout = __webpack_require__(5090);
// EXTERNAL MODULE: ./src/components/TagsCollection/index.tsx
var TagsCollection = __webpack_require__(6546);
// EXTERNAL MODULE: ./src/components/Gallery/index.tsx + 1 modules
var Gallery = __webpack_require__(6160);
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 30 modules
var Icons = __webpack_require__(467);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/headlessui.esm.js
var headlessui_esm = __webpack_require__(6727);
// EXTERNAL MODULE: ./src/data/marketplace.ts
var marketplace = __webpack_require__(8751);
;// CONCATENATED MODULE: ./src/modules/Marketplace/index.tsx







var Marketplace = function() {
    var handleTagChange = function(tag) {
        console.log(tag);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col pb-14",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TagsCollection/* default */.Z, {
                        onChange: handleTagChange,
                        tags: marketplace/* TAGS */.DX
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-sm",
                                children: "Filters"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(headlessui_esm/* Popover */.J2, {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(headlessui_esm/* Popover.Button */.J2.Button, {
                                        className: "gap-2 text-sm font-normal normal-case btn btn-sm rounded-3xl",
                                        children: [
                                            "Select",
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* CaretDown */.pO, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(headlessui_esm/* Popover.Panel */.J2.Panel, {
                                        className: "absolute z-10 rounded-lg bg-brandblack",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex flex-col p-5",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    href: "/analytics",
                                                    children: "Analytics"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    href: "/engagement",
                                                    children: "Engagement"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    href: "/security",
                                                    children: "Security"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    href: "/integrations",
                                                    children: "Integrations"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Gallery/* default */.Z, {
                rows: marketplace/* GALLERY.rows */.yg.rows
            })
        ]
    }));
};
/* harmony default export */ var modules_Marketplace = (Marketplace);

// EXTERNAL MODULE: ./src/components/AframeComp1/index.tsx
var AframeComp1 = __webpack_require__(7016);
// EXTERNAL MODULE: ./src/components/AframeComp6/index.tsx
var AframeComp6 = __webpack_require__(9739);
// EXTERNAL MODULE: ./src/components/AframeComp7/index.tsx
var AframeComp7 = __webpack_require__(5566);
// EXTERNAL MODULE: ./src/components/AframeComp8/index.tsx
var AframeComp8 = __webpack_require__(324);
// EXTERNAL MODULE: ./src/components/AframeComp9/index.tsx
var AframeComp9 = __webpack_require__(1920);
;// CONCATENATED MODULE: ./src/components/Hero/index.tsx







var Hero = function(param) {
    var vr = param.vr, vr1 = param.vr1, vrmarket = param.vrmarket, vrdao = param.vrdao, vrprofile = param.vrprofile, vr7 = param.vr7, vr8 = param.vr8, vr9 = param.vr9, content = param.content;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            vrmarket && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative w-full h-[314px] rounded-2xl -mt-5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AframeComp1/* default */.Z, {}),
                    vrmarket.price && /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                        className: "absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary",
                        children: [
                            vrmarket.price,
                            " $VRS"
                        ]
                    })
                ]
            }),
            vr7 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative w-full h-[314px] rounded-2xl -mt-5",
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
                className: "relative w-full h-[314px] rounded-2xl -mt-5",
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
            vrdao && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative w-full h-[400px] rounded-2xl -mt-5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AframeComp6/* default */.Z, {}),
                    vrdao.price && /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                        className: "absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary",
                        children: [
                            vrdao.price,
                            " $VRS"
                        ]
                    })
                ]
            }),
            vrprofile && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative w-full h-[400px] rounded-2xl -mt-5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AframeComp6/* default */.Z, {}),
                    vrprofile.price && /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                        className: "absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary",
                        children: [
                            vrprofile.price,
                            " $VRS"
                        ]
                    })
                ]
            }),
            vr8 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative w-full h-[400px] rounded-2xl -mt-5",
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
                className: "relative w-full h-[400px] rounded-2xl -mt-5",
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
            }),
            content && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex justify-between my-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col max-w-4xl ",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-[15px] text-secondary",
                                children: content.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "mt-3 text-sm text-gray-950",
                                children: content.description
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            className: "btn btn-secondary rounded-3xl",
                            children: content.buttonText
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ var components_Hero = (Hero);

// EXTERNAL MODULE: ./src/components/SearchInput/index.tsx
var SearchInput = __webpack_require__(606);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/components/Widget/Base.tsx
var Base = __webpack_require__(3993);
;// CONCATENATED MODULE: ./src/components/Widget/TopSales.tsx




var TopSales = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* default */.Z, {
        title: "Top Sales 1(D)",
        headerRight: "View More",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "divide-y divide-borderwidget",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center gap-6 px-5 py-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "text-[19px] text-[#6163FF] font-bold",
                            children: "1"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                    src: "/images/placeholder/widgets/topsales/one.png",
                                    height: 76,
                                    width: 100,
                                    className: "border border-white ",
                                    alt: "avatar"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col justify-between ml-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "text-xs font-bold font-white",
                                            children: "DODO Minions"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mt-5 ",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "text-xs text-gray-950",
                                                    children: "Price"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center gap-2 mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "h-[16px] w-[16px]",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                                                src: "/images/icons/sol.png",
                                                                alt: "sol-icon",
                                                                height: 32,
                                                                width: 32
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "mt-2 text-xs font-bold text-white",
                                                            children: "10 SOL"
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
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center gap-6 px-5 py-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "text-[19px] text-[#EC903C] font-bold",
                            children: "2"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                    src: "/images/placeholder/widgets/topsales/two.png",
                                    height: 76,
                                    width: 100,
                                    className: "border border-white ",
                                    alt: "avatar"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col justify-between ml-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "text-xs font-bold font-white",
                                            children: "DODO Minions"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mt-5 ",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "text-xs text-gray-950",
                                                    children: "Price"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center gap-2 mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "h-[16px] w-[16px]",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                                                src: "/images/icons/sol.png",
                                                                alt: "sol-icon",
                                                                height: 32,
                                                                width: 32
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "mt-2 text-xs font-bold text-white",
                                                            children: "10 SOL"
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
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center gap-6 px-5 py-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "text-[19px] text-[##F94485] font-bold",
                            children: "3"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                    src: "/images/placeholder/widgets/topsales/three.png",
                                    height: 76,
                                    width: 100,
                                    className: "border border-white ",
                                    alt: "avatar"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col justify-between ml-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "text-xs font-bold font-white",
                                            children: "DODO Minions"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mt-5 ",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "text-xs text-gray-950",
                                                    children: "Price"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center gap-2 mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "h-[16px] w-[16px]",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                                                src: "/images/icons/sol.png",
                                                                alt: "sol-icon",
                                                                height: 32,
                                                                width: 32
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "mt-2 text-xs font-bold text-white",
                                                            children: "10 SOL"
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
    }));
};
/* harmony default export */ var Widget_TopSales = (TopSales);

;// CONCATENATED MODULE: ./src/components/Widget/TopCollection.tsx




var TopCollection_TopSales = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* default */.Z, {
        title: "Top Sales 1(D)",
        headerRight: "View More",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "divide-y divide-borderwidget",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center gap-6 px-5 py-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "text-[19px] text-[#6163FF] font-bold",
                            children: "1"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                    src: "/images/placeholder/widgets/topcollection/one.png",
                                    height: 76,
                                    width: 100,
                                    className: "border border-white ",
                                    alt: "avatar"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col justify-between ml-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "text-xs font-bold font-white",
                                            children: "AQUANEE"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mt-5 ",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "text-xs text-gray-950",
                                                    children: "Volume"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "flex items-center gap-2 mt-1",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "mt-2 text-xs font-bold text-white",
                                                        children: "610,437.68 USD"
                                                    })
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
                    className: "flex items-center gap-6 px-5 py-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "text-[19px] text-[#EC903C] font-bold",
                            children: "2"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                    src: "/images/placeholder/widgets/topcollection/two.png",
                                    height: 76,
                                    width: 100,
                                    className: "border border-white ",
                                    alt: "avatar"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col justify-between ml-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "text-xs font-bold font-white",
                                            children: "X-Metaverse - Box"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mt-5 ",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "text-xs text-gray-950",
                                                    children: "Volume"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center gap-8 mt-1 ",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "mt-2 text-xs font-bold text-white ",
                                                            children: "610,437.68 USD"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "mt-2 text-xs text-[#3BA946]",
                                                            children: "+0.09%"
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
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center gap-6 px-5 py-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "text-[19px] text-[##F94485] font-bold",
                            children: "3"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                    src: "/images/placeholder/widgets/topcollection/three.png",
                                    height: 76,
                                    width: 100,
                                    className: "border border-white ",
                                    alt: "avatar"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col justify-between ml-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "text-xs font-bold font-white",
                                            children: "DODO Minions"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mt-5 ",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "text-xs text-gray-950",
                                                    children: "Volume"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center gap-8 mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "mt-2 text-xs font-bold text-white",
                                                            children: "610,437.68 USD"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "mt-2 text-xs text-[#3BA946]",
                                                            children: "+15.09%"
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
    }));
};
/* harmony default export */ var TopCollection = (TopCollection_TopSales);

// EXTERNAL MODULE: ./src/components/Widget/TopPools.tsx + 1 modules
var TopPools = __webpack_require__(6656);
;// CONCATENATED MODULE: ./src/modules/Marketplace/RightSidebar.tsx






var RightSidebar = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-4 ml-8",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchInput/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Widget_TopSales, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TopCollection, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TopPools/* default */.Z, {})
        ]
    }));
};
/* harmony default export */ var Marketplace_RightSidebar = (RightSidebar);

;// CONCATENATED MODULE: ./src/pages/marketplace/index.tsx







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
var Index = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Layout/* default */.Z, {
        rightSidebar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Marketplace_RightSidebar, {}),
        heroContent: /*#__PURE__*/ (0,jsx_runtime.jsx)(components_Hero, _objectSpread({}, marketplace/* HERO_DATA */.CT)),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(modules_Marketplace, {})
    }));
};
/* harmony default export */ var pages_marketplace = (Index);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6446,6419,5090,5277,7982,9774,2888,179], function() { return __webpack_exec__(7984); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);