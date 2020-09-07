(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adm.personnels"],{

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

},[["./assets/js/pages/adm.personnels.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~cf684355","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~865432e1","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~86470384","vendors~absences~adm.absences~adm.alternances~adm.bornes~adm.configuration~adm.edt~adm.etudiants~adm~2e82efb8","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~adm.stage~app~datatable~sadm.personnels","vendors~absences~adm.absences~adm.edt~adm.etudiants~adm.personnels~app~datatable~sadm.personnels","vendors~absences~adm.absences~adm.etudiants~adm.personnels~datatable~sadm.personnels","absences~adm.absences~adm.etudiants~adm.personnels~datatable~sadm.personnels"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLnBlcnNvbm5lbHMuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJEYXRhVGFibGUiLCJkYXRhVGFibGVMYW5ndWVGciIsIm9uIiwiJHZhbCIsInZhbCIsImxlbmd0aCIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJuZWVkbGUiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJkYXRhIiwiZW1wdHkiLCJqUXVlcnkiLCJlYWNoIiwiaW5kZXgiLCJwZXJzIiwiaHRtbCIsIm5vbSIsInByZW5vbSIsIm51bWVyb0hhcnBlZ2UiLCJ1c2VybmFtZSIsIm1haWxfdW5pdiIsInNsdWciLCJhcHBlbmQiLCJjb25zb2xlIiwibG9nIiwiYWRkQ2FsbG91dCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJ0YWJsZSIsImNsZWFyIiwiZGVzdHJveSIsIiR0eXBlIiwidHlwZSIsInBvc3RlSW50ZXJuZSIsInRlbEJ1cmVhdSIsImJ1cmVhdTEiLCJtYWlsVW5pdiIsImlkIiwiYXR0ciIsInBlcnNvbm5lbCIsIm1ldGhvZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUM1QkYsR0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjRyxTQUFkLENBQXdCO0FBQ3RCLGNBQVVDLDBEQUFpQkE7QUFETCxHQUF4QixFQUQ0QixDQUd6QjtBQUNKLENBSkQ7QUFNQUosQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUksRUFBWixDQUFlLE9BQWYsRUFBd0IsYUFBeEIsRUFBdUMsWUFBWTtBQUNqRCxNQUFNQyxJQUFJLEdBQUdOLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU8sR0FBUixFQUFiOztBQUNBLE1BQUlELElBQUksQ0FBQ0Us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c0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL2FkbS5wZXJzb25uZWxzLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjYvMDgvMjAyMCAxMjowN1xuXG5pbXBvcnQgJy4uLy4uL3ZlbmRvci9kYXRhdGFibGVzJ1xuaW1wb3J0IHtkYXRhVGFibGVMYW5ndWVGcn0gZnJvbSAnLi4vbGFuZy9mcidcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAkKCcjdGFibGVhdScpLkRhdGFUYWJsZSh7XG4gICAgJ2xhbmd1ZSc6IGRhdGFUYWJsZUxhbmd1ZUZyXG4gIH0pIC8vcmVnZW5lcmVyIGxlIGRhdGF0YWJsZSBhdmVjIGxlcyBub3V2ZWxsZXMgZGF0YVxufSlcblxuJChkb2N1bWVudCkub24oJ2tleXVwJywgJyNsb2dpbl91cmNhJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCAkdmFsID0gJCh0aGlzKS52YWwoKVxuICBpZiAoJHZhbC5sZW5ndGggPiAyKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX3BlcnNvbm5lbF9yZWNoZXJjaGUnLCB7bmVlZGxlOiAkdmFsfSksXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgICAgICAkKCcjcmVzdWx0JykuZW1wdHkoKVxuICAgICAgICBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbiAoaW5kZXgsIHBlcnMpIHtcbiAgICAgICAgICBjb25zdCBodG1sID0gJzx0cj4nICtcbiAgICAgICAgICAgICc8dGQ+JyArIHBlcnMubm9tICsgJzwvdGQ+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLnByZW5vbSArICc8L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD4nICsgcGVycy5udW1lcm9IYXJwZWdlICsgJzwvdGQ+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLnVzZXJuYW1lICsgJzwvdGQ+JyArXG4gICAgICAgICAgICAnPHRkPicgKyBwZXJzLm1haWxfdW5pdiArICc8L3RkPicgK1xuICAgICAgICAgICAgJzx0ZD48YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1vdXRsaW5lIGJ0bi1zcXVhcmUgYWRkcGVyc29ubmVsXCIgZGF0YS1wcm92aWRlPVwidG9vbHRpcFwiIGRhdGEtcGxhY2VtZW50PVwiYm90dG9tXCIgdGl0bGU9XCJBam91dGVyIGF1IGRlcGFydGVtZW50XCIgZGF0YS1zbHVnPVwiJyArIHBlcnMuc2x1ZyArICdcIj48aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPjwvYT48L3RkPicgK1xuICAgICAgICAgICAgJzwvdHI+J1xuICAgICAgICAgICQoJyNyZXN1bHQnKS5hcHBlbmQoaHRtbClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmFkZHBlcnNvbm5lbCcsIGZ1bmN0aW9uICgpIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwaV9wZXJzb25uZWxfYWRkX3RvX2RlcGFydGVtZW50Jywge3NsdWc6ICQodGhpcykuZGF0YSgnc2x1ZycpfSksXG4gICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgIGFkZENhbGxvdXQoJ1BlcnNvbm5lbCBham91dMOpIGF1IGTDqXBhcnRlbWVudCAhJywgJ3N1Y2Nlc3MnKVxuICAgIH1cbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucGVyc29ubmVsX2luZGV4X2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgJCgnLnBlcnNvbm5lbF9pbmRleF9jaGFuZ2UnKS5yZW1vdmVDbGFzcygnYWN0aXZlIHNob3cnKVxuICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUgc2hvdycpXG4gIGNvbnN0IHRhYmxlID0gJCgnI3RhYmxlYXUnKS5EYXRhVGFibGUoKVxuICB0YWJsZS5jbGVhcigpIC8vZWZmYWNlciBsZSBkYXRhdGFibGVcbiAgdGFibGUuZGVzdHJveSgpIC8vc3VwcHJpbWVyIGxlIGRhdGF0YWJsZVxuICBsZXQgJHR5cGUgPSAkKHRoaXMpLmRhdGEoJ3R5cGUnKVxuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBpX2Vuc2VpZ25hbnRzX3R5cGUnLCB7dHlwZTogJHR5cGV9KSxcbiAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbiAoaW5kZXgsIHBlcnMpIHtcbiAgICAgICAgLy9ham91dGVyIGxlcyBsaWduZXNcbiAgICAgICAgY29uc3QgaHRtbCA9ICc8dHI+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4nICsgcGVycy5ub20gKyAnPC90ZD5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHRkPicgKyBwZXJzLnByZW5vbSArICc8L3RkPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JyArIHBlcnMucG9zdGVJbnRlcm5lICsgJzwvdGQ+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4nICsgcGVycy50ZWxCdXJlYXUgKyAnPC90ZD5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHRkPicgKyBwZXJzLmJ1cmVhdTEgKyAnPC90ZD5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHRkPicgKyBwZXJzLm51bWVyb0hhcnBlZ2UgKyAnPC90ZD5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHRkPicgKyBwZXJzLm1haWxVbml2ICsgJzwvdGQ+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4nICtcbiAgICAgICAgICAnPGEgaHJlZj1cIicgKyBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wZXJzb25uZWxfc2hvdycsIHtpZDogcGVycy5pZH0pICsgJ1wiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvIGJ0bi1vdXRsaW5lIGJ0bi1zcXVhcmVcIiBkYXRhLXByb3ZpZGU9XCJ0b29sdGlwXCJcXG4nICtcbiAgICAgICAgICAnICAgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIiB0aXRsZT1cIkTDqXRhaWxzXCI+PGkgY2xhc3M9XCJmYSBmYS1pbmZvXCI+PC9pPjwvYT5cXG4nICtcbiAgICAgICAgICAnPGEgaHJlZj1cIicgKyBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wZXJzb25uZWxfZWRpdCcsIHtpZDogcGVycy5pZH0pICsgJ1wiXFxuJyArXG4gICAgICAgICAgJyAgIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1vdXRsaW5lIGJ0bi1zcXVhcmVcIj48aSBjbGFzcz1cImZhIGZhLWVkaXRcIlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcHJvdmlkZT1cInRvb2x0aXBcIlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGxhY2VtZW50PVwiYm90dG9tXCJcXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk1vZGlmaWVyXCI+PC9pPjwvYT5cXG4nICtcbiAgICAgICAgICAnPGEgaHJlZj1cIicgKyBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wZXJzb25uZWxfZGVsZXRlJywge2lkOiBwZXJzLmlkfSkgKyAnXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tb3V0bGluZSBidG4tc3F1YXJlIHN1cHByaW1lclwiIGRhdGEtaWQ9XCJpZFwiPjxpXFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgIGNsYXNzPVwiZmEgZmEtdHJhc2hcIiBkYXRhLXByb3ZpZGU9XCJ0b29sdGlwXCIgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICB0aXRsZT1cIlN1cHByaW1lclwiPjwvaT48L2E+JyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPC90cj4nXG4gICAgICAgICQoJyNkYXRhdGFibGVhdScpLmFwcGVuZChodG1sKVxuICAgICAgfSlcblxuICAgICAgJCgnI2V4cG9ydF9jc3YnKS5hdHRyKCdocmVmJywgUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5pc3RyYXRpb25fcGVyc29ubmVsX2V4cG9ydCcsIHtcbiAgICAgICAgdHlwZTogJHR5cGUsXG4gICAgICAgICdfZm9ybWF0JzogJ2NzdidcbiAgICAgIH0pKVxuICAgICAgJCgnI2V4cG9ydF94bHN4JykuYXR0cignaHJlZicsIFJvdXRpbmcuZ2VuZXJhdGUoJ2FkbWluaXN0cmF0aW9uX3BlcnNvbm5lbF9leHBvcnQnLCB7XG4gICAgICAgIHR5cGU6ICR0eXBlLFxuICAgICAgICAnX2Zvcm1hdCc6ICd4bHN4J1xuICAgICAgfSkpXG4gICAgICAkKCcjZXhwb3J0X3BkZicpLmF0dHIoJ2hyZWYnLCBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9wZXJzb25uZWxfZXhwb3J0Jywge1xuICAgICAgICB0eXBlOiAkdHlwZSxcbiAgICAgICAgJ19mb3JtYXQnOiAncGRmJ1xuICAgICAgfSkpXG5cbiAgICAgICQoJyN0YWJsZWF1JykuRGF0YVRhYmxlKHtcbiAgICAgICAgJ2xhbmd1ZSc6IGRhdGFUYWJsZUxhbmd1ZUZyXG4gICAgICB9KSAvL3JlZ2VuZXJlciBsZSBkYXRhdGFibGUgYXZlYyBsZXMgbm91dmVsbGVzIGRhdGFcbiAgICB9XG4gIH0pXG59KVxuXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy51cGRhdGVSb2xlJywgZnVuY3Rpb24gKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYWRtaW5fcGVyc29ubmVsX2RlcGFydGVtZW50X21vZGlmaWVyX2Ryb2l0Jywge3BlcnNvbm5lbDogJCgnI3BlcnNvbm5lbCcpLnZhbCgpfSksXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgZGF0YTogeydkcm9pdCc6ICQodGhpcykudmFsKCl9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBhZGRDYWxsb3V0KCdEcm9pdHMgbW9kaWZpw6lzICEnLCAnc3VjY2VzcycpXG4gICAgfVxuICB9KVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=