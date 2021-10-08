(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["planning"],{

/***/ "./assets/js/pages/planning.js":
/*!*************************************!*\
  !*** ./assets/js/pages/planning.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/planning.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/07/2020 16:44
$(document).on('click', '.filtreTypeDate', function (e) {
  var btn = $(this);
  var type = btn.data('type');

  if (btn.hasClass('btn-outline')) {
    afficheType(type);
    btn.removeClass('btn-outline');
  } else {
    btn.addClass('btn-outline');
    removeType(type);
  }
});
$(document).on('click', '.filtreUtilisateurDate', function (e) {
  var btn = $(this);
  var type = btn.data('type');

  if (btn.hasClass('btn-outline')) {
    afficheUtilisateur(type);
    btn.removeClass('btn-outline');
  } else {
    btn.addClass('btn-outline');
    removeUtilisateur(type);
  }
}); //todo: croiser les filtres.

function removeType(type) {
  $('.event').each(function (e) {
    if ($(this).data('type-event') === type) {
      $(this).hide();
    }
  });
}

function afficheType(type) {
  $('.event').each(function (e) {
    if ($(this).data('type-event') === type) {
      $(this).show();
    }
  });
}

function removeUtilisateur(type) {
  if (type === 'E') {
    $('.event').each(function (e) {
      if ($(this).data('qui-event') === type) {
        $(this).hide();
      }
    });
  } else {
    $('.event').each(function (e) {
      if ($(this).hasClass(type)) {
        $(this).hide();
      }
    });
  }
}

function afficheUtilisateur(type) {
  if (type === 'E') {
    $('.event').each(function (e) {
      if ($(this).data('qui-event') === type) {
        $(this).show();
      }
    });
  } else {
    $('.event').each(function (e) {
      if ($(this).hasClass(type)) {
        $(this).show();
      }
    });
  }
}

$(document).on('change', '#semaine', function (e) {
  e.preventDefault(); //{{ edt.filtre }}_{{ edt.valeur }}_{{ sem.semaineReelle}}

  var tab = $(this).val().split('_');
  location.href = Routing.generate('agenda_index', {
    semaine: tab[2],
    valeur: tab[1],
    filtre: tab[0]
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_modules_es_string_split_js"], () => (__webpack_exec__("./assets/js/pages/planning.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL3BsYW5uaW5nLmpzIiwid2VicGFjazovL2ludHJhbmV0djMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vaW50cmFuZXR2My8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsIm9uIiwiZSIsImJ0biIsInR5cGUiLCJkYXRhIiwiaGFzQ2xhc3MiLCJhZmZpY2hlVHlwZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVUeXBlIiwiYWZmaWNoZVV0aWxpc2F0ZXVyIiwicmVtb3ZlVXRpbGlzYXRldXIiLCJlYWNoIiwiaGlkZSIsInNob3ciLCJwcmV2ZW50RGVmYXVsdCIsInRhYiIsInZhbCIsInNwbGl0IiwibG9jYXRpb24iLCJocmVmIiwiUm91dGluZyIsImdlbmVyYXRlIiwic2VtYWluZSIsInZhbGV1ciIsImZpbHRyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsaUJBQXhCLEVBQTJDLFVBQVVDLENBQVYsRUFBYTtBQUN0RCxNQUFNQyxHQUFHLEdBQUdKLENBQUMsQ0FBQyxJQUFELENBQWI7QUFDQSxNQUFNSyxJQUFJLEdBQUdELEdBQUcsQ0FBQ0UsSUFBSixDQUFTLE1BQVQsQ0FBYjs7QUFDQSxNQUFJRixH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QXdCLG1CQUFPLENBQUMsNkZBQWdDOztBQUVoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoicGxhbm5pbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvcGxhbm5pbmcuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAwNy8wNy8yMDIwIDE2OjQ0XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZmlsdHJlVHlwZURhdGUnLCBmdW5jdGlvbiAoZSkge1xuICBjb25zdCBidG4gPSAkKHRoaXMpXG4gIGNvbnN0IHR5cGUgPSBidG4uZGF0YSgndHlwZScpXG4gIGlmIChidG4uaGFzQ2xhc3MoJ2J0bi1vdXRsaW5lJykpIHtcbiAgICBhZmZpY2hlVHlwZSh0eXBlKVxuICAgIGJ0bi5yZW1vdmVDbGFzcygnYnRuLW91dGxpbmUnKVxuICB9IGVsc2Uge1xuICAgIGJ0bi5hZGRDbGFzcygnYnRuLW91dGxpbmUnKVxuICAgIHJlbW92ZVR5cGUodHlwZSlcblxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmZpbHRyZVV0aWxpc2F0ZXVyRGF0ZScsIGZ1bmN0aW9uIChlKSB7XG4gIGNvbnN0IGJ0biA9ICQodGhpcylcbiAgY29uc3QgdHlwZSA9IGJ0bi5kYXRhKCd0eXBlJylcbiAgaWYgKGJ0bi5oYXNDbGFzcygnYnRuLW91dGxpbmUnKSkge1xuICAgIGFmZmljaGVVdGlsaXNhdGV1cih0eXBlKVxuICAgIGJ0bi5yZW1vdmVDbGFzcygnYnRuLW91dGxpbmUnKVxuICB9IGVsc2Uge1xuICAgIGJ0bi5hZGRDbGFzcygnYnRuLW91dGxpbmUnKVxuICAgIHJlbW92ZVV0aWxpc2F0ZXVyKHR5cGUpXG5cbiAgfVxufSlcblxuLy90b2RvOiBjcm9pc2VyIGxlcyBmaWx0cmVzLlxuZnVuY3Rpb24gcmVtb3ZlVHlwZSAodHlwZSkge1xuICAkKCcuZXZlbnQnKS5lYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKCQodGhpcykuZGF0YSgndHlwZS1ldmVudCcpID09PSB0eXBlKSB7XG4gICAgICAkKHRoaXMpLmhpZGUoKVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gYWZmaWNoZVR5cGUgKHR5cGUpIHtcbiAgJCgnLmV2ZW50JykuZWFjaChmdW5jdGlvbiAoZSkge1xuICAgIGlmICgkKHRoaXMpLmRhdGEoJ3R5cGUtZXZlbnQnKSA9PT0gdHlwZSkge1xuICAgICAgJCh0aGlzKS5zaG93KClcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlbW92ZVV0aWxpc2F0ZXVyICh0eXBlKSB7XG4gIGlmICh0eXBlID09PSAnRScpIHtcbiAgICAkKCcuZXZlbnQnKS5lYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoJCh0aGlzKS5kYXRhKCdxdWktZXZlbnQnKSA9PT0gdHlwZSkge1xuICAgICAgICAkKHRoaXMpLmhpZGUoKVxuICAgICAgfVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgJCgnLmV2ZW50JykuZWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3ModHlwZSkpIHtcbiAgICAgICAgJCh0aGlzKS5oaWRlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFmZmljaGVVdGlsaXNhdGV1ciAodHlwZSkge1xuICBpZiAodHlwZSA9PT0gJ0UnKSB7XG4gICAgJCgnLmV2ZW50JykuZWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKCQodGhpcykuZGF0YSgncXVpLWV2ZW50JykgPT09IHR5cGUpIHtcbiAgICAgICAgJCh0aGlzKS5zaG93KClcbiAgICAgIH1cbiAgICB9KVxuICB9IGVsc2Uge1xuICAgICQoJy5ldmVudCcpLmVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKHR5cGUpKSB7XG4gICAgICAgICQodGhpcykuc2hvdygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNzZW1haW5lJywgZnVuY3Rpb24oZSl7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAvL3t7IGVkdC5maWx0cmUgfX1fe3sgZWR0LnZhbGV1ciB9fV97eyBzZW0uc2VtYWluZVJlZWxsZX19XG4gIGxldCB0YWIgPSAkKHRoaXMpLnZhbCgpLnNwbGl0KCdfJylcbiAgbG9jYXRpb24uaHJlZiA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2FnZW5kYV9pbmRleCcsIHtzZW1haW5lOiB0YWJbMl0gLHZhbGV1cjogdGFiWzFdLCAgZmlsdHJlOiB0YWJbMF19KTtcbn0pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICByZXR1cm4gIVN0cmluZyhTeW1ib2woKSk7XG59KTtcbiIsInZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAmJiAhU3ltYm9sLnNoYW1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkpIHtcbiAgICBpZiAoTkFUSVZFX1NZTUJPTCAmJiBoYXMoU3ltYm9sLCBuYW1lKSkgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gU3ltYm9sW25hbWVdO1xuICAgIGVsc2UgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==