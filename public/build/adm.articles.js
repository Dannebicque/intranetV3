(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adm.articles"],{

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

/***/ "./assets/js/pages/adm.articles.js":
/*!*****************************************!*\
  !*** ./assets/js/pages/adm.articles.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony import */ var _lang_fr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang/fr */ "./assets/js/lang/fr.js");
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.articles.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 14/10/2020 12:02

$(document).on('click', '#addCategorie', function () {
  if ($('#listeCategories').hasDataAttr('data-checkbox')) {
    var table = $('#listeCategories').DataTable();
    table.clear(); //effacer le datatable

    table.destroy(); //supprimer le datatable
  }

  $.ajax({
    url: Routing.generate('administration_article_categorie_add'),
    //dataType: 'json',
    data: {
      libelle: $('#libelle').val()
    },
    method: 'POST',
    success: function success(data) {
      var table = $('#listeCategories').empty();
      table.append('<thead>\n' + '<tr>\n' + '<th>Libellé</th>\n' + '<th>Nb Article</th>\n' + '<th>Actions</th>\n' + '</tr>\n' + '</thead>' + '<tbody>');
      jQuery.each(data, function (index, categorie) {
        var html = '<tr>\n' + '                        <td>' + categorie.libelle + '</td>\n' + '                        <td>' + categorie.nbArticles + '</td>\n' + '                        <td><a href="\n' + '                               data-csrf=""\n' + '                               class="btn btn-danger btn-outline btn-square supprimer"\n' + '                               data-provide="tooltip"\n' + '                               data-placement="bottom"\n' + '                               title="Supprimer la catégorie">\n' + '                                <i class="' + iconDelete + '"></i>\n' + '                                <span class="sr-only">Supprimer la catégorie</span>\n' + '                            </a></td>\n' + '                    </tr>';
        table.append(html);
      });
      table.append('</tbody>');
      table.append('<tfoot>\n' + '                <tr>\n' + '                    <td><label for="libelle" class="sr-only">Libelle</label>\n' + '                        <input type="text" placeholder="Libellé de la catégorie" id="libelle" class="form-control"></td>\n' + '                    <td>&nbsp;</td>\n' + '                    <td>\n' + '                        <button class="btn btn-success btn-block" id="addCategorie">Ajouter catégorie</button>\n' + '                    </td>\n' + '                </tr>\n' + '                </tfoot>');
      table.dataTable({
        'language': _lang_fr__WEBPACK_IMPORTED_MODULE_0__["dataTableLangueFr"]
      });
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/pages/adm.articles.js","runtime","vendors~absences~adm.absences~adm.alternances~adm.articles~adm.bornes~adm.configuration~adm.edt~adm.~b8aa102b"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbGFuZy9mci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvYWRtLmFydGljbGVzLmpzIl0sIm5hbWVzIjpbImRhdGFUYWJsZUxhbmd1ZUZyIiwiJCIsImRvY3VtZW50Iiwib24iLCJoYXNEYXRhQXR0ciIsInRhYmxlIiwiRGF0YVRhYmxlIiwiY2xlYXIiLCJkZXN0cm95IiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsImRhdGEiLCJsaWJlbGxlIiwidmFsIiwibWV0aG9kIiwic3VjY2VzcyIsImVtcHR5IiwiYXBwZW5kIiwialF1ZXJ5IiwiZWFjaCIsImluZGV4IiwiY2F0ZWdvcmllIiwiaHRtbCIsIm5iQXJ0aWNsZXMiLCJpY29uRGVsZXRlIiwiZGF0YVRhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxpQkFBaUIsR0FBRztBQUMvQixhQUFXLEVBRG9CO0FBRS9CLGdCQUFjLGlEQUZpQjtBQUcvQixVQUFRLGlHQUh1QjtBQUkvQixlQUFhLGdGQUprQjtBQUsvQixrQkFBZ0IsMERBTGU7QUFNL0IsaUJBQWUsRUFOZ0I7QUFPL0IsZUFBYSxHQVBrQjtBQVEvQixnQkFBYyx3Q0FSaUI7QUFTL0Isb0JBQWtCLHdCQVRhO0FBVS9CLGdCQUFjLHdCQVZpQjtBQVcvQixZQUFVLG1CQVhxQjtBQVkvQixpQkFBZSwrQ0FaZ0I7QUFhL0IsY0FBWTtBQUNWLGFBQVMsU0FEQztBQUVWLFlBQVEsU0FGRTtBQUdWLFlBQVEsU0FIRTtBQUlWLGdCQUFZO0FBSkYsR0FibUI7QUFtQi9CLFVBQVE7QUFDTixxQkFBaUIscURBRFg7QUFFTixzQkFBa0I7QUFGWjtBQW5CdUIsQ0FBMUIsQzs7Ozs7Ozs7Ozs7O0FDTlA7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBQyxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsT0FBZixFQUF3QixlQUF4QixFQUF5QyxZQUFZO0FBQ25ELE1BQUlGLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCRyxXQUF0QixDQUFrQyxlQUFsQyxDQUFKLEVBQXdEO0FBQ3RELFFBQU1DLEtBQUssR0FBR0osQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JLLFNBQXRCLEVBQWQ7QUFDQUQsU0FBSyxDQUFDRSxLQUFOLEdBRnNELENBRXhDOztBQUNkRixTQUFLLENBQUNHLE9BQU4sR0FIc0QsQ0FHdEM7QUFDakI7O0FBR0RQLEdBQUMsQ0FBQ1EsSUFBRixDQUFPO0FBQ0xDLE9BQUcsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLENBQWlCLHNDQUFqQixDQURBO0FBRUw7QUFDQUMsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRWIsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjYyxHQUFkO0FBREwsS0FIRDtBQU1MQyxVQUFNLEVBQUUsTUFOSDtBQU9MQyxXQUFPLEVBQUUsaUJBQVVKLElBQVYsRUFBZ0I7QUFDdkIsVUFBTVIsS0FBSyxHQUFHSixDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQmlCLEtBQXRCLEVBQWQ7QUFDQWIsV0FBSyxDQUFDYyxNQUFOLENBQWEsY0FDWixRQURZLEdBRVgsb0JBRlcsR0FHYix1QkFIYSxHQUliLG9CQUphLEdBS2IsU0FMYSxHQU1iLFVBTmEsR0FPWCxTQVBGO0FBU0FDLFlBQU0sQ0FBQ0MsSUFBUCxDQUFZUixJQUFaLEVBQWtCLFVBQVVTLEtBQVYsRUFBaUJDLFNBQWpCLEVBQTRCO0FBQzVDLFlBQU1DLElBQUksR0FBRyxXQUNYLDhCQURXLEdBQ3NCRCxTQUFTLENBQUNULE9BRGhDLEdBQzBDLFNBRDFDLEdBRVgsOEJBRlcsR0FFc0JTLFNBQVMsQ0FBQ0UsVUFGaEMsR0FFNkMsU0FGN0MsR0FHWCx5Q0FIVyxHQUlYLCtDQUpXLEdBS1gsMEZBTFcsR0FNWCx5REFOVyxHQU9YLDBEQVBXLEdBUVgsa0VBUlcsR0FTWCw0Q0FUVyxHQVNvQ0MsVUFUcEMsR0FTaUQsVUFUakQsR0FVWCx1RkFWVyxHQVdYLHlDQVhXLEdBWVgsMkJBWkY7QUFhQXJCLGFBQUssQ0FBQ2MsTUFBTixDQUFhSyxJQUFiO0FBQ0QsT0FmRDtBQWdCQW5CLFdBQUssQ0FBQ2MsTUFBTixDQUFhLFVBQWI7QUFDQWQsV0FBSyxDQUFDYyxNQUFOLENBQWEsY0FDWCx3QkFEVyxHQUVYLGdGQUZXLEdBR1gsNEhBSFcsR0FJWCx1Q0FKVyxHQUtYLDRCQUxXLEdBTVgsa0hBTlcsR0FPWCw2QkFQVyxHQVFYLHlCQVJXLEdBU1gsMEJBVEY7QUFVQWQsV0FBSyxDQUFDc0IsU0FBTixDQUFnQjtBQUNkLG9CQUFZM0IsMERBQWlCQTtBQURmLE9BQWhCO0FBR0Q7QUFoREksR0FBUDtBQWtERCxDQTFERCxFIiwiZmlsZSI6ImFkbS5hcnRpY2xlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9sYW5nL2ZyLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjIvMDcvMjAyMCAxNToxMFxuXG5leHBvcnQgY29uc3QgZGF0YVRhYmxlTGFuZ3VlRnIgPSB7XG4gICdkZWNpbWFsJzogJycsXG4gICdlbXB0eVRhYmxlJzogJ0F1Y3VuZSBkb25uJmVhY3V0ZTtlIGRpc3BvbmlibGUgZGFucyBsZSB0YWJsZWF1JyxcbiAgJ2luZm8nOiAnQWZmaWNoYWdlIGRlIGxcXCcmZWFjdXRlO2wmZWFjdXRlO21lbnQgX1NUQVJUXyAmYWdyYXZlOyBfRU5EXyBzdXIgX1RPVEFMXyAmZWFjdXRlO2wmZWFjdXRlO21lbnRzJyxcbiAgJ2luZm9FbXB0eSc6ICdBZmZpY2hhZ2UgZGUgbFxcJyZlYWN1dGU7bCZlYWN1dGU7bWVudCAwICZhZ3JhdmU7IDAgc3VyIDAgJmVhY3V0ZTtsJmVhY3V0ZTttZW50JyxcbiAgJ2luZm9GaWx0ZXJlZCc6ICcoZmlsdHImZWFjdXRlOyBkZSBfTUFYXyAmZWFjdXRlO2wmZWFjdXRlO21lbnRzIGF1IHRvdGFsKScsXG4gICdpbmZvUG9zdEZpeCc6ICcnLFxuICAndGhvdXNhbmRzJzogJywnLFxuICAnbGVuZ3RoTWVudSc6ICdBZmZpY2hlciBfTUVOVV8gJmVhY3V0ZTtsJmVhY3V0ZTttZW50cycsXG4gICdsb2FkaW5nUmVjb3Jkcyc6ICdDaGFyZ2VtZW50IGVuIGNvdXJzLi4uJyxcbiAgJ3Byb2Nlc3NpbmcnOiAnVHJhaXRlbWVudCBlbiBjb3Vycy4uLicsXG4gICdzZWFyY2gnOiAnUmVjaGVyY2hlciZuYnNwOzonLFxuICAnemVyb1JlY29yZHMnOiAnQXVjdW4gJmVhY3V0ZTtsJmVhY3V0ZTttZW50ICZhZ3JhdmU7IGFmZmljaGVyJyxcbiAgJ3BhZ2luYXRlJzoge1xuICAgICdmaXJzdCc6ICdQcmVtaWVyJyxcbiAgICAnbGFzdCc6ICdEZXJuaWVyJyxcbiAgICAnbmV4dCc6ICdTdWl2YW50JyxcbiAgICAncHJldmlvdXMnOiAnUHImZWFjdXRlO2MmZWFjdXRlO2RlbnQnXG4gIH0sXG4gICdhcmlhJzoge1xuICAgICdzb3J0QXNjZW5kaW5nJzogJzogYWN0aXZlciBwb3VyIHRyaWVyIGxhIGNvbG9ubmUgcGFyIG9yZHJlIGNyb2lzc2FudCcsXG4gICAgJ3NvcnREZXNjZW5kaW5nJzogJzogYWN0aXZlciBwb3VyIHRyaWVyIGxhIGNvbG9ubmUgcGFyIG9yZHJlIGQmZWFjdXRlO2Nyb2lzc2FudCdcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwLiB8IERhdmlkIEFubmViaWNxdWUgfCBJVVQgZGUgVHJveWVzICAtIEFsbCBSaWdodHMgUmVzZXJ2ZWRcbi8vIEBmaWxlIC9Vc2Vycy9kYXZpZGFubmViaWNxdWUvaHRkb2NzL2ludHJhbmV0VjMvYXNzZXRzL2pzL3BhZ2VzL2FkbS5hcnRpY2xlcy5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDE0LzEwLzIwMjAgMTI6MDJcblxuaW1wb3J0IHtkYXRhVGFibGVMYW5ndWVGcn0gZnJvbSAnLi4vbGFuZy9mcidcblxuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2FkZENhdGVnb3JpZScsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKCQoJyNsaXN0ZUNhdGVnb3JpZXMnKS5oYXNEYXRhQXR0cignZGF0YS1jaGVja2JveCcpKSB7XG4gICAgY29uc3QgdGFibGUgPSAkKCcjbGlzdGVDYXRlZ29yaWVzJykuRGF0YVRhYmxlKClcbiAgICB0YWJsZS5jbGVhcigpIC8vZWZmYWNlciBsZSBkYXRhdGFibGVcbiAgICB0YWJsZS5kZXN0cm95KCkgLy9zdXBwcmltZXIgbGUgZGF0YXRhYmxlXG4gIH1cblxuXG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9hcnRpY2xlX2NhdGVnb3JpZV9hZGQnKSxcbiAgICAvL2RhdGFUeXBlOiAnanNvbicsXG4gICAgZGF0YToge1xuICAgICAgbGliZWxsZTogJCgnI2xpYmVsbGUnKS52YWwoKVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGNvbnN0IHRhYmxlID0gJCgnI2xpc3RlQ2F0ZWdvcmllcycpLmVtcHR5KClcbiAgICAgIHRhYmxlLmFwcGVuZCgnPHRoZWFkPlxcbicgK1xuICAgICAgICc8dHI+XFxuJyArXG4gICAgICAgICc8dGg+TGliZWxsw6k8L3RoPlxcbicgK1xuICAgICAgJzx0aD5OYiBBcnRpY2xlPC90aD5cXG4nICtcbiAgICAgICc8dGg+QWN0aW9uczwvdGg+XFxuJyArXG4gICAgICAnPC90cj5cXG4nICtcbiAgICAgICc8L3RoZWFkPicgK1xuICAgICAgICAnPHRib2R5PicpXG5cbiAgICAgIGpRdWVyeS5lYWNoKGRhdGEsIGZ1bmN0aW9uIChpbmRleCwgY2F0ZWdvcmllKSB7XG4gICAgICAgIGNvbnN0IGh0bWwgPSAnPHRyPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JyArIGNhdGVnb3JpZS5saWJlbGxlICsgJzwvdGQ+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4nICsgY2F0ZWdvcmllLm5iQXJ0aWNsZXMgKyAnPC90ZD5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XCJcXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY3NyZj1cIlwiXFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1vdXRsaW5lIGJ0bi1zcXVhcmUgc3VwcHJpbWVyXCJcXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcHJvdmlkZT1cInRvb2x0aXBcIlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTdXBwcmltZXIgbGEgY2F0w6lnb3JpZVwiPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiJyArIGljb25EZWxldGUgKyAnXCI+PC9pPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlN1cHByaW1lciBsYSBjYXTDqWdvcmllPC9zcGFuPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvdGQ+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPC90cj4nXG4gICAgICAgIHRhYmxlLmFwcGVuZChodG1sKVxuICAgICAgfSlcbiAgICAgIHRhYmxlLmFwcGVuZCgnPC90Ym9keT4nKVxuICAgICAgdGFibGUuYXBwZW5kKCc8dGZvb3Q+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgPHRyPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8dGQ+PGxhYmVsIGZvcj1cImxpYmVsbGVcIiBjbGFzcz1cInNyLW9ubHlcIj5MaWJlbGxlPC9sYWJlbD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTGliZWxsw6kgZGUgbGEgY2F0w6lnb3JpZVwiIGlkPVwibGliZWxsZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+PC90ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPHRkPiZuYnNwOzwvdGQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLWJsb2NrXCIgaWQ9XCJhZGRDYXRlZ29yaWVcIj5Bam91dGVyIGNhdMOpZ29yaWU8L2J1dHRvbj5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICA8L3RyPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgIDwvdGZvb3Q+JylcbiAgICAgIHRhYmxlLmRhdGFUYWJsZSh7XG4gICAgICAgICdsYW5ndWFnZSc6IGRhdGFUYWJsZUxhbmd1ZUZyXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=