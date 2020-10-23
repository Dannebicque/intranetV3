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

/***/ })

},[["./assets/js/pages/adm.personnels.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~d677a9f6","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~6af3b135","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~3a8cbb67","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~7452d955","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~adm.stage~agenda~app~datatable~sa~a52fa8c5","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~agenda~app~datatable~sadm.personnels","vendors~absences~adm.absences~adm.etudiants~adm.personnels~agenda~datatable~sadm.personnels","absences~adm.absences~adm.etudiants~adm.personnels~agenda~datatable~sadm.personnels"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGFuZy9mci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLnBlcnNvbm5lbHMuanMiXSwibmFtZXMiOlsiZGF0YVRhYmxlTGFuZ3VlRnIiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIkRhdGFUYWJsZSIsIm9uIiwiJHZhbCIsInZhbCIsImxlbmd0aCIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJuZWVkbGUiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJkYXRhIiwiaHRtbCIsImVtcHR5IiwialF1ZXJ5IiwiZWFjaCIsImluZGV4IiwicGVycyIsIm5vbSIsInByZW5vbSIsIm51bWVyb0hhcnBlZ2UiLCJ1c2VybmFtZSIsIm1haWxfdW5pdiIsInNsdWciLCJhcHBlbmQiLCJjb25zb2xlIiwibG9nIiwiYWRkQ2FsbG91dCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCIkdHlwZSIsImxvYWQiLCJ0eXBlIiwibGFuZ3VhZ2UiLCJhdHRyIiwicGVyc29ubmVsIiwibWV0aG9kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxpQkFBaUIsR0FBRztBQUMvQixhQUFXLEVBRG9CO0FBRS9CLGdCQUFjLGlEQUZpQjtBQUcvQixVQUFRLGlHQUh1QjtBQUkvQixlQUFhLGdGQUprQjtBQUsvQixrQkFBZ0IsMERBTGU7QUFNL0IsaUJBQWUsRUFOZ0I7QUFPL0IsZUFBYSxHQVBrQjtBQVEvQixnQkFBYyx3Q0FSaUI7QUFTL0Isb0JBQWtCLHdCQVRhO0FBVS9CLGdCQUFjLHdCQVZpQjtBQVcvQixZQUFVLG1CQVhxQjtBQVkvQixpQkFBZSwrQ0FaZ0I7QUFhL0IsY0FBWTtBQUNWLGFBQVMsU0FEQztBQUVWLFlBQVEsU0FGRTtBQUdWLFlBQVEsU0FIRTtBQUlWLGdCQUFZO0FBSkYsR0FibUI7QUFtQi9CLFVBQVE7QUFDTixx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NENBQWpCLEVBQStEO0FBQUM0QixlQUFTLEVBQUV2QyxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCTSxHQUFoQjtBQUFaLEtBQS9ELENBREE7QUFFTGtDLFVBQU0sRUFBRSxNQUZIO0FBR0x6QixRQUFJLEVBQUU7QUFBQyxlQUFTZixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLEdBQVI7QUFBVixLQUhEO0FBSUxRLFdBQU8sRUFBRSxpQkFBVUMsSUFBVixFQUFnQjtBQUN2QmdCLGdCQUFVLENBQUMsbUJBQUQsRUFBc0IsU0FBdEIsQ0FBVjtBQUNEO0FBTkksR0FBUDtBQVFELENBVEQsRSIsImZpbGUiOiJhZG0ucGVyc29ubmVscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9sYW5nL2ZyLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjIvMDcvMjAyMCAxNToxMFxuXG5leHBvcnQgY29uc3QgZGF0YVRhYmxlTGFuZ3VlRnIgPSB7XG4gICdkZWNpbWFsJzogJycsXG4gICdlbXB0eVRhYmxlJzogJ0F1Y3VuZSBkb25uJmVhY3V0ZTtlIGRpc3BvbmlibGUgZGFucyBsZSB0YWJsZWF1JyxcbiAgJ2luZm8nOiAnQWZmaWNoYWdlIGRlIGxcXCcmZWFjdXRlO2wmZWFjdXRlO21lbnQgX1NUQVJUXyAmYWdyYXZlOyBfRU5EXyBzdXIgX1RPVEFMXyAmZWFjdXRlO2wmZWFjdXRlO21lbnRzJyxcbiAgJ2luZm9FbXB0eSc6ICdBZmZpY2hhZ2UgZGUgbFxcJyZlYWN1dGU7bCZlYWN1dGU7bWVudCAwICZhZ3JhdmU7IDAgc3VyIDAgJmVhY3V0ZTtsJmVhY3V0ZTttZW50JyxcbiAgJ2luZm9GaWx0ZXJlZCc6ICcoZmlsdHImZWFjdXRlOyBkZSBfTUFYXyAmZWFjdXRlO2wmZWFjdXRlO21lbnRzIGF1IHRvdGFsKScsXG4gICdpbmZvUG9zdEZpeCc6ICcnLFxuICAndGhvdXNhbmRzJzogJywnLFxuICAnbGVuZ3RoTWVudSc6ICdBZmZpY2hlciBfTUVOVV8gJmVhY3V0ZTtsJmVhY3V0ZTttZW50cycsXG4gICdsb2FkaW5nUmVjb3Jkcyc6ICdDaGFyZ2VtZW50IGVuIGNvdXJzLi4uJyxcbiAgJ3Byb2Nlc3NpbmcnOiAnVHJhaXRlbWVudCBlbiBjb3Vycy4uLicsXG4gICdzZWFyY2gnOiAnUmVjaGVyY2hlciZuYnNwOzonLFxuICAnemVyb1JlY29yZHMnOiAnQXVjdW4gJmVhY3V0ZTtsJmVhY3V0ZTttZW50ICZhZ3JhdmU7IGFmZmljaGVyJyxcbiAgJ3BhZ2luYXRlJzoge1xuICAgICdmaXJzdCc6ICdQcmVtaWVyJyxcbiAgICAnbGFzdCc6ICdEZXJuaWVyJyxcbiAgICAnbmV4dCc6ICdTdWl2YW50JyxcbiAgICAncHJldmlvdXMnOiAnUHImZWFjdXRlO2MmZWFjdXRlO2RlbnQnXG4gIH0sXG4gICdhcmlhJzoge1xuICAgICdzb3J0QXNjZW5kaW5nJzogJzogYWN0aXZlciBwb3VyIHRyaWVyIGxhIGNvbG9ubmUgcGFyIG9yZHJlIGNyb2lzc2FudCcsXG4gICAgJ3NvcnREZXNjZW5kaW5nJzogJzogYWN0aXZlciBwb3VyIHRyaWVyIGxhIGNvbG9ubmUgcGFyIG9yZHJlIGQmZWFjdXRlO2Nyb2lzc2FudCdcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL2FkbS5wZXJzb25uZWxzLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjIvMTAvMjAyMCAxNTo1NlxuXG5pbXBvcnQgJy4uLy4uL3ZlbmRvci9kYXRhdGFibGVzJ1xuaW1wb3J0IHtkYXRhVGFibGVMYW5ndWVGcn0gZnJvbSAnLi4vbGFuZy9mcidcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAkKCcjdGFibGVhdScpLkRhdGFUYWJsZSh7XG4gICAgJ2xhbmd1ZSc6IGRhdGFUYWJsZUxhbmd1ZUZyXG4gIH0pIC8vcmVnZW5lcmVyIGxlIGRhdGF0YWJsZSBhdmVjIGxlcyBub3V2ZWxsZXMgZGF0YVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNsb2dpbl91cmNhJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCAkdmFsID0gJCh0aGlzKS52YWwoKVxuICBpZiAoJHZhbC5sZW5ndGggPiAyKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX3BlcnNvbm5lbF9yZWNoZXJjaGUnLCB7bmVlZGxlOiAkdmFsfSksXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgbGV0IGh0bWwgPSAnJ1xuICAgICAgICAkKCcjcmVzdWx0JykuZW1wdHkoKVxuICAgICAgICBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbiAoaW5kZXgsIHBlcnMpIHtcbiAgICAgICAgICBodG1sID0gaHRtbCArICc8dHI+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLm5vbSArICc8L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD4nICsgcGVycy5wcmVub20gKyAnPC90ZD4nICtcbiAgICAgICAgICAgICc8dGQ+JyArIHBlcnMubnVtZXJvSGFycGVnZSArICc8L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD4nICsgcGVycy51c2VybmFtZSArICc8L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD4nICsgcGVycy5tYWlsX3VuaXYgKyAnPC90ZD4nICtcbiAgICAgICAgICAgICc8dGQ+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tb3V0bGluZSBidG4tc3F1YXJlIGFkZHBlcnNvbm5lbFwiIGRhdGEtcHJvdmlkZT1cInRvb2x0aXBcIiBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiIHRpdGxlPVwiQWpvdXRlciBhdSBkZXBhcnRlbWVudFwiIGRhdGEtc2x1Zz1cIicgKyBwZXJzLnNsdWcgKyAnXCI+PGkgY2xhc3M9XCJmYXMgZmEtcGx1c1wiPjwvaT48L2E+PC90ZD4nICtcbiAgICAgICAgICAgICc8L3RyPidcblxuICAgICAgICB9KVxuXG4gICAgICAgIGh0bWwgPSBodG1sICsgJzx0cj4nICtcbiAgICAgICAgICAnPHRkIGNvbHNwYW49XCI2XCI+PGEgaHJlZj1cIicgKyBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wZXJzb25uZWxfY3JlYXRlJykgKyAnXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWJsb2NrXCIgZGF0YS1wcm92aWRlPVwidG9vbHRpcFwiIGRhdGEtcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9XCJBam91dGVyIHVuIGludGVydmVuYW50XCI+PGkgY2xhc3M9XCJmYXMgZmEtcGx1c1wiPjwvaT4gU2kgbFxcJ2ludGVybnZlbmFudCBuXFwnZXN0IHBhcyBwcsOpc2VudCBkYW5zIGxcXCdpbnRyYW5ldCB2b3VzIHBvdXZleiBsXFwnYWpvdXRlcjwvYT48L3RkPicgK1xuICAgICAgICAgICc8L3RyPidcbiAgICAgICAgJCgnI3Jlc3VsdCcpLmFwcGVuZChodG1sKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYWRkcGVyc29ubmVsJywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX3BlcnNvbm5lbF9hZGRfdG9fZGVwYXJ0ZW1lbnQnLCB7c2x1ZzogJCh0aGlzKS5kYXRhKCdzbHVnJyl9KSxcbiAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgYWRkQ2FsbG91dCgnUGVyc29ubmVsIGFqb3V0w6kgYXUgZMOpcGFydGVtZW50ICEnLCAnc3VjY2VzcycpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5wZXJzb25uZWxfaW5kZXhfY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAkKCcucGVyc29ubmVsX2luZGV4X2NoYW5nZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUgc2hvdycpXG4gICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZSBzaG93JylcbiAgbGV0ICR0eXBlID0gJCh0aGlzKS5kYXRhKCd0eXBlJylcbiAgJCgnI2xpc3RlUGVyc29ubmVsJykubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wZXJzb25uZWxfbG9hZF9saXN0ZScsIHt0eXBlOiAkdHlwZX0pLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAkKCcjdGFibGVhdScpLkRhdGFUYWJsZSh7XG4gICAgICBsYW5ndWFnZTogZGF0YVRhYmxlTGFuZ3VlRnJcbiAgICB9KVxuXG4gICAgJCgnI2V4cG9ydF9jc3YnKS5hdHRyKCdocmVmJywgUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcGVyc29ubmVsX2V4cG9ydCcsIHtcbiAgICAgIHR5cGU6ICR0eXBlLFxuICAgICAgJ19mb3JtYXQnOiAnY3N2J1xuICAgIH0pKVxuICAgICQoJyNleHBvcnRfeGxzeCcpLmF0dHIoJ2hyZWYnLCBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wZXJzb25uZWxfZXhwb3J0Jywge1xuICAgICAgdHlwZTogJHR5cGUsXG4gICAgICAnX2Zvcm1hdCc6ICd4bHN4J1xuICAgIH0pKVxuICAgICQoJyNleHBvcnRfcGRmJykuYXR0cignaHJlZicsIFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3BlcnNvbm5lbF9leHBvcnQnLCB7XG4gICAgICB0eXBlOiAkdHlwZSxcbiAgICAgICdfZm9ybWF0JzogJ3BkZidcbiAgICB9KSlcbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLnVwZGF0ZVJvbGUnLCBmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbl9wZXJzb25uZWxfZGVwYXJ0ZW1lbnRfbW9kaWZpZXJfZHJvaXQnLCB7cGVyc29ubmVsOiAkKCcjcGVyc29ubmVsJykudmFsKCl9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7J2Ryb2l0JzogJCh0aGlzKS52YWwoKX0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0Ryb2l0cyBtb2RpZmnDqXMgIScsICdzdWNjZXNzJylcbiAgICB9XG4gIH0pXG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==