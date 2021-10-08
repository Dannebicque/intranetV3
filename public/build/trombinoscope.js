(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["trombinoscope"],{

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

/***/ "./assets/js/pages/trombinoscope.js":
/*!******************************************!*\
  !*** ./assets/js/pages/trombinoscope.js ***!
  \******************************************/
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
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/trombinoscope.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/09/2021 20:17

 // $(document).on('click', '.semestretrombi', function (e) {
//   e.preventDefault()
//
//   $('.semestretrombi').removeClass('active show')
//   $('.enseignanttrombi').removeClass('active show')
//   $(this).addClass('active show')
//   $('#trombi').slideUp().empty().load(Routing.generate('trombinoscope_etudiant_semestre', {semestre: $(this).data('sem')})).slideDown()
// })

document.querySelectorAll('.semestretrombi').forEach(function (elem) {
  elem.addEventListener('click', function (e) {
    var element = e.target;
    var trombi = document.querySelector('#trombi');
    e.preventDefault();
    document.querySelectorAll('.semestretrombi').forEach(function (semestretrombi) {
      semestretrombi.classList.remove('active', 'show');
    });
    document.querySelectorAll('.enseignanttrombi').forEach(function (enseignanttrombi) {
      enseignanttrombi.classList.remove('active', 'show');
    });
    var el = (0,_util__WEBPACK_IMPORTED_MODULE_3__.getParentByTagName)(element, 'a'); //s'assurer d'avoir bien la balise a

    (0,_fetch__WEBPACK_IMPORTED_MODULE_2__.load)('trombinoscope_etudiant_semestre', {
      semestre: el.dataset.sem
    }, trombi);
  });
});
$(document).on('click', '.changeTypeGroupe', function (e) {
  e.preventDefault();
  $('#trombi').slideUp().empty().load(Routing.generate('trombinoscope_etudiant_semestre_type_groupe', {
    semestre: $(this).data('semestre'),
    typegroupe: $(this).data('typegroupe')
  })).slideDown();
});
document.querySelectorAll('.enseignanttrombi').forEach(function (elem) {
  elem.addEventListener('click', function (e) {
    var element = e.target;
    var trombi = document.querySelector('#trombi');
    e.preventDefault();
    document.querySelectorAll('.semestretrombi').forEach(function (semestretrombi) {
      semestretrombi.classList.remove('active', 'show');
    });
    document.querySelectorAll('.enseignanttrombi').forEach(function (enseignanttrombi) {
      enseignanttrombi.classList.remove('active', 'show');
    });
    var el = (0,_util__WEBPACK_IMPORTED_MODULE_3__.getParentByTagName)(element, 'a'); //s'assurer d'avoir bien la balise a

    (0,_fetch__WEBPACK_IMPORTED_MODULE_2__.load)('trombinoscope_personnel', {
      type: el.dataset.type
    }, trombi);
  });
});
$(document).on('click', '.removeEtudiantDepartement', function (e) {
  $.ajax({
    url: Routing.generate('user_change_departement', {
      etudiant: $(this).data('etudiant')
    }),
    method: 'POST',
    success: function success(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_3__.addCallout)('Mofification enregistrée !', 'success');
    },
    error: function error(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_3__.addCallout)('Erreur lors de la sauvegarde de la modification !', 'danger');
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-a68b23","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-81f81c","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_modules_es_symbol_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_dat-47334b","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_web_-f61df9","vendors-node_modules_core-js_modules_es_promise_js-node_modules_core-js_modules_es_regexp_to--8ede4c","assets_js_util_js"], () => (__webpack_exec__("./assets/js/pages/trombinoscope.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL2ZldGNoLmpzIiwid2VicGFjazovL2ludHJhbmV0djMvLi9hc3NldHMvanMvcGFnZXMvdHJvbWJpbm9zY29wZS5qcyJdLCJuYW1lcyI6WyJyZXF1ZXN0IiwidXJsIiwicGFyYW1zIiwibWV0aG9kIiwib3B0aW9ucyIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZ2V0IiwicG9zdCIsImxvYWQiLCJvYmpldCIsImlubmVySFRNTCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInRleHQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZWxlbWVudCIsInRhcmdldCIsInRyb21iaSIsInF1ZXJ5U2VsZWN0b3IiLCJwcmV2ZW50RGVmYXVsdCIsInNlbWVzdHJldHJvbWJpIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZW5zZWlnbmFudHRyb21iaSIsImVsIiwiZ2V0UGFyZW50QnlUYWdOYW1lIiwic2VtZXN0cmUiLCJkYXRhc2V0Iiwic2VtIiwiJCIsIm9uIiwic2xpZGVVcCIsImVtcHR5IiwiZGF0YSIsInR5cGVncm91cGUiLCJzbGlkZURvd24iLCJ0eXBlIiwiYWpheCIsImV0dWRpYW50Iiwic3VjY2VzcyIsImFkZENhbGxvdXQiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFELEVBQXNDO0FBQUEsTUFBaENDLE1BQWdDLHVFQUF2QixFQUF1QjtBQUFBLE1BQW5CQyxNQUFtQix1RUFBVixLQUFVO0FBQ3BELE1BQUlD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a0MsUUFBbEMsRUFBNEMsTUFBNUM7QUFDRCxLQUZEO0FBR0EsUUFBTUUsRUFBRSxHQUFHQyx5REFBa0IsQ0FBQ1YsT0FBRCxFQUFVLEdBQVYsQ0FBN0IsQ0FWb0MsQ0FVUTs7QUFDNUNaLGdEQUFJLENBQUMseUJBQUQsRUFBNEI7QUFBQ2lDLFVBQUksRUFBRVosRUFBRSxDQUFDRyxPQUFILENBQVdTO0FBQWxCLEtBQTVCLEVBQXFEbkIsTUFBckQsQ0FBSjtBQUNELEdBWkQ7QUFhRCxDQWREO0FBZ0JBWSxDQUFDLENBQUNwQixRQUFELENBQUQsQ0FBWXFCLEVBQVosQ0FBZSxPQUFmLEVBQXdCLDRCQUF4QixFQUFzRCxVQUFVaEIsQ0FBVixFQUFhO0FBQ2pFZSxHQUFDLENBQUNRLElBQUYsQ0FBTztBQUNMbEQsT0FBRyxFQUFFbUIsT0FBTyxDQUFDQyxRQUFSLENBQWlCLHlCQUFqQixFQUE0QztBQUFDK0IsY0FBUSxFQUFFVCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxVQUFiO0FBQVgsS0FBNUMsQ0FEQTtBQUVMNUMsVUFBTSxFQUFFLE1BRkg7QUFHTGtELFdBQU8sRUFBRSxpQkFBVXpCLENBQVYsRUFBYTtBQUNwQjBCLHVEQUFVLENBQUMsNEJBQUQsRUFBK0IsU0FBL0IsQ0FBVjtBQUNELEtBTEk7QUFNTEMsU0FBSyxFQUFFLGVBQVUzQixDQUFWLEVBQWE7QUFDbEIwQix1REFBVSxDQUFDLG1EQUFELEVBQXNELFFBQXRELENBQVY7QUFDRDtBQVJJLEdBQVA7QUFXRCxDQVpELEUiLCJmaWxlIjoidHJvbWJpbm9zY29wZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMS4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9mZXRjaC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDEyLzA5LzIwMjEgMDk6MDFcblxuY29uc3QgcmVxdWVzdCA9ICh1cmwsIHBhcmFtcyA9IHt9LCBtZXRob2QgPSAnR0VUJykgPT4ge1xuICBsZXQgb3B0aW9ucyA9IHtcbiAgICBtZXRob2RcbiAgfVxuICBpZiAoJ0dFVCcgPT09IG1ldGhvZCkge1xuICAgIHVybCArPSAnPycgKyAobmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKS50b1N0cmluZygpXG4gIH0gZWxzZSB7XG4gICAgb3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgIG9wdGlvbnMuaGVhZGVycyA9IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04J1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmZXRjaCh1cmwsIG9wdGlvbnMpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0ID0gKHVybCwgcGFyYW1zKSA9PiByZXF1ZXN0KHVybCwgcGFyYW1zLCAnR0VUJylcbmV4cG9ydCBjb25zdCBwb3N0ID0gKHVybCwgcGFyYW1zKSA9PiByZXF1ZXN0KHVybCwgcGFyYW1zLCAnUE9TVCcpXG5cbmV4cG9ydCBjb25zdCBsb2FkID0gKHVybCwgcGFyYW1zLCBvYmpldCkgPT4ge1xuICAvL2xvYWRlcj93aW5kb3cudW1icmVsbGEuU3Bpbm5lci5zaG93KClcbiAgb2JqZXQuaW5uZXJIVE1MID0gJydcbiAgZmV0Y2goUm91dGluZy5nZW5lcmF0ZSh1cmwsIHBhcmFtcykpXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAoYm9keSkge1xuICAgICAgb2JqZXQuaW5uZXJIVE1MID0gYm9keVxuICAgICAgLy9sb2FkZXI/d2luZG93LnVtYnJlbGxhLlNwaW5uZXIuaGlkZSgpXG4gICAgfSlcbn1cblxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIxLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL3Ryb21iaW5vc2NvcGUuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxMi8wOS8yMDIxIDIwOjE3XG5cbmltcG9ydCB7bG9hZH0gZnJvbSAnLi4vZmV0Y2gnXG5pbXBvcnQge2FkZENhbGxvdXQsIGdldFBhcmVudEJ5VGFnTmFtZX0gZnJvbSAnLi4vdXRpbCdcblxuLy8gJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zZW1lc3RyZXRyb21iaScsIGZ1bmN0aW9uIChlKSB7XG4vLyAgIGUucHJldmVudERlZmF1bHQoKVxuLy9cbi8vICAgJCgnLnNlbWVzdHJldHJvbWJpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZSBzaG93Jylcbi8vICAgJCgnLmVuc2VpZ25hbnR0cm9tYmknKS5yZW1vdmVDbGFzcygnYWN0aXZlIHNob3cnKVxuLy8gICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUgc2hvdycpXG4vLyAgICQoJyN0cm9tYmknKS5zbGlkZVVwKCkuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ3Ryb21iaW5vc2NvcGVfZXR1ZGlhbnRfc2VtZXN0cmUnLCB7c2VtZXN0cmU6ICQodGhpcykuZGF0YSgnc2VtJyl9KSkuc2xpZGVEb3duKClcbi8vIH0pXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZW1lc3RyZXRyb21iaScpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0XG4gICAgY29uc3QgdHJvbWJpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Ryb21iaScpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbWVzdHJldHJvbWJpJykuZm9yRWFjaChzZW1lc3RyZXRyb21iaSA9PiB7XG4gICAgICBzZW1lc3RyZXRyb21iaS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnLCAnc2hvdycpXG4gICAgfSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW5zZWlnbmFudHRyb21iaScpLmZvckVhY2goZW5zZWlnbmFudHRyb21iaSA9PiB7XG4gICAgICBlbnNlaWduYW50dHJvbWJpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScsICdzaG93JylcbiAgICB9KVxuICAgIGNvbnN0IGVsID0gZ2V0UGFyZW50QnlUYWdOYW1lKGVsZW1lbnQsICdhJykgLy9zJ2Fzc3VyZXIgZCdhdm9pciBiaWVuIGxhIGJhbGlzZSBhXG4gICAgbG9hZCgndHJvbWJpbm9zY29wZV9ldHVkaWFudF9zZW1lc3RyZScsIHtzZW1lc3RyZTogZWwuZGF0YXNldC5zZW19LCB0cm9tYmkpXG4gIH0pXG59KVxuXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2hhbmdlVHlwZUdyb3VwZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gICQoJyN0cm9tYmknKS5zbGlkZVVwKCkuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ3Ryb21iaW5vc2NvcGVfZXR1ZGlhbnRfc2VtZXN0cmVfdHlwZV9ncm91cGUnLCB7XG4gICAgc2VtZXN0cmU6ICQodGhpcykuZGF0YSgnc2VtZXN0cmUnKSxcbiAgICB0eXBlZ3JvdXBlOiAkKHRoaXMpLmRhdGEoJ3R5cGVncm91cGUnKVxuICB9KSkuc2xpZGVEb3duKClcbn0pXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbnNlaWduYW50dHJvbWJpJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXRcbiAgICBjb25zdCB0cm9tYmkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJvbWJpJylcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VtZXN0cmV0cm9tYmknKS5mb3JFYWNoKHNlbWVzdHJldHJvbWJpID0+IHtcbiAgICAgIHNlbWVzdHJldHJvbWJpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScsICdzaG93JylcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbnNlaWduYW50dHJvbWJpJykuZm9yRWFjaChlbnNlaWduYW50dHJvbWJpID0+IHtcbiAgICAgIGVuc2VpZ25hbnR0cm9tYmkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJywgJ3Nob3cnKVxuICAgIH0pXG4gICAgY29uc3QgZWwgPSBnZXRQYXJlbnRCeVRhZ05hbWUoZWxlbWVudCwgJ2EnKSAvL3MnYXNzdXJlciBkJ2F2b2lyIGJpZW4gbGEgYmFsaXNlIGFcbiAgICBsb2FkKCd0cm9tYmlub3Njb3BlX3BlcnNvbm5lbCcsIHt0eXBlOiBlbC5kYXRhc2V0LnR5cGV9LCB0cm9tYmkpXG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnJlbW92ZUV0dWRpYW50RGVwYXJ0ZW1lbnQnLCBmdW5jdGlvbiAoZSkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndXNlcl9jaGFuZ2VfZGVwYXJ0ZW1lbnQnLCB7ZXR1ZGlhbnQ6ICQodGhpcykuZGF0YSgnZXR1ZGlhbnQnKX0pLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBhZGRDYWxsb3V0KCdNb2ZpZmljYXRpb24gZW5yZWdpc3Ryw6llICEnLCAnc3VjY2VzcycpXG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHNhdXZlZ2FyZGUgZGUgbGEgbW9kaWZpY2F0aW9uICEnLCAnZGFuZ2VyJylcbiAgICB9XG5cbiAgfSlcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9