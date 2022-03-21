(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[538],{

/***/ 8350:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/experience",
      function () {
        return __webpack_require__(8031);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 8031:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ experience; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/Layout/index.tsx + 8 modules
var Layout = __webpack_require__(5090);
// EXTERNAL MODULE: ./src/components/Gallery/GalleryRowHeader.tsx
var GalleryRowHeader = __webpack_require__(7769);
// EXTERNAL MODULE: ./src/components/Gallery/GalleryItem.tsx
var GalleryItem = __webpack_require__(6359);
;// CONCATENATED MODULE: ./src/components/Gallery/GalleryERow.tsx




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
var GalleryERow = function(param) {
    var title = param.title, items = param.items;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(GalleryRowHeader/* default */.Z, {
                title: title
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "grid grid-cols-4 gap-3 mt-4",
                children: items.map(function(item, index) {
                    /*#__PURE__*/ return (0,jsx_runtime.jsx)(GalleryItem/* default */.Z, _objectSpread({}, item), index);
                })
            })
        ]
    }));
};
/* harmony default export */ var Gallery_GalleryERow = (GalleryERow);

;// CONCATENATED MODULE: ./src/components/GalleryE/index.tsx



function GalleryE_defineProperty(obj, key, value) {
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
function GalleryE_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            GalleryE_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
var GalleryE = function(param) {
    var rows = param.rows;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "flex flex-col gap-6 my-4",
        children: rows.map(function(row, index) {
            /*#__PURE__*/ return (0,jsx_runtime.jsx)(Gallery_GalleryERow, GalleryE_objectSpread({}, row), index);
        })
    }));
};
/* harmony default export */ var components_GalleryE = (GalleryE);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/components/BigRoom/RoomScene/index.tsx



var RoomScene = function(param) {
    var bgImage = param.data;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
            src: bgImage,
            alt: "VR Image",
            layout: "fill",
            objectFit: "cover",
            className: "rounded-2xl"
        })
    }));
};
/* harmony default export */ var BigRoom_RoomScene = (RoomScene);

;// CONCATENATED MODULE: ./src/components/LiveRoom/index.tsx



var index = function(param) {
    var _data = param.data, title = _data.title, creator = _data.creator, avatars = _data.avatars;
    var ref = (0,react.useState)(false), swapModalOpen = ref[0], setSwapModalOpen = ref[1];
    var handleModalToggle = function() {
        setSwapModalOpen(!swapModalOpen);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "grid items-center px-5 py-4 cursor-pointer",
        onClick: handleModalToggle,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "font-bold text-[15px] font-white",
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid grid-cols-9",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "col-span-3 mt-4 text-xs text-gray-950",
                        children: [
                            "Creator: ",
                            creator
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "col-span-5 flex items-center gap-12",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "flex mt-2 ml-4 text-xs font-semibold text-white",
                            children: !!avatars && avatars.map(function(avatar, index1) {
                                if (index1 < 15) {
                                    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "-ml-4",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(next_image["default"], {
                                            src: "/images/icons/sol.png",
                                            alt: "sol-icon",
                                            height: 32,
                                            width: 32
                                        })
                                    }, index1));
                                }
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "col-span-1 mt-4 text-xs text-[#3BA946]",
                        children: avatars.length
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ var LiveRoom = (index);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(5617);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.js + 1 modules
var react_toastify_esm = __webpack_require__(782);
// EXTERNAL MODULE: ./src/components/Modals/Base.tsx
var Base = __webpack_require__(4432);
;// CONCATENATED MODULE: ./src/components/AvatarPanel/index.tsx


var AvatarPanel = function(param) {
    var modelName = param.modelName;
    var ref = (0,react.useState)(false), mounted = ref[0], setMounted = ref[1];
    (0,react.useEffect)(function() {
        __webpack_require__(5569);
        setMounted(true);
    }, []);
    if (mounted) {
        return(// <div className='border border-gray-300'>
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("a-scene", {
            arjs: "",
            embedded: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-cursor", {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-entity", {
                    camera: true,
                    "look-controls": true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a-assets", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a-asset-item", {
                            id: "raccoon-obj",
                            src: "/assets/Raccoon_Blocks/model.obj"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a-asset-item", {
                            id: "raccoon-mtl",
                            src: "/assets/Raccoon_Blocks/materials.mtl"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-entity", {
                    rotation: "0 0 0",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a-entity", {
                        "obj-model": "obj: #raccoon-obj; mtl: #raccoon-mtl",
                        scale: "15 15 15",
                        rotation: "0 180 0",
                        position: "0 2 -3"
                    })
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: "load..."
    }));
};
/* harmony default export */ var components_AvatarPanel = (AvatarPanel);

// EXTERNAL MODULE: ./src/redux/slices/chatSlice.ts
var chatSlice = __webpack_require__(6247);
;// CONCATENATED MODULE: ./src/components/Modals/CreateRoomModal.tsx







var CreateRoomModal = function(param) {
    var open = param.open, onClose = param.onClose;
    var dispatch = (0,es/* useDispatch */.I0)();
    var ref = (0,react.useState)(''), userName = ref[0], setUserName = ref[1];
    var ref1 = (0,react.useState)(''), roomName = ref1[0], setRoomName = ref1[1];
    var joinRoomFunc = function() {
        if (!roomName || !userName) {
            react_toastify_esm/* toast.error */.Am.error("All inputs are required!");
            return;
        }
        dispatch((0,chatSlice/* joinRoom */.Ls)({
            roomName: roomName,
            userName: userName
        }));
        onClose();
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Base/* default */.Z, {
        open: open,
        onClose: onClose,
        title: "Create a Room",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid grid-cols-2 gap-8 mt-8",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "col-span-1 flex justify-between py-4 px-7 bg-primary rounded-xl",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_AvatarPanel, {
                                modelName: 'avatar1'
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex justify-between py-4 px-7 rounded-xl",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "gap-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                    className: "text-lg font-light",
                                    children: "Create a public room."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "text-xs text-gray-950 mt-6",
                                    children: "Please type a room name."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "mt-2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "relative w-full text-gray-600 focus-within:text-gray-400",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                            type: "text",
                                            value: roomName,
                                            onChange: function(e) {
                                                return setRoomName(e.target.value);
                                            },
                                            className: "w-full py-2 pl-6 text-[15px] font-light text-white border-transparent border rounded-md bg-primary focus:outline-none focus:border-gray-500 focus:border focus:text-white placeholder:text-gray-950\xcd",
                                            placeholder: "Room Name",
                                            autoComplete: "off"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "text-xs text-gray-950 mt-6",
                                    children: "Please type your name."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "mt-2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "relative w-full text-gray-600 focus-within:text-gray-400",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                            type: "text",
                                            value: userName,
                                            onChange: function(e) {
                                                return setUserName(e.target.value);
                                            },
                                            className: "w-full py-2 pl-6 text-[15px] font-light text-white border-transparent border rounded-md bg-primary focus:outline-none focus:border-gray-500 focus:border focus:text-white placeholder:text-gray-950\xcd",
                                            placeholder: "Your Name",
                                            autoComplete: "off"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex justify-center mt-8",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    className: "rounded-full btn btn-sm btn-secondary",
                    onClick: joinRoomFunc,
                    children: "Join a Room"
                })
            })
        ]
    }));
};
/* harmony default export */ var Modals_CreateRoomModal = (CreateRoomModal);

;// CONCATENATED MODULE: ./src/components/LiveRooms/index.tsx




var LiveRooms = function(param) {
    var rooms = param.rows;
    var ref = (0,react.useState)(false), createModalOpen = ref[0], setCreateModalOpen = ref[1];
    var handleCreateModalToggle = function() {
        setCreateModalOpen(!createModalOpen);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mx-3 -mt-5",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "justify-between bg-brandblack rounded-3xl",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex items-center justify-between border-b border-borderwidget",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex flex-col p-5",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flexfont-[19px] font-bold",
                                children: "Rooms"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "divide-y divide-borderwidget max-h-[42vh] overflow-y-auto scrollbar-thin scrollbar-thumb-black",
                            children: rooms.map(function(room, index) {
                                /*#__PURE__*/ return (0,jsx_runtime.jsx)(LiveRoom, {
                                    data: room
                                }, index);
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Modals_CreateRoomModal, {
                open: createModalOpen,
                onClose: handleCreateModalToggle
            })
        ]
    }));
};
/* harmony default export */ var components_LiveRooms = (LiveRooms);

;// CONCATENATED MODULE: ./src/components/Modals/JoinRoomModal.tsx





var JoinRoomModal = function(param) {
    var open = param.open, onClose = param.onClose, roomname = param.roomname, creator = param.creator, avatars = param.avatars;
    var ref = (0,react.useState)(''), name = ref[0], setName = ref[1];
    var joinGame = function() {
        if (name == "") {
            react_toastify_esm/* toast.error */.Am.error("All inputs are required!");
            return;
        }
        location.href = "https://cool-server-app.herokuapp.com/rooms/" + name;
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Base/* default */.Z, {
        open: open,
        onClose: onClose,
        title: "Join a Game",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid grid-cols-2 gap-8 mt-8",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "col-span-1 flex justify-between py-4 px-7 bg-primary rounded-xl",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_AvatarPanel, {
                                modelName: 'avatar1'
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex justify-between py-4 px-7 rounded-xl",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "gap-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                    className: "text-lg font-light",
                                    children: "Plaza"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "text-xs text-gray-950 mt-6",
                                    children: "Please type your name."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "mt-2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "relative w-full text-gray-600 focus-within:text-gray-400",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                            type: "text",
                                            value: name,
                                            onChange: function(e) {
                                                return setName(e.target.value);
                                            },
                                            className: "w-full py-2 pl-6 text-[15px] font-light text-white border-transparent border rounded-md bg-primary focus:outline-none focus:border-gray-500 focus:border focus:text-white placeholder:text-gray-950\xcd",
                                            placeholder: "Name",
                                            autoComplete: "off"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex justify-center mt-8",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    className: "rounded-full btn btn-sm btn-secondary",
                    onClick: joinGame,
                    children: "Join a Game"
                })
            })
        ]
    }));
};
/* harmony default export */ var Modals_JoinRoomModal = (JoinRoomModal);

;// CONCATENATED MODULE: ./src/data/experience.ts
var BIG_ROOM = {
    scene: {
        bgImage: "/images/placeholder/post/post_one.png"
    },
    content: {
        title: "Plaza",
        description: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        buttonText: "Join a Game",
        buttonLink: "/join-room",
        avatars: []
    }
};
var ROOM = {
    rows: [
        {
            imageUrl: "/images/placeholder/marketplace/gallery/one.png",
            title: 'Decentralart',
            description: 'Lorem ipsum dolor sit amet, consectetur',
            avatars: [
                '',
                '',
                '',
                ''
            ]
        },
        {
            imageUrl: "/images/placeholder/marketplace/gallery/one.png",
            title: 'Decentralart',
            description: 'Lorem ipsum dolor sit amet, consectetur',
            avatars: [
                '',
                '',
                ''
            ]
        },
        {
            imageUrl: "/images/placeholder/marketplace/gallery/one.png",
            title: 'Decentralart',
            description: 'Lorem ipsum dolor sit amet, consectetur',
            avatars: [
                '',
                '',
                '',
                '',
                ''
            ]
        },
        {
            imageUrl: "/images/placeholder/marketplace/gallery/one.png",
            title: 'Decentralart',
            description: 'Lorem ipsum dolor sit amet, consectetur',
            avatars: []
        },
        {
            imageUrl: "/images/placeholder/marketplace/gallery/one.png",
            title: 'Decentralart',
            description: 'Lorem ipsum dolor sit amet, consectetur',
            avatars: []
        },
        {
            imageUrl: "/images/placeholder/marketplace/gallery/one.png",
            title: 'Decentralart',
            description: 'Lorem ipsum dolor sit amet, consectetur',
            avatars: []
        },
        {
            imageUrl: "/images/placeholder/marketplace/gallery/one.png",
            title: 'Decentralart',
            description: 'Lorem ipsum dolor sit amet, consectetur',
            avatars: []
        },
        {
            imageUrl: "/images/placeholder/marketplace/gallery/one.png",
            title: 'Decentralart',
            description: 'Lorem ipsum dolor sit amet, consectetur',
            avatars: [
                '',
                ''
            ]
        },
        {
            imageUrl: "/images/placeholder/marketplace/gallery/one.png",
            title: 'Decentralart',
            description: 'Lorem ipsum dolor sit amet, consectetur',
            avatars: []
        }, 
    ]
};
var LIVE_ROOM = {
    rows: [
        {
            title: 'Decentralart',
            creator: 'xxx',
            avatars: [
                '',
                '',
                ''
            ]
        },
        {
            title: 'Decentralart',
            creator: 'xxx',
            avatars: [
                '',
                '',
                '',
                ''
            ]
        },
        {
            title: 'Decentralart',
            creator: 'xxx',
            avatars: [
                '',
                ''
            ]
        },
        {
            title: 'Decentralart',
            creator: 'xxx',
            avatars: []
        },
        {
            title: 'Decentralart',
            creator: 'xxx',
            avatars: [
                '', 
            ]
        }, 
    ]
};

;// CONCATENATED MODULE: ./src/components/BigRoom/index.tsx






var BigRoom = function(param) {
    var scene = param.scene, content = param.content;
    var ref = (0,react.useState)(false), joinModalOpen = ref[0], setJoinModalOpen = ref[1];
    var handleJoinModalToggle = function() {
        setJoinModalOpen(!joinModalOpen);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "grid grid-cols-3",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "col-span-1",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(components_LiveRooms, {
                    rows: LIVE_ROOM.rows
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "col-span-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "relative w-full h-[314px] rounded-3xl -mt-5",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BigRoom_RoomScene, {
                            data: scene.bgImage
                        })
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
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        children: !!content.avatars && content.avatars.map(function(avatar, index) {
                                            /*#__PURE__*/ return (0,jsx_runtime.jsx)("img", {
                                                src: avatar,
                                                width: "25",
                                                height: "25"
                                            }, index);
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                        className: "btn btn-secondary rounded-3xl",
                                        onClick: handleJoinModalToggle,
                                        children: content.buttonText
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Modals_JoinRoomModal, {
                open: joinModalOpen,
                onClose: handleJoinModalToggle
            })
        ]
    }));
};
/* harmony default export */ var components_BigRoom = (BigRoom);

// EXTERNAL MODULE: ./src/data/marketplace.ts
var marketplace = __webpack_require__(8751);
;// CONCATENATED MODULE: ./src/modules/Experience/index.tsx






function Experience_defineProperty(obj, key, value) {
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
function Experience_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            Experience_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
var Experience = function() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col pb-14",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_BigRoom, Experience_objectSpread({}, BIG_ROOM)),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(components_GalleryE, {
                rows: marketplace/* GALLERYE.rows */.m8.rows
            })
        ]
    }));
};
/* harmony default export */ var modules_Experience = (Experience);

;// CONCATENATED MODULE: ./src/pages/experience/index.tsx




// import socket from '../../utils/socket-client';
var Index = function() {
    (0,react.useEffect)(function() {
    // document.socket = socket;
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Layout/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(modules_Experience, {})
    }));
};
/* harmony default export */ var experience = (Index);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6446,6419,782,5090,5277,9774,2888,179], function() { return __webpack_exec__(8350); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);