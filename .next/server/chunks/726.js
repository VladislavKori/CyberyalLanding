"use strict";
exports.id = 726;
exports.ids = [726];
exports.modules = {

/***/ 8726:
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1656);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9926);
/* harmony import */ var _api_apiClient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4294);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_assets_close_modal_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3813);
/* harmony import */ var _public_assets_ArrowRight_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4892);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_6__, zod__WEBPACK_IMPORTED_MODULE_7__, _api_apiClient__WEBPACK_IMPORTED_MODULE_8__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_6__, zod__WEBPACK_IMPORTED_MODULE_7__, _api_apiClient__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function Button() {
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
    const validationSchema = zod__WEBPACK_IMPORTED_MODULE_7__.z.object({
        email: zod__WEBPACK_IMPORTED_MODULE_7__.z.string().min(1, {
            message: "Please write your email"
        }).email({
            message: "You entered your email incorrectly"
        }),
        privacy: zod__WEBPACK_IMPORTED_MODULE_7__.z.literal(true, {
            errorMap: ()=>({
                    message: "You must accept Privacy Policy"
                })
        })
    });
    const { register , handleSubmit , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({
        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_6__.zodResolver)(validationSchema)
    });
    const onSubmit = (data)=>{
        // console.log(data);
        _api_apiClient__WEBPACK_IMPORTED_MODULE_8__/* ["default"].post */ .Z.post(`api/v1/cyberyal/set`, {
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal__WEBPACK_IMPORTED_MODULE_9___default()), {
                isOpen: modalIsOpen,
                onRequestClose: ()=>setIsOpen(false),
                style: customStyles,
                overlayClassName: "Overlay",
                className: "Modal",
                contentLabel: "Example Modal",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "modal",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            onClick: ()=>setIsOpen(false),
                            className: "modal__close",
                            src: _public_assets_close_modal_svg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                            alt: "so-icons"
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
                                    onSubmit: handleSubmit(onSubmit),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "hero__section_2__subscribe__email",
                                            children: "Your Email"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ...register("email"),
                                            type: "text",
                                            className: `hero__section_2__subscribe__input ${errors.email ? "hero__section_2__subscribe__input_error" : ""}`,
                                            placeholder: "Enter your Email"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                            className: "hero__section_2__subscribe__privacy",
                                            style: {
                                                marginTop: "8px"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    ...register("privacy"),
                                                    type: "checkbox",
                                                    className: `hero__section_2__subscribe__checkbox ${errors.email ? "hero__section_2__subscribe__checkbox_error" : ""}`
                                                }),
                                                "I agree with the",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: "/privacy",
                                                    className: "privacy_link",
                                                    children: "Privacy Policy"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                height: "60px",
                                                padding: "0px 0px"
                                            },
                                            children: errors.email || errors.privacy ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "hero__section_2__subscribe__input_text_error",
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
                                                className: "hero__section_2__subscribe__button",
                                                type: "submit",
                                                children: [
                                                    "Create Cyberyal ID ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        src: _public_assets_ArrowRight_svg__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                                                        alt: "ArrowRight"
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal__WEBPACK_IMPORTED_MODULE_9___default()), {
                isOpen: modalCongratIsOpen,
                onRequestClose: ()=>setIsOpenCongrat(false),
                style: customStyles,
                overlayClassName: "Overlay",
                className: "Modal",
                contentLabel: "Example Modal",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "modal",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            onClick: ()=>setIsOpenCongrat(false),
                            className: "modal__close",
                            src: _public_assets_close_modal_svg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                            alt: "so-icons"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "modal__content",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "modal__title",
                                    children: "Congratulations"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "modal__text",
                                    children: "You have successfully subscribed to our email newsletter, news, promotions and notifications will be sent to the email address you specified."
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: "header__btn",
                style: {
                    display: "flex",
                    alignItems: "center"
                },
                onClick: ()=>setIsOpen(true),
                children: [
                    "Cyberyal ID ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        className: "header__btn-icon",
                        src: _public_assets_ArrowRight_svg__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                        alt: "ArrowRight"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;