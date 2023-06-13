"use strict";
exports.id = 581;
exports.ids = [581];
exports.modules = {

/***/ 6581:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_socials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2809);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _data_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5188);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
framer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Socials() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "socials",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "socials__title",
                children: "Our social networks"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "socials__list",
                children: _data_socials__WEBPACK_IMPORTED_MODULE_3__/* .socials.map */ .U.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.li, {
                        ...(0,_data_animations__WEBPACK_IMPORTED_MODULE_5__/* .smoothShow */ .Iw)(0.5, index / 5),
                        className: "socials__item socials__item_discord",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: item.link,
                            target: "_blank",
                            style: {
                                textDecoration: "none"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "socials__card",
                                style: {
                                    padding: "16px"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: item.icon()
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "socials__card-info",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "socials__card-title",
                                                children: item.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "socials__card-text",
                                                children: item.text
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }))
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Socials);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Iw": () => (/* binding */ smoothShow),
/* harmony export */   "TG": () => (/* binding */ smoothFromBottom),
/* harmony export */   "il": () => (/* binding */ smoothFromLeft),
/* harmony export */   "n3": () => (/* binding */ smoothFromTop)
/* harmony export */ });
const smoothShow = (duration = 1, delay = 0)=>{
    return {
        initial: {
            opacity: 0
        },
        whileInView: {
            opacity: 1
        },
        viewport: {
            once: true
        },
        transition: {
            ease: "easeInOut",
            duration: duration,
            delay: delay
        }
    };
};
const smoothFromTop = (duration = 1, delay = 0)=>{
    return {
        initial: {
            opacity: 0,
            y: -20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            ease: "easeInOut",
            duration: duration,
            delay: delay
        }
    };
};
const smoothFromBottom = (duration = 1, delay = 0)=>{
    return {
        initial: {
            opacity: 0,
            y: 40
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            ease: "easeInOut",
            duration: duration,
            delay: delay
        }
    };
};
const smoothFromLeft = (duration = 1, delay = 0)=>{
    return {
        initial: {
            opacity: 0,
            x: -40
        },
        whileInView: {
            opacity: 1,
            x: 0
        },
        viewport: {
            once: true
        },
        transition: {
            ease: "easeInOut",
            duration: duration,
            delay: delay
        }
    };
};



/***/ })

};
;