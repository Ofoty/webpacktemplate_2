(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ "./src/print.js");




+ async function getComponent() {
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
  
    element.appendChild(btn);
  const btn = document.createElement('button');
    
   const element = document.createElement('div');
   const { default: _ } = await __webpack_require__.e(/*! import() | lodash */ "vendors").then(__webpack_require__.t.bind(null, /*! lodash */ "./node_modules/lodash/lodash.js", 7));

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.onclick = _print__WEBPACK_IMPORTED_MODULE_0__["default"].bind(null, 'Hello webpack!');

   return element;
}
    
  getComponent().then(component => {
      document.body.appendChild(component);
    })


/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return print; });
function print(text) {
   console.log(text);
 };

/***/ })

},[["./src/index.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByaW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNEI7OztBQUc1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFVBQVUsYUFBYSxTQUFTLG9KQUFpRDs7QUFFakY7QUFDQSxxQkFBcUIsOENBQUs7O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7Ozs7Ozs7Ozs7Ozs7QUN0Qkw7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxHIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFByaW50IGZyb20gJy4vcHJpbnQnO1xyXG5cclxuXHJcbisgYXN5bmMgZnVuY3Rpb24gZ2V0Q29tcG9uZW50KCkge1xyXG4gICAgYnRuLmlubmVySFRNTCA9ICdDbGljayBtZSBhbmQgY2hlY2sgdGhlIGNvbnNvbGUhJztcclxuICAgIGJ0bi5vbmNsaWNrID0gcHJpbnRNZTtcclxuICBcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIFxyXG4gICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgIGNvbnN0IHsgZGVmYXVsdDogXyB9ID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibG9kYXNoXCIgKi8gJ2xvZGFzaCcpO1xyXG5cclxuICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsICd3ZWJwYWNrJ10sICcgJyk7XHJcbiAgIGVsZW1lbnQub25jbGljayA9IFByaW50LmJpbmQobnVsbCwgJ0hlbGxvIHdlYnBhY2shJyk7XHJcblxyXG4gICByZXR1cm4gZWxlbWVudDtcclxufVxyXG4gICAgXHJcbiAgZ2V0Q29tcG9uZW50KCkudGhlbihjb21wb25lbnQgPT4ge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XHJcbiAgICB9KVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludCh0ZXh0KSB7XHJcbiAgIGNvbnNvbGUubG9nKHRleHQpO1xyXG4gfTsiXSwic291cmNlUm9vdCI6IiJ9