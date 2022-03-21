(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[5405],{

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

/***/ 429:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(712);
      }
    ]);
    if(false) {}
  

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

/***/ 3993:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ 712:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/Layout/index.tsx + 8 modules
var Layout = __webpack_require__(5090);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/components/Stories/index.tsx



var StoriesData = [
    {
        title: "Samira Brown",
        image: "/images/placeholder/stories/stories_one.png",
        avatarImage: '/images/placeholder/stories/avatars/one.png'
    },
    {
        title: "Mack Fritsch",
        image: "/images/placeholder/stories/stories_two.png",
        avatarImage: '/images/placeholder/stories/avatars/two.png'
    },
    {
        title: "Mattie Hamill I",
        image: "/images/placeholder/stories/stories_three.png",
        avatarImage: '/images/placeholder/stories/avatars/three.png'
    },
    {
        title: "Aaron Toy",
        image: "/images/placeholder/stories/stories_four.png",
        avatarImage: '/images/placeholder/stories/avatars/four.png'
    },
    {
        title: "SamiraRay Emard",
        image: "/images/placeholder/stories/stories_five.png",
        avatarImage: '/images/placeholder/stories/avatars/five.png'
    }, 
];
var Index = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "flex flex-wrap items-center gap-4 snap-x",
        children: StoriesData.map(function(param, index) {
            var title = param.title, image = param.image, avatarImage = param.avatarImage;
            /*#__PURE__*/ return (0,jsx_runtime.jsxs)("div", {
                className: "relative transition duration-200 ease-in-out cursor-pointer story-item hover:opacity-90 w-[109px] h-[143px] rounded-2xl",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                        src: image,
                        className: "rounded-md",
                        alt: "stories image",
                        layout: "fill"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute top-0 left-0 flex flex-col justify-between py-3 ",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "ml-2 rounded-lg w-[30px] h-[30px] shadow-md",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                src: avatarImage,
                                height: 30,
                                width: 30,
                                className: "border border-white rounded-lg w-[30px] h-[30px]",
                                alt: "avatar"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute w-full text-xs text-center text-white bottom-3",
                        children: title
                    })
                ]
            }, index);
        })
    }));
};
/* harmony default export */ var Stories = (Index);

// EXTERNAL MODULE: ./src/components/TagsCollection/index.tsx
var TagsCollection = __webpack_require__(6546);
// EXTERNAL MODULE: ./src/modules/Home/Posts.tsx + 8 modules
var Posts = __webpack_require__(7540);
// EXTERNAL MODULE: ./src/data/home.ts
var home = __webpack_require__(4330);
;// CONCATENATED MODULE: ./src/modules/Home/index.tsx






var HomeModule = function() {
    var handleTagChange = function(tag) {
        console.log(tag);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col overflow-y-auto space-y-7",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stories, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TagsCollection/* default */.Z, {
                onChange: handleTagChange,
                tags: home/* TAGS */.DX
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Posts/* default */.Z, {
                posts: home/* POSTS */.vA
            })
        ]
    }));
};
/* harmony default export */ var Home = (HomeModule);

// EXTERNAL MODULE: ./src/components/SearchInput/index.tsx
var SearchInput = __webpack_require__(606);
// EXTERNAL MODULE: ./src/components/Widget/Base.tsx
var Base = __webpack_require__(3993);
;// CONCATENATED MODULE: ./src/components/Widget/Hot.tsx




var Hot = function(param1) {
    var data = param1.data;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* default */.Z, {
        title: "What's Hot",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "divide-y divide-borderwidget",
            children: data.map(function(param, index) {
                var title = param.title, subtitle = param.subtitle, _graph = param.graph, type = _graph.type, value = _graph.value;
                /*#__PURE__*/ return (0,jsx_runtime.jsxs)("div", {
                    className: "flex justify-between px-4 py-3",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                    src: "https://i.pravatar.cc/48?id=".concat(index),
                                    height: 48,
                                    width: 48,
                                    className: "border border-white rounded-[48px]",
                                    alt: "avatar"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col ml-4",
                                    children: [
                                        subtitle && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "text-xs text-gray-950",
                                            children: subtitle
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "font-bold text-[15px]",
                                            children: title
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex items-center",
                            children: type === "up" ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-x text-[#3BA946]",
                                        children: [
                                            "+",
                                            value,
                                            "%"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                        src: "/images/placeholder/widgets/graph_up.png",
                                        height: 20,
                                        width: 73,
                                        className: "border border-white rounded-[48px]",
                                        alt: "avatar"
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-x text-[#E0464D]",
                                        children: [
                                            "-",
                                            value,
                                            "%"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                        src: "/images/placeholder/widgets/graph_down.png",
                                        height: 20,
                                        width: 73,
                                        className: "border border-white rounded-[48px]",
                                        alt: "avatar"
                                    })
                                ]
                            })
                        })
                    ]
                }, index);
            })
        })
    }));
};
/* harmony default export */ var Widget_Hot = (Hot);

;// CONCATENATED MODULE: ./src/components/Widget/YourActivity.tsx




var YourActivity_Hot = function(param) {
    var data = param.data;
    var footer = /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "flex items-center justify-center py-4 bg-black cursor-pointer rounded-b-3xl ",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "text-xs text-secondary",
            children: "+ See more"
        })
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* default */.Z, {
        title: "Your Activity",
        subtitle: "Recently Minted",
        footer: footer,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "divide-y divide-borderwidget",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex justify-between px-4 py-3",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                src: "https://i.pravatar.cc/48?id=1",
                                height: 48,
                                width: 48,
                                className: "border border-white rounded-[48px]",
                                alt: "avatar"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex flex-col ml-4",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "font-bold text-[15px]",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "text-gray-950",
                                            children: "32 Solana Money Boys on"
                                        }),
                                        " ",
                                        "Magic ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                        "Eden"
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex justify-between px-4 py-3",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                src: "https://i.pravatar.cc/48?id=2",
                                height: 48,
                                width: 48,
                                className: "border border-white rounded-[48px]",
                                alt: "avatar"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex flex-col ml-4",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "font-bold text-[15px]",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "text-gray-950",
                                            children: "32 Solana Money Boys on"
                                        }),
                                        " ",
                                        "Magic ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                        "Eden"
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex justify-between px-6 py-5",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "text-xs text-gray-950",
                        children: "Recently Aped in"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex justify-between px-4 py-3",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                src: "https://i.pravatar.cc/48?id=3",
                                height: 48,
                                width: 48,
                                className: "border border-white rounded-[48px]",
                                alt: "avatar"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex flex-col ml-4",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "font-bold text-[15px]",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "text-gray-950",
                                            children: "Longed 144 SQL on"
                                        }),
                                        " Mango",
                                        " ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                        " Market"
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ var YourActivity = (YourActivity_Hot);

;// CONCATENATED MODULE: ./src/data/widgets.ts
var HOT = [
    {
        subtitle: "Solana",
        title: "MoneyBoys",
        graph: {
            type: "up",
            value: 23
        }
    },
    {
        title: "MonkeDAO",
        graph: {
            type: "down",
            value: 8.5
        }
    },
    {
        title: "Solarity",
        graph: {
            type: "up",
            value: 1.05
        }
    },
    {
        subtitle: "Solana",
        title: "MoneyBoys",
        graph: {
            type: "up",
            value: 23
        }
    },
    {
        title: "MonkeDAO",
        graph: {
            type: "down",
            value: 8.5
        }
    }, 
];

;// CONCATENATED MODULE: ./src/modules/Home/RightSidebar.tsx






var RightSidebar = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-4 ml-8",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchInput/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Widget_Hot, {
                data: HOT
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(YourActivity, {
                data: HOT
            })
        ]
    }));
};
/* harmony default export */ var Home_RightSidebar = (RightSidebar);

;// CONCATENATED MODULE: ./src/pages/index.tsx





var pages_Index = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Layout/* default */.Z, {
        rightSidebar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Home_RightSidebar, {}),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Home, {})
    }));
};
/* harmony default export */ var pages = (pages_Index);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6446,6419,5090,7540,9774,2888,179], function() { return __webpack_exec__(429); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);