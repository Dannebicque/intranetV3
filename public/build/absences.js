(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["absences"],{

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

/***/ "./assets/js/pages/absences.js":
/*!*************************************!*\
  !*** ./assets/js/pages/absences.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fetch */ "./assets/js/fetch.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");





// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/absences.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/09/2021 20:58


var tabsences = []; //Saisie des absences

$(document).on('click', '.absChangeTypeGroupe', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $('.absChangeTypeGroupe').removeClass('btn-primary');
  $(this).addClass('btn-primary');
  $('#listeEtudiantsAbsences').load(Routing.generate('api_absence_liste_etudiant', {
    typegroupe: $(this).data('typegroupe')
  }), function () {
    var date = $('#absence-date');
    var heure = $('#absence-heure');
    updateAffichage(date.val(), heure.val());
  });
});
$(document).on('change', '#absence-matiere', function () {
  var etudiants = $('.etudiant');
  var date = $('#absence-date');
  var heure = $('#absence-heure');
  etudiants.removeClass('absent');
  updateAffichage(date.val(), heure.val());
});
$(document).on('change', '#absence-date', function () {
  var etudiants = $('.etudiant');
  var date = $('#absence-date');
  var heure = $('#absence-heure');
  etudiants.removeClass('absent');
  updateAffichage(date.val(), heure.val());
});
$(document).on('change', '#absence-heure', function () {
  var etudiants = $('.etudiant');
  var date = $('#absence-date');
  var heure = $('#absence-heure');
  etudiants.removeClass('absent');
  updateAffichage(date.val(), heure.val());
}); //marquage et enregistrement des absents

$(document).on('click', '.etudiant', function () {
  var $split = $(this).attr('id').split('_');

  if ($(this).hasClass('absent')) {
    //supprimer absence
    $(this).removeClass('absent'); //todo: tester si heure n'est pas vide.

    $.ajax({
      type: 'POST',
      url: Routing.generate('application_personnel_absence_saisie_ajax', {
        matiere: $('#absence-matiere').val(),
        etudiant: $split[1]
      }),
      dataType: 'json',
      data: {
        date: $('#absence-date').val(),
        heure: $('#absence-heure').val(),
        action: 'suppr'
      },
      //affichage de l'erreur en cas de problème
      error: function error() {
        (0,_util__WEBPACK_IMPORTED_MODULE_5__.addCallout)('Erreur lors de la tentative de suppression de l\'absence !', 'danger');
      },
      success: function success(data) {
        tabsences = data;
        (0,_util__WEBPACK_IMPORTED_MODULE_5__.addCallout)('La suppression a été effectuée avec succés !', 'success');
      }
    });
  } else {
    //marquer comme absent
    $(this).addClass('absent');
    $.ajax({
      type: 'POST',
      url: Routing.generate('application_personnel_absence_saisie_ajax', {
        matiere: $('#absence-matiere').val(),
        etudiant: $split[1]
      }),
      dataType: 'json',
      data: {
        date: $('#absence-date').val(),
        heure: $('#absence-heure').val(),
        action: 'saisie'
      },
      //affichage de l'erreur en cas de problème
      error: function error(msg) {
        if (msg.responseText === 'out') {
          (0,_util__WEBPACK_IMPORTED_MODULE_5__.addCallout)('Le délai pour l\'enregistrement est dépassé. Contactez le responsable de la departement', 'danger');
        } else {
          (0,_util__WEBPACK_IMPORTED_MODULE_5__.addCallout)('Erreur lors de l\'enregistrement.', 'danger');
        }
      },
      success: function success() {
        (0,_util__WEBPACK_IMPORTED_MODULE_5__.addCallout)('Absence enregistrée avec succés !', 'success');
      }
    });
  }
});

function updateAffichage(date, heure) {
  $.ajax({
    type: 'GET',
    url: Routing.generate('application_personnel_absence_get_ajax', {
      matiere: $('#absence-matiere').val()
    }),
    dataType: 'json',
    success: function success(data) {
      var t = date.split('/');
      var ddate = t[2].trim() + '-' + t[1].trim() + '-' + t[0].trim();

      if (heure.length === 4) {
        heure = '0' + heure;
      }

      for (var d in data) {
        if (d == ddate) {
          if (typeof data[d][heure] !== 'undefined') {
            for (var i = 0; i < data[d][heure].length; i++) {
              $('#etu_' + data[d][heure][i]).addClass('absent');
            }
          }
        }
      }
    }
  });
}

window.addEventListener('load', function () {
  //le dom est chargé
  document.querySelectorAll('.pasabsent').forEach(function (elem) {
    elem.addEventListener('click', function (e) {
      (0,_fetch__WEBPACK_IMPORTED_MODULE_6__.post)(Routing.generate('app_personnel_absence_etat_appel'), {
        date: document.querySelector('#absence-date').value,
        heure: document.querySelector('#absence-heure').value,
        groupe: e.target.dataset.groupe,
        matiere: document.querySelector('#absence-matiere').value
      }).then(function (data) {
        // Handle data
        if (data === true) {
          e.target.textContent = 'Vous avez indiqué qu\'il n\'y a pas d\'absent dans ce groupe.';
          (0,_util__WEBPACK_IMPORTED_MODULE_5__.addCallout)('Saisie enregistée avec succès.', 'success');
        } else {
          (0,_util__WEBPACK_IMPORTED_MODULE_5__.addCallout)('Vous avez déjà effectué une saisie.', 'warning');
        }
      })["catch"](function (error) {
        // Handle error
        (0,_util__WEBPACK_IMPORTED_MODULE_5__.addCallout)('Erreur lors de l\'enregistrement.', 'error');
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-a68b23","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-81f81c","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_modules_es_symbol_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_dat-47334b","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_web_-f61df9","vendors-node_modules_core-js_modules_es_promise_js-node_modules_core-js_modules_es_regexp_to--8ede4c","assets_js_util_js"], () => (__webpack_exec__("./assets/js/pages/absences.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL2ZldGNoLmpzIiwid2VicGFjazovL2ludHJhbmV0djMvLi9hc3NldHMvanMvcGFnZXMvYWJzZW5jZXMuanMiXSwibmFtZXMiOlsicmVxdWVzdCIsInVybCIsInBhcmFtcyIsIm1ldGhvZCIsIm9wdGlvbnMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ0b1N0cmluZyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImdldCIsInBvc3QiLCJsb2FkIiwib2JqZXQiLCJpbm5lckhUTUwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJ0ZXh0IiwidGFic2VuY2VzIiwiJCIsImRvY3VtZW50Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwidHlwZWdyb3VwZSIsImRhdGEiLCJkYXRlIiwiaGV1cmUiLCJ1cGRhdGVBZmZpY2hhZ2UiLCJ2YWwiLCJldHVkaWFudHMiLCIkc3BsaXQiLCJhdHRyIiwic3BsaXQiLCJoYXNDbGFzcyIsImFqYXgiLCJ0eXBlIiwibWF0aWVyZSIsImV0dWRpYW50IiwiZGF0YVR5cGUiLCJhY3Rpb24iLCJlcnJvciIsImFkZENhbGxvdXQiLCJzdWNjZXNzIiwibXNnIiwicmVzcG9uc2VUZXh0IiwidCIsImRkYXRlIiwidHJpbSIsImxlbmd0aCIsImQiLCJpIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbSIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImdyb3VwZSIsInRhcmdldCIsImRhdGFzZXQiLCJ0ZXh0Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJ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IEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL2ZldGNoLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTIvMDkvMjAyMSAwOTowMVxuXG5jb25zdCByZXF1ZXN0ID0gKHVybCwgcGFyYW1zID0ge30sIG1ldGhvZCA9ICdHRVQnKSA9PiB7XG4gIGxldCBvcHRpb25zID0ge1xuICAgIG1ldGhvZFxuICB9XG4gIGlmICgnR0VUJyA9PT0gbWV0aG9kKSB7XG4gICAgdXJsICs9ICc/JyArIChuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpLnRvU3RyaW5nKClcbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgb3B0aW9ucy5oZWFkZXJzID0ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZldGNoKHVybCwgb3B0aW9ucykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG59XG5cbmV4cG9ydCBjb25zdCBnZXQgPSAodXJsLCBwYXJhbXMpID0+IHJlcXVlc3QodXJsLCBwYXJhbXMsICdHRVQnKVxuZXhwb3J0IGNvbnN0IHBvc3QgPSAodXJsLCBwYXJhbXMpID0+IHJlcXVlc3QodXJsLCBwYXJhbXMsICdQT1NUJylcblxuZXhwb3J0IGNvbnN0IGxvYWQgPSAodXJsLCBwYXJhbXMsIG9iamV0KSA9PiB7XG4gIC8vbG9hZGVyP3dpbmRvdy51bWJyZWxsYS5TcGlubmVyLnNob3coKVxuICBvYmpldC5pbm5lckhUTUwgPSAnJ1xuICBmZXRjaChSb3V0aW5nLmdlbmVyYXRlKHVybCwgcGFyYW1zKSlcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KClcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICBvYmpldC5pbm5lckhUTUwgPSBib2R5XG4gICAgICAvL2xvYWRlcj93aW5kb3cudW1icmVsbGEuU3Bpbm5lci5oaWRlKClcbiAgICB9KVxufVxuXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvYWJzZW5jZXMuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxMy8wOS8yMDIxIDIwOjU4XG5pbXBvcnQge2FkZENhbGxvdXR9IGZyb20gJy4uL3V0aWwnXG5cbmltcG9ydCB7cG9zdH0gZnJvbSAnLi4vZmV0Y2gnXG5cbmxldCB0YWJzZW5jZXMgPSBbXVxuXG4vL1NhaXNpZSBkZXMgYWJzZW5jZXNcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYWJzQ2hhbmdlVHlwZUdyb3VwZScsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICQoJy5hYnNDaGFuZ2VUeXBlR3JvdXBlJykucmVtb3ZlQ2xhc3MoJ2J0bi1wcmltYXJ5JylcbiAgJCh0aGlzKS5hZGRDbGFzcygnYnRuLXByaW1hcnknKVxuICAkKCcjbGlzdGVFdHVkaWFudHNBYnNlbmNlcycpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnYXBpX2Fic2VuY2VfbGlzdGVfZXR1ZGlhbnQnLCB7dHlwZWdyb3VwZTogJCh0aGlzKS5kYXRhKCd0eXBlZ3JvdXBlJyl9KSwgKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgZGF0ZSA9ICQoJyNhYnNlbmNlLWRhdGUnKVxuICAgIGxldCBoZXVyZSA9ICQoJyNhYnNlbmNlLWhldXJlJylcbiAgICB1cGRhdGVBZmZpY2hhZ2UoZGF0ZS52YWwoKSwgaGV1cmUudmFsKCkpXG4gIH0pKVxuXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNhYnNlbmNlLW1hdGllcmUnLCBmdW5jdGlvbiAoKSB7XG4gIGxldCBldHVkaWFudHMgPSAkKCcuZXR1ZGlhbnQnKVxuICBsZXQgZGF0ZSA9ICQoJyNhYnNlbmNlLWRhdGUnKVxuICBsZXQgaGV1cmUgPSAkKCcjYWJzZW5jZS1oZXVyZScpXG4gIGV0dWRpYW50cy5yZW1vdmVDbGFzcygnYWJzZW50JylcbiAgdXBkYXRlQWZmaWNoYWdlKGRhdGUudmFsKCksIGhldXJlLnZhbCgpKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcjYWJzZW5jZS1kYXRlJywgZnVuY3Rpb24gKCkge1xuICBsZXQgZXR1ZGlhbnRzID0gJCgnLmV0dWRpYW50JylcbiAgbGV0IGRhdGUgPSAkKCcjYWJzZW5jZS1kYXRlJylcbiAgbGV0IGhldXJlID0gJCgnI2Fic2VuY2UtaGV1cmUnKVxuICBldHVkaWFudHMucmVtb3ZlQ2xhc3MoJ2Fic2VudCcpXG4gIHVwZGF0ZUFmZmljaGFnZShkYXRlLnZhbCgpLCBoZXVyZS52YWwoKSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI2Fic2VuY2UtaGV1cmUnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGV0dWRpYW50cyA9ICQoJy5ldHVkaWFudCcpXG4gIGNvbnN0IGRhdGUgPSAkKCcjYWJzZW5jZS1kYXRlJylcbiAgY29uc3QgaGV1cmUgPSAkKCcjYWJzZW5jZS1oZXVyZScpXG4gIGV0dWRpYW50cy5yZW1vdmVDbGFzcygnYWJzZW50JylcbiAgdXBkYXRlQWZmaWNoYWdlKGRhdGUudmFsKCksIGhldXJlLnZhbCgpKVxufSlcblxuLy9tYXJxdWFnZSBldCBlbnJlZ2lzdHJlbWVudCBkZXMgYWJzZW50c1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5ldHVkaWFudCcsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgJHNwbGl0ID0gJCh0aGlzKS5hdHRyKCdpZCcpLnNwbGl0KCdfJylcbiAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2Fic2VudCcpKSB7XG5cbiAgICAvL3N1cHByaW1lciBhYnNlbmNlXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWJzZW50JylcbiAgICAvL3RvZG86IHRlc3RlciBzaSBoZXVyZSBuJ2VzdCBwYXMgdmlkZS5cbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBsaWNhdGlvbl9wZXJzb25uZWxfYWJzZW5jZV9zYWlzaWVfYWpheCcsIHtcbiAgICAgICAgbWF0aWVyZTogJCgnI2Fic2VuY2UtbWF0aWVyZScpLnZhbCgpLFxuICAgICAgICBldHVkaWFudDogJHNwbGl0WzFdXG4gICAgICB9KSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGRhdGU6ICQoJyNhYnNlbmNlLWRhdGUnKS52YWwoKSxcbiAgICAgICAgaGV1cmU6ICQoJyNhYnNlbmNlLWhldXJlJykudmFsKCksXG4gICAgICAgIGFjdGlvbjogJ3N1cHByJ1xuICAgICAgfSxcbiAgICAgIC8vYWZmaWNoYWdlIGRlIGwnZXJyZXVyIGVuIGNhcyBkZSBwcm9ibMOobWVcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHRlbnRhdGl2ZSBkZSBzdXBwcmVzc2lvbiBkZSBsXFwnYWJzZW5jZSAhJywgJ2RhbmdlcicpXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdGFic2VuY2VzID0gZGF0YVxuICAgICAgICBhZGRDYWxsb3V0KCdMYSBzdXBwcmVzc2lvbiBhIMOpdMOpIGVmZmVjdHXDqWUgYXZlYyBzdWNjw6lzICEnLCAnc3VjY2VzcycpXG4gICAgICB9XG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICAvL21hcnF1ZXIgY29tbWUgYWJzZW50XG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYWJzZW50JylcbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBsaWNhdGlvbl9wZXJzb25uZWxfYWJzZW5jZV9zYWlzaWVfYWpheCcsIHtcbiAgICAgICAgbWF0aWVyZTogJCgnI2Fic2VuY2UtbWF0aWVyZScpLnZhbCgpLFxuICAgICAgICBldHVkaWFudDogJHNwbGl0WzFdXG4gICAgICB9KSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGRhdGU6ICQoJyNhYnNlbmNlLWRhdGUnKS52YWwoKSxcbiAgICAgICAgaGV1cmU6ICQoJyNhYnNlbmNlLWhldXJlJykudmFsKCksXG4gICAgICAgIGFjdGlvbjogJ3NhaXNpZSdcbiAgICAgIH0sXG4gICAgICAvL2FmZmljaGFnZSBkZSBsJ2VycmV1ciBlbiBjYXMgZGUgcHJvYmzDqG1lXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKG1zZykge1xuICAgICAgICBpZiAobXNnLnJlc3BvbnNlVGV4dCA9PT0gJ291dCcpIHtcbiAgICAgICAgICBhZGRDYWxsb3V0KCdMZSBkw6lsYWkgcG91ciBsXFwnZW5yZWdpc3RyZW1lbnQgZXN0IGTDqXBhc3PDqS4gQ29udGFjdGV6IGxlIHJlc3BvbnNhYmxlIGRlIGxhIGRlcGFydGVtZW50JywgJ2RhbmdlcicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbFxcJ2VucmVnaXN0cmVtZW50LicsICdkYW5nZXInKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICBhZGRDYWxsb3V0KCdBYnNlbmNlIGVucmVnaXN0csOpZSBhdmVjIHN1Y2PDqXMgIScsICdzdWNjZXNzJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59KVxuXG5mdW5jdGlvbiB1cGRhdGVBZmZpY2hhZ2UgKGRhdGUsIGhldXJlKSB7XG4gICQuYWpheCh7XG4gICAgdHlwZTogJ0dFVCcsXG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBsaWNhdGlvbl9wZXJzb25uZWxfYWJzZW5jZV9nZXRfYWpheCcsIHttYXRpZXJlOiAkKCcjYWJzZW5jZS1tYXRpZXJlJykudmFsKCl9KSxcbiAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBjb25zdCB0ID0gZGF0ZS5zcGxpdCgnLycpXG4gICAgICBjb25zdCBkZGF0ZSA9IHRbMl0udHJpbSgpICsgJy0nICsgdFsxXS50cmltKCkgKyAnLScgKyB0WzBdLnRyaW0oKVxuICAgICAgaWYgKGhldXJlLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICBoZXVyZSA9ICcwJyArIGhldXJlXG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGQgaW4gZGF0YSkge1xuICAgICAgICBpZiAoZCA9PSBkZGF0ZSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtkXVtoZXVyZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFbZF1baGV1cmVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICQoJyNldHVfJyArIGRhdGFbZF1baGV1cmVdW2ldKS5hZGRDbGFzcygnYWJzZW50JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkgeyAvL2xlIGRvbSBlc3QgY2hhcmfDqVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFzYWJzZW50JykuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgcG9zdChSb3V0aW5nLmdlbmVyYXRlKCdhcHBfcGVyc29ubmVsX2Fic2VuY2VfZXRhdF9hcHBlbCcpLCB7XG4gICAgICAgIGRhdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYnNlbmNlLWRhdGUnKS52YWx1ZSxcbiAgICAgICAgaGV1cmU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYnNlbmNlLWhldXJlJykudmFsdWUsXG4gICAgICAgIGdyb3VwZTogZS50YXJnZXQuZGF0YXNldC5ncm91cGUsXG4gICAgICAgIG1hdGllcmU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYnNlbmNlLW1hdGllcmUnKS52YWx1ZVxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgLy8gSGFuZGxlIGRhdGFcbiAgICAgICAgICBpZiAoZGF0YSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSAnVm91cyBhdmV6IGluZGlxdcOpIHF1XFwnaWwgblxcJ3kgYSBwYXMgZFxcJ2Fic2VudCBkYW5zIGNlIGdyb3VwZS4nXG4gICAgICAgICAgICBhZGRDYWxsb3V0KCdTYWlzaWUgZW5yZWdpc3TDqWUgYXZlYyBzdWNjw6hzLicsICdzdWNjZXNzJylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkQ2FsbG91dCgnVm91cyBhdmV6IGTDqWrDoCBlZmZlY3R1w6kgdW5lIHNhaXNpZS4nLCAnd2FybmluZycpXG4gICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIC8vIEhhbmRsZSBlcnJvclxuICAgICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsXFwnZW5yZWdpc3RyZW1lbnQuJywgJ2Vycm9yJylcblxuICAgICAgfSlcbiAgICB9KVxuICB9KVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=