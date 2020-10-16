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
// @lastUpdate 16/10/2020 11:35


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGFuZy9mci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLnBlcnNvbm5lbHMuanMiXSwibmFtZXMiOlsiZGF0YVRhYmxlTGFuZ3VlRnIiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIkRhdGFUYWJsZSIsIm9uIiwiJHZhbCIsInZhbCIsImxlbmd0aCIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJuZWVkbGUiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJkYXRhIiwiZW1wdHkiLCJqUXVlcnkiLCJlYWNoIiwiaW5kZXgiLCJwZXJzIiwiaHRtbCIsIm5vbSIsInByZW5vbSIsIm51bWVyb0hhcnBlZ2UiLCJ1c2VybmFtZSIsIm1haWxfdW5pdiIsInNsdWciLCJhcHBlbmQiLCJjb25zb2xlIiwibG9nIiwiYWRkQ2FsbG91dCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCIkdHlwZSIsImxvYWQiLCJ0eXBlIiwibGFuZ3VhZ2UiLCJhdHRyIiwicGVyc29ubmVsIiwibWV0aG9kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxpQkFBaUIsR0FBRztBQUMvQixhQUFXLEVBRG9CO0FBRS9CLGdCQUFjLGlEQUZpQjtBQUcvQixVQUFRLGlHQUh1QjtBQUkvQixlQUFhLGdGQUprQjtBQUsvQixrQkFBZ0IsMERBTGU7QUFNL0IsaUJBQWUsRUFOZ0I7QUFPL0IsZUFBYSxHQVBrQjtBQVEvQixnQkFBYyx3Q0FSaUI7QUFTL0Isb0JBQWtCLHdCQVRhO0FBVS9CLGdCQUFjLHdCQVZpQjtBQVcvQixZQUFVLG1CQVhxQjtBQVkvQixpQkFBZSwrQ0FaZ0I7QUFhL0IsY0FBWTtBQUNWLGFBQVMsU0FEQztBQUVWLFlBQVEsU0FGRTtBQUdWLFlBQVEsU0FIRTtBQUlWLGdCQUFZO0FBSkYsR0FibUI7QUFtQi9CLFVBQVE7QUFDTixx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Q0FBUU0sR0FBUjtBQUFWLEtBSEQ7QUFJTFEsV0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3ZCZ0IsZ0JBQVUsQ0FBQyxtQkFBRCxFQUFzQixTQUF0QixDQUFWO0FBQ0Q7QUFOSSxHQUFQO0FBUUQsQ0FURCxFIiwiZmlsZSI6ImFkbS5wZXJzb25uZWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL2xhbmcvZnIuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAyMi8wNy8yMDIwIDE1OjEwXG5cbmV4cG9ydCBjb25zdCBkYXRhVGFibGVMYW5ndWVGciA9IHtcbiAgJ2RlY2ltYWwnOiAnJyxcbiAgJ2VtcHR5VGFibGUnOiAnQXVjdW5lIGRvbm4mZWFjdXRlO2UgZGlzcG9uaWJsZSBkYW5zIGxlIHRhYmxlYXUnLFxuICAnaW5mbyc6ICdBZmZpY2hhZ2UgZGUgbFxcJyZlYWN1dGU7bCZlYWN1dGU7bWVudCBfU1RBUlRfICZhZ3JhdmU7IF9FTkRfIHN1ciBfVE9UQUxfICZlYWN1dGU7bCZlYWN1dGU7bWVudHMnLFxuICAnaW5mb0VtcHR5JzogJ0FmZmljaGFnZSBkZSBsXFwnJmVhY3V0ZTtsJmVhY3V0ZTttZW50IDAgJmFncmF2ZTsgMCBzdXIgMCAmZWFjdXRlO2wmZWFjdXRlO21lbnQnLFxuICAnaW5mb0ZpbHRlcmVkJzogJyhmaWx0ciZlYWN1dGU7IGRlIF9NQVhfICZlYWN1dGU7bCZlYWN1dGU7bWVudHMgYXUgdG90YWwpJyxcbiAgJ2luZm9Qb3N0Rml4JzogJycsXG4gICd0aG91c2FuZHMnOiAnLCcsXG4gICdsZW5ndGhNZW51JzogJ0FmZmljaGVyIF9NRU5VXyAmZWFjdXRlO2wmZWFjdXRlO21lbnRzJyxcbiAgJ2xvYWRpbmdSZWNvcmRzJzogJ0NoYXJnZW1lbnQgZW4gY291cnMuLi4nLFxuICAncHJvY2Vzc2luZyc6ICdUcmFpdGVtZW50IGVuIGNvdXJzLi4uJyxcbiAgJ3NlYXJjaCc6ICdSZWNoZXJjaGVyJm5ic3A7OicsXG4gICd6ZXJvUmVjb3Jkcyc6ICdBdWN1biAmZWFjdXRlO2wmZWFjdXRlO21lbnQgJmFncmF2ZTsgYWZmaWNoZXInLFxuICAncGFnaW5hdGUnOiB7XG4gICAgJ2ZpcnN0JzogJ1ByZW1pZXInLFxuICAgICdsYXN0JzogJ0Rlcm5pZXInLFxuICAgICduZXh0JzogJ1N1aXZhbnQnLFxuICAgICdwcmV2aW91cyc6ICdQciZlYWN1dGU7YyZlYWN1dGU7ZGVudCdcbiAgfSxcbiAgJ2FyaWEnOiB7XG4gICAgJ3NvcnRBc2NlbmRpbmcnOiAnOiBhY3RpdmVyIHBvdXIgdHJpZXIgbGEgY29sb25uZSBwYXIgb3JkcmUgY3JvaXNzYW50JyxcbiAgICAnc29ydERlc2NlbmRpbmcnOiAnOiBhY3RpdmVyIHBvdXIgdHJpZXIgbGEgY29sb25uZSBwYXIgb3JkcmUgZCZlYWN1dGU7Y3JvaXNzYW50J1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvcGFnZXMvYWRtLnBlcnNvbm5lbHMuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxNi8xMC8yMDIwIDExOjM1XG5cbmltcG9ydCAnLi4vLi4vdmVuZG9yL2RhdGF0YWJsZXMnXG5pbXBvcnQge2RhdGFUYWJsZUxhbmd1ZUZyfSBmcm9tICcuLi9sYW5nL2ZyJ1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICQoJyN0YWJsZWF1JykuRGF0YVRhYmxlKHtcbiAgICAnbGFuZ3VlJzogZGF0YVRhYmxlTGFuZ3VlRnJcbiAgfSkgLy9yZWdlbmVyZXIgbGUgZGF0YXRhYmxlIGF2ZWMgbGVzIG5vdXZlbGxlcyBkYXRhXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI2xvZ2luX3VyY2EnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0ICR2YWwgPSAkKHRoaXMpLnZhbCgpXG4gIGlmICgkdmFsLmxlbmd0aCA+IDIpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcGlfcGVyc29ubmVsX3JlY2hlcmNoZScsIHtuZWVkbGU6ICR2YWx9KSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgICAgICQoJyNyZXN1bHQnKS5lbXB0eSgpXG4gICAgICAgIGpRdWVyeS5lYWNoKGRhdGEsIGZ1bmN0aW9uIChpbmRleCwgcGVycykge1xuICAgICAgICAgIGNvbnN0IGh0bWwgPSAnPHRyPicgK1xuICAgICAgICAgICAgJzx0ZD4nICsgcGVycy5ub20gKyAnPC90ZD4nICtcbiAgICAgICAgICAgICc8dGQ+JyArIHBlcnMucHJlbm9tICsgJzwvdGQ+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLm51bWVyb0hhcnBlZ2UgKyAnPC90ZD4nICtcbiAgICAgICAgICAgICc8dGQ+JyArIHBlcnMudXNlcm5hbWUgKyAnPC90ZD4nICtcbiAgICAgICAgICAgICc8dGQ+JyArIHBlcnMubWFpbF91bml2ICsgJzwvdGQ+JyArXG4gICAgICAgICAgICAnPHRkPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLW91dGxpbmUgYnRuLXNxdWFyZSBhZGRwZXJzb25uZWxcIiBkYXRhLXByb3ZpZGU9XCJ0b29sdGlwXCIgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT1cIkFqb3V0ZXIgYXUgZGVwYXJ0ZW1lbnRcIiBkYXRhLXNsdWc9XCInICsgcGVycy5zbHVnICsgJ1wiPjxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj48L2k+PC9hPjwvdGQ+JyArXG4gICAgICAgICAgICAnPC90cj4nXG4gICAgICAgICAgJCgnI3Jlc3VsdCcpLmFwcGVuZChodG1sKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYWRkcGVyc29ubmVsJywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX3BlcnNvbm5lbF9hZGRfdG9fZGVwYXJ0ZW1lbnQnLCB7c2x1ZzogJCh0aGlzKS5kYXRhKCdzbHVnJyl9KSxcbiAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgYWRkQ2FsbG91dCgnUGVyc29ubmVsIGFqb3V0w6kgYXUgZMOpcGFydGVtZW50ICEnLCAnc3VjY2VzcycpXG4gICAgfVxuICB9KVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5wZXJzb25uZWxfaW5kZXhfY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAkKCcucGVyc29ubmVsX2luZGV4X2NoYW5nZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUgc2hvdycpXG4gICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZSBzaG93JylcbiAgbGV0ICR0eXBlID0gJCh0aGlzKS5kYXRhKCd0eXBlJylcbiAgJCgnI2xpc3RlUGVyc29ubmVsJykubG9hZChSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wZXJzb25uZWxfbG9hZF9saXN0ZScsIHt0eXBlOiAkdHlwZX0pLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAkKCcjdGFibGVhdScpLkRhdGFUYWJsZSh7XG4gICAgICBsYW5ndWFnZTogZGF0YVRhYmxlTGFuZ3VlRnJcbiAgICB9KVxuXG4gICAgJCgnI2V4cG9ydF9jc3YnKS5hdHRyKCdocmVmJywgUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcGVyc29ubmVsX2V4cG9ydCcsIHtcbiAgICAgIHR5cGU6ICR0eXBlLFxuICAgICAgJ19mb3JtYXQnOiAnY3N2J1xuICAgIH0pKVxuICAgICQoJyNleHBvcnRfeGxzeCcpLmF0dHIoJ2hyZWYnLCBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wZXJzb25uZWxfZXhwb3J0Jywge1xuICAgICAgdHlwZTogJHR5cGUsXG4gICAgICAnX2Zvcm1hdCc6ICd4bHN4J1xuICAgIH0pKVxuICAgICQoJyNleHBvcnRfcGRmJykuYXR0cignaHJlZicsIFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3BlcnNvbm5lbF9leHBvcnQnLCB7XG4gICAgICB0eXBlOiAkdHlwZSxcbiAgICAgICdfZm9ybWF0JzogJ3BkZidcbiAgICB9KSlcbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLnVwZGF0ZVJvbGUnLCBmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbl9wZXJzb25uZWxfZGVwYXJ0ZW1lbnRfbW9kaWZpZXJfZHJvaXQnLCB7cGVyc29ubmVsOiAkKCcjcGVyc29ubmVsJykudmFsKCl9KSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBkYXRhOiB7J2Ryb2l0JzogJCh0aGlzKS52YWwoKX0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGFkZENhbGxvdXQoJ0Ryb2l0cyBtb2RpZmnDqXMgIScsICdzdWNjZXNzJylcbiAgICB9XG4gIH0pXG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==