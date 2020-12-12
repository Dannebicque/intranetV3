(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sadm.personnels"],{

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

/***/ "./assets/js/pages/sadm.personnels.js":
/*!********************************************!*\
  !*** ./assets/js/pages/sadm.personnels.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony import */ var _vendor_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vendor/datatables */ "./assets/vendor/datatables/index.js");
/* harmony import */ var _lang_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lang/fr */ "./assets/js/lang/fr.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/sadm.personnels.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/12/2020 17:34


$(document).on('keyup', '#sa_login_urca', function () {
  var departement = $(this).data('departement');
  var $val = $(this).val();

  if ($val.length > 2) {
    $.ajax({
      url: Routing.generate('api_personnel_recherche', {
        needle: $val
      }),
      dataType: 'json',
      success: function success(data) {
        $('#result').empty();
        jQuery.each(data, function (index, pers) {
          var html = '<tr>' + '<td>' + pers.nom + '</td>' + '<td>' + pers.prenom + '</td>' + '<td>' + pers.numeroHarpege + '</td>' + '<td>' + pers.username + '</td>' + '<td>' + pers.mail_univ + '</td>' + '<td><a href="#" class="btn btn-success btn-outline btn-square sa_addpersonnel" data-provide="tooltip" data-placement="bottom" title="Ajouter au departement" data-slug="' + pers.slug + '" data-departement="' + departement + '"><i class="fas fa-plus"></i></a></td>' + '</tr>';
          $('#result').append(html);
        });
      }
    });
  }
});
$(document).on('click', '.sa_addpersonnel', function () {
  $.ajax({
    url: Routing.generate('api_personnel_add_to_departement', {
      slug: $(this).data('slug'),
      departement: $(this).data('departement')
    }),
    dataType: 'json',
    success: function success(data) {
      addCallout('Personnel ajouté au departement !', 'success');
    }
  });
});
$('#datatableRh').DataTable({
  'processing': true,
  'serverSide': true,
  'language': _lang_fr__WEBPACK_IMPORTED_MODULE_1__["dataTableLangueFr"],
  'ajax': Routing.generate('api_all_personnel'),
  'sAjaxDataProp': 'data',
  'pageLength': 25,
  'order': [[1, 'asc']],
  'columns': [{
    'data': 'numero_harpege'
  }, {
    'data': 'nom'
  }, {
    'data': 'prenom'
  }, {
    'data': 'login'
  }, {
    'data': 'departements'
  }, {
    'data': 'deleted'
  }, {
    'data': 'id',
    'sortable': false,
    'mRender': function mRender(data, type, full) {
      return '<a href="' + Routing.generate('sa_rh_personnel_show', {
        id: data
      }) + '" class="btn btn-info btn-outline btn-square" data-provide="tooltip"\n' + '   data-placement="bottom" title="Détails"><i class="fa fa-info"></i></a>\n' + '<a href="' + Routing.generate('sa_rh_personnel_edit', {
        id: data
      }) + '"\n' + '   class="btn btn-warning btn-outline btn-square"\n' + '                                                     data-provide="tooltip"\n' + '                                                     data-placement="bottom"\n' + '                                                     title="Modifier"><i class="fa fa-edit"></i></a>\n' + '<a href="' + Routing.generate('sa_rh_delete_personnel', {
        id: data
      }) + '" class="btn btn-danger btn-outline btn-square supprimer" data-id="id"' + '            data-provide="tooltip" data-placement="bottom"\n' + '            title="Supprimer"><i class="fa fa-trash"></i></a>';
    }
  }] //todo: gérer scrf sur le delete

});
$(document).on('change', '.change_droit_pf', function () {
  $.ajax({
    url: Routing.generate('sa_personnel_departement_modifier_droit', {
      pf: $(this).data('pf')
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
$(document).on('click', '#searchLdap', function (e) {
  e.preventDefault();
  $.ajax({
    url: Routing.generate('ldap_search'),
    method: 'POST',
    data: {
      'numero': $('#personnel_numero_harpege').val()
    },
    success: function success(data) {
      $('#personnel_mail_univ').val(data.mail);
      $('#personnel_username').val(data.login);
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

},[["./assets/js/pages/sadm.personnels.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~b8aa102b","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~b8fda26e","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~92da351e","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~14b603b0","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~adm.stage~agenda~app~covid~datata~8156d9a8","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~adm.stage~agenda~app~covid~datata~b17950a4","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~agenda~app~datatable~sadm.personn~4a6dcf60","vendors~absences~adm.absences~adm.etudiants~adm.personnels~agenda~datatable~sadm.personnels~sadmCovid","absences~adm.absences~adm.etudiants~adm.personnels~agenda~datatable~sadm.personnels~sadmCovid"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGFuZy9mci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvc2FkbS5wZXJzb25uZWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS1mb3JjZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcudHJpbS5qcyJdLCJuYW1lcyI6WyJkYXRhVGFibGVMYW5ndWVGciIsIiQiLCJkb2N1bWVudCIsIm9uIiwiZGVwYXJ0ZW1lbnQiLCJkYXRhIiwiJHZhbCIsInZhbCIsImxlbmd0aCIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJuZWVkbGUiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJlbXB0eSIsImpRdWVyeSIsImVhY2giLCJpbmRleCIsInBlcnMiLCJodG1sIiwibm9tIiwicHJlbm9tIiwibnVtZXJvSGFycGVnZSIsInVzZXJuYW1lIiwibWFpbF91bml2Iiwic2x1ZyIsImFwcGVuZCIsImFkZENhbGxvdXQiLCJEYXRhVGFibGUiLCJ0eXBlIiwiZnVsbCIsImlkIiwicGYiLCJtZXRob2QiLCJlIiwicHJldmVudERlZmF1bHQiLCJtYWlsIiwibG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGlCQUFpQixHQUFHO0FBQy9CLGFBQVcsRUFEb0I7QUFFL0IsZ0JBQWMsaURBRmlCO0FBRy9CLFVBQVEsaUdBSHVCO0FBSS9CLGVBQWEsZ0ZBSmtCO0FBSy9CLGtCQUFnQiwwREFMZTtBQU0vQixpQkFBZSxFQU5nQjtBQU8vQixlQUFhLEdBUGtCO0FBUS9CLGdCQUFjLHdDQVJpQjtBQVMvQixvQkFBa0Isd0JBVGE7QUFVL0IsZ0JBQWMsd0JBVmlCO0FBVy9CLFlBQVUsbUJBWHFCO0FBWS9CLGlCQUFl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QUF3RTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6InNhZG0ucGVyc29ubmVscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9sYW5nL2ZyLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjIvMDcvMjAyMCAxNToxMFxuXG5leHBvcnQgY29uc3QgZGF0YVRhYmxlTGFuZ3VlRnIgPSB7XG4gICdkZWNpbWFsJzogJycsXG4gICdlbXB0eVRhYmxlJzogJ0F1Y3VuZSBkb25uJmVhY3V0ZTtlIGRpc3BvbmlibGUgZGFucyBsZSB0YWJsZWF1JyxcbiAgJ2luZm8nOiAnQWZmaWNoYWdlIGRlIGxcXCcmZWFjdXRlO2wmZWFjdXRlO21lbnQgX1NUQVJUXyAmYWdyYXZlOyBfRU5EXyBzdXIgX1RPVEFMXyAmZWFjdXRlO2wmZWFjdXRlO21lbnRzJyxcbiAgJ2luZm9FbXB0eSc6ICdBZmZpY2hhZ2UgZGUgbFxcJyZlYWN1dGU7bCZlYWN1dGU7bWVudCAwICZhZ3JhdmU7IDAgc3VyIDAgJmVhY3V0ZTtsJmVhY3V0ZTttZW50JyxcbiAgJ2luZm9GaWx0ZXJlZCc6ICcoZmlsdHImZWFjdXRlOyBkZSBfTUFYXyAmZWFjdXRlO2wmZWFjdXRlO21lbnRzIGF1IHRvdGFsKScsXG4gICdpbmZvUG9zdEZpeCc6ICcnLFxuICAndGhvdXNhbmRzJzogJywnLFxuICAnbGVuZ3RoTWVudSc6ICdBZmZpY2hlciBfTUVOVV8gJmVhY3V0ZTtsJmVhY3V0ZTttZW50cycsXG4gICdsb2FkaW5nUmVjb3Jkcyc6ICdDaGFyZ2VtZW50IGVuIGNvdXJzLi4uJyxcbiAgJ3Byb2Nlc3NpbmcnOiAnVHJhaXRlbWVudCBlbiBjb3Vycy4uLicsXG4gICdzZWFyY2gnOiAnUmVjaGVyY2hlciZuYnNwOzonLFxuICAnemVyb1JlY29yZHMnOiAnQXVjdW4gJmVhY3V0ZTtsJmVhY3V0ZTttZW50ICZhZ3JhdmU7IGFmZmljaGVyJyxcbiAgJ3BhZ2luYXRlJzoge1xuICAgICdmaXJzdCc6ICdQcmVtaWVyJyxcbiAgICAnbGFzdCc6ICdEZXJuaWVyJyxcbiAgICAnbmV4dCc6ICdTdWl2YW50JyxcbiAgICAncHJldmlvdXMnOiAnUHImZWFjdXRlO2MmZWFjdXRlO2RlbnQnXG4gIH0sXG4gICdhcmlhJzoge1xuICAgICdzb3J0QXNjZW5kaW5nJzogJzogYWN0aXZlciBwb3VyIHRyaWVyIGxhIGNvbG9ubmUgcGFyIG9yZHJlIGNyb2lzc2FudCcsXG4gICAgJ3NvcnREZXNjZW5kaW5nJzogJzogYWN0aXZlciBwb3VyIHRyaWVyIGxhIGNvbG9ubmUgcGFyIG9yZHJlIGQmZWFjdXRlO2Nyb2lzc2FudCdcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL3NhZG0ucGVyc29ubmVscy5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDA0LzEyLzIwMjAgMTc6MzRcbmltcG9ydCAnLi4vLi4vdmVuZG9yL2RhdGF0YWJsZXMnXG5pbXBvcnQge2RhdGFUYWJsZUxhbmd1ZUZyfSBmcm9tICcuLi9sYW5nL2ZyJ1xuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI3NhX2xvZ2luX3VyY2EnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRlcGFydGVtZW50ID0gJCh0aGlzKS5kYXRhKCdkZXBhcnRlbWVudCcpXG4gIGNvbnN0ICR2YWwgPSAkKHRoaXMpLnZhbCgpXG4gIGlmICgkdmFsLmxlbmd0aCA+IDIpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcGlfcGVyc29ubmVsX3JlY2hlcmNoZScsIHtuZWVkbGU6ICR2YWx9KSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAkKCcjcmVzdWx0JykuZW1wdHkoKVxuICAgICAgICBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbiAoaW5kZXgsIHBlcnMpIHtcbiAgICAgICAgICBjb25zdCBodG1sID0gJzx0cj4nICtcbiAgICAgICAgICAgICc8dGQ+JyArIHBlcnMubm9tICsgJzwvdGQ+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLnByZW5vbSArICc8L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD4nICsgcGVycy5udW1lcm9IYXJwZWdlICsgJzwvdGQ+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLnVzZXJuYW1lICsgJzwvdGQ+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLm1haWxfdW5pdiArICc8L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD48YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1vdXRsaW5lIGJ0bi1zcXVhcmUgc2FfYWRkcGVyc29ubmVsXCIgZGF0YS1wcm92aWRlPVwidG9vbHRpcFwiIGRhdGEtcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9XCJBam91dGVyIGF1IGRlcGFydGVtZW50XCIgZGF0YS1zbHVnPVwiJyArIHBlcnMuc2x1ZyArICdcIiBkYXRhLWRlcGFydGVtZW50PVwiJyArIGRlcGFydGVtZW50ICsgJ1wiPjxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj48L2k+PC9hPjwvdGQ+JyArXG4gICAgICAgICAgICAnPC90cj4nXG4gICAgICAgICAgJCgnI3Jlc3VsdCcpLmFwcGVuZChodG1sKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2FfYWRkcGVyc29ubmVsJywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX3BlcnNvbm5lbF9hZGRfdG9fZGVwYXJ0ZW1lbnQnLCB7XG4gICAgICBzbHVnOiAkKHRoaXMpLmRhdGEoJ3NsdWcnKSxcbiAgICAgIGRlcGFydGVtZW50OiAkKHRoaXMpLmRhdGEoJ2RlcGFydGVtZW50JylcbiAgICB9KSxcbiAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBhZGRDYWxsb3V0KCdQZXJzb25uZWwgYWpvdXTDqSBhdSBkZXBhcnRlbWVudCAhJywgJ3N1Y2Nlc3MnKVxuXG4gICAgfVxuICB9KVxufSlcblxuJCgnI2RhdGF0YWJsZVJoJykuRGF0YVRhYmxlKHtcbiAgJ3Byb2Nlc3NpbmcnOiB0cnVlLFxuICAnc2VydmVyU2lkZSc6IHRydWUsXG4gICdsYW5ndWFnZSc6IGRhdGFUYWJsZUxhbmd1ZUZyLFxuICAnYWpheCc6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9hbGxfcGVyc29ubmVsJyksXG4gICdzQWpheERhdGFQcm9wJzogJ2RhdGEnLFxuICAncGFnZUxlbmd0aCc6IDI1LFxuICAnb3JkZXInOiBbWzEsICdhc2MnXV0sXG4gICdjb2x1bW5zJzogW1xuICAgIHsnZGF0YSc6ICdudW1lcm9faGFycGVnZSd9LFxuICAgIHsnZGF0YSc6ICdub20nfSxcbiAgICB7J2RhdGEnOiAncHJlbm9tJ30sXG4gICAgeydkYXRhJzogJ2xvZ2luJ30sXG4gICAgeydkYXRhJzogJ2RlcGFydGVtZW50cyd9LFxuICAgIHsnZGF0YSc6ICdkZWxldGVkJ30sXG4gICAge1xuICAgICAgJ2RhdGEnOiAnaWQnLFxuICAgICAgJ3NvcnRhYmxlJzogZmFsc2UsXG4gICAgICAnbVJlbmRlcic6IGZ1bmN0aW9uIChkYXRhLCB0eXBlLCBmdWxsKSB7XG4gICAgICAgIHJldHVybiAnPGEgaHJlZj1cIicgKyBSb3V0aW5nLmdlbmVyYXRlKCdzYV9yaF9wZXJzb25uZWxfc2hvdycsIHtpZDogZGF0YX0pICsgJ1wiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvIGJ0bi1vdXRsaW5lIGJ0bi1zcXVhcmVcIiBkYXRhLXByb3ZpZGU9XCJ0b29sdGlwXCJcXG4nICtcbiAgICAgICAgICAnICAgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT1cIkTDqXRhaWxzXCI+PGkgY2xhc3M9XCJmYSBmYS1pbmZvXCI+PC9pPjwvYT5cXG4nICtcbiAgICAgICAgICAnPGEgaHJlZj1cIicgKyBSb3V0aW5nLmdlbmVyYXRlKCdzYV9yaF9wZXJzb25uZWxfZWRpdCcsIHtpZDogZGF0YX0pICsgJ1wiXFxuJyArXG4gICAgICAgICAgJyAgIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1vdXRsaW5lIGJ0bi1zcXVhcmVcIlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcHJvdmlkZT1cInRvb2x0aXBcIlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGxhY2VtZW50PVwiYm90dG9tXCJcXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk1vZGlmaWVyXCI+PGkgY2xhc3M9XCJmYSBmYS1lZGl0XCI+PC9pPjwvYT5cXG4nICtcbiAgICAgICAgICAnPGEgaHJlZj1cIicgKyBSb3V0aW5nLmdlbmVyYXRlKCdzYV9yaF9kZWxldGVfcGVyc29ubmVsJywge2lkOiBkYXRhfSkgKyAnXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tb3V0bGluZSBidG4tc3F1YXJlIHN1cHByaW1lclwiIGRhdGEtaWQ9XCJpZFwiJyArXG4gICAgICAgICAgJyAgICAgICAgICAgIGRhdGEtcHJvdmlkZT1cInRvb2x0aXBcIiBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiXFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgIHRpdGxlPVwiU3VwcHJpbWVyXCI+PGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT48L2E+J1xuICAgICAgfVxuICAgIH1dXG4gIC8vdG9kbzogZ8OpcmVyIHNjcmYgc3VyIGxlIGRlbGV0ZVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuY2hhbmdlX2Ryb2l0X3BmJywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc2FfcGVyc29ubmVsX2RlcGFydGVtZW50X21vZGlmaWVyX2Ryb2l0Jywge3BmOiAkKHRoaXMpLmRhdGEoJ3BmJyl9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7J2Ryb2l0JzogJCh0aGlzKS52YWwoKX0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0Ryb2l0cyBtb2RpZmnDqXMgIScsICdzdWNjZXNzJylcblxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjc2VhcmNoTGRhcCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnbGRhcF9zZWFyY2gnKSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7XG4gICAgICAnbnVtZXJvJzogJCgnI3BlcnNvbm5lbF9udW1lcm9faGFycGVnZScpLnZhbCgpXG4gICAgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgJCgnI3BlcnNvbm5lbF9tYWlsX3VuaXYnKS52YWwoZGF0YS5tYWlsKVxuICAgICAgJCgnI3BlcnNvbm5lbF91c2VybmFtZScpLnZhbChkYXRhLmxvZ2luKVxuICAgIH1cbiAgfSlcbn0pXG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgbm9uID0gJ1xcdTIwMEJcXHUwMDg1XFx1MTgwRSc7XG5cbi8vIGNoZWNrIHRoYXQgYSBtZXRob2Qgd29ya3Mgd2l0aCB0aGUgY29ycmVjdCBsaXN0XG4vLyBvZiB3aGl0ZXNwYWNlcyBhbmQgaGFzIGEgY29ycmVjdCBuYW1lXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICByZXR1cm4gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXdoaXRlc3BhY2VzW01FVEhPRF9OQU1FXSgpIHx8IG5vbltNRVRIT0RfTkFNRV0oKSAhPSBub24gfHwgd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdLm5hbWUgIT09IE1FVEhPRF9OQU1FO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgZm9yY2VkU3RyaW5nVHJpbU1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbS1mb3JjZWQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBmb3JjZWRTdHJpbmdUcmltTWV0aG9kKCd0cmltJykgfSwge1xuICB0cmltOiBmdW5jdGlvbiB0cmltKCkge1xuICAgIHJldHVybiAkdHJpbSh0aGlzKTtcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9