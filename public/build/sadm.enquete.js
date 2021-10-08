(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["sadm.enquete"],{

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

/***/ "./assets/js/pages/sadm.enquete.js":
/*!*****************************************!*\
  !*** ./assets/js/pages/sadm.enquete.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetch */ "./assets/js/fetch.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/sadm.enquete.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/09/2021 09:01


window.addEventListener('load', function () {
  document.querySelectorAll('.validConfiguration').forEach(function (elem) {
    elem.addEventListener('click', function (e) {
      e.preventDefault();
      var inputs = document.getElementsByName('config_' + e.target.dataset.section + '[]');
      var previs = [];
      inputs.forEach(function (input) {
        if (input.checked == true) {
          previs.push(input.value);
        }
      });
      $.ajax({
        url: Routing.generate('administratif_enquete_config_ajax_save', {
          section: e.target.dataset.section
        }),
        data: {
          previs: previs
        },
        method: 'POST',
        success: function success() {}
      });
    });
  });
  document.querySelectorAll('.deverouiller').forEach(function (elem) {
    elem.addEventListener('click', function (e) {
      e.preventDefault();
      var id = e.target.dataset.id;
      (0,_fetch__WEBPACK_IMPORTED_MODULE_2__.post)(Routing.generate('administratif_enquete_etudiant_deverouiller', {
        questionnaire: id
      })).then(function () {
        document.getElementById('termine_' + id).innerHTML = 'En cours';
        document.getElementById('valide_' + id).innerHTML = 'En cours';
        (0,_util__WEBPACK_IMPORTED_MODULE_3__.addCallout)('Questionnaire dévérouillé avec succès.', 'success');
      })["catch"](function () {
        (0,_util__WEBPACK_IMPORTED_MODULE_3__.addCallout)('Erreur lors de la modification du questionnaire.', 'error');
      });
    });
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-a68b23","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-81f81c","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_modules_es_symbol_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_dat-47334b","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_web_-f61df9","vendors-node_modules_core-js_modules_es_promise_js-node_modules_core-js_modules_es_regexp_to--8ede4c","assets_js_util_js"], () => (__webpack_exec__("./assets/js/pages/sadm.enquete.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL2ZldGNoLmpzIiwid2VicGFjazovL2ludHJhbmV0djMvLi9hc3NldHMvanMvcGFnZXMvc2FkbS5lbnF1ZXRlLmpzIl0sIm5hbWVzIjpbInJlcXVlc3QiLCJ1cmwiLCJwYXJhbXMiLCJtZXRob2QiLCJvcHRpb25zIiwiVVJMU2VhcmNoUGFyYW1zIiwidG9TdHJpbmciLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJnZXQiLCJwb3N0IiwibG9hZCIsIm9iamV0IiwiaW5uZXJIVE1MIiwiUm91dGluZyIsImdlbmVyYXRlIiwidGV4dCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0cyIsImdldEVsZW1lbnRzQnlOYW1lIiwidGFyZ2V0IiwiZGF0YXNldCIsInNlY3Rpb24iLCJwcmV2aXMiLCJpbnB1dCIsImNoZWNrZWQiLCJwdXNoIiwidmFsdWUiLCIkIiwiYWpheCIsImRhdGEiLCJzdWNjZXNzIiwiaWQiLCJxdWVzdGlvbm5haXJlIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRDYWxsb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQsRUFBc0M7QUFBQSxNQUFoQ0MsTUFBZ0MsdUVBQXZCLEVBQXVCO0FBQUEsTUFBbkJDLE1BQW1CLHVFQUFWLEtBQVU7QUFDcEQsTUFBSUMsT0FBTyxHQUFHO0FBQ1pELFVBQU0sRUFBTkE7QUFEWSxHQUFkOztBQUdBLE1BQUksVUFBVUEsTUFBZCxFQUFzQjtBQUNwQkYsT0FBRyxJQUFJ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LElBQUQsRUFBVTtBQUMzREEsUUFBSSxDQUFDSixnQkFBTCxDQUFzQixPQUF0QixFQUErQixVQUFDSyxDQUFELEVBQU87QUFDcENBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQU1lLEVBQUUsR0FBR2hCLENBQUMsQ0FBQ0ksTUFBRixDQUFTQyxPQUFULENBQWlCVyxFQUE1QjtBQUNBN0Isa0RBQUksQ0FBQ0ksT0FBTyxDQUFDQyxRQUFSLENBQWlCLDZDQUFqQixFQUFnRTtBQUFDeUIscUJBQWEsRUFBRUQ7QUFBaEIsT0FBaEUsQ0FBRCxDQUFKLENBQ0dqQyxJQURILENBQ1EsWUFBTTtBQUNWYSxnQkFBUSxDQUFDc0IsY0FBVCxDQUF3QixhQUFhRixFQUFyQyxFQUF5QzFCLFNBQXpDLEdBQXFELFVBQXJEO0FBQ0FNLGdCQUFRLENBQUNzQixjQUFULENBQXdCLFlBQVlGLEVBQXBDLEVBQXdDMUIsU0FBeEMsR0FBb0QsVUFBcEQ7QUFDQTZCLHlEQUFVLENBQUMsd0NBQUQsRUFBMkMsU0FBM0MsQ0FBVjtBQUNELE9BTEgsV0FLVyxZQUFNO0FBQ2ZBLHlEQUFVLENBQUMsa0RBQUQsRUFBcUQsT0FBckQsQ0FBVjtBQUNELE9BUEQ7QUFRRCxLQVhEO0FBWUQsR0FiRDtBQWNELENBeENELEUiLCJmaWxlIjoic2FkbS5lbnF1ZXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL2ZldGNoLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTIvMDkvMjAyMSAwOTowMVxuXG5jb25zdCByZXF1ZXN0ID0gKHVybCwgcGFyYW1zID0ge30sIG1ldGhvZCA9ICdHRVQnKSA9PiB7XG4gIGxldCBvcHRpb25zID0ge1xuICAgIG1ldGhvZFxuICB9XG4gIGlmICgnR0VUJyA9PT0gbWV0aG9kKSB7XG4gICAgdXJsICs9ICc/JyArIChuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpLnRvU3RyaW5nKClcbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgb3B0aW9ucy5oZWFkZXJzID0ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZldGNoKHVybCwgb3B0aW9ucykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG59XG5cbmV4cG9ydCBjb25zdCBnZXQgPSAodXJsLCBwYXJhbXMpID0+IHJlcXVlc3QodXJsLCBwYXJhbXMsICdHRVQnKVxuZXhwb3J0IGNvbnN0IHBvc3QgPSAodXJsLCBwYXJhbXMpID0+IHJlcXVlc3QodXJsLCBwYXJhbXMsICdQT1NUJylcblxuZXhwb3J0IGNvbnN0IGxvYWQgPSAodXJsLCBwYXJhbXMsIG9iamV0KSA9PiB7XG4gIC8vbG9hZGVyP3dpbmRvdy51bWJyZWxsYS5TcGlubmVyLnNob3coKVxuICBvYmpldC5pbm5lckhUTUwgPSAnJ1xuICBmZXRjaChSb3V0aW5nLmdlbmVyYXRlKHVybCwgcGFyYW1zKSlcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KClcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICBvYmpldC5pbm5lckhUTUwgPSBib2R5XG4gICAgICAvL2xvYWRlcj93aW5kb3cudW1icmVsbGEuU3Bpbm5lci5oaWRlKClcbiAgICB9KVxufVxuXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvc2FkbS5lbnF1ZXRlLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTIvMDkvMjAyMSAwOTowMVxuXG5pbXBvcnQge3Bvc3R9IGZyb20gJy4uL2ZldGNoJ1xuaW1wb3J0IHthZGRDYWxsb3V0fSBmcm9tICcuLi91dGlsJ1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmFsaWRDb25maWd1cmF0aW9uJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2NvbmZpZ18nICsgZS50YXJnZXQuZGF0YXNldC5zZWN0aW9uICsgJ1tdJylcbiAgICAgIGxldCBwcmV2aXMgPSBbXVxuICAgICAgaW5wdXRzLmZvckVhY2goZnVuY3Rpb24gKGlucHV0KSB7XG5cbiAgICAgICAgaWYgKGlucHV0LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgIHByZXZpcy5wdXNoKGlucHV0LnZhbHVlKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aWZfZW5xdWV0ZV9jb25maWdfYWpheF9zYXZlJywge3NlY3Rpb246IGUudGFyZ2V0LmRhdGFzZXQuc2VjdGlvbn0pLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgcHJldmlzOiBwcmV2aXNcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXZlcm91aWxsZXInKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQuZGF0YXNldC5pZFxuICAgICAgcG9zdChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlmX2VucXVldGVfZXR1ZGlhbnRfZGV2ZXJvdWlsbGVyJywge3F1ZXN0aW9ubmFpcmU6IGlkfSkpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVybWluZV8nICsgaWQpLmlubmVySFRNTCA9ICdFbiBjb3VycydcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmFsaWRlXycgKyBpZCkuaW5uZXJIVE1MID0gJ0VuIGNvdXJzJ1xuICAgICAgICAgIGFkZENhbGxvdXQoJ1F1ZXN0aW9ubmFpcmUgZMOpdsOpcm91aWxsw6kgYXZlYyBzdWNjw6hzLicsICdzdWNjZXNzJylcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSBtb2RpZmljYXRpb24gZHUgcXVlc3Rpb25uYWlyZS4nLCAnZXJyb3InKVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxufSlcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9