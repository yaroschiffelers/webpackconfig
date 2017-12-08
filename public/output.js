/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n__webpack_require__(1);\n\ndocument.write('Ombushakalaka, he! ');\n\nvar Animal = function () {\n    function Animal() {\n        _classCallCheck(this, Animal);\n    }\n\n    _createClass(Animal, [{\n        key: 'animalType',\n        value: function animalType(animal) {\n            document.write('I love ' + animal + ' ');\n        }\n    }]);\n\n    return Animal;\n}();\n\nvar platypus = new Animal();\n\nplatypus.animalType('platypus');\n\nvar hippo = new Animal();\n\nhippo.animalType('hippo');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiZG9jdW1lbnQiLCJ3cml0ZSIsIkFuaW1hbCIsImFuaW1hbCIsInBsYXR5cHVzIiwiYW5pbWFsVHlwZSIsImhpcHBvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQkFBQUEsQ0FBUSxDQUFSOztBQUVBQyxTQUFTQyxLQUFULENBQWUscUJBQWY7O0lBRU1DLE07Ozs7Ozs7bUNBQ1NDLE0sRUFBUTtBQUNmSCxxQkFBU0MsS0FBVCxhQUF5QkUsTUFBekI7QUFDSDs7Ozs7O0FBR0wsSUFBTUMsV0FBVyxJQUFJRixNQUFKLEVBQWpCOztBQUVBRSxTQUFTQyxVQUFULENBQW9CLFVBQXBCOztBQUVBLElBQU1DLFFBQVEsSUFBSUosTUFBSixFQUFkOztBQUVBSSxNQUFNRCxVQUFOLENBQWlCLE9BQWpCIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuL3N0eWxlLnNjc3MnKVxuXG5kb2N1bWVudC53cml0ZSgnT21idXNoYWthbGFrYSwgaGUhICcpXG5cbmNsYXNzIEFuaW1hbCB7XG4gICAgYW5pbWFsVHlwZShhbmltYWwpIHtcbiAgICAgICAgZG9jdW1lbnQud3JpdGUoYEkgbG92ZSAke2FuaW1hbH0gYClcbiAgICB9XG59XG5cbmNvbnN0IHBsYXR5cHVzID0gbmV3IEFuaW1hbCBcblxucGxhdHlwdXMuYW5pbWFsVHlwZSgncGxhdHlwdXMnKVxuXG5jb25zdCBoaXBwbyA9IG5ldyBBbmltYWwgXG5cbmhpcHBvLmFuaW1hbFR5cGUoJ2hpcHBvJylcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2Nzcz85YjM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);