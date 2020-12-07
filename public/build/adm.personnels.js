(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adm.personnels"],{

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

/***/ "./assets/js/pages/adm.personnels.js":
/*!*******************************************!*\
  !*** ./assets/js/pages/adm.personnels.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony import */ var _vendor_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vendor/datatables */ "./assets/vendor/datatables/index.js");
/* harmony import */ var _lang_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lang/fr */ "./assets/js/lang/fr.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.personnels.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 22/10/2020 15:56


$(document).ready(function () {
  $('#tableau').DataTable({
    'langue': _lang_fr__WEBPACK_IMPORTED_MODULE_1__["dataTableLangueFr"]
  }); //regenerer le datatable avec les nouvelles data
});
$(document).on('keyup', '#login_urca', function () {
  var $val = $(this).val();

  if ($val.length > 2) {
    $.ajax({
      url: Routing.generate('api_personnel_recherche', {
        needle: $val
      }),
      dataType: 'json',
      success: function success(data) {
        var html = '';
        $('#result').empty();
        jQuery.each(data, function (index, pers) {
          html = html + '<tr>' + '<td>' + pers.nom + '</td>' + '<td>' + pers.prenom + '</td>' + '<td>' + pers.numeroHarpege + '</td>' + '<td>' + pers.username + '</td>' + '<td>' + pers.mail_univ + '</td>' + '<td><a href="#" class="btn btn-success btn-outline btn-square addpersonnel" data-provide="tooltip" data-placement="bottom" title="Ajouter au departement" data-slug="' + pers.slug + '"><i class="fas fa-plus"></i></a></td>' + '</tr>';
        });
        html = html + '<tr>' + '<td colspan="6"><a href="' + Routing.generate('administration_personnel_create') + '" class="btn btn-success btn-block" data-provide="tooltip" data-placement="bottom" title="Ajouter un intervenant"><i class="fas fa-plus"></i> Si l\'internvenant n\'est pas présent dans l\'intranet vous pouvez l\'ajouter</a></td>' + '</tr>';
        $('#result').append(html);
      }
    });
  }
});
$(document).on('click', '.addpersonnel', function () {
  $.ajax({
    url: Routing.generate('api_personnel_add_to_departement', {
      slug: $(this).data('slug')
    }),
    dataType: 'json',
    success: function success(data) {
      console.log(data);
      addCallout('Personnel ajouté au département !', 'success');
    }
  });
});
$(document).on('click', '.personnel_index_change', function () {
  $('.personnel_index_change').removeClass('active show');
  $(this).addClass('active show');
  var $type = $(this).data('type');
  $('#listePersonnel').load(Routing.generate('administration_personnel_load_liste', {
    type: $type
  }), function () {
    $('#tableau').DataTable({
      language: _lang_fr__WEBPACK_IMPORTED_MODULE_1__["dataTableLangueFr"]
    });
    $('#export_csv').attr('href', Routing.generate('administration_personnel_export', {
      type: $type,
      '_format': 'csv'
    }));
    $('#export_xlsx').attr('href', Routing.generate('administration_personnel_export', {
      type: $type,
      '_format': 'xlsx'
    }));
    $('#export_pdf').attr('href', Routing.generate('administration_personnel_export', {
      type: $type,
      '_format': 'pdf'
    }));
  });
});
$(document).on('change', '.updateRole', function () {
  $.ajax({
    url: Routing.generate('admin_personnel_departement_modifier_droit', {
      personnel: $('#personnel').val()
    }),
    method: 'POST',
    data: {
      'droit': $(this).val()
    },
    success: function success(data) {
      addCallout('Droits modifiés !', 'success');
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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

},[["./assets/js/pages/adm.personnels.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~b8aa102b","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~b8fda26e","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~92da351e","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~14b603b0","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~adm.stage~agenda~app~covid~datata~8156d9a8","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~adm.stage~agenda~app~covid~datata~b17950a4","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~agenda~app~datatable~sadm.personn~4a6dcf60","vendors~absences~adm.absences~adm.etudiants~adm.personnels~agenda~datatable~sadm.personnels~sadmCovid","absences~adm.absences~adm.etudiants~adm.personnels~agenda~datatable~sadm.personnels~sadmCovid"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGFuZy9mci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLnBlcnNvbm5lbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy50cmltLmpzIl0sIm5hbWVzIjpbImRhdGFUYWJsZUxhbmd1ZUZyIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJEYXRhVGFibGUiLCJvbiIsIiR2YWwiLCJ2YWwiLCJsZW5ndGgiLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwibmVlZGxlIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwiZGF0YSIsImh0bWwiLCJlbXB0eSIsImpRdWVyeSIsImVhY2giLCJpbmRleCIsInBlcnMiLCJub20iLCJwcmVub20iLCJudW1lcm9IYXJwZWdlIiwidXNlcm5hbWUiLCJtYWlsX3VuaXYiLCJzbHVnIiwiYXBwZW5kIiwiY29uc29sZSIsImxvZyIsImFkZENhbGxvdXQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiJHR5cGUiLCJsb2FkIiwidHlwZSIsImxhbmd1YWdlIiwiYXR0ciIsInBlcnNvbm5lbCIsIm1ldGhvZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsaUJBQWlCLEdBQUc7QUFDL0IsYUFBVyxFQURvQjtBQUUvQixnQkFBYyxpREFGaUI7QUFHL0IsVUFBUSxpR0FIdUI7QUFJL0IsZUFBYSxnRkFKa0I7QUFLL0Isa0JBQWdCLDBEQUxlO0FBTS9CLGlCQUFlLEVBTmdCO0FBTy9CLGVBQWEsR0FQa0I7QUFRL0IsZ0JBQWMsd0NBUmlCO0FBUy9CLG9CQUFrQix3QkFUYTtBQVUvQixnQkFBYyx3QkFWaUI7QUFX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QUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlHLEVBQVosQ0FBZSxRQUFmLEVBQXlCLGFBQXpCLEVBQXdDLFlBQVk7QUFDbERKLEdBQUMsQ0FBQ1EsSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLDRDQUFqQixFQUErRDtBQUFDNEIsZUFBUyxFQUFFdkMsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQk0sR0FBaEI7QUFBWixLQUEvRCxDQURBO0FBRUxrQyxVQUFNLEVBQUUsTUFGSDtBQUdMekIsUUFBSSxFQUFFO0FBQUMsZUFBU2YsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxHQUFSO0FBQVYsS0FIRDtBQUlMUSxXQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBZ0I7QUFDdkJnQixnQkFBVSxDQUFDLG1CQUFELEVBQXNCLFNBQXRCLENBQVY7QUFDRDtBQU5JLEdBQVA7QUFRRCxDQVRELEU7Ozs7Ozs7Ozs7OztBQ2pGQSxZQUFZLG1CQUFPLENBQUMscUVBQW9CO0FBQ3hDLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ1hhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxZQUFZLG1CQUFPLENBQUMsaUZBQTBCO0FBQzlDLDZCQUE2QixtQkFBTyxDQUFDLCtGQUFpQzs7QUFFdEU7QUFDQTtBQUNBLEdBQUcsd0VBQXdFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYWRtLnBlcnNvbm5lbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvbGFuZy9mci5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDIyLzA3LzIwMjAgMTU6MTBcblxuZXhwb3J0IGNvbnN0IGRhdGFUYWJsZUxhbmd1ZUZyID0ge1xuICAnZGVjaW1hbCc6ICcnLFxuICAnZW1wdHlUYWJsZSc6ICdBdWN1bmUgZG9ubiZlYWN1dGU7ZSBkaXNwb25pYmxlIGRhbnMgbGUgdGFibGVhdScsXG4gICdpbmZvJzogJ0FmZmljaGFnZSBkZSBsXFwnJmVhY3V0ZTtsJmVhY3V0ZTttZW50IF9TVEFSVF8gJmFncmF2ZTsgX0VORF8gc3VyIF9UT1RBTF8gJmVhY3V0ZTtsJmVhY3V0ZTttZW50cycsXG4gICdpbmZvRW1wdHknOiAnQWZmaWNoYWdlIGRlIGxcXCcmZWFjdXRlO2wmZWFjdXRlO21lbnQgMCAmYWdyYXZlOyAwIHN1ciAwICZlYWN1dGU7bCZlYWN1dGU7bWVudCcsXG4gICdpbmZvRmlsdGVyZWQnOiAnKGZpbHRyJmVhY3V0ZTsgZGUgX01BWF8gJmVhY3V0ZTtsJmVhY3V0ZTttZW50cyBhdSB0b3RhbCknLFxuICAnaW5mb1Bvc3RGaXgnOiAnJyxcbiAgJ3Rob3VzYW5kcyc6ICcsJyxcbiAgJ2xlbmd0aE1lbnUnOiAnQWZmaWNoZXIgX01FTlVfICZlYWN1dGU7bCZlYWN1dGU7bWVudHMnLFxuICAnbG9hZGluZ1JlY29yZHMnOiAnQ2hhcmdlbWVudCBlbiBjb3Vycy4uLicsXG4gICdwcm9jZXNzaW5nJzogJ1RyYWl0ZW1lbnQgZW4gY291cnMuLi4nLFxuICAnc2VhcmNoJzogJ1JlY2hlcmNoZXImbmJzcDs6JyxcbiAgJ3plcm9SZWNvcmRzJzogJ0F1Y3VuICZlYWN1dGU7bCZlYWN1dGU7bWVudCAmYWdyYXZlOyBhZmZpY2hlcicsXG4gICdwYWdpbmF0ZSc6IHtcbiAgICAnZmlyc3QnOiAnUHJlbWllcicsXG4gICAgJ2xhc3QnOiAnRGVybmllcicsXG4gICAgJ25leHQnOiAnU3VpdmFudCcsXG4gICAgJ3ByZXZpb3VzJzogJ1ByJmVhY3V0ZTtjJmVhY3V0ZTtkZW50J1xuICB9LFxuICAnYXJpYSc6IHtcbiAgICAnc29ydEFzY2VuZGluZyc6ICc6IGFjdGl2ZXIgcG91ciB0cmllciBsYSBjb2xvbm5lIHBhciBvcmRyZSBjcm9pc3NhbnQnLFxuICAgICdzb3J0RGVzY2VuZGluZyc6ICc6IGFjdGl2ZXIgcG91ciB0cmllciBsYSBjb2xvbm5lIHBhciBvcmRyZSBkJmVhY3V0ZTtjcm9pc3NhbnQnXG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hZG0ucGVyc29ubmVscy5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDIyLzEwLzIwMjAgMTU6NTZcblxuaW1wb3J0ICcuLi8uLi92ZW5kb3IvZGF0YXRhYmxlcydcbmltcG9ydCB7ZGF0YVRhYmxlTGFuZ3VlRnJ9IGZyb20gJy4uL2xhbmcvZnInXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgJCgnI3RhYmxlYXUnKS5EYXRhVGFibGUoe1xuICAgICdsYW5ndWUnOiBkYXRhVGFibGVMYW5ndWVGclxuICB9KSAvL3JlZ2VuZXJlciBsZSBkYXRhdGFibGUgYXZlYyBsZXMgbm91dmVsbGVzIGRhdGFcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcjbG9naW5fdXJjYScsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgJHZhbCA9ICQodGhpcykudmFsKClcbiAgaWYgKCR2YWwubGVuZ3RoID4gMikge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9wZXJzb25uZWxfcmVjaGVyY2hlJywge25lZWRsZTogJHZhbH0pLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGxldCBodG1sID0gJydcbiAgICAgICAgJCgnI3Jlc3VsdCcpLmVtcHR5KClcbiAgICAgICAgalF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24gKGluZGV4LCBwZXJzKSB7XG4gICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPHRyPicgK1xuICAgICAgICAgICAgJzx0ZD4nICsgcGVycy5ub20gKyAnPC90ZD4nICtcbiAgICAgICAgICAgICc8dGQ+JyArIHBlcnMucHJlbm9tICsgJzwvdGQ+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLm51bWVyb0hhcnBlZ2UgKyAnPC90ZD4nICtcbiAgICAgICAgICAgICc8dGQ+JyArIHBlcnMudXNlcm5hbWUgKyAnPC90ZD4nICtcbiAgICAgICAgICAgICc8dGQ+JyArIHBlcnMubWFpbF91bml2ICsgJzwvdGQ+JyArXG4gICAgICAgICAgICAnPHRkPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLW91dGxpbmUgYnRuLXNxdWFyZSBhZGRwZXJzb25uZWxcIiBkYXRhLXByb3ZpZGU9XCJ0b29sdGlwXCIgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT1cIkFqb3V0ZXIgYXUgZGVwYXJ0ZW1lbnRcIiBkYXRhLXNsdWc9XCInICsgcGVycy5zbHVnICsgJ1wiPjxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj48L2k+PC9hPjwvdGQ+JyArXG4gICAgICAgICAgICAnPC90cj4nXG5cbiAgICAgICAgfSlcblxuICAgICAgICBodG1sID0gaHRtbCArICc8dHI+JyArXG4gICAgICAgICAgJzx0ZCBjb2xzcGFuPVwiNlwiPjxhIGhyZWY9XCInICsgUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcGVyc29ubmVsX2NyZWF0ZScpICsgJ1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1wiIGRhdGEtcHJvdmlkZT1cInRvb2x0aXBcIiBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPVwiQWpvdXRlciB1biBpbnRlcnZlbmFudFwiPjxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj48L2k+IFNpIGxcXCdpbnRlcm52ZW5hbnQgblxcJ2VzdCBwYXMgcHLDqXNlbnQgZGFucyBsXFwnaW50cmFuZXQgdm91cyBwb3V2ZXogbFxcJ2Fqb3V0ZXI8L2E+PC90ZD4nICtcbiAgICAgICAgICAnPC90cj4nXG4gICAgICAgICQoJyNyZXN1bHQnKS5hcHBlbmQoaHRtbClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmFkZHBlcnNvbm5lbCcsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9wZXJzb25uZWxfYWRkX3RvX2RlcGFydGVtZW50Jywge3NsdWc6ICQodGhpcykuZGF0YSgnc2x1ZycpfSksXG4gICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgIGFkZENhbGxvdXQoJ1BlcnNvbm5lbCBham91dMOpIGF1IGTDqXBhcnRlbWVudCAhJywgJ3N1Y2Nlc3MnKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucGVyc29ubmVsX2luZGV4X2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgJCgnLnBlcnNvbm5lbF9pbmRleF9jaGFuZ2UnKS5yZW1vdmVDbGFzcygnYWN0aXZlIHNob3cnKVxuICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUgc2hvdycpXG4gIGxldCAkdHlwZSA9ICQodGhpcykuZGF0YSgndHlwZScpXG4gICQoJyNsaXN0ZVBlcnNvbm5lbCcpLmxvYWQoUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcGVyc29ubmVsX2xvYWRfbGlzdGUnLCB7dHlwZTogJHR5cGV9KSwgZnVuY3Rpb24gKCkge1xuXG4gICAgJCgnI3RhYmxlYXUnKS5EYXRhVGFibGUoe1xuICAgICAgbGFuZ3VhZ2U6IGRhdGFUYWJsZUxhbmd1ZUZyXG4gICAgfSlcblxuICAgICQoJyNleHBvcnRfY3N2JykuYXR0cignaHJlZicsIFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3BlcnNvbm5lbF9leHBvcnQnLCB7XG4gICAgICB0eXBlOiAkdHlwZSxcbiAgICAgICdfZm9ybWF0JzogJ2NzdidcbiAgICB9KSlcbiAgICAkKCcjZXhwb3J0X3hsc3gnKS5hdHRyKCdocmVmJywgUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcGVyc29ubmVsX2V4cG9ydCcsIHtcbiAgICAgIHR5cGU6ICR0eXBlLFxuICAgICAgJ19mb3JtYXQnOiAneGxzeCdcbiAgICB9KSlcbiAgICAkKCcjZXhwb3J0X3BkZicpLmF0dHIoJ2hyZWYnLCBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wZXJzb25uZWxfZXhwb3J0Jywge1xuICAgICAgdHlwZTogJHR5cGUsXG4gICAgICAnX2Zvcm1hdCc6ICdwZGYnXG4gICAgfSkpXG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy51cGRhdGVSb2xlJywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5fcGVyc29ubmVsX2RlcGFydGVtZW50X21vZGlmaWVyX2Ryb2l0Jywge3BlcnNvbm5lbDogJCgnI3BlcnNvbm5lbCcpLnZhbCgpfSksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YTogeydkcm9pdCc6ICQodGhpcykudmFsKCl9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBhZGRDYWxsb3V0KCdEcm9pdHMgbW9kaWZpw6lzICEnLCAnc3VjY2VzcycpXG4gICAgfVxuICB9KVxufSlcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciBub24gPSAnXFx1MjAwQlxcdTAwODVcXHUxODBFJztcblxuLy8gY2hlY2sgdGhhdCBhIG1ldGhvZCB3b3JrcyB3aXRoIHRoZSBjb3JyZWN0IGxpc3Rcbi8vIG9mIHdoaXRlc3BhY2VzIGFuZCBoYXMgYSBjb3JyZWN0IG5hbWVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHJldHVybiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdKCkgfHwgbm9uW01FVEhPRF9OQU1FXSgpICE9IG5vbiB8fCB3aGl0ZXNwYWNlc1tNRVRIT0RfTkFNRV0ubmFtZSAhPT0gTUVUSE9EX05BTUU7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICR0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciBmb3JjZWRTdHJpbmdUcmltTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltLWZvcmNlZCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IGZvcmNlZFN0cmluZ1RyaW1NZXRob2QoJ3RyaW0nKSB9LCB7XG4gIHRyaW06IGZ1bmN0aW9uIHRyaW0oKSB7XG4gICAgcmV0dXJuICR0cmltKHRoaXMpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=