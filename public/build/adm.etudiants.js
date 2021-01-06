(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adm.etudiants"],{

/***/ "./assets/js/lang/fr.js":
/*!******************************!*\
  !*** ./assets/js/lang/fr.js ***!
  \******************************/
/*! exports provided: dataTableLangueFr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataTableLangueFr", function() { return dataTableLangueFr; });
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _vendor_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vendor/datatables */ "./assets/vendor/datatables/index.js");
/* harmony import */ var _lang_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lang/fr */ "./assets/js/lang/fr.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.etudiants.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 27/08/2020 15:59


var table = $('#datatableEtudiants').DataTable({});
table.clear(); //effacer le datatable

table.destroy(); //supprimer le datatable

$('#datatableEtudiants').DataTable({
  'language': _lang_fr__WEBPACK_IMPORTED_MODULE_1__["dataTableLangueFr"],
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "./node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ })

},[["./assets/js/pages/adm.etudiants.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~b8aa102b","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~b8fda26e","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~92da351e","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~14b603b0","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~adm.stage~agenda~app~covid~datata~8156d9a8","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~adm.stage~agenda~app~covid~datata~b17950a4","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~agenda~app~datatable~sadm.personn~4a6dcf60","vendors~absences~adm.absences~adm.etudiants~adm.personnels~agenda~datatable~sadm.personnels~sadmCovid","absences~adm.absences~adm.etudiants~adm.personnels~agenda~datatable~sadm.personnels~sadmCovid"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGFuZy9mci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLmV0dWRpYW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnRyaW0uanMiXSwibmFtZXMiOlsiZGF0YVRhYmxlTGFuZ3VlRnIiLCJ0YWJsZSIsIiQiLCJEYXRhVGFibGUiLCJjbGVhciIsImRlc3Ryb3kiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJkb2N1bWVudCIsIm9uIiwiYWpheCIsInVybCIsInV1aWQiLCJkYXRhIiwiZXRhdCIsInZhbCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJpZCIsImZpZWxkIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGlCQUFpQixHQUFHO0FBQy9CLGFBQVcsRUFEb0I7QUFFL0IsZ0JBQWMsaURBRmlCO0FBRy9CLFVBQVEsaUdBSHVCO0FBSS9CLGVBQWEsZ0ZBSmtCO0FBSy9CLGtCQUFnQiwwREFMZTtBQU0vQixpQkFBZSxFQU5nQjtBQU8vQixlQUFhLEdBUGtCO0FBUS9CLGdCQUFjLHdDQVJpQjtBQVMvQixvQkFBa0Isd0JBVGE7QUFVL0IsZ0JBQWMsd0JBVmlCO0FBVy9CLFlBQVUsbUJBWHFCO0FBWS9CLGlCQUFlLCtDQVpnQjtBQWEvQixjQUFZO0FBQ1YsYUFBUyxTQURDO0FBRVYsWUFBUSxTQUZFO0FBR1YsWUFBUSxTQUhFO0FBSVYsZ0JBQVk7QUFKRixHQWJtQjtBQW1CL0IsVUFBUTtBQUNOLHFCQUFpQixxREFEWDtBQUVOLHNCQUFrQjtBQUZaO0FBbkJ1QixDQUExQixDOzs7Ozs7Ozs7Ozs7QUNOUDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1DLEtBQUssR0FBR0MsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJDLFNBQXpCLENBQW1DLEVBQW5DLENBQWQ7QUFDQUYsS0FBSyxDQUFDRyxLQUFOLEcsQ0FBYzs7QUFDZEgsS0FBSyxDQUFDSSxPQUFOLEcsQ0FBZ0I7O0FBRWhCSCxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QkMsU0FBekIsQ0FBbUM7QUFDakMsY0FBWUgsMERBRHFCO0FBRWpDLGdCQUFjLElBRm1CO0FBR2pDLGdCQUFjLElBSG1CO0FBSWpDLFVBQVFNLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQiwwQkFBakIsQ0FKeUI7QUFLakMsbUJBQWlCLE1BTGdCO0FBTWpDLFdBQVMsQ0FBQyxDQUFDLENBQUQsRUFBSSxLQUFKLENBQUQsRUFBYSxDQUFDLENBQUQsRUFBSSxLQUFKLENBQWIsQ0FOd0I7QUFPakMsZ0JBQWMsRUFQbUI7QUFRakMsYUFBVyxDQUNUO0FBQUMsWUFBUTtBQUFULEdBRFMsRUFFVDtBQUFDLFlBQVE7QUFBVCxHQUZTLEVBR1Q7QUFBQyxZQUFRO0FBQVQsR0FIUyxFQUlUO0FBQUMsWUFBUTtBQUFULEdBSlMsRUFLVDtBQUFDLFlBQVE7QUFBVCxHQUxTLEVBTVQ7QUFBQyxZQUFRO0FBQVQsR0FOUztBQVJzQixDQUFuQztBQWtCQUwsQ0FBQyxDQUFDTSxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLFFBQWYsRUFBeUIsYUFBekIsRUFBd0MsWUFBWTtBQUNsRFAsR0FBQyxDQUFDUSxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFTCxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsMEJBQWpCLEVBQTZDO0FBQUNLLFVBQUksRUFBRVYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVyxJQUFSLENBQWEsVUFBYixDQUFQO0FBQWlDQyxVQUFJLEVBQUVaLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWEsR0FBUjtBQUF2QyxLQUE3QyxDQURBO0FBRUxDLFVBQU0sRUFBRSxNQUZIO0FBR0xDLFdBQU8sRUFBRSxtQkFBWSxDQUVwQjtBQUxJLEdBQVA7QUFPRCxDQVJEO0FBVUFmLENBQUMsQ0FBQ00sUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxRQUFmLEVBQXlCLGVBQXpCLEVBQTBDLFlBQVk7QUFDcERQLEdBQUMsQ0FBQ1EsSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUwsT0FBTyxDQUFDQyxRQUFSLENBQWlCLHdCQUFqQixFQUEyQztBQUFDVyxRQUFFLEVBQUVoQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFXLElBQVIsQ0FBYSxVQUFiO0FBQUwsS0FBM0MsQ0FEQTtBQUVMRyxVQUFNLEVBQUUsTUFGSDtBQUdMSCxRQUFJLEVBQUU7QUFDSk0sV0FBSyxFQUFFakIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVyxJQUFSLENBQWEsT0FBYixDQURIO0FBRUpPLFdBQUssRUFBRWxCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWEsR0FBUjtBQUZILEtBSEQ7QUFPTEUsV0FBTyxFQUFFLG1CQUFZLENBQ3BCO0FBUkksR0FBUDtBQVVELENBWEQsRTs7Ozs7Ozs7Ozs7O0FDeENBLFlBQVksbUJBQU8sQ0FBQyxxRUFBb0I7QUFDeEMsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDWGE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFlBQVksbUJBQU8sQ0FBQyxpRkFBMEI7QUFDOUMsNkJBQTZCLG1CQUFPLENBQUMsK0ZBQWlDOztBQUV0RTtBQUNBO0FBQ0EsR0FBRyx3RUFBd0U7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJhZG0uZXR1ZGlhbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL2xhbmcvZnIuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyMi8wNy8yMDIwIDE1OjEwXG5cbmV4cG9ydCBjb25zdCBkYXRhVGFibGVMYW5ndWVGciA9IHtcbiAgJ2RlY2ltYWwnOiAnJyxcbiAgJ2VtcHR5VGFibGUnOiAnQXVjdW5lIGRvbm4mZWFjdXRlO2UgZGlzcG9uaWJsZSBkYW5zIGxlIHRhYmxlYXUnLFxuICAnaW5mbyc6ICdBZmZpY2hhZ2UgZGUgbFxcJyZlYWN1dGU7bCZlYWN1dGU7bWVudCBfU1RBUlRfICZhZ3JhdmU7IF9FTkRfIHN1ciBfVE9UQUxfICZlYWN1dGU7bCZlYWN1dGU7bWVudHMnLFxuICAnaW5mb0VtcHR5JzogJ0FmZmljaGFnZSBkZSBsXFwnJmVhY3V0ZTtsJmVhY3V0ZTttZW50IDAgJmFncmF2ZTsgMCBzdXIgMCAmZWFjdXRlO2wmZWFjdXRlO21lbnQnLFxuICAnaW5mb0ZpbHRlcmVkJzogJyhmaWx0ciZlYWN1dGU7IGRlIF9NQVhfICZlYWN1dGU7bCZlYWN1dGU7bWVudHMgYXUgdG90YWwpJyxcbiAgJ2luZm9Qb3N0Rml4JzogJycsXG4gICd0aG91c2FuZHMnOiAnLCcsXG4gICdsZW5ndGhNZW51JzogJ0FmZmljaGVyIF9NRU5VXyAmZWFjdXRlO2wmZWFjdXRlO21lbnRzJyxcbiAgJ2xvYWRpbmdSZWNvcmRzJzogJ0NoYXJnZW1lbnQgZW4gY291cnMuLi4nLFxuICAncHJvY2Vzc2luZyc6ICdUcmFpdGVtZW50IGVuIGNvdXJzLi4uJyxcbiAgJ3NlYXJjaCc6ICdSZWNoZXJjaGVyJm5ic3A7OicsXG4gICd6ZXJvUmVjb3Jkcyc6ICdBdWN1biAmZWFjdXRlO2wmZWFjdXRlO21lbnQgJmFncmF2ZTsgYWZmaWNoZXInLFxuICAncGFnaW5hdGUnOiB7XG4gICAgJ2ZpcnN0JzogJ1ByZW1pZXInLFxuICAgICdsYXN0JzogJ0Rlcm5pZXInLFxuICAgICduZXh0JzogJ1N1aXZhbnQnLFxuICAgICdwcmV2aW91cyc6ICdQciZlYWN1dGU7YyZlYWN1dGU7ZGVudCdcbiAgfSxcbiAgJ2FyaWEnOiB7XG4gICAgJ3NvcnRBc2NlbmRpbmcnOiAnOiBhY3RpdmVyIHBvdXIgdHJpZXIgbGEgY29sb25uZSBwYXIgb3JkcmUgY3JvaXNzYW50JyxcbiAgICAnc29ydERlc2NlbmRpbmcnOiAnOiBhY3RpdmVyIHBvdXIgdHJpZXIgbGEgY29sb25uZSBwYXIgb3JkcmUgZCZlYWN1dGU7Y3JvaXNzYW50J1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvYWRtLmV0dWRpYW50cy5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDI3LzA4LzIwMjAgMTU6NTlcbmltcG9ydCAnLi4vLi4vdmVuZG9yL2RhdGF0YWJsZXMnXG5pbXBvcnQge2RhdGFUYWJsZUxhbmd1ZUZyfSBmcm9tICcuLi9sYW5nL2ZyJ1xuXG5jb25zdCB0YWJsZSA9ICQoJyNkYXRhdGFibGVFdHVkaWFudHMnKS5EYXRhVGFibGUoe30pXG50YWJsZS5jbGVhcigpIC8vZWZmYWNlciBsZSBkYXRhdGFibGVcbnRhYmxlLmRlc3Ryb3koKSAvL3N1cHByaW1lciBsZSBkYXRhdGFibGVcblxuJCgnI2RhdGF0YWJsZUV0dWRpYW50cycpLkRhdGFUYWJsZSh7XG4gICdsYW5ndWFnZSc6IGRhdGFUYWJsZUxhbmd1ZUZyLFxuICAncHJvY2Vzc2luZyc6IHRydWUsXG4gICdzZXJ2ZXJTaWRlJzogdHJ1ZSxcbiAgJ2FqYXgnOiBSb3V0aW5nLmdlbmVyYXRlKCdhcGlfZXR1ZGlhbnRfZGVwYXJ0ZW1lbnQnKSxcbiAgJ3NBamF4RGF0YVByb3AnOiAnZGF0YScsXG4gICdvcmRlcic6IFtbMSwgJ2FzYyddLCBbMiwgJ2FzYyddXSxcbiAgJ3BhZ2VMZW5ndGgnOiAyNSxcbiAgJ2NvbHVtbnMnOiBbXG4gICAgeydkYXRhJzogJ251bWV0dWRpYW50J30sXG4gICAgeydkYXRhJzogJ25vbSd9LFxuICAgIHsnZGF0YSc6ICdwcmVub20nfSxcbiAgICB7J2RhdGEnOiAnc2VtZXN0cmUnfSxcbiAgICB7J2RhdGEnOiAnZXRhdCd9LFxuICAgIHsnZGF0YSc6ICdwcm9maWwnfV1cbn0pXG5cblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuY2hhbmdlRXRhdCcsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbV9ldHVkaWFudF9jaGFuZ2VfZXRhdCcsIHt1dWlkOiAkKHRoaXMpLmRhdGEoJ2V0dWRpYW50JyksIGV0YXQ6ICQodGhpcykudmFsKCl9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG5cbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5lZGl0RXR1ZGlhbnQnLCBmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1fZXR1ZGlhbnRfZWRpdF9hamF4Jywge2lkOiAkKHRoaXMpLmRhdGEoJ2V0dWRpYW50Jyl9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7XG4gICAgICBmaWVsZDogJCh0aGlzKS5kYXRhKCdmaWVsZCcpLFxuICAgICAgdmFsdWU6ICQodGhpcykudmFsKClcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICB9XG4gIH0pXG59KVxuXG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgbm9uID0gJ1xcdTIwMEJcXHUwMDg1XFx1MTgwRSc7XG5cbi8vIGNoZWNrIHRoYXQgYSBtZXRob2Qgd29ya3Mgd2l0aCB0aGUgY29ycmVjdCBsaXN0XG4vLyBvZiB3aGl0ZXNwYWNlcyBhbmQgaGFzIGEgY29ycmVjdCBuYW1lXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICByZXR1cm4gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXdoaXRlc3BhY2VzW01FVEhPRF9OQU1FXSgpIHx8IG5vbltNRVRIT0RfTkFNRV0oKSAhPSBub24gfHwgd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdLm5hbWUgIT09IE1FVEhPRF9OQU1FO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbS1mb3JjZWQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBmb3JjZWRTdHJpbmdUcmltTWV0aG9kKCd0cmltJykgfSwge1xuICB0cmltOiBmdW5jdGlvbiB0cmltKCkge1xuICAgIHJldHVybiAkdHJpbSh0aGlzKTtcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9