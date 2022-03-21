"use strict";
exports.id = 7540;
exports.ids = [7540];
exports.modules = {

/***/ 7540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Home_Posts)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/Post/Tags.tsx


const Tags = ({ tags  })=>{
    const tagsTypeMapping = {
        secondary: "bg-secondary",
        info: "bg-error",
        error: "bg-error",
        warning: "bg-warning"
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex gap-1",
        children: tags.map(({ title , type  }, index)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: `mt-2 rounded-full badge ${tagsTypeMapping[type]} text-white`,
                children: title
            }, index)
        )
    }));
};
/* harmony default export */ const Post_Tags = (Tags);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/assets/images/placeholder/avatar_small.png
/* harmony default export */ const avatar_small = ({"src":"/_next/static/media/avatar_small.85764696.png","height":24,"width":24,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA6klEQVR42mOAAl0jJaH9OuI8P+yUhH/ZqwntAYrpwCR1UhyV3s2LNfqvzMP230Nd9P+kEN3/Aboi74Byegzq0tx7liaZ/I9QEvgJFPjPCMTGPBw/cxyU/pvI8+5nKHJT/rUoRv8/SFKBn/W/NBfrf1021v+uikL/3bTEfjCk28v9qPFVBSsQ5WT+z8XGBGbXe6n8T7aX+8UgxsWyX0aADST4k42R6b8gGzOYHWkt999VV3QPAxDoMTEwvONgYvrPzMD4nwGIBVjBit7BfSLPw6LDwci4h4mB8RczI+MPFgam/WrinHoMDAwMAObpRaw6qP1UAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: ./src/components/Icons/index.tsx + 30 modules
var Icons = __webpack_require__(467);
;// CONCATENATED MODULE: ./src/components/Post/Footer.tsx






const Footer = ({ type  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "border-t justify-between border-[hsl(210,9%,9%)] flex px-10 py-5 bg-[#1F2125] border-l border-r border-l-darkcharcoal border-r-darkcharcoal w-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex gap-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-center gap-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-xs text-gray-950",
                                children: "Posted by"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/user/123",
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "flex flex-row",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                src: avatar_small,
                                                alt: "user avatar"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "ml-1 text-sm text-secondary",
                                        children: "u/rayvtoriq_"
                                    })
                                ]
                            })
                        ]
                    }),
                    type !== "announcement" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center justify-center gap-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Download */.UW, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-xs text-gray-950",
                                        children: "808 Downloads"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center justify-center gap-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Love */.jW, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-xs text-gray-950",
                                        children: "2.5k Likes"
                                    })
                                ]
                            })
                        ]
                    }),
                    type === "announcement" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center justify-center gap-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-xs text-gray-950",
                            children: "9 hours ago"
                        })
                    }),
                    type === "featured" && /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/#",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "ml-1 text-sm text-secondary",
                            children: "Try in your Room"
                        })
                    }),
                    type === "normal" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-center gap-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Share */.mB, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-xs text-gray-950",
                                children: "101 Shares"
                            })
                        ]
                    })
                ]
            }),
            type === "announcement" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                className: "gap-3 text-xs font-bold btn btn-sm rounded-3xl bg-[#1d3040] ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Icons/* Calendar */.f, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
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
/* harmony default export */ const Post_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/AframeComp/index.tsx


function AframeComp() {
    const { 0: mounted , 1: setMounted  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        __webpack_require__(5250);
        setMounted(true);
    }, []);
    if (mounted) {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a-scene", {
            arjs: "",
            embedded: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a-entity", {
                    camera: true
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a-assets", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a-asset-item", {
                        id: "ciao",
                        src: "/slot/scene.gltf"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a-entity", {
                    camera: true
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a-gltf-model", {
                    src: "#ciao",
                    scale: "0.06 0.06 0.06",
                    position: "3 -5 -7",
                    rotation: "0 -50 0"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a-sky", {
                    src: "https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhciUyMHRleHR1cmV8ZW58MHx8MHx8&w=1000&q=80"
                })
            ]
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "load..."
    }));
};

// EXTERNAL MODULE: ./src/components/AframeComp1/index.tsx
var AframeComp1 = __webpack_require__(7016);
// EXTERNAL MODULE: ./src/components/AframeComp2/index.tsx
var AframeComp2 = __webpack_require__(9688);
;// CONCATENATED MODULE: ./src/components/AframeComp3/index.tsx


function AframeComp4() {
    const { 0: mounted , 1: setMounted  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        __webpack_require__(5250);
        setMounted(true);
    }, []);
    if (mounted) {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a-scene", {
            arjs: "",
            embedded: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a-entity", {
                    camera: true
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a-assets", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a-asset-item", {
                        id: "bastardo",
                        src: "/room/scene.gltf"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a-entity", {
                    camera: true
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a-entity", {
                    rotation: "0 -105 0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a-gltf-model", {
                        src: "#bastardo",
                        scale: "1 1 1",
                        position: "0 -40 0",
                        rotation: "0 -35 0"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a-sky", {
                    src: "https://t4.ftcdn.net/jpg/03/38/03/31/360_F_338033132_xBAEbVbjqYOkxtpyhWF5CzdyiecmRp2F.jpg"
                })
            ]
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "load..."
    }));
};

;// CONCATENATED MODULE: ./src/components/AframeComp4/index.tsx


function AframeComp3() {
    const { 0: mounted , 1: setMounted  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        __webpack_require__(5250);
        setMounted(true);
    }, []);
    if (mounted) {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a-scene", {
            arjs: "",
            embedded: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a-entity", {
                    id: "rig",
                    position: "25 10 0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a-entity", {
                        id: "camera",
                        camera: true,
                        "look-controls": true
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a-assets", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a-asset-item", {
                        id: "tio",
                        src: "/alien/scene.gltf"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a-entity", {
                    rotation: "0 0 0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a-gltf-model", {
                        src: "#tio",
                        scale: "2 2 2",
                        position: "0 1.6 -0.7 ",
                        rotation: "0 0 0",
                        animation__rot: "property:rotation; dur:5000; to:0 360 0; loop: true; easing:linear;"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a-sky", {
                    src: "https://media.istockphoto.com/photos/dark-background-with-a-spotlight-in-the-center-picture-id1002995898?k=20&m=1002995898&s=170667a&w=0&h=8yWv-UOChWMCefA-Md0KkzyFKnjSjzWA7kOAVP1mUUI="
                })
            ]
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "load..."
    }));
};

;// CONCATENATED MODULE: ./src/components/AframeComp5/index.tsx


function AframeComp5() {
    const { 0: mounted , 1: setMounted  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        __webpack_require__(5250);
        setMounted(true);
    }, []);
    if (mounted) {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a-scene", {
            arjs: "",
            embedded: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a-cursor", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("a-entity", {
                    camera: true,
                    "look-controls": true
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a-assets", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a-asset-item", {
                        id: "nonno",
                        src: "/super mario/scene.gltf"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a-entity", {
                    rotation: "0 0 0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a-gltf-model", {
                        src: "#nonno",
                        scale: "1 1 1",
                        position: "0 -5 0"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a-entity", {
                    camera: true
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a-sky", {
                    src: "https://cdna.artstation.com/p/assets/images/images/027/829/656/medium/porntap-paenmook-nsmbu-sky-background-1.jpg?1592674343∂"
                })
            ]
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
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















const index = ({ data: { title , subtitle , likes , vr , vr1 , vr2 , vr3 , vr4 , vr5 , vr6 , vr7 , vr8 , vr9 , type , tags , progress , user  }  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex gap-4 bg-[#1F2125] px-5 py-3 border-l border-darkcharcoal border-r ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "relative mt-3 w-14 h-14",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: user.avatar,
                                alt: title,
                                layout: "fill",
                                className: "rounded-full"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col w-full",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "font-bold text-secondary",
                                children: user.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-start justify-between w-full",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: external_classnames_default()(type === "featured" ? "text-base" : "text-xl", "font-bold"),
                                                    dangerouslySetInnerHTML: {
                                                        __html: title
                                                    }
                                                })
                                            }),
                                            tags && /*#__PURE__*/ jsx_runtime_.jsx(Post_Tags, {
                                                tags: tags
                                            })
                                        ]
                                    }),
                                    type !== "announcement" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col items-end",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-sm font-bold",
                                                children: likes
                                            }),
                                            type !== "featured" && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-xs text-gray-950",
                                                children: "9 hours ago"
                                            })
                                        ]
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "rounded-full btn btn-primary",
                                        children: "ACTIVE"
                                    })
                                ]
                            }),
                            subtitle && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "mt-2 text-sm leading-5",
                                dangerouslySetInnerHTML: {
                                    __html: subtitle
                                }
                            }),
                            progress && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center justify-end w-full gap-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "text-xs text-gray-950",
                                        children: [
                                            progress,
                                            "% Completed"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("progress", {
                                        className: "w-40 h-1 progress progress-success h",
                                        value: progress,
                                        max: "100"
                                    })
                                ]
                            }),
                            vr && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative w-full h-[229px] rounded-2xl mt-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(AframeComp, {})
                            }),
                            vr1 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative w-full h-[229px] rounded-2xl mt-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(AframeComp1/* default */.Z, {}),
                                    vr1.price && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        className: "absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary",
                                        children: [
                                            vr1.price,
                                            " $VRS"
                                        ]
                                    })
                                ]
                            }),
                            vr2 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative w-full h-[229px] rounded-2xl mt-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(AframeComp2/* default */.Z, {}),
                                    vr2.price && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        className: "absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary",
                                        children: [
                                            vr2.price,
                                            " $VRS"
                                        ]
                                    })
                                ]
                            }),
                            vr3 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative w-full h-[229px] rounded-2xl mt-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(AframeComp4, {}),
                                    vr3.price && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        className: "absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary",
                                        children: [
                                            vr3.price,
                                            " $VRS"
                                        ]
                                    })
                                ]
                            }),
                            vr4 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative w-full h-[229px] rounded-2xl mt-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(AframeComp3, {})
                            }),
                            vr5 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative w-full h-[229px] rounded-2xl mt-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(AframeComp5, {}),
                                    vr5.price && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        className: "absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary",
                                        children: [
                                            vr5.price,
                                            " $VRS"
                                        ]
                                    })
                                ]
                            }),
                            vr7 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative w-full h-[229px] rounded-2xl mt-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(AframeComp7/* default */.Z, {}),
                                    vr7.price && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        className: "absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary",
                                        children: [
                                            vr7.price,
                                            " $VRS"
                                        ]
                                    })
                                ]
                            }),
                            vr8 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative w-full h-[229px] rounded-2xl mt-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(AframeComp8/* default */.Z, {}),
                                    vr8.price && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        className: "absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary",
                                        children: [
                                            vr8.price,
                                            " $VRS"
                                        ]
                                    })
                                ]
                            }),
                            vr9 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative w-full h-[229px] rounded-2xl mt-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(AframeComp9/* default */.Z, {}),
                                    vr9.price && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
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
            /*#__PURE__*/ jsx_runtime_.jsx(Post_Footer, {
                type: type
            })
        ]
    }));
};
/* harmony default export */ const Post = (index);

;// CONCATENATED MODULE: ./src/modules/Home/Posts.tsx



const Posts = ({ posts  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col gap-1 pb-5",
        children: posts.map((post, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Post, {
                data: post
            }, index)
        )
    }));
};
/* harmony default export */ const Home_Posts = (Posts);


/***/ })

};
;