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
/* harmony import */ var quill_formats_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! quill/formats/list */ "./node_modules/quill/formats/list.js");
/* harmony import */ var quill_formats_size__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! quill/formats/size */ "./node_modules/quill/formats/size.js");
/* harmony import */ var quill_formats_color__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! quill/formats/color */ "./node_modules/quill/formats/color.js");
/* harmony import */ var quill_formats_background__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! quill/formats/background */ "./node_modules/quill/formats/background.js");
/* harmony import */ var quill_formats_blockquote__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! quill/formats/blockquote */ "./node_modules/quill/formats/blockquote.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/quill.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/10/2020 06:58















quill_core__WEBPACK_IMPORTED_MODULE_1__["default"].register({
  'modules/toolbar': quill_modules_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"],
  'themes/snow': quill_themes_snow__WEBPACK_IMPORTED_MODULE_3__["default"],
  'formats/bold': quill_formats_bold__WEBPACK_IMPORTED_MODULE_4__["default"],
  'formats/italic': quill_formats_italic__WEBPACK_IMPORTED_MODULE_5__["default"],
  'formats/size': quill_formats_size__WEBPACK_IMPORTED_MODULE_11__["SizeStyle"],
  'formats/color': quill_formats_color__WEBPACK_IMPORTED_MODULE_12__["ColorStyle"],
  'formats/background': quill_formats_background__WEBPACK_IMPORTED_MODULE_13__["BackgroundStyle"],
  'formats/underline': quill_formats_underline__WEBPACK_IMPORTED_MODULE_6__["default"],
  'formats/header': quill_formats_header__WEBPACK_IMPORTED_MODULE_7__["default"],
  'formats/list': quill_formats_list__WEBPACK_IMPORTED_MODULE_10__["default"],
  'formats/list-item': quill_formats_list__WEBPACK_IMPORTED_MODULE_10__["ListItem"],
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
}], [{
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

},[["./assets/js/quill.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~d677a9f6","vendors~adm.stage_courrier~quill"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3F1aWxsLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcXVpbGwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6WyJRdWlsbCIsInJlZ2lzdGVyIiwiVG9vbGJhciIsIlNub3ciLCJCb2xkIiwiSXRhbGljIiwiU2l6ZVN0eWxlIiwiQ29sb3JTdHlsZSIsIkJhY2tncm91bmRTdHlsZSIsIlVuZGVybGluZSIsIkhlYWRlciIsIkxpc3QiLCJMaXN0SXRlbSIsIkFsaWduU3R5bGUiLCJvcHRpb25zIiwidGhlbWUiLCJ0b29sYmFyIiwidG9vbGJhckZ1bGxPcHRpb25zIiwidW5kZWZpbmVkIiwidG9Mb3dlckNhc2UiLCJtb2R1bGVzIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJpbml0UXVpbGwiLCJhamF4Q29tcGxldGUiLCJvYmoiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLGtEQUFLLENBQUNDLFFBQU4sQ0FBZTtBQUNiLHFCQUFtQkMsNkRBRE47QUFFYixpQkFBZUMseURBRkY7QUFHYixrQkFBZ0JDLDBEQUhIO0FBSWIsb0JBQWtCQyw0REFKTDtBQUtiLGtCQUFnQkMsNkRBTEg7QUFNYixtQkFBaUJDLCtEQU5KO0FBT2Isd0JBQXNCQyx5RUFQVDtBQVFiLHVCQUFxQkMsK0RBUlI7QUFTYixvQkFBa0JDLDREQVRMO0FBVWIsa0JBQWdCQywyREFWSDtBQVdiLHVCQUFxQkMsNERBWFI7QUFZYixtQkFBaUJDLDhEQUFVQTtBQVpkLENBQWY7QUFnQmViLGlIQUFmO0FBRUEsSUFBSWMsT0FBTyxHQUFHO0FBQ1pDLE9BQUssRUFBRSxNQURLO0FBRVpDLFNBQU8sRUFBRTtBQUZHLENBQWQ7QUFLQSxJQUFJQyxrQkFBa0IsR0FBRyxDQUN2QixDQUNFO0FBQUMsWUFBVSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLEtBQW5CO0FBQVgsQ0FERixFQUVFO0FBQUMsVUFBUSxDQUFDLE9BQUQsRUFBVSxLQUFWLEVBQWlCLE9BQWpCLEVBQTBCLE1BQTFCO0FBQVQsQ0FGRixDQUR1QixFQUt2QixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFdBQW5CLENBTHVCLEVBS2lCO0FBQ3hDLENBQUM7QUFBQyxXQUFTO0FBQVYsQ0FBRCxFQUFnQjtBQUFDLGdCQUFjO0FBQWYsQ0FBaEIsQ0FOdUIsRUFNdUI7QUFDOUMsQ0FBQztBQUFDLFlBQVU7QUFBWCxDQUFELEVBQWdCO0FBQUMsWUFBVTtBQUFYLENBQWhCLENBUHVCLEVBUXZCLENBQUM7QUFBQyxVQUFRO0FBQVQsQ0FBRCxFQUFzQjtBQUFDLFVBQVE7QUFBVCxDQUF0QixFQUEwQztBQUFDLFlBQVU7QUFBWCxDQUExQyxFQUE0RDtBQUFDLFlBQVU7QUFBWCxDQUE1RCxDQVJ1QixFQVN2QixDQUFDLE1BQUQsQ0FUdUIsRUFVdkIsQ0FBQyxPQUFELENBVnVCLENBVTJCO0FBVjNCLENBQXpCOztBQWFBLElBQUlILE9BQU8sQ0FBQ0UsT0FBUixLQUFvQkUsU0FBeEIsRUFBbUM7QUFDakMsTUFBSUYsT0FBTyxHQUFHRixPQUFPLENBQUNFLE9BQVIsQ0FBZ0JHLFdBQWhCLEVBQWQ7O0FBQ0EsTUFBSUgsT0FBTyxJQUFJLE1BQWYsRUFBdUI7QUFDckJGLFdBQU8sQ0FBQ00sT0FBUixHQUFrQjtBQUNoQjtBQUNBSixhQUFPLEVBQUVDO0FBRk8sS0FBbEI7QUFJRDtBQUNGOztBQUVESSw2Q0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzVCQyxXQUFTO0FBQ1YsQ0FGRDtBQUlBSCw2Q0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUcsWUFBWixDQUF5QixZQUFZO0FBQ25DRCxXQUFTO0FBQ1YsQ0FGRDs7QUFJQSxTQUFTQSxTQUFULEdBQXNCO0FBQ3BCLE1BQUlFLEdBQUcsR0FBR0wsNkNBQUMsQ0FBQyx3QkFBRCxDQUFYOztBQUNBLE1BQUlLLEdBQUcsQ0FBQ0MsTUFBSixLQUFlLENBQW5CLEVBQXNCO0FBQ3BCLFFBQUkzQixrREFBSixDQUFVcUIsNkNBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCLENBQTVCLENBQVYsRUFBMENQLE9BQTFDO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7OztBQ3BGRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoicXVpbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcXVpbGwuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAwNC8xMC8yMDIwIDA2OjU4XG5cbmltcG9ydCAnLi4vY3NzL3F1aWxsLmNzcydcblxuaW1wb3J0IFF1aWxsIGZyb20gJ3F1aWxsL2NvcmUnXG5cbmltcG9ydCBUb29sYmFyIGZyb20gJ3F1aWxsL21vZHVsZXMvdG9vbGJhcidcbmltcG9ydCBTbm93IGZyb20gJ3F1aWxsL3RoZW1lcy9zbm93J1xuXG5pbXBvcnQgQm9sZCBmcm9tICdxdWlsbC9mb3JtYXRzL2JvbGQnXG5pbXBvcnQgSXRhbGljIGZyb20gJ3F1aWxsL2Zvcm1hdHMvaXRhbGljJ1xuaW1wb3J0IFVuZGVybGluZSBmcm9tICdxdWlsbC9mb3JtYXRzL3VuZGVybGluZSdcbmltcG9ydCBIZWFkZXIgZnJvbSAncXVpbGwvZm9ybWF0cy9oZWFkZXInXG5pbXBvcnQge0FsaWduU3R5bGV9IGZyb20gJ3F1aWxsL2Zvcm1hdHMvYWxpZ24nXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgTGlzdCwge0xpc3RJdGVtfSBmcm9tICdxdWlsbC9mb3JtYXRzL2xpc3QnXG5pbXBvcnQge1NpemVTdHlsZX0gZnJvbSAncXVpbGwvZm9ybWF0cy9zaXplJ1xuaW1wb3J0IHtDb2xvclN0eWxlfSBmcm9tICdxdWlsbC9mb3JtYXRzL2NvbG9yJ1xuaW1wb3J0IHtCYWNrZ3JvdW5kU3R5bGV9IGZyb20gJ3F1aWxsL2Zvcm1hdHMvYmFja2dyb3VuZCdcbmltcG9ydCBCbG9ja3F1b3RlIGZyb20gJ3F1aWxsL2Zvcm1hdHMvYmxvY2txdW90ZSdcblxuUXVpbGwucmVnaXN0ZXIoe1xuICAnbW9kdWxlcy90b29sYmFyJzogVG9vbGJhcixcbiAgJ3RoZW1lcy9zbm93JzogU25vdyxcbiAgJ2Zvcm1hdHMvYm9sZCc6IEJvbGQsXG4gICdmb3JtYXRzL2l0YWxpYyc6IEl0YWxpYyxcbiAgJ2Zvcm1hdHMvc2l6ZSc6IFNpemVTdHlsZSxcbiAgJ2Zvcm1hdHMvY29sb3InOiBDb2xvclN0eWxlLFxuICAnZm9ybWF0cy9iYWNrZ3JvdW5kJzogQmFja2dyb3VuZFN0eWxlLFxuICAnZm9ybWF0cy91bmRlcmxpbmUnOiBVbmRlcmxpbmUsXG4gICdmb3JtYXRzL2hlYWRlcic6IEhlYWRlcixcbiAgJ2Zvcm1hdHMvbGlzdCc6IExpc3QsXG4gICdmb3JtYXRzL2xpc3QtaXRlbSc6IExpc3RJdGVtLFxuICAnZm9ybWF0cy9hbGlnbic6IEFsaWduU3R5bGVcbn0pXG5cblxuZXhwb3J0IGRlZmF1bHQgUXVpbGxcblxubGV0IG9wdGlvbnMgPSB7XG4gIHRoZW1lOiAnc25vdycsXG4gIHRvb2xiYXI6ICdmdWxsJ1xufVxuXG5sZXQgdG9vbGJhckZ1bGxPcHRpb25zID0gW1xuICBbXG4gICAgeydoZWFkZXInOiBbMSwgMiwgMywgNCwgNSwgNiwgZmFsc2VdfSxcbiAgICB7J3NpemUnOiBbJ3NtYWxsJywgZmFsc2UsICdsYXJnZScsICdodWdlJ119XG4gIF0sXG4gIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJ10sICAgICAgICAvLyB0b2dnbGVkIGJ1dHRvbnNcbiAgW3snY29sb3InOiBbXX0sIHsnYmFja2dyb3VuZCc6IFtdfV0sICAgICAgICAgIC8vIGRyb3Bkb3duIHdpdGggZGVmYXVsdHMgZnJvbSB0aGVtZVxuICBbeydoZWFkZXInOiAxfSwgeydoZWFkZXInOiAyfV0sXG4gIFt7J2xpc3QnOiAnb3JkZXJlZCd9LCB7J2xpc3QnOiAnYnVsbGV0J30sIHsnaW5kZW50JzogJy0xJ30sIHsnaW5kZW50JzogJysxJ31dLFxuICBbJ2xpbmsnXSxcbiAgWydjbGVhbiddICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZm9ybWF0dGluZyBidXR0b25cbl1cblxuaWYgKG9wdGlvbnMudG9vbGJhciAhPT0gdW5kZWZpbmVkKSB7XG4gIHZhciB0b29sYmFyID0gb3B0aW9ucy50b29sYmFyLnRvTG93ZXJDYXNlKClcbiAgaWYgKHRvb2xiYXIgPT0gJ2Z1bGwnKSB7XG4gICAgb3B0aW9ucy5tb2R1bGVzID0ge1xuICAgICAgLy9zeW50YXg6ICd0cnVlJyxcbiAgICAgIHRvb2xiYXI6IHRvb2xiYXJGdWxsT3B0aW9uc1xuICAgIH1cbiAgfVxufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIGluaXRRdWlsbCgpXG59KVxuXG4kKGRvY3VtZW50KS5hamF4Q29tcGxldGUoZnVuY3Rpb24gKCkge1xuICBpbml0UXVpbGwoKVxufSlcblxuZnVuY3Rpb24gaW5pdFF1aWxsICgpIHtcbiAgbGV0IG9iaiA9ICQoJ1tkYXRhLXByb3ZpZGU9XCJxdWlsbFwiXScpXG4gIGlmIChvYmoubGVuZ3RoID09PSAxKSB7XG4gICAgbmV3IFF1aWxsKCQoJ1tkYXRhLXByb3ZpZGU9XCJxdWlsbFwiXScpWzBdLCBvcHRpb25zKVxuICB9XG59XG5cblxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==