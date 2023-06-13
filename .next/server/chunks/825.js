"use strict";
exports.id = 825;
exports.ids = [825];
exports.modules = {

/***/ 193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSliderArrow = function SvgSliderArrow(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeOpacity: 0.5,
    strokeWidth: 1.5,
    d: "M20.25 12H3.75M10.5 5.25 3.75 12l6.75 6.75"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgSliderArrow);

/***/ }),

/***/ 9930:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_UI_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2474);
/* harmony import */ var _data_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5188);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components_UI_Button__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components_UI_Button__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function Affilate() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    if (false) { var element; }
    const isPrivacy = router.pathname === "/privacy";
    const isHome = router.pathname === "/home";
    const isLanding = router.pathname === "/";
    const handleClick = ()=>element?.scrollIntoView();
    const handleClickRoute = async ()=>{
        // Wait for route change before do anything
        await router.push("/");
    // Reload after routing
    // router.reload();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        ...(0,_data_animations__WEBPACK_IMPORTED_MODULE_4__/* .smoothShow */ .Iw)(1),
        className: "affilate",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "affilate__container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "affilate__header",
                    children: "Cyberyal Affilate program"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "affilate__text",
                    children: "Join the ranks of those who are the first to discover opportunities Cyberyal - join our affililiate compaign, complete tasks and get bonuses"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Affilate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* binding */ advantages)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/features/BarbellIcon.svg
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBarbellIcon = function SvgBarbellIcon(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 48 48"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M46.5 22.5H45v-6a3 3 0 0 0-3-3h-3V12a3 3 0 0 0-3-3h-4.5a3 3 0 0 0-3 3v10.5h-9V12a3 3 0 0 0-3-3H12a3 3 0 0 0-3 3v1.5H6a3 3 0 0 0-3 3v6H1.5a1.5 1.5 0 1 0 0 3H3v6a3 3 0 0 0 3 3h3V36a3 3 0 0 0 3 3h4.5a3 3 0 0 0 3-3V25.5h9V36a3 3 0 0 0 3 3H36a3 3 0 0 0 3-3v-1.5h3a3 3 0 0 0 3-3v-6h1.5a1.5 1.5 0 1 0 0-3ZM6 31.5v-15h3v15H6ZM16.5 36H12V12h4.5v24ZM36 36h-4.5V12H36v24Zm6-4.5h-3v-15h3v15Z"
  })));
};
/* harmony default export */ const BarbellIcon = (SvgBarbellIcon);
;// CONCATENATED MODULE: ./public/features/CupIcon.svg
var CupIcon_path;
function CupIcon_extends() { CupIcon_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CupIcon_extends.apply(this, arguments); }

var SvgCupIcon = function SvgCupIcon(props) {
  return /*#__PURE__*/external_react_.createElement("svg", CupIcon_extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 48 48"
  }, props), CupIcon_path || (CupIcon_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M43.5 12H39v-1.5a3 3 0 0 0-3-3H12a3 3 0 0 0-3 3V12H4.5a3 3 0 0 0-3 3v3A7.5 7.5 0 0 0 9 25.5h.684A15.025 15.025 0 0 0 22.5 35.927V40.5H18a1.5 1.5 0 1 0 0 3h12a1.5 1.5 0 1 0 0-3h-4.5v-4.579c5.989-.605 10.958-4.807 12.765-10.421H39a7.5 7.5 0 0 0 7.5-7.5v-3a3 3 0 0 0-3-3ZM9 22.5A4.5 4.5 0 0 1 4.5 18v-3H9v6c0 .5.024 1 .073 1.5H9Zm27-1.669c0 6.66-5.342 12.12-11.908 12.169H24a12 12 0 0 1-12-12V10.5h24v10.331ZM43.5 18a4.5 4.5 0 0 1-4.5 4.5h-.094c.062-.554.093-1.111.094-1.669V15h4.5v3Z"
  })));
};
/* harmony default export */ const CupIcon = (SvgCupIcon);
;// CONCATENATED MODULE: ./public/features/HandshakeIcon.svg
var HandshakeIcon_path;
function HandshakeIcon_extends() { HandshakeIcon_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return HandshakeIcon_extends.apply(this, arguments); }

var SvgHandshakeIcon = function SvgHandshakeIcon(props) {
  return /*#__PURE__*/external_react_.createElement("svg", HandshakeIcon_extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 48 48"
  }, props), HandshakeIcon_path || (HandshakeIcon_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M22.455 40.864A1.5 1.5 0 0 1 21 42c-.126 0-.252-.015-.375-.045l-6-1.5a1.5 1.5 0 0 1-.469-.208l-4.5-3a1.5 1.5 0 1 1 1.665-2.496l4.283 2.856 5.748 1.438a1.5 1.5 0 0 1 1.103 1.819Zm24.88-18.086a2.98 2.98 0 0 1-1.5 1.734l-4.44 2.22-10.328 10.33a1.5 1.5 0 0 1-1.425.393l-12-3a1.512 1.512 0 0 1-.508-.234l-10.41-7.433-4.553-2.276A3 3 0 0 1 .83 20.488l4.66-9.317A3 3 0 0 1 9.511 9.83l4.136 2.062 9.938-2.839a1.5 1.5 0 0 1 .825 0l9.937 2.84 4.136-2.063a3 3 0 0 1 4.024 1.342l4.66 9.317a2.98 2.98 0 0 1 .166 2.29Zm-8.66 2.426L33.575 15h-5.966L19.5 22.875c2.374 1.517 6.096 1.935 9.435-1.43a1.5 1.5 0 0 1 2.003-.115l6.451 5.17 1.287-1.296ZM3.513 21.829l3.317 1.66 4.66-9.318-3.318-1.66-4.66 9.318Zm31.738 6.795-5.196-4.16c-3.663 3-8.315 3.395-12.17.937a3.001 3.001 0 0 1-.495-4.67l8.411-8.157-1.8-.514-9.454 2.702-5.132 10.262 9.225 6.59 10.902 2.725 5.709-5.715Zm9.233-6.795-4.654-9.317-3.317 1.66 4.66 9.316 3.31-1.66Z"
  })));
};
/* harmony default export */ const HandshakeIcon = (SvgHandshakeIcon);
;// CONCATENATED MODULE: ./public/features/UsersIcon.svg
var UsersIcon_path;
function UsersIcon_extends() { UsersIcon_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return UsersIcon_extends.apply(this, arguments); }

var SvgUsersIcon = function SvgUsersIcon(props) {
  return /*#__PURE__*/external_react_.createElement("svg", UsersIcon_extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 48 32"
  }, props), UsersIcon_path || (UsersIcon_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M21.984 21.61a11.25 11.25 0 1 0-12.469 0 17.968 17.968 0 0 0-8.853 7.07 1.5 1.5 0 1 0 2.512 1.64 15 15 0 0 1 25.151 0 1.5 1.5 0 0 0 2.513-1.64 17.968 17.968 0 0 0-8.854-7.07ZM7.5 12.25a8.25 8.25 0 1 1 8.25 8.25 8.26 8.26 0 0 1-8.25-8.25ZM46.9 30.756a1.5 1.5 0 0 1-2.076-.436A14.97 14.97 0 0 0 32.25 23.5a1.5 1.5 0 0 1 0-3 8.25 8.25 0 1 0-3.064-15.913 1.5 1.5 0 1 1-1.114-2.784A11.25 11.25 0 0 1 38.484 21.61a17.968 17.968 0 0 1 8.854 7.07 1.5 1.5 0 0 1-.437 2.076Z"
  })));
};
/* harmony default export */ const UsersIcon = (SvgUsersIcon);
;// CONCATENATED MODULE: ./data/advantages.ts




const advantages = [
    {
        id: 0,
        icon: UsersIcon,
        title: "PvP challenges",
        text: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
        id: 1,
        icon: CupIcon,
        title: "Tournaments",
        text: "Start a championship or join an existing one. Challenge your friends or strangers to prove that you are the most skilled player among all."
    },
    {
        id: 2,
        icon: HandshakeIcon,
        title: "Boosting",
        text: "Measure your results using our convenient reports. You can quickly filter, export, and drill down into the data with just a few clicks."
    },
    {
        id: 3,
        icon: BarbellIcon,
        title: "Coaching",
        text: "Improve your or someone's skills, enhance time management & mindset, improve teamwork, provide game knowledge and offer eSports career guidance."
    }
];


/***/ })

};
;