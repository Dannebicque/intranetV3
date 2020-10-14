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
// @lastUpdate 26/08/2020 12:07


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
        $('#result').empty();
        jQuery.each(data, function (index, pers) {
          var html = '<tr>' + '<td>' + pers.nom + '</td>' + '<td>' + pers.prenom + '</td>' + '<td>' + pers.numeroHarpege + '</td>' + '<td>' + pers.username + '</td>' + '<td>' + pers.mail_univ + '</td>' + '<td><a href="#" class="btn btn-success btn-outline btn-square addpersonnel" data-provide="tooltip" data-placement="bottom" title="Ajouter au departement" data-slug="' + pers.slug + '"><i class="fas fa-plus"></i></a></td>' + '</tr>';
          $('#result').append(html);
        });
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
  var table = $('#tableau').DataTable();
  table.clear(); //effacer le datatable

  table.destroy(); //supprimer le datatable

  var $type = $(this).data('type');
  $.ajax({
    url: Routing.generate('api_enseignants_type', {
      type: $type
    }),
    dataType: 'json',
    success: function success(data) {
      jQuery.each(data, function (index, pers) {
        //ajouter les lignes
        var html = '<tr>\n' + '                        <td>' + pers.nom + '</td>\n' + '                        <td>' + pers.prenom + '</td>\n' + '                        <td>' + pers.posteInterne + '</td>\n' + '                        <td>' + pers.telBureau + '</td>\n' + '                        <td>' + pers.bureau1 + '</td>\n' + '                        <td>' + pers.numeroHarpege + '</td>\n' + '                        <td>' + pers.mailUniv + '</td>\n' + '                        <td>\n' + '<a href="' + Routing.generate('administration_personnel_show', {
          id: pers.id
        }) + '" class="btn btn-info btn-outline btn-square" data-provide="tooltip"\n' + '   data-placement="bottom" title="Détails"><i class="fa fa-info"></i></a>\n' + '<a href="' + Routing.generate('administration_personnel_edit', {
          id: pers.id
        }) + '"\n' + '   class="btn btn-warning btn-outline btn-square"><i class="fa fa-edit"\n' + '                                                     data-provide="tooltip"\n' + '                                                     data-placement="bottom"\n' + '                                                     title="Modifier"></i></a>\n' + '<a href="' + Routing.generate('administration_personnel_delete', {
          id: pers.id
        }) + '" class="btn btn-danger btn-outline btn-square supprimer" data-id="id"><i\n' + '            class="fa fa-trash" data-provide="tooltip" data-placement="bottom"\n' + '            title="Supprimer"></i></a>' + '                        </td>\n' + '                    </tr>';
        $('#datatableau').append(html);
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
      $('#tableau').DataTable({
        'langue': _lang_fr__WEBPACK_IMPORTED_MODULE_1__["dataTableLangueFr"]
      }); //regenerer le datatable avec les nouvelles data
    }
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

/***/ })

},[["./assets/js/pages/adm.personnels.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~d677a9f6","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~6af3b135","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~3a8cbb67","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7452d955","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~adm.stage~agenda~app~datatable~sa~a52fa8c5","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~agenda~app~datatable~sadm.personnels","vendors~absences~adm.absences~adm.etudiants~adm.personnels~agenda~datatable~sadm.personnels","absences~adm.absences~adm.etudiants~adm.personnels~agenda~datatable~sadm.personnels"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGFuZy9mci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLnBlcnNvbm5lbHMuanMiXSwibmFtZXMiOlsiZGF0YVRhYmxlTGFuZ3VlRnIiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIkRhdGFUYWJsZSIsIm9uIiwiJHZhbCIsInZhbCIsImxlbmd0aCIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJuZWVkbGUiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJkYXRhIiwiZW1wdHkiLCJqUXVlcnkiLCJlYWNoIiwiaW5kZXgiLCJwZXJzIiwiaHRtbCIsIm5vbSIsInByZW5vbSIsIm51bWVyb0hhcnBlZ2UiLCJ1c2VybmFtZSIsIm1haWxfdW5pdiIsInNsdWciLCJhcHBlbmQiLCJjb25zb2xlIiwibG9nIiwiYWRkQ2FsbG91dCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJ0YWJsZSIsImNsZWFyIiwiZGVzdHJveSIsIiR0eXBlIiwidHlwZSIsInBvc3RlSW50ZXJuZSIsInRlbEJ1cmVhdSIsImJ1cmVhdTEiLCJtYWlsVW5pdiIsImlkIiwiYXR0ciIsInBlcnNvbm5lbCIsIm1ldGhvZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsaUJBQWlCLEdBQUc7QUFDL0IsYUFBVyxFQURvQjtBQUUvQixnQkFBYyxpREFGaUI7QUFHL0IsVUFBUSxpR0FIdUI7QUFJL0IsZUFBYSxnRkFKa0I7QUFLL0Isa0JBQWdCLDBEQUxlO0FBTS9CLGlCQUFlLEVBTmdCO0FBTy9CLGVBQWEsR0FQa0I7QUFRL0IsZ0JBQWMsd0NBUmlCO0FBUy9CLG9CQUFrQix3QkFUYTtBQVUvQixnQkFBYyx3QkFWaUI7QUFXL0IsWUFBVSxtQkFYcUI7QUFZL0IsaUJBQWUsK0NBWmdCO0FBYS9CLGNBQVk7QUFDVixhQUFTLFNBREM7QUFFVixZQUFR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QWdERCxDQXZERDtBQXlEQUMsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUcsRUFBWixDQUFlLFFBQWYsRUFBeUIsYUFBekIsRUFBd0MsWUFBWTtBQUNsREosR0FBQyxDQUFDUSxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsNENBQWpCLEVBQStEO0FBQUNrQyxlQUFTLEVBQUU3QyxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCTSxHQUFoQjtBQUFaLEtBQS9ELENBREE7QUFFTHdDLFVBQU0sRUFBRSxNQUZIO0FBR0wvQixRQUFJLEVBQUU7QUFBQyxlQUFTZixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLEdBQVI7QUFBVixLQUhEO0FBSUxRLFdBQU8sRUFBRSxpQkFBVUMsSUFBVixFQUFnQjtBQUN2QmdCLGdCQUFVLENBQUMsbUJBQUQsRUFBc0IsU0FBdEIsQ0FBVjtBQUNEO0FBTkksR0FBUDtBQVFELENBVEQsRSIsImZpbGUiOiJhZG0ucGVyc29ubmVscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9sYW5nL2ZyLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjIvMDcvMjAyMCAxNToxMFxuXG5leHBvcnQgY29uc3QgZGF0YVRhYmxlTGFuZ3VlRnIgPSB7XG4gICdkZWNpbWFsJzogJycsXG4gICdlbXB0eVRhYmxlJzogJ0F1Y3VuZSBkb25uJmVhY3V0ZTtlIGRpc3BvbmlibGUgZGFucyBsZSB0YWJsZWF1JyxcbiAgJ2luZm8nOiAnQWZmaWNoYWdlIGRlIGxcXCcmZWFjdXRlO2wmZWFjdXRlO21lbnQgX1NUQVJUXyAmYWdyYXZlOyBfRU5EXyBzdXIgX1RPVEFMXyAmZWFjdXRlO2wmZWFjdXRlO21lbnRzJyxcbiAgJ2luZm9FbXB0eSc6ICdBZmZpY2hhZ2UgZGUgbFxcJyZlYWN1dGU7bCZlYWN1dGU7bWVudCAwICZhZ3JhdmU7IDAgc3VyIDAgJmVhY3V0ZTtsJmVhY3V0ZTttZW50JyxcbiAgJ2luZm9GaWx0ZXJlZCc6ICcoZmlsdHImZWFjdXRlOyBkZSBfTUFYXyAmZWFjdXRlO2wmZWFjdXRlO21lbnRzIGF1IHRvdGFsKScsXG4gICdpbmZvUG9zdEZpeCc6ICcnLFxuICAndGhvdXNhbmRzJzogJywnLFxuICAnbGVuZ3RoTWVudSc6ICdBZmZpY2hlciBfTUVOVV8gJmVhY3V0ZTtsJmVhY3V0ZTttZW50cycsXG4gICdsb2FkaW5nUmVjb3Jkcyc6ICdDaGFyZ2VtZW50IGVuIGNvdXJzLi4uJyxcbiAgJ3Byb2Nlc3NpbmcnOiAnVHJhaXRlbWVudCBlbiBjb3Vycy4uLicsXG4gICdzZWFyY2gnOiAnUmVjaGVyY2hlciZuYnNwOzonLFxuICAnemVyb1JlY29yZHMnOiAnQXVjdW4gJmVhY3V0ZTtsJmVhY3V0ZTttZW50ICZhZ3JhdmU7IGFmZmljaGVyJyxcbiAgJ3BhZ2luYXRlJzoge1xuICAgICdmaXJzdCc6ICdQcmVtaWVyJyxcbiAgICAnbGFzdCc6ICdEZXJuaWVyJyxcbiAgICAnbmV4dCc6ICdTdWl2YW50JyxcbiAgICAncHJldmlvdXMnOiAnUHImZWFjdXRlO2MmZWFjdXRlO2RlbnQnXG4gIH0sXG4gICdhcmlhJzoge1xuICAgICdzb3J0QXNjZW5kaW5nJzogJzogYWN0aXZlciBwb3VyIHRyaWVyIGxhIGNvbG9ubmUgcGFyIG9yZHJlIGNyb2lzc2FudCcsXG4gICAgJ3NvcnREZXNjZW5kaW5nJzogJzogYWN0aXZlciBwb3VyIHRyaWVyIGxhIGNvbG9ubmUgcGFyIG9yZHJlIGQmZWFjdXRlO2Nyb2lzc2FudCdcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL2FkbS5wZXJzb25uZWxzLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjYvMDgvMjAyMCAxMjowN1xuXG5pbXBvcnQgJy4uLy4uL3ZlbmRvci9kYXRhdGFibGVzJ1xuaW1wb3J0IHtkYXRhVGFibGVMYW5ndWVGcn0gZnJvbSAnLi4vbGFuZy9mcidcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAkKCcjdGFibGVhdScpLkRhdGFUYWJsZSh7XG4gICAgJ2xhbmd1ZSc6IGRhdGFUYWJsZUxhbmd1ZUZyXG4gIH0pIC8vcmVnZW5lcmVyIGxlIGRhdGF0YWJsZSBhdmVjIGxlcyBub3V2ZWxsZXMgZGF0YVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNsb2dpbl91cmNhJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCAkdmFsID0gJCh0aGlzKS52YWwoKVxuICBpZiAoJHZhbC5sZW5ndGggPiAyKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX3BlcnNvbm5lbF9yZWNoZXJjaGUnLCB7bmVlZGxlOiAkdmFsfSksXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgICAgICAkKCcjcmVzdWx0JykuZW1wdHkoKVxuICAgICAgICBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbiAoaW5kZXgsIHBlcnMpIHtcbiAgICAgICAgICBjb25zdCBodG1sID0gJzx0cj4nICtcbiAgICAgICAgICAgICc8dGQ+JyArIHBlcnMubm9tICsgJzwvdGQ+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLnByZW5vbSArICc8L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD4nICsgcGVycy5udW1lcm9IYXJwZWdlICsgJzwvdGQ+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLnVzZXJuYW1lICsgJzwvdGQ+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLm1haWxfdW5pdiArICc8L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD48YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1vdXRsaW5lIGJ0bi1zcXVhcmUgYWRkcGVyc29ubmVsXCIgZGF0YS1wcm92aWRlPVwidG9vbHRpcFwiIGRhdGEtcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9XCJBam91dGVyIGF1IGRlcGFydGVtZW50XCIgZGF0YS1zbHVnPVwiJyArIHBlcnMuc2x1ZyArICdcIj48aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPjwvYT48L3RkPicgK1xuICAgICAgICAgICAgJzwvdHI+J1xuICAgICAgICAgICQoJyNyZXN1bHQnKS5hcHBlbmQoaHRtbClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmFkZHBlcnNvbm5lbCcsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9wZXJzb25uZWxfYWRkX3RvX2RlcGFydGVtZW50Jywge3NsdWc6ICQodGhpcykuZGF0YSgnc2x1ZycpfSksXG4gICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgIGFkZENhbGxvdXQoJ1BlcnNvbm5lbCBham91dMOpIGF1IGTDqXBhcnRlbWVudCAhJywgJ3N1Y2Nlc3MnKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucGVyc29ubmVsX2luZGV4X2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgJCgnLnBlcnNvbm5lbF9pbmRleF9jaGFuZ2UnKS5yZW1vdmVDbGFzcygnYWN0aXZlIHNob3cnKVxuICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUgc2hvdycpXG4gIGNvbnN0IHRhYmxlID0gJCgnI3RhYmxlYXUnKS5EYXRhVGFibGUoKVxuICB0YWJsZS5jbGVhcigpIC8vZWZmYWNlciBsZSBkYXRhdGFibGVcbiAgdGFibGUuZGVzdHJveSgpIC8vc3VwcHJpbWVyIGxlIGRhdGF0YWJsZVxuICBsZXQgJHR5cGUgPSAkKHRoaXMpLmRhdGEoJ3R5cGUnKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX2Vuc2VpZ25hbnRzX3R5cGUnLCB7dHlwZTogJHR5cGV9KSxcbiAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbiAoaW5kZXgsIHBlcnMpIHtcbiAgICAgICAgLy9ham91dGVyIGxlcyBsaWduZXNcbiAgICAgICAgY29uc3QgaHRtbCA9ICc8dHI+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4nICsgcGVycy5ub20gKyAnPC90ZD5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHRkPicgKyBwZXJzLnByZW5vbSArICc8L3RkPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JyArIHBlcnMucG9zdGVJbnRlcm5lICsgJzwvdGQ+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4nICsgcGVycy50ZWxCdXJlYXUgKyAnPC90ZD5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHRkPicgKyBwZXJzLmJ1cmVhdTEgKyAnPC90ZD5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHRkPicgKyBwZXJzLm51bWVyb0hhcnBlZ2UgKyAnPC90ZD5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHRkPicgKyBwZXJzLm1haWxVbml2ICsgJzwvdGQ+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4nICtcbiAgICAgICAgICAnPGEgaHJlZj1cIicgKyBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wZXJzb25uZWxfc2hvdycsIHtpZDogcGVycy5pZH0pICsgJ1wiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvIGJ0bi1vdXRsaW5lIGJ0bi1zcXVhcmVcIiBkYXRhLXByb3ZpZGU9XCJ0b29sdGlwXCJcXG4nICtcbiAgICAgICAgICAnICAgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT1cIkTDqXRhaWxzXCI+PGkgY2xhc3M9XCJmYSBmYS1pbmZvXCI+PC9pPjwvYT5cXG4nICtcbiAgICAgICAgICAnPGEgaHJlZj1cIicgKyBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wZXJzb25uZWxfZWRpdCcsIHtpZDogcGVycy5pZH0pICsgJ1wiXFxuJyArXG4gICAgICAgICAgJyAgIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1vdXRsaW5lIGJ0bi1zcXVhcmVcIj48aSBjbGFzcz1cImZhIGZhLWVkaXRcIlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcHJvdmlkZT1cInRvb2x0aXBcIlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGxhY2VtZW50PVwiYm90dG9tXCJcXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk1vZGlmaWVyXCI+PC9pPjwvYT5cXG4nICtcbiAgICAgICAgICAnPGEgaHJlZj1cIicgKyBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wZXJzb25uZWxfZGVsZXRlJywge2lkOiBwZXJzLmlkfSkgKyAnXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tb3V0bGluZSBidG4tc3F1YXJlIHN1cHByaW1lclwiIGRhdGEtaWQ9XCJpZFwiPjxpXFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtdHJhc2hcIiBkYXRhLXByb3ZpZGU9XCJ0b29sdGlwXCIgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICB0aXRsZT1cIlN1cHByaW1lclwiPjwvaT48L2E+JyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPC90cj4nXG4gICAgICAgICQoJyNkYXRhdGFibGVhdScpLmFwcGVuZChodG1sKVxuICAgICAgfSlcblxuICAgICAgJCgnI2V4cG9ydF9jc3YnKS5hdHRyKCdocmVmJywgUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcGVyc29ubmVsX2V4cG9ydCcsIHtcbiAgICAgICAgdHlwZTogJHR5cGUsXG4gICAgICAgICdfZm9ybWF0JzogJ2NzdidcbiAgICAgIH0pKVxuICAgICAgJCgnI2V4cG9ydF94bHN4JykuYXR0cignaHJlZicsIFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3BlcnNvbm5lbF9leHBvcnQnLCB7XG4gICAgICAgIHR5cGU6ICR0eXBlLFxuICAgICAgICAnX2Zvcm1hdCc6ICd4bHN4J1xuICAgICAgfSkpXG4gICAgICAkKCcjZXhwb3J0X3BkZicpLmF0dHIoJ2hyZWYnLCBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wZXJzb25uZWxfZXhwb3J0Jywge1xuICAgICAgICB0eXBlOiAkdHlwZSxcbiAgICAgICAgJ19mb3JtYXQnOiAncGRmJ1xuICAgICAgfSkpXG5cbiAgICAgICQoJyN0YWJsZWF1JykuRGF0YVRhYmxlKHtcbiAgICAgICAgJ2xhbmd1ZSc6IGRhdGFUYWJsZUxhbmd1ZUZyXG4gICAgICB9KSAvL3JlZ2VuZXJlciBsZSBkYXRhdGFibGUgYXZlYyBsZXMgbm91dmVsbGVzIGRhdGFcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy51cGRhdGVSb2xlJywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5fcGVyc29ubmVsX2RlcGFydGVtZW50X21vZGlmaWVyX2Ryb2l0Jywge3BlcnNvbm5lbDogJCgnI3BlcnNvbm5lbCcpLnZhbCgpfSksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YTogeydkcm9pdCc6ICQodGhpcykudmFsKCl9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBhZGRDYWxsb3V0KCdEcm9pdHMgbW9kaWZpw6lzICEnLCAnc3VjY2VzcycpXG4gICAgfVxuICB9KVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=