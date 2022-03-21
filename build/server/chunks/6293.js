"use strict";
exports.id = 6293;
exports.ids = [6293];
exports.modules = {

/***/ 7096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LJ": () => (/* binding */ MENU_LINKS),
/* harmony export */   "iF": () => (/* binding */ PROFILE_POSTS),
/* harmony export */   "rv": () => (/* binding */ TOKEN_BALANCES),
/* harmony export */   "ZY": () => (/* binding */ TRANSFER_TABLE_PROPS)
/* harmony export */ });
const MENU_LINKS = [
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
const PROFILE_POSTS = [
    {
        title: "Played <span class='text-secondary'>Super Mario 101</span>",
        subtitle: `Holy molly this is insane! As an Italian it brought me back so many memories!<br>
    There were a few bugs, I will remix it on Glitch and fix them.`,
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
        subtitle: ``,
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
        subtitle: `Energistically utilize resource maximizing functionalities without business initiatives. Enthusiastically unleash professional solutions vis-a-vis high-quality schemas. Holisticly transform premium synergy before seamless deliverables. Monotonectally maintain compelling materials without virtual testing procedures. Dramatically deploy sticky collaboration and idea-sharing without open-source materials.</br></br>
    Quickly restore accurate metrics through corporate customer service. Energistically synthesize enterprise outsourcing rather than competitive infrastructures. Appropriately target timely e-business through covalent alignments. `,
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
        subtitle: `Ok I was not expecting this, thanks <span class="text-secondary">@$MB</span>! You convinced me, just bought 1. <br> One of the many perks of being part of an Union, airdrop from NFTs you don't hold!<br>
    You can really explore the ecosystem now with these incentives.`,
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
const TOKEN_BALANCES = {
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
const TRANSFER_TABLE_PROPS = {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2279);
/* harmony import */ var components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7500);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var data_profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7096);







const Hero = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Banner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                vrprofile: {
                    featured: true,
                    imageUrl: "/images/placeholder/post/post_one.png",
                    price: "5"
                },
                smallImage: "/images/placeholder/profile/moneyboysss.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "mr-5 -mt-10 rounded-full btn btn-secondary",
                    children: "Follow"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z",
                                    fill: "#6163FF "
                                })
                            }),
                            "22.5K Followers"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "bg-white btn btn-circle",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillGithub, {
                            size: 22,
                            color: "#000"
                        })
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "bg-white btn btn-circle",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineTwitter, {
                            size: 22,
                            color: "#55ACEE "
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "bg-white btn btn-circle",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaDiscord, {
                            size: 22,
                            color: "#7289D9 "
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center mt-6",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "max-w-[750px] text-sm text-center text-gray-950",
                    children: [
                        "Just a common bee trying to contribute as much as possible to the human hive mind.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "And make sure that that the concept of decetrnalization, creator's economy and web3.0 are proudly represented."
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center gap-8 mt-8",
                children: data_profile__WEBPACK_IMPORTED_MODULE_6__/* .MENU_LINKS.map */ .LJ.map(({ link , exact , title  }, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        href: link,
                        exact: exact,
                        className: "text-lg ",
                        activeClassName: "font-bold border-b-2 pb-3 border-secondary",
                        defaultClassName: "",
                        children: title
                    }, link)
                )
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "border-b border-brandblack"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ })

};
;