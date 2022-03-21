(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[164],{

/***/ 164:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "IG": function() { return /* reexport */ CandyMachineMintView; },
  "Hr": function() { return /* reexport */ GalleryView; },
  "ug": function() { return /* reexport */ HomeView; },
  "mV": function() { return /* reexport */ SolanaTweeterView; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useWallet.js
var useWallet = __webpack_require__(7257);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/index.js + 11 modules
var lib = __webpack_require__(7843);
;// CONCATENATED MODULE: ./src/components/Loader.tsx

var Loader = function(param) {
    var _text = param.text, text = _text === void 0 ? "Loading..." : _text, _noText = param.noText, noText = _noText === void 0 ? false : _noText;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col justify-center items-center text-xl font-light",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                className: "animate-spin h-8 w-8 text-white",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "white",
                viewBox: "0 0 24 24",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                        className: "opacity-5",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    })
                ]
            }),
            " ",
            !noText ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "opacity-50 mt-4",
                children: text
            }) : null
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/SolanaLogo.tsx

var SolanaLogo = function() {
    /*#__PURE__*/ return (0,jsx_runtime.jsxs)("svg", {
        width: "46",
        height: "35",
        xmlns: "http://www.w3.org/2000/svg",
        className: "inline",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                        x1: "90.737%",
                        y1: "34.776%",
                        x2: "35.509%",
                        y2: "55.415%",
                        id: "a",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                stopColor: "#00FFA3",
                                offset: "0%"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                stopColor: "#DC1FFF",
                                offset: "100%"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                        x1: "66.588%",
                        y1: "43.8%",
                        x2: "11.36%",
                        y2: "64.439%",
                        id: "b",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                stopColor: "#00FFA3",
                                offset: "0%"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                stopColor: "#DC1FFF",
                                offset: "100%"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                        x1: "78.586%",
                        y1: "39.317%",
                        x2: "23.358%",
                        y2: "59.956%",
                        id: "c",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                stopColor: "#00FFA3",
                                offset: "0%"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                stopColor: "#DC1FFF",
                                offset: "100%"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                fillRule: "nonzero",
                fill: "none",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "M7.256 26.713c.27-.27.64-.427 1.033-.427h35.64a.73.73 0 0 1 .517 1.247l-7.04 7.04c-.27.27-.64.427-1.034.427H.732a.73.73 0 0 1-.516-1.246l7.04-7.04Z",
                        fill: "url(#a)",
                        transform: "translate(.98)"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "M7.256.427C7.536.157 7.907 0 8.289 0h35.64a.73.73 0 0 1 .517 1.246l-7.04 7.04c-.27.27-.64.428-1.034.428H.732a.73.73 0 0 1-.516-1.247l7.04-7.04Z",
                        fill: "url(#b)",
                        transform: "translate(.98)"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "M37.405 13.486c-.27-.27-.64-.427-1.033-.427H.732a.73.73 0 0 0-.516 1.246l7.04 7.04c.27.27.64.428 1.033.428h35.64a.73.73 0 0 0 .517-1.247l-7.04-7.04Z",
                        fill: "url(#c)",
                        transform: "translate(.98)"
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/components/SelectAndConnectWalletButton.tsx




var SelectAndConnectWalletButton = function(param) {
    var onUseWalletClick = param.onUseWalletClick;
    var setVisible = (0,lib/* useWalletModal */.hB)().setVisible;
    var ref = (0,useWallet/* useWallet */.O)(), wallet = ref.wallet, connect = ref.connect, connecting = ref.connecting, publicKey = ref.publicKey;
    (0,react.useEffect)(function() {
        if (!publicKey && wallet) {
            try {
                connect();
            } catch (error) {
                console.log("Error connecting to the wallet: ", error.message);
            }
        }
    }, [
        wallet
    ]);
    var handleWalletClick = function() {
        try {
            if (!wallet) {
                setVisible(true);
            } else {
                connect();
            }
            onUseWalletClick();
        } catch (error) {
            console.log("Error connecting to the wallet: ", error.message);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        className: "btn btn-primary btn-lg",
        onClick: handleWalletClick,
        disabled: connecting,
        children: publicKey ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            children: "Use Wallet Address"
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            children: "Connect Wallet"
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/index.tsx




// EXTERNAL MODULE: ./src/views/HomeView/index.module.css
var index_module = __webpack_require__(6104);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./src/views/HomeView/index.tsx






function _throw(e) {
    throw e;
}
var HomeView = function(param) {
    var param = param !== null ? param : _throw(new TypeError("Cannot destructure undefined"));
    var publicKey = (0,useWallet/* useWallet */.O)().publicKey;
    var onClick = function() {};
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "container mx-auto max-w-6xl p-8 2xl:px-0",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (index_module_default()).container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                className: "btn btn-square btn-ghost",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-4xl",
                                    children: "🦤"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-1 px-2 mx-2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-lg font-bold",
                                children: "Caw Caw"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(lib/* WalletMultiButton */.aD, {
                                className: "btn btn-ghost"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "text-center pt-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "hero min-h-16 py-4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-center hero-content",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "max-w-lg",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                            className: "mb-5 text-5xl font-bold",
                                            children: [
                                                "Hello Solana ",
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(SolanaLogo, {}),
                                                " World!"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "mb-5",
                                            children: "This scaffold includes awesome tools for rapid development and deploy dapps to Solana: Next.JS, TypeScript, TailwindCSS, Daisy UI."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "mb-5",
                                            children: "Sollana wallet adapter is connected and ready to use."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            children: publicKey ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    "Your address: ",
                                                    publicKey.toBase58()
                                                ]
                                            }) : null
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "max-w-4xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                    className: "mb-5 pb-8 text-5xl",
                                    children: "Templates:"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "text-left leading-10",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            className: "mb-5",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(next_link["default"], {
                                                href: "/gallery",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    className: "text-4xl font-bold hover:underline",
                                                    children: "🏞 -- NFT Gallery"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(next_link["default"], {
                                                href: "/tweeter",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    className: "mb-5 text-4xl font-bold hover:underline",
                                                    children: "🐦 -- Solana Tweeter"
                                                })
                                            })
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

// EXTERNAL MODULE: ./node_modules/@nfteyez/sol-rayz-react/dist/index.js
var dist = __webpack_require__(7452);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useConnection.js
var useConnection = __webpack_require__(9669);
// EXTERNAL MODULE: ./node_modules/swr/dist/index.mjs
var swr_dist = __webpack_require__(8100);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/EyeOffIcon.js
var EyeOffIcon = __webpack_require__(6361);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js
var runtime = __webpack_require__(4051);
var runtime_default = /*#__PURE__*/__webpack_require__.n(runtime);
;// CONCATENATED MODULE: ./src/utils/fetcher.tsx

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var fetcher = function() {
    var _ref = _asyncToGenerator(runtime_default().mark(function _callee(url) {
        var res, error, info;
        return runtime_default().wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    _ctx.next = 2;
                    return fetch(url);
                case 2:
                    res = _ctx.sent;
                    if (res.ok) {
                        _ctx.next = 11;
                        break;
                    }
                    error = new Error("An error occurred while fetching the data.");
                    _ctx.next = 7;
                    return res.json();
                case 7:
                    info = _ctx.sent;
                    error.status = res.status;
                    console.warn(url, "\nAn error occured while fetching:\n", info);
                    throw error;
                case 11:
                    return _ctx.abrupt("return", res.json());
                case 12:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return function fetcher(url) {
        return _ref.apply(this, arguments);
    };
}();

;// CONCATENATED MODULE: ./src/views/GalleryView/NftCard.tsx





var NftCard = function(param) {
    var details = param.details, onSelect = param.onSelect, _onTokenDetailsFetched = param.onTokenDetailsFetched, onTokenDetailsFetched = _onTokenDetailsFetched === void 0 ? function() {} : _onTokenDetailsFetched;
    var ref = (0,react.useState)(false), fallbackImage = ref[0], setFallbackImage = ref[1];
    var ref1;
    var ref2 = (ref1 = details === null || details === void 0 ? void 0 : details.data) !== null && ref1 !== void 0 ? ref1 : {}, name = ref2.name, uri = ref2.uri;
    var ref3 = (0,swr_dist/* default */.ZP)(// uri || url ? getMetaUrl(details) : null,
    uri, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    }), data = ref3.data, error = ref3.error;
    // console.log("data", data);
    (0,react.useEffect)(function() {
        if (!error && !!data) {
            onTokenDetailsFetched(data);
        }
    }, [
        data,
        error
    ]);
    var onImageError = function() {
        return setFallbackImage(true);
    };
    var image = (data !== null && data !== void 0 ? data : {}).image;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "card bordered max-w-xs compact rounded-md",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("figure", {
                className: "min-h-16 animation-pulse-color",
                children: !fallbackImage || !error ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: image,
                    onError: onImageError,
                    className: "bg-gray-800 object-cover"
                }) : // Fallback when preview isn't available
                // This could be broken image, video, or audio
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "w-auto h-48 flex items-center justify-center bg-gray-900 bg-opacity-40",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EyeOffIcon/* default */.Z, {
                        className: "h-16 w-16 text-white-500"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "card-body",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                    className: "card-title text-sm text-left",
                    children: name
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: ./src/views/GalleryView/index.module.css
var GalleryView_index_module = __webpack_require__(8240);
var GalleryView_index_module_default = /*#__PURE__*/__webpack_require__.n(GalleryView_index_module);
;// CONCATENATED MODULE: ./src/views/GalleryView/index.tsx










function GalleryView_throw(e) {
    throw e;
}
var walletPublicKey = "3EqUrFrjgABCWAnqMYjZ36GcktiwDtFdkNYwY6C6cDzy";
var GalleryView = function(param) {
    var param = param !== null ? param : GalleryView_throw(new TypeError("Cannot destructure undefined"));
    var ref;
    var connection = (0,useConnection/* useConnection */.R)().connection;
    var ref1 = (0,react.useState)(walletPublicKey), walletToParsePublicKey = ref1[0], setWalletToParsePublicKey = ref1[1];
    var publicKey = (0,useWallet/* useWallet */.O)().publicKey;
    var ref2 = (0,dist/* useWalletNfts */.R)({
        publicAddress: walletToParsePublicKey,
        connection: connection
    }), nfts = ref2.nfts, isLoading = ref2.isLoading, error = ref2.error;
    console.log("nfts", nfts);
    var onChange = function(e) {
        var value = e.target.value;
        setWalletToParsePublicKey(value.trim());
    };
    var onUseWalletClick = function() {
        if (publicKey) {
            setWalletToParsePublicKey(publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58());
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "container mx-auto max-w-6xl p-8 2xl:px-0",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (GalleryView_index_module_default()).container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                className: "btn btn-square btn-ghost",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-4xl",
                                    children: "🏞"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-1 px-2 mx-2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-sm breadcrumbs",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "text-xl",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(next_link["default"], {
                                                href: "/",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    children: "Templates"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "opacity-40",
                                                children: "NFT Gallery"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(lib/* WalletMultiButton */.aD, {
                                className: "btn btn-ghost"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "text-center pt-2",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "hero min-h-16 p-0 pt-10",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "text-center hero-content w-full",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                        className: "mb-5 text-5xl",
                                        children: [
                                            "NFT Gallery on Solana ",
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SolanaLogo, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "w-full min-w-full",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                className: "mb-5",
                                                children: [
                                                    "Here is very basic example of NFT Gallery. It parses mainnet. ",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                                    "And uses",
                                                    " ",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                        href: "https://www.npmjs.com/package/@nfteyez/sol-rayz-react",
                                                        target: "_blank",
                                                        className: "link font-bold",
                                                        rel: "noreferrer",
                                                        children: "@nfteyez/sol-rayz-react"
                                                    }),
                                                    " ",
                                                    "package to fetch NFTs for specific wallet."
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "form-control mt-8",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                        className: "input-group input-group-vertical input-group-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                children: "Search"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex space-x-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                        type: "text",
                                                                        placeholder: "Enter Wallet Address",
                                                                        className: "w-full input input-bordered input-lg",
                                                                        value: walletToParsePublicKey,
                                                                        onChange: onChange,
                                                                        style: {
                                                                            borderRadius: "0 0 var(--rounded-btn,.5rem) var(--rounded-btn,.5rem)"
                                                                        }
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectAndConnectWalletButton, {
                                                                        onUseWalletClick: onUseWalletClick
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "my-10",
                                        children: [
                                            error ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                                        children: "Error Occures"
                                                    }),
                                                    (ref = error) === null || ref === void 0 ? void 0 : ref.message
                                                ]
                                            }) : null,
                                            !error && isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Loader, {})
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(NftList, {
                                                nfts: nfts,
                                                error: error
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    }));
};
var NftList = function(param) {
    var nfts = param.nfts, error = param.error;
    if (error) {
        return null;
    }
    if (!(nfts === null || nfts === void 0 ? void 0 : nfts.length)) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "text-center text-2xl pt-16",
            children: "No NFTs found in this wallet"
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "grid grid-cols-2 md:grid-cols-4 gap-4 items-start",
        children: nfts === null || nfts === void 0 ? void 0 : nfts.map(function(nft) {
            /*#__PURE__*/ return (0,jsx_runtime.jsx)(NftCard, {
                details: nft,
                onSelect: function() {}
            }, nft.mint);
        })
    }));
};

// EXTERNAL MODULE: ./node_modules/@project-serum/anchor/dist/browser/index.js
var browser = __webpack_require__(4758);
// EXTERNAL MODULE: ./node_modules/react-countdown/dist/index.es.js
var index_es = __webpack_require__(8130);
// EXTERNAL MODULE: ./node_modules/react-alert/dist/esm/react-alert.js + 9 modules
var react_alert = __webpack_require__(7055);
// EXTERNAL MODULE: ./node_modules/@solana/web3.js/lib/index.browser.esm.js + 1 modules
var index_browser_esm = __webpack_require__(8155);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useAnchorWallet.js
var useAnchorWallet = __webpack_require__(8877);
// EXTERNAL MODULE: ./node_modules/@solana/spl-token/lib/index.browser.esm.js
var lib_index_browser_esm = __webpack_require__(3029);
;// CONCATENATED MODULE: ./src/views/CandyMachineMintView/candy-machine.ts
/* provided dependency */ var Buffer = __webpack_require__(8764)["Buffer"];



function candy_machine_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function candy_machine_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                candy_machine_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                candy_machine_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var CANDY_MACHINE_PROGRAM = new browser/* web3.PublicKey */.rV.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ");
var SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new browser/* web3.PublicKey */.rV.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
var TOKEN_METADATA_PROGRAM_ID = new browser/* web3.PublicKey */.rV.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");
var awaitTransactionSignatureConfirmation = function() {
    var _ref1 = candy_machine_asyncToGenerator(runtime_default().mark(function _callee1(txid, timeout, connection) {
        var commitment, queryStatus, done, status, subId, _args = arguments;
        return runtime_default().wrap(function _callee$(_ctx1) {
            while(1)switch(_ctx1.prev = _ctx1.next){
                case 0:
                    commitment = _args.length > 3 && _args[3] !== void 0 ? _args[3] : "recent", queryStatus = _args.length > 4 && _args[4] !== void 0 ? _args[4] : false;
                    done = false;
                    status = {
                        slot: 0,
                        confirmations: 0,
                        err: null
                    };
                    subId = 0;
                    _ctx1.next = 6;
                    return new Promise(function() {
                        var _ref = candy_machine_asyncToGenerator(runtime_default().mark(function _callee2(resolve, reject) {
                            return runtime_default().wrap(function _callee$(_ctx2) {
                                while(1)switch(_ctx2.prev = _ctx2.next){
                                    case 0:
                                        setTimeout(function() {
                                            if (done) {
                                                return;
                                            }
                                            done = true;
                                            console.log("Rejecting for timeout...");
                                            reject({
                                                timeout: true
                                            });
                                        }, timeout);
                                        try {
                                            subId = connection.onSignature(txid, function(result, context) {
                                                done = true;
                                                status = {
                                                    err: result.err,
                                                    slot: context.slot,
                                                    confirmations: 0
                                                };
                                                if (result.err) {
                                                    console.log("Rejected via websocket", result.err);
                                                    reject(status);
                                                } else {
                                                    console.log("Resolved via websocket", result);
                                                    resolve(status);
                                                }
                                            }, commitment);
                                        } catch (e) {
                                            done = true;
                                            console.error("WS error in setup", txid, e);
                                        }
                                    case 2:
                                        if (!(!done && queryStatus)) {
                                            _ctx2.next = 8;
                                            break;
                                        }
                                        // eslint-disable-next-line no-loop-func
                                        candy_machine_asyncToGenerator(runtime_default().mark(function _callee() {
                                            var signatureStatuses;
                                            return runtime_default().wrap(function _callee$(_ctx) {
                                                while(1)switch(_ctx.prev = _ctx.next){
                                                    case 0:
                                                        _ctx.prev = 0;
                                                        _ctx.next = 3;
                                                        return connection.getSignatureStatuses([
                                                            txid, 
                                                        ]);
                                                    case 3:
                                                        signatureStatuses = _ctx.sent;
                                                        status = signatureStatuses && signatureStatuses.value[0];
                                                        if (!done) {
                                                            if (!status) {
                                                                console.log("REST null result for", txid, status);
                                                            } else if (status.err) {
                                                                console.log("REST error for", txid, status);
                                                                done = true;
                                                                reject(status.err);
                                                            } else if (!status.confirmations) {
                                                                console.log("REST no confirmations for", txid, status);
                                                            } else {
                                                                console.log("REST confirmation for", txid, status);
                                                                done = true;
                                                                resolve(status);
                                                            }
                                                        }
                                                        _ctx.next = 11;
                                                        break;
                                                    case 8:
                                                        _ctx.prev = 8;
                                                        _ctx.t0 = _ctx["catch"](0);
                                                        if (!done) {
                                                            console.log("REST connection error: txid", txid, _ctx.t0);
                                                        }
                                                    case 11:
                                                    case "end":
                                                        return _ctx.stop();
                                                }
                                            }, _callee, null, [
                                                [
                                                    0,
                                                    8
                                                ]
                                            ]);
                                        }))();
                                        _ctx2.next = 6;
                                        return sleep(2000);
                                    case 6:
                                        _ctx2.next = 2;
                                        break;
                                    case 8:
                                    case "end":
                                        return _ctx2.stop();
                                }
                            }, _callee2);
                        }));
                        return function(resolve, reject) {
                            return _ref.apply(this, arguments);
                        };
                    }());
                case 6:
                    status = _ctx1.sent;
                    //@ts-ignore
                    if (connection._signatureSubscriptions[subId]) {
                        connection.removeSignatureListener(subId);
                    }
                    done = true;
                    console.log("Returning status", status);
                    return _ctx1.abrupt("return", status);
                case 11:
                case "end":
                    return _ctx1.stop();
            }
        }, _callee1);
    }));
    return function awaitTransactionSignatureConfirmation(txid, timeout, connection) {
        return _ref1.apply(this, arguments);
    };
}();
/* export */ var createAssociatedTokenAccountInstruction = function(associatedTokenAddress, payer, walletAddress, splTokenMintAddress) {
    var keys = [
        {
            pubkey: payer,
            isSigner: true,
            isWritable: true
        },
        {
            pubkey: associatedTokenAddress,
            isSigner: false,
            isWritable: true
        },
        {
            pubkey: walletAddress,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: splTokenMintAddress,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: browser/* web3.SystemProgram.programId */.rV.SystemProgram.programId,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: lib_index_browser_esm/* TOKEN_PROGRAM_ID */.H_,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: browser/* web3.SYSVAR_RENT_PUBKEY */.rV.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false
        }, 
    ];
    return new browser/* web3.TransactionInstruction */.rV.TransactionInstruction({
        keys: keys,
        programId: SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
        data: Buffer.from([])
    });
};
var getCandyMachineState = function() {
    var _ref = candy_machine_asyncToGenerator(runtime_default().mark(function _callee(anchorWallet, candyMachineId, connection) {
        var provider, idl, program, candyMachine, state, itemsAvailable, itemsRedeemed, price, itemsRemaining, goLiveDate;
        return runtime_default().wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    provider = new browser/* Provider */.zt(connection, anchorWallet, {
                        preflightCommitment: "recent"
                    });
                    _ctx.next = 3;
                    return browser/* Program.fetchIdl */.$r.fetchIdl(CANDY_MACHINE_PROGRAM, provider);
                case 3:
                    idl = _ctx.sent;
                    program = new browser/* Program */.$r(idl, CANDY_MACHINE_PROGRAM, provider);
                    candyMachine = {
                        id: candyMachineId,
                        connection: connection,
                        program: program
                    };
                    _ctx.next = 8;
                    return program.account.candyMachine.fetch(candyMachineId);
                case 8:
                    state = _ctx.sent;
                    console.log("state", state);
                    itemsAvailable = state.data.itemsAvailable.toNumber();
                    itemsRedeemed = state.itemsRedeemed.toNumber();
                    price = state.data.price.toNumber();
                    itemsRemaining = itemsAvailable - itemsRedeemed;
                    goLiveDate = state.data.goLiveDate.toNumber();
                    goLiveDate = new Date(goLiveDate * 1000);
                    return _ctx.abrupt("return", {
                        candyMachine: candyMachine,
                        itemsAvailable: itemsAvailable,
                        itemsRedeemed: itemsRedeemed,
                        itemsRemaining: itemsRemaining,
                        goLiveDate: goLiveDate,
                        price: price
                    });
                case 17:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return function getCandyMachineState(anchorWallet, candyMachineId, connection) {
        return _ref.apply(this, arguments);
    };
}();
var getMasterEdition = function() {
    var _ref = candy_machine_asyncToGenerator(runtime_default().mark(function _callee(mint) {
        return runtime_default().wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    _ctx.next = 2;
                    return browser/* web3.PublicKey.findProgramAddress */.rV.PublicKey.findProgramAddress([
                        Buffer.from("metadata"),
                        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
                        mint.toBuffer(),
                        Buffer.from("edition"), 
                    ], TOKEN_METADATA_PROGRAM_ID);
                case 2:
                    return _ctx.abrupt("return", _ctx.sent[0]);
                case 3:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return function getMasterEdition(mint) {
        return _ref.apply(this, arguments);
    };
}();
var getMetadata = function() {
    var _ref = candy_machine_asyncToGenerator(runtime_default().mark(function _callee(mint) {
        return runtime_default().wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    _ctx.next = 2;
                    return browser/* web3.PublicKey.findProgramAddress */.rV.PublicKey.findProgramAddress([
                        Buffer.from("metadata"),
                        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
                        mint.toBuffer(), 
                    ], TOKEN_METADATA_PROGRAM_ID);
                case 2:
                    return _ctx.abrupt("return", _ctx.sent[0]);
                case 3:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return function getMetadata(mint) {
        return _ref.apply(this, arguments);
    };
}();
var getTokenWallet = function() {
    var _ref = candy_machine_asyncToGenerator(runtime_default().mark(function _callee(wallet, mint) {
        return runtime_default().wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    _ctx.next = 2;
                    return browser/* web3.PublicKey.findProgramAddress */.rV.PublicKey.findProgramAddress([
                        wallet.toBuffer(),
                        lib_index_browser_esm/* TOKEN_PROGRAM_ID.toBuffer */.H_.toBuffer(),
                        mint.toBuffer()
                    ], SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID);
                case 2:
                    return _ctx.abrupt("return", _ctx.sent[0]);
                case 3:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return function getTokenWallet(wallet, mint) {
        return _ref.apply(this, arguments);
    };
}();
var mintOneToken = function() {
    var _ref = candy_machine_asyncToGenerator(runtime_default().mark(function _callee(candyMachine, config, payer, treasury) {
        var mint, token, connection, program, metadata, masterEdition, rent;
        return runtime_default().wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    mint = browser/* web3.Keypair.generate */.rV.Keypair.generate();
                    _ctx.next = 3;
                    return getTokenWallet(payer, mint.publicKey);
                case 3:
                    token = _ctx.sent;
                    connection = candyMachine.connection, program = candyMachine.program;
                    _ctx.next = 7;
                    return getMetadata(mint.publicKey);
                case 7:
                    metadata = _ctx.sent;
                    _ctx.next = 10;
                    return getMasterEdition(mint.publicKey);
                case 10:
                    masterEdition = _ctx.sent;
                    _ctx.next = 13;
                    return connection.getMinimumBalanceForRentExemption(lib_index_browser_esm/* MintLayout.span */.qT.span);
                case 13:
                    rent = _ctx.sent;
                    _ctx.next = 16;
                    return program.rpc.mintNft({
                        accounts: {
                            config: config,
                            candyMachine: candyMachine.id,
                            payer: payer,
                            wallet: treasury,
                            mint: mint.publicKey,
                            metadata: metadata,
                            masterEdition: masterEdition,
                            mintAuthority: payer,
                            updateAuthority: payer,
                            tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
                            tokenProgram: lib_index_browser_esm/* TOKEN_PROGRAM_ID */.H_,
                            systemProgram: browser/* web3.SystemProgram.programId */.rV.SystemProgram.programId,
                            rent: browser/* web3.SYSVAR_RENT_PUBKEY */.rV.SYSVAR_RENT_PUBKEY,
                            clock: browser/* web3.SYSVAR_CLOCK_PUBKEY */.rV.SYSVAR_CLOCK_PUBKEY
                        },
                        signers: [
                            mint
                        ],
                        instructions: [
                            browser/* web3.SystemProgram.createAccount */.rV.SystemProgram.createAccount({
                                fromPubkey: payer,
                                newAccountPubkey: mint.publicKey,
                                space: lib_index_browser_esm/* MintLayout.span */.qT.span,
                                lamports: rent,
                                programId: lib_index_browser_esm/* TOKEN_PROGRAM_ID */.H_
                            }),
                            lib_index_browser_esm/* Token.createInitMintInstruction */.WU.createInitMintInstruction(lib_index_browser_esm/* TOKEN_PROGRAM_ID */.H_, mint.publicKey, 0, payer, payer),
                            createAssociatedTokenAccountInstruction(token, payer, payer, mint.publicKey),
                            lib_index_browser_esm/* Token.createMintToInstruction */.WU.createMintToInstruction(lib_index_browser_esm/* TOKEN_PROGRAM_ID */.H_, mint.publicKey, token, payer, [], 1), 
                        ]
                    });
                case 16:
                    return _ctx.abrupt("return", _ctx.sent);
                case 17:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return function mintOneToken(candyMachine, config, payer, treasury) {
        return _ref.apply(this, arguments);
    };
}();
var shortenAddress = function(address) {
    var chars = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 4;
    return "".concat(address.slice(0, chars), "...").concat(address.slice(-chars));
};
var sleep = function(ms) {
    return new Promise(function(resolve) {
        return setTimeout(resolve, ms);
    });
};

;// CONCATENATED MODULE: ./src/views/CandyMachineMintView/MintSection.tsx










function MintSection_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function MintSection_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                MintSection_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                MintSection_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var MintSection = function(props) {
    var alert = (0,react_alert/* useAlert */.VY)();
    var connection = (0,useConnection/* useConnection */.R)().connection;
    var ref8 = (0,react.useState)({
        itemsAvailable: 0,
        itemsRemaining: 0
    }), counter = ref8[0], setCounter = ref8[1];
    var ref1 = (0,react.useState)(), price1 = ref1[0], setPrice = ref1[1];
    var ref2 = (0,react.useState)(), balance1 = ref2[0], setBalance = ref2[1];
    var ref3 = (0,react.useState)(false), isActive = ref3[0], setIsActive = ref3[1]; // true when countdown completes
    var ref4 = (0,react.useState)(false), isSoldOut = ref4[0], setIsSoldOut = ref4[1]; // true when items remaining is zero
    var ref5 = (0,react.useState)(false), isMinting = ref5[0], setIsMinting = ref5[1]; // true when user got to press MINT
    var ref6 = (0,react.useState)(new Date(props.startDate)), startDate = ref6[0], setStartDate = ref6[1];
    var wallet = (0,useAnchorWallet/* useAnchorWallet */.z)();
    var ref7 = (0,react.useState)(), candyMachine1 = ref7[0], setCandyMachine = ref7[1];
    var onMint = function() {
        var _ref = MintSection_asyncToGenerator(runtime_default().mark(function _callee() {
            var mintTxId, status, message, balance;
            return runtime_default().wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        _ctx.prev = 0;
                        setIsMinting(true);
                        alert.show("Mint has been started!");
                        if (!(wallet && (candyMachine1 === null || candyMachine1 === void 0 ? void 0 : candyMachine1.program))) {
                            _ctx.next = 12;
                            break;
                        }
                        _ctx.next = 6;
                        return mintOneToken(candyMachine1, props.config, wallet.publicKey, props.treasury);
                    case 6:
                        mintTxId = _ctx.sent;
                        alert.show("Confirming transaction...");
                        _ctx.next = 10;
                        return awaitTransactionSignatureConfirmation(mintTxId, props.txTimeout, connection, "singleGossip", false);
                    case 10:
                        status = _ctx.sent;
                        if (!(status === null || status === void 0 ? void 0 : status.err)) {
                            alert.success("Congratulations! Mint succeeded!");
                        } else {
                            alert.error("Mint failed! Please try again!");
                        }
                    case 12:
                        _ctx.next = 19;
                        break;
                    case 14:
                        _ctx.prev = 14;
                        _ctx.t0 = _ctx["catch"](0);
                        message = _ctx.t0.msg || "Minting failed! Please try again!";
                        if (!_ctx.t0.msg) {
                            if (_ctx.t0.message.indexOf("0x138")) {} else if (_ctx.t0.message.indexOf("0x137")) {
                                message = "SOLD OUT!";
                            } else if (_ctx.t0.message.indexOf("0x135")) {
                                message = "Insufficient funds to mint. Please fund your wallet.";
                            }
                        } else {
                            if (_ctx.t0.code === 311) {
                                message = "SOLD OUT!";
                                setIsSoldOut(true);
                            } else if (_ctx.t0.code === 312) {
                                message = "Minting period hasn't started yet.";
                            }
                        }
                        alert.error(message);
                    case 19:
                        _ctx.prev = 19;
                        if (!wallet) {
                            _ctx.next = 25;
                            break;
                        }
                        _ctx.next = 23;
                        return connection.getBalance(wallet.publicKey);
                    case 23:
                        balance = _ctx.sent;
                        setBalance(balance / index_browser_esm.LAMPORTS_PER_SOL);
                    case 25:
                        setIsMinting(false);
                        return _ctx.finish(19);
                    case 27:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee, null, [
                [
                    0,
                    14,
                    19,
                    27
                ]
            ]);
        }));
        return function onMint() {
            return _ref.apply(this, arguments);
        };
    }();
    (0,react.useEffect)(function() {
        MintSection_asyncToGenerator(runtime_default().mark(function _callee() {
            var balance;
            return runtime_default().wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        if (!wallet) {
                            _ctx.next = 5;
                            break;
                        }
                        _ctx.next = 3;
                        return connection.getBalance(wallet.publicKey);
                    case 3:
                        balance = _ctx.sent;
                        setBalance(balance / index_browser_esm.LAMPORTS_PER_SOL);
                    case 5:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee);
        }))();
    }, [
        wallet,
        connection
    ]);
    (0,react.useEffect)(function() {
        MintSection_asyncToGenerator(runtime_default().mark(function _callee() {
            var ref, candyMachine, goLiveDate, itemsRemaining, itemsAvailable, price;
            return runtime_default().wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        if (wallet) {
                            _ctx.next = 2;
                            break;
                        }
                        return _ctx.abrupt("return");
                    case 2:
                        _ctx.prev = 2;
                        _ctx.next = 5;
                        return getCandyMachineState(wallet, props.candyMachineId, connection);
                    case 5:
                        ref = _ctx.sent;
                        candyMachine = ref.candyMachine;
                        goLiveDate = ref.goLiveDate;
                        itemsRemaining = ref.itemsRemaining;
                        itemsAvailable = ref.itemsAvailable;
                        price = ref.price;
                        setIsSoldOut(itemsRemaining === 0);
                        setStartDate(goLiveDate);
                        setCandyMachine(candyMachine);
                        setCounter({
                            itemsRemaining: itemsRemaining,
                            itemsAvailable: itemsAvailable
                        });
                        setPrice(price / index_browser_esm.LAMPORTS_PER_SOL);
                        _ctx.next = 22;
                        break;
                    case 18:
                        _ctx.prev = 18;
                        _ctx.t0 = _ctx["catch"](2);
                        console.error(_ctx.t0);
                        alert.error("Error fetching CandyMachine. Check browser console for the details.");
                    case 22:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee, null, [
                [
                    2,
                    18
                ]
            ]);
        }))();
    }, [
        wallet,
        props.candyMachineId,
        connection
    ]);
    console.log("startDate", startDate);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "grid grid-cols-1 gap-4",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        wallet && /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            children: [
                                "Balance: ◎",
                                (balance1 || 0).toLocaleString()
                            ]
                        }),
                        (counter === null || counter === void 0 ? void 0 : counter.itemsAvailable) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                counter === null || counter === void 0 ? void 0 : counter.itemsRemaining,
                                " of ",
                                counter === null || counter === void 0 ? void 0 : counter.itemsAvailable,
                                " Available"
                            ]
                        }) : null
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    children: !wallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectAndConnectWalletButton, {
                        onUseWalletClick: function() {}
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        disabled: isSoldOut || isMinting || !isActive,
                        onClick: onMint,
                        className: "btn btn-primary btn-wide btn-lg",
                        children: isSoldOut ? "SOLD OUT" : isActive ? isMinting ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Loader, {
                            noText: true
                        }) : "MINT for ◎".concat(price1) : /*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* default */.ZP, {
                            date: startDate,
                            onMount: function(param) {
                                var completed = param.completed;
                                return completed && setIsActive(true);
                            },
                            onComplete: function() {
                                return setIsActive(true);
                            },
                            renderer: renderCounter
                        })
                    })
                })
            ]
        })
    }));
};
var renderCounter = function(param) {
    var days = param.days, hours = param.hours, minutes = param.minutes, seconds = param.seconds, completed = param.completed;
    if (!seconds) return(/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        children: "Loading..."
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        children: [
            hours,
            " hours, ",
            minutes,
            " minutes, ",
            seconds,
            " seconds"
        ]
    }));
};

;// CONCATENATED MODULE: ./src/views/CandyMachineMintView/config.ts
var config = {
    CANDY_MACHINE_CONFIG: "6vbr5zpU44G4Ni2S36S6m7bhjMwy4ZiabVG5nJnxWWeK",
    CANDY_MACHINE_ID: "4f2UZyh476EMGeMo12yRmmxYNBHnGhjyvuwQJMBAnKbd",
    CANDY_START_DATE: "1639155600",
    TREASURY_ADDRESS: "CBBUMHRmbVUck99mTCip5sHP16kzGj3QTYB8K3XxwmQx"
};

// EXTERNAL MODULE: ./src/views/CandyMachineMintView/index.module.css
var CandyMachineMintView_index_module = __webpack_require__(1909);
var CandyMachineMintView_index_module_default = /*#__PURE__*/__webpack_require__.n(CandyMachineMintView_index_module);
;// CONCATENATED MODULE: ./src/views/CandyMachineMintView/index.tsx
/* provided dependency */ var process = __webpack_require__(4155);

/**
 * This is template for Candy Machine v.1
 *
 *
 *
 *
 * Most likely you don't need it since Candy Machine is updated to v.2
 * which is differnt from v.1
 *
 *
 *
 *
 *
 *
 *
 */ 






function CandyMachineMintView_throw(e) {
    throw e;
}
var treasury = new browser/* web3.PublicKey */.rV.PublicKey(config.TREASURY_ADDRESS);
var candyMachineConfig = new browser/* web3.PublicKey */.rV.PublicKey(config.CANDY_MACHINE_CONFIG);
var candyMachineId = new browser/* web3.PublicKey */.rV.PublicKey(config.CANDY_MACHINE_ID);
var startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE, 10);
var txTimeout = 30000; // milliseconds (confirm this works for your project)
var CandyMachineMintView = function(param) {
    var param = param !== null ? param : CandyMachineMintView_throw(new TypeError("Cannot destructure undefined"));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "container mx-auto max-w-6xl p-8 2xl:px-0",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (CandyMachineMintView_index_module_default()).container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                className: "btn btn-square btn-ghost",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-4xl",
                                    children: "🍬"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-1 px-2 mx-2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-sm breadcrumbs",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "text-xl",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(next_link["default"], {
                                                href: "/",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    children: "Templates"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "opacity-40",
                                                children: "NFT Mint UI"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(lib/* WalletMultiButton */.aD, {
                                className: "btn btn-ghost"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "text-center pt-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "hero min-h-16 py-20",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-center hero-content",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "max-w-lg",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                            className: "mb-5 text-5xl",
                                            children: [
                                                "Candy Machine Mint UI ",
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(SolanaLogo, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                            className: "mb-5",
                                            children: [
                                                "Here is very basic example of minting site. ",
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                                "It uses",
                                                " ",
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    href: "https://github.com/exiled-apes/candy-machine-mint",
                                                    target: "_blank",
                                                    className: "link font-bold",
                                                    rel: "noreferrer",
                                                    children: "exiled-apes/candy-machine-mint"
                                                }),
                                                " ",
                                                "code migrated to be used with Next.JS app."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            children: "UI connects to DEVNET network."
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MintSection, {
                                candyMachineId: candyMachineId,
                                config: candyMachineConfig,
                                startDate: startDateSeed,
                                treasury: treasury,
                                txTimeout: txTimeout
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "max-w-xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                    className: "mb-5 mt-16 text-5xl",
                                    children: "Description:"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    children: [
                                        "You can test this Candy Machine mint on Devnet.",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                        "Switch to Devnet in ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                                            children: "src/pages/_app.tsx"
                                        }),
                                        " file. And run app locally."
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    children: [
                                        "Edit ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                                            children: "src/views/CandyMachineMintView/config.ts"
                                        }),
                                        " to use your own Candy Machine.",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                        " You can read details about variables on",
                                        " ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: "https://github.com/exiled-apes/candy-machine-mint#environment-variables",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "link hover:underline",
                                            children: "exiled-apes/candy-machine-mints Github"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    children: [
                                        "Always set custom RPC server for the final mint site. ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                        "You can do it here: ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                                            children: "src/pages/_app.tsx"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                        "Otherwise, Solana can ban your website for overusing RPC server. You dont want it in the middle of your mint 😳"
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

// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/HomeIcon.js
var HomeIcon = __webpack_require__(1782);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/UserIcon.js
var UserIcon = __webpack_require__(5301);
// EXTERNAL MODULE: ./node_modules/lodash.orderby/index.js
var lodash_orderby = __webpack_require__(5316);
var lodash_orderby_default = /*#__PURE__*/__webpack_require__.n(lodash_orderby);
// EXTERNAL MODULE: ./src/views/SolanaTweeterView/index.module.css
var SolanaTweeterView_index_module = __webpack_require__(9801);
var SolanaTweeterView_index_module_default = /*#__PURE__*/__webpack_require__.n(SolanaTweeterView_index_module);
// EXTERNAL MODULE: ./node_modules/bs58/index.js
var node_modules_bs58 = __webpack_require__(7191);
;// CONCATENATED MODULE: ./src/views/SolanaTweeterView/Tweet.ts
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Tweet = /*#__PURE__*/ function() {
    "use strict";
    function Tweet(publicKey, accountData) {
        _classCallCheck(this, Tweet);
        this.publicKey = publicKey;
        this.author = accountData.author;
        this.timestamp = accountData.timestamp.toString();
        this.topic = accountData.topic;
        this.content = accountData.content;
    }
    _createClass(Tweet, [
        {
            key: "key",
            get: function get() {
                return this.publicKey.toBase58();
            }
        },
        {
            key: "authorDisplay",
            get: function get() {
                var author = this.author.toBase58();
                return author.slice(0, 4) + ".." + author.slice(-4);
            }
        },
        {
            key: "createdAt",
            get: function get() {
                var date = getDate(this.timestamp);
                return date.toLocaleDateString();
            }
        },
        {
            key: "createdAgo",
            get: function get() {
                var date = getDate(this.timestamp);
                return timeSince(date);
            }
        }
    ]);
    return Tweet;
}();
// convert unix timestamp to js date object
var getDate = function(timestamp) {
    var utxDate = parseInt(timestamp);
    var date = new Date(utxDate * 1000);
    return date;
};
function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = seconds / 31536000;
    if (interval > 1) {
        return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}
var aDay = (/* unused pure expression or super */ null && (24 * 60 * 60 * 1000));

;// CONCATENATED MODULE: ./src/views/SolanaTweeterView/tweets.ts
/* provided dependency */ var tweets_Buffer = __webpack_require__(8764)["Buffer"];




function tweets_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function tweets_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                tweets_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                tweets_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var getTweets = function() {
    var _ref = tweets_asyncToGenerator(runtime_default().mark(function _callee(param) {
        var program, _filter, filter, tweetsRaw, tweets;
        return runtime_default().wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    program = param.program, _filter = param.filter, filter = _filter === void 0 ? [] : _filter;
                    _ctx.next = 3;
                    return program.account.tweet.all(filter);
                case 3:
                    tweetsRaw = _ctx.sent;
                    tweets = tweetsRaw.map(function(t) {
                        return new Tweet(t.publicKey, t.account);
                    });
                    return _ctx.abrupt("return", tweets);
                case 6:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return function getTweets(_) {
        return _ref.apply(this, arguments);
    };
}();
var authorFilter = function(authorBase58PublicKey) {
    return {
        memcmp: {
            offset: 8,
            bytes: authorBase58PublicKey
        }
    };
};
var topicFilter = function(topic) {
    return {
        memcmp: {
            offset: 8 + 32 + 8 + 4,
            bytes: bs58.encode(tweets_Buffer.from(topic))
        }
    };
};
var sendTweet = function() {
    var _ref = tweets_asyncToGenerator(runtime_default().mark(function _callee(param) {
        var wallet, program, topic, content, tweet, newTweetAccount;
        return runtime_default().wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    wallet = param.wallet, program = param.program, topic = param.topic, content = param.content;
                    tweet = browser/* web3.Keypair.generate */.rV.Keypair.generate();
                    _ctx.next = 4;
                    return program.rpc.sendTweet(topic, content, {
                        accounts: {
                            author: wallet.publicKey,
                            tweet: tweet.publicKey,
                            systemProgram: browser/* web3.SystemProgram.programId */.rV.SystemProgram.programId
                        },
                        signers: [
                            tweet
                        ]
                    });
                case 4:
                    newTweetAccount = {
                        author: wallet.publicKey,
                        timestamp: new browser.BN(new Date().getTime()),
                        topic: topic,
                        content: content
                    };
                    return _ctx.abrupt("return", new Tweet(tweet.publicKey, newTweetAccount));
                case 6:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return function sendTweet(_) {
        return _ref.apply(this, arguments);
    };
}();

;// CONCATENATED MODULE: ./src/views/SolanaTweeterView/solana-tweeter-idl.json
var solana_tweeter_idl_namespaceObject = JSON.parse('{"version":"0.1.0","name":"rust","instructions":[{"name":"sendTweet","accounts":[{"name":"tweet","isMut":true,"isSigner":true},{"name":"author","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"topic","type":"string"},{"name":"content","type":"string"}]}],"accounts":[{"name":"Tweet","type":{"kind":"struct","fields":[{"name":"author","type":"publicKey"},{"name":"timestamp","type":"i64"},{"name":"topic","type":"string"},{"name":"content","type":"string"}]}}],"errors":[{"code":6000,"name":"TopicTooLong","msg":"The provided topic should be 50 chars long maximum."},{"code":6001,"name":"ContentTooLong","msg":"The provided content should be 280 chars long max."}],"metadata":{"address":"926GETHcFsLU3vDWQUEnTpWYRYXktK6gCCfzivjFq4pa"}}');
;// CONCATENATED MODULE: ./src/views/SolanaTweeterView/useProgram.ts




var SOLANA_TWITTER_PROGRAM = "926GETHcFsLU3vDWQUEnTpWYRYXktK6gCCfzivjFq4pa";
var programID = new index_browser_esm.PublicKey(SOLANA_TWITTER_PROGRAM);
var useProgram = function(param) {
    var connection = param.connection, wallet = param.wallet;
    var ref = (0,react.useState)(), program1 = ref[0], setProgram = ref[1];
    (0,react.useEffect)(function() {
        updateProgram();
    }, [
        connection,
        wallet
    ]);
    var updateProgram = function() {
        var provider = new browser/* Provider */.zt(connection, wallet, {
            preflightCommitment: "recent",
            commitment: "processed"
        });
        console.log("provider", provider);
        //   const idl = await anchor.Program.fetchIdl(programID, provider);
        //   console.log("idl", idl);
        var program = new browser/* Program */.$r(solana_tweeter_idl_namespaceObject, programID, provider);
        setProgram(program);
    };
    return {
        program: program1
    };
};

;// CONCATENATED MODULE: ./src/views/SolanaTweeterView/index.tsx














function SolanaTweeterView_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function SolanaTweeterView_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                SolanaTweeterView_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                SolanaTweeterView_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function SolanaTweeterView_throw(e) {
    throw e;
}
var endpoint = "https://explorer-api.devnet.solana.com";
var connection = new browser/* web3.Connection */.rV.Connection(endpoint);
var SolanaTweeterView = function(param) {
    var param = param !== null ? param : SolanaTweeterView_throw(new TypeError("Cannot destructure undefined"));
    var ref = (0,react.useState)(false), isAirDropped = ref[0], setIsAirDropped = ref[1];
    var wallet = (0,useAnchorWallet/* useAnchorWallet */.z)();
    var airdropToWallet = function() {
        var _ref = SolanaTweeterView_asyncToGenerator(runtime_default().mark(function _callee() {
            var signature, tx;
            return runtime_default().wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        if (!wallet) {
                            _ctx.next = 9;
                            break;
                        }
                        setIsAirDropped(false);
                        _ctx.next = 4;
                        return connection.requestAirdrop(wallet.publicKey, 1000000000);
                    case 4:
                        signature = _ctx.sent;
                        _ctx.next = 7;
                        return connection.confirmTransaction(signature);
                    case 7:
                        tx = _ctx.sent;
                        setIsAirDropped(true);
                    case 9:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee);
        }));
        return function airdropToWallet() {
            return _ref.apply(this, arguments);
        };
    }();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "container mx-auto max-w-6xl p-8 2xl:px-0",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (SolanaTweeterView_index_module_default()).container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                className: "btn btn-square btn-ghost",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-4xl",
                                    children: "🐦"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-1 px-2 mx-2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-sm breadcrumbs",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "text-xl",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(next_link["default"], {
                                                href: "/",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    children: "Templates"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "opacity-40",
                                                children: "Solana Twitter"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(lib/* WalletMultiButton */.aD, {
                                className: "btn btn-ghost"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "text-center pt-2",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "hero min-h-16 pt-4",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "text-center hero-content",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "max-w-lg",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                        className: "mb-5 text-5xl",
                                        children: [
                                            "Solana Twitter ",
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SolanaLogo, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        className: "mb-5",
                                        children: [
                                            "Here is simplified version of Twitter as a Solana dApp. ",
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                            "It aims to be Next.JS UI build for",
                                            " ",
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: "https://lorisleiva.com/create-a-solana-dapp-from-scratch",
                                                target: "_blank",
                                                className: "link font-bold",
                                                rel: "noreferrer",
                                                children: "Create a Solana dApp from scratch"
                                            }),
                                            " ",
                                            "tutorial."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        children: "UI connects to DEVNET network."
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex mb-16",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "mr-4",
                            children: "Need some SOL on test wallet?"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "mr-4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                className: "btn btn-primary normal-case btn-xs",
                                onClick: airdropToWallet,
                                children: "Airdrop 1 SOL"
                            })
                        }),
                        isAirDropped ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "opacity-50",
                            children: "Sent!"
                        }) : null
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    children: !wallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectAndConnectWalletButton, {
                        onUseWalletClick: function() {}
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(TwitterScreen, {})
                })
            ]
        })
    }));
};
var TwitterScreen = function() {
    var wallet = (0,useAnchorWallet/* useAnchorWallet */.z)();
    var ref = (0,react.useState)(0), activeTab = ref[0], setActiveTab = ref[1];
    var ref1 = (0,react.useState)([]), tweets1 = ref1[0], setTweets = ref1[1];
    var ref2 = (0,react.useState)([]), profileTweets = ref2[0], setProfileTweets = ref2[1];
    var program = useProgram({
        connection: connection,
        wallet: wallet
    }).program;
    var ref3 = (0,react.useState)(), lastUpdatedTime = ref3[0], setLastUpdatedTime = ref3[1];
    (0,react.useEffect)(function() {
        fetchTweets();
        fetchProfileTweets();
    }, [
        wallet,
        lastUpdatedTime
    ]);
    var fetchTweets = function() {
        var _ref = SolanaTweeterView_asyncToGenerator(runtime_default().mark(function _callee() {
            var tweets;
            return runtime_default().wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        if (!(wallet && program)) {
                            _ctx.next = 10;
                            break;
                        }
                        _ctx.prev = 1;
                        _ctx.next = 4;
                        return getTweets({
                            program: program
                        });
                    case 4:
                        tweets = _ctx.sent;
                        setTweets(tweets);
                        _ctx.next = 10;
                        break;
                    case 8:
                        _ctx.prev = 8;
                        _ctx.t0 = _ctx["catch"](1);
                    case 10:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee, null, [
                [
                    1,
                    8
                ]
            ]);
        }));
        return function fetchTweets() {
            return _ref.apply(this, arguments);
        };
    }();
    var fetchProfileTweets = function() {
        var _ref = SolanaTweeterView_asyncToGenerator(runtime_default().mark(function _callee() {
            var tweets;
            return runtime_default().wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        if (!(wallet && program)) {
                            _ctx.next = 10;
                            break;
                        }
                        _ctx.prev = 1;
                        _ctx.next = 4;
                        return getTweets({
                            program: program,
                            // topicFilter('solana'),
                            filter: [
                                authorFilter(wallet === null || wallet === void 0 ? void 0 : wallet.publicKey.toBase58())
                            ]
                        });
                    case 4:
                        tweets = _ctx.sent;
                        setProfileTweets(tweets);
                        _ctx.next = 10;
                        break;
                    case 8:
                        _ctx.prev = 8;
                        _ctx.t0 = _ctx["catch"](1);
                    case 10:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee, null, [
                [
                    1,
                    8
                ]
            ]);
        }));
        return function fetchProfileTweets() {
            return _ref.apply(this, arguments);
        };
    }();
    var onTweenSent = function(newTweet) {
        setTweets(function(prevState) {
            return _objectSpread({}, prevState, {
                newTweet: newTweet
            });
        });
    };
    var sortedTweets = lodash_orderby_default()(tweets1, [
        "timestamp"
    ], [
        "desc"
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "rounded-lg shadow flex",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "border-r border-gray-500 mr-8",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                    className: "menu p-4 overflow-y-auto bg-base-100 text-base-content",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                className: activeTab === 0 ? "active" : "",
                                onClick: function() {
                                    return setActiveTab(0);
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HomeIcon/* default */.Z, {
                                    className: "h-8 w-8 text-white-500"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                className: activeTab === 1 ? "active" : "",
                                onClick: function() {
                                    return setActiveTab(1);
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(UserIcon/* default */.Z, {
                                    className: "h-8 w-8 text-white-500"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex flex-col items-center justify-center",
                children: activeTab === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "text-xs",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(NetTweet, {
                            onTweenSent: onTweenSent
                        }),
                        sortedTweets.map(function(t) {
                            /*#__PURE__*/ return (0,jsx_runtime.jsx)(SolanaTweeterView_Tweet, {
                                content: t
                            }, t.key);
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(TwitterProfile, {
                    tweets: profileTweets,
                    wallet: wallet
                })
            })
        ]
    }));
};
var NetTweet = function(param) {
    var onTweenSent = param.onTweenSent;
    var wallet = (0,useAnchorWallet/* useAnchorWallet */.z)();
    var program = useProgram({
        connection: connection,
        wallet: wallet
    }).program;
    var ref = (0,react.useState)(""), content = ref[0], setContent = ref[1];
    var onContentChange = function(e) {
        var value = e.target.value;
        if (value) {
            setContent(value);
        }
    };
    var onTweetSendClick = function() {
        var _ref = SolanaTweeterView_asyncToGenerator(runtime_default().mark(function _callee() {
            var topic, tweet;
            return runtime_default().wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        if (!(!content || !program)) {
                            _ctx.next = 2;
                            break;
                        }
                        return _ctx.abrupt("return");
                    case 2:
                        topic = "default";
                        _ctx.next = 5;
                        return sendTweet({
                            wallet: wallet,
                            program: program,
                            topic: topic,
                            content: content
                        });
                    case 5:
                        tweet = _ctx.sent;
                        console.log("added new tweet: ", tweet);
                        setContent("");
                        onTweenSent(tweet);
                    case 9:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee);
        }));
        return function onTweetSendClick() {
            return _ref.apply(this, arguments);
        };
    }();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mb-8 pb-4 border-b border-gray-500 flex ",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "avatar placeholder mr-4",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "mb-4 rounded-full bg-neutral-focus text-neutral-content w-14 h-14",
                    children: "Me"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "form-control flex-1 mx-2",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                    className: "textarea h-24 w-full text-2xl",
                    placeholder: "What's happening?",
                    value: content,
                    onChange: onContentChange
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "ml-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    className: "btn btn-primary rounded-full normal-case px-16",
                    onClick: onTweetSendClick,
                    children: "Tweet"
                })
            })
        ]
    }));
};
var SolanaTweeterView_Tweet = function(param) {
    var content = param.content;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mb-8 border-b border-gray-500 flex",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "avatar placeholder mr-4",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "mb-4 rounded-full bg-neutral-focus text-neutral-content w-14 h-14",
                    children: content.authorDisplay.slice(0, 2)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex text-sm",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "font-bold",
                                children: content.authorDisplay
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "mx-2 opacity-50",
                                children: "\xb7"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "opacity-50",
                                children: content.createdAgo
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "text-xl",
                        children: content.content
                    }),
                    content.topic ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-pink-400 my-2",
                        children: [
                            "#",
                            content.topic
                        ]
                    }) : null
                ]
            })
        ]
    }));
};
var TwitterProfile = function(param) {
    var tweets = param.tweets, wallet = param.wallet;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex-1 text-left width-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                children: "Profile"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                children: wallet.publicKey.toString()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "my-8",
                children: [
                    tweets.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "text-3xl opacity-50 text-center",
                        children: "You have no tweets"
                    }) : null,
                    tweets.map(function(t) {
                        /*#__PURE__*/ return (0,jsx_runtime.jsx)(SolanaTweeterView_Tweet, {
                            content: t
                        }, t.key);
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/views/index.tsx






/***/ }),

/***/ 1909:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 8240:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 6104:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"HomeView_container__h25oo"};

/***/ }),

/***/ 9801:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ })

}]);