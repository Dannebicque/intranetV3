(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["settings"],{

/***/ "./assets/js/fetch.js":
/*!****************************!*\
  !*** ./assets/js/fetch.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "post": () => (/* binding */ post),
/* harmony export */   "load": () => (/* binding */ load)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__);









// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/fetch.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/09/2021 09:01
var request = function request(url) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
  var options = {
    method: method
  };

  if ('GET' === method) {
    url += '?' + new URLSearchParams(params).toString();
  } else {
    options.body = JSON.stringify(params);
    options.headers = {
      'Content-Type': 'application/json;charset=utf-8'
    };
  }

  return fetch(url, options).then(function (response) {
    return response.json();
  });
};

var get = function get(url, params) {
  return request(url, params, 'GET');
};
var post = function post(url, params) {
  return request(url, params, 'POST');
};
var load = function load(url, params, objet) {
  //loader?window.umbrella.Spinner.show()
  objet.innerHTML = '';
  fetch(Routing.generate(url, params)).then(function (response) {
    return response.text();
  }).then(function (body) {
    objet.innerHTML = body; //loader?window.umbrella.Spinner.hide()
  });
};

/***/ }),

/***/ "./assets/js/pages/settings.js":
/*!*************************************!*\
  !*** ./assets/js/pages/settings.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fetch */ "./assets/js/fetch.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");




// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/settings.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/03/2021 21:05


$(document).on('change', '.departementParDefaut', function (e) {
  $.ajax({
    url: Routing.generate('user_change_departement_defaut', {
      departement: $(this).val()
    }),
    method: 'POST',
    success: function success(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_4__.addCallout)('Mofification enregistrée !', 'success');
    },
    error: function error(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_4__.addCallout)('Erreur lors de la sauvegarde de la modification !', 'danger');
    }
  });
});
document.querySelectorAll('.changeConfigurationPersonne').forEach(function (elem) {
  elem.addEventListener('change', function (e) {
    e.preventDefault();
    (0,_fetch__WEBPACK_IMPORTED_MODULE_5__.post)(Routing.generate('settings_configuration_personnel'), {
      'field': elem.name,
      'value': elem.checked
    }).then(function () {
      (0,_util__WEBPACK_IMPORTED_MODULE_4__.addCallout)('Mofification enregistrée !', 'success');
    })["catch"](function () {
      (0,_util__WEBPACK_IMPORTED_MODULE_4__.addCallout)('Erreur lors de la sauvegarde de la modification !', 'danger');
    });
  });
});
$(document).on('click', '#valideNewpassword', function (e) {
  e.preventDefault();
  var passwd1 = $('#password_1').val().trim();
  var passwd2 = $('#password_2').val().trim();
  var passwdactuel = $('#password_actuel').val().trim();

  if (passwd2 !== '' && passwd1 !== '' && passwdactuel !== '') {
    if (passwd1 !== passwd2) {
      (0,_util__WEBPACK_IMPORTED_MODULE_4__.addCallout)('Les deux nouveaux mot de passe ne sont pas identique!', 'danger');
    } else {
      $.ajax({
        url: Routing.generate('user_change_password'),
        data: {
          passwd1: passwd1,
          passwd2: passwd2,
          passwdactuel: passwdactuel
        },
        method: 'POST',
        success: function success(e) {
          (0,_util__WEBPACK_IMPORTED_MODULE_4__.addCallout)('Mofification de votre mot de passe effectuée !', 'success');
        },
        error: function error(e) {
          (0,_util__WEBPACK_IMPORTED_MODULE_4__.addCallout)('Erreur lors de la modification du mot de passe !', 'danger');
        }
      });
    }
  } else {
    (0,_util__WEBPACK_IMPORTED_MODULE_4__.addCallout)('Tous les champs sont obligatoires pour la modification du mot de passe!', 'danger');
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-a68b23","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-81f81c","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_modules_es_symbol_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_dat-47334b","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_web_-f61df9","vendors-node_modules_core-js_modules_es_promise_js-node_modules_core-js_modules_es_regexp_to--8ede4c","assets_js_util_js"], () => (__webpack_exec__("./assets/js/pages/settings.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL2ZldGNoLmpzIiwid2VicGFjazovL2ludHJhbmV0djMvLi9hc3NldHMvanMvcGFnZXMvc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vaW50cmFuZXR2My8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24ubmFtZS5qcyJdLCJuYW1lcyI6WyJyZXF1ZXN0IiwidXJsIiwicGFyYW1zIiwibWV0aG9kIiwib3B0aW9ucyIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZ2V0IiwicG9zdCIsImxvYWQiLCJvYmpldCIsImlubmVySFRNTCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInRleHQiLCIkIiwiZG9jdW1lbnQiLCJvbiIsImUiLCJhamF4IiwiZGVwYXJ0ZW1lbnQiLCJ2YWwiLCJzdWNjZXNzIiwiYWRkQ2FsbG91dCIsImVycm9yIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsImNoZWNrZWQiLCJwYXNzd2QxIiwidHJpbSIsInBhc3N3ZDIiLCJwYXNzd2RhY3R1ZWwiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQsRUFBc0M7QUFBQSxNQUFoQ0MsTUFBZ0MsdUVBQXZCLEVBQXVCO0FBQUEsTUFBbkJDLE1BQW1CLHVFQUFWLEtBQVU7QUFDcEQsTUFBSUMsT0FBTyxHQUFHO0FBQ1pELFVBQU0sRUFBTkE7QUFEWSxHQUFkOztBQUdBLE1BQUksVUFBVUEsTUFBZCxFQUFzQjtB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QUFELEVBQXFELFFBQXJELENBQVY7QUFDRDtBQWJJLE9BQVA7QUFlRDtBQUNGLEdBcEJELE1Bb0JPO0FBQ0xBLHFEQUFVLENBQUMseUVBQUQsRUFBNEUsUUFBNUUsQ0FBVjtBQUNEO0FBQ0YsQ0E3QkQsRTs7Ozs7Ozs7OztBQ2hDQSxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDcEQscUJBQXFCLDhIQUFnRDs7QUFFckU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvZmV0Y2guanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxMi8wOS8yMDIxIDA5OjAxXG5cbmNvbnN0IHJlcXVlc3QgPSAodXJsLCBwYXJhbXMgPSB7fSwgbWV0aG9kID0gJ0dFVCcpID0+IHtcbiAgbGV0IG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kXG4gIH1cbiAgaWYgKCdHRVQnID09PSBtZXRob2QpIHtcbiAgICB1cmwgKz0gJz8nICsgKG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkudG9TdHJpbmcoKVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICBvcHRpb25zLmhlYWRlcnMgPSB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCdcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmV0Y2godXJsLCBvcHRpb25zKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldCA9ICh1cmwsIHBhcmFtcykgPT4gcmVxdWVzdCh1cmwsIHBhcmFtcywgJ0dFVCcpXG5leHBvcnQgY29uc3QgcG9zdCA9ICh1cmwsIHBhcmFtcykgPT4gcmVxdWVzdCh1cmwsIHBhcmFtcywgJ1BPU1QnKVxuXG5leHBvcnQgY29uc3QgbG9hZCA9ICh1cmwsIHBhcmFtcywgb2JqZXQpID0+IHtcbiAgLy9sb2FkZXI/d2luZG93LnVtYnJlbGxhLlNwaW5uZXIuc2hvdygpXG4gIG9iamV0LmlubmVySFRNTCA9ICcnXG4gIGZldGNoKFJvdXRpbmcuZ2VuZXJhdGUodXJsLCBwYXJhbXMpKVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgIG9iamV0LmlubmVySFRNTCA9IGJvZHlcbiAgICAgIC8vbG9hZGVyP3dpbmRvdy51bWJyZWxsYS5TcGlubmVyLmhpZGUoKVxuICAgIH0pXG59XG5cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMS4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9zZXR0aW5ncy5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDA3LzAzLzIwMjEgMjE6MDVcbmltcG9ydCB7YWRkQ2FsbG91dCwgZ2V0UGFyZW50QnlUYWdOYW1lfSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtwb3N0fSBmcm9tICcuLi9mZXRjaCdcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuZGVwYXJ0ZW1lbnRQYXJEZWZhdXQnLCBmdW5jdGlvbiAoZSkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndXNlcl9jaGFuZ2VfZGVwYXJ0ZW1lbnRfZGVmYXV0Jywge2RlcGFydGVtZW50OiAkKHRoaXMpLnZhbCgpfSksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGFkZENhbGxvdXQoJ01vZmlmaWNhdGlvbiBlbnJlZ2lzdHLDqWUgIScsICdzdWNjZXNzJylcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoZSkge1xuICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbGEgc2F1dmVnYXJkZSBkZSBsYSBtb2RpZmljYXRpb24gIScsICdkYW5nZXInKVxuICAgIH1cbiAgfSlcbn0pXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFuZ2VDb25maWd1cmF0aW9uUGVyc29ubmUnKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBwb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ3NldHRpbmdzX2NvbmZpZ3VyYXRpb25fcGVyc29ubmVsJyksIHsnZmllbGQnIDogZWxlbS5uYW1lLCAndmFsdWUnOiBlbGVtLmNoZWNrZWR9KS50aGVuKCgpID0+IHtcbiAgICAgIGFkZENhbGxvdXQoJ01vZmlmaWNhdGlvbiBlbnJlZ2lzdHLDqWUgIScsICdzdWNjZXNzJylcbiAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSBzYXV2ZWdhcmRlIGRlIGxhIG1vZGlmaWNhdGlvbiAhJywgJ2RhbmdlcicpXG4gICAgfSlcbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjdmFsaWRlTmV3cGFzc3dvcmQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc3QgcGFzc3dkMSA9ICQoJyNwYXNzd29yZF8xJykudmFsKCkudHJpbSgpXG4gIGNvbnN0IHBhc3N3ZDIgPSAkKCcjcGFzc3dvcmRfMicpLnZhbCgpLnRyaW0oKVxuICBjb25zdCBwYXNzd2RhY3R1ZWwgPSAkKCcjcGFzc3dvcmRfYWN0dWVsJykudmFsKCkudHJpbSgpXG5cbiAgaWYgKHBhc3N3ZDIgIT09ICcnICYmIHBhc3N3ZDEgIT09ICcnICYmIHBhc3N3ZGFjdHVlbCAhPT0gJycpIHtcbiAgICBpZiAocGFzc3dkMSAhPT0gcGFzc3dkMikge1xuICAgICAgYWRkQ2FsbG91dCgnTGVzIGRldXggbm91dmVhdXggbW90IGRlIHBhc3NlIG5lIHNvbnQgcGFzIGlkZW50aXF1ZSEnLCAnZGFuZ2VyJylcbiAgICB9IGVsc2Uge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd1c2VyX2NoYW5nZV9wYXNzd29yZCcpLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgcGFzc3dkMTogcGFzc3dkMSxcbiAgICAgICAgICBwYXNzd2QyOiBwYXNzd2QyLFxuICAgICAgICAgIHBhc3N3ZGFjdHVlbDogcGFzc3dkYWN0dWVsXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGFkZENhbGxvdXQoJ01vZmlmaWNhdGlvbiBkZSB2b3RyZSBtb3QgZGUgcGFzc2UgZWZmZWN0dcOpZSAhJywgJ3N1Y2Nlc3MnKVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSBtb2RpZmljYXRpb24gZHUgbW90IGRlIHBhc3NlICEnLCAnZGFuZ2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYWRkQ2FsbG91dCgnVG91cyBsZXMgY2hhbXBzIHNvbnQgb2JsaWdhdG9pcmVzIHBvdXIgbGEgbW9kaWZpY2F0aW9uIGR1IG1vdCBkZSBwYXNzZSEnLCAnZGFuZ2VyJylcbiAgfVxufSlcblxuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nID0gRnVuY3Rpb25Qcm90b3R5cGUudG9TdHJpbmc7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIEZ1bmN0aW9uIGluc3RhbmNlcyBgLm5hbWVgIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXG5pZiAoREVTQ1JJUFRPUlMgJiYgIShOQU1FIGluIEZ1bmN0aW9uUHJvdG90eXBlKSkge1xuICBkZWZpbmVQcm9wZXJ0eShGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nLmNhbGwodGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==