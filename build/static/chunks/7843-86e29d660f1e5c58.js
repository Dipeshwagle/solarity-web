"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7843],{

/***/ 7843:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "sR": function() { return /* reexport */ WalletModalProvider; },
  "aD": function() { return /* reexport */ WalletMultiButton; },
  "hB": function() { return /* reexport */ useWalletModal; }
});

// UNUSED EXPORTS: WalletConnectButton, WalletDisconnectButton, WalletIcon, WalletModal, WalletModalButton, WalletModalContext

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/useWalletModal.js

var WalletModalContext = /*#__PURE__*/ (0,react.createContext)({});
function useWalletModal() {
    return (0,react.useContext)(WalletModalContext);
} //# sourceMappingURL=useWalletModal.js.map

// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useWallet.js
var lib_useWallet = __webpack_require__(7257);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/Button.js

var Button_Button = function(props) {
    var justifyContent = props.endIcon || props.startIcon ? 'space-between' : 'center';
    return(/*#__PURE__*/ react.createElement("button", {
        className: "wallet-adapter-button ".concat(props.className || ''),
        disabled: props.disabled,
        onClick: props.onClick,
        style: Object.assign({
            justifyContent: justifyContent
        }, props.style),
        tabIndex: props.tabIndex || 0,
        type: "button"
    }, props.startIcon && /*#__PURE__*/ react.createElement("i", {
        className: "wallet-adapter-button-start-icon"
    }, props.startIcon), props.children, props.endIcon && /*#__PURE__*/ react.createElement("i", {
        className: "wallet-adapter-button-end-icon"
    }, props.endIcon)));
}; //# sourceMappingURL=Button.js.map

;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/WalletIcon.js

var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var WalletIcon_WalletIcon = function(_a) {
    var wallet = _a.wallet, props = __rest(_a, [
        "wallet"
    ]);
    return wallet && /*#__PURE__*/ react.createElement("img", Object.assign({
        src: wallet.icon,
        alt: "".concat(wallet.name, " icon")
    }, props));
}; //# sourceMappingURL=WalletIcon.js.map

;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/WalletConnectButton.js




var WalletConnectButton_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var WalletConnectButton = function(_a) {
    var children = _a.children, disabled = _a.disabled, onClick = _a.onClick, props = WalletConnectButton_rest(_a, [
        "children",
        "disabled",
        "onClick"
    ]);
    var ref = (0,lib_useWallet/* useWallet */.O)(), wallet = ref.wallet, connect = ref.connect, connecting = ref.connecting, connected = ref.connected;
    var handleClick = (0,react.useCallback)(function(event) {
        if (onClick) onClick(event);
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        if (!event.defaultPrevented) connect().catch(function() {});
    }, [
        onClick,
        connect
    ]);
    var content = (0,react.useMemo)(function() {
        if (children) return children;
        if (connecting) return 'Connecting ...';
        if (connected) return 'Connected';
        if (wallet) return 'Connect';
        return 'Connect Wallet';
    }, [
        children,
        connecting,
        connected,
        wallet
    ]);
    return(/*#__PURE__*/ react.createElement(Button_Button, Object.assign({
        className: "wallet-adapter-button-trigger",
        disabled: disabled || !wallet || connecting || connected,
        startIcon: wallet ? /*#__PURE__*/ react.createElement(WalletIcon_WalletIcon, {
            wallet: wallet
        }) : undefined,
        onClick: handleClick
    }, props), content));
}; //# sourceMappingURL=WalletConnectButton.js.map

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/Collapse.js

var Collapse = function(param) {
    var id = param.id, children = param.children, _expanded = param.expanded, expanded = _expanded === void 0 ? false : _expanded;
    var ref = (0,react.useRef)(null);
    var instant = (0,react.useRef)(true);
    var transition = 'height 250ms ease-out';
    var openCollapse = function() {
        var node = ref.current;
        if (!node) return;
        requestAnimationFrame(function() {
            node.style.height = node.scrollHeight + 'px';
        });
    };
    var closeCollapse = function() {
        var node = ref.current;
        if (!node) return;
        requestAnimationFrame(function() {
            node.style.height = node.offsetHeight + 'px';
            node.style.overflow = 'hidden';
            requestAnimationFrame(function() {
                node.style.height = '0';
            });
        });
    };
    (0,react.useLayoutEffect)(function() {
        if (expanded) {
            openCollapse();
        } else {
            closeCollapse();
        }
    }, [
        expanded
    ]);
    (0,react.useLayoutEffect)(function() {
        var handleComplete = function handleComplete() {
            if (!node) return;
            node.style.overflow = expanded ? 'initial' : 'hidden';
            if (expanded) {
                node.style.height = 'auto';
            }
        };
        var handleTransitionEnd = function handleTransitionEnd(event) {
            if (node && event.target === node && event.propertyName === 'height') {
                handleComplete();
            }
        };
        var node = ref.current;
        if (!node) return;
        if (instant.current) {
            handleComplete();
            instant.current = false;
        }
        node.addEventListener('transitionend', handleTransitionEnd);
        return function() {
            return node.removeEventListener('transitionend', handleTransitionEnd);
        };
    }, [
        expanded
    ]);
    return(/*#__PURE__*/ react.createElement("div", {
        children: children,
        className: "wallet-adapter-collapse",
        id: id,
        ref: ref,
        role: "region",
        style: {
            height: 0,
            transition: instant.current ? undefined : transition
        }
    }));
}; //# sourceMappingURL=Collapse.js.map

;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/WalletListItem.js



var WalletListItem = function(param) {
    var handleClick = param.handleClick, tabIndex = param.tabIndex, wallet = param.wallet;
    return(/*#__PURE__*/ react.createElement("li", null, /*#__PURE__*/ react.createElement(Button_Button, {
        onClick: handleClick,
        endIcon: /*#__PURE__*/ react.createElement(WalletIcon_WalletIcon, {
            wallet: wallet
        }),
        tabIndex: tabIndex
    }, wallet.name)));
}; //# sourceMappingURL=WalletListItem.js.map

;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/WalletModal.js







var WalletModal = function(param) {
    var _className = param.className, className = _className === void 0 ? '' : _className, logo = param.logo, _featuredWallets = param.featuredWallets, featuredWallets = _featuredWallets === void 0 ? 3 : _featuredWallets, _container = param.container, container = _container === void 0 ? 'body' : _container;
    var ref = (0,react.useRef)(null);
    var ref1 = (0,lib_useWallet/* useWallet */.O)(), wallets = ref1.wallets, select = ref1.select;
    var setVisible = useWalletModal().setVisible;
    var ref2 = (0,react.useState)(false), expanded = ref2[0], setExpanded = ref2[1];
    var ref3 = (0,react.useState)(false), fadeIn = ref3[0], setFadeIn = ref3[1];
    var ref4 = (0,react.useState)(null), portal = ref4[0], setPortal = ref4[1];
    var ref5 = (0,react.useMemo)(function() {
        return [
            wallets.slice(0, featuredWallets),
            wallets.slice(featuredWallets)
        ];
    }, [
        wallets,
        featuredWallets
    ]), featured = ref5[0], more = ref5[1];
    var hideModal = (0,react.useCallback)(function() {
        setFadeIn(false);
        setTimeout(function() {
            return setVisible(false);
        }, 150);
    }, [
        setFadeIn,
        setVisible
    ]);
    var handleClose = (0,react.useCallback)(function(event) {
        event.preventDefault();
        hideModal();
    }, [
        hideModal
    ]);
    var handleWalletClick = (0,react.useCallback)(function(event, walletName) {
        select(walletName);
        handleClose(event);
    }, [
        select,
        handleClose
    ]);
    var handleCollapseClick = (0,react.useCallback)(function() {
        return setExpanded(!expanded);
    }, [
        setExpanded,
        expanded
    ]);
    var handleTabKey = (0,react.useCallback)(function(event) {
        var node = ref.current;
        if (!node) return;
        // here we query all focusable elements
        var focusableElements = node.querySelectorAll('button');
        var firstElement = focusableElements[0];
        var lastElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey) {
            // if going backward by pressing tab and firstElement is active, shift focus to last focusable element
            if (document.activeElement === firstElement) {
                lastElement.focus();
                event.preventDefault();
            }
        } else {
            // if going forward by pressing tab and lastElement is active, shift focus to first focusable element
            if (document.activeElement === lastElement) {
                firstElement.focus();
                event.preventDefault();
            }
        }
    }, [
        ref
    ]);
    (0,react.useLayoutEffect)(function() {
        var handleKeyDown = function(event) {
            if (event.key === 'Escape') {
                hideModal();
            } else if (event.key === 'Tab') {
                handleTabKey(event);
            }
        };
        // Get original overflow
        var overflow = window.getComputedStyle(document.body).overflow;
        // Hack to enable fade in animation after mount
        setTimeout(function() {
            return setFadeIn(true);
        }, 0);
        // Prevent scrolling on mount
        document.body.style.overflow = 'hidden';
        // Listen for keydown events
        window.addEventListener('keydown', handleKeyDown, false);
        return function() {
            // Re-enable scrolling when component unmounts
            document.body.style.overflow = overflow;
            window.removeEventListener('keydown', handleKeyDown, false);
        };
    }, [
        hideModal,
        handleTabKey
    ]);
    (0,react.useLayoutEffect)(function() {
        return setPortal(document.querySelector(container));
    }, [
        setPortal,
        container
    ]);
    return portal && /*#__PURE__*/ (0,react_dom.createPortal)(/*#__PURE__*/ react.createElement("div", {
        "aria-labelledby": "wallet-adapter-modal-title",
        "aria-modal": "true",
        className: "wallet-adapter-modal ".concat(fadeIn && 'wallet-adapter-modal-fade-in', " ").concat(className),
        ref: ref,
        role: "dialog"
    }, /*#__PURE__*/ react.createElement("div", {
        className: "wallet-adapter-modal-container"
    }, /*#__PURE__*/ react.createElement("div", {
        className: "wallet-adapter-modal-wrapper ".concat(!logo && 'wallet-adapter-modal-wrapper-no-logo')
    }, logo && /*#__PURE__*/ react.createElement("div", {
        className: "wallet-adapter-modal-logo-wrapper"
    }, typeof logo === 'string' ? /*#__PURE__*/ react.createElement("img", {
        alt: "logo",
        className: "wallet-adapter-modal-logo",
        src: logo
    }) : logo), /*#__PURE__*/ react.createElement("h1", {
        className: "wallet-adapter-modal-title",
        id: "wallet-adapter-modal-title"
    }, "Connect Wallet"), /*#__PURE__*/ react.createElement("button", {
        onClick: handleClose,
        className: "wallet-adapter-modal-button-close"
    }, /*#__PURE__*/ react.createElement("svg", {
        width: "14",
        height: "14"
    }, /*#__PURE__*/ react.createElement("path", {
        d: "M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z"
    }))), /*#__PURE__*/ react.createElement("ul", {
        className: "wallet-adapter-modal-list"
    }, featured.map(function(wallet) {
        return(/*#__PURE__*/ react.createElement(WalletListItem, {
            key: wallet.name,
            handleClick: function(event) {
                return handleWalletClick(event, wallet.name);
            },
            wallet: wallet
        }));
    })), more.length ? /*#__PURE__*/ react.createElement(react.Fragment, null, /*#__PURE__*/ react.createElement(Collapse, {
        expanded: expanded,
        id: "wallet-adapter-modal-collapse"
    }, /*#__PURE__*/ react.createElement("ul", {
        className: "wallet-adapter-modal-list"
    }, more.map(function(wallet) {
        return(/*#__PURE__*/ react.createElement(WalletListItem, {
            key: wallet.name,
            handleClick: function(event) {
                return handleWalletClick(event, wallet.name);
            },
            tabIndex: expanded ? 0 : -1,
            wallet: wallet
        }));
    }))), /*#__PURE__*/ react.createElement(Button_Button, {
        "aria-controls": "wallet-adapter-modal-collapse",
        "aria-expanded": expanded,
        className: "wallet-adapter-modal-collapse-button ".concat(expanded && 'wallet-adapter-modal-collapse-button-active'),
        endIcon: /*#__PURE__*/ react.createElement("svg", {
            width: "11",
            height: "6",
            xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/ react.createElement("path", {
            d: "m5.938 5.73 4.28-4.126a.915.915 0 0 0 0-1.322 1 1 0 0 0-1.371 0L5.253 3.736 1.659.272a1 1 0 0 0-1.371 0A.93.93 0 0 0 0 .932c0 .246.1.48.288.662l4.28 4.125a.99.99 0 0 0 1.37.01z"
        })),
        onClick: handleCollapseClick
    }, expanded ? 'Less' : 'More', " options")) : null)), /*#__PURE__*/ react.createElement("div", {
        className: "wallet-adapter-modal-overlay",
        onMouseDown: handleClose
    })), portal);
}; //# sourceMappingURL=WalletModal.js.map

;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/WalletModalButton.js



var WalletModalButton_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var WalletModalButton = function(_a) {
    var _children = _a.children, children = _children === void 0 ? 'Select Wallet' : _children, onClick = _a.onClick, props = WalletModalButton_rest(_a, [
        "children",
        "onClick"
    ]);
    var ref = useWalletModal(), visible = ref.visible, setVisible = ref.setVisible;
    var handleClick = (0,react.useCallback)(function(event) {
        if (onClick) onClick(event);
        if (!event.defaultPrevented) setVisible(!visible);
    }, [
        onClick,
        setVisible,
        visible
    ]);
    return(/*#__PURE__*/ react.createElement(Button_Button, Object.assign({
        className: "wallet-adapter-button-trigger",
        onClick: handleClick
    }, props), children));
}; //# sourceMappingURL=WalletModalButton.js.map

;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/WalletModalProvider.js



var WalletModalProvider_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var WalletModalProvider = function(_a) {
    var children = _a.children, props = WalletModalProvider_rest(_a, [
        "children"
    ]);
    var ref = (0,react.useState)(false), visible = ref[0], setVisible = ref[1];
    return(/*#__PURE__*/ react.createElement(WalletModalContext.Provider, {
        value: {
            visible: visible,
            setVisible: setVisible
        }
    }, children, visible && /*#__PURE__*/ react.createElement(WalletModal, Object.assign({}, props))));
}; //# sourceMappingURL=WalletModalProvider.js.map

;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/WalletDisconnectButton.js




var WalletDisconnectButton_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var WalletDisconnectButton = function(_a) {
    var children = _a.children, disabled = _a.disabled, onClick = _a.onClick, props = WalletDisconnectButton_rest(_a, [
        "children",
        "disabled",
        "onClick"
    ]);
    var ref = useWallet(), wallet = ref.wallet, disconnect = ref.disconnect, disconnecting = ref.disconnecting;
    var handleClick = useCallback(function(event) {
        if (onClick) onClick(event);
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        if (!event.defaultPrevented) disconnect().catch(function() {});
    }, [
        onClick,
        disconnect
    ]);
    var content = useMemo(function() {
        if (children) return children;
        if (disconnecting) return 'Disconnecting ...';
        if (wallet) return 'Disconnect';
        return 'Disconnect Wallet';
    }, [
        children,
        disconnecting,
        wallet
    ]);
    return(/*#__PURE__*/ React.createElement(Button, Object.assign({
        className: "wallet-adapter-button-trigger",
        disabled: disabled || !wallet,
        startIcon: wallet ? /*#__PURE__*/ React.createElement(WalletIcon, {
            wallet: wallet
        }) : undefined,
        onClick: handleClick
    }, props), content));
}; //# sourceMappingURL=WalletDisconnectButton.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js
var runtime = __webpack_require__(4051);
var runtime_default = /*#__PURE__*/__webpack_require__.n(runtime);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/WalletMultiButton.js








function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    var adopt = function adopt(value) {
        return _instanceof(value, P) ? value : new P(function(resolve) {
            resolve(value);
        });
    };
    return new (P || (P = Promise))(function(resolve, reject) {
        var fulfilled = function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        };
        var step = function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        };
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var WalletMultiButton_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
var WalletMultiButton = function(_a) {
    var children = _a.children, props = WalletMultiButton_rest(_a, [
        "children"
    ]);
    var ref = (0,lib_useWallet/* useWallet */.O)(), publicKey = ref.publicKey, wallet = ref.wallet, disconnect = ref.disconnect;
    var setVisible = useWalletModal().setVisible;
    var ref1 = (0,react.useState)(false), copied = ref1[0], setCopied = ref1[1];
    var ref2 = (0,react.useState)(false), active = ref2[0], setActive = ref2[1];
    var ref3 = (0,react.useRef)(null);
    var base58 = (0,react.useMemo)(function() {
        return publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58();
    }, [
        publicKey
    ]);
    var content = (0,react.useMemo)(function() {
        if (children) return children;
        if (!wallet || !base58) return null;
        return base58.slice(0, 4) + '..' + base58.slice(-4);
    }, [
        children,
        wallet,
        base58
    ]);
    var copyAddress = (0,react.useCallback)(function() {
        return __awaiter(void 0, void 0, void 0, runtime_default().mark(function _callee() {
            return runtime_default().wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        if (!base58) {
                            _ctx.next = 5;
                            break;
                        }
                        _ctx.next = 3;
                        return navigator.clipboard.writeText(base58);
                    case 3:
                        setCopied(true);
                        setTimeout(function() {
                            return setCopied(false);
                        }, 400);
                    case 5:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee);
        }));
    }, [
        base58
    ]);
    var openDropdown = (0,react.useCallback)(function() {
        return setActive(true);
    }, [
        setActive
    ]);
    var closeDropdown = (0,react.useCallback)(function() {
        return setActive(false);
    }, [
        setActive
    ]);
    var openModal = (0,react.useCallback)(function() {
        setVisible(true);
        closeDropdown();
    }, [
        setVisible,
        closeDropdown
    ]);
    (0,react.useEffect)(function() {
        var listener = function(event) {
            var node = ref3.current;
            // Do nothing if clicking dropdown or its descendants
            if (!node || node.contains(event.target)) return;
            closeDropdown();
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return function() {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [
        ref3,
        closeDropdown
    ]);
    if (!wallet) return(/*#__PURE__*/ react.createElement(WalletModalButton, Object.assign({}, props), children));
    if (!base58) return(/*#__PURE__*/ react.createElement(WalletConnectButton, Object.assign({}, props), children));
    return(/*#__PURE__*/ react.createElement("div", {
        className: "wallet-adapter-dropdown"
    }, /*#__PURE__*/ react.createElement(Button_Button, Object.assign({
        "aria-expanded": active,
        className: "wallet-adapter-button-trigger",
        style: Object.assign({
            pointerEvents: active ? 'none' : 'auto'
        }, props.style),
        onClick: openDropdown,
        startIcon: /*#__PURE__*/ react.createElement(WalletIcon_WalletIcon, {
            wallet: wallet
        })
    }, props), content), /*#__PURE__*/ react.createElement("ul", {
        "aria-label": "dropdown-list",
        className: "wallet-adapter-dropdown-list ".concat(active && 'wallet-adapter-dropdown-list-active'),
        ref: ref3,
        role: "menu"
    }, /*#__PURE__*/ react.createElement("li", {
        onClick: copyAddress,
        className: "wallet-adapter-dropdown-list-item",
        role: "menuitem"
    }, copied ? 'Copied' : 'Copy address'), /*#__PURE__*/ react.createElement("li", {
        onClick: openModal,
        className: "wallet-adapter-dropdown-list-item",
        role: "menuitem"
    }, "Connect a different wallet"), /*#__PURE__*/ react.createElement("li", {
        onClick: disconnect,
        className: "wallet-adapter-dropdown-list-item",
        role: "menuitem"
    }, "Disconnect"))));
}; //# sourceMappingURL=WalletMultiButton.js.map

;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/index.js







 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 7257:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": function() { return /* binding */ WalletContext; },
/* harmony export */   "O": function() { return /* binding */ useWallet; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

var WalletContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function useWallet() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(WalletContext);
} //# sourceMappingURL=useWallet.js.map


/***/ })

}]);