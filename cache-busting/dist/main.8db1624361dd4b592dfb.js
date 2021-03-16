/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("//Based on the fast inverse square root function\n// https://en.wikipedia.org/wiki/Fast_inverse_square_root\n// Some original comments preserved for humor value\n// Designed to try to mimic the original as closely as possible\nfunction Q_rsqrt(number)\n{\n    var i;\n    var x2, y;\n    const threehalfs = 1.5;\n\n    x2 = number * 0.5;\n    y = number;\n    //evil floating bit level hacking\n    var buf = new ArrayBuffer(4);\n    (new Float32Array(buf))[0] = number;\n    i =  (new Uint32Array(buf))[0];\n    i = (0x5f3759df - (i >> 1)); //What the fuck?\n    (new Uint32Array(buf))[0] = i;\n    y = (new Float32Array(buf))[0];\n    y  = y * ( threehalfs - ( x2 * y * y ) );   // 1st iteration\n//  y  = y * ( threehalfs - ( x2 * y * y ) );   // 2nd iteration, this can be removed\n\n    return y;\n}\n\n\n//# sourceURL=webpack://cache-busting/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;