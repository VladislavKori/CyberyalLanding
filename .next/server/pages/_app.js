(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgArrowLeft = function SvgArrowLeft(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    d: "M15.53 18.97a.75.75 0 1 1-1.061 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.061 1.06L8.56 12l6.97 6.97Z",
    opacity: 0.7
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgArrowLeft);

/***/ }),

/***/ 1601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./public/common/ArrowLeft.svg
var ArrowLeft = __webpack_require__(7383);
;// CONCATENATED MODULE: ./components/UI/ScrollToTop.tsx



function ScrollToTop() {
    const [showArrow, setShowArrow] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", (e)=>{
            if (window.pageYOffset > 1000) {
                setShowArrow(true);
            } else {
                setShowArrow(false);
            }
        });
    });
    const scrollHandler = ()=>{
        window.scrollTo(0, 0);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: showArrow ? "scrollToTop" : "scrollToTop scrollToTop_hidden",
        onClick: scrollHandler,
        children: /*#__PURE__*/ jsx_runtime_.jsx(ArrowLeft/* default */.Z, {})
    });
}
/* harmony default export */ const UI_ScrollToTop = (ScrollToTop);

// EXTERNAL MODULE: ./styles/globals.scss
var globals = __webpack_require__(3716);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/_app.tsx




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "facebook-domain-verification",
                        content: "lwsitoiny62r21xd2nyb8sf6s08et5"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(UI_ScrollToTop, {})
        ]
    });
}


/***/ }),

/***/ 3716:
/***/ (() => {



/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1601));
module.exports = __webpack_exports__;

})();