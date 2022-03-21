"use strict";
exports.id = 6247;
exports.ids = [6247];
exports.modules = {

/***/ 6247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ls": () => (/* binding */ joinRoom),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export chatSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    roomName: '',
    userName: ''
};
const chatSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "chat",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        joinRoom: (state, action)=>{
            state.roomName = action.payload.roomName;
            state.userName = action.payload.userName;
            localStorage.setItem('roomName', action.payload.roomName);
            localStorage.setItem('userName', action.payload.userName);
            localStorage.setItem('name', action.payload.userName);
            location.href = "https://cool-server-app.herokuapp.com/rooms";
        // document.socket.emit(ACTIONS.JOIN, {roomId: -1, user: { name: state.userName, roomName: state.roomName}});
        }
    }
});
const { joinRoom  } = chatSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chatSlice.reducer);


/***/ })

};
;