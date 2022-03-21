(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[521],{

/***/ 695:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/experience/chat",
      function () {
        return __webpack_require__(963);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 963:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ chat; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js
var runtime = __webpack_require__(4051);
var runtime_default = /*#__PURE__*/__webpack_require__.n(runtime);
;// CONCATENATED MODULE: ./src/utils/useStateWithCalllback.js

var useStateWithCalllback = function(iniitialState) {
    var ref = (0,react.useState)(iniitialState), state = ref[0], setState = ref[1];
    var cbRef = (0,react.useRef)();
    var updateState = (0,react.useCallback)(function(newState, cb) {
        cbRef.current = cb;
        setState(function(prev) {
            return typeof newState === 'function' ? newState(prev) : newState;
        });
    }, []);
    (0,react.useEffect)(function() {
        if (cbRef.current) {
            cbRef.current(state);
            cbRef.current = null;
        }
    }, [
        state
    ]);
    return [
        state,
        updateState
    ];
};

;// CONCATENATED MODULE: ./src/config/actions.js
var ACTIONS = {
    ROOM_READY: 'room-ready',
    ROOM_LIST: 'room-list',
    CREATE_ROOM: 'create-room',
    SEND_MSG: 'send-msg',
    JOIN: 'join',
    LEAVE: 'leave',
    ADD_PEER: 'add-peer',
    REMOVE_PEER: 'remove-peer',
    RELAY_ICE: 'relay-ice',
    RELAY_SDP: 'relay-sdp',
    SESSION_DESCRIPTION: 'session-description',
    ICE_CANDIDATE: 'ice-candidate',
    MUTE: 'mute',
    UNMUTE: 'unmute'
};
/* harmony default export */ var actions = (ACTIONS);

// EXTERNAL MODULE: ./node_modules/freeice/index.js
var freeice = __webpack_require__(8483);
var freeice_default = /*#__PURE__*/__webpack_require__.n(freeice);
;// CONCATENATED MODULE: ./src/utils/useWebTRTC.js





function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
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
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var useWebTRTC = function(roomId, user) {
    var ref = _slicedToArray(useStateWithCalllback([]), 2), clients = ref[0], setclients = ref[1];
    var audioElements = (0,react.useRef)({});
    var clientsRef = (0,react.useRef)([]);
    var connections = (0,react.useRef)({});
    var localMediaStream = (0,react.useRef)({});
    var provideRef = function(instance, userId) {
        audioElements.current[userId] = instance;
    };
    var addNewClient = (0,react.useCallback)(function(newClient, cb) {
        window.audios = audioElements.current;
        var lookingFor = clients.find(function(cl) {
            return cl.name === newClient.name;
        });
        if (lookingFor === undefined) {
            setclients(function(prevClients) {
                return _toConsumableArray(prevClients).concat([
                    newClient
                ]);
            }, cb);
        }
    // eslint-disable-next-line
    }, [
        clients,
        setclients
    ]);
    // capture media
    (0,react.useEffect)(function() {
        var startCapture = function() {
            var _ref = _asyncToGenerator(runtime_default().mark(function _callee() {
                return runtime_default().wrap(function _callee$(_ctx) {
                    while(1)switch(_ctx.prev = _ctx.next){
                        case 0:
                            _ctx.next = 2;
                            return navigator.mediaDevices.getUserMedia({
                                audio: true
                            });
                        case 2:
                            localMediaStream.current = _ctx.sent;
                        case 3:
                        case "end":
                            return _ctx.stop();
                    }
                }, _callee);
            }));
            return function startCapture() {
                return _ref.apply(this, arguments);
            };
        }();
        startCapture().then(function() {
            addNewClient(_objectSpread({}, user, {
                muted: true
            }), function() {
                var localAudioElement = audioElements.current[user.name];
                if (localAudioElement) {
                    localAudioElement.volume = 0;
                    localAudioElement.srcObject = localMediaStream.current;
                }
            });
            window.socket.emit(actions.JOIN, {
                roomId: roomId,
                user: user
            });
        });
        return function() {
            // leaving room
            localMediaStream.current.getTracks().forEach(function(track) {
                return track.stop();
            });
        // window.socket.emit(ACTIONS.LEAVE, { roomId, user })
        };
    // eslint-disable-next-line
    }, []);
    (0,react.useEffect)(function() {
        var handelNewPeer = function() {
            var _ref = _asyncToGenerator(runtime_default().mark(function _callee(param1) {
                var peerId, createOffer, remoteUser, offer;
                return runtime_default().wrap(function _callee$(_ctx) {
                    while(1)switch(_ctx.prev = _ctx.next){
                        case 0:
                            peerId = param1.peerId, createOffer = param1.createOffer, remoteUser = param1.user;
                            if (!(peerId in connections.current)) {
                                _ctx.next = 3;
                                break;
                            }
                            return _ctx.abrupt("return");
                        case 3:
                            connections.current[peerId] = new RTCPeerConnection({
                                iceServers: freeice_default()()
                            });
                            // handle new ice candidate
                            connections.current[peerId].onicecandidate = function(event) {
                                window.socket.emit(actions.RELAY_ICE, {
                                    peerId: peerId,
                                    iceCandidate: event.candidate
                                });
                            };
                            // handle track on  connection
                            connections.current[peerId].ontrack = function(param) {
                                var _streams = _slicedToArray(param.streams, 1), remoteStream = _streams[0];
                                addNewClient(_objectSpread({}, remoteUser, {
                                    muted: true
                                }), function() {
                                    if (audioElements.current[remoteUser.name]) {
                                        audioElements.current[remoteUser.name].srcObject = remoteStream;
                                    } else {
                                        var settled = false;
                                        var interVal = setInterval(function() {
                                            if (audioElements.current(remoteUser.name)) {
                                                audioElements.current[remoteUser.name].srcObject = remoteStream;
                                                settled = true;
                                            }
                                            if (settled) {
                                                clearInterval(interVal);
                                            }
                                        }, 1000);
                                    }
                                    ;
                                });
                            };
                            // add local track to remmote connections
                            localMediaStream.current.getTracks().forEach(function(track) {
                                connections.current[peerId].addTrack(track, localMediaStream.current);
                            });
                            if (!createOffer) {
                                _ctx.next = 14;
                                break;
                            }
                            _ctx.next = 10;
                            return connections.current[peerId].createOffer();
                        case 10:
                            offer = _ctx.sent;
                            _ctx.next = 13;
                            return connections.current[peerId].setLocalDescription(offer);
                        case 13:
                            // send offer to another cllient
                            window.socket.emit(actions.RELAY_SDP, {
                                peerId: peerId,
                                sessionDescription: offer
                            });
                        case 14:
                        case "end":
                            return _ctx.stop();
                    }
                }, _callee);
            }));
            return function handelNewPeer(_) {
                return _ref.apply(this, arguments);
            };
        }();
        window.socket.on(actions.ADD_PEER, handelNewPeer);
        return function() {
            window.socket.off(actions.ADD_PEER);
        };
    }, []);
    // Handle ice candidate
    (0,react.useEffect)(function() {
        window.socket.on(actions.ICE_CANDIDATE, function(param) {
            var peerId = param.peerId, iceCandidate = param.iceCandidate;
            // console.log('ices', connections.current[peerId]);
            if (iceCandidate) {
                connections.current[peerId].addIceCandidate(iceCandidate);
            }
        });
        return function() {
            window.socket.off(actions.ICE_CANDIDATE);
        };
    }, []);
    // Handle session description
    (0,react.useEffect)(function() {
        var setRemoteMedia = function() {
            var _ref = _asyncToGenerator(runtime_default().mark(function _callee(param) {
                var peerId, remoteSessionDescription, connection, answer;
                return runtime_default().wrap(function _callee$(_ctx) {
                    while(1)switch(_ctx.prev = _ctx.next){
                        case 0:
                            peerId = param.peerId, remoteSessionDescription = param.sessionDescription;
                            connections.current[peerId].setRemoteDescription(new RTCSessionDescription(remoteSessionDescription));
                            if (!(remoteSessionDescription.type === 'offer')) {
                                _ctx.next = 9;
                                break;
                            }
                            connection = connections.current[peerId];
                            _ctx.next = 6;
                            return connection.createAnswer();
                        case 6:
                            answer = _ctx.sent;
                            connection.setLocalDescription(answer);
                            window.socket.emit(actions.RELAY_SDP, {
                                peerId: peerId,
                                sessionDescription: answer
                            });
                        case 9:
                        case "end":
                            return _ctx.stop();
                    }
                }, _callee);
            }));
            return function setRemoteMedia(_) {
                return _ref.apply(this, arguments);
            };
        }();
        window.socket.on(actions.SESSION_DESCRIPTION, setRemoteMedia);
        return function() {
            window.socket.off(actions.SESSION_DESCRIPTION);
        };
    }, []);
    // handell remover peer
    (0,react.useEffect)(function() {
        var handleRemovePeer = function(param) {
            var peerId = param.peerId, name = param.name;
            if (connections.current[peerId]) {
                connections.current[peerId].close();
            }
            delete connections.current[peerId];
            delete audioElements.current[peerId];
            setclients(function(list) {
                return list.filter(function(c) {
                    return c.name !== name;
                });
            });
        };
        window.socket.on(actions.REMOVE_PEER, handleRemovePeer);
        return function() {
            window.socket.off(actions.REMOVE_PEER);
        };
    // eslint-disable-next-line
    }, []);
    (0,react.useEffect)(function() {
        clientsRef.current = clients;
    }, [
        clients
    ]);
    // listen  or mute and unmute
    (0,react.useEffect)(function() {
        window.socket.on(actions.MUTE, function(param) {
            var peerId = param.peerId, name = param.name;
            setMicToggle(true, name);
        });
        window.socket.on(actions.MUTE, function(param) {
            var peerId = param.peerId, name = param.name;
            setMicToggle(false, name);
        });
        var setMicToggle = function(mute, name) {
            var clientIdx = clientsRef.current.map(function(client) {
                return client.id;
            }).indexOf(name);
            var allConnectedClients = JSON.parse(JSON.stringify(clientsRef.current));
            if (clientIdx > -1) {
                allConnectedClients[clientIdx].muted = mute;
                setclients(allConnectedClients);
            }
        };
    }, []);
    (0,react.useEffect)(function() {
        window.addEventListener('unload', function() {
        // window.socket.emit(ACTIONS.LEAVE, { roomId });
        });
    }, []);
    var handelMute = function(isMute, name) {
        var settled = false;
        var interVel = setInterval(function() {
            if (localMediaStream.current) {
                localMediaStream.current.getTracks()[0].enabled = !isMute;
                if (isMute) {
                    window.socket.emit(actions.MUTE, {
                        roomId: roomId,
                        name: name
                    });
                } else {
                    window.socket.emit(actions.UNMUTE, {
                        roomId: roomId,
                        name: name
                    });
                }
                settled = true;
            }
            if (settled) {
                clearInterval(interVel);
            }
        }, 200);
    };
    return {
        clients: clients,
        provideRef: provideRef,
        handelMute: handelMute
    };
};

;// CONCATENATED MODULE: ./src/modules/ChatModule/index.tsx



var ChatModule = function() {
    var ref = (0,react.useState)(false), mounted = ref[0], setMounted = ref[1];
    var ref1 = useWebTRTC(-1, {
        name: name
    }), clients = ref1.clients, provideRef = ref1.provideRef, handelMute = ref1.handelMute;
    (0,react.useEffect)(function() {
        __webpack_require__(5569);
        setMounted(true);
    }, []);
    (0,react.useEffect)(function() {
        var entity = document.querySelector('a-entity[camera]');
        if (entity) {
            entity.setAttribute('id', 'player');
            entity.setAttribute('class', 'heads');
            entity.setAttribute('networked', 'template:#avatar-template;attachTemplateToLocal:false;');
            entity.setAttribute('position', '0 1.6 0');
        }
        __webpack_require__(8231);
    });
    if (mounted) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a-scene", {
                    renderer: "colorManagement: true",
                    "networked-scene": " room: blocks; debug: true;",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("a-assets", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    id: "grid",
                                    src: "https://img.gs/bbdkhfbzkk/stretch/https://i.imgur.com/25P1geh.png",
                                    crossOrigin: "anonymous"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    id: "sky",
                                    src: "https://img.gs/bbdkhfbzkk/2048x2048,stretch/https://i.imgur.com/WqlqEkq.jpg",
                                    crossOrigin: "anonymous"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-asset-item", {
                                    id: "raccoon-obj",
                                    src: "/resource/models/avatar1.glb"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-asset-item", {
                                    id: "scene-obj",
                                    src: "/assets/Campfire_Blocks/model.obj"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("a-asset-item", {
                                    id: "scene-mtl",
                                    src: "/assets/Campfire_Blocks/materials.mtl"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    id: "sechelt",
                                    crossOrigin: "anonymous",
                                    src: "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("template", {
                                    id: "avatar-template",
                                    dangerouslySetInnerHTML: {
                                        __html: '<a-gltf-model src="#raccoon-obj" scale="3 3 3" position="0 2 -2"></a-gltf-model>'
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a-sky", {
                            id: "image-360",
                            radius: "100",
                            src: "#sechelt",
                            "data-set-image-fade-setup": "true",
                            animation__fade: ""
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a-entity", {
                            "obj-model": "obj: #scene-obj; mtl: #scene-mtl",
                            position: "-0.542 1.5 -6.206",
                            scale: "30 30 30"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    children: clients && clients.map(function(client, index) {
                        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("audio", {
                                            autoPlay: true,
                                            ref: function(instance) {
                                                return provideRef(instance, client.name);
                                            }
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                            src: client.avatar,
                                            alt: "avatar",
                                            srcSet: ""
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    children: client.name
                                })
                            ]
                        }, index));
                    })
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        id: "loading_screen",
        children: "...Load"
    }));
};
/* harmony default export */ var modules_ChatModule = (ChatModule);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(5617);
;// CONCATENATED MODULE: ./src/redux/hooks.ts



function hooks_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function hooks_arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return hooks_arrayLikeToArray(arr);
}
function hooks_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
function hooks_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                hooks_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                hooks_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function hooks_defineProperty(obj, key, value) {
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
function hooks_iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function hooks_nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function hooks_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            hooks_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function hooks_toConsumableArray(arr) {
    return hooks_arrayWithoutHoles(arr) || hooks_iterableToArray(arr) || hooks_unsupportedIterableToArray(arr) || hooks_nonIterableSpread();
}
function hooks_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return hooks_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return hooks_arrayLikeToArray(o, minLen);
}
var useForm = function(defaultValues) {
    return function(handler) {
        return (function() {
            var _ref = hooks_asyncToGenerator(regeneratorRuntime.mark(function _callee(event) {
                var form, elements, data;
                return regeneratorRuntime.wrap(function _callee$(_ctx) {
                    while(1)switch(_ctx.prev = _ctx.next){
                        case 0:
                            event.preventDefault();
                            event.persist();
                            form = event.target;
                            elements = Array.from(form.elements);
                            data = elements.filter(function(element) {
                                return element.hasAttribute("name");
                            }).reduce(function(object, element) {
                                return hooks_objectSpread({}, object, hooks_defineProperty({}, "".concat(element.getAttribute("name")), element.value));
                            }, defaultValues);
                            _ctx.next = 7;
                            return handler(data);
                        case 7:
                            form.reset();
                        case 8:
                        case "end":
                            return _ctx.stop();
                    }
                }, _callee);
            }));
            return function(event) {
                return _ref.apply(this, arguments);
            };
        })();
    };
};
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
var useInterval = function(callback, delay) {
    var savedCallback = useRef();
    useEffect(function() {
        savedCallback.current = callback;
    }, [
        callback
    ]);
    useEffect(function() {
        var handler = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var _ref;
            var ref;
            return (ref = savedCallback.current) === null || ref === void 0 ? void 0 : (_ref = ref).call.apply(_ref, [
                savedCallback
            ].concat(hooks_toConsumableArray(args)));
        };
        if (delay !== null) {
            var id = setInterval(handler, delay);
            return function() {
                return clearInterval(id);
            };
        }
    }, [
        delay
    ]);
};
// Use throughout your app instead of plain `useDispatch` and `useSelector`
var useAppDispatch = function() {
    return (0,es/* useDispatch */.I0)();
};
var useAppSelector = es/* useSelector */.v9;

;// CONCATENATED MODULE: ./src/pages/experience/chat.tsx




var Index = function() {
    var dispatch = useAppDispatch();
    var value = useAppSelector(function(state) {
        return state.chat;
    }).value;
    (0,react.useEffect)(function() {});
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(modules_ChatModule, {}));
};
/* harmony default export */ var chat = (Index);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [6446,9646,9774,2888,179], function() { return __webpack_exec__(695); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);