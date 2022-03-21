"use strict";
exports.id = 6160;
exports.ids = [6160];
exports.modules = {

/***/ 6160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Gallery)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Gallery/GalleryRowHeader.tsx
var GalleryRowHeader = __webpack_require__(7769);
// EXTERNAL MODULE: ./src/components/Gallery/GalleryItem.tsx
var GalleryItem = __webpack_require__(6359);
;// CONCATENATED MODULE: ./src/components/Gallery/GalleryRow.tsx




const GalleryRow = ({ title , items , detail , itemsPerRow  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GalleryRowHeader/* default */.Z, {
                title: title,
                detail: detail
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `grid ${itemsPerRow ? "grid-cols-5" : "grid-cols-3"} gap-3 mt-4`,
                children: items.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(GalleryItem/* default */.Z, {
                        ...item
                    }, index)
                )
            })
        ]
    }));
};
/* harmony default export */ const Gallery_GalleryRow = (GalleryRow);

;// CONCATENATED MODULE: ./src/components/Gallery/index.tsx



const Gallery = ({ rows  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col gap-6 my-9",
        children: rows.map((row, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Gallery_GalleryRow, {
                ...row
            }, index)
        )
    }));
};
/* harmony default export */ const components_Gallery = (Gallery);


/***/ })

};
;