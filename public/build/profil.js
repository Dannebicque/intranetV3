(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["profil"],{

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

/***/ "./assets/js/pages/profil.js":
/*!***********************************!*\
  !*** ./assets/js/pages/profil.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch */ "./assets/js/fetch.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/profil.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/09/2021 09:01


$(document).on('change', '#chgt_etudiant_departement', function () {
  $.ajax({
    url: Routing.generate('user_change_departement', {
      etudiant: $(this).data('etudiant'),
      departement: $(this).val()
    }),
    method: 'POST',
    success: function success(e) {
      $('#liste_groupes').empty().append('<tr><td colspan="3">Aucun groupe</td></tr>');
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Mofification enregistrée !', 'success');
    },
    error: function error(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Erreur lors de la sauvegarde de la modification !', 'danger');
    }
  });
});
$(document).on('change', '#chgt_etudiant_fin', function () {
  $.ajax({
    url: Routing.generate('user_change_annee_sortie', {
      etudiant: $(this).data('etudiant'),
      annee: $(this).val()
    }),
    method: 'POST',
    success: function success(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Mofification enregistrée !', 'success');
    },
    error: function error(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Erreur lors de la sauvegarde de la modification !', 'danger');
    }
  });
});
$(document).on('click', '.changeprofil', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var $onglet = $(this);
  $('.changeprofil').removeClass('active show');
  $(this).addClass('active show');
  $('#profilContent').empty().load($(this).attr('href'), function () {
    if ($onglet.attr('id') === 'profil-about') {
      var obj = document.querySelector('#valideCommentaire');
      obj.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.post)(Routing.generate('profil_etudiant_ajout_commentaire', {
          slug: obj.getAttribute('data-slug')
        }), {
          commentaire: document.querySelector('#texteCommentaire').value
        }).then(function (data) {
          // Handle data
          var html = document.createElement('p');
          html.textContent = data.commentaire;
          document.querySelector('#listeCommentaire').appendChild(html);
          (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Commentaire ajouté avec succès.', 'success');
          document.querySelector('#texteCommentaire').value = '';
        })["catch"](function (error) {
          // Handle error
          (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Erreur lors de l\'ajout du commentaire.', 'error');
        });
      });
    }

    if ($onglet.attr('id') === 'profil-notes') {// $.get(Routing.generate('profil_etudiant_ajax_notes_graph', {slug: $(graph).data('etudiant')}), function (datasets) {
      //   console.log(datasets)
      //   let labels = []
      //   new Chart(graph, {
      //     type: 'radar',
      //
      //     // Data
      //     //
      //     data: {
      //       labels: ['Mx101', 'Mx102', 'Mx201', 'Mx203', 'Mx202', 'Mx204', 'Moyenne'],
      //       datasets: datasets
      //     },
      //
      //     // Options
      //     //
      //     options: {
      //       responsive: false,
      //       legend: {
      //         display: true
      //       }
      //     }
      //   })
      // })
    }
  });
});
$(document).on('change', '.addfavori', function (e) {
  e.preventDefault();
  e.stopPropagation();
  $.ajax({
    url: Routing.generate('user_add_favori'),
    method: 'POST',
    data: {
      'user': $(this).val(),
      'etat': $(this).prop('checked')
    }
  });
});
$(document).on('click', '#btnabs', function (e) {
  $.ajax({
    url: Routing.generate('administration_absences_ajax_add'),
    data: {
      'etudiant': $(this).data('etudiant'),
      'date': $('#jourabs').val(),
      'matiere': $('#moduleabs').val(),
      'heure': $('#heureabs').val(),
      'justif': $('input[type=radio][name=justifabs]:checked').val()
    },
    method: 'POST',
    success: function success(data) {
      //ajout de la ligne
      var classe = '';
      var texte = '';
      var checked = '';

      if (data.justifie === true) {
        classe = 'bg-pale-success';
        texte = 'Oui';
        checked = 'checked';
      } else {
        classe = 'bg-pale-warning';
        texte = 'Non';
        checked = '';
      }

      var html = '<tr class="' + classe + '" id="ligne_' + data.id + '">\n' + '                    <td>' + data.date + ' à ' + data.heure + '</td>\n' + '                    <td>' + data.codeMatiere + '</td>\n' + '                    <td>' + texte + '</td>\n' + '                    <td class="hide">' + data.personnel + '</td>\n' + '                    <td>\n' + '                        <button data-provide="modaler tooltip"\n' + '                                data-url="' + Routing.generate('app_etudiant_absence_detail', {
        'uuid': data.uuidString
      }) + '"\n' + '                                class="btn btn-info btn-outline btn-square btn-xs"\n' + '                                data-placement="bottom"\n' + '                                title="Détails"\n' + '                                data-title="Détails de l\'absence"\n' + '                        >\n' + '                            <i class="fas fa-info"></i>\n' + '                        </button>\n' + '                    </td>\n' + '                        <td>\n' + '                            <div class="custom-control custom-control-lg custom-checkbox">\n' + '                                <input type="checkbox" class="custom-control-input checkAbsence" id="check_' + data.id + '"\n' + '                                       data-absence="' + data.id + '" ' + checked + '>\n' + '                                <label class="custom-control-label" for="check_' + data.id + '">Justifiée*</label>\n' + '                            </div>\n' + '                        </td>\n' + '                </tr>';
      $('#tableAbsence > tbody:last').append(html);
    }
  });
});
$(document).on('click', '.checkAbsence', function (e) {
  var absence = $(this).data('absence');
  var etat = 0;

  if ($(this).is(':checked')) {
    etat = 1;
  }

  $.ajax({
    url: Routing.generate('administration_absences_justifie', {
      'absence': absence,
      'etat': etat
    }),
    type: 'GET',
    success: function success(data) {
      if (data) {
        $('#ligne_' + absence).removeClass('bg-pale-warning').addClass('bg-pale-success');
      } else {
        $('#ligne_' + absence).removeClass('bg-pale-success').addClass('bg-pale-warning');
      }
    }
  });
});
$(document).on('click', '#btnInit', function () {
  $.ajax({
    url: Routing.generate('security_password_init', {
      user: $(this).data('personnel')
    }),
    method: 'POST',
    success: function success(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Mot de passe initialisé !', 'success');
    },
    error: function error(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Erreur lors l\'initialisation du mot de passe !', 'danger');
    }
  });
});
$(document).on('change', '#chgt_etudiant_semestre', function () {
  $.ajax({
    url: Routing.generate('user_change_semestre', {
      etudiant: $(this).data('etudiant'),
      semestre: $(this).val()
    }),
    method: 'POST',
    success: function success(e) {
      $('#liste_groupes').empty().append('<tr><td colspan="3">Aucun groupe</td></tr>');
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Mofification enregistrée !', 'success');
    },
    error: function error(e) {
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.addCallout)('Erreur lors de la sauvegarde de la modification !', 'danger');
    }
  });
});
/*        {% for semestre in semestres %}
  {
    label: "S1",
      backgroundColor: "rgba(51,202,185,0.7)",
    borderColor: "rgba(0,0,0,0)",
    pointBackgroundColor: "rgba(51,202,185,0.7)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgba(51,202,185,0.7)",
    data: [10, 9, 19, 8, 15, 16, 8.5]
  }{% if not loop.last %},{% endif %}
  {% endfor %}

 */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-a68b23","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-81f81c","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_modules_es_symbol_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_dat-47334b","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_web_-f61df9","vendors-node_modules_core-js_modules_es_promise_js-node_modules_core-js_modules_es_regexp_to--8ede4c","assets_js_util_js"], () => (__webpack_exec__("./assets/js/pages/profil.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL2ZldGNoLmpzIiwid2VicGFjazovL2ludHJhbmV0djMvLi9hc3NldHMvanMvcGFnZXMvcHJvZmlsLmpzIl0sIm5hbWVzIjpbInJlcXVlc3QiLCJ1cmwiLCJwYXJhbXMiLCJtZXRob2QiLCJvcHRpb25zIiwiVVJMU2VhcmNoUGFyYW1zIiwidG9TdHJpbmciLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJnZXQiLCJwb3N0IiwibG9hZCIsIm9iamV0IiwiaW5uZXJIVE1MIiwiUm91dGluZyIsImdlbmVyYXRlIiwidGV4dCIsIiQiLCJkb2N1bWVudCIsIm9uIiwiYWpheCIsImV0dWRpYW50IiwiZGF0YSIsImRlcGFydGVtZW50IiwidmFsIiwic3VjY2VzcyIsImUiLCJlbXB0eSIsImFwcGVuZCIsImFkZENhbGxvdXQiLCJlcnJvciIsImFubmVlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCIkb25nbGV0IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImF0dHIiLCJvYmoiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNsdWciLCJnZXRBdHRyaWJ1dGUiLCJjb21tZW50YWlyZSIsInZhbHVlIiwiaHRtbCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwicHJvcCIsImNsYXNzZSIsInRleHRlIiwiY2hlY2tlZCIsImp1c3RpZmllIiwiaWQiLCJkYXRlIiwiaGV1cmUiLCJjb2RlTWF0aWVyZSIsInBlcnNvbm5lbCIsInV1aWRTdHJpbmciLCJhYnNlbmNlIiwiZXRhdCIsImlzIiwidHlwZSIsInVzZXIiLCJzZW1lc3RyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNB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bUMsNENBQW5DO0FBQ0FDLHVEQUFVLENBQUMsNEJBQUQsRUFBK0IsU0FBL0IsQ0FBVjtBQUNELEtBTkk7QUFPTEMsU0FBSyxFQUFFLGVBQVVKLENBQVYsRUFBYTtBQUNsQkcsdURBQVUsQ0FBQyxtREFBRCxFQUFzRCxRQUF0RCxDQUFWO0FBQ0Q7QUFUSSxHQUFQO0FBWUQsQ0FiRDtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEciLCJmaWxlIjoicHJvZmlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL2ZldGNoLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTIvMDkvMjAyMSAwOTowMVxuXG5jb25zdCByZXF1ZXN0ID0gKHVybCwgcGFyYW1zID0ge30sIG1ldGhvZCA9ICdHRVQnKSA9PiB7XG4gIGxldCBvcHRpb25zID0ge1xuICAgIG1ldGhvZFxuICB9XG4gIGlmICgnR0VUJyA9PT0gbWV0aG9kKSB7XG4gICAgdXJsICs9ICc/JyArIChuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpLnRvU3RyaW5nKClcbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgb3B0aW9ucy5oZWFkZXJzID0ge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZldGNoKHVybCwgb3B0aW9ucykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG59XG5cbmV4cG9ydCBjb25zdCBnZXQgPSAodXJsLCBwYXJhbXMpID0+IHJlcXVlc3QodXJsLCBwYXJhbXMsICdHRVQnKVxuZXhwb3J0IGNvbnN0IHBvc3QgPSAodXJsLCBwYXJhbXMpID0+IHJlcXVlc3QodXJsLCBwYXJhbXMsICdQT1NUJylcblxuZXhwb3J0IGNvbnN0IGxvYWQgPSAodXJsLCBwYXJhbXMsIG9iamV0KSA9PiB7XG4gIC8vbG9hZGVyP3dpbmRvdy51bWJyZWxsYS5TcGlubmVyLnNob3coKVxuICBvYmpldC5pbm5lckhUTUwgPSAnJ1xuICBmZXRjaChSb3V0aW5nLmdlbmVyYXRlKHVybCwgcGFyYW1zKSlcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KClcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICBvYmpldC5pbm5lckhUTUwgPSBib2R5XG4gICAgICAvL2xvYWRlcj93aW5kb3cudW1icmVsbGEuU3Bpbm5lci5oaWRlKClcbiAgICB9KVxufVxuXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjEuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvcHJvZmlsLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMTIvMDkvMjAyMSAwOTowMVxuaW1wb3J0IHthZGRDYWxsb3V0fSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtnZXQsIHBvc3R9IGZyb20gJy4uL2ZldGNoJ1xuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNjaGd0X2V0dWRpYW50X2RlcGFydGVtZW50JywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgndXNlcl9jaGFuZ2VfZGVwYXJ0ZW1lbnQnLCB7ZXR1ZGlhbnQ6ICQodGhpcykuZGF0YSgnZXR1ZGlhbnQnKSwgZGVwYXJ0ZW1lbnQ6ICQodGhpcykudmFsKCl9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgJCgnI2xpc3RlX2dyb3VwZXMnKS5lbXB0eSgpLmFwcGVuZCgnPHRyPjx0ZCBjb2xzcGFuPVwiM1wiPkF1Y3VuIGdyb3VwZTwvdGQ+PC90cj4nKVxuICAgICAgYWRkQ2FsbG91dCgnTW9maWZpY2F0aW9uIGVucmVnaXN0csOpZSAhJywgJ3N1Y2Nlc3MnKVxuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsYSBzYXV2ZWdhcmRlIGRlIGxhIG1vZGlmaWNhdGlvbiAhJywgJ2RhbmdlcicpXG4gICAgfVxuXG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNjaGd0X2V0dWRpYW50X2ZpbicsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3VzZXJfY2hhbmdlX2FubmVlX3NvcnRpZScsIHtldHVkaWFudDogJCh0aGlzKS5kYXRhKCdldHVkaWFudCcpLCBhbm5lZTogJCh0aGlzKS52YWwoKX0pLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBhZGRDYWxsb3V0KCdNb2ZpZmljYXRpb24gZW5yZWdpc3Ryw6llICEnLCAnc3VjY2VzcycpXG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHNhdXZlZ2FyZGUgZGUgbGEgbW9kaWZpY2F0aW9uICEnLCAnZGFuZ2VyJylcbiAgICB9XG5cbiAgfSlcbn0pXG5cblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jaGFuZ2Vwcm9maWwnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICBsZXQgJG9uZ2xldCA9ICQodGhpcylcbiAgJCgnLmNoYW5nZXByb2ZpbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUgc2hvdycpXG4gICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZSBzaG93JylcbiAgJCgnI3Byb2ZpbENvbnRlbnQnKS5lbXB0eSgpLmxvYWQoJCh0aGlzKS5hdHRyKCdocmVmJyksIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJG9uZ2xldC5hdHRyKCdpZCcpID09PSAncHJvZmlsLWFib3V0Jykge1xuICAgICAgY29uc3Qgb2JqID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZhbGlkZUNvbW1lbnRhaXJlJylcbiAgICAgIG9iai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIHBvc3QoUm91dGluZy5nZW5lcmF0ZSgncHJvZmlsX2V0dWRpYW50X2Fqb3V0X2NvbW1lbnRhaXJlJywge3NsdWc6IG9iai5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2x1ZycpfSksIHtcbiAgICAgICAgICBjb21tZW50YWlyZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHRlQ29tbWVudGFpcmUnKS52YWx1ZVxuICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgLy8gSGFuZGxlIGRhdGFcbiAgICAgICAgICAgIGxldCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICBodG1sLnRleHRDb250ZW50ID0gZGF0YS5jb21tZW50YWlyZVxuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdGVDb21tZW50YWlyZScpLmFwcGVuZENoaWxkKGh0bWwpXG4gICAgICAgICAgICBhZGRDYWxsb3V0KCdDb21tZW50YWlyZSBham91dMOpIGF2ZWMgc3VjY8Oocy4nLCAnc3VjY2VzcycpXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dGVDb21tZW50YWlyZScpLnZhbHVlID0gJydcbiAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgLy8gSGFuZGxlIGVycm9yXG4gICAgICAgICAgYWRkQ2FsbG91dCgnRXJyZXVyIGxvcnMgZGUgbFxcJ2Fqb3V0IGR1IGNvbW1lbnRhaXJlLicsICdlcnJvcicpXG5cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmICgkb25nbGV0LmF0dHIoJ2lkJykgPT09ICdwcm9maWwtbm90ZXMnKSB7XG4gICAgICAvLyAkLmdldChSb3V0aW5nLmdlbmVyYXRlKCdwcm9maWxfZXR1ZGlhbnRfYWpheF9ub3Rlc19ncmFwaCcsIHtzbHVnOiAkKGdyYXBoKS5kYXRhKCdldHVkaWFudCcpfSksIGZ1bmN0aW9uIChkYXRhc2V0cykge1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhkYXRhc2V0cylcbiAgICAgIC8vICAgbGV0IGxhYmVscyA9IFtdXG4gICAgICAvLyAgIG5ldyBDaGFydChncmFwaCwge1xuICAgICAgLy8gICAgIHR5cGU6ICdyYWRhcicsXG4gICAgICAvL1xuICAgICAgLy8gICAgIC8vIERhdGFcbiAgICAgIC8vICAgICAvL1xuICAgICAgLy8gICAgIGRhdGE6IHtcbiAgICAgIC8vICAgICAgIGxhYmVsczogWydNeDEwMScsICdNeDEwMicsICdNeDIwMScsICdNeDIwMycsICdNeDIwMicsICdNeDIwNCcsICdNb3llbm5lJ10sXG4gICAgICAvLyAgICAgICBkYXRhc2V0czogZGF0YXNldHNcbiAgICAgIC8vICAgICB9LFxuICAgICAgLy9cbiAgICAgIC8vICAgICAvLyBPcHRpb25zXG4gICAgICAvLyAgICAgLy9cbiAgICAgIC8vICAgICBvcHRpb25zOiB7XG4gICAgICAvLyAgICAgICByZXNwb25zaXZlOiBmYWxzZSxcbiAgICAgIC8vICAgICAgIGxlZ2VuZDoge1xuICAgICAgLy8gICAgICAgICBkaXNwbGF5OiB0cnVlXG4gICAgICAvLyAgICAgICB9XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gfSlcblxuICAgIH1cbiAgfSlcblxuXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5hZGRmYXZvcmknLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd1c2VyX2FkZF9mYXZvcmknKSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7XG4gICAgICAndXNlcic6ICQodGhpcykudmFsKCksXG4gICAgICAnZXRhdCc6ICQodGhpcykucHJvcCgnY2hlY2tlZCcpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNidG5hYnMnLCBmdW5jdGlvbiAoZSkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fYWJzZW5jZXNfYWpheF9hZGQnKSxcbiAgICBkYXRhOiB7XG4gICAgICAnZXR1ZGlhbnQnOiAkKHRoaXMpLmRhdGEoJ2V0dWRpYW50JyksXG4gICAgICAnZGF0ZSc6ICQoJyNqb3VyYWJzJykudmFsKCksXG4gICAgICAnbWF0aWVyZSc6ICQoJyNtb2R1bGVhYnMnKS52YWwoKSxcbiAgICAgICdoZXVyZSc6ICQoJyNoZXVyZWFicycpLnZhbCgpLFxuICAgICAgJ2p1c3RpZic6ICQoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9anVzdGlmYWJzXTpjaGVja2VkJykudmFsKClcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAvL2Fqb3V0IGRlIGxhIGxpZ25lXG4gICAgICBsZXQgY2xhc3NlID0gJydcbiAgICAgIGxldCB0ZXh0ZSA9ICcnXG4gICAgICBsZXQgY2hlY2tlZCA9ICcnXG4gICAgICBpZiAoZGF0YS5qdXN0aWZpZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjbGFzc2UgPSAnYmctcGFsZS1zdWNjZXNzJ1xuICAgICAgICB0ZXh0ZSA9ICdPdWknXG4gICAgICAgIGNoZWNrZWQgPSAnY2hlY2tlZCdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsYXNzZSA9ICdiZy1wYWxlLXdhcm5pbmcnXG4gICAgICAgIHRleHRlID0gJ05vbidcbiAgICAgICAgY2hlY2tlZCA9ICcnXG4gICAgICB9XG5cbiAgICAgIGxldCBodG1sID0gJzx0ciBjbGFzcz1cIicgKyBjbGFzc2UgKyAnXCIgaWQ9XCJsaWduZV8nICsgZGF0YS5pZCArICdcIj5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPHRkPicgKyBkYXRhLmRhdGUgKyAnIMOgICcgKyBkYXRhLmhldXJlICsgJzwvdGQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgIDx0ZD4nICsgZGF0YS5jb2RlTWF0aWVyZSArICc8L3RkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8dGQ+JyArIHRleHRlICsgJzwvdGQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImhpZGVcIj4nICsgZGF0YS5wZXJzb25uZWwgKyAnPC90ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPHRkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXByb3ZpZGU9XCJtb2RhbGVyIHRvb2x0aXBcIlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXVybD1cIicgKyBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfZXR1ZGlhbnRfYWJzZW5jZV9kZXRhaWwnLCB7J3V1aWQnOiBkYXRhLnV1aWRTdHJpbmd9KSArICdcIlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4taW5mbyBidG4tb3V0bGluZSBidG4tc3F1YXJlIGJ0bi14c1wiXFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGxhY2VtZW50PVwiYm90dG9tXCJcXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEw6l0YWlsc1wiXFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGl0bGU9XCJEw6l0YWlscyBkZSBsXFwnYWJzZW5jZVwiXFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtaW5mb1wiPjwvaT5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tY29udHJvbC1sZyBjdXN0b20tY2hlY2tib3hcIj5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXQgY2hlY2tBYnNlbmNlXCIgaWQ9XCJjaGVja18nICsgZGF0YS5pZCArICdcIlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hYnNlbmNlPVwiJyArIGRhdGEuaWQgKyAnXCIgJyArIGNoZWNrZWQgKyAnPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGZvcj1cImNoZWNrXycgKyBkYXRhLmlkICsgJ1wiPkp1c3RpZmnDqWUqPC9sYWJlbD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgPC90cj4nXG5cbiAgICAgICQoJyN0YWJsZUFic2VuY2UgPiB0Ym9keTpsYXN0JykuYXBwZW5kKGh0bWwpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jaGVja0Fic2VuY2UnLCBmdW5jdGlvbiAoZSkge1xuICBsZXQgYWJzZW5jZSA9ICQodGhpcykuZGF0YSgnYWJzZW5jZScpXG4gIGxldCBldGF0ID0gMFxuXG4gIGlmICgoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkpIHtcbiAgICBldGF0ID0gMVxuICB9XG5cbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2Fic2VuY2VzX2p1c3RpZmllJywgeydhYnNlbmNlJzogYWJzZW5jZSwgJ2V0YXQnOiBldGF0fSksXG4gICAgdHlwZTogJ0dFVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICQoJyNsaWduZV8nICsgYWJzZW5jZSkucmVtb3ZlQ2xhc3MoJ2JnLXBhbGUtd2FybmluZycpLmFkZENsYXNzKCdiZy1wYWxlLXN1Y2Nlc3MnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnI2xpZ25lXycgKyBhYnNlbmNlKS5yZW1vdmVDbGFzcygnYmctcGFsZS1zdWNjZXNzJykuYWRkQ2xhc3MoJ2JnLXBhbGUtd2FybmluZycpXG4gICAgICB9XG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNidG5Jbml0JywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc2VjdXJpdHlfcGFzc3dvcmRfaW5pdCcsIHt1c2VyOiAkKHRoaXMpLmRhdGEoJ3BlcnNvbm5lbCcpfSksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGFkZENhbGxvdXQoJ01vdCBkZSBwYXNzZSBpbml0aWFsaXPDqSAhJywgJ3N1Y2Nlc3MnKVxuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBsXFwnaW5pdGlhbGlzYXRpb24gZHUgbW90IGRlIHBhc3NlICEnLCAnZGFuZ2VyJylcbiAgICB9XG5cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI2NoZ3RfZXR1ZGlhbnRfc2VtZXN0cmUnLCBmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCd1c2VyX2NoYW5nZV9zZW1lc3RyZScsIHtldHVkaWFudDogJCh0aGlzKS5kYXRhKCdldHVkaWFudCcpLCBzZW1lc3RyZTogJCh0aGlzKS52YWwoKX0pLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAkKCcjbGlzdGVfZ3JvdXBlcycpLmVtcHR5KCkuYXBwZW5kKCc8dHI+PHRkIGNvbHNwYW49XCIzXCI+QXVjdW4gZ3JvdXBlPC90ZD48L3RyPicpXG4gICAgICBhZGRDYWxsb3V0KCdNb2ZpZmljYXRpb24gZW5yZWdpc3Ryw6llICEnLCAnc3VjY2VzcycpXG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0VycmV1ciBsb3JzIGRlIGxhIHNhdXZlZ2FyZGUgZGUgbGEgbW9kaWZpY2F0aW9uICEnLCAnZGFuZ2VyJylcbiAgICB9XG5cbiAgfSlcbn0pXG5cblxuXG4vKiAgICAgICAgeyUgZm9yIHNlbWVzdHJlIGluIHNlbWVzdHJlcyAlfVxuICB7XG4gICAgbGFiZWw6IFwiUzFcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDUxLDIwMiwxODUsMC43KVwiLFxuICAgIGJvcmRlckNvbG9yOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICBwb2ludEJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDUxLDIwMiwxODUsMC43KVwiLFxuICAgIHBvaW50Qm9yZGVyQ29sb3I6IFwiI2ZmZlwiLFxuICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogXCJyZ2JhKDUxLDIwMiwxODUsMC43KVwiLFxuICAgIGRhdGE6IFsxMCwgOSwgMTksIDgsIDE1LCAxNiwgOC41XVxuICB9eyUgaWYgbm90IGxvb3AubGFzdCAlfSx7JSBlbmRpZiAlfVxuICB7JSBlbmRmb3IgJX1cblxuICovXG4iXSwic291cmNlUm9vdCI6IiJ9