(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2788],{

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

/***/ 356:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/daos/moneyboys",
      function () {
        return __webpack_require__(8545);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 9739:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

/***/ 740:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var components_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(467);




var GalleryItem = function(param) {
    var title = param.title, date = param.date, imageUrl = param.imageUrl, likes = param.likes, invites = param.invites;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col group rounded-t-xl rounded-b-xl bg-brandblack",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "flex flex-col justify-center gap-2 p-2 transition-all ease-in ",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "relative h-[200px] w-full flex justify-center items-center rounded-xl ",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        src: imageUrl,
                        alt: "nft item",
                        layout: "fill",
                        className: "rounded-xl"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-between py-4 px-7",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: "text-xs font-bold",
                                children: title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center gap-2 mt-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: "text-[10px] text-secondary",
                                        children: date
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "mb-1",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Icons__WEBPACK_IMPORTED_MODULE_3__/* .TickCircle */ .bh, {})
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: "text-xs text-gray-950",
                                children: "Likes"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: "mt-2 text-xs text-white",
                                children: likes
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: "text-xs text-gray-950",
                                children: "People"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "mt-2 text-xs text-white",
                                children: [
                                    invites,
                                    " invites"
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ __webpack_exports__["Z"] = (GalleryItem);


/***/ }),

/***/ 7844:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DAOS_Base; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/Link/index.tsx
var Link = __webpack_require__(7500);
;// CONCATENATED MODULE: ./src/components/TagsCollection/Link.tsx



var TagsCollection = function(param) {
    var tags = param.tags;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "flex flex-wrap gap-2 ",
        children: tags.map(function(tag, index) {
            /*#__PURE__*/ return (0,jsx_runtime.jsx)(Link/* default */.Z, {
                href: tag.link,
                exact: true,
                className: "text-sm font-normal normal-case rounded-full btn btn-sm h-7",
                defaultClassName: "btn-primary",
                activeClassName: "btn-secondary",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    children: tag.label
                }, index)
            }, index);
        })
    }));
};
/* harmony default export */ var TagsCollection_Link = (TagsCollection);

// EXTERNAL MODULE: ./src/data/daos.ts
var daos = __webpack_require__(170);
;// CONCATENATED MODULE: ./src/modules/DAOS/Base.tsx




var Base = function(param) {
    var children = param.children;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TagsCollection_Link, {
                tags: daos/* TAGS.tags */.DX.tags
            }),
            children
        ]
    }));
};
/* harmony default export */ var DAOS_Base = (Base);


/***/ }),

/***/ 6098:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var components_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2279);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8193);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9583);





var Hero = function() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-10",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Banner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                vrdao: {
                    featured: true,
                    imageUrl: "/images/placeholder/post/post_one.png",
                    price: "5"
                },
                smallImage: "/gid.gif"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                    className: "mr-5 -mt-10 rounded-full btn btn-secondary",
                    children: "Follow"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    className: "text-lg font-bold ",
                    children: "Solana Money Boys"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-center gap-4 mt-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: "gap-2 text-sm normal-case rounded-full btn btn-primary",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                    d: "M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z",
                                    fill: "#6163FF"
                                })
                            }),
                            "22.5K Followers"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        className: "bg-white btn btn-circle",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__/* .AiFillGithub */ .RrF, {
                            size: 22,
                            color: "#000"
                        })
                    }),
                    " ",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        className: "bg-white btn btn-circle",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__/* .AiOutlineTwitter */ .h3E, {
                            size: 22,
                            color: "#55ACEE"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        className: "bg-white btn btn-circle",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__/* .FaDiscord */ .j2d, {
                            size: 22,
                            color: "#7289d9"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "flex justify-center mt-6",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    className: "max-w-[750px] text-sm text-center text-gray-950",
                    children: "4,444 Money Boys Building the metaverse. For the best insights and NFT analytic tools visit our platform."
                })
            })
        ]
    }));
};
/* harmony default export */ __webpack_exports__["Z"] = (Hero);


/***/ }),

/***/ 8545:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ moneyboys; }
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
;// CONCATENATED MODULE: ./src/modules/DAOS/Home.tsx





var Home = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Posts/* default */.Z, {
            posts: daos/* HOME_POSTS */.fg
        })
    }));
};
/* harmony default export */ var DAOS_Home = (Home);

// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 30 modules
var Icons = __webpack_require__(467);
// EXTERNAL MODULE: ./src/components/GalleryLand/GalleryItem.tsx
var GalleryItem = __webpack_require__(740);
;// CONCATENATED MODULE: ./src/modules/DAOS/Sidebar/Home.tsx





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
var Home_Home = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col gap-8 py-8 mt-8 border divide-y rounded-3xl border-brandblack divide-[#1F2125]",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col gap-6 px-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-lg font-bold ",
                                children: "Price Filter"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-2 text-[15px] gap-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "font-semibold",
                                        children: "Supply"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-right",
                                        children: "4444"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "font-semibold",
                                        children: "Token: "
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-sm text-right",
                                        children: "$MBC"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "font-semibold ",
                                        children: "Staking rewards:"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-right",
                                        children: "130% APY"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "font-semibold ",
                                        children: "Floor price"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-right",
                                        children: "20 SOL"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        className: "gap-2 text-xs normal-case rounded-full btn btn-primary",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* Twitter */.tL, {}),
                                            "22,203 Followers"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                        className: "gap-2 text-xs normal-case rounded-full btn btn-primary",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* Discord */.O5, {}),
                                            "896 Players"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col gap-4 px-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "mt-4 text-lg font-bold",
                                children: "Tiers:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                        width: "20",
                                        height: "27",
                                        viewBox: "0 0 20 27",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                d: "M5.87179 10L3 2.63636L6.94872 4.27273L8 0.5L10.5385 4.68182L13 0.5L14 4.27273L17 2.63636L14.4872 10H5.87179Z",
                                                fill: "#CE7727"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                                                cx: "10",
                                                cy: "17",
                                                r: "10",
                                                fill: "#EC903C"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                d: "M9.8418 21H10.8613V12.5449H9.83008L7.58008 14.1621V15.2754L9.81836 13.6641H9.8418V21Z",
                                                fill: "white"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-[15px] mt-1",
                                        children: "Widgets included"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                        width: "20",
                                        height: "27",
                                        viewBox: "0 0 20 27",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                d: "M5.87179 9.5L3 2.13636L6.94872 3.77273L8 0L10.5385 4.18182L13 0L14 3.77273L17 2.13636L14.4872 9.5H5.87179Z",
                                                fill: "#337CEA"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                                                cx: "10",
                                                cy: "17",
                                                r: "10",
                                                fill: "#438BF6"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                d: "M6.63281 14.9824V14.9883H7.65234V14.9824C7.65234 14.0391 8.40234 13.3242 9.39258 13.3242C10.3242 13.3242 11.0684 13.9746 11.0684 14.7891C11.0684 15.4922 10.7988 15.9434 9.66211 17.1387L6.68555 20.2734V21H12.2637V20.0625H8.14453V20.0391L10.2832 17.8301C11.6953 16.3711 12.123 15.668 12.123 14.7246C12.123 13.4297 10.9336 12.4043 9.42188 12.4043C7.82812 12.4043 6.63281 13.5059 6.63281 14.9824Z",
                                                fill: "white"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-[15px] mt-1",
                                        children: "Widgets and free airdrop"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                        width: "20",
                                        height: "27",
                                        viewBox: "0 0 20 27",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                d: "M5.87179 9.5L3 2.13636L6.94872 3.77273L8 0L10.5385 4.18182L13 0L14 3.77273L17 2.13636L14.4872 9.5H5.87179Z",
                                                fill: "#11AF6D"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                                                cx: "10",
                                                cy: "17",
                                                r: "10",
                                                fill: "#11C278"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                d: "M8.4082 17.0977H9.46875C10.6758 17.0977 11.4258 17.7129 11.4258 18.709C11.4258 19.5938 10.623 20.2266 9.50391 20.2266C8.36719 20.2266 7.64648 19.6289 7.55273 18.7617H6.53906C6.61523 20.1621 7.74609 21.1406 9.51562 21.1406C11.1738 21.1406 12.498 20.127 12.498 18.6738C12.498 17.4844 11.6777 16.6934 10.4004 16.6172V16.5938C11.4551 16.4062 12.1348 15.6445 12.1348 14.584C12.1348 13.3125 10.9922 12.4043 9.48047 12.4043C7.89258 12.4043 6.82617 13.3242 6.70898 14.7598H7.72266C7.81641 13.875 8.46094 13.3184 9.43359 13.3184C10.5059 13.3184 11.0742 13.8867 11.0742 14.7246C11.0742 15.5801 10.3945 16.207 9.42188 16.207H8.4082V17.0977Z",
                                                fill: "white"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-[15px] mt-1",
                                        children: "Money Boy mansion"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex flex-col gap-4",
                children: daos/* WORLD_GALLERY.rows.0.items.map */.g2.rows[0].items.map(function(item, index) {
                    /*#__PURE__*/ return (0,jsx_runtime.jsx)(GalleryItem/* default */.Z, _objectSpread({}, item), index);
                })
            })
        ]
    }));
};
/* harmony default export */ var Sidebar_Home = (Home_Home);

// EXTERNAL MODULE: ./src/modules/DAOS/Hero.tsx
var Hero = __webpack_require__(6098);
;// CONCATENATED MODULE: ./src/pages/daos/moneyboys/index.tsx






var Index = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Layout/* default */.Z, {
        rightSidebar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Sidebar_Home, {}),
        heroContent: /*#__PURE__*/ (0,jsx_runtime.jsx)(Hero/* default */.Z, {}),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DAOS_Home, {})
    }));
};
/* harmony default export */ var moneyboys = (Index);


/***/ }),

/***/ 8357:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w_": function() { return /* reexport */ GenIcon; }
});

// UNUSED EXPORTS: DefaultContext, IconBase, IconContext, IconsManifest

;// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/iconsManifest.js
var IconsManifest = [
  {
    "id": "fa",
    "name": "Font Awesome",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "io",
    "name": "Ionicons 4",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "io5",
    "name": "Ionicons 5",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "md",
    "name": "Material Design icons",
    "projectUrl": "http://google.github.io/material-design-icons/",
    "license": "Apache License Version 2.0",
    "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
  },
  {
    "id": "ti",
    "name": "Typicons",
    "projectUrl": "http://s-ings.com/typicons/",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  {
    "id": "go",
    "name": "Github Octicons icons",
    "projectUrl": "https://octicons.github.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
  },
  {
    "id": "fi",
    "name": "Feather",
    "projectUrl": "https://feathericons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
  },
  {
    "id": "gi",
    "name": "Game Icons",
    "projectUrl": "https://game-icons.net/",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "id": "wi",
    "name": "Weather Icons",
    "projectUrl": "https://erikflowers.github.io/weather-icons/",
    "license": "SIL OFL 1.1",
    "licenseUrl": "http://scripts.sil.org/OFL"
  },
  {
    "id": "di",
    "name": "Devicons",
    "projectUrl": "https://vorillaz.github.io/devicons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ai",
    "name": "Ant Design Icons",
    "projectUrl": "https://github.com/ant-design/ant-design-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "bs",
    "name": "Bootstrap Icons",
    "projectUrl": "https://github.com/twbs/icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ri",
    "name": "Remix Icon",
    "projectUrl": "https://github.com/Remix-Design/RemixIcon",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "fc",
    "name": "Flat Color Icons",
    "projectUrl": "https://github.com/icons8/flat-color-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "gr",
    "name": "Grommet-Icons",
    "projectUrl": "https://github.com/grommet/grommet-icons",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "hi",
    "name": "Heroicons",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "si",
    "name": "Simple Icons",
    "projectUrl": "https://simpleicons.org/",
    "license": "CC0 1.0 Universal",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  {
    "id": "im",
    "name": "IcoMoon Free",
    "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
    "license": "CC BY 4.0 License"
  },
  {
    "id": "bi",
    "name": "BoxIcons",
    "projectUrl": "https://github.com/atisawd/boxicons",
    "license": "CC BY 4.0 License"
  },
  {
    "id": "cg",
    "name": "css.gg",
    "projectUrl": "https://github.com/astrit/css.gg",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "vsc",
    "name": "VS Code Icons",
    "projectUrl": "https://github.com/microsoft/vscode-codicons",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  }
]
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/iconContext.js

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = react.createContext && react.createContext(DefaultContext);
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/iconBase.js
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return react.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return react.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
        size = props.size,
        title = props.title,
        svgProps = __rest(props, ["attr", "size", "title"]);

    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;
    return react.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && react.createElement("title", null, title), props.children);
  };

  return IconContext !== undefined ? react.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/index.js




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6446,5445,4617,6419,5090,170,7540,9774,2888,179], function() { return __webpack_exec__(356); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);