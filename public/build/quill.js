(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quill"],{

/***/ "./assets/css/quill.css":
/*!******************************!*\
  !*** ./assets/css/quill.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/quill.js":
/*!****************************!*\
  !*** ./assets/js/quill.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_quill_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/quill.css */ "./assets/css/quill.css");
/* harmony import */ var _css_quill_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_quill_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var quill_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill/core */ "./node_modules/quill/core.js");
/* harmony import */ var quill_modules_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill/modules/toolbar */ "./node_modules/quill/modules/toolbar.js");
/* harmony import */ var quill_themes_snow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill/themes/snow */ "./node_modules/quill/themes/snow.js");
/* harmony import */ var quill_formats_bold__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! quill/formats/bold */ "./node_modules/quill/formats/bold.js");
/* harmony import */ var quill_formats_italic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! quill/formats/italic */ "./node_modules/quill/formats/italic.js");
/* harmony import */ var quill_formats_underline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! quill/formats/underline */ "./node_modules/quill/formats/underline.js");
/* harmony import */ var quill_formats_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! quill/formats/header */ "./node_modules/quill/formats/header.js");
/* harmony import */ var quill_formats_align__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! quill/formats/align */ "./node_modules/quill/formats/align.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/quill.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/09/2020 13:25










quill_core__WEBPACK_IMPORTED_MODULE_1__["default"].register({
  'modules/toolbar': quill_modules_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"],
  'themes/snow': quill_themes_snow__WEBPACK_IMPORTED_MODULE_3__["default"],
  'formats/bold': quill_formats_bold__WEBPACK_IMPORTED_MODULE_4__["default"],
  'formats/italic': quill_formats_italic__WEBPACK_IMPORTED_MODULE_5__["default"],
  'formats/underline': quill_formats_underline__WEBPACK_IMPORTED_MODULE_6__["default"],
  'formats/header': quill_formats_header__WEBPACK_IMPORTED_MODULE_7__["default"],
  'formats/align': quill_formats_align__WEBPACK_IMPORTED_MODULE_8__["AlignStyle"]
});
/* harmony default export */ __webpack_exports__["default"] = (quill_core__WEBPACK_IMPORTED_MODULE_1__["default"]);
var options = {
  theme: 'snow',
  toolbar: 'full'
};
var toolbarFullOptions = [[{
  'header': [1, 2, 3, 4, 5, 6, false]
}, {
  'size': ['small', false, 'large', 'huge']
}], ['bold', 'italic', 'underline'], // toggled buttons
[{
  'color': []
}, {
  'background': []
}], // dropdown with defaults from theme
[{
  'header': 1
}, {
  'header': 2
}, 'blockquote', 'code-block'], [{
  'list': 'ordered'
}, {
  'list': 'bullet'
}, {
  'indent': '-1'
}, {
  'indent': '+1'
}], ['link'], ['clean'] // remove formatting button
];

if (options.toolbar !== undefined) {
  var toolbar = options.toolbar.toLowerCase();

  if (toolbar == 'full') {
    options.modules = {
      //syntax: 'true',
      toolbar: toolbarFullOptions
    };
  }
}

jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).ready(function () {
  initQuill();
});
jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).ajaxComplete(function () {
  initQuill();
});

function initQuill() {
  var obj = jquery__WEBPACK_IMPORTED_MODULE_9___default()('[data-provide="quill"]');

  if (obj.length === 1) {
    new quill_core__WEBPACK_IMPORTED_MODULE_1__["default"](jquery__WEBPACK_IMPORTED_MODULE_9___default()('[data-provide="quill"]')[0], options);
  }
}

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

},[["./assets/js/quill.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~08e24351","vendors~adm.stage_courrier~quill"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3F1aWxsLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcXVpbGwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6WyJRdWlsbCIsInJlZ2lzdGVyIiwiVG9vbGJhciIsIlNub3ciLCJCb2xkIiwiSXRhbGljIiwiVW5kZXJsaW5lIiwiSGVhZGVyIiwiQWxpZ25TdHlsZSIsIm9wdGlvbnMiLCJ0aGVtZSIsInRvb2xiYXIiLCJ0b29sYmFyRnVsbE9wdGlvbnMiLCJ1bmRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsIm1vZHVsZXMiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImluaXRRdWlsbCIsImFqYXhDb21wbGV0ZSIsIm9iaiIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0FBLGtEQUFLLENBQUNDLFFBQU4sQ0FBZTtBQUNiLHFCQUFtQkMsNkRBRE47QUFFYixpQkFBZUMseURBRkY7QUFHYixrQkFBZ0JDLDBEQUhIO0FBSWIsb0JBQWtCQyw0REFKTDtBQUtiLHVCQUFxQkMsK0RBTFI7QUFNYixvQkFBa0JDLDREQU5MO0FBT2IsbUJBQWlCQyw4REFBVUE7QUFQZCxDQUFmO0FBV2VSLGlIQUFmO0FBRUEsSUFBSVMsT0FBTyxHQUFHO0FBQ1pDLE9BQUssRUFBRSxNQURLO0FBRVpDLFNBQU8sRUFBRTtBQUZHLENBQWQ7QUFLQSxJQUFJQyxrQkFBa0IsR0FBRyxDQUN2QixDQUNFO0FBQUMsWUFBVSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLEtBQW5CO0FBQVgsQ0FERixFQUVFO0FBQUMsVUFBUSxDQUFDLE9BQUQsRUFBVSxLQUFWLEVBQWlCLE9BQWpCLEVBQTBCLE1BQTFCO0FBQVQsQ0FGRixDQUR1QixFQUt2QixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFdBQW5CLENBTHVCLEVBS2lCO0FBQ3hDLENBQUM7QUFBQyxXQUFTO0FBQVYsQ0FBRCxFQUFnQjtBQUFDLGdCQUFjO0FBQWYsQ0FBaEIsQ0FOdUIsRUFNdUI7QUFDOUMsQ0FBQztBQUFDLFlBQVU7QUFBWCxDQUFELEVBQWdCO0FBQUMsWUFBVTtBQUFYLENBQWhCLEVBQStCLFlBQS9CLEVBQTZDLFlBQTdDLENBUHVCLEVBUXZCLENBQUM7QUFBQyxVQUFRO0FBQVQsQ0FBRCxFQUFzQjtBQUFDLFVBQVE7QUFBVCxDQUF0QixFQUEwQztBQUFDLFlBQVU7QUFBWCxDQUExQyxFQUE0RDtBQUFDLFlBQVU7QUFBWCxDQUE1RCxDQVJ1QixFQVN2QixDQUFDLE1BQUQsQ0FUdUIsRUFVdkIsQ0FBQyxPQUFELENBVnVCLENBVTJCO0FBVjNCLENBQXpCOztBQWFBLElBQUlILE9BQU8sQ0FBQ0UsT0FBUixLQUFvQkUsU0FBeEIsRUFBbUM7QUFDakMsTUFBSUYsT0FBTyxHQUFHRixPQUFPLENBQUNFLE9BQVIsQ0FBZ0JHLFdBQWhCLEVBQWQ7O0FBQ0EsTUFBSUgsT0FBTyxJQUFJLE1BQWYsRUFBdUI7QUFDckJGLFdBQU8sQ0FBQ00sT0FBUixHQUFrQjtBQUNoQjtBQUNBSixhQUFPLEVBQUVDO0FBRk8sS0FBbEI7QUFJRDtBQUNGOztBQUVESSw2Q0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzVCQyxXQUFTO0FBQ1YsQ0FGRDtBQUlBSCw2Q0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUcsWUFBWixDQUF5QixZQUFZO0FBQ25DRCxXQUFTO0FBQ1YsQ0FGRDs7QUFJQSxTQUFTQSxTQUFULEdBQXNCO0FBQ3BCLE1BQUlFLEdBQUcsR0FBR0wsNkNBQUMsQ0FBQyx3QkFBRCxDQUFYOztBQUNBLE1BQUlLLEdBQUcsQ0FBQ0MsTUFBSixLQUFlLENBQW5CLEVBQXNCO0FBQ3BCLFFBQUl0QixrREFBSixDQUFVZ0IsNkNBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCLENBQTVCLENBQVYsRUFBMENQLE9BQTFDO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7OztBQzNFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoicXVpbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcXVpbGwuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAwNS8wOS8yMDIwIDEzOjI1XG5cbmltcG9ydCAnLi4vY3NzL3F1aWxsLmNzcydcblxuaW1wb3J0IFF1aWxsIGZyb20gJ3F1aWxsL2NvcmUnXG5cbmltcG9ydCBUb29sYmFyIGZyb20gJ3F1aWxsL21vZHVsZXMvdG9vbGJhcidcbmltcG9ydCBTbm93IGZyb20gJ3F1aWxsL3RoZW1lcy9zbm93J1xuXG5pbXBvcnQgQm9sZCBmcm9tICdxdWlsbC9mb3JtYXRzL2JvbGQnXG5pbXBvcnQgSXRhbGljIGZyb20gJ3F1aWxsL2Zvcm1hdHMvaXRhbGljJ1xuaW1wb3J0IFVuZGVybGluZSBmcm9tICdxdWlsbC9mb3JtYXRzL3VuZGVybGluZSdcbmltcG9ydCBIZWFkZXIgZnJvbSAncXVpbGwvZm9ybWF0cy9oZWFkZXInXG5pbXBvcnQge0FsaWduU3R5bGV9IGZyb20gJ3F1aWxsL2Zvcm1hdHMvYWxpZ24nXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cblxuUXVpbGwucmVnaXN0ZXIoe1xuICAnbW9kdWxlcy90b29sYmFyJzogVG9vbGJhcixcbiAgJ3RoZW1lcy9zbm93JzogU25vdyxcbiAgJ2Zvcm1hdHMvYm9sZCc6IEJvbGQsXG4gICdmb3JtYXRzL2l0YWxpYyc6IEl0YWxpYyxcbiAgJ2Zvcm1hdHMvdW5kZXJsaW5lJzogVW5kZXJsaW5lLFxuICAnZm9ybWF0cy9oZWFkZXInOiBIZWFkZXIsXG4gICdmb3JtYXRzL2FsaWduJzogQWxpZ25TdHlsZVxufSlcblxuXG5leHBvcnQgZGVmYXVsdCBRdWlsbFxuXG5sZXQgb3B0aW9ucyA9IHtcbiAgdGhlbWU6ICdzbm93JyxcbiAgdG9vbGJhcjogJ2Z1bGwnXG59XG5cbmxldCB0b29sYmFyRnVsbE9wdGlvbnMgPSBbXG4gIFtcbiAgICB7J2hlYWRlcic6IFsxLCAyLCAzLCA0LCA1LCA2LCBmYWxzZV19LFxuICAgIHsnc2l6ZSc6IFsnc21hbGwnLCBmYWxzZSwgJ2xhcmdlJywgJ2h1Z2UnXX1cbiAgXSxcbiAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnXSwgICAgICAgIC8vIHRvZ2dsZWQgYnV0dG9uc1xuICBbeydjb2xvcic6IFtdfSwgeydiYWNrZ3JvdW5kJzogW119XSwgICAgICAgICAgLy8gZHJvcGRvd24gd2l0aCBkZWZhdWx0cyBmcm9tIHRoZW1lXG4gIFt7J2hlYWRlcic6IDF9LCB7J2hlYWRlcic6IDJ9LCAnYmxvY2txdW90ZScsICdjb2RlLWJsb2NrJ10sXG4gIFt7J2xpc3QnOiAnb3JkZXJlZCd9LCB7J2xpc3QnOiAnYnVsbGV0J30sIHsnaW5kZW50JzogJy0xJ30sIHsnaW5kZW50JzogJysxJ31dLFxuICBbJ2xpbmsnXSxcbiAgWydjbGVhbiddICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZm9ybWF0dGluZyBidXR0b25cbl1cblxuaWYgKG9wdGlvbnMudG9vbGJhciAhPT0gdW5kZWZpbmVkKSB7XG4gIHZhciB0b29sYmFyID0gb3B0aW9ucy50b29sYmFyLnRvTG93ZXJDYXNlKClcbiAgaWYgKHRvb2xiYXIgPT0gJ2Z1bGwnKSB7XG4gICAgb3B0aW9ucy5tb2R1bGVzID0ge1xuICAgICAgLy9zeW50YXg6ICd0cnVlJyxcbiAgICAgIHRvb2xiYXI6IHRvb2xiYXJGdWxsT3B0aW9uc1xuICAgIH1cbiAgfVxufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIGluaXRRdWlsbCgpXG59KVxuXG4kKGRvY3VtZW50KS5hamF4Q29tcGxldGUoZnVuY3Rpb24gKCkge1xuICBpbml0UXVpbGwoKVxufSlcblxuZnVuY3Rpb24gaW5pdFF1aWxsICgpIHtcbiAgbGV0IG9iaiA9ICQoJ1tkYXRhLXByb3ZpZGU9XCJxdWlsbFwiXScpXG4gIGlmIChvYmoubGVuZ3RoID09PSAxKSB7XG4gICAgbmV3IFF1aWxsKCQoJ1tkYXRhLXByb3ZpZGU9XCJxdWlsbFwiXScpWzBdLCBvcHRpb25zKVxuICB9XG59XG5cblxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==