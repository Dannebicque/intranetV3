(self["webpackChunk"] = self["webpackChunk"] || []).push([["adm.etudiants"],{

/***/ "./assets/js/lang/fr.js":
/*!******************************!*\
  !*** ./assets/js/lang/fr.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataTableLangueFr": () => (/* binding */ dataTableLangueFr)
/* harmony export */ });
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/lang/fr.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 22/07/2020 15:10
var dataTableLangueFr = {
  'decimal': '',
  'emptyTable': 'Aucune donn&eacute;e disponible dans le tableau',
  'info': 'Affichage de l\'&eacute;l&eacute;ment _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments',
  'infoEmpty': 'Affichage de l\'&eacute;l&eacute;ment 0 &agrave; 0 sur 0 &eacute;l&eacute;ment',
  'infoFiltered': '(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)',
  'infoPostFix': '',
  'thousands': ',',
  'lengthMenu': 'Afficher _MENU_ &eacute;l&eacute;ments',
  'loadingRecords': 'Chargement en cours...',
  'processing': 'Traitement en cours...',
  'search': 'Rechercher&nbsp;:',
  'zeroRecords': 'Aucun &eacute;l&eacute;ment &agrave; afficher',
  'paginate': {
    'first': 'Premier',
    'last': 'Dernier',
    'next': 'Suivant',
    'previous': 'Pr&eacute;c&eacute;dent'
  },
  'aria': {
    'sortAscending': ': activer pour trier la colonne par ordre croissant',
    'sortDescending': ': activer pour trier la colonne par ordre d&eacute;croissant'
  }
};

/***/ }),

/***/ "./assets/js/pages/adm.etudiants.js":
/*!******************************************!*\
  !*** ./assets/js/pages/adm.etudiants.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vendor/datatables */ "./assets/vendor/datatables/index.js");
/* harmony import */ var _lang_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lang/fr */ "./assets/js/lang/fr.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.etudiants.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 27/08/2020 15:59


var table = $('#datatableEtudiants').DataTable({});
table.clear(); //effacer le datatable

table.destroy(); //supprimer le datatable

$('#datatableEtudiants').DataTable({
  'language': _lang_fr__WEBPACK_IMPORTED_MODULE_1__.dataTableLangueFr,
  'processing': true,
  'serverSide': true,
  'ajax': Routing.generate('api_etudiant_departement'),
  'sAjaxDataProp': 'data',
  'order': [[1, 'asc'], [2, 'asc']],
  'pageLength': 25,
  'columns': [{
    'data': 'numetudiant'
  }, {
    'data': 'nom'
  }, {
    'data': 'prenom'
  }, {
    'data': 'semestre'
  }, {
    'data': 'etat'
  }, {
    'data': 'profil'
  }]
});
$(document).on('change', '.changeEtat', function () {
  $.ajax({
    url: Routing.generate('adm_etudiant_change_etat', {
      uuid: $(this).data('etudiant'),
      etat: $(this).val()
    }),
    method: 'POST',
    success: function success() {}
  });
});
$(document).on('change', '.editEtudiant', function () {
  $.ajax({
    url: Routing.generate('adm_etudiant_edit_ajax', {
      id: $(this).data('etudiant')
    }),
    method: 'POST',
    data: {
      field: $(this).data('field'),
      value: $(this).val()
    },
    success: function success() {}
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "./node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ })

},
0,[["./assets/js/pages/adm.etudiants.js","runtime","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_modules_es_string_split_js","vendors-node_modules_core-js_internals_inherit-if-required_js-node_modules_core-js_internals_-f30b81","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_s-c0b602","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-3f7266","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-2411fb","vendors-node_modules_core-js_modules_es_array_last-index-of_js-node_modules_core-js_modules_e-f7d21d","assets_vendor_datatables_index_js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGFuZy9mci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLmV0dWRpYW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnRyaW0uanMiXSwibmFtZXMiOlsiZGF0YVRhYmxlTGFuZ3VlRnIiLCJ0YWJsZSIsIiQiLCJEYXRhVGFibGUiLCJjbGVhciIsImRlc3Ryb3kiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJkb2N1bWVudCIsIm9uIiwiYWpheCIsInVybCIsInV1aWQiLCJkYXRhIiwiZXRhdCIsInZhbCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJpZCIsImZpZWxkIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsaUJBQWlCLEdBQUc7QUFDL0IsYUFBVyxFQURvQjtBQUUvQixnQkFBYyxpREFGaUI7QUFHL0IsVUFBUSxpR0FIdUI7QUFJL0IsZUFBYSxnRkFKa0I7QUFLL0Isa0JBQWdCLDBEQUxlO0FBTS9CLGlCQUFlLEVBTmdCO0FBTy9CLGVBQWEsR0FQa0I7QUFRL0IsZ0JBQWMsd0NBUmlCO0FBUy9CLG9CQUFrQix3QkFUYTtBQVUvQixnQkFBYyx3QkFWaUI7QUFXL0IsWUFBVSxtQkFYcUI7QUFZL0IsaUJBQWUsK0NBWmdCO0FBYS9CLGNBQVk7QUFDVixhQUFTLFNBREM7QUFFVixZQUFRLFNBRkU7QUFHVixZQUFRLFNBSEU7QUFJVixnQkFBWTtBQUpGLEdBYm1CO0FBbUIvQixVQUFRO0FBQ04scUJBQWlCLHFEQURYO0FBRU4sc0JBQWtCO0FBRlo7QUFuQnVCLENBQTFCLEM7Ozs7Ozs7Ozs7Ozs7OztBQ05QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUMsS0FBSyxHQUFHQyxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QkMsU0FBekIsQ0FBbUMsRUFBbkMsQ0FBZDtBQUNBRixLQUFLLENBQUNHLEtBQU4sRyxDQUFjOztBQUNkSCxLQUFLLENBQUNJLE9BQU4sRyxDQUFnQjs7QUFFaEJILENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCQyxTQUF6QixDQUFtQztBQUNqQyxjQUFZSCx1REFEcUI7QUFFakMsZ0JBQWMsSUFGbUI7QUFHakMsZ0JBQWMsSUFIbUI7QUFJakMsVUFBUU0sT0FBTyxDQUFDQyxRQUFSLENBQWlCLDBCQUFqQixDQUp5QjtBQUtqQyxtQkFBaUIsTUFMZ0I7QUFNakMsV0FBUyxDQUFDLENBQUMsQ0FBRCxFQUFJLEtBQUosQ0FBRCxFQUFhLENBQUMsQ0FBRCxFQUFJLEtBQUosQ0FBYixDQU53QjtBQU9qQyxnQkFBYyxFQVBtQjtBQVFqQyxhQUFXLENBQ1Q7QUFBQyxZQUFRO0FBQVQsR0FEUyxFQUVUO0FBQUMsWUFBUTtBQUFULEdBRlMsRUFHVDtBQUFDLFlBQVE7QUFBVCxHQUhTLEVBSVQ7QUFBQyxZQUFRO0FBQVQsR0FKUyxFQUtUO0FBQUMsWUFBUTtBQUFULEdBTFMsRUFNVDtBQUFDLFlBQVE7QUFBVCxHQU5TO0FBUnNCLENBQW5DO0FBa0JBTCxDQUFDLENBQUNNLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsUUFBZixFQUF5QixhQUF6QixFQUF3QyxZQUFZO0FBQ2xEUCxHQUFDLENBQUNRLElBQUYsQ0FBTztBQUNMQyxPQUFHLEVBQUVMLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQiwwQkFBakIsRUFBNkM7QUFBQ0ssVUFBSSxFQUFFVixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFXLElBQVIsQ0FBYSxVQUFiLENBQVA7QUFBaUNDLFVBQUksRUFBRVosQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYSxHQUFSO0FBQXZDLEtBQTdDLENBREE7QUFFTEMsVUFBTSxFQUFFLE1BRkg7QUFHTEMsV0FBTyxFQUFFLG1CQUFZLENBRXBCO0FBTEksR0FBUDtBQU9ELENBUkQ7QUFVQWYsQ0FBQyxDQUFDTSxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLFFBQWYsRUFBeUIsZUFBekIsRUFBMEMsWUFBWTtBQUNwRFAsR0FBQyxDQUFDUSxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFTCxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsd0JBQWpCLEVBQTJDO0FBQUNXLFFBQUUsRUFBRWhCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVcsSUFBUixDQUFhLFVBQWI7QUFBTCxLQUEzQyxDQURBO0FBRUxHLFVBQU0sRUFBRSxNQUZIO0FBR0xILFFBQUksRUFBRTtBQUNKTSxXQUFLLEVBQUVqQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFXLElBQVIsQ0FBYSxPQUFiLENBREg7QUFFSk8sV0FBSyxFQUFFbEIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYSxHQUFSO0FBRkgsS0FIRDtBQU9MRSxXQUFPLEVBQUUsbUJBQVksQ0FDcEI7QUFSSSxHQUFQO0FBVUQsQ0FYRCxFOzs7Ozs7Ozs7O0FDeENBLFlBQVksbUJBQU8sQ0FBQyxxRUFBb0I7QUFDeEMsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNYYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsWUFBWSwyR0FBd0M7QUFDcEQsNkJBQTZCLG1CQUFPLENBQUMsK0ZBQWlDOztBQUV0RTtBQUNBO0FBQ0EsR0FBRyx3RUFBd0U7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJhZG0uZXR1ZGlhbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL2xhbmcvZnIuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyMi8wNy8yMDIwIDE1OjEwXG5cbmV4cG9ydCBjb25zdCBkYXRhVGFibGVMYW5ndWVGciA9IHtcbiAgJ2RlY2ltYWwnOiAnJyxcbiAgJ2VtcHR5VGFibGUnOiAnQXVjdW5lIGRvbm4mZWFjdXRlO2UgZGlzcG9uaWJsZSBkYW5zIGxlIHRhYmxlYXUnLFxuICAnaW5mbyc6ICdBZmZpY2hhZ2UgZGUgbFxcJyZlYWN1dGU7bCZlYWN1dGU7bWVudCBfU1RBUlRfICZhZ3JhdmU7IF9FTkRfIHN1ciBfVE9UQUxfICZlYWN1dGU7bCZlYWN1dGU7bWVudHMnLFxuICAnaW5mb0VtcHR5JzogJ0FmZmljaGFnZSBkZSBsXFwnJmVhY3V0ZTtsJmVhY3V0ZTttZW50IDAgJmFncmF2ZTsgMCBzdXIgMCAmZWFjdXRlO2wmZWFjdXRlO21lbnQnLFxuICAnaW5mb0ZpbHRlcmVkJzogJyhmaWx0ciZlYWN1dGU7IGRlIF9NQVhfICZlYWN1dGU7bCZlYWN1dGU7bWVudHMgYXUgdG90YWwpJyxcbiAgJ2luZm9Qb3N0Rml4JzogJycsXG4gICd0aG91c2FuZHMnOiAnLCcsXG4gICdsZW5ndGhNZW51JzogJ0FmZmljaGVyIF9NRU5VXyAmZWFjdXRlO2wmZWFjdXRlO21lbnRzJyxcbiAgJ2xvYWRpbmdSZWNvcmRzJzogJ0NoYXJnZW1lbnQgZW4gY291cnMuLi4nLFxuICAncHJvY2Vzc2luZyc6ICdUcmFpdGVtZW50IGVuIGNvdXJzLi4uJyxcbiAgJ3NlYXJjaCc6ICdSZWNoZXJjaGVyJm5ic3A7OicsXG4gICd6ZXJvUmVjb3Jkcyc6ICdBdWN1biAmZWFjdXRlO2wmZWFjdXRlO21lbnQgJmFncmF2ZTsgYWZmaWNoZXInLFxuICAncGFnaW5hdGUnOiB7XG4gICAgJ2ZpcnN0JzogJ1ByZW1pZXInLFxuICAgICdsYXN0JzogJ0Rlcm5pZXInLFxuICAgICduZXh0JzogJ1N1aXZhbnQnLFxuICAgICdwcmV2aW91cyc6ICdQciZlYWN1dGU7YyZlYWN1dGU7ZGVudCdcbiAgfSxcbiAgJ2FyaWEnOiB7XG4gICAgJ3NvcnRBc2NlbmRpbmcnOiAnOiBhY3RpdmVyIHBvdXIgdHJpZXIgbGEgY29sb25uZSBwYXIgb3JkcmUgY3JvaXNzYW50JyxcbiAgICAnc29ydERlc2NlbmRpbmcnOiAnOiBhY3RpdmVyIHBvdXIgdHJpZXIgbGEgY29sb25uZSBwYXIgb3JkcmUgZCZlYWN1dGU7Y3JvaXNzYW50J1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvYWRtLmV0dWRpYW50cy5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDI3LzA4LzIwMjAgMTU6NTlcbmltcG9ydCAnLi4vLi4vdmVuZG9yL2RhdGF0YWJsZXMnXG5pbXBvcnQge2RhdGFUYWJsZUxhbmd1ZUZyfSBmcm9tICcuLi9sYW5nL2ZyJ1xuXG5jb25zdCB0YWJsZSA9ICQoJyNkYXRhdGFibGVFdHVkaWFudHMnKS5EYXRhVGFibGUoe30pXG50YWJsZS5jbGVhcigpIC8vZWZmYWNlciBsZSBkYXRhdGFibGVcbnRhYmxlLmRlc3Ryb3koKSAvL3N1cHByaW1lciBsZSBkYXRhdGFibGVcblxuJCgnI2RhdGF0YWJsZUV0dWRpYW50cycpLkRhdGFUYWJsZSh7XG4gICdsYW5ndWFnZSc6IGRhdGFUYWJsZUxhbmd1ZUZyLFxuICAncHJvY2Vzc2luZyc6IHRydWUsXG4gICdzZXJ2ZXJTaWRlJzogdHJ1ZSxcbiAgJ2FqYXgnOiBSb3V0aW5nLmdlbmVyYXRlKCdhcGlfZXR1ZGlhbnRfZGVwYXJ0ZW1lbnQnKSxcbiAgJ3NBamF4RGF0YVByb3AnOiAnZGF0YScsXG4gICdvcmRlcic6IFtbMSwgJ2FzYyddLCBbMiwgJ2FzYyddXSxcbiAgJ3BhZ2VMZW5ndGgnOiAyNSxcbiAgJ2NvbHVtbnMnOiBbXG4gICAgeydkYXRhJzogJ251bWV0dWRpYW50J30sXG4gICAgeydkYXRhJzogJ25vbSd9LFxuICAgIHsnZGF0YSc6ICdwcmVub20nfSxcbiAgICB7J2RhdGEnOiAnc2VtZXN0cmUnfSxcbiAgICB7J2RhdGEnOiAnZXRhdCd9LFxuICAgIHsnZGF0YSc6ICdwcm9maWwnfV1cbn0pXG5cblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuY2hhbmdlRXRhdCcsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbV9ldHVkaWFudF9jaGFuZ2VfZXRhdCcsIHt1dWlkOiAkKHRoaXMpLmRhdGEoJ2V0dWRpYW50JyksIGV0YXQ6ICQodGhpcykudmFsKCl9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG5cbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5lZGl0RXR1ZGlhbnQnLCBmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1fZXR1ZGlhbnRfZWRpdF9hamF4Jywge2lkOiAkKHRoaXMpLmRhdGEoJ2V0dWRpYW50Jyl9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7XG4gICAgICBmaWVsZDogJCh0aGlzKS5kYXRhKCdmaWVsZCcpLFxuICAgICAgdmFsdWU6ICQodGhpcykudmFsKClcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICB9XG4gIH0pXG59KVxuXG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgbm9uID0gJ1xcdTIwMEJcXHUwMDg1XFx1MTgwRSc7XG5cbi8vIGNoZWNrIHRoYXQgYSBtZXRob2Qgd29ya3Mgd2l0aCB0aGUgY29ycmVjdCBsaXN0XG4vLyBvZiB3aGl0ZXNwYWNlcyBhbmQgaGFzIGEgY29ycmVjdCBuYW1lXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICByZXR1cm4gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXdoaXRlc3BhY2VzW01FVEhPRF9OQU1FXSgpIHx8IG5vbltNRVRIT0RfTkFNRV0oKSAhPSBub24gfHwgd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdLm5hbWUgIT09IE1FVEhPRF9OQU1FO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbS1mb3JjZWQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IGZvcmNlZFN0cmluZ1RyaW1NZXRob2QoJ3RyaW0nKSB9LCB7XG4gIHRyaW06IGZ1bmN0aW9uIHRyaW0oKSB7XG4gICAgcmV0dXJuICR0cmltKHRoaXMpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=