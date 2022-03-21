(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8926],{

/***/ 999:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/profile/art",
      function () {
        return __webpack_require__(1286);
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

/***/ 2633:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ 1286:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ art; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/Layout/index.tsx + 8 modules
var Layout = __webpack_require__(5090);
// EXTERNAL MODULE: ./src/modules/Profile/Hero.tsx
var Hero = __webpack_require__(6293);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/components/SelectInput/index.tsx
var SelectInput = __webpack_require__(2633);
;// CONCATENATED MODULE: ./src/modules/Profile/Art.tsx




var Art = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectInput/* default */.Z, {
                    title: "All Collections",
                    className: "rounded-full font-[19px]"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid grid-cols-3 gap-3 my-4 ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col gap-2 p-4 bg-brandblack rounded-3xl",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                    src: "/images/placeholder/profile/art/one.png",
                                    alt: "VR Image",
                                    height: 350,
                                    width: 300
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex justify-between",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: "7 X 7 Size #1231"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: "flex items-center gap-2 text-secondary",
                                            children: [
                                                "Decentraland",
                                                " ",
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 20 20",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                            d: "M9.99935 18.3334C14.5827 18.3334 18.3327 14.5834 18.3327 10C18.3327 5.41669 14.5827 1.66669 9.99935 1.66669C5.41602 1.66669 1.66602 5.41669 1.66602 10C1.66602 14.5834 5.41602 18.3334 9.99935 18.3334Z",
                                                            stroke: "#6163FF",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                            d: "M6.45898 10L8.81732 12.3583L13.5423 7.64166",
                                                            stroke: "#6163FF",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col gap-2 p-4 bg-brandblack rounded-3xl",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                    src: "/images/placeholder/profile/art/two.png",
                                    alt: "VR Image",
                                    height: 350,
                                    width: 300
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex justify-between",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: "7 X 7 Size #1231"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: "flex items-center gap-2 text-secondary",
                                            children: [
                                                "Decentraland",
                                                " ",
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 20 20",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                            d: "M9.99935 18.3334C14.5827 18.3334 18.3327 14.5834 18.3327 10C18.3327 5.41669 14.5827 1.66669 9.99935 1.66669C5.41602 1.66669 1.66602 5.41669 1.66602 10C1.66602 14.5834 5.41602 18.3334 9.99935 18.3334Z",
                                                            stroke: "#6163FF",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                            d: "M6.45898 10L8.81732 12.3583L13.5423 7.64166",
                                                            stroke: "#6163FF",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col gap-2 p-4 bg-brandblack rounded-3xl",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                    src: "/images/placeholder/profile/art/one.png",
                                    alt: "VR Image",
                                    height: 350,
                                    width: 300
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex justify-between",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: "7 X 7 Size #1231"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: "flex items-center gap-2 text-secondary",
                                            children: [
                                                "Decentraland",
                                                " ",
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 20 20",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                            d: "M9.99935 18.3334C14.5827 18.3334 18.3327 14.5834 18.3327 10C18.3327 5.41669 14.5827 1.66669 9.99935 1.66669C5.41602 1.66669 1.66602 5.41669 1.66602 10C1.66602 14.5834 5.41602 18.3334 9.99935 18.3334Z",
                                                            stroke: "#6163FF",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                            d: "M6.45898 10L8.81732 12.3583L13.5423 7.64166",
                                                            stroke: "#6163FF",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col gap-2 p-4 bg-brandblack rounded-3xl",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                    src: "/images/placeholder/profile/art/one.png",
                                    alt: "VR Image",
                                    height: 350,
                                    width: 300
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex justify-between",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: "7 X 7 Size #1231"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: "flex items-center gap-2 text-secondary",
                                            children: [
                                                "Decentraland",
                                                " ",
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 20 20",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                            d: "M9.99935 18.3334C14.5827 18.3334 18.3327 14.5834 18.3327 10C18.3327 5.41669 14.5827 1.66669 9.99935 1.66669C5.41602 1.66669 1.66602 5.41669 1.66602 10C1.66602 14.5834 5.41602 18.3334 9.99935 18.3334Z",
                                                            stroke: "#6163FF",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                            d: "M6.45898 10L8.81732 12.3583L13.5423 7.64166",
                                                            stroke: "#6163FF",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col gap-2 p-4 bg-brandblack rounded-3xl",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                    src: "/images/placeholder/profile/art/two.png",
                                    alt: "VR Image",
                                    height: 350,
                                    width: 300
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex justify-between",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: "7 X 7 Size #1231"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: "flex items-center gap-2 text-secondary",
                                            children: [
                                                "Decentraland",
                                                " ",
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 20 20",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                            d: "M9.99935 18.3334C14.5827 18.3334 18.3327 14.5834 18.3327 10C18.3327 5.41669 14.5827 1.66669 9.99935 1.66669C5.41602 1.66669 1.66602 5.41669 1.66602 10C1.66602 14.5834 5.41602 18.3334 9.99935 18.3334Z",
                                                            stroke: "#6163FF",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                            d: "M6.45898 10L8.81732 12.3583L13.5423 7.64166",
                                                            stroke: "#6163FF",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col gap-2 p-4 bg-brandblack rounded-3xl",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                    src: "/images/placeholder/profile/art/one.png",
                                    alt: "VR Image",
                                    height: 350,
                                    width: 300
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex justify-between",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: "7 X 7 Size #1231"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: "flex items-center gap-2 text-secondary",
                                            children: [
                                                "Decentraland",
                                                " ",
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 20 20",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                            d: "M9.99935 18.3334C14.5827 18.3334 18.3327 14.5834 18.3327 10C18.3327 5.41669 14.5827 1.66669 9.99935 1.66669C5.41602 1.66669 1.66602 5.41669 1.66602 10C1.66602 14.5834 5.41602 18.3334 9.99935 18.3334Z",
                                                            stroke: "#6163FF",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                            d: "M6.45898 10L8.81732 12.3583L13.5423 7.64166",
                                                            stroke: "#6163FF",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ var Profile_Art = (Art);

;// CONCATENATED MODULE: ./src/pages/profile/art.tsx





var ProfileIndex = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Layout/* default */.Z, {
        heroContent: /*#__PURE__*/ (0,jsx_runtime.jsx)(Hero/* default */.Z, {}),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Profile_Art, {})
    }));
};
/* harmony default export */ var art = (ProfileIndex);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6446,5445,4617,6419,7143,5090,9774,2888,179], function() { return __webpack_exec__(999); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);