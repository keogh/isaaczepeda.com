webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MailChimpSignUpForm.jsx":
/*!********************************************!*\
  !*** ./components/MailChimpSignUpForm.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/izepeda/sites/isaaczepeda.com/src/components/MailChimpSignUpForm.jsx";


var MailchimpSingUpForm = function MailchimpSingUpForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      submitted = _useState4[0],
      setSubmitted = _useState4[1];

  var handleClickSubmit = function handleClickSubmit() {
    setSubmitted(true);
    setEmail('');
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    action: "https://gmail.us20.list-manage.com/subscribe/post?u=c59c053a616a5cc3f26a6b4f3&id=cbf1c5013a",
    method: "post",
    id: "mc-embedded-subscribe-form",
    name: "mc-embedded-subscribe-form",
    className: "validate",
    target: "_blank",
    noValidate: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "mc_embed_signup_scroll",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Bolet\xEDn de Machine Learning"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      fontWeight: 600
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Suscr\xEDbete para recibir noticias, organizar futuras meetups y grupos de estudio, y dem\xE1s ideas relacionadas con Machine Learning."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mc-field-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "mce-EMAIL",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Email:\xA0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "email",
    value: email,
    name: "EMAIL",
    className: "required email",
    id: "mce-EMAIL",
    style: {
      width: 250
    },
    onChange: function onChange(event) {
      setEmail(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "mce-responses",
    className: "clear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "response",
    id: "mce-error-response",
    style: {
      display: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "response",
    id: "mce-success-response",
    style: {
      display: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      position: 'absolute',
      left: '-5000px'
    },
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    name: "b_c59c053a616a5cc3f26a6b4f3_cbf1c5013a",
    tabIndex: "-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "clear",
    style: {
      marginTop: 9
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "submit",
    value: "Subscribe",
    name: "subscribe",
    id: "mc-embedded-subscribe",
    className: "button",
    onClick: handleClickSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), submitted && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Gracias por suscribirte."))));
};

/* harmony default export */ __webpack_exports__["default"] = (MailchimpSingUpForm);

/***/ })

})
//# sourceMappingURL=index.js.17f8b70e7939879b0d13.hot-update.js.map