/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@ducanh2912/next-pwa/dist/fallback.js":
/*!************************************************************!*\
  !*** ./node_modules/@ducanh2912/next-pwa/dist/fallback.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nself.fallback = async (_)=>{\n    let { destination: e, url: A } = _, s = {\n        document: \"/offline\",\n        image: \"/static/images/fallback.png\",\n        audio: false,\n        video: false,\n        font: \"/static/font/fallback.woff2\"\n    }[e];\n    return s ? caches.match(s, {\n        ignoreSearch: !0\n    }) : \"\" === e && false && 0 ? 0 : Response.error();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGR1Y2FuaDI5MTIvbmV4dC1wd2EvZGlzdC9mYWxsYmFjay5qcyIsIm1hcHBpbmdzIjoiO0FBQUE7QUFDQSxVQUFVLHlCQUF5QjtBQUNuQyxrQkFBa0IsVUFBcUM7QUFDdkQsZUFBZSw2QkFBa0M7QUFDakQsZUFBZSxLQUFrQztBQUNqRCxlQUFlLEtBQWtDO0FBQ2pELGNBQWMsNkJBQWlDO0FBQy9DLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSyxnQkFBZ0IsS0FBaUMsSUFBSSxDQUF3QyxHQUFHLENBRS9GO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BkdWNhbmgyOTEyL25leHQtcHdhL2Rpc3QvZmFsbGJhY2suanM/NzkxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJzZWxmLmZhbGxiYWNrID0gYXN5bmMgKF8pPT57XG4gICAgbGV0IHsgZGVzdGluYXRpb246IGUsIHVybDogQSB9ID0gXywgcyA9IHtcbiAgICAgICAgZG9jdW1lbnQ6IHByb2Nlc3MuZW52Ll9fUFdBX0ZBTExCQUNLX0RPQ1VNRU5UX18sXG4gICAgICAgIGltYWdlOiBwcm9jZXNzLmVudi5fX1BXQV9GQUxMQkFDS19JTUFHRV9fLFxuICAgICAgICBhdWRpbzogcHJvY2Vzcy5lbnYuX19QV0FfRkFMTEJBQ0tfQVVESU9fXyxcbiAgICAgICAgdmlkZW86IHByb2Nlc3MuZW52Ll9fUFdBX0ZBTExCQUNLX1ZJREVPX18sXG4gICAgICAgIGZvbnQ6IHByb2Nlc3MuZW52Ll9fUFdBX0ZBTExCQUNLX0ZPTlRfX1xuICAgIH1bZV07XG4gICAgcmV0dXJuIHMgPyBjYWNoZXMubWF0Y2gocywge1xuICAgICAgICBpZ25vcmVTZWFyY2g6ICEwXG4gICAgfSkgOiBcIlwiID09PSBlICYmIHByb2Nlc3MuZW52Ll9fUFdBX0ZBTExCQUNLX0RBVEFfXyAmJiBBLm1hdGNoKC9cXC9fbmV4dFxcL2RhdGFcXC8uK1xcLy4rXFwuanNvbiQvaSkgPyBjYWNoZXMubWF0Y2gocHJvY2Vzcy5lbnYuX19QV0FfRkFMTEJBQ0tfREFUQV9fLCB7XG4gICAgICAgIGlnbm9yZVNlYXJjaDogITBcbiAgICB9KSA6IFJlc3BvbnNlLmVycm9yKCk7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@ducanh2912/next-pwa/dist/fallback.js\n"));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	!function() {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = function() {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScript: function(script) { return script; }
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("nextjs#bundler", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script */
/******/ 	!function() {
/******/ 		__webpack_require__.ts = function(script) { return __webpack_require__.tt().createScript(script); };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	!function() {
/******/ 		if (__webpack_require__.i) {
/******/ 		__webpack_require__.i.push(function(options) {
/******/ 			var originalFactory = options.factory;
/******/ 			options.factory = function(moduleObject, moduleExports, webpackRequire) {
/******/ 				var hasRefresh = typeof self !== "undefined" && !!self.$RefreshInterceptModuleExecution$;
/******/ 				var cleanup = hasRefresh ? self.$RefreshInterceptModuleExecution$(moduleObject.id) : function() {};
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					cleanup();
/******/ 				}
/******/ 			}
/******/ 		})
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	
/******/ 	// noop fns to prevent runtime errors during initialization
/******/ 	if (typeof self !== "undefined") {
/******/ 		self.$RefreshReg$ = function () {};
/******/ 		self.$RefreshSig$ = function () {
/******/ 			return function (type) {
/******/ 				return type;
/******/ 			};
/******/ 		};
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./node_modules/@ducanh2912/next-pwa/dist/fallback.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;