"use strict";
exports.id = 674;
exports.ids = [674];
exports.modules = {

/***/ 4222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/GameController.5397e3fa.svg","height":64,"width":64,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 7894:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_assets_GameController_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4222);
/* harmony import */ var _public_assets_ArrowRight_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4892);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1656);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9926);
/* harmony import */ var _public_assets_close_modal_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3813);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _api_apiClient__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4294);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_5__, zod__WEBPACK_IMPORTED_MODULE_6__, _api_apiClient__WEBPACK_IMPORTED_MODULE_10__, framer_motion__WEBPACK_IMPORTED_MODULE_11__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_5__, zod__WEBPACK_IMPORTED_MODULE_6__, _api_apiClient__WEBPACK_IMPORTED_MODULE_10__, framer_motion__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function Hero({ modal_text , form_header , form_text , form_button  }) {
    const [utmParams, setUtmParams] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
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
                    message: "You must accept Privacy Policy"
                })
        })
    });
    const { register , handleSubmit , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_5__.zodResolver)(validationSchema)
    });
    const onSubmit = (data)=>{
        // console.log(data);
        _api_apiClient__WEBPACK_IMPORTED_MODULE_10__/* ["default"].post */ .Z.post(`api/v1/cyberyal/set`, {
            utm: utmParams,
            email: data.email
        }).then((response)=>{
            setIsOpen(true);
        }).catch((error)=>{
            console.log(error.message);
        });
    };
    const [modalIsOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_9___default().useState(false);
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
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            onClick: ()=>setIsOpen(false),
                            className: "modal__close",
                            src: _public_assets_close_modal_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
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
                                    children: modal_text
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
                                        onClick: ()=>setIsOpen(false),
                                        children: "Confirm"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "hero",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {
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
                            duration: 0.6,
                            delay: 0.2
                        },
                        className: "hero__section_1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                className: "socials__icon",
                                src: _public_assets_GameController_svg__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
                                alt: "gamepad"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "hero__section_1__title",
                                children: "Take your gaming to the next level"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "hero__section_1__text",
                                children: [
                                    "Unlock your full gaming potential with our expert coaching. Our team of experienced gamers will help you improve your skills, climb the ranks, and dominate the game.",
                                    " "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "hero__section_2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {
                                initial: {
                                    opacity: 0,
                                    y: 50
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
                                    duration: 0.4,
                                    delay: 0.4
                                },
                                className: "hero__section_2__start",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "hero__section_2__start__title",
                                        children: "Start"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "hero__section_2__start__text",
                                        children: "Achieve your best shape with CYBERYAL!"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.form, {
                                initial: {
                                    opacity: 0,
                                    y: 100
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
                                    duration: 0.6,
                                    delay: 0.6
                                },
                                onSubmit: handleSubmit(onSubmit),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "hero__section_2__subscribe",
                                    id: "ref",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "hero__section_2__subscribe__title",
                                            children: form_header
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "hero__section_2__subscribe__text",
                                            children: form_text
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                            className: "hero__section_2__subscribe__divider"
                                        }),
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
                                        errors.email || errors.privacy ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
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
                                        }) : "",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                            className: "hero__section_2__subscribe__privacy",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    ...register("privacy"),
                                                    type: "checkbox",
                                                    className: `hero__section_2__subscribe__checkbox ${errors.email ? "hero__section_2__subscribe__checkbox_error" : ""}`
                                                }),
                                                "I agree with the",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                    href: "/privacy",
                                                    className: "privacy_link",
                                                    children: "Privacy Policy"
                                                })
                                            ]
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
                                                    form_button,
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        src: _public_assets_ArrowRight_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                                                        alt: "ArrowRight"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;