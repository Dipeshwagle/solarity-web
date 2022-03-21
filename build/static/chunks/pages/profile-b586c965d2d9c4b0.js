(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[277],{

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

/***/ 303:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/profile",
      function () {
        return __webpack_require__(6482);
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

/***/ 7096:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LJ": function() { return /* binding */ MENU_LINKS; },
/* harmony export */   "iF": function() { return /* binding */ PROFILE_POSTS; },
/* harmony export */   "rv": function() { return /* binding */ TOKEN_BALANCES; },
/* harmony export */   "ZY": function() { return /* binding */ TRANSFER_TABLE_PROPS; }
/* harmony export */ });
var MENU_LINKS = [
    {
        title: "Profile",
        link: "/profile",
        exact: true
    },
    {
        title: "Art",
        link: "/profile/art",
        exact: true
    },
    {
        title: "Pay Roll",
        link: "/profile/payout",
        exact: true
    },
    {
        title: "Staking",
        link: "/profile/groups",
        exact: true
    },
    {
        title: "Assets",
        link: "/profile/assets",
        exact: true
    }, 
];
var PROFILE_POSTS = [
    {
        title: "Played <span class='text-secondary'>Super Mario 101</span>",
        subtitle: "Holy molly this is insane! As an Italian it brought me back so many memories!<br>\n    There were a few bugs, I will remix it on Glitch and fix them.",
        likes: 19,
        type: "featured",
        user: {
            avatar: '/images/placeholder/avatars/one.png',
            name: 'tMΞTA 🔆'
        },
        vr5: {
            featured: true,
            imageUrl: "/images/placeholder/post/post_one.png",
            price: 5
        }
    },
    {
        title: "Recently Aped in <span class='text-secondary'>SOL</span>",
        subtitle: "",
        likes: 19,
        type: "featured",
        user: {
            avatar: '/images/placeholder/avatars/one.png',
            name: 'tMΞTA 🔆'
        },
        tags: [
            {
                title: "Blockchain Activity",
                type: "secondary"
            },
            {
                title: "Degen",
                type: "error"
            }, 
        ]
    },
    {
        title: "Tech Sub-DAO decisions",
        subtitle: "Energistically utilize resource maximizing functionalities without business initiatives. Enthusiastically unleash professional solutions vis-a-vis high-quality schemas. Holisticly transform premium synergy before seamless deliverables. Monotonectally maintain compelling materials without virtual testing procedures. Dramatically deploy sticky collaboration and idea-sharing without open-source materials.</br></br>\n    Quickly restore accurate metrics through corporate customer service. Energistically synthesize enterprise outsourcing rather than competitive infrastructures. Appropriately target timely e-business through covalent alignments. ",
        likes: 19,
        type: "normal",
        user: {
            avatar: '/images/placeholder/avatars/one.png',
            name: 'tMΞTA 🔆'
        },
        tags: [
            {
                title: "Developer",
                type: "secondary"
            },
            {
                title: "Technical",
                type: "warning"
            }, 
        ]
    },
    {
        title: "Money Girl Airdrop",
        subtitle: "Ok I was not expecting this, thanks <span class=\"text-secondary\">@$MB</span>! You convinced me, just bought 1. <br> One of the many perks of being part of an Union, airdrop from NFTs you don't hold!<br>\n    You can really explore the ecosystem now with these incentives.",
        likes: 19,
        type: "normal",
        user: {
            avatar: '/images/placeholder/avatars/one.png',
            name: 'tMΞTA 🔆'
        },
        vr8: {
            featured: true,
            imageUrl: "/images/placeholder/post/post_one.png",
            price: 5
        }
    }, 
];
var TOKEN_BALANCES = {
    title: "Treasury Token Balances",
    tokens: [
        {
            title: "SOL",
            imageUrl: "/images/icons/tokens/solana.png",
            volume: "1052.96",
            amount: "$351420.22"
        },
        {
            title: "$MB",
            imageUrl: "/images/icons/tokens/moneycoin.png",
            volume: "400000.1",
            amount: "$637053.22"
        },
        {
            title: "VERSE",
            imageUrl: "/images/icons/solarityround.png",
            volume: "555000.96",
            amount: "$484716.16"
        },
        {
            title: "DUST",
            imageUrl: "/images/icons/tokens/degodsss.png",
            volume: "768870.8",
            amount: "$771184.35"
        },
        {
            title: "ZION",
            imageUrl: "/images/icons/tokens/zion.png",
            volume: "2983.96",
            amount: "$637053.22"
        },
        {
            title: "ETH",
            imageUrl: "/images/icons/tokens/eth.png",
            volume: "2983.96",
            amount: "$637053.22"
        },
        {
            title: "ANJ",
            imageUrl: "/images/icons/tokens/anj.png",
            volume: "400000.1"
        },
        {
            title: "ANT",
            imageUrl: "/images/icons/tokens/ant.png",
            volume: "555000.96",
            amount: "$484716.16"
        },
        {
            title: "DAI",
            imageUrl: "/images/icons/tokens/ant.png",
            volume: "768870.8",
            amount: "$771184.35"
        },
        {
            title: "SOL",
            imageUrl: "/images/icons/tokens/sol.png",
            volume: "1052.96",
            amount: "$351420.22"
        }, 
    ]
};
var TRANSFER_TABLE_PROPS = {
    rows: [
        {
            date: "04/20/22",
            source: "$MB Airdrop ( Art DAU ...)",
            reference: "Devs subDAO : KYC Deposit for Kyber fees",
            amount: "+10585.73003 $MB",
            type: "plus"
        },
        {
            date: "04/20/22",
            source: "0xffd0456704...10.....",
            reference: "Art subDAO : Weekly compensation ($MB)",
            amount: "-670 $VERSE",
            type: "minus"
        },
        {
            date: "04/20/22",
            source: "Artist Union",
            reference: "DAO payout : Being a fantasic member of our community",
            amount: "+10585.73003 KNC",
            type: "plus"
        },
        {
            date: "04/20/22",
            source: "0xffd0456704...10.....",
            reference: "Solarity : Contribution to the Open Metaverse",
            amount: "-670 ETH",
            type: "minus"
        }, 
    ]
};


/***/ }),

/***/ 6293:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var components_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2279);
/* harmony import */ var components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7500);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8193);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9583);
/* harmony import */ var data_profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7096);







var Hero = function() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Banner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                vrprofile: {
                    featured: true,
                    imageUrl: "/images/placeholder/post/post_one.png",
                    price: "5"
                },
                smallImage: "/images/placeholder/profile/moneyboysss.png"
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
                    children: "tMΞTA"
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
                                    fill: "#6163FF "
                                })
                            }),
                            "22.5K Followers"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        className: "bg-white btn btn-circle",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__/* .AiFillGithub */ .RrF, {
                            size: 22,
                            color: "#000"
                        })
                    }),
                    " ",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        className: "bg-white btn btn-circle",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__/* .AiOutlineTwitter */ .h3E, {
                            size: 22,
                            color: "#55ACEE "
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        className: "bg-white btn btn-circle",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__/* .FaDiscord */ .j2d, {
                            size: 22,
                            color: "#7289D9 "
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "flex justify-center mt-6",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "max-w-[750px] text-sm text-center text-gray-950",
                    children: [
                        "Just a common bee trying to contribute as much as possible to the human hive mind.",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
                        "And make sure that that the concept of decetrnalization, creator's economy and web3.0 are proudly represented."
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "flex justify-center gap-8 mt-8",
                children: data_profile__WEBPACK_IMPORTED_MODULE_4__/* .MENU_LINKS.map */ .LJ.map(function(param, index) {
                    var link = param.link, exact = param.exact, title = param.title;
                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(components_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        href: link,
                        exact: exact,
                        className: "text-lg ",
                        activeClassName: "font-bold border-b-2 pb-3 border-secondary",
                        defaultClassName: "",
                        children: title
                    }, link);
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "border-b border-brandblack"
            })
        ]
    }));
};
/* harmony default export */ __webpack_exports__["Z"] = (Hero);


/***/ }),

/***/ 6482:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_profile; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/Layout/index.tsx + 8 modules
var Layout = __webpack_require__(5090);
// EXTERNAL MODULE: ./src/modules/Profile/Hero.tsx
var Hero = __webpack_require__(6293);
// EXTERNAL MODULE: ./src/data/profile.ts
var profile = __webpack_require__(7096);
// EXTERNAL MODULE: ./src/modules/Home/Posts.tsx + 8 modules
var Posts = __webpack_require__(7540);
;// CONCATENATED MODULE: ./src/modules/Profile/Home.tsx




var Home = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Posts/* default */.Z, {
            posts: profile/* PROFILE_POSTS */.iF
        })
    }));
};
/* harmony default export */ var Profile_Home = (Home);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/modules/Profile/Sidebar/Home.tsx



var Home_Home = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-4 p-8 bg-brandblack rounded-3xl",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "text-[19px] font-bold",
                children: "Roles:"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col gap-4 ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                src: "/images/placeholder/your-dao/webxr.png",
                                alt: "Role",
                                height: 45,
                                width: 45
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: "text-base font-bold",
                                children: [
                                    "Dev for ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-secondary",
                                        children: " WebXR Union"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                src: "/images/placeholder/your-dao/moneyboys.png",
                                alt: "Role",
                                height: 45,
                                width: 45
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: "text-base font-bold",
                                children: [
                                    "C Suite for ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-secondary",
                                        children: " Money Boys"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                src: "/images/icons/Solarityround.png",
                                alt: "Role",
                                height: 45,
                                width: 45
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: "text-base font-bold",
                                children: [
                                    "Mod for ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-secondary",
                                        children: " SOL NFT Union"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-[19px] font-bold",
                        children: "General Karma:"
                    }),
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: "+113"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-[19px] font-bold",
                        children: "Common DAOs"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                src: "/images/icons/tokens/degodsss.png",
                                alt: "Role",
                                height: 45,
                                width: 45
                            }),
                            " ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                src: "/images/placeholder/your-dao/moneyboys.png",
                                alt: "Role",
                                height: 45,
                                width: 45
                            }),
                            " ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                src: "/images/placeholder/your-dao/solgods.png",
                                alt: "Role",
                                height: 45,
                                width: 45
                            }),
                            " ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                src: "/images/icons/Solarityround.png",
                                alt: "Role",
                                height: 45,
                                width: 45
                            }),
                            " ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                src: "/images/placeholder/avatars/monkeround.png",
                                alt: "Role",
                                height: 45,
                                width: 45
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ var Sidebar_Home = (Home_Home);

;// CONCATENATED MODULE: ./src/pages/profile/index.tsx






var ProfileIndex = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Layout/* default */.Z, {
        rightSidebar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Sidebar_Home, {}),
        heroContent: /*#__PURE__*/ (0,jsx_runtime.jsx)(Hero/* default */.Z, {}),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Profile_Home, {})
    }));
};
/* harmony default export */ var pages_profile = (ProfileIndex);


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
/******/ __webpack_require__.O(0, [6446,5445,4617,6419,5090,7540,9774,2888,179], function() { return __webpack_exec__(303); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);