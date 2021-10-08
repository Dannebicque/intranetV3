(self["webpackChunkintranetv3"] = self["webpackChunkintranetv3"] || []).push([["adm.articles"],{

/***/ "./assets/js/pages/adm.articles.js":
/*!*****************************************!*\
  !*** ./assets/js/pages/adm.articles.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/pages/adm.articles.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/09/2021 12:08
$(document).on('click', '#addCategorie', function () {
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
        var html = '<tr>\n' + '                        <td>' + categorie.libelle + '</td>\n' + '                        <td>' + categorie.nbArticles + '</td>\n' + '                        <td><a href="\n' + '                               data-csrf=""\n' + '                               class="btn btn-danger btn-outline btn-square supprimer"\n' + '                               data-provide="tooltip"\n' + '                               data-placement="bottom"\n' + '                               title="Supprimer la catégorie">\n' + '                                <i class="fas fa-trash-alt"></i>\n' + '                                <span class="sr-only">Supprimer la catégorie</span>\n' + '                            </a></td>\n' + '                    </tr>';
        table.append(html);
      });
      table.append('</tbody>');
      table.append('<tfoot>\n' + '                <tr>\n' + '                    <td><label for="libelle" class="sr-only">Libelle</label>\n' + '                        <input type="text" placeholder="Libellé de la catégorie" id="libelle" class="form-control"></td>\n' + '                    <td>&nbsp;</td>\n' + '                    <td>\n' + '                        <button class="btn btn-success btn-block" id="addCategorie">Ajouter catégorie</button>\n' + '                    </td>\n' + '                </tr>\n' + '                </tfoot>');
      table.dataTable({
        'language': dataTableLangueFr
      });
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/js/pages/adm.articles.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyYW5ldHYzLy4vYXNzZXRzL2pzL3BhZ2VzL2FkbS5hcnRpY2xlcy5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJvbiIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJkYXRhIiwibGliZWxsZSIsInZhbCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJ0YWJsZSIsImVtcHR5IiwiYXBwZW5kIiwialF1ZXJ5IiwiZWFjaCIsImluZGV4IiwiY2F0ZWdvcmllIiwiaHRtbCIsIm5iQXJ0aWNsZXMiLCJkYXRhVGFibGUiLCJkYXRhVGFibGVMYW5ndWVGciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsZUFBeEIsRUFBeUMsWUFBWTtBQUNuREYsR0FBQyxDQUFDRyxJQUFGLENBQU87QUFDTEMsT0FBRyxFQUFFQyxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsc0NBQWpCLENBREE7QUFFTDtBQUNBQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFUixDQUFDLENBQUMsVUFBRCxDQUFELENBQWNTLEdBQWQ7QUFETCxLQUhEO0FBTUxDLFVBQU0sRUFBRSxNQU5IO0FBT0xDLFdBQU8sRUFBRSxpQkFBVUosSUFBVixFQUFnQjtBQUN2QixVQUFNSyxLQUFLLEdBQUdaLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCYSxLQUF0QixFQUFkO0FBQ0FELFdBQUssQ0FBQ0UsTUFBTixDQUFhLGNBQ1osUUFEWSxHQUVYLG9CQUZXLEdBR2IsdUJBSGEsR0FJYixvQkFKYSxHQUtiLFNBTGEsR0FNYixVQU5hLEdBT1gsU0FQRjtBQVNBQyxZQUFNLENBQUNDLElBQVAsQ0FBWVQsSUFBWixFQUFrQixVQUFVVSxLQUFWLEVBQWlCQyxTQUFqQixFQUE0QjtBQUM1QyxZQUFNQyxJQUFJLEdBQUcsV0FDWCw4QkFEVyxHQUNzQkQsU0FBUyxDQUFDVixPQURoQyxHQUMwQyxTQUQxQyxHQUVYLDhCQUZXLEdBRXNCVSxTQUFTLENBQUNFLFVBRmhDLEdBRTZDLFNBRjdDLEdBR1gseUNBSFcsR0FJWCwrQ0FKVyxHQUtYLDBGQUxXLEdBTVgseURBTlcsR0FPWCwwREFQVyxHQVFYLGtFQVJXLEdBU1gsb0VBVFcsR0FVWCx1RkFWVyxHQVdYLHlDQVhXLEdBWVgsMkJBWkY7QUFhQVIsYUFBSyxDQUFDRSxNQUFOLENBQWFLLElBQWI7QUFDRCxPQWZEO0FBZ0JBUCxXQUFLLENBQUNFLE1BQU4sQ0FBYSxVQUFiO0FBQ0FGLFdBQUssQ0FBQ0UsTUFBTixDQUFhLGNBQ1gsd0JBRFcsR0FFWCxnRkFGVyxHQUdYLDRIQUhXLEdBSVgsdUNBSlcsR0FLWCw0QkFMVyxHQU1YLGtIQU5XLEdBT1gsNkJBUFcsR0FRWCx5QkFSVyxHQVNYLDBCQVRGO0FBVUFGLFdBQUssQ0FBQ1MsU0FBTixDQUFnQjtBQUNkLG9CQUFZQztBQURFLE9BQWhCO0FBR0Q7QUFoREksR0FBUDtBQWtERCxDQW5ERCxFIiwiZmlsZSI6ImFkbS5hcnRpY2xlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMS4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9wYWdlcy9hZG0uYXJ0aWNsZXMuanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAwOC8wOS8yMDIxIDEyOjA4XG5cblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNhZGRDYXRlZ29yaWUnLCBmdW5jdGlvbiAoKSB7XG4gICQuYWpheCh7XG4gICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhZG1pbmlzdHJhdGlvbl9hcnRpY2xlX2NhdGVnb3JpZV9hZGQnKSxcbiAgICAvL2RhdGFUeXBlOiAnanNvbicsXG4gICAgZGF0YToge1xuICAgICAgbGliZWxsZTogJCgnI2xpYmVsbGUnKS52YWwoKVxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGNvbnN0IHRhYmxlID0gJCgnI2xpc3RlQ2F0ZWdvcmllcycpLmVtcHR5KClcbiAgICAgIHRhYmxlLmFwcGVuZCgnPHRoZWFkPlxcbicgK1xuICAgICAgICc8dHI+XFxuJyArXG4gICAgICAgICc8dGg+TGliZWxsw6k8L3RoPlxcbicgK1xuICAgICAgJzx0aD5OYiBBcnRpY2xlPC90aD5cXG4nICtcbiAgICAgICc8dGg+QWN0aW9uczwvdGg+XFxuJyArXG4gICAgICAnPC90cj5cXG4nICtcbiAgICAgICc8L3RoZWFkPicgK1xuICAgICAgICAnPHRib2R5PicpXG5cbiAgICAgIGpRdWVyeS5lYWNoKGRhdGEsIGZ1bmN0aW9uIChpbmRleCwgY2F0ZWdvcmllKSB7XG4gICAgICAgIGNvbnN0IGh0bWwgPSAnPHRyPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JyArIGNhdGVnb3JpZS5saWJlbGxlICsgJzwvdGQ+XFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4nICsgY2F0ZWdvcmllLm5iQXJ0aWNsZXMgKyAnPC90ZD5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XCJcXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY3NyZj1cIlwiXFxuJyArXG4gICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1vdXRsaW5lIGJ0bi1zcXVhcmUgc3VwcHJpbWVyXCJcXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcHJvdmlkZT1cInRvb2x0aXBcIlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9XCJib3R0b21cIlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTdXBwcmltZXIgbGEgY2F0w6lnb3JpZVwiPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoLWFsdFwiPjwvaT5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5TdXBwcmltZXIgbGEgY2F0w6lnb3JpZTwvc3Bhbj5cXG4nICtcbiAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L3RkPlxcbicgK1xuICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDwvdHI+J1xuICAgICAgICB0YWJsZS5hcHBlbmQoaHRtbClcbiAgICAgIH0pXG4gICAgICB0YWJsZS5hcHBlbmQoJzwvdGJvZHk+JylcbiAgICAgIHRhYmxlLmFwcGVuZCgnPHRmb290PlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgIDx0cj5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPHRkPjxsYWJlbCBmb3I9XCJsaWJlbGxlXCIgY2xhc3M9XCJzci1vbmx5XCI+TGliZWxsZTwvbGFiZWw+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkxpYmVsbMOpIGRlIGxhIGNhdMOpZ29yaWVcIiBpZD1cImxpYmVsbGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPjwvdGQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgIDx0ZD4mbmJzcDs8L3RkPlxcbicgK1xuICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1ibG9ja1wiIGlkPVwiYWRkQ2F0ZWdvcmllXCI+QWpvdXRlciBjYXTDqWdvcmllPC9idXR0b24+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuJyArXG4gICAgICAgICcgICAgICAgICAgICAgICAgPC90cj5cXG4nICtcbiAgICAgICAgJyAgICAgICAgICAgICAgICA8L3Rmb290PicpXG4gICAgICB0YWJsZS5kYXRhVGFibGUoe1xuICAgICAgICAnbGFuZ3VhZ2UnOiBkYXRhVGFibGVMYW5ndWVGclxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59KVxuXG4iXSwic291cmNlUm9vdCI6IiJ9