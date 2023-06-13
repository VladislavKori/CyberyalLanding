"use strict";
exports.id = 474;
exports.ids = [474];
exports.modules = {

/***/ 7962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgArrowRight = function SvgArrowRight(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 25 24"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m21.28 12.531-6.75 6.75a.75.75 0 1 1-1.06-1.061l5.47-5.47H4.25a.75.75 0 1 1 0-1.5h14.69l-5.47-5.469a.75.75 0 1 1 1.06-1.061l6.75 6.75a.748.748 0 0 1 0 1.061Z"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgArrowRight);

/***/ }),

/***/ 6144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCloseModal = function SvgCloseModal(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 20,
    height: 20,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m10 10 8 8M2 18l8-8-8 8ZM18 2l-8.002 8L18 2Zm-8.002 8L2 2l7.998 8Z"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgCloseModal);

/***/ }),

/***/ 4294:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const apiClient = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "https://cyberyal.com/",
    headers: {
        "X-Requested-With": "XMLHttpRequest"
    },
    withCredentials: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiClient);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2474:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1656);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9926);
/* harmony import */ var _api_apiClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4294);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2091);
/* harmony import */ var _public_assets_close_modal_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6144);
/* harmony import */ var _public_assets_ArrowRight_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7962);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_5__, zod__WEBPACK_IMPORTED_MODULE_6__, _api_apiClient__WEBPACK_IMPORTED_MODULE_7__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_5__, zod__WEBPACK_IMPORTED_MODULE_6__, _api_apiClient__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









// components 

// icons


function Button({ className  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    if (false) { var element; }
    const isPrivacy = router.pathname === "/privacy";
    const isHome = router.pathname === "/home";
    const isLanding = router.pathname === "/";
    const [utmParams, setUtmParams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return ()=>{
            if (false) {}
        };
    }, []);
    // console.log("utmParams", utmParams);
    const validationSchema = zod__WEBPACK_IMPORTED_MODULE_6__.z.object({
        email: zod__WEBPACK_IMPORTED_MODULE_6__.z.string().min(1, {
            message: "Please write your email"
        }).email({
            message: "You entered your email incorrectly"
        }),
        privacy: zod__WEBPACK_IMPORTED_MODULE_6__.z.literal(true, {
            errorMap: ()=>({
                    message: "You must accept Privacy Policy and Terms of use"
                })
        })
    });
    const { register , handleSubmit , reset , formState , formState: { errors , isSubmitSuccessful  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_5__.zodResolver)(validationSchema)
    });
    const onSubmit = (data)=>{
        // console.log(data);
        _api_apiClient__WEBPACK_IMPORTED_MODULE_7__/* ["default"].post */ .Z.post(`api/v1/cyberyal/set`, {
            utm: utmParams,
            email: data.email
        }).then((response)=>{
            setIsOpen(false);
            setIsOpenCongrat(true);
        }).catch((error)=>{
            console.log(error.message);
        // setIsOpen(false);
        // setIsOpenCongrat(true);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (formState.isSubmitSuccessful) {
            reset({
                email: ""
            });
        }
    }, [
        formState,
        reset
    ]);
    const [modalIsOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [modalCongratIsOpen, setIsOpenCongrat] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)"
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal__WEBPACK_IMPORTED_MODULE_8___default()), {
                isOpen: modalIsOpen,
                onRequestClose: ()=>setIsOpen(false),
                style: customStyles,
                overlayClassName: "Overlay",
                className: "Modal",
                contentLabel: "Example Modal",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "modal",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_public_assets_close_modal_svg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            onClick: ()=>setIsOpen(false),
                            className: "modal__close"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "modal__content",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "modal__title",
                                    children: "Cyberyal ID"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "modal__text",
                                    children: "Challenge players of your own skill level in your preferred games. Participate in tournaments and secure your portion of rewards. Join now!"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    className: "cidmodal__form",
                                    onSubmit: handleSubmit(onSubmit),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Input__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            id: "email",
                                            register: register,
                                            type: "text",
                                            errors: errors.email,
                                            placeholder: "Enter your Email",
                                            lable: "Your Email"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                            className: "cidmodal__checkbox-lable",
                                            style: {
                                                marginTop: "8px"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    ...register("privacy"),
                                                    type: "checkbox",
                                                    className: `cidmodal__checkbox ${errors.email ? "hero__section_2__subscribe__checkbox_error" : ""}`
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "5px",
                                                        flexWrap: "wrap"
                                                    },
                                                    children: [
                                                        "I agree with the",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            href: "/privacy",
                                                            className: "modal__link",
                                                            children: "Privacy Policy"
                                                        }),
                                                        "and",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            href: "/termsofuse",
                                                            className: "modal__link",
                                                            children: "Terms of use"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "modal__error",
                                            children: errors.email || errors.privacy ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "modal__error-text",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: errors.email?.message
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: errors.privacy?.message
                                                    })
                                                ]
                                            }) : ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                width: "100%",
                                                marginTop: "auto"
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                className: "header__btn modal__btn cidmodal__btn",
                                                type: "submit",
                                                children: [
                                                    "Create Cyberyal ID",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_public_assets_ArrowRight_svg__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                        className: "modal__arrow-right"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal__WEBPACK_IMPORTED_MODULE_8___default()), {
                isOpen: modalCongratIsOpen,
                onRequestClose: ()=>setIsOpenCongrat(false),
                style: customStyles,
                overlayClassName: "Overlay",
                className: "Modal",
                contentLabel: "Example Modal",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "modal",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_public_assets_close_modal_svg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            onClick: ()=>setIsOpenCongrat(false),
                            className: "modal__close"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "modal__content",
                            style: {
                                textAlign: "center"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "modal__title",
                                    children: "Congratulations"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "modal__text",
                                    children: "You are successful created an account to participate in the Cyberyal Affilate program."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "modal__text",
                                    children: [
                                        "Complete simple tasks and receive rewards! accomplish engaging and easy tasks, and then collect your well-deserved rewards.",
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "modal__text",
                                    children: "Thank you for your attention to our product"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        marginBottom: "10px"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "modal__button",
                                        onClick: ()=>setIsOpenCongrat(false),
                                        children: "Confirm"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "header__btn" + " " + className,
                style: {
                    display: "flex",
                    alignItems: "center"
                },
                onClick: ()=>setIsOpen(true),
                children: "Create Cyberyal ID"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Input({ register , className , lable , id , errors , ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: className ? "input" + " " + className : "input",
        children: [
            lable ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "input-lable",
                children: lable
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                ...register(id),
                ...props,
                className: `${errors ? "input_error" : ""}`
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ })

};
;