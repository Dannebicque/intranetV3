(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["creneaux"],{

/***/ "./assets/js/pages/creneaux.js":
/*!*************************************!*\
  !*** ./assets/js/pages/creneaux.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./assets/js/util.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/creneaux.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 06/09/2020 16:14

$(document).on('click', '#btn_creneau_add', function () {
  var $annee = $('#change_annee_universitiare_temp').val();
  $.ajax({
    method: 'POST',
    data: {
      anneeUniversitaire: $annee,
      jour: $('#creneau_jour').val(),
      debut: $('#creneau_debut').val(),
      fin: $('#creneau_fin').val()
    },
    url: Routing.generate('administration_creneau_cours_new'),
    success: function success() {
      $('#liste_creneaux').empty().load(Routing.generate('administration_creneau_cours_liste', {
        annee_universitaire: $annee
      }));
      (0,_util__WEBPACK_IMPORTED_MODULE_1__.addCallout)('Créneau ajouté avec succès', 'success');
    },
    error: function error() {
      (0,_util__WEBPACK_IMPORTED_MODULE_1__.addCallout)('Erreur lors de l\'ajout du créneau', 'danger');
    }
  });
});
$(document).on('click', '.bloquercreneau', function () {
  var $cr = $(this);

  if ($cr.hasClass('bloquercreneau_eviter')) {
    updateCreneau('dispo', $cr.data('creneau'), $cr.data('semaine'));
    $cr.removeClass('bloquercreneau_eviter');
  } else if ($cr.hasClass('bloquercreneau_interdit')) {
    $cr.removeClass('bloquercreneau_interdit');
    $cr.addClass('bloquercreneau_eviter');
    updateCreneau('au', $cr.data('creneau'), $cr.data('semaine'));
  } else {
    $cr.addClass('bloquercreneau_interdit');
    updateCreneau('va', $cr.data('creneau'), $cr.data('semaine'));
  }
});
$(document).on('click', '.creneau', function () {
  var interdit = $('#nb_interdit');
  var eviter = $('#nb_eviter');
  var dispo = $('#nb_dispo');
  var heure = $(this).data('heure');
  var jour = $(this).dataAttr('jour');
  var nb_interdit = parseInt(interdit.text());
  var nb_eviter = parseInt(eviter.text());
  var nb_dispo = parseInt(dispo.text());

  if ($(this).hasClass('bloquercreneau_interdit')) {
    $(this).removeClass('bloquercreneau_interdit');
    $(this).addClass('bloquercreneau_eviter');
    nb_interdit--;
    nb_eviter++;
    updateDisponibilite(jour, heure, 'E');
  } else if ($(this).hasClass('bloquercreneau_eviter')) {
    $(this).removeClass('bloquercreneau_eviter');
    nb_eviter--;
    nb_dispo++;
    updateDisponibilite(jour, heure, 'D');
  } else {
    $(this).addClass('bloquercreneau_interdit');
    nb_interdit++;
    nb_dispo--;
    updateDisponibilite(jour, heure, 'I');
  }

  interdit.text(nb_interdit);
  eviter.text(nb_eviter);
  dispo.text(nb_dispo);
});

function updateDisponibilite($jour, $heure, $etat) {
  $.ajax({
    url: Routing.generate('application_personnel_disponibilite_update'),
    data: {
      jour: $jour,
      heure: $heure,
      etat: $etat
    },
    method: 'POST'
  });
}

function updateCreneau($type, $cr, $semaine) {
  $.ajax({
    url: Routing.generate('administration_creneau_bloque_modifie_etat'),
    data: {
      creneau: $cr,
      type: $type,
      semaine: $semaine
    },
    method: 'POST'
  });
}

/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-a68b23","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-81f81c","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_modules_es_symbol_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_dat-47334b","assets_js_util_js"], () => (__webpack_exec__("./assets/js/pages/creneaux.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL2NyZW5lYXV4LmpzIiwid2VicGFjazovL2ludHJhbmV0djMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludC5qcyIsIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wYXJzZS1pbnQuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50Iiwib24iLCIkYW5uZWUiLCJ2YWwiLCJhamF4IiwibWV0aG9kIiwiZGF0YSIsImFubmVlVW5pdmVyc2l0YWlyZSIsImpvdXIiLCJkZWJ1dCIsImZpbiIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInN1Y2Nlc3MiLCJlbXB0eSIsImxvYWQiLCJhbm5lZV91bml2ZXJzaXRhaXJlIiwiYWRkQ2FsbG91dCIsImVycm9yIiwiJGNyIiwiaGFzQ2xhc3MiLCJ1cGRhdGVDcmVuZWF1IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImludGVyZGl0IiwiZXZpdGVyIiwiZGlzcG8iLCJoZXVyZSIsImRhdGFBdHRyIiwibmJfaW50ZXJkaXQiLCJwYXJzZUludCIsInRleHQiLCJuYl9ldml0ZXIiLCJuYl9kaXNwbyIsInVwZGF0ZURpc3BvbmliaWxpdGUiLCIkam91ciIsIiRoZXVyZSIsIiRldGF0IiwiZXRhdCIsIiR0eXBlIiwiJHNlbWFpbmUiLCJjcmVuZWF1IiwidHlwZSIsInNlbWFpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixrQkFBeEIsRUFBNEMsWUFBVTtBQUNwRCxNQUFNQyxNQUFNLEdBQUdILENBQUMsQ0FBQyxrQ0FBRCxDQUFELENBQXNDSSxHQUF0QyxFQUFmO0FBQ0FKLEdBQUMsQ0FBQ0ssSUFBRixDQUFPO0FBQ0xDLFVBQU0sRUFBQyxNQURGO0FBRUxDLFFBQUksRUFBRTtBQUNKQyx3QkFBa0IsRUFBRUwsTUFEaEI7QUFFSk0sVUFBSSxFQUFDVCxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CSSxHQUFuQixFQUZEO0FBR0pNLFdBQUssRUFBQ1YsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JJLEdBQXBCLEVBSEY7QUFJSk8sU0FBRyxFQUFDWCxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCSSxHQUFsQjtBQUpBLEtBRkQ7QUFRTFEsT0FBRyxFQUFFQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsa0NBQWpCLENBUkE7QUFTTEMsV0FBTyxFQUFFLG1CQUFZO0FBQ25CZixPQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQmdCLEtBQXJCLEdBQTZCQyxJQUE3QixDQUFrQ0osT0FBTyxDQUFDQyxRQUFSLENBQWlCLG9DQUFqQixFQUF1RDtBQUFDSSwyQkFBbUIsRUFBRWY7QUFBdEIsT0FBdkQsQ0FBbEM7QUFDQWdCLHVEQUFVLENBQUMsNEJBQUQsRUFBK0IsU0FBL0IsQ0FBVjtBQUNELEtBWkk7QUFhTEMsU0FBSyxFQUFFLGlCQUFZO0FBQ2pCRCx1REFBVSxDQUFDLG9DQUFELEVBQXVDLFFBQXZDLENBQVY7QUFDRDtBQWZJLEdBQVA7QUFpQkQsQ0FuQkQ7QUFxQkFuQixDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixpQkFBeEIsRUFBMkMsWUFBVTtBQUNuRCxNQUFNbUIsR0FBRyxHQUFHckIsQ0FBQyxDQUFDLElBQUQsQ0FBYjs7QUFDQSxNQUFJcUIsR0FBRyxDQUFDQyxRQUFKLENBQWEsdUJBQWIsQ0FBSixFQUEyQztBQUN6Q0MsaUJBQWEsQ0FBQyxPQUFELEVBQVVGLEdBQUcsQ0FBQ2QsSUFBSixDQUFTLFNBQVQsQ0FBVixFQUErQmMsR0FBRyxDQUFDZCxJQUFKLENBQVMsU0FBVCxDQUEvQixDQUFiO0FBQ0FjLE9BQUcsQ0FBQ0csV0FBSixDQUFnQix1QkFBaEI7QUFDRCxHQUhELE1BR08sSUFBR0gsR0FBRyxDQUFDQyxRQUFKLENBQWEseUJBQWIsQ0FBSCxFQUE0QztBQUNqREQsT0FBRyxDQUFDRyxXQUFKLENBQWdCLHlCQUFoQjtBQUNBSCxPQUFHLENBQUNJLFFBQUosQ0FBYSx1QkFBYjtBQUNBRixpQkFBYSxDQUFDLElBQUQsRUFBT0YsR0FBRyxDQUFDZCxJQUFKLENBQVMsU0FBVCxDQUFQLEVBQTRCYyxHQUFHLENBQUNkLElBQUosQ0FBUyxTQUFULENBQTVCLENBQWI7QUFDRCxHQUpNLE1BSUE7QUFDTGMsT0FBRyxDQUFDSSxRQUFKLENBQWEseUJBQWI7QUFDQUYsaUJBQWEsQ0FBQyxJQUFELEVBQU9GLEdBQUcsQ0FBQ2QsSUFBSixDQUFTLFNBQVQsQ0FBUCxFQUE0QmMsR0FBRyxDQUFDZCxJQUFKLENBQVMsU0FBVCxDQUE1QixDQUFiO0FBQ0Q7QUFDRixDQWJEO0FBZUFQLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFVBQXhCLEVBQW9DLFlBQVk7QUFDOUMsTUFBTXdCLFFBQVEsR0FBRzFCLENBQUMsQ0FBQyxjQUFELENBQWxCO0FBQ0EsTUFBTTJCLE1BQU0sR0FBRzNCLENBQUMsQ0FBQyxZQUFELENBQWhCO0FBQ0EsTUFBTTRCLEtBQUssR0FBRzVCLENBQUMsQ0FBQyxXQUFELENBQWY7QUFDQSxNQUFNNkIsS0FBSyxHQUFHN0IsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTyxJQUFSLENBQWEsT0FBYixDQUFkO0FBQ0EsTUFBTUUsSUFBSSxHQUFHVCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE4QixRQUFSLENBQWlCLE1BQWpCLENBQWI7QUFFQSxNQUFJQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ04sUUFBUSxDQUFDTyxJQUFULEVBQUQsQ0FBMUI7QUFDQSxNQUFJQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0wsTUFBTSxDQUFDTSxJQUFQLEVBQUQsQ0FBeEI7QUFDQSxNQUFJRSxRQUFRLEdBQUdILFFBQVEsQ0FBQ0osS0FBSyxDQUFDSyxJQUFOLEVBQUQsQ0FBdkI7O0FBRUEsTUFBSWpDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNCLFFBQVIsQ0FBaUIseUJBQWpCLENBQUosRUFBaUQ7QUFDL0N0QixLQUFDLENBQUMsSUFBRCxDQUFELENBQVF3QixXQUFSLENBQW9CLHlCQUFwQjtBQUNBeEIsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUIsUUFBUixDQUFpQix1QkFBakI7QUFDQU0sZUFBVztBQUNYRyxhQUFTO0FBQ1RFLHVCQUFtQixDQUFDM0IsSUFBRCxFQUFPb0IsS0FBUCxFQUFhLEdBQWIsQ0FBbkI7QUFDRCxHQU5ELE1BTU8sSUFBSTdCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNCLFFBQVIsQ0FBaUIsdUJBQWpCLENBQUosRUFBK0M7QUFDcER0QixLQUFDLENBQUMsSUFBRCxDQUFELENBQVF3QixXQUFSLENBQW9CLHVCQUFwQjtBQUNBVSxhQUFTO0FBQ1RDLFlBQVE7QUFDUkMsdUJBQW1CLENBQUMzQixJQUFELEVBQU9vQixLQUFQLEVBQWEsR0FBYixDQUFuQjtBQUNELEdBTE0sTUFLQTtBQUVMN0IsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUIsUUFBUixDQUFpQix5QkFBakI7QUFDQU0sZUFBVztBQUNYSSxZQUFRO0FBQ1JDLHVCQUFtQixDQUFDM0IsSUFBRCxFQUFPb0IsS0FBUCxFQUFhLEdBQWIsQ0FBbkI7QUFDRDs7QUFFREgsVUFBUSxDQUFDTyxJQUFULENBQWNGLFdBQWQ7QUFDQUosUUFBTSxDQUFDTSxJQUFQLENBQVlDLFNBQVo7QUFDQU4sT0FBSyxDQUFDSyxJQUFOLENBQVdFLFFBQVg7QUFDRCxDQWpDRDs7QUFtQ0EsU0FBU0MsbUJBQVQsQ0FBNkJDLEtBQTdCLEVBQW9DQyxNQUFwQyxFQUE0Q0MsS0FBNUMsRUFBa0Q7QUFDaER2QyxHQUFDLENBQUNLLElBQUYsQ0FBTztBQUNMTyxPQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQiw0Q0FBakIsQ0FEQTtBQUVMUCxRQUFJLEVBQUM7QUFDSEUsVUFBSSxFQUFFNEIsS0FESDtBQUVIUixXQUFLLEVBQUVTLE1BRko7QUFHSEUsVUFBSSxFQUFFRDtBQUhILEtBRkE7QUFPTGpDLFVBQU0sRUFBRTtBQVBILEdBQVA7QUFTRDs7QUFFRCxTQUFTaUIsYUFBVCxDQUF1QmtCLEtBQXZCLEVBQThCcEIsR0FBOUIsRUFBbUNxQixRQUFuQyxFQUE0QztBQUMxQzFDLEdBQUMsQ0FBQ0ssSUFBRixDQUFPO0FBQ0xPLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLDRDQUFqQixDQURBO0FBRUxQLFFBQUksRUFBQztBQUNIb0MsYUFBTyxFQUFFdEIsR0FETjtBQUVIdUIsVUFBSSxFQUFFSCxLQUZIO0FBR0hJLGFBQU8sRUFBRUg7QUFITixLQUZBO0FBT0xwQyxVQUFNLEVBQUU7QUFQSCxHQUFQO0FBU0QsQzs7Ozs7Ozs7OztBQ3BHRCxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLFdBQVcsMkdBQXdDO0FBQ25ELGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ2JELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsNkJBQTZCLG1CQUFPLENBQUMsMkZBQStCOztBQUVwRTtBQUNBO0FBQ0EsR0FBRywyREFBMkQ7QUFDOUQ7QUFDQSxDQUFDIiwiZmlsZSI6ImNyZW5lYXV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL2NyZW5lYXV4LmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDYvMDkvMjAyMCAxNjoxNFxuaW1wb3J0IHthZGRDYWxsb3V0fSBmcm9tICcuLi91dGlsJ1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2J0bl9jcmVuZWF1X2FkZCcsIGZ1bmN0aW9uKCl7XG4gIGNvbnN0ICRhbm5lZSA9ICQoJyNjaGFuZ2VfYW5uZWVfdW5pdmVyc2l0aWFyZV90ZW1wJykudmFsKClcbiAgJC5hamF4KHtcbiAgICBtZXRob2Q6J1BPU1QnLFxuICAgIGRhdGE6IHtcbiAgICAgIGFubmVlVW5pdmVyc2l0YWlyZTogJGFubmVlLFxuICAgICAgam91cjokKCcjY3JlbmVhdV9qb3VyJykudmFsKCksXG4gICAgICBkZWJ1dDokKCcjY3JlbmVhdV9kZWJ1dCcpLnZhbCgpLFxuICAgICAgZmluOiQoJyNjcmVuZWF1X2ZpbicpLnZhbCgpXG4gICAgfSxcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2NyZW5lYXVfY291cnNfbmV3JyksXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgJCgnI2xpc3RlX2NyZW5lYXV4JykuZW1wdHkoKS5sb2FkKFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX2NyZW5lYXVfY291cnNfbGlzdGUnLCB7YW5uZWVfdW5pdmVyc2l0YWlyZTogJGFubmVlfSkpXG4gICAgICBhZGRDYWxsb3V0KCdDcsOpbmVhdSBham91dMOpIGF2ZWMgc3VjY8OocycsICdzdWNjZXNzJylcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICBhZGRDYWxsb3V0KCdFcnJldXIgbG9ycyBkZSBsXFwnYWpvdXQgZHUgY3LDqW5lYXUnLCAnZGFuZ2VyJylcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJsb3F1ZXJjcmVuZWF1JywgZnVuY3Rpb24oKXtcbiAgY29uc3QgJGNyID0gJCh0aGlzKVxuICBpZiAoJGNyLmhhc0NsYXNzKCdibG9xdWVyY3JlbmVhdV9ldml0ZXInKSkge1xuICAgIHVwZGF0ZUNyZW5lYXUoJ2Rpc3BvJywgJGNyLmRhdGEoJ2NyZW5lYXUnKSwgJGNyLmRhdGEoJ3NlbWFpbmUnKSlcbiAgICAkY3IucmVtb3ZlQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2V2aXRlcicpXG4gIH0gZWxzZSBpZigkY3IuaGFzQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2ludGVyZGl0JykpIHtcbiAgICAkY3IucmVtb3ZlQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2ludGVyZGl0JylcbiAgICAkY3IuYWRkQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2V2aXRlcicpXG4gICAgdXBkYXRlQ3JlbmVhdSgnYXUnLCAkY3IuZGF0YSgnY3JlbmVhdScpLCAkY3IuZGF0YSgnc2VtYWluZScpKVxuICB9IGVsc2Uge1xuICAgICRjci5hZGRDbGFzcygnYmxvcXVlcmNyZW5lYXVfaW50ZXJkaXQnKVxuICAgIHVwZGF0ZUNyZW5lYXUoJ3ZhJywgJGNyLmRhdGEoJ2NyZW5lYXUnKSwgJGNyLmRhdGEoJ3NlbWFpbmUnKSlcbiAgfVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jcmVuZWF1JywgZnVuY3Rpb24gKCkge1xuICBjb25zdCBpbnRlcmRpdCA9ICQoJyNuYl9pbnRlcmRpdCcpXG4gIGNvbnN0IGV2aXRlciA9ICQoJyNuYl9ldml0ZXInKVxuICBjb25zdCBkaXNwbyA9ICQoJyNuYl9kaXNwbycpXG4gIGNvbnN0IGhldXJlID0gJCh0aGlzKS5kYXRhKCdoZXVyZScpXG4gIGNvbnN0IGpvdXIgPSAkKHRoaXMpLmRhdGFBdHRyKCdqb3VyJylcblxuICBsZXQgbmJfaW50ZXJkaXQgPSBwYXJzZUludChpbnRlcmRpdC50ZXh0KCkpXG4gIGxldCBuYl9ldml0ZXIgPSBwYXJzZUludChldml0ZXIudGV4dCgpKVxuICBsZXQgbmJfZGlzcG8gPSBwYXJzZUludChkaXNwby50ZXh0KCkpXG5cbiAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2ludGVyZGl0JykpIHtcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdibG9xdWVyY3JlbmVhdV9pbnRlcmRpdCcpXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYmxvcXVlcmNyZW5lYXVfZXZpdGVyJylcbiAgICBuYl9pbnRlcmRpdC0tXG4gICAgbmJfZXZpdGVyKytcbiAgICB1cGRhdGVEaXNwb25pYmlsaXRlKGpvdXIsIGhldXJlLCdFJylcbiAgfSBlbHNlIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdibG9xdWVyY3JlbmVhdV9ldml0ZXInKSkge1xuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2Jsb3F1ZXJjcmVuZWF1X2V2aXRlcicpXG4gICAgbmJfZXZpdGVyLS1cbiAgICBuYl9kaXNwbysrXG4gICAgdXBkYXRlRGlzcG9uaWJpbGl0ZShqb3VyLCBoZXVyZSwnRCcpXG4gIH0gZWxzZSB7XG5cbiAgICAkKHRoaXMpLmFkZENsYXNzKCdibG9xdWVyY3JlbmVhdV9pbnRlcmRpdCcpXG4gICAgbmJfaW50ZXJkaXQrK1xuICAgIG5iX2Rpc3BvLS1cbiAgICB1cGRhdGVEaXNwb25pYmlsaXRlKGpvdXIsIGhldXJlLCdJJylcbiAgfVxuXG4gIGludGVyZGl0LnRleHQobmJfaW50ZXJkaXQpXG4gIGV2aXRlci50ZXh0KG5iX2V2aXRlcilcbiAgZGlzcG8udGV4dChuYl9kaXNwbylcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZURpc3BvbmliaWxpdGUoJGpvdXIsICRoZXVyZSwgJGV0YXQpe1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwbGljYXRpb25fcGVyc29ubmVsX2Rpc3BvbmliaWxpdGVfdXBkYXRlJyksXG4gICAgZGF0YTp7XG4gICAgICBqb3VyOiAkam91cixcbiAgICAgIGhldXJlOiAkaGV1cmUsXG4gICAgICBldGF0OiAkZXRhdFxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCdcbiAgfSlcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ3JlbmVhdSgkdHlwZSwgJGNyLCAkc2VtYWluZSl7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9jcmVuZWF1X2Jsb3F1ZV9tb2RpZmllX2V0YXQnKSxcbiAgICBkYXRhOntcbiAgICAgIGNyZW5lYXU6ICRjcixcbiAgICAgIHR5cGU6ICR0eXBlLFxuICAgICAgc2VtYWluZTogJHNlbWFpbmVcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pXG59XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgaGV4ID0gL15bKy1dPzBbWHhdLztcbnZhciBGT1JDRUQgPSAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMjtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlSW50KHN0cmluZywgcmFkaXgpIHtcbiAgdmFyIFMgPSB0cmltKFN0cmluZyhzdHJpbmcpKTtcbiAgcmV0dXJuICRwYXJzZUludChTLCAocmFkaXggPj4+IDApIHx8IChoZXgudGVzdChTKSA/IDE2IDogMTApKTtcbn0gOiAkcGFyc2VJbnQ7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBwYXJzZUludEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQnKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlSW50ICE9IHBhcnNlSW50SW1wbGVtZW50YXRpb24gfSwge1xuICBwYXJzZUludDogcGFyc2VJbnRJbXBsZW1lbnRhdGlvblxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9