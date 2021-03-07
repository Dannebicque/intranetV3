(self["webpackChunk"] = self["webpackChunk"] || []).push([["quill"],{

/***/ "./assets/js/quill.js":
/*!****************************!*\
  !*** ./assets/js/quill.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_quill_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/quill.css */ "./assets/css/quill.css");
/* harmony import */ var quill_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill/core */ "./node_modules/quill/core.js");
/* harmony import */ var quill_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill/ui/icons */ "./node_modules/quill/ui/icons.js");
/* harmony import */ var quill_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(quill_ui_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var quill_modules_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill/modules/toolbar */ "./node_modules/quill/modules/toolbar.js");
/* harmony import */ var quill_themes_snow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! quill/themes/snow */ "./node_modules/quill/themes/snow.js");
/* harmony import */ var quill_formats_bold__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! quill/formats/bold */ "./node_modules/quill/formats/bold.js");
/* harmony import */ var quill_formats_italic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! quill/formats/italic */ "./node_modules/quill/formats/italic.js");
/* harmony import */ var quill_formats_underline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! quill/formats/underline */ "./node_modules/quill/formats/underline.js");
/* harmony import */ var quill_formats_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! quill/formats/header */ "./node_modules/quill/formats/header.js");
/* harmony import */ var quill_formats_align__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! quill/formats/align */ "./node_modules/quill/formats/align.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var quill_formats_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! quill/formats/list */ "./node_modules/quill/formats/list.js");
/* harmony import */ var quill_formats_size__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! quill/formats/size */ "./node_modules/quill/formats/size.js");
/* harmony import */ var quill_formats_color__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! quill/formats/color */ "./node_modules/quill/formats/color.js");
/* harmony import */ var quill_formats_background__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! quill/formats/background */ "./node_modules/quill/formats/background.js");
/* harmony import */ var quill_formats_blockquote__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! quill/formats/blockquote */ "./node_modules/quill/formats/blockquote.js");
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/quill.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/02/2021 18:22
















quill_core__WEBPACK_IMPORTED_MODULE_1__.default.register({
  'modules/toolbar': quill_modules_toolbar__WEBPACK_IMPORTED_MODULE_3__.default,
  'themes/snow': quill_themes_snow__WEBPACK_IMPORTED_MODULE_4__.default,
  'formats/bold': quill_formats_bold__WEBPACK_IMPORTED_MODULE_5__.default,
  'formats/italic': quill_formats_italic__WEBPACK_IMPORTED_MODULE_6__.default,
  'formats/size': quill_formats_size__WEBPACK_IMPORTED_MODULE_12__.SizeStyle,
  'formats/color': quill_formats_color__WEBPACK_IMPORTED_MODULE_13__.ColorStyle,
  'formats/background': quill_formats_background__WEBPACK_IMPORTED_MODULE_14__.BackgroundStyle,
  'formats/underline': quill_formats_underline__WEBPACK_IMPORTED_MODULE_7__.default,
  'formats/header': quill_formats_header__WEBPACK_IMPORTED_MODULE_8__.default,
  'formats/list': quill_formats_list__WEBPACK_IMPORTED_MODULE_11__.default,
  'formats/list-item': quill_formats_list__WEBPACK_IMPORTED_MODULE_11__.ListItem,
  'formats/align': quill_formats_align__WEBPACK_IMPORTED_MODULE_9__.AlignStyle,
  'ui/icons': (quill_ui_icons__WEBPACK_IMPORTED_MODULE_2___default())
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (quill_core__WEBPACK_IMPORTED_MODULE_1__.default);
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

jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).ready(function () {
  initQuill();
});
jquery__WEBPACK_IMPORTED_MODULE_10___default()(document).ajaxComplete(function () {
  initQuill();
});

function initQuill() {
  var obj = jquery__WEBPACK_IMPORTED_MODULE_10___default()('[data-provide="quill"]');

  if (obj.length === 1) {
    new quill_core__WEBPACK_IMPORTED_MODULE_1__.default(jquery__WEBPACK_IMPORTED_MODULE_10___default()('[data-provide="quill"]')[0], options);
  }
}

/***/ }),

/***/ "./assets/css/quill.css":
/*!******************************!*\
  !*** ./assets/css/quill.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
0,[["./assets/js/quill.js","runtime","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_quill_core_js-node_modules_quill_formats_blockquote_js-node_modules_quil-d001d1"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcXVpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9xdWlsbC5jc3M/MTdjZiJdLCJuYW1lcyI6WyJRdWlsbCIsIlRvb2xiYXIiLCJTbm93IiwiQm9sZCIsIkl0YWxpYyIsIlNpemVTdHlsZSIsIkNvbG9yU3R5bGUiLCJCYWNrZ3JvdW5kU3R5bGUiLCJVbmRlcmxpbmUiLCJIZWFkZXIiLCJMaXN0IiwiTGlzdEl0ZW0iLCJBbGlnblN0eWxlIiwiSWNvbnMiLCJvcHRpb25zIiwidGhlbWUiLCJ0b29sYmFyIiwidG9vbGJhckZ1bGxPcHRpb25zIiwidW5kZWZpbmVkIiwidG9Mb3dlckNhc2UiLCJtb2R1bGVzIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJpbml0UXVpbGwiLCJhamF4Q29tcGxldGUiLCJvYmoiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsd0RBQUEsQ0FBZTtBQUNiLHFCQUFtQkMsMERBRE47QUFFYixpQkFBZUMsc0RBRkY7QUFHYixrQkFBZ0JDLHVEQUhIO0FBSWIsb0JBQWtCQyx5REFKTDtBQUtiLGtCQUFnQkMsMERBTEg7QUFNYixtQkFBaUJDLDREQU5KO0FBT2Isd0JBQXNCQyxzRUFQVDtBQVFiLHVCQUFxQkMsNERBUlI7QUFTYixvQkFBa0JDLHlEQVRMO0FBVWIsa0JBQWdCQyx3REFWSDtBQVdiLHVCQUFxQkMseURBWFI7QUFZYixtQkFBaUJDLDJEQVpKO0FBYWIsY0FBWUMsdURBQUtBO0FBYkosQ0FBZjtBQWlCQSxpRUFBZWIsK0NBQWY7QUFFQSxJQUFJYyxPQUFPLEdBQUc7QUFDWkMsT0FBSyxFQUFFLE1BREs7QUFFWkMsU0FBTyxFQUFFO0FBRkcsQ0FBZDtBQUtBLElBQUlDLGtCQUFrQixHQUFHLENBQ3ZCLENBQ0U7QUFBQyxZQUFVLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsS0FBbkI7QUFBWCxDQURGLEVBRUU7QUFBQyxVQUFRLENBQUMsT0FBRCxFQUFVLEtBQVYsRUFBaUIsT0FBakIsRUFBMEIsTUFBMUI7QUFBVCxDQUZGLENBRHVCLEVBS3ZCLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsV0FBbkIsQ0FMdUIsRUFLaUI7QUFDeEMsQ0FBQztBQUFDLFdBQVM7QUFBVixDQUFELEVBQWdCO0FBQUMsZ0JBQWM7QUFBZixDQUFoQixDQU51QixFQU11QjtBQUM5QyxDQUFDO0FBQUMsWUFBVTtBQUFYLENBQUQsRUFBZ0I7QUFBQyxZQUFVO0FBQVgsQ0FBaEIsQ0FQdUIsRUFRdkIsQ0FBQztBQUFDLFVBQVE7QUFBVCxDQUFELEVBQXNCO0FBQUMsVUFBUTtBQUFULENBQXRCLEVBQTBDO0FBQUMsWUFBVTtBQUFYLENBQTFDLEVBQTREO0FBQUMsWUFBVTtBQUFYLENBQTVELENBUnVCLEVBU3ZCLENBQUMsTUFBRCxDQVR1QixFQVV2QixDQUFDLE9BQUQsQ0FWdUIsQ0FVMkI7QUFWM0IsQ0FBekI7O0FBYUEsSUFBSUgsT0FBTyxDQUFDRSxPQUFSLEtBQW9CRSxTQUF4QixFQUFtQztBQUNqQyxNQUFJRixPQUFPLEdBQUdGLE9BQU8sQ0FBQ0UsT0FBUixDQUFnQkcsV0FBaEIsRUFBZDs7QUFDQSxNQUFJSCxPQUFPLElBQUksTUFBZixFQUF1QjtBQUNyQkYsV0FBTyxDQUFDTSxPQUFSLEdBQWtCO0FBQ2hCO0FBQ0FKLGFBQU8sRUFBRUM7QUFGTyxLQUFsQjtBQUlEO0FBQ0Y7O0FBRURJLDhDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDNUJDLFdBQVM7QUFDVixDQUZEO0FBSUFILDhDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZRyxZQUFaLENBQXlCLFlBQVk7QUFDbkNELFdBQVM7QUFDVixDQUZEOztBQUlBLFNBQVNBLFNBQVQsR0FBc0I7QUFDcEIsTUFBSUUsR0FBRyxHQUFHTCw4Q0FBQyxDQUFDLHdCQUFELENBQVg7O0FBQ0EsTUFBSUssR0FBRyxDQUFDQyxNQUFKLEtBQWUsQ0FBbkIsRUFBc0I7QUFDcEIsUUFBSTNCLCtDQUFKLENBQVVxQiw4Q0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEIsQ0FBNUIsQ0FBVixFQUEwQ1AsT0FBMUM7QUFDRDtBQUNGLEM7Ozs7Ozs7Ozs7OztBQ3RGRCIsImZpbGUiOiJxdWlsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMS4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9xdWlsbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDE5LzAyLzIwMjEgMTg6MjJcblxuaW1wb3J0ICcuLi9jc3MvcXVpbGwuY3NzJ1xuXG5pbXBvcnQgUXVpbGwgZnJvbSAncXVpbGwvY29yZSdcblxuaW1wb3J0IEljb25zIGZyb20gJ3F1aWxsL3VpL2ljb25zJ1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAncXVpbGwvbW9kdWxlcy90b29sYmFyJ1xuaW1wb3J0IFNub3cgZnJvbSAncXVpbGwvdGhlbWVzL3Nub3cnXG5cbmltcG9ydCBCb2xkIGZyb20gJ3F1aWxsL2Zvcm1hdHMvYm9sZCdcbmltcG9ydCBJdGFsaWMgZnJvbSAncXVpbGwvZm9ybWF0cy9pdGFsaWMnXG5pbXBvcnQgVW5kZXJsaW5lIGZyb20gJ3F1aWxsL2Zvcm1hdHMvdW5kZXJsaW5lJ1xuaW1wb3J0IEhlYWRlciBmcm9tICdxdWlsbC9mb3JtYXRzL2hlYWRlcidcbmltcG9ydCB7QWxpZ25TdHlsZX0gZnJvbSAncXVpbGwvZm9ybWF0cy9hbGlnbidcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBMaXN0LCB7TGlzdEl0ZW19IGZyb20gJ3F1aWxsL2Zvcm1hdHMvbGlzdCdcbmltcG9ydCB7U2l6ZVN0eWxlfSBmcm9tICdxdWlsbC9mb3JtYXRzL3NpemUnXG5pbXBvcnQge0NvbG9yU3R5bGV9IGZyb20gJ3F1aWxsL2Zvcm1hdHMvY29sb3InXG5pbXBvcnQge0JhY2tncm91bmRTdHlsZX0gZnJvbSAncXVpbGwvZm9ybWF0cy9iYWNrZ3JvdW5kJ1xuaW1wb3J0IEJsb2NrcXVvdGUgZnJvbSAncXVpbGwvZm9ybWF0cy9ibG9ja3F1b3RlJ1xuXG5RdWlsbC5yZWdpc3Rlcih7XG4gICdtb2R1bGVzL3Rvb2xiYXInOiBUb29sYmFyLFxuICAndGhlbWVzL3Nub3cnOiBTbm93LFxuICAnZm9ybWF0cy9ib2xkJzogQm9sZCxcbiAgJ2Zvcm1hdHMvaXRhbGljJzogSXRhbGljLFxuICAnZm9ybWF0cy9zaXplJzogU2l6ZVN0eWxlLFxuICAnZm9ybWF0cy9jb2xvcic6IENvbG9yU3R5bGUsXG4gICdmb3JtYXRzL2JhY2tncm91bmQnOiBCYWNrZ3JvdW5kU3R5bGUsXG4gICdmb3JtYXRzL3VuZGVybGluZSc6IFVuZGVybGluZSxcbiAgJ2Zvcm1hdHMvaGVhZGVyJzogSGVhZGVyLFxuICAnZm9ybWF0cy9saXN0JzogTGlzdCxcbiAgJ2Zvcm1hdHMvbGlzdC1pdGVtJzogTGlzdEl0ZW0sXG4gICdmb3JtYXRzL2FsaWduJzogQWxpZ25TdHlsZSxcbiAgJ3VpL2ljb25zJzogSWNvbnNcbn0pXG5cblxuZXhwb3J0IGRlZmF1bHQgUXVpbGxcblxubGV0IG9wdGlvbnMgPSB7XG4gIHRoZW1lOiAnc25vdycsXG4gIHRvb2xiYXI6ICdmdWxsJ1xufVxuXG5sZXQgdG9vbGJhckZ1bGxPcHRpb25zID0gW1xuICBbXG4gICAgeydoZWFkZXInOiBbMSwgMiwgMywgNCwgNSwgNiwgZmFsc2VdfSxcbiAgICB7J3NpemUnOiBbJ3NtYWxsJywgZmFsc2UsICdsYXJnZScsICdodWdlJ119XG4gIF0sXG4gIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJ10sICAgICAgICAvLyB0b2dnbGVkIGJ1dHRvbnNcbiAgW3snY29sb3InOiBbXX0sIHsnYmFja2dyb3VuZCc6IFtdfV0sICAgICAgICAgIC8vIGRyb3Bkb3duIHdpdGggZGVmYXVsdHMgZnJvbSB0aGVtZVxuICBbeydoZWFkZXInOiAxfSwgeydoZWFkZXInOiAyfV0sXG4gIFt7J2xpc3QnOiAnb3JkZXJlZCd9LCB7J2xpc3QnOiAnYnVsbGV0J30sIHsnaW5kZW50JzogJy0xJ30sIHsnaW5kZW50JzogJysxJ31dLFxuICBbJ2xpbmsnXSxcbiAgWydjbGVhbiddICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZm9ybWF0dGluZyBidXR0b25cbl1cblxuaWYgKG9wdGlvbnMudG9vbGJhciAhPT0gdW5kZWZpbmVkKSB7XG4gIHZhciB0b29sYmFyID0gb3B0aW9ucy50b29sYmFyLnRvTG93ZXJDYXNlKClcbiAgaWYgKHRvb2xiYXIgPT0gJ2Z1bGwnKSB7XG4gICAgb3B0aW9ucy5tb2R1bGVzID0ge1xuICAgICAgLy9zeW50YXg6ICd0cnVlJyxcbiAgICAgIHRvb2xiYXI6IHRvb2xiYXJGdWxsT3B0aW9uc1xuICAgIH1cbiAgfVxufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIGluaXRRdWlsbCgpXG59KVxuXG4kKGRvY3VtZW50KS5hamF4Q29tcGxldGUoZnVuY3Rpb24gKCkge1xuICBpbml0UXVpbGwoKVxufSlcblxuZnVuY3Rpb24gaW5pdFF1aWxsICgpIHtcbiAgbGV0IG9iaiA9ICQoJ1tkYXRhLXByb3ZpZGU9XCJxdWlsbFwiXScpXG4gIGlmIChvYmoubGVuZ3RoID09PSAxKSB7XG4gICAgbmV3IFF1aWxsKCQoJ1tkYXRhLXByb3ZpZGU9XCJxdWlsbFwiXScpWzBdLCBvcHRpb25zKVxuICB9XG59XG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==