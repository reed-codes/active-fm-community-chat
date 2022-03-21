"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./firebase/client-app.js":
/*!********************************!*\
  !*** ./firebase/client-app.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"storage\": () => (/* binding */ storage),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useAuthStatus\": () => (/* binding */ useAuthStatus)\n/* harmony export */ });\n/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ \"@firebase/app\");\n/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/auth */ \"@firebase/auth\");\n/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_firebase_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/firestore */ \"@firebase/firestore\");\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/storage */ \"@firebase/storage\");\n/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_firebase_storage__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst firebaseApp = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)({\n  apiKey: \"AIzaSyDGPlYlakAeLCIhQSwgnQuH2z84ff-C7kw\",\n  authDomain: \"watsapp-clone-b851c.firebaseapp.com\",\n  projectId: \"watsapp-clone-b851c\",\n  storageBucket: \"watsapp-clone-b851c.appspot.com\",\n  messagingSenderId: \"2102807786\",\n  appId: \"1:2102807786:web:bdb6e6eddea9fe20021b93\"\n});\nconst auth = (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(firebaseApp);\nconst db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(firebaseApp);\nconst storage = (0,_firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(firebaseApp);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  auth,\n  db,\n  storage\n});\nconst useAuthStatus = () => (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState)(auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9jbGllbnQtYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNSyxXQUFXLEdBQUdMLDREQUFhLENBQUM7QUFDaENNLEVBQUFBLE1BQU0sRUFBRSx5Q0FEd0I7QUFFaENDLEVBQUFBLFVBQVUsRUFBRSxxQ0FGb0I7QUFHaENDLEVBQUFBLFNBQVMsRUFBRSxxQkFIcUI7QUFJaENDLEVBQUFBLGFBQWEsRUFBRSxpQ0FKaUI7QUFLaENDLEVBQUFBLGlCQUFpQixFQUFFLFlBTGE7QUFNaENDLEVBQUFBLEtBQUssRUFBRTtBQU55QixDQUFELENBQWpDO0FBVU8sTUFBTUMsSUFBSSxHQUFHWCx1REFBTyxDQUFDSSxXQUFELENBQXBCO0FBQ0EsTUFBTVEsRUFBRSxHQUFHWCxpRUFBWSxDQUFDRyxXQUFELENBQXZCO0FBQ0EsTUFBTVMsT0FBTyxHQUFHWCw2REFBVSxDQUFDRSxXQUFELENBQTFCO0FBR1AsaUVBQWU7QUFBQ08sRUFBQUEsSUFBRDtBQUFPQyxFQUFBQSxFQUFQO0FBQVdDLEVBQUFBO0FBQVgsQ0FBZjtBQUVPLE1BQU1DLGFBQWEsR0FBRyxNQUFLWCx1RUFBWSxDQUFDUSxJQUFELENBQXZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2F0c2FwcC1jbG9uZS8uL2ZpcmViYXNlL2NsaWVudC1hcHAuanM/ZWQ1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnQGZpcmViYXNlL2FwcCdcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tICdAZmlyZWJhc2UvYXV0aCdcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gJ0BmaXJlYmFzZS9maXJlc3RvcmUnXG5pbXBvcnQgeyBnZXRTdG9yYWdlIH0gZnJvbSAnQGZpcmViYXNlL3N0b3JhZ2UnXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJztcbiBcbmNvbnN0IGZpcmViYXNlQXBwID0gaW5pdGlhbGl6ZUFwcCh7XG4gIGFwaUtleTogXCJBSXphU3lER1BsWWxha0FlTENJaFFTd2duUXVIMno4NGZmLUM3a3dcIixcbiAgYXV0aERvbWFpbjogXCJ3YXRzYXBwLWNsb25lLWI4NTFjLmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwid2F0c2FwcC1jbG9uZS1iODUxY1wiLFxuICBzdG9yYWdlQnVja2V0OiBcIndhdHNhcHAtY2xvbmUtYjg1MWMuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMjEwMjgwNzc4NlwiLFxuICBhcHBJZDogXCIxOjIxMDI4MDc3ODY6d2ViOmJkYjZlNmVkZGVhOWZlMjAwMjFiOTNcIlxufSk7XG5cblxuZXhwb3J0IGNvbnN0IGF1dGggPSBnZXRBdXRoKGZpcmViYXNlQXBwKTtcbmV4cG9ydCBjb25zdCBkYiA9IGdldEZpcmVzdG9yZShmaXJlYmFzZUFwcCk7XG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoZmlyZWJhc2VBcHApO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHthdXRoLCBkYiwgc3RvcmFnZX07XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoU3RhdHVzID0gKCk9PiB1c2VBdXRoU3RhdGUoYXV0aCkiXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJnZXRGaXJlc3RvcmUiLCJnZXRTdG9yYWdlIiwidXNlQXV0aFN0YXRlIiwiZmlyZWJhc2VBcHAiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJhdXRoIiwiZGIiLCJzdG9yYWdlIiwidXNlQXV0aFN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase/client-app.js\n");

/***/ }),

/***/ "./lib/sign-in-with-google.js":
/*!************************************!*\
  !*** ./lib/sign-in-with-google.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signInWithGoogle\": () => (/* binding */ signInWithGoogle)\n/* harmony export */ });\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_client_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase/client-app */ \"./firebase/client-app.js\");\n\n\nconst signInWithGoogle = () => {\n  const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthProvider();\n  (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithPopup)(_firebase_client_app__WEBPACK_IMPORTED_MODULE_1__.auth, provider).then().catch(error => {\n    console.log(error.message);\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2lnbi1pbi13aXRoLWdvb2dsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVPLE1BQU1HLGdCQUFnQixHQUFHLE1BQU07QUFDaEMsUUFBTUMsUUFBUSxHQUFHLElBQUlKLDZEQUFKLEVBQWpCO0FBQ0FDLEVBQUFBLDhEQUFlLENBQUNDLHNEQUFELEVBQU9FLFFBQVAsQ0FBZixDQUNPQyxJQURQLEdBRU9DLEtBRlAsQ0FFY0MsS0FBRCxJQUFXO0FBQ1pDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLE9BQWxCO0FBQ0wsR0FKUDtBQUtMLENBUE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXRzYXBwLWNsb25lLy4vbGliL3NpZ24taW4td2l0aC1nb29nbGUuanM/YzIwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb29nbGVBdXRoUHJvdmlkZXIsIHNpZ25JbldpdGhQb3B1cCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2NsaWVudC1hcHBcIjtcblxuZXhwb3J0IGNvbnN0IHNpZ25JbldpdGhHb29nbGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcbiAgICAgIHNpZ25JbldpdGhQb3B1cChhdXRoLCBwcm92aWRlcilcbiAgICAgICAgICAgIC50aGVuKClcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXG4gICAgICAgICAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJhdXRoIiwic2lnbkluV2l0aEdvb2dsZSIsInByb3ZpZGVyIiwidGhlbiIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/sign-in-with-google.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/system */ \"@mui/system\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_Google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Google */ \"@mui/icons-material/Google\");\n/* harmony import */ var _mui_icons_material_Google__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Google__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_sign_in_with_google__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/sign-in-with-google */ \"./lib/sign-in-with-google.js\");\n\nvar _jsxFileName = \"/Users/thecoderlorian/Documents/reed-codes/dev/active-fm-community-chat/pages/index.js\";\n\n\n\n\n\n\nconst SignIn = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_2__.Box, {\n    className: \"fixed bottom-0 flex justify-center items-center flex-col w-full h-full overflow-hidden bg-[#000]\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: \"/main-logo.png\",\n      className: \"w-[50px] h-[50px] object-contain mb-20 animate-bounce pointer-events-none\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n      variant: \"contained\",\n      className: \"p-0 justify-center items-center overflow-hidden rounded-none\",\n      sx: {\n        padding: 0\n      },\n      onClick: _lib_sign_in_with_google__WEBPACK_IMPORTED_MODULE_5__.signInWithGoogle,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        component: \"span\",\n        className: \"bg-white p-4 h-full min-w-[60px] flex items-center justify-center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Google__WEBPACK_IMPORTED_MODULE_4___default()), {\n          className: \"text-[deeppink] text-[13px]\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        component: \"span\",\n        className: \"font-bold py-2 px-4 h-full w-full flex items-center justify-center text-white text-[11px] bg-[deeppink]\",\n        children: \"Sign in with google\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUssTUFBTSxHQUFHLE1BQU07QUFDakIsc0JBQ0ksOERBQUMsNENBQUQ7QUFBSyxhQUFTLEVBQUMsa0dBQWY7QUFBQSw0QkFDSTtBQUFLLFNBQUcsRUFBQyxnQkFBVDtBQUNJLGVBQVMsRUFBQztBQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFLSSw4REFBQyxpREFBRDtBQUNJLGFBQU8sRUFBQyxXQURaO0FBRUksZUFBUyxFQUFDLDhEQUZkO0FBR0ksUUFBRSxFQUFFO0FBQUVDLFFBQUFBLE9BQU8sRUFBRTtBQUFYLE9BSFI7QUFJSSxhQUFPLEVBQUVGLHNFQUpiO0FBQUEsOEJBTUksOERBQUMsNENBQUQ7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBc0IsaUJBQVMsRUFBQyxtRUFBaEM7QUFBQSwrQkFDSSw4REFBQyxtRUFBRDtBQUFZLG1CQUFTLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkosZUFVSSw4REFBQyw0Q0FBRDtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUNJLGlCQUFTLEVBQUMseUdBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBMEJILENBM0JEOztBQTZCQSxpRUFBZUMsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3dhdHNhcHAtY2xvbmUvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BtdWkvc3lzdGVtJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCBHb29nbGVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0dvb2dsZVwiO1xuaW1wb3J0IHsgc2lnbkluV2l0aEdvb2dsZSB9IGZyb20gXCIuLi9saWIvc2lnbi1pbi13aXRoLWdvb2dsZVwiO1xuXG5jb25zdCBTaWduSW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveCBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tMCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LWNvbCB3LWZ1bGwgaC1mdWxsIG92ZXJmbG93LWhpZGRlbiBiZy1bIzAwMF1cIiA+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9tYWluLWxvZ28ucG5nXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs1MHB4XSBoLVs1MHB4XSBvYmplY3QtY29udGFpbiBtYi0yMCBhbmltYXRlLWJvdW5jZSBwb2ludGVyLWV2ZW50cy1ub25lXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW5vbmVcIlxuICAgICAgICAgICAgICAgIHN4PXt7IHBhZGRpbmc6IDAgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaWduSW5XaXRoR29vZ2xlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCb3ggY29tcG9uZW50PVwic3BhblwiIGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCBoLWZ1bGwgbWluLXctWzYwcHhdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxHb29nbGVJY29uIGNsYXNzTmFtZT1cInRleHQtW2RlZXBwaW5rXSB0ZXh0LVsxM3B4XVwiIC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgICA8Qm94IGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGQgcHktMiBweC00IGgtZnVsbCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSB0ZXh0LVsxMXB4XSBiZy1bZGVlcHBpbmtdXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFNpZ24gaW4gd2l0aCBnb29nbGVcbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuXG5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduSW5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkJ1dHRvbiIsIkdvb2dsZUljb24iLCJzaWduSW5XaXRoR29vZ2xlIiwiU2lnbkluIiwicGFkZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@firebase/app":
/*!********************************!*\
  !*** external "@firebase/app" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@firebase/app");

/***/ }),

/***/ "@firebase/auth":
/*!*********************************!*\
  !*** external "@firebase/auth" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@firebase/auth");

/***/ }),

/***/ "@firebase/firestore":
/*!**************************************!*\
  !*** external "@firebase/firestore" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@firebase/firestore");

/***/ }),

/***/ "@firebase/storage":
/*!************************************!*\
  !*** external "@firebase/storage" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@firebase/storage");

/***/ }),

/***/ "@mui/icons-material/Google":
/*!*********************************************!*\
  !*** external "@mui/icons-material/Google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/Google");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("firebase/auth");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-firebase-hooks/auth":
/*!********************************************!*\
  !*** external "react-firebase-hooks/auth" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();