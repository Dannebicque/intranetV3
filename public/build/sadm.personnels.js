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
// @lastUpdate 06/09/2020 13:13


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
    url: Routing.generate('sa_rh_ldap_search'),
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

/***/ })

},[["./assets/js/pages/sadm.personnels.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~d677a9f6","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~6af3b135","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~3a8cbb67","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7452d955","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~adm.stage~agenda~app~datatable~sa~a52fa8c5","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~agenda~app~datatable~sadm.personnels","vendors~absences~adm.absences~adm.etudiants~adm.personnels~agenda~datatable~sadm.personnels","absences~adm.absences~adm.etudiants~adm.personnels~agenda~datatable~sadm.personnels"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGFuZy9mci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvc2FkbS5wZXJzb25uZWxzLmpzIl0sIm5hbWVzIjpbImRhdGFUYWJsZUxhbmd1ZUZyIiwiJCIsImRvY3VtZW50Iiwib24iLCJkZXBhcnRlbWVudCIsImRhdGEiLCIkdmFsIiwidmFsIiwibGVuZ3RoIiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsIm5lZWRsZSIsImRhdGFUeXBlIiwic3VjY2VzcyIsImVtcHR5IiwialF1ZXJ5IiwiZWFjaCIsImluZGV4IiwicGVycyIsImh0bWwiLCJub20iLCJwcmVub20iLCJudW1lcm9IYXJwZWdlIiwidXNlcm5hbWUiLCJtYWlsX3VuaXYiLCJzbHVnIiwiYXBwZW5kIiwiYWRkQ2FsbG91dCIsIkRhdGFUYWJsZSIsInR5cGUiLCJmdWxsIiwiaWQiLCJwZiIsIm1ldGhvZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1haWwiLCJsb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsaUJBQWlCLEdBQUc7QUFDL0IsYUFBVyxFQURvQjtBQUUvQixnQkFBYyxpREFGaUI7QUFHL0IsVUFBUSxpR0FIdUI7QUFJL0IsZUFBYSxnRkFKa0I7QUFLL0Isa0JBQWdCLDBEQUxlO0FBTS9CLGlCQUFlLEVBTmdCO0FBTy9CLGVBQWEsR0FQa0I7QUFRL0IsZ0JBQWMsd0NBUmlCO0FBUy9CLG9CQUFrQix3QkFUYTtBQVUvQixnQkFBYyx3QkFWaUI7QUFXL0IsWUFBVSxtQkFYcUI7QUFZL0IsaUJBQWUsK0NBWmdCO0FBYS9CLGNBQVk7QUFDVixhQUFTLFNBREM7QUFFVixZQUFRLFNBRkU7QUFHVixZQUFRLFNBSEU7QUFJVixnQkFBWTtBQUpGLEdBYm1CO0FBbUIvQixVQUFRO0FBQ04scUJBQWlCLHFEQURYO0FBRU4sc0JBQWtCO0FB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LG1CQUFELEVBQXNCLFNBQXRCLENBQVY7QUFFRDtBQVBJLEdBQVA7QUFTRCxDQVZEO0FBWUE1QixDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixhQUF4QixFQUF1QyxVQUFVaUMsQ0FBVixFQUFhO0FBQ2xEQSxHQUFDLENBQUNDLGNBQUY7QUFDQXBDLEdBQUMsQ0FBQ1EsSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLG1CQUFqQixDQURBO0FBRUx1QixVQUFNLEVBQUUsTUFGSDtBQUdMOUIsUUFBSSxFQUFFO0FBQ0osZ0JBQVVKLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCTSxHQUEvQjtBQUROLEtBSEQ7QUFNTFEsV0FBTyxFQUFFLGlCQUFVVixJQUFWLEVBQWdCO0FBQ3ZCSixPQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQk0sR0FBMUIsQ0FBOEJGLElBQUksQ0FBQ2lDLElBQW5DO0FBQ0FyQyxPQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5Qk0sR0FBekIsQ0FBNkJGLElBQUksQ0FBQ2tDLEtBQWxDO0FBQ0Q7QUFUSSxHQUFQO0FBV0QsQ0FiRCxFIiwiZmlsZSI6InNhZG0ucGVyc29ubmVscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9sYW5nL2ZyLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjIvMDcvMjAyMCAxNToxMFxuXG5leHBvcnQgY29uc3QgZGF0YVRhYmxlTGFuZ3VlRnIgPSB7XG4gICdkZWNpbWFsJzogJycsXG4gICdlbXB0eVRhYmxlJzogJ0F1Y3VuZSBkb25uJmVhY3V0ZTtlIGRpc3BvbmlibGUgZGFucyBsZSB0YWJsZWF1JyxcbiAgJ2luZm8nOiAnQWZmaWNoYWdlIGRlIGxcXCcmZWFjdXRlO2wmZWFjdXRlO21lbnQgX1NUQVJUXyAmYWdyYXZlOyBfRU5EXyBzdXIgX1RPVEFMXyAmZWFjdXRlO2wmZWFjdXRlO21lbnRzJyxcbiAgJ2luZm9FbXB0eSc6ICdBZmZpY2hhZ2UgZGUgbFxcJyZlYWN1dGU7bCZlYWN1dGU7bWVudCAwICZhZ3JhdmU7IDAgc3VyIDAgJmVhY3V0ZTtsJmVhY3V0ZTttZW50JyxcbiAgJ2luZm9GaWx0ZXJlZCc6ICcoZmlsdHImZWFjdXRlOyBkZSBfTUFYXyAmZWFjdXRlO2wmZWFjdXRlO21lbnRzIGF1IHRvdGFsKScsXG4gICdpbmZvUG9zdEZpeCc6ICcnLFxuICAndGhvdXNhbmRzJzogJywnLFxuICAnbGVuZ3RoTWVudSc6ICdBZmZpY2hlciBfTUVOVV8gJmVhY3V0ZTtsJmVhY3V0ZTttZW50cycsXG4gICdsb2FkaW5nUmVjb3Jkcyc6ICdDaGFyZ2VtZW50IGVuIGNvdXJzLi4uJyxcbiAgJ3Byb2Nlc3NpbmcnOiAnVHJhaXRlbWVudCBlbiBjb3Vycy4uLicsXG4gICdzZWFyY2gnOiAnUmVjaGVyY2hlciZuYnNwOzonLFxuICAnemVyb1JlY29yZHMnOiAnQXVjdW4gJmVhY3V0ZTtsJmVhY3V0ZTttZW50ICZhZ3JhdmU7IGFmZmljaGVyJyxcbiAgJ3BhZ2luYXRlJzoge1xuICAgICdmaXJzdCc6ICdQcmVtaWVyJyxcbiAgICAnbGFzdCc6ICdEZXJuaWVyJyxcbiAgICAnbmV4dCc6ICdTdWl2YW50JyxcbiAgICAncHJldmlvdXMnOiAnUHImZWFjdXRlO2MmZWFjdXRlO2RlbnQnXG4gIH0sXG4gICdhcmlhJzoge1xuICAgICdzb3J0QXNjZW5kaW5nJzogJzogYWN0aXZlciBwb3VyIHRyaWVyIGxhIGNvbG9ubmUgcGFyIG9yZHJlIGNyb2lzc2FudCcsXG4gICAgJ3NvcnREZXNjZW5kaW5nJzogJzogYWN0aXZlciBwb3VyIHRyaWVyIGxhIGNvbG9ubmUgcGFyIG9yZHJlIGQmZWFjdXRlO2Nyb2lzc2FudCdcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL3NhZG0ucGVyc29ubmVscy5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDA2LzA5LzIwMjAgMTM6MTNcbmltcG9ydCAnLi4vLi4vdmVuZG9yL2RhdGF0YWJsZXMnXG5pbXBvcnQge2RhdGFUYWJsZUxhbmd1ZUZyfSBmcm9tICcuLi9sYW5nL2ZyJ1xuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI3NhX2xvZ2luX3VyY2EnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRlcGFydGVtZW50ID0gJCh0aGlzKS5kYXRhKCdkZXBhcnRlbWVudCcpXG4gIGNvbnN0ICR2YWwgPSAkKHRoaXMpLnZhbCgpXG4gIGlmICgkdmFsLmxlbmd0aCA+IDIpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcGlfcGVyc29ubmVsX3JlY2hlcmNoZScsIHtuZWVkbGU6ICR2YWx9KSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAkKCcjcmVzdWx0JykuZW1wdHkoKVxuICAgICAgICBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbiAoaW5kZXgsIHBlcnMpIHtcbiAgICAgICAgICBjb25zdCBodG1sID0gJzx0cj4nICtcbiAgICAgICAgICAgICc8dGQ+JyArIHBlcnMubm9tICsgJzwvdGQ+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLnByZW5vbSArICc8L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD4nICsgcGVycy5udW1lcm9IYXJwZWdlICsgJzwvdGQ+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLnVzZXJuYW1lICsgJzwvdGQ+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLm1haWxfdW5pdiArICc8L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD48YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1vdXRsaW5lIGJ0bi1zcXVhcmUgc2FfYWRkcGVyc29ubmVsXCIgZGF0YS1wcm92aWRlPVwidG9vbHRpcFwiIGRhdGEtcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9XCJBam91dGVyIGF1IGRlcGFydGVtZW50XCIgZGF0YS1zbHVnPVwiJyArIHBlcnMuc2x1ZyArICdcIiBkYXRhLWRlcGFydGVtZW50PVwiJyArIGRlcGFydGVtZW50ICsgJ1wiPjxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj48L2k+PC9hPjwvdGQ+JyArXG4gICAgICAgICAgICAnPC90cj4nXG4gICAgICAgICAgJCgnI3Jlc3VsdCcpLmFwcGVuZChodG1sKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2FfYWRkcGVyc29ubmVsJywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX3BlcnNvbm5lbF9hZGRfdG9fZGVwYXJ0ZW1lbnQnLCB7XG4gICAgICBzbHVnOiAkKHRoaXMpLmRhdGEoJ3NsdWcnKSxcbiAgICAgIGRlcGFydGVtZW50OiAkKHRoaXMpLmRhdGEoJ2RlcGFydGVtZW50JylcbiAgICB9KSxcbiAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBhZGRDYWxsb3V0KCdQZXJzb25uZWwgYWpvdXTDqSBhdSBkZXBhcnRlbWVudCAhJywgJ3N1Y2Nlc3MnKVxuXG4gICAgfVxuICB9KVxufSlcblxuJCgnI2RhdGF0YWJsZVJoJykuRGF0YVRhYmxlKHtcbiAgJ3Byb2Nlc3NpbmcnOiB0cnVlLFxuICAnc2VydmVyU2lkZSc6IHRydWUsXG4gICdsYW5ndWFnZSc6IGRhdGFUYWJsZUxhbmd1ZUZyLFxuICAnYWpheCc6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9hbGxfcGVyc29ubmVsJyksXG4gICdzQWpheERhdGFQcm9wJzogJ2RhdGEnLFxuICAncGFnZUxlbmd0aCc6IDI1LFxuICAnb3JkZXInOiBbWzEsICdhc2MnXV0sXG4gICdjb2x1bW5zJzogW1xuICAgIHsnZGF0YSc6ICdudW1lcm9faGFycGVnZSd9LFxuICAgIHsnZGF0YSc6ICdub20nfSxcbiAgICB7J2RhdGEnOiAncHJlbm9tJ30sXG4gICAgeydkYXRhJzogJ2xvZ2luJ30sXG4gICAgeydkYXRhJzogJ2RlcGFydGVtZW50cyd9LFxuICAgIHsnZGF0YSc6ICdkZWxldGVkJ30sXG4gICAge1xuICAgICAgJ2RhdGEnOiAnaWQnLFxuICAgICAgJ3NvcnRhYmxlJzogZmFsc2UsXG4gICAgICAnbVJlbmRlcic6IGZ1bmN0aW9uIChkYXRhLCB0eXBlLCBmdWxsKSB7XG4gICAgICAgIHJldHVybiAnPGEgaHJlZj1cIicgKyBSb3V0aW5nLmdlbmVyYXRlKCdzYV9yaF9wZXJzb25uZWxfc2hvdycsIHtpZDogZGF0YX0pICsgJ1wiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvIGJ0bi1vdXRsaW5lIGJ0bi1zcXVhcmVcIiBkYXRhLXByb3ZpZGU9XCJ0b29sdGlwXCJcXG4nICtcbiAgICAgICAgICAnICAgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT1cIkTDqXRhaWxzXCI+PGkgY2xhc3M9XCJmYSBmYS1pbmZvXCI+PC9pPjwvYT5cXG4nICtcbiAgICAgICAgICAnPGEgaHJlZj1cIicgKyBSb3V0aW5nLmdlbmVyYXRlKCdzYV9yaF9wZXJzb25uZWxfZWRpdCcsIHtpZDogZGF0YX0pICsgJ1wiXFxuJyArXG4gICAgICAgICAgJyAgIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1vdXRsaW5lIGJ0bi1zcXVhcmVcIlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcHJvdmlkZT1cInRvb2x0aXBcIlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGxhY2VtZW50PVwiYm90dG9tXCJcXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk1vZGlmaWVyXCI+PGkgY2xhc3M9XCJmYSBmYS1lZGl0XCI+PC9pPjwvYT5cXG4nICtcbiAgICAgICAgICAnPGEgaHJlZj1cIicgKyBSb3V0aW5nLmdlbmVyYXRlKCdzYV9yaF9kZWxldGVfcGVyc29ubmVsJywge2lkOiBkYXRhfSkgKyAnXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tb3V0bGluZSBidG4tc3F1YXJlIHN1cHByaW1lclwiIGRhdGEtaWQ9XCJpZFwiJyArXG4gICAgICAgICAgJyAgICAgICAgICAgIGRhdGEtcHJvdmlkZT1cInRvb2x0aXBcIiBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiXFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgIHRpdGxlPVwiU3VwcHJpbWVyXCI+PGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT48L2E+J1xuICAgICAgfVxuICAgIH1dXG4gIC8vdG9kbzogZ8OpcmVyIHNjcmYgc3VyIGxlIGRlbGV0ZVxufSlcblxuJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuY2hhbmdlX2Ryb2l0X3BmJywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc2FfcGVyc29ubmVsX2RlcGFydGVtZW50X21vZGlmaWVyX2Ryb2l0Jywge3BmOiAkKHRoaXMpLmRhdGEoJ3BmJyl9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7J2Ryb2l0JzogJCh0aGlzKS52YWwoKX0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0Ryb2l0cyBtb2RpZmnDqXMgIScsICdzdWNjZXNzJylcblxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjc2VhcmNoTGRhcCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnc2FfcmhfbGRhcF9zZWFyY2gnKSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7XG4gICAgICAnbnVtZXJvJzogJCgnI3BlcnNvbm5lbF9udW1lcm9faGFycGVnZScpLnZhbCgpXG4gICAgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgJCgnI3BlcnNvbm5lbF9tYWlsX3VuaXYnKS52YWwoZGF0YS5tYWlsKVxuICAgICAgJCgnI3BlcnNvbm5lbF91c2VybmFtZScpLnZhbChkYXRhLmxvZ2luKVxuICAgIH1cbiAgfSlcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9